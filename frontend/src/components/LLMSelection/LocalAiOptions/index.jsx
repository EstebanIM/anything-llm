import { useEffect, useId, useState } from "react";
import { useTranslation } from "react-i18next";
import System from "@/models/system";
import { LOCALAI_COMMON_URLS } from "@/utils/constants";
import useProviderEndpointAutoDiscovery from "@/hooks/useProviderEndpointAutoDiscovery";
import {
  AdvancedSection,
  FIELD_COL,
  FIELD_INPUT,
  FIELD_ROW,
  SECRET_MASK,
  SecretInput,
} from "@/components/ProviderFields";
import {
  AutoDetectRow,
  EmbedderRequiredNotice,
  FieldLabel,
  ModelSelectField,
  blurOnWheel,
  modelStatus,
} from "@/components/LLMSelection/FormParts";

export default function LocalAiOptions({ settings, showAlert = false }) {
  const { t } = useTranslation();
  const id = useId();
  const {
    autoDetecting: loading,
    autoDetectStatus,
    detectedEndpoint,
    basePath,
    basePathValue,
    showAdvancedControls,
    setShowAdvancedControls,
    handleAutoDetectClick,
  } = useProviderEndpointAutoDiscovery({
    provider: "localai",
    initialBasePath: settings?.LocalAiBasePath,
    ENDPOINTS: LOCALAI_COMMON_URLS,
  });
  const [apiKeyValue, setApiKeyValue] = useState(settings?.LocalAiApiKey);
  const [apiKey, setApiKey] = useState(settings?.LocalAiApiKey);
  const [maxTokens, setMaxTokens] = useState(settings?.LocalAiTokenLimit || "");

  return (
    <div className="w-full flex flex-col gap-y-7">
      {showAlert && <EmbedderRequiredNotice provider="LocalAI" />}
      <div className={`${FIELD_ROW} mt-1.5`}>
        {!settings?.credentialsOnly && (
          <LocalAIModelSelection
            settings={settings}
            basePath={basePath.value}
            apiKey={apiKey}
          />
        )}
        <div className={FIELD_COL}>
          <FieldLabel
            htmlFor={`${id}-key`}
            label={t("provider-fields.api-key")}
            optional={true}
          />
          <SecretInput
            id={`${id}-key`}
            name="LocalAiApiKey"
            placeholder="sk-mysecretkey"
            defaultValue={settings?.LocalAiApiKey ? SECRET_MASK : ""}
            onChange={(e) => setApiKeyValue(e.target.value)}
            onBlur={() => setApiKey(apiKeyValue)}
          />
        </div>
      </div>
      <AutoDetectRow
        provider="LocalAI"
        busy={loading}
        status={autoDetectStatus}
        endpoint={detectedEndpoint}
        onDetect={handleAutoDetectClick}
      />
      <AdvancedSection
        open={showAdvancedControls}
        onOpenChange={setShowAdvancedControls}
      >
        <div className={`${FIELD_ROW} mt-4`}>
          <div className={FIELD_COL}>
            <FieldLabel
              htmlFor={`${id}-url`}
              label={t("provider-fields.base-url")}
            />
            <input
              id={`${id}-url`}
              type="url"
              name="LocalAiBasePath"
              className={FIELD_INPUT}
              placeholder="http://localhost:8080/v1"
              value={basePathValue.value}
              required={true}
              autoComplete="off"
              spellCheck={false}
              onChange={basePath.onChange}
              onBlur={basePath.onBlur}
            />
          </div>
          <div className={FIELD_COL}>
            <FieldLabel
              htmlFor={`${id}-context`}
              label={t("provider-fields.context-window")}
              tip={t("llm-fields.common.context-window-override-tip", {
                fallback: 8192,
              })}
            />
            <input
              id={`${id}-context`}
              type="number"
              name="LocalAiTokenLimit"
              className={FIELD_INPUT}
              placeholder={t("provider-fields.context-window-auto")}
              min={1}
              value={maxTokens}
              onChange={(e) =>
                setMaxTokens(e.target.value ? Number(e.target.value) : "")
              }
              onWheel={blurOnWheel}
              required={false}
              autoComplete="off"
            />
          </div>
        </div>
      </AdvancedSection>
    </div>
  );
}

function LocalAIModelSelection({ settings, basePath = null, apiKey = null }) {
  const { t } = useTranslation();
  const [customModels, setCustomModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [attempt, setAttempt] = useState(0);
  const validUrl = !!basePath && basePath.includes("/v1");

  useEffect(() => {
    async function findCustomModels() {
      if (!basePath || !basePath.includes("/v1")) {
        setCustomModels([]);
        setLoading(false);
        return;
      }
      setLoading(true);
      const { models, error } = await System.customModels(
        "localai",
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
      name="LocalAiModelPref"
      label={t("provider-fields.chat-model")}
      status={modelStatus({
        loading,
        error,
        count: customModels.length,
        needs: validUrl ? null : "need-url",
      })}
      messages={
        basePath && !validUrl
          ? { "need-url": t("llm-fields.common.url-needs-v1") }
          : undefined
      }
      error={error}
      onRetry={() => setAttempt((n) => n + 1)}
      defaultValue={settings?.LocalAiModelPref}
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
