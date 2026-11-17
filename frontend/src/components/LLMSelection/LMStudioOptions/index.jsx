import { useEffect, useId, useState } from "react";
import { useTranslation } from "react-i18next";
import System from "@/models/system";
import { LMSTUDIO_COMMON_URLS } from "@/utils/constants";
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

export default function LMStudioOptions({ settings, showAlert = false }) {
  const { t } = useTranslation();
  const id = useId();
  const {
    autoDetecting: loading,
    autoDetectStatus,
    detectedEndpoint,
    basePath,
    basePathValue,
    authToken,
    authTokenValue,
    showAdvancedControls,
    setShowAdvancedControls,
    handleAutoDetectClick,
  } = useProviderEndpointAutoDiscovery({
    provider: "lmstudio",
    initialBasePath: settings?.LMStudioBasePath,
    ENDPOINTS: LMSTUDIO_COMMON_URLS,
  });

  const [maxTokens, setMaxTokens] = useState(
    settings?.LMStudioTokenLimit || ""
  );

  const handleMaxTokensChange = (e) => {
    setMaxTokens(e.target.value ? Number(e.target.value) : "");
  };

  return (
    <div className="w-full flex flex-col gap-y-7">
      {showAlert && <EmbedderRequiredNotice provider="LM Studio" />}
      <div className={`${FIELD_ROW} mt-1.5`}>
        <LMStudioModelSelection
          settings={settings}
          basePath={basePath.value}
          apiKey={authTokenValue.value}
        />
      </div>
      <AutoDetectRow
        provider="LM Studio"
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
              tip={t("llm-fields.common.base-url-tip", {
                provider: "LM Studio",
              })}
            />
            <input
              id={`${id}-url`}
              type="url"
              name="LMStudioBasePath"
              className={FIELD_INPUT}
              placeholder="http://localhost:1234/v1"
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
                fallback: 4096,
              })}
            />
            <input
              id={`${id}-context`}
              type="number"
              name="LMStudioTokenLimit"
              className={FIELD_INPUT}
              placeholder={t("provider-fields.context-window-auto")}
              min={1}
              value={maxTokens}
              onChange={handleMaxTokensChange}
              onWheel={blurOnWheel}
              required={false}
              autoComplete="off"
            />
          </div>
        </div>

        <div className={`${FIELD_ROW} mt-4`}>
          <div className={FIELD_COL}>
            <FieldLabel
              htmlFor={`${id}-token`}
              label={t("provider-fields.auth-token")}
              optional={true}
              tip={t("llm-fields.common.auth-token-tip", {
                provider: "LM Studio",
              })}
            />
            <SecretInput
              id={`${id}-token`}
              name="LMStudioAuthToken"
              value={
                authTokenValue.value ??
                (settings?.LMStudioAuthToken ? SECRET_MASK : "")
              }
              onChange={authToken.onChange}
              onBlur={authToken.onBlur}
              required={false}
            />
          </div>
        </div>
      </AdvancedSection>
    </div>
  );
}

function LMStudioModelSelection({ settings, basePath = null, apiKey = null }) {
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
      try {
        const { models, error } = await System.customModels(
          "lmstudio",
          apiKey,
          basePath
        );
        setCustomModels(models || []);
        setError(error || null);
      } catch (error) {
        console.error("Failed to fetch custom models:", error);
        setCustomModels([]);
        setError(error.message);
      }
      setLoading(false);
    }
    findCustomModels();
  }, [basePath, apiKey, attempt]);

  // The server answers an unreachable LM Studio with an empty list, so an
  // empty list for a given URL is reported as a connection problem.
  const unreachable = !!basePath && customModels.length === 0;

  return (
    <ModelSelectField
      name="LMStudioModelPref"
      label={t("provider-fields.chat-model")}
      status={modelStatus({
        loading,
        error: error || (unreachable ? "unreachable" : null),
        count: customModels.length,
        needs: basePath ? null : "need-url",
      })}
      error={error}
      errorMessage={t("llm-fields.lmstudio.unreachable")}
      onRetry={() => setAttempt((n) => n + 1)}
      defaultValue={settings?.LMStudioModelPref}
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
