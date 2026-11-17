import { useEffect, useId, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import debounce from "lodash.debounce";
import {
  FIELD_ERROR,
  FIELD_HELP,
  FIELD_INPUT,
  blurOnWheel,
} from "@/components/ProviderFields";

const SAVE_DELAY_MS = 800;

/**
 * Whole-number setting that saves itself shortly after typing stops.
 * - Never rejects keystrokes (typing "20" passes through "2"); a value below
 *   `min` is reported when the field loses focus and is not saved.
 * - A pending save is flushed when the field unmounts (closing the dialog).
 * - "Saving…" / "Saved" are announced in a status region.
 *
 * @param {object} props
 * @param {string} props.label
 * @param {string} props.description
 * @param {number} props.initialValue
 * @param {number} props.min
 * @param {string} [props.name]
 * @param {(value: number) => Promise<boolean>} props.onSave - resolves true when stored
 */
export default function NumberSetting({
  label,
  description,
  initialValue,
  min,
  name,
  onSave,
}) {
  const { t } = useTranslation();
  const inputId = useId();
  const helpId = useId();
  const errorId = useId();
  const [value, setValue] = useState(
    Number.isFinite(initialValue) ? String(initialValue) : ""
  );
  const [error, setError] = useState(null);
  const [saveState, setSaveState] = useState("idle"); // idle | saving | saved | failed

  const isValid = (text) => /^\d+$/.test(text.trim()) && Number(text) >= min;

  const debouncedSave = useMemo(
    () =>
      debounce(async (save, number) => {
        setSaveState("saving");
        const ok = await save(number);
        setSaveState(ok ? "saved" : "failed");
      }, SAVE_DELAY_MS),
    []
  );

  useEffect(() => () => debouncedSave.flush(), [debouncedSave]);

  function handleChange(e) {
    const next = e.target.value;
    setValue(next);
    setSaveState("idle");
    if (isValid(next)) {
      setError(null);
      debouncedSave(onSave, Number(next));
    } else {
      debouncedSave.cancel();
    }
  }

  function handleBlur() {
    if (!isValid(value)) setError(t("agent-pages.settings.min-error", { min }));
  }

  const describedBy = [helpId, error ? errorId : null]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="flex flex-col md:flex-row md:items-start gap-x-4 gap-y-2">
      <div className="flex flex-col gap-y-1 flex-1">
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-zinc-50 light:text-slate-900"
        >
          {label}
        </label>
        <p id={helpId} className={`${FIELD_HELP} !mt-0`}>
          {description}
        </p>
        {error && (
          <p id={errorId} role="alert" className={`${FIELD_ERROR} !mt-0`}>
            {error}
          </p>
        )}
        <p role="status" className="text-xs text-theme-text-secondary">
          {saveState === "saving" && t("common.saving")}
          {saveState === "saved" && t("common.saved")}
        </p>
        {saveState === "failed" && (
          <p role="alert" className={`${FIELD_ERROR} !mt-0`}>
            {t("agent-pages.settings.save-failed")}
          </p>
        )}
      </div>
      <input
        id={inputId}
        type="number"
        inputMode="numeric"
        name={name}
        min={min}
        step={1}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        onWheel={blurOnWheel}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        autoComplete="off"
        className={`${FIELD_INPUT} md:w-24 md:shrink-0 text-center`}
      />
    </div>
  );
}
