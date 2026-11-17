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

export default function MinimaxOptions({ settings }) {
  const { t } = useTranslation();
  const id = useId();
  const [inputValue, setInputValue] = useState(settings?.MinimaxApiKey);
  const [apiKey, setApiKey] = useState(settings?.MinimaxApiKey);

  return (
    <div className={`${FIELD_ROW} mt-1.5`}>
      <div className={FIELD_COL}>
        <FieldLabel
          htmlFor={`${id}-key`}
          label={t("provider-fields.api-key")}
        />
        <SecretInput
          id={`${id}-key`}
          name="MinimaxApiKey"
          defaultValue={settings?.MinimaxApiKey ? SECRET_MASK : ""}
          required={true}
          onChange={(e) => setInputValue(e.target.value)}
          onBlur={() => setApiKey(inputValue)}
        />
      </div>

      <MinimaxModelSelection settings={settings} apiKey={apiKey} />
    </div>
  );
}

function MinimaxModelSelection({ apiKey, settings }) {
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
        "minimax",
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
      name="MinimaxModelPref"
      label={t("provider-fields.chat-model")}
      status={modelStatus({
        loading,
        error,
        count: models.length,
        needs: apiKey ? null : "need-key",
      })}
      error={error}
      onRetry={() => setAttempt((n) => n + 1)}
      defaultValue={settings?.MinimaxModelPref}
    >
      {models.map((model) => (
        <option key={model.id} value={model.id}>
          {model.name || model.id}
        </option>
      ))}
    </ModelSelectField>
  );
}
