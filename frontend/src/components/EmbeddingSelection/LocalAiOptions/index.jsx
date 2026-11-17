import { useEffect, useId, useState } from "react";
import { useTranslation } from "react-i18next";
import { LoaderCircle } from "lucide-react";
import System from "@/models/system";
import { LOCALAI_COMMON_URLS } from "@/utils/constants";
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

const PROVIDER_NAME = "LocalAI";

export default function LocalAiOptions({ settings }) {
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
    initialBasePath: settings?.EmbeddingBasePath,
    ENDPOINTS: LOCALAI_COMMON_URLS,
  });
  // A detection started by hand must not fold the section with the focused button inside.
  const [keepOpen, setKeepOpen] = useState(false);
  const [apiKeyValue, setApiKeyValue] = useState(settings?.LocalAiApiKey);
  const [apiKey, setApiKey] = useState(settings?.LocalAiApiKey);

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
        <LocalAIModelSelection
          settings={settings}
          apiKey={apiKey}
          basePath={basePath.value}
        />
        <div className={FIELD_COL}>
          <label htmlFor={`${id}-api-key`} className={FIELD_LABEL}>
            {t("provider-fields.api-key")}{" "}
            <span className="font-normal text-theme-text-secondary">
              ({t("provider-fields.optional")})
            </span>
          </label>
          <SecretInput
            id={`${id}-api-key`}
            name="LocalAiApiKey"
            placeholder="sk-mysecretkey"
            defaultValue={settings?.LocalAiApiKey ? SECRET_MASK : ""}
            onChange={(e) => setApiKeyValue(e.target.value)}
            onBlur={() => setApiKey(apiKeyValue)}
          />
        </div>
      </div>
      <div className={FIELD_ROW}>
        <div className={FIELD_COL}>
          <label htmlFor={`${id}-chunk`} className={FIELD_LABEL}>
            {t("provider-fields.max-chunk-length")}
          </label>
          <input
            id={`${id}-chunk`}
            type="number"
            name="EmbeddingModelMaxChunkLength"
            className={FIELD_INPUT}
            placeholder="1000"
            min={1}
            step={1}
            onWheel={(e) => e.currentTarget.blur()}
            defaultValue={settings?.EmbeddingModelMaxChunkLength}
            required={false}
            autoComplete="off"
            aria-describedby={`${id}-chunk-help`}
          />
          <p id={`${id}-chunk-help`} className={FIELD_HELP}>
            {t("provider-forms.embedding.max-chunk-length-help")}
          </p>
        </div>

        <div className={FIELD_COL}>
          <label htmlFor={`${id}-dimensions`} className={FIELD_LABEL}>
            {t("provider-forms.embedding.output-dimensions")}
          </label>
          <input
            id={`${id}-dimensions`}
            type="number"
            name="EmbeddingOutputDimensions"
            className={FIELD_INPUT}
            placeholder={t(
              "provider-forms.embedding.output-dimensions-placeholder"
            )}
            min={1}
            step={1}
            onWheel={(e) => e.currentTarget.blur()}
            defaultValue={settings?.EmbeddingOutputDimensions}
            required={false}
            autoComplete="off"
            aria-describedby={`${id}-dimensions-help`}
          />
          <p id={`${id}-dimensions-help`} className={FIELD_HELP}>
            {t("provider-forms.embedding.output-dimensions-help")}
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
                placeholder="http://localhost:8080/v1"
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

function LocalAIModelSelection({ settings, apiKey = null, basePath = null }) {
  const { t } = useTranslation();
  const id = useId();
  const [customModels, setCustomModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [attempt, setAttempt] = useState(0);
  const validBasePath = !!basePath && basePath.includes("/v1");

  useEffect(() => {
    async function findCustomModels() {
      if (!validBasePath) {
        setCustomModels([]);
        setError(null);
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

  const status = loading
    ? "loading"
    : !validBasePath
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
            hasProblem
              ? `${id}-model-error`
              : status === "need-url" && !!basePath
                ? `${id}-model-help`
                : undefined
          }
          className={FIELD_SELECT}
        >
          <option value="">{statusText}</option>
        </select>
      )}
      {status === "need-url" && !!basePath && (
        <p id={`${id}-model-help`} className={FIELD_HELP}>
          {t("provider-forms.embedding.localai.needs-v1")}
        </p>
      )}
      {hasProblem && (
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
      )}
    </div>
  );
}
