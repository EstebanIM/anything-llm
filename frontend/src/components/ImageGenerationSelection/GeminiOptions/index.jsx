import { useId, useState } from "react";
import { useTranslation } from "react-i18next";
import ImageModelSelection from "../ImageModelSelection";
import ImageDimensionSelection from "../ImageDimensionSelection";
import {
  FIELD_COL,
  FIELD_LABEL,
  FIELD_ROW,
  SECRET_MASK,
  SecretInput,
} from "@/components/ProviderFields";

export default function GeminiImageOptions({ settings }) {
  const { t } = useTranslation();
  const id = useId();
  const [inputValue, setInputValue] = useState(
    settings?.ImageGenerationGeminiApiKey
  );
  const [apiKey, setApiKey] = useState(settings?.ImageGenerationGeminiApiKey);

  return (
    <div className="w-full flex flex-col gap-y-4">
      <div className={`${FIELD_ROW} mt-1.5`}>
        <div className={FIELD_COL}>
          <label htmlFor={`${id}-api-key`} className={FIELD_LABEL}>
            {t("provider-forms.image-generation.gemini.api-key")}
          </label>
          <SecretInput
            id={`${id}-api-key`}
            name="ImageGenerationGeminiApiKey"
            defaultValue={
              settings?.ImageGenerationGeminiApiKey ? SECRET_MASK : ""
            }
            required={true}
            onChange={(e) => setInputValue(e.target.value)}
            onBlur={() => setApiKey(inputValue)}
          />
        </div>
        <ImageModelSelection
          provider="gemini-imggen"
          apiKey={apiKey}
          apiKeyRequired={true}
          settings={settings}
        />
        <ImageDimensionSelection provider="gemini-imggen" settings={settings} />
      </div>
    </div>
  );
}
