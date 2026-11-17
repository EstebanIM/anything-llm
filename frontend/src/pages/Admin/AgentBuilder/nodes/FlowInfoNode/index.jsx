import { useId } from "react";
import { useTranslation } from "react-i18next";
import {
  FIELD_ERROR,
  FIELD_HELP,
  FIELD_INPUT,
  FIELD_LABEL,
} from "@/components/ProviderFields";

/** Visual "required" mark; the field itself carries aria-required. */
export function RequiredMark() {
  return (
    <span aria-hidden="true" className="text-red-400 light:text-red-700">
      {" *"}
    </span>
  );
}

/**
 * Name and description of the flow (both required: the LLM picks the flow by
 * them). Errors show after the first save attempt.
 */
export default function FlowInfoNode({ config, onConfigChange, showErrors }) {
  const { t } = useTranslation();
  const nameId = useId();
  const nameHelpId = useId();
  const nameErrorId = useId();
  const descriptionId = useId();
  const descriptionHelpId = useId();
  const descriptionErrorId = useId();

  const nameMissing = showErrors && !config?.name?.trim();
  const descriptionMissing = showErrors && !config?.description?.trim();

  return (
    <div className="space-y-4">
      <p className="text-xs text-theme-text-secondary">
        {t("agent-builder.required-note")}
      </p>
      <div>
        <label htmlFor={nameId} className={FIELD_LABEL}>
          {t("agent-builder.flow-info.name")}
          <RequiredMark />
        </label>
        <input
          id={nameId}
          type="text"
          value={config?.name || ""}
          onChange={(e) => onConfigChange({ ...config, name: e.target.value })}
          aria-required="true"
          aria-invalid={nameMissing || undefined}
          aria-describedby={
            nameMissing ? `${nameErrorId} ${nameHelpId}` : nameHelpId
          }
          className={FIELD_INPUT}
          autoComplete="off"
          spellCheck={false}
        />
        {nameMissing && (
          <p id={nameErrorId} role="alert" className={FIELD_ERROR}>
            {t("agent-builder.flow-info.name-required")}
          </p>
        )}
        <p id={nameHelpId} className={FIELD_HELP}>
          {t("agent-builder.flow-info.name-help")}
        </p>
      </div>

      <div>
        <label htmlFor={descriptionId} className={FIELD_LABEL}>
          {t("agent-builder.flow-info.description")}
          <RequiredMark />
        </label>
        <textarea
          id={descriptionId}
          value={config?.description || ""}
          onChange={(e) =>
            onConfigChange({ ...config, description: e.target.value })
          }
          aria-required="true"
          aria-invalid={descriptionMissing || undefined}
          aria-describedby={
            descriptionMissing
              ? `${descriptionErrorId} ${descriptionHelpId}`
              : descriptionHelpId
          }
          className={FIELD_INPUT}
          rows={3}
        />
        {descriptionMissing && (
          <p id={descriptionErrorId} role="alert" className={FIELD_ERROR}>
            {t("agent-builder.flow-info.description-required")}
          </p>
        )}
        <p id={descriptionHelpId} className={FIELD_HELP}>
          {t("agent-builder.flow-info.description-help")}
        </p>
      </div>
    </div>
  );
}
