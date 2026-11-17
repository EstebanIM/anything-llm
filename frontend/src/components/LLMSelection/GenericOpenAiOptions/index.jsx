import { useState, useEffect, useId } from "react";
import { useTranslation } from "react-i18next";
import System from "@/models/system";
import {
  FIELD_COL,
  FIELD_ERROR,
  FIELD_INPUT,
  FIELD_ROW,
  SECRET_MASK,
  SecretInput,
} from "@/components/ProviderFields";
import {
  FieldLabel,
  ModelSelectField,
  blurOnWheel,
} from "@/components/LLMSelection/FormParts";

export default function GenericOpenAiOptions({ settings }) {
  const { t } = useTranslation();
  const id = useId();
  const [genericOpenAiBasePath, setGenericOpenAiBasePath] = useState(
    settings?.GenericOpenAiBasePath
  );
  const [genericOpenAiApiKey, setGenericOpenAiApiKey] = useState(
    settings?.GenericOpenAiApiKey
  );
  const [genericOpenAiModelPref, setGenericOpenAiModelPref] = useState(
    settings?.GenericOpenAiModelPref
  );

  return (
    <div className="flex flex-col gap-y-7">
      <div className={`${FIELD_ROW} mt-1.5`}>
        <div className={FIELD_COL}>
          <FieldLabel
            htmlFor={`${id}-url`}
            label={t("provider-fields.base-url")}
          />
          <input
            id={`${id}-url`}
            type="url"
            name="GenericOpenAiBasePath"
            className={FIELD_INPUT}
            placeholder="https://proxy.openai.com"
            defaultValue={settings?.GenericOpenAiBasePath}
            onChange={(e) => setGenericOpenAiBasePath(e.target.value)}
            required={true}
            autoComplete="off"
            spellCheck={false}
          />
        </div>
        <div className={FIELD_COL}>
          <FieldLabel
            htmlFor={`${id}-key`}
            label={t("provider-fields.api-key")}
            optional={true}
          />
          <SecretInput
            id={`${id}-key`}
            name="GenericOpenAiKey"
            defaultValue={settings?.GenericOpenAiKey ? SECRET_MASK : ""}
            onChange={(e) => setGenericOpenAiApiKey(e.target.value)}
            required={false}
          />
        </div>
        <GenericOpenAiModelSelection
          settings={settings}
          basePath={genericOpenAiBasePath}
          apiKey={genericOpenAiApiKey}
          genericOpenAiModelPref={genericOpenAiModelPref}
          setGenericOpenAiModelPref={setGenericOpenAiModelPref}
        />
      </div>
      <div className={FIELD_ROW}>
        <div className={FIELD_COL}>
          <FieldLabel
            htmlFor={`${id}-context`}
            label={t("provider-fields.context-window")}
          />
          <input
            id={`${id}-context`}
            type="number"
            name="GenericOpenAiTokenLimit"
            className={FIELD_INPUT}
            placeholder={t("llm-fields.common.context-window-placeholder", {
              example: 4096,
            })}
            min={1}
            onWheel={blurOnWheel}
            defaultValue={settings?.GenericOpenAiTokenLimit}
            required={true}
            autoComplete="off"
          />
        </div>
        <div className={FIELD_COL}>
          <FieldLabel
            htmlFor={`${id}-max-tokens`}
            label={t("provider-fields.max-tokens")}
          />
          <input
            id={`${id}-max-tokens`}
            type="number"
            name="GenericOpenAiMaxTokens"
            className={FIELD_INPUT}
            placeholder={t("llm-fields.common.max-tokens-placeholder", {
              example: 1024,
            })}
            min={0}
            onWheel={blurOnWheel}
            defaultValue={settings?.GenericOpenAiMaxTokens || 1024}
            required={true}
            autoComplete="off"
          />
        </div>
      </div>
    </div>
  );
}

function GenericOpenAiModelSelection({
  settings,
  basePath = null,
  apiKey = null,
  genericOpenAiModelPref,
  setGenericOpenAiModelPref,
}) {
  const { t } = useTranslation();
  const id = useId();
  const [customModels, setCustomModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
          "generic-openai",
          apiKey,
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
  }, [basePath, apiKey]);

  if (loading) {
    return (
      <ModelSelectField
        name="GenericOpenAiModelPref"
        label={t("provider-fields.chat-model")}
        status="loading"
      />
    );
  }

  // If no models are found, just show a free-form input field for the model name
  if (customModels.length === 0) {
    return (
      <div className={FIELD_COL}>
        <FieldLabel
          htmlFor={`${id}-model`}
          label={t("provider-fields.chat-model")}
        />
        <input
          id={`${id}-model`}
          type="text"
          name="GenericOpenAiModelPref"
          className={FIELD_INPUT}
          placeholder={t("llm-fields.generic-openai.model-placeholder")}
          defaultValue={genericOpenAiModelPref}
          onChange={(e) => setGenericOpenAiModelPref(e.target.value)}
          onBlur={() => setGenericOpenAiModelPref(genericOpenAiModelPref)}
          required={true}
          autoComplete="off"
          spellCheck={false}
          aria-describedby={error ? `${id}-model-error` : undefined}
        />
        {error && (
          <p id={`${id}-model-error`} role="alert" className={FIELD_ERROR}>
            {t("provider-fields.models-error", { error })}
          </p>
        )}
      </div>
    );
  }

  return (
    <ModelSelectField
      name="GenericOpenAiModelPref"
      label={t("provider-fields.chat-model")}
      status="ready"
      defaultValue={settings.GenericOpenAiModelPref}
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
