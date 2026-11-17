import { useState, useEffect, useId } from "react";
import { useTranslation } from "react-i18next";
import System from "@/models/system";
import {
  FIELD_COL,
  FIELD_ERROR,
  FIELD_LABEL,
  FIELD_ROW,
  FIELD_SELECT,
  ModelsErrorText,
  SECRET_MASK,
  SecretInput,
} from "@/components/ProviderFields";

export default function OpenRouterOptions({ settings }) {
  const { t } = useTranslation();
  const id = useId();

  return (
    <div className="w-full flex flex-col gap-y-4">
      <div className={`${FIELD_ROW} mt-1.5`}>
        <div className={FIELD_COL}>
          <label htmlFor={`${id}-api-key`} className={FIELD_LABEL}>
            {t("provider-fields.api-key")}
          </label>
          <SecretInput
            id={`${id}-api-key`}
            name="OpenRouterApiKey"
            defaultValue={settings?.OpenRouterApiKey ? SECRET_MASK : ""}
            required={true}
          />
        </div>
        <OpenRouterEmbeddingModelSelection settings={settings} />
      </div>
    </div>
  );
}

function OpenRouterEmbeddingModelSelection({ settings }) {
  const { t } = useTranslation();
  const id = useId();
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [attempt, setAttempt] = useState(0);
  const [selectedModel, setSelectedModel] = useState(
    settings?.EmbeddingModelPref || ""
  );

  useEffect(() => {
    async function fetchModels() {
      setLoading(true);
      const response = await System.customModels("openrouter-embedder");
      const fetchedModels = response?.models || [];
      setModels(fetchedModels);
      setError(response?.error || null);

      if (
        settings?.EmbeddingModelPref &&
        fetchedModels.some((m) => m.id === settings.EmbeddingModelPref)
      ) {
        setSelectedModel(settings.EmbeddingModelPref);
      } else if (fetchedModels.length > 0) {
        setSelectedModel(fetchedModels[0].id);
      }

      setLoading(false);
    }
    fetchModels();
  }, [settings?.EmbeddingModelPref, attempt]);

  const status = loading
    ? "loading"
    : error
      ? "error"
      : models.length === 0
        ? "empty"
        : "ready";

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
          value={selectedModel}
          onChange={(e) => setSelectedModel(e.target.value)}
          className={FIELD_SELECT}
        >
          {models.map((model) => (
            <option key={model.id} value={model.id}>
              {model.name}
            </option>
          ))}
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
          <option value="">
            {status === "loading"
              ? t("provider-fields.models-loading")
              : t("provider-fields.models-empty")}
          </option>
        </select>
      )}
      {status === "error" && (
        <p id={`${id}-model-error`} role="alert" className={FIELD_ERROR}>
          <ModelsErrorText error={error} />{" "}
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
