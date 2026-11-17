import { useId } from "react";
import { useTranslation } from "react-i18next";
import {
  FIELD_COL,
  FIELD_INPUT,
  FIELD_ROW,
  FIELD_SELECT,
  SECRET_MASK,
  SecretInput,
} from "@/components/ProviderFields";
import { FieldLabel } from "@/components/LLMSelection/FormParts";

const TOKEN_LIMITS = [
  [4096, "gpt-3.5-turbo"],
  [16384, "gpt-3.5-16k"],
  [8192, "gpt-4"],
  [32768, "gpt-4-32k"],
  [128000, "gpt-4-turbo, gpt-4o, gpt-4o-mini, o1-mini"],
  [200000, "o1, o1-pro, o3-mini"],
  [1047576, "gpt-4.1"],
];

export default function AzureAiOptions({ settings }) {
  const { t, i18n } = useTranslation();
  const id = useId();

  return (
    <div className="w-full flex flex-col gap-y-7 mt-1.5">
      <div className={FIELD_ROW}>
        <div className={FIELD_COL}>
          <FieldLabel
            htmlFor={`${id}-endpoint`}
            label={t("llm.providers.azure_openai.azure_service_endpoint")}
          />
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
          <FieldLabel
            htmlFor={`${id}-key`}
            label={t("llm.providers.azure_openai.api_key")}
          />
          <SecretInput
            id={`${id}-key`}
            name="AzureOpenAiKey"
            defaultValue={settings?.AzureOpenAiKey ? SECRET_MASK : ""}
            required={true}
          />
        </div>

        <div className={FIELD_COL}>
          <FieldLabel
            htmlFor={`${id}-deployment`}
            label={t("llm.providers.azure_openai.chat_deployment_name")}
          />
          <input
            id={`${id}-deployment`}
            type="text"
            name="AzureOpenAiModelPref"
            className={FIELD_INPUT}
            placeholder={t("llm-fields.azure.deployment-placeholder")}
            defaultValue={settings?.AzureOpenAiModelPref}
            required={true}
            autoComplete="off"
            spellCheck={false}
          />
        </div>
      </div>

      <div className={FIELD_ROW}>
        <div className={FIELD_COL}>
          <FieldLabel
            htmlFor={`${id}-token-limit`}
            label={t("llm.providers.azure_openai.chat_model_token_limit")}
          />
          <select
            id={`${id}-token-limit`}
            name="AzureOpenAiTokenLimit"
            defaultValue={settings?.AzureOpenAiTokenLimit || 4096}
            className={FIELD_SELECT}
            required={true}
          >
            {TOKEN_LIMITS.map(([limit, models]) => (
              <option key={limit} value={limit}>
                {limit.toLocaleString(i18n.language)} ({models})
              </option>
            ))}
          </select>
        </div>

        <div className={FIELD_COL}>
          <FieldLabel
            htmlFor={`${id}-model-type`}
            label={t("llm.providers.azure_openai.model_type")}
            tip={t("llm.providers.azure_openai.model_type_tooltip")}
          />
          <select
            id={`${id}-model-type`}
            name="AzureOpenAiModelType"
            defaultValue={settings?.AzureOpenAiModelType || "default"}
            className={FIELD_SELECT}
            required={true}
          >
            <option value="default">
              {t("llm.providers.azure_openai.default")}
            </option>
            <option value="reasoning">
              {t("llm.providers.azure_openai.reasoning")}
            </option>
          </select>
        </div>

        <div className={FIELD_COL}>
          <FieldLabel
            htmlFor={`${id}-agent-api`}
            label={t("llm.providers.azure_openai.agent_api")}
            tip={t("llm.providers.azure_openai.agent_api_tooltip")}
          />
          <select
            id={`${id}-agent-api`}
            name="AzureOpenAiAgentApi"
            defaultValue={settings?.AzureOpenAiAgentApi || "chat"}
            className={FIELD_SELECT}
            required={true}
          >
            <option value="chat">
              {t("llm.providers.azure_openai.chat_completions")}
            </option>
            <option value="responses">
              {t("llm.providers.azure_openai.responses")}
            </option>
          </select>
        </div>
      </div>
    </div>
  );
}
