import { useEffect, useId, useState } from "react";
import { useTranslation } from "react-i18next";
import System from "@/models/system";
import {
  FIELD_COL,
  FIELD_ERROR,
  FIELD_LABEL,
  FIELD_ROW,
  FIELD_SELECT,
  SECRET_MASK,
  SecretInput,
} from "@/components/ProviderFields";

export default function GroqSpeechToTextOptions({ settings }) {
  const { t } = useTranslation();
  const id = useId();
  const [inputValue, setInputValue] = useState(settings?.STTGroqApiKey);
  const [groqApiKey, setGroqApiKey] = useState(settings?.STTGroqApiKey);

  return (
    <div className={FIELD_ROW}>
      <div className={FIELD_COL}>
        <label htmlFor={`${id}-api-key`} className={FIELD_LABEL}>
          {t("provider-fields.api-key")}
        </label>
        <SecretInput
          id={`${id}-api-key`}
          name="STTGroqApiKey"
          defaultValue={settings?.STTGroqApiKey ? SECRET_MASK : ""}
          required={true}
          onChange={(e) => setInputValue(e.target.value)}
          onBlur={() => setGroqApiKey(inputValue)}
        />
      </div>
      <GroqSttModelSelection apiKey={groqApiKey} settings={settings} />
    </div>
  );
}

function GroqSttModelSelection({ apiKey, settings }) {
  const { t } = useTranslation();
  const id = useId();
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    async function findModels() {
      if (!apiKey) {
        setModels([]);
        setError(null);
        setLoading(false);
        return;
      }
      setLoading(true);
      const { models, error } = await System.customModels(
        "groq-stt",
        typeof apiKey === "boolean" ? null : apiKey
      );
      setModels(models || []);
      setError(error || null);
      setLoading(false);
    }
    findModels();
  }, [apiKey, attempt]);

  const status = loading
    ? "loading"
    : !apiKey
      ? "need-key"
      : error
        ? "error"
        : models.length === 0
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
        {t("provider-forms.shared.transcription-model")}
      </label>
      {status === "ready" ? (
        <select
          key="ready"
          id={`${id}-model`}
          name="STTGroqModel"
          required={true}
          defaultValue={settings?.STTGroqModel ?? "whisper-large-v3-turbo"}
          className={FIELD_SELECT}
        >
          {models.map((model) => (
            <option key={model.id} value={model.id}>
              {model.id}
            </option>
          ))}
        </select>
      ) : (
        <select
          key="pending"
          id={`${id}-model`}
          name="STTGroqModel"
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
