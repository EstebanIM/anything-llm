import { useId } from "react";
import { Trans, useTranslation } from "react-i18next";
import {
  FIELD_COL,
  FIELD_HELP,
  FIELD_INPUT,
  FIELD_LABEL,
  FIELD_ROW,
  SECRET_MASK,
  SecretInput,
} from "@/components/ProviderFields";

export default function GenericOpenAiSpeechToTextOptions({ settings }) {
  const { t } = useTranslation();
  const id = useId();

  return (
    <div className="w-full flex flex-col gap-y-7">
      <div className={FIELD_ROW}>
        <div className={FIELD_COL}>
          <label htmlFor={`${id}-base-url`} className={FIELD_LABEL}>
            {t("provider-fields.base-url")}
          </label>
          <input
            id={`${id}-base-url`}
            type="url"
            name="STTOpenAICompatibleEndpoint"
            className={FIELD_INPUT}
            placeholder="http://localhost:8000/v1"
            defaultValue={settings?.STTOpenAICompatibleEndpoint}
            required={true}
            autoComplete="off"
            spellCheck={false}
            aria-describedby={`${id}-base-url-help`}
          />
          <p id={`${id}-base-url-help`} className={FIELD_HELP}>
            {t("provider-forms.shared.transcription-base-url-help")}
          </p>
        </div>
        <div className={FIELD_COL}>
          <label htmlFor={`${id}-api-key`} className={FIELD_LABEL}>
            {t("provider-fields.api-key")}{" "}
            <span className="font-normal text-theme-text-secondary">
              ({t("provider-fields.optional")})
            </span>
          </label>
          <SecretInput
            id={`${id}-api-key`}
            name="STTOpenAICompatibleKey"
            defaultValue={settings?.STTOpenAICompatibleKey ? SECRET_MASK : ""}
            aria-describedby={`${id}-api-key-help`}
          />
          <p id={`${id}-api-key-help`} className={FIELD_HELP}>
            {t("provider-forms.shared.api-key-optional-help")}
          </p>
        </div>
        <div className={FIELD_COL}>
          <label htmlFor={`${id}-model`} className={FIELD_LABEL}>
            {t("provider-forms.shared.transcription-model")}
          </label>
          <input
            id={`${id}-model`}
            type="text"
            name="STTOpenAICompatibleModel"
            className={FIELD_INPUT}
            placeholder={t("provider-forms.shared.model-id-placeholder")}
            defaultValue={settings?.STTOpenAICompatibleModel}
            required={true}
            autoComplete="off"
            spellCheck={false}
            aria-describedby={`${id}-model-help`}
          />
          <p id={`${id}-model-help`} className={FIELD_HELP}>
            <Trans
              i18nKey="provider-forms.stt.generic.model-help"
              components={{ code: <code /> }}
            />
          </p>
        </div>
      </div>
    </div>
  );
}
