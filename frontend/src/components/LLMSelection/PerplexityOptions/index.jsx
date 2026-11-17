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

export default function PerplexityOptions({ settings }) {
  const { t } = useTranslation();
  const id = useId();

  return (
    <div className={`${FIELD_ROW} mt-1.5`}>
      <div className={FIELD_COL}>
        <FieldLabel
          htmlFor={`${id}-key`}
          label={t("provider-fields.api-key")}
        />
        <SecretInput
          id={`${id}-key`}
          name="PerplexityApiKey"
          defaultValue={settings?.PerplexityApiKey ? SECRET_MASK : ""}
          required={true}
        />
      </div>
      {!settings?.credentialsOnly && (
        <PerplexityModelSelection settings={settings} />
      )}
    </div>
  );
}

function PerplexityModelSelection({ settings }) {
  const { t } = useTranslation();
  const [customModels, setCustomModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    async function findCustomModels() {
      setLoading(true);
      const { models, error } = await System.customModels("perplexity");
      setCustomModels(models || []);
      setError(error || null);
      setLoading(false);
    }
    findCustomModels();
  }, [attempt]);

  return (
    <ModelSelectField
      name="PerplexityModelPref"
      label={t("provider-fields.chat-model")}
      status={modelStatus({ loading, error, count: customModels.length })}
      error={error}
      onRetry={() => setAttempt((n) => n + 1)}
      defaultValue={settings?.PerplexityModelPref}
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
