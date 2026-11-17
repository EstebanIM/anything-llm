import { useId } from "react";
import { useTranslation } from "react-i18next";
import {
  FIELD_COL,
  FIELD_HELP,
  FIELD_INPUT,
  FIELD_LABEL,
  FIELD_ROW,
  FIELD_SELECT,
  SECRET_MASK,
  SecretInput,
} from "@/components/ProviderFields";

const DEFAULT_MODELS = [
  {
    id: "gemini-embedding-001",
    name: "Gemini Embedding 001",
  },
  {
    id: "gemini-embedding-2",
    name: "Gemini Embedding 2",
  },
];

export default function GeminiOptions({ settings }) {
  const { t } = useTranslation();
  const id = useId();

  return (
    <div className="w-full flex flex-col gap-y-6">
      <div className="w-full flex flex-col gap-y-4">
        <div className={`${FIELD_ROW} mt-1.5`}>
          <div className={FIELD_COL}>
            <label htmlFor={`${id}-api-key`} className={FIELD_LABEL}>
              {t("provider-fields.api-key")}
            </label>
            <SecretInput
              id={`${id}-api-key`}
              name="GeminiEmbeddingApiKey"
              defaultValue={settings?.GeminiEmbeddingApiKey ? SECRET_MASK : ""}
              required={true}
            />
          </div>
          <div className={FIELD_COL}>
            <label htmlFor={`${id}-model`} className={FIELD_LABEL}>
              {t("provider-fields.embedding-model")}
            </label>
            <select
              id={`${id}-model`}
              name="EmbeddingModelPref"
              required={true}
              defaultValue={settings?.EmbeddingModelPref}
              className={FIELD_SELECT}
            >
              <optgroup label={t("provider-forms.embedding.models-available")}>
                {DEFAULT_MODELS.map((model) => {
                  return (
                    <option key={model.id} value={model.id}>
                      {model.name}
                    </option>
                  );
                })}
              </optgroup>
            </select>
          </div>
        </div>
      </div>
      <div className={FIELD_COL}>
        <label htmlFor={`${id}-dimensions`} className={FIELD_LABEL}>
          {t("provider-forms.embedding.output-dimensions")}
        </label>
        <input
          id={`${id}-dimensions`}
          type="number"
          name="EmbeddingOutputDimensions"
          className={FIELD_INPUT}
          placeholder={t(
            "provider-forms.embedding.output-dimensions-placeholder"
          )}
          min={1}
          step={1}
          onWheel={(e) => e.currentTarget.blur()}
          defaultValue={settings?.EmbeddingOutputDimensions}
          required={false}
          autoComplete="off"
          aria-describedby={`${id}-dimensions-help`}
        />
        <p id={`${id}-dimensions-help`} className={FIELD_HELP}>
          {t("provider-forms.embedding.output-dimensions-help")}
        </p>
      </div>
    </div>
  );
}
