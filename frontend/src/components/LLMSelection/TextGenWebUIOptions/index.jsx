import { useId } from "react";
import { useTranslation } from "react-i18next";
import {
  FIELD_COL,
  FIELD_INPUT,
  FIELD_ROW,
  SECRET_MASK,
  SecretInput,
} from "@/components/ProviderFields";
import { FieldLabel, blurOnWheel } from "@/components/LLMSelection/FormParts";

export default function TextGenWebUIOptions({ settings }) {
  const { t } = useTranslation();
  const id = useId();

  return (
    <div className={`${FIELD_ROW} mt-1.5`}>
      <div className={FIELD_COL}>
        <FieldLabel
          htmlFor={`${id}-url`}
          label={t("provider-fields.base-url")}
        />
        <input
          id={`${id}-url`}
          type="url"
          name="TextGenWebUIBasePath"
          className={FIELD_INPUT}
          placeholder="http://127.0.0.1:5000/v1"
          defaultValue={settings?.TextGenWebUIBasePath}
          required={true}
          autoComplete="off"
          spellCheck={false}
        />
      </div>
      <div className={FIELD_COL}>
        <FieldLabel
          htmlFor={`${id}-context`}
          label={t("provider-fields.context-window")}
        />
        <input
          id={`${id}-context`}
          type="number"
          name="TextGenWebUITokenLimit"
          className={FIELD_INPUT}
          placeholder={t("llm-fields.common.context-window-placeholder", {
            example: 4096,
          })}
          min={1}
          onWheel={blurOnWheel}
          defaultValue={settings?.TextGenWebUITokenLimit}
          required={true}
          autoComplete="off"
        />
      </div>
      <div className={FIELD_COL}>
        <FieldLabel
          htmlFor={`${id}-key`}
          label={t("provider-fields.api-key")}
          optional={true}
        />
        <SecretInput
          id={`${id}-key`}
          name="TextGenWebUIAPIKey"
          defaultValue={settings?.TextGenWebUIAPIKey ? SECRET_MASK : ""}
        />
      </div>
    </div>
  );
}
