import { useEffect, useId, useState } from "react";
import { useTranslation } from "react-i18next";
import System from "@/models/system";
import {
  FIELD_COL,
  FIELD_ERROR,
  FIELD_HELP,
  FIELD_INPUT,
  FIELD_LABEL,
  FIELD_SELECT,
  ModelsErrorText,
} from "@/components/ProviderFields";

/**
 * Model picker for image generation providers. Fetches the provider's
 * image-capable models and renders a dropdown - grouped by organization when the
 * provider reports one. When none can be fetched it falls back to a free-text
 * input so the user can still enter a model name manually.
 * @param {object} props
 * @param {string} props.provider - customModels provider key (e.g. "openai-imggen")
 * @param {string|boolean|null} [props.apiKey] - current API key (or true when already saved)
 * @param {boolean} [props.apiKeyRequired] - when set, models are only fetched
 * once an API key is present (saved or typed).
 * @param {string|null} [props.basePath] - current base path for self-hosted providers
 * @param {object} props.settings - system settings (for the saved model preference)
 * @param {string|null} [props.endpointName] - when set, models are only fetched
 * once a basePath is present.
 */
export default function ImageModelSelection({
  provider,
  apiKey = null,
  apiKeyRequired = false,
  basePath = null,
  settings,
  endpointName = null,
}) {
  const { t } = useTranslation();
  const id = useId();
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [attempt, setAttempt] = useState(0);
  const needsBasePath = !!endpointName && !basePath;
  const needsApiKey = apiKeyRequired && !apiKey;

  useEffect(() => {
    async function fetchModels() {
      if (needsBasePath || needsApiKey) {
        setModels([]);
        setError(null);
        setLoading(false);
        return;
      }

      setLoading(true);
      try {
        const { models, error } = await System.customModels(
          provider,
          typeof apiKey === "boolean" ? null : apiKey,
          basePath
        );
        setModels(models || []);
        setError(error || null);
      } catch (error) {
        console.error("Failed to fetch image generation models:", error);
        setModels([]);
        setError(error.message);
      }
      setLoading(false);
    }
    fetchModels();
  }, [provider, apiKey, basePath, needsBasePath, needsApiKey, attempt]);

  if (loading || needsBasePath || needsApiKey) {
    return (
      <ModelSelectionWrapper htmlFor={`${id}-model`}>
        <select
          key="pending"
          id={`${id}-model`}
          name="ImageGenerationModelPref"
          disabled={true}
          aria-busy={loading && !needsBasePath && !needsApiKey}
          className={FIELD_SELECT}
        >
          <option value="">
            {needsBasePath
              ? t("provider-fields.models-need-url")
              : needsApiKey
                ? t("provider-fields.models-need-key")
                : t("provider-fields.models-loading")}
          </option>
        </select>
      </ModelSelectionWrapper>
    );
  }

  if (models.length === 0) {
    return (
      <ModelSelectionWrapper htmlFor={`${id}-model`}>
        <input
          key="manual"
          id={`${id}-model`}
          type="text"
          name="ImageGenerationModelPref"
          className={FIELD_INPUT}
          placeholder={t("provider-forms.image-generation.model-placeholder")}
          defaultValue={settings?.ImageGenerationModelPref || ""}
          required={true}
          autoComplete="off"
          spellCheck={false}
          aria-describedby={`${id}-model-help`}
        />
        {error ? (
          <p id={`${id}-model-help`} role="alert" className={FIELD_ERROR}>
            <ModelsErrorText error={error} />{" "}
            {t("provider-forms.image-generation.models-manual-short")}{" "}
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
            {t("provider-forms.image-generation.models-manual")}
          </p>
        )}
      </ModelSelectionWrapper>
    );
  }

  const groupedModels = groupModelsByOrganization(
    models,
    t("provider-forms.image-generation.other-organization")
  );
  return (
    <ModelSelectionWrapper htmlFor={`${id}-model`}>
      <select
        key="ready"
        id={`${id}-model`}
        name="ImageGenerationModelPref"
        required={true}
        defaultValue={settings?.ImageGenerationModelPref}
        className={FIELD_SELECT}
      >
        {Object.keys(groupedModels).length > 0
          ? Object.entries(groupedModels).map(([organization, models]) => (
              <optgroup key={organization} label={organization}>
                {models.map((model) => (
                  <ModelOption key={model.id} model={model} />
                ))}
              </optgroup>
            ))
          : models.map((model) => <ModelOption key={model.id} model={model} />)}
      </select>
    </ModelSelectionWrapper>
  );
}

function ModelSelectionWrapper({ htmlFor, children }) {
  const { t } = useTranslation();
  return (
    <div className={FIELD_COL}>
      <label htmlFor={htmlFor} className={FIELD_LABEL}>
        {t("provider-fields.model")}
      </label>
      {children}
    </div>
  );
}

function ModelOption({ model }) {
  const name = model.name || model.id;
  const prefix = model.organization ? `${model.organization}:` : null;
  const label =
    prefix && name.startsWith(prefix) ? name.slice(prefix.length) : name;
  return <option value={model.id}>{label}</option>;
}

/**
 * Groups models by their reported organization - providers that do not report
 * one (eg: openai, ollama) return an empty object so the models are rendered as
 * a flat list.
 * @param {{id: string, name?: string, organization?: string}[]} models
 * @param {string} fallbackLabel - group name for models without an organization
 * @returns {Record<string, object[]>}
 */
function groupModelsByOrganization(models = [], fallbackLabel = "Other") {
  if (!models.some((model) => !!model.organization)) return {};
  return models.reduce((acc, model) => {
    const organization = model.organization || fallbackLabel;
    acc[organization] = acc[organization] || [];
    acc[organization].push(model);
    return acc;
  }, {});
}
