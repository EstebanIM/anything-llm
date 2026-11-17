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

export default function DeepSeekOptions({ settings }) {
  const { t } = useTranslation();
  const id = useId();
  const [inputValue, setInputValue] = useState(settings?.DeepSeekApiKey);
  const [deepSeekApiKey, setDeepSeekApiKey] = useState(
    settings?.DeepSeekApiKey
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
          name="DeepSeekApiKey"
          defaultValue={settings?.DeepSeekApiKey ? SECRET_MASK : ""}
          required={true}
          onChange={(e) => setInputValue(e.target.value)}
          onBlur={() => setDeepSeekApiKey(inputValue)}
        />
      </div>
      {!settings?.credentialsOnly && (
        <DeepSeekModelSelection settings={settings} apiKey={deepSeekApiKey} />
      )}
    </div>
  );
}

function DeepSeekModelSelection({ apiKey, settings }) {
  const { t } = useTranslation();
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    async function findCustomModels() {
      if (!apiKey) {
        setModels([]);
        return;
      }

      setLoading(true);
      const { models, error } = await System.customModels(
        "deepseek",
        typeof apiKey === "boolean" ? null : apiKey
      );
      setModels(models || []);
      setError(error || null);
      setLoading(false);
    }
    findCustomModels();
  }, [apiKey, attempt]);

  return (
    <ModelSelectField
      name="DeepSeekModelPref"
      label={t("provider-fields.chat-model")}
      status={modelStatus({
        loading,
        error,
        count: models.length,
        needs: apiKey ? null : "need-key",
      })}
      error={error}
      onRetry={() => setAttempt((n) => n + 1)}
      defaultValue={settings?.DeepSeekModelPref}
    >
      {models.map((model) => (
        <option key={model.id} value={model.id}>
          {model.name}
        </option>
      ))}
    </ModelSelectField>
  );
}
