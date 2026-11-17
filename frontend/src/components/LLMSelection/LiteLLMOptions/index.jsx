import { useEffect, useId, useState } from "react";
import { useTranslation } from "react-i18next";
import System from "@/models/system";
import {
  FIELD_COL,
  FIELD_INPUT,
  FIELD_ROW,
  SECRET_MASK,
  SecretInput,
} from "@/components/ProviderFields";
import {
  FieldLabel,
  ModelSelectField,
  blurOnWheel,
  modelStatus,
} from "@/components/LLMSelection/FormParts";

export default function LiteLLMOptions({ settings }) {
  const { t } = useTranslation();
  const id = useId();
  const [basePathValue, setBasePathValue] = useState(settings?.LiteLLMBasePath);
  const [basePath, setBasePath] = useState(settings?.LiteLLMBasePath);
  const [apiKeyValue, setApiKeyValue] = useState(settings?.LiteLLMApiKey);
  const [apiKey, setApiKey] = useState(settings?.LiteLLMApiKey);

  return (
    <div className="w-full flex flex-col gap-y-7 mt-1.5">
      <div className={FIELD_ROW}>
        <div className={FIELD_COL}>
          <FieldLabel
            htmlFor={`${id}-url`}
            label={t("provider-fields.base-url")}
          />
          <input
            id={`${id}-url`}
            type="url"
            name="LiteLLMBasePath"
            className={FIELD_INPUT}
            placeholder="http://127.0.0.1:4000"
            defaultValue={settings?.LiteLLMBasePath}
            required={true}
            autoComplete="off"
            spellCheck={false}
            onChange={(e) => setBasePathValue(e.target.value)}
            onBlur={() => setBasePath(basePathValue)}
          />
        </div>
        <LiteLLMModelSelection
          settings={settings}
          basePath={basePath}
          apiKey={apiKey}
        />
        <div className={FIELD_COL}>
          <FieldLabel
            htmlFor={`${id}-context`}
            label={t("provider-fields.context-window")}
          />
          <input
            id={`${id}-context`}
            type="number"
            name="LiteLLMTokenLimit"
            className={FIELD_INPUT}
            placeholder="8192"
            min={1}
            onWheel={blurOnWheel}
            defaultValue={settings?.LiteLLMTokenLimit}
            required={true}
            autoComplete="off"
          />
        </div>
      </div>
      <div className={FIELD_ROW}>
        <div className={FIELD_COL}>
          <FieldLabel
            htmlFor={`${id}-key`}
            label={t("provider-fields.api-key")}
            optional={true}
          />
          <SecretInput
            id={`${id}-key`}
            name="LiteLLMApiKey"
            placeholder="sk-mysecretkey"
            defaultValue={settings?.LiteLLMApiKey ? SECRET_MASK : ""}
            onChange={(e) => setApiKeyValue(e.target.value)}
            onBlur={() => setApiKey(apiKeyValue)}
          />
        </div>
      </div>
    </div>
  );
}

function LiteLLMModelSelection({ settings, basePath = null, apiKey = null }) {
  const { t } = useTranslation();
  const [customModels, setCustomModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    async function findCustomModels() {
      if (!basePath) {
        setCustomModels([]);
        setLoading(false);
        return;
      }
      setLoading(true);
      const { models, error } = await System.customModels(
        "litellm",
        typeof apiKey === "boolean" ? null : apiKey,
        basePath
      );
      setCustomModels(models || []);
      setError(error || null);
      setLoading(false);
    }
    findCustomModels();
  }, [basePath, apiKey, attempt]);

  return (
    <ModelSelectField
      name="LiteLLMModelPref"
      label={t("provider-fields.chat-model")}
      status={modelStatus({
        loading,
        error,
        count: customModels.length,
        needs: basePath ? null : "need-url",
      })}
      error={error}
      onRetry={() => setAttempt((n) => n + 1)}
      defaultValue={settings?.LiteLLMModelPref}
    >
      <optgroup label={t("llm-fields.common.loaded-models")}>
        {customModels.map((model) => (
          <option key={model.id} value={model.id}>
            {model.id}
          </option>
        ))}
      </optgroup>
    </ModelSelectField>
  );
}
