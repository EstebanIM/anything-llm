import { useEffect, useId, useState } from "react";
import { useTranslation } from "react-i18next";
import System from "@/models/system";
import {
  FIELD_ERROR,
  FIELD_LABEL,
  FIELD_SELECT,
} from "@/components/ProviderFields";

export default function NativeEmbeddingOptions({ settings }) {
  const { t } = useTranslation();
  const id = useId();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [attempt, setAttempt] = useState(0);
  const [availableModels, setAvailableModels] = useState([]);
  const [selectedModel, setSelectedModel] = useState(
    settings?.EmbeddingModelPref
  );
  const [selectedModelInfo, setSelectedModelInfo] = useState();

  useEffect(() => {
    setLoading(true);
    System.customModels("native-embedder")
      .then(({ models, error }) => {
        setError(error || null);
        if (models?.length > 0) {
          setAvailableModels(models);
          const _selectedModel =
            models.find((model) => model.id === settings?.EmbeddingModelPref) ??
            models[0];
          setSelectedModel(_selectedModel.id);
          setSelectedModelInfo(_selectedModel);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [attempt]);

  useEffect(() => {
    if (!availableModels?.length || !selectedModel) return;
    setSelectedModelInfo(
      availableModels.find((model) => model.id === selectedModel)
    );
  }, [selectedModel, availableModels]);

  const status = loading
    ? "loading"
    : error && availableModels.length === 0
      ? "error"
      : availableModels.length === 0
        ? "empty"
        : "ready";

  return (
    <div className="w-full flex flex-col gap-y-4">
      <div className="w-full flex flex-col mt-1.5">
        <div className="flex flex-col w-full md:w-96">
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
              aria-describedby={
                selectedModelInfo ? `${id}-model-info` : undefined
              }
              className={`${FIELD_SELECT} md:w-60`}
            >
              <optgroup label={t("provider-forms.embedding.models-available")}>
                {availableModels.map((model) => {
                  return (
                    <option key={model.id} value={model.id}>
                      {model.name}
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
              className={`${FIELD_SELECT} md:w-60`}
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
        {status === "ready" && selectedModelInfo && (
          <div id={`${id}-model-info`} className="flex flex-col gap-y-2 mt-2">
            <p className="text-theme-text-secondary text-xs font-normal block">
              {selectedModelInfo?.description}
            </p>
            <p className="text-theme-text-secondary text-xs font-normal block">
              {t("provider-forms.embedding.native.trained-on", {
                lang: selectedModelInfo?.lang,
              })}
            </p>
            <p className="text-theme-text-secondary text-xs font-normal block">
              {t("provider-forms.embedding.native.download-size", {
                size: selectedModelInfo?.size,
              })}
            </p>
            <a
              href={selectedModelInfo?.modelCard}
              target="_blank"
              rel="noreferrer"
              className="w-fit text-theme-text-secondary text-xs font-normal underline hover:text-theme-text-primary"
            >
              {t("provider-forms.embedding.native.model-card")}
              <span aria-hidden="true"> &rarr;</span>
              <span className="sr-only">
                {" "}
                {t("provider-fields.opens-new-tab")}
              </span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
