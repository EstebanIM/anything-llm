import { useState, useEffect, useId } from "react";
import { useTranslation } from "react-i18next";
import useProviderEndpointAutoDiscovery from "@/hooks/useProviderEndpointAutoDiscovery";
import System from "@/models/system";
import { NVIDIA_NIM_COMMON_URLS } from "@/utils/constants";
import {
  FIELD_COL,
  FIELD_HELP,
  FIELD_INPUT,
  FIELD_ROW,
} from "@/components/ProviderFields";
import {
  AutoDetectButton,
  AutoDetectStatus,
  FieldLabel,
  ModelSelectField,
  modelStatus,
} from "@/components/LLMSelection/FormParts";

/**
 * This component is used to select a remote NVIDIA NIM model endpoint
 * This is the default component and way to connect to NVIDIA NIM
 * as the "managed" provider can only work in the Desktop context.
 */
export default function RemoteNvidiaNimOptions({ settings }) {
  const { t } = useTranslation();
  const id = useId();
  const {
    autoDetecting: loading,
    autoDetectStatus,
    detectedEndpoint,
    basePath,
    basePathValue,
    handleAutoDetectClick,
  } = useProviderEndpointAutoDiscovery({
    provider: "nvidia-nim",
    initialBasePath: settings?.NvidiaNimLLMBasePath,
    ENDPOINTS: NVIDIA_NIM_COMMON_URLS,
  });

  return (
    <div className={`${FIELD_ROW} mt-1.5`}>
      <div className={FIELD_COL}>
        <FieldLabel htmlFor={`${id}-url`} label={t("provider-fields.base-url")}>
          <AutoDetectButton busy={loading} onClick={handleAutoDetectClick} />
        </FieldLabel>
        <input
          id={`${id}-url`}
          type="url"
          name="NvidiaNimLLMBasePath"
          className={FIELD_INPUT}
          placeholder="http://localhost:8000/v1"
          value={basePathValue.value}
          required={true}
          autoComplete="off"
          spellCheck={false}
          aria-describedby={`${id}-url-help ${id}-url-status`}
          onChange={basePath.onChange}
          onBlur={basePath.onBlur}
        />
        <p id={`${id}-url-help`} className={FIELD_HELP}>
          {t("llm-fields.common.base-url-tip", { provider: "NVIDIA NIM" })}
        </p>
        <div id={`${id}-url-status`} className="mt-1">
          <AutoDetectStatus
            status={autoDetectStatus}
            provider="NVIDIA NIM"
            endpoint={detectedEndpoint}
          />
        </div>
      </div>
      {!settings?.credentialsOnly && (
        <NvidiaNimModelSelection
          settings={settings}
          basePath={basePath.value}
        />
      )}
    </div>
  );
}

function NvidiaNimModelSelection({ settings, basePath }) {
  const { t } = useTranslation();
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    async function findCustomModels() {
      if (!basePath) return;
      setLoading(true);
      const { models, error } = await System.customModels(
        "nvidia-nim",
        null,
        basePath
      );
      setModels(models || []);
      setError(error || null);
      setLoading(false);
    }
    findCustomModels();
  }, [basePath, attempt]);

  return (
    <ModelSelectField
      name="NvidiaNimLLMModelPref"
      label={t("provider-fields.chat-model")}
      status={modelStatus({
        loading,
        error,
        count: models.length,
        needs: basePath ? null : "need-url",
      })}
      error={error}
      onRetry={() => setAttempt((n) => n + 1)}
      defaultValue={settings?.NvidiaNimLLMModelPref}
    >
      {models.map((model) => (
        <option key={model.id} value={model.id}>
          {model.name}
        </option>
      ))}
    </ModelSelectField>
  );
}
