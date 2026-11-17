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

export default function CerebrasLLMOptions({ settings }) {
  const { t } = useTranslation();
  const id = useId();
  const [inputValue, setInputValue] = useState(settings?.CerebrasApiKey);
  const [apiKey, setApiKey] = useState(settings?.CerebrasApiKey);

  return (
    <div className={`${FIELD_ROW} mt-1.5`}>
      <div className={FIELD_COL}>
        <FieldLabel
          htmlFor={`${id}-key`}
          label={t("provider-fields.api-key")}
        />
        <SecretInput
          id={`${id}-key`}
          name="CerebrasApiKey"
          defaultValue={settings?.CerebrasApiKey ? SECRET_MASK : ""}
          required={true}
          onChange={(e) => setInputValue(e.target.value)}
          onBlur={() => setApiKey(inputValue)}
        />
      </div>

      {!settings?.credentialsOnly && (
        <CerebrasModelSelection settings={settings} apiKey={apiKey} />
      )}
    </div>
  );
}

/**
 * Cerebras model selection component
 * @param {Object} props - The component props
 * @param {string} props.apiKey - The Cerebras API key (not used since we only need public models for now)
 * @param {Object} props.settings - The system settings
 * @returns {JSX.Element} The Cerebras model selection component
 */
function CerebrasModelSelection({ apiKey: _apiKey, settings }) {
  const { t } = useTranslation();
  const [customModels, setCustomModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    async function findCustomModels() {
      try {
        setLoading(true);
        const { models, error } = await System.customModels("cerebras");
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
  }, [attempt]);

  return (
    <ModelSelectField
      name="CerebrasModelPref"
      label={t("provider-fields.chat-model")}
      status={modelStatus({ loading, error, count: customModels.length })}
      error={error}
      onRetry={() => setAttempt((n) => n + 1)}
      defaultValue={settings?.CerebrasModelPref}
    >
      <optgroup label={t("llm-fields.common.available-models")}>
        {customModels.map((model) => (
          <option key={model.id} value={model.id}>
            {model.name}
          </option>
        ))}
      </optgroup>
    </ModelSelectField>
  );
}
