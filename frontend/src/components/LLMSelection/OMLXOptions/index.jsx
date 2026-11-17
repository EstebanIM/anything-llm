import { useEffect, useId, useState } from "react";
import { useTranslation } from "react-i18next";
import useProviderEndpointAutoDiscovery from "@/hooks/useProviderEndpointAutoDiscovery";
import System from "@/models/system";
import { OMLX_COMMON_URLS } from "@/utils/constants";
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
  ContextWindowTip,
  FieldLabel,
  ModelSelectField,
  blurOnWheel,
  modelStatus,
} from "@/components/LLMSelection/FormParts";

export default function OMLXOptions({ settings }) {
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
    provider: "omlx",
    initialBasePath: settings?.OMLXLLMBasePath,
    ENDPOINTS: OMLX_COMMON_URLS,
  });

  const [contextWindowLimit, setContextWindowLimit] = useState(
    settings?.OMLXLLMTokenLimit ?? ""
  );
  return (
    <div className="w-full flex flex-col gap-y-7">
      <div className={`${FIELD_ROW} mt-1.5`}>
        <OMLXModelSelection
          settings={settings}
          basePath={basePath.value}
          authToken={authToken.value}
        />
      </div>
      <AutoDetectRow
        provider="OMLX"
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
              tip={t("llm-fields.common.base-url-tip", { provider: "OMLX" })}
            />
            <input
              id={`${id}-url`}
              type="url"
              name="OMLXLLMBasePath"
              className={FIELD_INPUT}
              placeholder="http://127.0.0.1:8000"
              value={basePathValue.value}
              required={true}
              autoComplete="off"
              spellCheck={false}
              onChange={basePath.onChange}
              onBlur={basePath.onBlur}
            />
          </div>
        </div>
        <div className={`${FIELD_ROW} mt-4`}>
          <div className={FIELD_COL}>
            <FieldLabel
              htmlFor={`${id}-context`}
              label={t("provider-fields.context-window")}
              tip={<ContextWindowTip fallback={16000} />}
            />
            <input
              id={`${id}-context`}
              type="number"
              name="OMLXLLMTokenLimit"
              className={FIELD_INPUT}
              placeholder={t("provider-fields.context-window-auto")}
              min={1}
              value={contextWindowLimit}
              onChange={(e) =>
                setContextWindowLimit(
                  e.target.value ? Number(e.target.value) : ""
                )
              }
              onWheel={blurOnWheel}
              required={false}
              autoComplete="off"
            />
          </div>

          <div className={FIELD_COL}>
            <FieldLabel
              htmlFor={`${id}-token`}
              label={t("provider-fields.auth-token")}
              optional={true}
              tip={t("llm-fields.common.auth-token-tip", { provider: "OMLX" })}
            />
            <SecretInput
              id={`${id}-token`}
              name="OMLXLLMApiKey"
              value={
                authTokenValue.value ??
                (settings?.OMLXLLMApiKey ? SECRET_MASK : "")
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

function OMLXModelSelection({ settings, basePath = null, authToken = null }) {
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
          "omlx",
          authToken,
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
  }, [basePath, authToken, attempt]);

  return (
    <ModelSelectField
      name="OMLXLLMModelPref"
      label={t("provider-fields.chat-model")}
      status={modelStatus({
        loading,
        error,
        count: customModels.length,
        needs: basePath ? null : "need-url",
      })}
      error={error}
      onRetry={() => setAttempt((n) => n + 1)}
      defaultValue={settings?.OMLXLLMModelPref}
      help={t("llm-fields.common.model-help-select", { provider: "OMLX" })}
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
