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

export default function OpenAiOptions({ settings }) {
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
            name="OpenAiKey"
            defaultValue={settings?.OpenAiKey ? SECRET_MASK : ""}
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
                "text-embedding-ada-002",
                "text-embedding-3-small",
                "text-embedding-3-large",
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
