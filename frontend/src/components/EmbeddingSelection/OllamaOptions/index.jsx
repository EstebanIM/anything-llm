import { useEffect, useId, useState } from "react";
import { useTranslation } from "react-i18next";
import { LoaderCircle } from "lucide-react";
import System from "@/models/system";
import { OLLAMA_COMMON_URLS } from "@/utils/constants";
import useProviderEndpointAutoDiscovery from "@/hooks/useProviderEndpointAutoDiscovery";
import {
  AdvancedSection,
  FIELD_COL,
  FIELD_ERROR,
  FIELD_HELP,
  FIELD_INPUT,
  FIELD_LABEL,
  FIELD_ROW,
  FIELD_SELECT,
  SECRET_MASK,
  SecretInput,
} from "@/components/ProviderFields";

const PROVIDER_NAME = "Ollama";

export default function OllamaEmbeddingOptions({ settings }) {
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
    authToken,
  } = useProviderEndpointAutoDiscovery({
    provider: "ollama",
    initialBasePath: settings?.EmbeddingBasePath,
    ENDPOINTS: OLLAMA_COMMON_URLS,
  });
  // A detection started by hand must not fold the section with the focused button inside.
  const [keepOpen, setKeepOpen] = useState(false);

  const [maxChunkLength, setMaxChunkLength] = useState(
    settings?.EmbeddingModelMaxChunkLength || 8192
  );
  const [batchSize, setBatchSize] = useState(
    settings?.OllamaEmbeddingBatchSize || 1
  );

  const handleMaxChunkLengthChange = (e) => {
    setMaxChunkLength(Number(e.target.value));
  };

  const handleBatchSizeChange = (e) => {
    setBatchSize(Number(e.target.value));
  };

  const detectMessage =
    autoDetectStatus === "found"
      ? t("provider-fields.detect-success", {
          provider: PROVIDER_NAME,
          url: detectedEndpoint,
        })
      : autoDetectStatus === "not-found"
        ? t("provider-fields.detect-failed", { provider: PROVIDER_NAME })
        : "";

  return (
    <div className="w-full flex flex-col gap-y-7">
      <div className={`${FIELD_ROW} mt-1.5`}>
        <OllamaEmbeddingModelSelection
          settings={settings}
          basePath={basePath.value}
        />
        <div className={FIELD_COL}>
          <label htmlFor={`${id}-chunk`} className={FIELD_LABEL}>
            {t("provider-fields.max-chunk-length")}
          </label>
          <input
            id={`${id}-chunk`}
            type="number"
            name="EmbeddingModelMaxChunkLength"
            className={FIELD_INPUT}
            placeholder="8192"
            min={1}
            step={1}
            value={maxChunkLength}
            onChange={handleMaxChunkLengthChange}
            onWheel={(e) => e.currentTarget.blur()}
            required={true}
            autoComplete="off"
            aria-describedby={`${id}-chunk-help`}
          />
          <p id={`${id}-chunk-help`} className={FIELD_HELP}>
            {t("provider-forms.embedding.max-chunk-length-help")}
          </p>
        </div>
      </div>

      <div>
        <AdvancedSection
          open={showAdvancedControls || keepOpen}
          onOpenChange={(next) => {
            setKeepOpen(false);
            setShowAdvancedControls(next);
          }}
        >
          <div className={`${FIELD_ROW} mt-4`}>
            <div className={FIELD_COL}>
              <div className="flex items-center justify-between gap-x-2 mb-3">
                <label
                  htmlFor={`${id}-base-url`}
                  className="text-white text-sm font-semibold"
                >
                  {t("provider-fields.base-url")}
                </label>
                <button
                  type="button"
                  onClick={(e) => {
                    if (loading) return;
                    setKeepOpen(true);
                    handleAutoDetectClick(e);
                  }}
                  aria-disabled={loading}
                  aria-busy={loading}
                  className="inline-flex items-center justify-center gap-x-1 shrink-0 rounded-lg border-none bg-primary-button text-theme-button-primary-text hover:bg-primary-button-hover text-xs font-medium px-3 md:px-2 min-h-[44px] md:min-h-[28px] transition-colors duration-quick ease-smooth aria-disabled:cursor-wait aria-disabled:opacity-70"
                >
                  {loading && (
                    <LoaderCircle
                      strokeWidth={1.5}
                      size={14}
                      aria-hidden="true"
                      className="animate-spin"
                    />
                  )}
                  {loading
                    ? t("provider-fields.detecting")
                    : t("provider-fields.auto-detect")}
                </button>
              </div>
              <input
                id={`${id}-base-url`}
                type="url"
                name="EmbeddingBasePath"
                className={FIELD_INPUT}
                placeholder="http://127.0.0.1:11434"
                value={basePathValue.value || ""}
                required={true}
                autoComplete="off"
                spellCheck={false}
                onChange={basePath.onChange}
                onBlur={basePath.onBlur}
                aria-describedby={`${id}-base-url-help`}
              />
              <p id={`${id}-base-url-help`} className={FIELD_HELP}>
                {t("provider-forms.shared.url-help", {
                  provider: PROVIDER_NAME,
                })}
              </p>
            </div>
            <div className={FIELD_COL}>
              <label htmlFor={`${id}-batch`} className={FIELD_LABEL}>
                {t("provider-forms.embedding.ollama.batch-size")}
              </label>
              <input
                id={`${id}-batch`}
                type="number"
                name="OllamaEmbeddingBatchSize"
                className={FIELD_INPUT}
                placeholder="1"
                min={1}
                step={1}
                value={batchSize}
                onChange={handleBatchSizeChange}
                onWheel={(e) => e.currentTarget.blur()}
                required={true}
                autoComplete="off"
                aria-describedby={`${id}-batch-help`}
              />
              <p id={`${id}-batch-help`} className={FIELD_HELP}>
                {t("provider-forms.embedding.ollama.batch-size-help")}
              </p>
            </div>
            <div className={FIELD_COL}>
              <label htmlFor={`${id}-auth-token`} className={FIELD_LABEL}>
                {t("provider-fields.auth-token")}{" "}
                <span className="font-normal text-theme-text-secondary">
                  ({t("provider-fields.optional")})
                </span>
              </label>
              <SecretInput
                id={`${id}-auth-token`}
                name="OllamaLLMAuthToken"
                defaultValue={settings?.OllamaLLMAuthToken ? SECRET_MASK : ""}
                onChange={authToken.onChange}
                onBlur={authToken.onBlur}
                required={false}
                aria-describedby={`${id}-auth-token-help`}
              />
              <p id={`${id}-auth-token-help`} className={FIELD_HELP}>
                {t("provider-forms.shared.bearer-help", {
                  provider: PROVIDER_NAME,
                })}
              </p>
            </div>
          </div>
        </AdvancedSection>
        <p
          aria-live="polite"
          className={detectMessage ? FIELD_HELP : "sr-only"}
        >
          {detectMessage}
        </p>
      </div>
    </div>
  );
}

function OllamaEmbeddingModelSelection({ settings, basePath = null }) {
  const { t } = useTranslation();
  const id = useId();
  const [customModels, setCustomModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    async function findCustomModels() {
      if (!basePath) {
        setCustomModels([]);
        setError(null);
        setLoading(false);
        return;
      }
      setLoading(true);
      try {
        const { models, error } = await System.customModels(
          "ollama",
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

  const status = loading
    ? "loading"
    : !basePath
      ? "need-url"
      : error
        ? "error"
        : customModels.length === 0
          ? "empty"
          : "ready";
  const statusText = {
    loading: t("provider-fields.models-loading"),
    "need-url": t("provider-fields.models-need-url"),
    error: t("provider-fields.models-empty"),
    empty: t("provider-fields.models-empty"),
  }[status];
  const hasProblem = status === "error" || status === "empty";

  return (
    <div className={FIELD_COL}>
      <label htmlFor={`${id}-model`} className={FIELD_LABEL}>
        {t("provider-fields.embedding-model")}
      </label>
      {status === "ready" ? (
        <select
          key="ready"
          id={`${id}-model`}
          name="EmbeddingModelPref"
          required={true}
          defaultValue={settings?.EmbeddingModelPref}
          aria-describedby={`${id}-model-help`}
          className={FIELD_SELECT}
        >
          <optgroup label={t("provider-forms.shared.models-loaded")}>
            {customModels.map((model) => {
              return (
                <option key={model.id} value={model.id}>
                  {model.id}
                </option>
              );
            })}
          </optgroup>
        </select>
      ) : (
        <select
          key="pending"
          id={`${id}-model`}
          name="EmbeddingModelPref"
          disabled={true}
          aria-busy={status === "loading"}
          aria-describedby={
            hasProblem ? `${id}-model-error` : `${id}-model-help`
          }
          className={FIELD_SELECT}
        >
          <option value="">{statusText}</option>
        </select>
      )}
      {hasProblem ? (
        <p id={`${id}-model-error`} role="alert" className={FIELD_ERROR}>
          {status === "error"
            ? t("provider-fields.models-error", { error })
            : t("provider-forms.shared.models-unreachable", {
                provider: PROVIDER_NAME,
              })}{" "}
          <button
            type="button"
            onClick={() => setAttempt((n) => n + 1)}
            className="inline-flex items-center min-h-[44px] md:min-h-0 font-semibold underline underline-offset-2"
          >
            {t("provider-fields.retry")}
          </button>
        </p>
      ) : (
        <p id={`${id}-model-help`} className={FIELD_HELP}>
          {t("provider-forms.embedding.model-help", {
            provider: PROVIDER_NAME,
          })}
        </p>
      )}
    </div>
  );
}
