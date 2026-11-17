import { useId } from "react";
import { useTranslation } from "react-i18next";
import {
  FIELD_COL,
  FIELD_LABEL,
  FIELD_SELECT,
} from "@/components/ProviderFields";

const PROVIDER_DIMENSIONS = {
  "openai-imggen": ["auto", "1024x1024", "1024x1536", "1536x1024"],
  "lemonade-imggen": ["256x256", "512x512", "768x768", "1024x1024"],
  // Gemini uses aspect ratios, not pixel sizes.
  "gemini-imggen": [
    "1:1",
    "16:9",
    "9:16",
    "4:3",
    "3:4",
    "3:2",
    "2:3",
    "5:4",
    "4:5",
    "21:9",
  ],
  "minimax-imggen": ["auto", "1:1", "16:9", "9:16", "4:3", "3:4", "3:2", "2:3"],
};
const ASPECT_RATIO_PROVIDERS = ["gemini-imggen", "minimax-imggen"];
const DEFAULT_DIMENSIONS = ["512x512", "1024x1024"];

/**
 * The dimension the selector starts on: the saved setting when the provider
 * supports it, otherwise the provider's first option.
 * @param {string} provider
 * @param {object} settings
 * @returns {string}
 */
export function initialDimension(provider, settings) {
  const dimensions = PROVIDER_DIMENSIONS[provider] || DEFAULT_DIMENSIONS;
  return settings?.ImageGenerationDimensions &&
    dimensions.includes(settings.ImageGenerationDimensions)
    ? settings.ImageGenerationDimensions
    : dimensions[0];
}

export default function ImageDimensionSelection({
  provider,
  settings,
  onChange = null,
}) {
  const { t } = useTranslation();
  const id = useId();
  const dimensions = PROVIDER_DIMENSIONS[provider] || DEFAULT_DIMENSIONS;
  const defaultValue = initialDimension(provider, settings);

  return (
    <div className={FIELD_COL}>
      <label htmlFor={`${id}-dimensions`} className={FIELD_LABEL}>
        {ASPECT_RATIO_PROVIDERS.includes(provider)
          ? t("provider-forms.image-generation.aspect-ratio")
          : t("provider-forms.image-generation.dimensions")}
      </label>
      <select
        id={`${id}-dimensions`}
        name="ImageGenerationDimensions"
        className={FIELD_SELECT}
        defaultValue={defaultValue}
        onChange={(e) => onChange?.(e.target.value)}
      >
        {dimensions.map((dim) => (
          <option key={dim} value={dim}>
            {dim === "auto" ? t("provider-forms.image-generation.auto") : dim}
          </option>
        ))}
      </select>
    </div>
  );
}
