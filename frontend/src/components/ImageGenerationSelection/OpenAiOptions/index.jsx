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

export default function OpenAiImageOptions({ settings }) {
  const { t } = useTranslation();
  const id = useId();
  const [inputValue, setInputValue] = useState(
    settings?.ImageGenerationOpenAiKey
  );
  const [apiKey, setApiKey] = useState(settings?.ImageGenerationOpenAiKey);

  return (
    <div className="w-full flex flex-col gap-y-4">
      <div className={`${FIELD_ROW} mt-1.5`}>
        <div className={FIELD_COL}>
          <label htmlFor={`${id}-api-key`} className={FIELD_LABEL}>
            {t("provider-fields.api-key")}
          </label>
          <SecretInput
            id={`${id}-api-key`}
            name="ImageGenerationOpenAiKey"
            defaultValue={settings?.ImageGenerationOpenAiKey ? SECRET_MASK : ""}
            required={true}
            onChange={(e) => setInputValue(e.target.value)}
            onBlur={() => setApiKey(inputValue)}
          />
        </div>
        <ImageModelSelection
          provider="openai-imggen"
          apiKey={apiKey}
          apiKeyRequired={true}
          settings={settings}
        />
        <ImageDimensionSelection provider="openai-imggen" settings={settings} />
      </div>
    </div>
  );
}
