import { useEffect, useId, useState } from "react";
import { useTranslation } from "react-i18next";
import System from "@/models/system";
import { KOBOLDCPP_COMMON_URLS } from "@/utils/constants";
import useProviderEndpointAutoDiscovery from "@/hooks/useProviderEndpointAutoDiscovery";
import {
  AdvancedSection,
  FIELD_COL,
  FIELD_INPUT,
  FIELD_ROW,
} from "@/components/ProviderFields";
import {
  AutoDetectRow,
  FieldLabel,
  ModelSelectField,
  blurOnWheel,
  modelStatus,
} from "@/components/LLMSelection/FormParts";

export default function KoboldCPPOptions({ settings }) {
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
    provider: "koboldcpp",
    initialBasePath: settings?.KoboldCPPBasePath,
    ENDPOINTS: KOBOLDCPP_COMMON_URLS,
  });

  const [tokenLimit, setTokenLimit] = useState(
    settings?.KoboldCPPTokenLimit || ""
  );
  const [maxTokens, setMaxTokens] = useState(
    settings?.KoboldCPPMaxTokens || ""
  );

  const handleTokenLimitChange = (e) => {
    setTokenLimit(e.target.value ? Number(e.target.value) : "");
  };

  const handleMaxTokensChange = (e) => {
    setMaxTokens(e.target.value ? Number(e.target.value) : "");
  };

  return (
    <div className="w-full flex flex-col gap-y-7">
      <div className={`${FIELD_ROW} mt-1.5`}>
        <KoboldCPPModelSelection
          settings={settings}
          basePath={basePath.value}
        />
        <div className={FIELD_COL}>
          <FieldLabel
            htmlFor={`${id}-context`}
            label={t("provider-fields.context-window")}
            tip={t("llm-fields.common.context-window-override-tip", {
              fallback: 16384,
            })}
          />
          <input
            id={`${id}-context`}
            type="number"
            name="KoboldCPPTokenLimit"
            className={FIELD_INPUT}
            placeholder={t("provider-fields.context-window-auto")}
            min={1}
            value={tokenLimit}
            onChange={handleTokenLimitChange}
            onWheel={blurOnWheel}
            required={false}
            autoComplete="off"
          />
        </div>
        <div className={FIELD_COL}>
          <FieldLabel
            htmlFor={`${id}-max-tokens`}
            label={t("llm-fields.common.max-response-tokens")}
            tip={t("llm-fields.koboldcpp.max-tokens-tip")}
          />
          <input
            id={`${id}-max-tokens`}
            type="number"
            name="KoboldCPPMaxTokens"
            className={FIELD_INPUT}
            placeholder="2048"
            min={1}
            value={maxTokens}
            onChange={handleMaxTokensChange}
            onWheel={blurOnWheel}
            required={false}
            autoComplete="off"
          />
        </div>
      </div>
      <AutoDetectRow
        provider="KoboldCPP"
        busy={loading}
        status={autoDetectStatus}
        endpoint={detectedEndpoint}
        onDetect={handleAutoDetectClick}
      />

      <AdvancedSection
        label={t("llm-fields.common.manual-endpoint")}
        open={showAdvancedControls}
        onOpenChange={setShowAdvancedControls}
      >
        <div className={`${FIELD_ROW} mt-4`}>
          <div className={FIELD_COL}>
            <FieldLabel
              htmlFor={`${id}-url`}
              label={t("provider-fields.base-url")}
              tip={t("llm-fields.common.base-url-tip", {
                provider: "KoboldCPP",
              })}
            />
            <input
              id={`${id}-url`}
              type="url"
              name="KoboldCPPBasePath"
              className={FIELD_INPUT}
              placeholder="http://127.0.0.1:5001/v1"
              value={basePathValue.value}
              required={true}
              autoComplete="off"
              spellCheck={false}
              onChange={basePath.onChange}
              onBlur={basePath.onBlur}
            />
          </div>
        </div>
      </AdvancedSection>
    </div>
  );
}

function KoboldCPPModelSelection({ settings, basePath = null }) {
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
      try {
        const { models, error } = await System.customModels(
          "koboldcpp",
          null,
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
  }, [basePath, attempt]);

  return (
    <ModelSelectField
      name="KoboldCPPModelPref"
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
      defaultValue={settings?.KoboldCPPModelPref}
    >
      {customModels.map((model) => (
        <option key={model.id} value={model.id}>
          {model.id}
        </option>
      ))}
    </ModelSelectField>
  );
}
