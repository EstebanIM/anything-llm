import { useId } from "react";
import { useTranslation } from "react-i18next";
import {
  FIELD_ERROR,
  FIELD_HELP,
  FIELD_LABEL,
  FIELD_SELECT,
} from "@/components/ProviderFields";
import { useAvailableVariables } from "../useAvailableVariables";

/**
 * Optional "store the result in" picker: lists the flow variables, says where
 * to define them when there are none, and keeps a variable that no longer
 * exists visible (with a warning) instead of silently showing the placeholder.
 *
 * @param {object} props
 * @param {string} props.label
 * @param {string} props.value
 * @param {(value: string) => void} props.onChange
 */
export default function VariableSelect({ label, value, onChange }) {
  const { t } = useTranslation();
  const id = useId();
  const helpId = useId();
  const warningId = useId();
  const variables = useAvailableVariables();
  const isMissing = !!value && !variables.some((v) => v.name === value);
  const describedBy =
    [variables.length === 0 ? helpId : null, isMissing ? warningId : null]
      .filter(Boolean)
      .join(" ") || undefined;

  return (
    <div>
      <label htmlFor={id} className={FIELD_LABEL}>
        {label}{" "}
        <span className="font-normal text-theme-text-secondary">
          ({t("common.optional")})
        </span>
      </label>
      <select
        id={id}
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        aria-describedby={describedBy}
        className={FIELD_SELECT}
      >
        <option value="" className="bg-theme-bg-primary">
          {t("agent-builder.variables.choose")}
        </option>
        {variables.map((v) => (
          <option key={v.name} value={v.name} className="bg-theme-bg-primary">
            {v.name}
          </option>
        ))}
        {isMissing && (
          <option value={value} className="bg-theme-bg-primary">
            {t("agent-builder.variables.missing-option", { name: value })}
          </option>
        )}
      </select>
      {variables.length === 0 && (
        <p id={helpId} className={FIELD_HELP}>
          {t("agent-builder.variables.none-defined")}
        </p>
      )}
      {isMissing && (
        <p id={warningId} className={FIELD_ERROR}>
          {t("agent-builder.variables.missing", { name: value })}
        </p>
      )}
    </div>
  );
}
