import { useTranslation } from "react-i18next";
import SegmentedControl from "@/components/lib/SegmentedControl";
import { ModalInput } from "@/components/lib/Modal";
import CronBuilder from "./CronBuilder";
import { humanizeCron } from "../utils/cron";

export default function JobSchedule({
  schedule,
  scheduleMode,
  error,
  cronInputId,
  onScheduleChange,
  onModeChange,
}) {
  const { t, i18n } = useTranslation();
  const preview = humanizeCron(schedule, i18n.language);

  return (
    <fieldset className="flex flex-col gap-y-3 min-w-0">
      <legend className="mb-1.5 text-sm font-medium text-zinc-50 light:text-slate-700">
        {t("scheduledJobs.modal.scheduleLabel")}
      </legend>

      <SegmentedControl
        value={scheduleMode}
        onChange={onModeChange}
        label={t("scheduledJobs.modal.modeLabel")}
        className="self-start"
        options={[
          { value: "builder", label: t("scheduledJobs.modal.modeBuilder") },
          { value: "custom", label: t("scheduledJobs.modal.modeCustom") },
        ]}
      />

      {scheduleMode === "builder" ? (
        <CronBuilder value={schedule} onChange={onScheduleChange} />
      ) : (
        <ModalInput
          id={cronInputId}
          name="schedule"
          label={t("scheduledJobs.modal.cronLabel")}
          hint={t("scheduledJobs.modal.cronHint")}
          value={schedule}
          onChange={(e) => onScheduleChange(e.target.value)}
          placeholder={t("scheduledJobs.modal.cronPlaceholder")}
          autoComplete="off"
          spellCheck={false}
          aria-required="true"
          className="font-mono"
          error={error}
        />
      )}

      {preview && (
        <p className="text-xs text-zinc-400 light:text-slate-600">
          {t("scheduledJobs.modal.currentSchedule")}{" "}
          <span className="text-zinc-50 light:text-slate-900">{preview}</span>
        </p>
      )}
    </fieldset>
  );
}
