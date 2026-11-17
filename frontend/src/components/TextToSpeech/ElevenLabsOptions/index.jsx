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

export default function ElevenLabsOptions({ settings }) {
  const { t } = useTranslation();
  const id = useId();
  const [inputValue, setInputValue] = useState(settings?.TTSElevenLabsKey);
  const [elevenLabsKey, setElevenLabsKey] = useState(
    settings?.TTSElevenLabsKey
  );

  return (
    <div className={FIELD_ROW}>
      <div className={FIELD_COL}>
        <label htmlFor={`${id}-api-key`} className={FIELD_LABEL}>
          {t("provider-fields.api-key")}
        </label>
        <SecretInput
          id={`${id}-api-key`}
          name="TTSElevenLabsKey"
          defaultValue={settings?.TTSElevenLabsKey ? SECRET_MASK : ""}
          required={true}
          onChange={(e) => setInputValue(e.target.value)}
          onBlur={() => setElevenLabsKey(inputValue)}
        />
      </div>
      {!settings?.credentialsOnly && (
        <ElevenLabsModelSelection settings={settings} apiKey={elevenLabsKey} />
      )}
    </div>
  );
}

function ElevenLabsModelSelection({ apiKey, settings }) {
  const { t } = useTranslation();
  const id = useId();
  const [groupedModels, setGroupedModels] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    async function findCustomModels() {
      if (!apiKey) {
        setGroupedModels({});
        setError(null);
        setLoading(false);
        return;
      }

      setLoading(true);
      const { models, error } = await System.customModels(
        "elevenlabs-tts",
        typeof apiKey === "boolean" ? null : apiKey
      );

      const modelsByOrganization = (models || []).reduce((acc, model) => {
        acc[model.organization] = acc[model.organization] || [];
        acc[model.organization].push(model);
        return acc;
      }, {});
      setGroupedModels(modelsByOrganization);
      setError(error || null);
      setLoading(false);
    }
    findCustomModels();
  }, [apiKey, attempt]);

  const status = loading
    ? "loading"
    : !apiKey
      ? "need-key"
      : error
        ? "error"
        : Object.keys(groupedModels).length === 0
          ? "empty"
          : "ready";
  const statusText = {
    loading: t("provider-fields.models-loading"),
    "need-key": t("provider-fields.models-need-key"),
    error: t("provider-fields.models-empty"),
    empty: t("provider-fields.models-empty"),
  }[status];

  return (
    <div className={FIELD_COL}>
      <label htmlFor={`${id}-model`} className={FIELD_LABEL}>
        {t("provider-forms.tts.voice-model")}
      </label>
      {status === "ready" ? (
        <select
          key="ready"
          id={`${id}-model`}
          name="TTSElevenLabsVoiceModel"
          required={true}
          defaultValue={settings?.TTSElevenLabsVoiceModel}
          className={FIELD_SELECT}
        >
          {Object.keys(groupedModels)
            .sort()
            .map((organization) => (
              <optgroup key={organization} label={organization}>
                {groupedModels[organization].map((model) => (
                  <option key={model.id} value={model.id}>
                    {model.name}
                  </option>
                ))}
              </optgroup>
            ))}
        </select>
      ) : (
        <select
          key="pending"
          id={`${id}-model`}
          name="TTSElevenLabsVoiceModel"
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
