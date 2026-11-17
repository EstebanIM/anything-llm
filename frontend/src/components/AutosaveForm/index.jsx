import { createContext, useContext, useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import { useTranslation } from "react-i18next";
import { FIELD_ERROR } from "@/components/ProviderFields";
import { formatNumber } from "@/utils/dates";

const AutosaveFormContext = createContext();
const SAVED_INDICATOR_MS = 2000;

/** Translated message for a control that fails native constraint validation. */
function validationMessage(el, t) {
  const v = el.validity;
  if (v.valueMissing) return t("workspace-settings.validation.required");
  if (v.badInput) return t("workspace-settings.validation.number");
  if (v.tooShort)
    return t("workspace-settings.validation.too-short", {
      count: el.minLength,
    });
  if (v.tooLong)
    return t("workspace-settings.validation.too-long", { count: el.maxLength });
  if (v.rangeUnderflow)
    return t("workspace-settings.validation.min", {
      min: formatNumber(el.min),
    });
  if (v.rangeOverflow)
    return t("workspace-settings.validation.max", {
      max: formatNumber(el.max),
    });
  if (v.stepMismatch)
    return Number(el.step) === 1
      ? t("workspace-settings.validation.integer")
      : t("workspace-settings.validation.step", {
          step: formatNumber(el.step),
        });
  return t("workspace-settings.validation.invalid");
}

/**
 * Form that persists itself as the user edits: text fields save when they lose
 * focus, selects save on change, and custom controls call `markDirty` + `save`
 * from `useAutosaveForm`. While any field fails validation nothing is saved:
 * the field keeps what the user typed and shows its message in a
 * `<FieldError>` (or the browser's bubble when the field renders none). The
 * edits are saved once every field is valid again.
 * @param {(form: HTMLFormElement) => Promise<boolean>} props.onSave - persists the form, resolves true on success
 */
export default function AutosaveForm({ onSave, children, ...props }) {
  const { t } = useTranslation();
  const formEl = useRef(null);
  const [dirtyFields, setDirtyFields] = useState([]);
  const [savedFields, setSavedFields] = useState([]);
  const [errors, setErrors] = useState({});
  const [pending, setPending] = useState(false);
  // Names of the fields that render their own <FieldError>.
  const inlineErrorFields = useRef(new Set());

  const markDirty = (name) =>
    setDirtyFields((fields) =>
      fields.includes(name) ? fields : [...fields, name]
    );
  const save = () => setPending(true);
  const clearError = (name) =>
    setErrors((current) => {
      if (!(name in current)) return current;
      const next = { ...current };
      delete next[name];
      return next;
    });
  const registerInlineError = (name) => {
    inlineErrorFields.current.add(name);
    return () => inlineErrorFields.current.delete(name);
  };
  // React events from portals (eg: a dialog opened by a field) bubble through
  // this form in the component tree; only its own controls count.
  const ownsTarget = (e) => formEl.current?.contains(e.target);

  // Saving runs after render so hidden inputs driven by state hold their new value.
  useEffect(() => {
    if (!pending) return;
    setPending(false);
    if (!dirtyFields.length) return;

    const invalid = [...formEl.current.elements].filter(
      (el) => el.willValidate && !el.checkValidity()
    );
    const nextErrors = {};
    for (const el of invalid)
      if (el.name) nextErrors[el.name] = validationMessage(el, t);
    setErrors((current) =>
      invalid.length === 0 && Object.keys(current).length === 0
        ? current
        : nextErrors
    );
    if (invalid.length) {
      invalid
        .find((el) => !inlineErrorFields.current.has(el.name))
        ?.reportValidity();
      return;
    }

    const fields = dirtyFields;
    onSave(formEl.current).then((success) => {
      if (!success) return;
      setSavedFields(fields);
      setDirtyFields((current) => current.filter((f) => !fields.includes(f)));
    });
  }, [pending]);

  useEffect(() => {
    if (!savedFields.length) return;
    const timer = setTimeout(() => setSavedFields([]), SAVED_INDICATOR_MS);
    return () => clearTimeout(timer);
  }, [savedFields]);

  return (
    <AutosaveFormContext.Provider
      value={{
        markDirty,
        save,
        savedFields,
        errors,
        clearError,
        registerInlineError,
        hasChanges: dirtyFields.length > 0,
      }}
    >
      <form
        ref={formEl}
        onSubmit={(e) => {
          if (e.target !== formEl.current) return;
          e.preventDefault();
          save();
        }}
        onChange={(e) => {
          // Unnamed controls (eg: a search box) are not part of the saved data.
          if (!e.target.name || !ownsTarget(e)) return;
          markDirty(e.target.name);
          clearError(e.target.name);
          if (e.target.tagName === "SELECT") save();
        }}
        onBlur={(e) => {
          if (!ownsTarget(e)) return;
          if (["INPUT", "TEXTAREA"].includes(e.target.tagName)) save();
        }}
        {...props}
      >
        {/* One live region for the whole form, so SavedIndicator can stay
            out of the accessibility tree (and out of the labels' names). */}
        <p role="status" className="sr-only">
          {savedFields.length > 0 ? t("common.saved") : ""}
        </p>
        {children}
      </form>
    </AutosaveFormContext.Provider>
  );
}

export function useAutosaveForm() {
  return useContext(AutosaveFormContext);
}

/**
 * Validation message of a field, or null. Use it for `aria-invalid` on the
 * control and to add the `<FieldError>` id to its `aria-describedby`.
 * @param {string} name - form field name
 */
export function useFieldError(name) {
  const { errors } = useAutosaveForm();
  return errors[name] ?? null;
}

/**
 * Inline validation message of a field, shown under it while it is invalid.
 * @param {string} props.name - form field name
 * @param {string} props.id - id referenced by the control's aria-describedby
 */
export function FieldError({ name, id }) {
  const { errors, registerInlineError } = useAutosaveForm();
  useEffect(() => registerInlineError(name), [name]);
  if (!errors[name]) return null;
  return (
    <p id={id} role="alert" className={FIELD_ERROR}>
      {errors[name]}
    </p>
  );
}

/**
 * Briefly shows "Saved" after the named field is persisted. It is visual
 * only (the form announces saves itself): place it next to the field's label,
 * not inside it.
 * @param {string} props.name - form field name
 */
export function SavedIndicator({ name }) {
  const { t } = useTranslation();
  const { savedFields } = useAutosaveForm();
  if (!savedFields.includes(name)) return null;
  return (
    <span
      aria-hidden="true"
      className="ml-2 inline-flex items-center gap-x-1 text-xs font-normal text-green-400 light:text-green-700"
    >
      <Check strokeWidth={1.5} size={12} />
      {t("common.saved")}
    </span>
  );
}
