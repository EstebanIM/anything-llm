import { useEffect, useId, useState } from "react";
import { useTranslation } from "react-i18next";
import System from "@/models/system";
import { OLLAMA_COMMON_URLS } from "@/utils/constants";
import useProviderEndpointAutoDiscovery from "@/hooks/useProviderEndpointAutoDiscovery";
import {
  AdvancedSection,
  FIELD_COL,
  FIELD_INPUT,
  FIELD_ROW,
  FIELD_SELECT,
  SECRET_MASK,
  SecretInput,
} from "@/components/ProviderFields";
import {
  AutoDetectRow,
  ContextWindowTip,
  ExternalLink,
  FieldLabel,
  ModelSelectField,
  blurOnWheel,
  modelStatus,
} from "@/components/LLMSelection/FormParts";

export default function OllamaLLMOptions({ settings }) {
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
    provider: "ollama",
    initialBasePath: settings?.OllamaLLMBasePath,
    ENDPOINTS: OLLAMA_COMMON_URLS,
  });
  const [maxTokens, setMaxTokens] = useState(
    settings?.OllamaLLMTokenLimit || ""
  );

  return (
    <div className="w-full flex flex-col gap-y-7">
      <div className={`${FIELD_ROW} mt-1.5`}>
        <OllamaLLMModelSelection
          settings={settings}
          basePath={basePath.value}
          authToken={authToken.value}
        />
      </div>
      <AutoDetectRow
        provider="Ollama"
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
              tip={t("llm-fields.common.base-url-tip", { provider: "Ollama" })}
            />
            <input
              id={`${id}-url`}
              type="url"
              name="OllamaLLMBasePath"
              className={FIELD_INPUT}
              placeholder="http://127.0.0.1:11434"
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
              htmlFor={`${id}-keep-alive`}
              label={t("llm-fields.common.keep-alive")}
              tipClickable={true}
              tip={
                <>
                  {t("llm-fields.common.keep-alive-tip", {
                    provider: "Ollama",
                  })}{" "}
                  <ExternalLink
                    href="https://docs.ollama.com/faq#how-do-i-keep-a-model-loaded-in-memory-or-make-it-unload-immediately"
                    className="underline"
                  >
                    {t("llm-fields.common.learn-more")}
                  </ExternalLink>
                </>
              }
            />
            <select
              id={`${id}-keep-alive`}
              name="OllamaLLMKeepAliveSeconds"
              required={true}
              className={FIELD_SELECT}
              defaultValue={settings?.OllamaLLMKeepAliveSeconds ?? "300"}
            >
              <option value="0">{t("llm-fields.common.no-cache")}</option>
              <option value="300">{t("llm-fields.common.five-minutes")}</option>
              <option value="3600">{t("llm-fields.common.one-hour")}</option>
              <option value="-1">{t("llm-fields.common.forever")}</option>
            </select>
          </div>
        </div>
        <div className={`${FIELD_ROW} mt-4`}>
          <div className={FIELD_COL}>
            <FieldLabel
              htmlFor={`${id}-context`}
              label={t("provider-fields.context-window")}
              tip={<ContextWindowTip fallback={4096} />}
            />
            <input
              id={`${id}-context`}
              type="number"
              name="OllamaLLMTokenLimit"
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

          <div className={FIELD_COL}>
            <FieldLabel
              htmlFor={`${id}-token`}
              label={t("provider-fields.auth-token")}
              optional={true}
              tip={t("llm-fields.common.auth-token-tip", {
                provider: "Ollama",
              })}
            />
            <SecretInput
              id={`${id}-token`}
              name="OllamaLLMAuthToken"
              value={
                authTokenValue.value ??
                (settings?.OllamaLLMAuthToken ? SECRET_MASK : "")
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

function OllamaLLMModelSelection({
  settings,
  basePath = null,
  authToken = null,
}) {
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
          "ollama",
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
      name="OllamaLLMModelPref"
      label={t("provider-fields.chat-model")}
      status={modelStatus({
        loading,
        error,
        count: customModels.length,
        needs: basePath ? null : "need-url",
      })}
      error={error}
      onRetry={() => setAttempt((n) => n + 1)}
      defaultValue={settings?.OllamaLLMModelPref}
      help={t("llm-fields.common.model-help-select", { provider: "Ollama" })}
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
