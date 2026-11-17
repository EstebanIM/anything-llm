import { useId } from "react";
import { useTranslation } from "react-i18next";
import {
  FIELD_COL,
  FIELD_INPUT,
  FIELD_LABEL,
  FIELD_ROW,
  SECRET_MASK,
  SecretInput,
} from "@/components/ProviderFields";

export default function AzureAiOptions({ settings }) {
  const { t } = useTranslation();
  const id = useId();

  return (
    <div className="w-full flex flex-col gap-y-4">
      <div className={`${FIELD_ROW} mt-1.5`}>
        <div className={FIELD_COL}>
          <label htmlFor={`${id}-endpoint`} className={FIELD_LABEL}>
            {t("llm.providers.azure_openai.azure_service_endpoint")}
          </label>
          <input
            id={`${id}-endpoint`}
            type="url"
            name="AzureOpenAiEndpoint"
            className={FIELD_INPUT}
            placeholder="https://my-azure.openai.azure.com"
            defaultValue={settings?.AzureOpenAiEndpoint}
            required={true}
            autoComplete="off"
            spellCheck={false}
          />
        </div>

        <div className={FIELD_COL}>
          <label htmlFor={`${id}-api-key`} className={FIELD_LABEL}>
            {t("provider-fields.api-key")}
          </label>
          <SecretInput
            id={`${id}-api-key`}
            name="AzureOpenAiKey"
            defaultValue={settings?.AzureOpenAiKey ? SECRET_MASK : ""}
            required={true}
          />
        </div>

        <div className={FIELD_COL}>
          <label htmlFor={`${id}-deployment`} className={FIELD_LABEL}>
            {t("provider-forms.embedding.azure.deployment")}
          </label>
          <input
            id={`${id}-deployment`}
            type="text"
            name="AzureOpenAiEmbeddingModelPref"
            className={FIELD_INPUT}
            placeholder={t(
              "provider-forms.embedding.azure.deployment-placeholder"
            )}
            defaultValue={settings?.AzureOpenAiEmbeddingModelPref}
            required={true}
            autoComplete="off"
            spellCheck={false}
          />
        </div>
      </div>
    </div>
  );
}
