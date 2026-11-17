import { useId } from "react";
import { useTranslation } from "react-i18next";
import {
  FIELD_COL,
  FIELD_LABEL,
  FIELD_ROW,
  FIELD_SELECT,
  SECRET_MASK,
  SecretInput,
} from "@/components/ProviderFields";

export default function OpenAiWhisperOptions({ settings }) {
  const { t } = useTranslation();
  const id = useId();

  return (
    <div className={`${FIELD_ROW} mt-1.5`}>
      <div className={FIELD_COL}>
        <label htmlFor={`${id}-api-key`} className={FIELD_LABEL}>
          {t("provider-fields.api-key")}
        </label>
        <SecretInput
          id={`${id}-api-key`}
          name="OpenAiKey"
          defaultValue={settings?.OpenAiKey ? SECRET_MASK : ""}
          required={true}
        />
      </div>
      <div className={FIELD_COL}>
        <label htmlFor={`${id}-model`} className={FIELD_LABEL}>
          {t("provider-forms.transcription.openai.whisper-model")}
        </label>
        <select
          id={`${id}-model`}
          disabled={true}
          defaultValue="whisper-large"
          className={`${FIELD_SELECT} flex-shrink-0`}
        >
          <option value="whisper-large">Whisper Large</option>
        </select>
      </div>
    </div>
  );
}
