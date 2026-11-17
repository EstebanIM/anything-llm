import { useTranslation } from "react-i18next";
import { ModalInput } from "@/components/lib/Modal";

/** Message from an error that may be a string, an Error or missing. */
export function errorMessage(error, fallback) {
  if (!error) return fallback;
  if (typeof error === "string") return error;
  return error.message || fallback;
}

/** Reads the form and checks the required fields after trimming. */
export function readVariableForm(form, t) {
  const data = {};
  for (const [key, value] of new FormData(form).entries())
    data[key] = value.trim();
  const errors = {};
  if (!data.key) errors.key = t("admin-pages.variables.key-required");
  if (!data.value) errors.value = t("admin-pages.variables.value-required");
  return { data, errors };
}

/** Moves focus to the first field with an error. */
export function focusFirstError(form, errors) {
  const name = ["key", "value"].find((field) => errors[field]);
  if (name) form.elements.namedItem(name)?.focus();
}

export default function VariableFields({ variable = {}, errors = {} }) {
  const { t } = useTranslation();
  return (
    <>
      <ModalInput
        label={t("admin-pages.variables.key")}
        name="key"
        type="text"
        minLength={3}
        maxLength={255}
        placeholder={t("admin-pages.variables.key-placeholder")}
        defaultValue={variable.key}
        required={true}
        autoComplete="off"
        spellCheck={false}
        pattern="^[a-zA-Z0-9_]+$"
        hint={t("admin-pages.variables.key-hint")}
        error={errors.key}
      />
      <ModalInput
        label={t("admin-pages.variables.value")}
        name="value"
        type="text"
        placeholder={t("admin-pages.variables.value-placeholder")}
        defaultValue={variable.value}
        required={true}
        autoComplete="off"
        error={errors.value}
      />
      <ModalInput
        label={t("admin-pages.variables.description-label")}
        optional={true}
        name="description"
        type="text"
        defaultValue={variable.description}
        autoComplete="off"
      />
    </>
  );
}
