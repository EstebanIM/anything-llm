import { useEffect, useId, useState } from "react";
import { useTranslation } from "react-i18next";
import { TriangleAlert } from "lucide-react";
import System from "@/models/system";
import {
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

export default function LiteLLMOptions({ settings }) {
  const { t } = useTranslation();
  const id = useId();
  const [basePathValue, setBasePathValue] = useState(settings?.LiteLLMBasePath);
  const [basePath, setBasePath] = useState(settings?.LiteLLMBasePath);
  const [apiKeyValue, setApiKeyValue] = useState(settings?.LiteLLMApiKey);
  const [apiKey, setApiKey] = useState(settings?.LiteLLMApiKey);

  return (
    <div className="w-full flex flex-col gap-y-7">
      <div className={`${FIELD_ROW} mt-1.5`}>
        <div className={FIELD_COL}>
          <label htmlFor={`${id}-base-url`} className={FIELD_LABEL}>
            {t("provider-fields.base-url")}
          </label>
          <input
            id={`${id}-base-url`}
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
      </div>
      <div className={FIELD_ROW}>
        <div className={FIELD_COL}>
          <label htmlFor={`${id}-api-key`} className={FIELD_LABEL}>
            {t("provider-fields.api-key")}{" "}
            <span className="font-normal text-theme-text-secondary">
              ({t("provider-fields.optional")})
            </span>
          </label>
          <SecretInput
            id={`${id}-api-key`}
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
          aria-describedby={`${id}-model-warning`}
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
            status === "error" ? `${id}-model-error` : undefined
          }
          className={FIELD_SELECT}
        >
          <option value="">{statusText}</option>
        </select>
      )}
      {status === "ready" && (
        <p
          id={`${id}-model-warning`}
          role="alert"
          className="mt-2 flex gap-x-1.5 text-xs text-amber-400 light:text-amber-800"
        >
          <TriangleAlert
            strokeWidth={1.5}
            size={14}
            aria-hidden="true"
            className="shrink-0 mt-0.5"
          />
          <span>
            {t("provider-forms.embedding.litellm.model-warning")}{" "}
            <a
              href="https://litellm.vercel.app/docs/embedding/supported_embedding"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              {t("provider-forms.embedding.litellm.model-warning-link")}
              <span className="sr-only">
                {" "}
                {t("provider-fields.opens-new-tab")}
              </span>
            </a>
          </span>
        </p>
      )}
      {status === "error" && (
        <p id={`${id}-model-error`} role="alert" className={FIELD_ERROR}>
          {t("provider-fields.models-error", { error })}{" "}
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
