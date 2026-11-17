import { useState, useEffect, useId } from "react";
import { useTranslation } from "react-i18next";
import System from "@/models/system";
import {
  AdvancedSection,
  FIELD_COL,
  FIELD_ROW,
  FIELD_SELECT,
  SECRET_MASK,
  SecretInput,
} from "@/components/ProviderFields";
import {
  FieldLabel,
  ModelSelectField,
  modelStatus,
} from "@/components/LLMSelection/FormParts";

export default function AnthropicAiOptions({ settings }) {
  const { t } = useTranslation();
  const id = useId();
  const [inputValue, setInputValue] = useState(settings?.AnthropicApiKey);
  const [anthropicApiKey, setAnthropicApiKey] = useState(
    settings?.AnthropicApiKey
  );

  return (
    <div className="w-full flex flex-col">
      <div className={`${FIELD_ROW} mt-1.5`}>
        <div className={FIELD_COL}>
          <FieldLabel
            htmlFor={`${id}-key`}
            label={t("provider-fields.api-key")}
          />
          <SecretInput
            id={`${id}-key`}
            name="AnthropicApiKey"
            defaultValue={settings?.AnthropicApiKey ? SECRET_MASK : ""}
            required={true}
            onChange={(e) => setInputValue(e.target.value)}
            onBlur={() => setAnthropicApiKey(inputValue)}
          />
        </div>
        {!settings?.credentialsOnly && (
          <AnthropicModelSelection
            apiKey={anthropicApiKey}
            settings={settings}
          />
        )}
      </div>
      <AdvancedSection className="mt-4">
        <div className={`${FIELD_ROW} mt-1.5`}>
          <div className={FIELD_COL}>
            <FieldLabel
              htmlFor={`${id}-cache`}
              label={t("llm-fields.anthropic.cache")}
            />
            <select
              id={`${id}-cache`}
              name="AnthropicCacheControl"
              defaultValue={settings?.AnthropicCacheControl}
              className={FIELD_SELECT}
            >
              <option value="none">{t("llm-fields.common.no-cache")}</option>
              <option value="5m">{t("llm-fields.common.five-minutes")}</option>
              <option value="1h">{t("llm-fields.common.one-hour")}</option>
            </select>
          </div>
        </div>
      </AdvancedSection>
    </div>
  );
}

function AnthropicModelSelection({ apiKey, settings }) {
  const { t } = useTranslation();
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    async function findCustomModels() {
      if (!apiKey) return;
      setLoading(true);
      const { models, error } = await System.customModels(
        "anthropic",
        typeof apiKey === "boolean" ? null : apiKey
      );
      if (models?.length > 0) setModels(models);
      setError(error || null);
      setLoading(false);
    }
    findCustomModels();
  }, [apiKey, attempt]);

  return (
    <ModelSelectField
      name="AnthropicModelPref"
      label={t("provider-fields.chat-model")}
      status={modelStatus({
        loading,
        error,
        count: models.length,
        needs: apiKey ? null : "need-key",
      })}
      error={error}
      onRetry={() => setAttempt((n) => n + 1)}
      defaultValue={settings?.AnthropicModelPref}
    >
      {models.map((model) => (
        <option key={model.id} value={model.id}>
          {model.name}
        </option>
      ))}
    </ModelSelectField>
  );
}
