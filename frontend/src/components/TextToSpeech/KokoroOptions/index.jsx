import { useEffect, useId, useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import System from "@/models/system";
import {
  FIELD_COL,
  FIELD_HELP,
  FIELD_INPUT,
  FIELD_LABEL,
  FIELD_ROW,
  FIELD_SELECT,
  SECRET_MASK,
  SecretInput,
} from "@/components/ProviderFields";

export default function KokoroTTSOptions({ settings }) {
  const { t } = useTranslation();
  const id = useId();
  const [endpoint, setEndpoint] = useState(
    settings?.TTSKokoroEndpoint || "http://localhost:8880/v1"
  );
  const [inputEndpoint, setInputEndpoint] = useState(endpoint);
  const [apiKey, setApiKey] = useState(settings?.TTSKokoroKey);
  const [inputApiKey, setInputApiKey] = useState(apiKey);

  return (
    <div className="w-full flex flex-col gap-y-7">
      <p className="text-sm text-theme-text-secondary">
        <Trans
          i18nKey="provider-forms.tts.kokoro.intro"
          components={{
            a: <ExternalLink href="https://github.com/remsky/Kokoro-FastAPI" />,
          }}
        />
      </p>
      <div className={FIELD_ROW}>
        <div className={FIELD_COL}>
          <label htmlFor={`${id}-base-url`} className={FIELD_LABEL}>
            {t("provider-fields.base-url")}
          </label>
          <input
            id={`${id}-base-url`}
            type="url"
            name="TTSKokoroEndpoint"
            className={FIELD_INPUT}
            placeholder="http://localhost:8880/v1"
            defaultValue={settings?.TTSKokoroEndpoint}
            required={true}
            autoComplete="off"
            spellCheck={false}
            onChange={(e) => setInputEndpoint(e.target.value)}
            onBlur={() => setEndpoint(inputEndpoint)}
            aria-describedby={`${id}-base-url-help`}
          />
          <p id={`${id}-base-url-help`} className={FIELD_HELP}>
            {t("provider-forms.tts.kokoro.base-url-help")}
          </p>
        </div>
        <div className={FIELD_COL}>
          <label htmlFor={`${id}-api-key`} className={FIELD_LABEL}>
            {t("provider-fields.api-key")}{" "}
            <span className="font-normal text-theme-text-secondary">
              ({t("provider-fields.optional")})
            </span>
          </label>
          <SecretInput
            id={`${id}-api-key`}
            name="TTSKokoroKey"
            defaultValue={settings?.TTSKokoroKey ? SECRET_MASK : ""}
            onChange={(e) => setInputApiKey(e.target.value)}
            onBlur={() => setApiKey(inputApiKey)}
            aria-describedby={`${id}-api-key-help`}
          />
          <p id={`${id}-api-key-help`} className={FIELD_HELP}>
            {t("provider-forms.shared.api-key-optional-help")}
          </p>
        </div>
      </div>
      <div className={FIELD_ROW}>
        <KokoroVoiceSelection
          settings={settings}
          endpoint={endpoint}
          apiKey={apiKey}
        />
      </div>
    </div>
  );
}

function ExternalLink({ href, children }) {
  const { t } = useTranslation();
  return (
    <a href={href} target="_blank" rel="noreferrer" className="underline">
      {children}
      <span className="sr-only"> {t("provider-fields.opens-new-tab")}</span>
    </a>
  );
}

function KokoroVoiceSelection({ settings, endpoint, apiKey = null }) {
  const { t } = useTranslation();
  const id = useId();
  const [voices, setVoices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    async function findVoices() {
      if (!endpoint) {
        setVoices([]);
        setLoading(false);
        return;
      }
      setLoading(true);
      try {
        const { models } = await System.customModels(
          "kokoro-tts",
          apiKey,
          endpoint
        );
        setVoices(models || []);
      } catch {
        setVoices([]);
      } finally {
        setLoading(false);
      }
    }
    findVoices();
  }, [endpoint, apiKey, attempt]);

  if (loading) {
    return (
      <div className={FIELD_COL}>
        <label htmlFor={`${id}-voice`} className={FIELD_LABEL}>
          {t("provider-forms.tts.voice-model")}
        </label>
        <select
          key="pending"
          id={`${id}-voice`}
          name="TTSKokoroVoiceModel"
          disabled={true}
          aria-busy={true}
          className={FIELD_SELECT}
        >
          <option value="">{t("provider-forms.tts.voices-loading")}</option>
        </select>
      </div>
    );
  }

  if (voices.length === 0) {
    return (
      <div className={FIELD_COL}>
        <label htmlFor={`${id}-voice`} className={FIELD_LABEL}>
          {t("provider-forms.tts.voice-model")}
        </label>
        <input
          id={`${id}-voice`}
          type="text"
          name="TTSKokoroVoiceModel"
          className={FIELD_INPUT}
          placeholder="af_bella"
          defaultValue={settings?.TTSKokoroVoiceModel ?? "af_bella"}
          required={true}
          autoComplete="off"
          spellCheck={false}
          aria-describedby={`${id}-voice-help`}
        />
        <p id={`${id}-voice-help`} className={FIELD_HELP}>
          {t("provider-forms.tts.kokoro.voices-unreachable")}{" "}
          {!!endpoint && (
            <button
              type="button"
              onClick={() => setAttempt((n) => n + 1)}
              className="inline-flex items-center min-h-[44px] md:min-h-0 font-semibold underline underline-offset-2 text-white"
            >
              {t("provider-fields.retry")}
            </button>
          )}
        </p>
      </div>
    );
  }

  return (
    <div className={FIELD_COL}>
      <label htmlFor={`${id}-voice`} className={FIELD_LABEL}>
        {t("provider-forms.tts.voice-model")}
      </label>
      <select
        key="ready"
        id={`${id}-voice`}
        name="TTSKokoroVoiceModel"
        required={true}
        defaultValue={settings?.TTSKokoroVoiceModel ?? "af_bella"}
        className={FIELD_SELECT}
      >
        {voices.map((voice) => (
          <option key={voice.id} value={voice.id}>
            {voice.name}
          </option>
        ))}
      </select>
    </div>
  );
}
