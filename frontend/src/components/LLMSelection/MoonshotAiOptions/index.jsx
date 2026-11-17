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

export default function MoonshotAiOptions({ settings }) {
  const { t } = useTranslation();
  const id = useId();
  const [inputValue, setInputValue] = useState(settings?.MoonshotAiApiKey);
  const [moonshotAiKey, setMoonshotAiKey] = useState(
    settings?.MoonshotAiApiKey
  );

  return (
    <div className={`${FIELD_ROW} mt-1.5`}>
      <div className={FIELD_COL}>
        <FieldLabel
          htmlFor={`${id}-key`}
          label={t("provider-fields.api-key")}
        />
        <SecretInput
          id={`${id}-key`}
          name="MoonshotAiApiKey"
          defaultValue={settings?.MoonshotAiApiKey ? SECRET_MASK : ""}
          required={true}
          onChange={(e) => setInputValue(e.target.value)}
          onBlur={() => setMoonshotAiKey(inputValue)}
        />
      </div>
      {!settings?.credentialsOnly && (
        <MoonshotAiModelSelection settings={settings} apiKey={moonshotAiKey} />
      )}
    </div>
  );
}

function MoonshotAiModelSelection({ apiKey, settings }) {
  const { t } = useTranslation();
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    async function findCustomModels() {
      if (!apiKey) return;
      setLoading(true);
      const { models: availableModels, error } = await System.customModels(
        "moonshotai",
        typeof apiKey === "boolean" ? null : apiKey
      );

      if (availableModels?.length > 0) {
        setModels(availableModels);
      }

      setError(error || null);
      setLoading(false);
    }
    findCustomModels();
  }, [apiKey, attempt]);

  return (
    <ModelSelectField
      name="MoonshotAiModelPref"
      label={t("provider-fields.chat-model")}
      status={modelStatus({
        loading,
        error,
        count: models.length,
        needs: apiKey ? null : "need-key",
      })}
      error={error}
      onRetry={() => setAttempt((n) => n + 1)}
      defaultValue={settings?.MoonshotAiModelPref}
    >
      {models.map((model) => (
        <option key={model.id} value={model.id}>
          {model.id}
        </option>
      ))}
    </ModelSelectField>
  );
}
