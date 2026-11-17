import { useId, useState } from "react";
import { useTranslation } from "react-i18next";
import { ModalInput, ModalSelect } from "@/components/lib/Modal";
import {
  parseCronToBuilderState,
  buildCronFromBuilderState,
  getTimezoneAbbreviation,
} from "../utils/cron";

const MINUTE_INTERVALS = [1, 2, 5, 10, 15, 20, 30];
const MINUTES = Array.from({ length: 60 }, (_, i) => i);
const DAYS_OF_MONTH = Array.from({ length: 31 }, (_, i) => i + 1);
const FREQUENCIES = ["minute", "hour", "day", "week", "month"];
// Cron weekday numbers, shown Monday first.
const WEEK_ORDER = [1, 2, 3, 4, 5, 6, 0];
const WEEKDAY_KEYS = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

const pad2 = (n) => String(n).padStart(2, "0");

/** Full weekday name in the UI language (accessible name of each day toggle). */
function weekdayName(day, language) {
  try {
    return new Intl.DateTimeFormat(language, {
      weekday: "long",
      timeZone: "UTC",
    }).format(new Date(Date.UTC(2023, 0, 1 + day))); // 2023-01-01 was a Sunday
  } catch {
    return undefined;
  }
}

// Visual cron builder. Maintains its own state derived from the incoming
// `value` on mount, and emits a fresh 5-field cron string via `onChange`
// whenever the user changes any sub-field. Times are local; the emitted cron
// is UTC.
export default function CronBuilder({ value, onChange }) {
  const { t, i18n } = useTranslation();
  const [initial] = useState(() => parseCronToBuilderState(value));
  const [state, setState] = useState(initial.state);
  const [wasFallback, setWasFallback] = useState(initial.wasFallback);
  const [lastDayWarning, setLastDayWarning] = useState(false);
  const daysLabelId = useId();
  const daysNoteId = useId();

  const update = (patch) => {
    const next = { ...state, ...patch };
    setState(next);
    setLastDayWarning(false);
    if (wasFallback) setWasFallback(false);
    const cron = buildCronFromBuilderState(next);
    if (cron !== value) onChange(cron);
  };

  const toggleDay = (day) => {
    const selected = state.weekdays.includes(day);
    if (selected && state.weekdays.length === 1) {
      setLastDayWarning(true);
      return;
    }
    update({
      weekdays: selected
        ? state.weekdays.filter((d) => d !== day)
        : [...state.weekdays, day],
    });
  };

  return (
    <div className="flex flex-col gap-4 p-3 rounded-lg border border-zinc-700 light:border-slate-300">
      {wasFallback && (
        <p className="text-xs text-amber-300 light:text-amber-800">
          {t("scheduledJobs.builder.fallbackWarning")}
        </p>
      )}

      <ModalSelect
        label={t("scheduledJobs.builder.run")}
        value={state.frequency}
        onChange={(e) => update({ frequency: e.target.value })}
      >
        {FREQUENCIES.map((frequency) => (
          <option key={frequency} value={frequency}>
            {t(`scheduledJobs.builder.frequency.${frequency}`)}
          </option>
        ))}
      </ModalSelect>

      {state.frequency === "minute" && (
        <ModalSelect
          label={t("scheduledJobs.builder.every")}
          value={state.minuteInterval}
          onChange={(e) =>
            update({ minuteInterval: parseInt(e.target.value, 10) })
          }
        >
          {MINUTE_INTERVALS.map((n) => (
            <option key={n} value={n}>
              {n === 1
                ? t("scheduledJobs.builder.minuteOne")
                : t("scheduledJobs.builder.minuteOther", { count: n })}
            </option>
          ))}
        </ModalSelect>
      )}

      {state.frequency === "hour" && (
        <ModalSelect
          label={t("scheduledJobs.builder.atMinute")}
          value={state.hourMinuteOffset}
          onChange={(e) =>
            update({ hourMinuteOffset: parseInt(e.target.value, 10) })
          }
        >
          {MINUTES.map((n) => (
            <option key={n} value={n}>
              {pad2(n)}
            </option>
          ))}
        </ModalSelect>
      )}

      {(state.frequency === "day" ||
        state.frequency === "week" ||
        state.frequency === "month") && (
        <ModalInput
          type="time"
          label={t("scheduledJobs.builder.at")}
          hint={t("scheduledJobs.builder.localTime", {
            zone: getTimezoneAbbreviation(),
          })}
          value={`${pad2(state.hour)}:${pad2(state.minute)}`}
          onChange={(e) => {
            if (!e.target.value) return;
            const [h, m] = e.target.value.split(":");
            update({
              hour: parseInt(h, 10) || 0,
              minute: parseInt(m, 10) || 0,
            });
          }}
          className="[color-scheme:dark] light:[color-scheme:light]"
        />
      )}

      {state.frequency === "week" && (
        <div className="flex flex-col gap-y-1.5">
          <span
            id={daysLabelId}
            className="text-sm font-medium text-zinc-50 light:text-slate-700"
          >
            {t("scheduledJobs.builder.on")}
          </span>
          <div
            role="group"
            aria-labelledby={daysLabelId}
            aria-describedby={daysNoteId}
            className="flex flex-wrap gap-1"
          >
            {WEEK_ORDER.map((day) => {
              const selected = state.weekdays.includes(day);
              return (
                <button
                  key={day}
                  type="button"
                  aria-pressed={selected}
                  aria-label={weekdayName(day, i18n.language)}
                  onClick={() => toggleDay(day)}
                  className={`min-h-[44px] min-w-[44px] md:min-h-[32px] md:min-w-[44px] px-3 text-sm rounded-full border transition-colors duration-quick ease-smooth ${
                    selected
                      ? "border-transparent bg-zinc-50 text-zinc-950 light:bg-slate-900 light:text-white font-medium"
                      : "border-zinc-500 light:border-slate-500 bg-transparent text-zinc-300 light:text-slate-700 hover:bg-white/10 light:hover:bg-slate-100"
                  }`}
                >
                  {t(`scheduledJobs.builder.weekdays.${WEEKDAY_KEYS[day]}`)}
                </button>
              );
            })}
          </div>
          <p
            id={daysNoteId}
            role="status"
            className="text-xs text-amber-300 light:text-amber-800"
          >
            {lastDayWarning ? t("scheduledJobs.builder.lastDayWarning") : ""}
          </p>
        </div>
      )}

      {state.frequency === "month" && (
        <ModalSelect
          label={t("scheduledJobs.builder.onDay")}
          hint={
            state.dayOfMonth > 28
              ? t("scheduledJobs.builder.shortMonthHint")
              : undefined
          }
          value={state.dayOfMonth}
          onChange={(e) => update({ dayOfMonth: parseInt(e.target.value, 10) })}
        >
          {DAYS_OF_MONTH.map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </ModalSelect>
      )}
    </div>
  );
}
