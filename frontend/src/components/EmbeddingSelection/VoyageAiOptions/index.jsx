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

export default function VoyageAiOptions({ settings }) {
  const { t } = useTranslation();
  const id = useId();

  return (
    <div className="w-full flex flex-col gap-y-4">
      <div className={`${FIELD_ROW} mt-1.5`}>
        <div className={FIELD_COL}>
          <label htmlFor={`${id}-api-key`} className={FIELD_LABEL}>
            {t("provider-fields.api-key")}
          </label>
          <SecretInput
            id={`${id}-api-key`}
            name="VoyageAiApiKey"
            defaultValue={settings?.VoyageAiApiKey ? SECRET_MASK : ""}
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
              {[
                "voyage-4-large",
                "voyage-4",
                "voyage-4-lite",
                "voyage-code-4",
                "voyage-finance-2",
                "voyage-law-2",
              ].map((model) => {
                return (
                  <option key={model} value={model}>
                    {model}
                  </option>
                );
              })}
            </optgroup>
            <optgroup label={t("provider-forms.embedding.models-legacy")}>
              {[
                "voyage-3-large",
                "voyage-3.5",
                "voyage-3.5-lite",
                "voyage-3",
                "voyage-3-lite",
                "voyage-code-3",
                "voyage-multilingual-2",
                "voyage-large-2-instruct",
                "voyage-large-2",
                "voyage-code-2",
                "voyage-2",
              ].map((model) => {
                return (
                  <option key={model} value={model}>
                    {model}
                  </option>
                );
              })}
            </optgroup>
          </select>
        </div>
      </div>
    </div>
  );
}
