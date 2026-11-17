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

function toProperCase(string) {
  return string.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

export default function OpenAiTextToSpeechOptions({ settings }) {
  const { t } = useTranslation();
  const id = useId();
  const apiKey = settings?.TTSOpenAIKey;

  return (
    <div className={FIELD_ROW}>
      <div className={FIELD_COL}>
        <label htmlFor={`${id}-api-key`} className={FIELD_LABEL}>
          {t("provider-fields.api-key")}
        </label>
        <SecretInput
          id={`${id}-api-key`}
          name="TTSOpenAIKey"
          defaultValue={apiKey ? SECRET_MASK : ""}
          required={true}
        />
      </div>
      <div className={FIELD_COL}>
        <label htmlFor={`${id}-voice`} className={FIELD_LABEL}>
          {t("provider-forms.tts.voice-model")}
        </label>
        <select
          id={`${id}-voice`}
          name="TTSOpenAIVoiceModel"
          defaultValue={settings?.TTSOpenAIVoiceModel ?? "alloy"}
          className={FIELD_SELECT}
        >
          {["alloy", "echo", "fable", "onyx", "nova", "shimmer"].map(
            (voice) => {
              return (
                <option key={voice} value={voice}>
                  {toProperCase(voice)}
                </option>
              );
            }
          )}
        </select>
      </div>
    </div>
  );
}
