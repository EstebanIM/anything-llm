import { useState, useEffect, useId } from "react";
import { useTranslation } from "react-i18next";
import System from "@/models/system";
import {
  FIELD_COL,
  FIELD_ROW,
  SECRET_MASK,
  SecretInput,
} from "@/components/ProviderFields";
import {
  FieldLabel,
  ModelSelectField,
  modelStatus,
} from "@/components/LLMSelection/FormParts";

export default function XAILLMOptions({ settings }) {
  const { t } = useTranslation();
  const id = useId();
  const [inputValue, setInputValue] = useState(settings?.XAIApiKey);
  const [apiKey, setApiKey] = useState(settings?.XAIApiKey);

  return (
    <div className={`${FIELD_ROW} mt-1.5`}>
      <div className={FIELD_COL}>
        <FieldLabel
          htmlFor={`${id}-key`}
          label={t("provider-fields.api-key")}
        />
        <SecretInput
          id={`${id}-key`}
          name="XAIApiKey"
          defaultValue={settings?.XAIApiKey ? SECRET_MASK : ""}
          required={true}
          onChange={(e) => setInputValue(e.target.value)}
          onBlur={() => setApiKey(inputValue)}
        />
      </div>

      {!settings?.credentialsOnly && (
        <XAIModelSelection settings={settings} apiKey={apiKey} />
      )}
    </div>
  );
}

function XAIModelSelection({ apiKey, settings }) {
  const { t } = useTranslation();
  const [customModels, setCustomModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    async function findCustomModels() {
      if (!apiKey) {
        setCustomModels([]);
        return;
      }

      try {
        setLoading(true);
        const { models, error } = await System.customModels("xai", apiKey);
        setCustomModels(models || []);
        setError(error || null);
      } catch (error) {
        console.error("Failed to fetch custom models:", error);
        setCustomModels([]);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    findCustomModels();
  }, [apiKey, attempt]);

  const status = modelStatus({
    loading,
    error,
    count: customModels.length,
    needs: apiKey ? null : "need-key",
  });

  return (
    <ModelSelectField
      name="XAIModelPref"
      label={t("provider-fields.chat-model")}
      status={status}
      error={error}
      onRetry={() => setAttempt((n) => n + 1)}
      defaultValue={settings?.XAIModelPref}
      help={
        status === "ready"
          ? t("llm-fields.common.model-help-select", { provider: "xAI" })
          : t("llm-fields.common.model-help-key")
      }
    >
      <optgroup label={t("llm-fields.common.available-models")}>
        {customModels.map((model) => (
          <option key={model.id} value={model.id}>
            {model.id}
          </option>
        ))}
      </optgroup>
    </ModelSelectField>
  );
}
