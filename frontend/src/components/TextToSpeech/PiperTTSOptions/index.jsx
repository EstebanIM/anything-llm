import { useState, useEffect, useId, useRef } from "react";
import { useTranslation } from "react-i18next";
import PiperTTSClient from "@/utils/piperTTS";
import { titleCase } from "text-case";
import { humanFileSize } from "@/utils/numbers";
import showToast from "@/utils/toast";
import { LoaderCircle, CirclePause, CirclePlay } from "lucide-react";
import {
  FIELD_ERROR,
  FIELD_HELP,
  FIELD_LABEL,
  FIELD_SELECT,
} from "@/components/ProviderFields";

export default function PiperTTSOptions({ settings }) {
  const { t } = useTranslation();
  return (
    <>
      <p className="text-sm text-theme-text-secondary mb-4">
        {t("provider-forms.tts.piper.intro")}
      </p>
      <div className="flex gap-x-4 items-center">
        <PiperTTSModelSelection settings={settings} />
      </div>
    </>
  );
}

function voicesByLanguage(voices = [], unlistedLabel) {
  const voicesByLanguage = voices.reduce((acc, voice) => {
    const langName = voice?.language?.name_english ?? unlistedLabel;
    acc[langName] = acc[langName] || [];
    acc[langName].push(voice);
    return acc;
  }, {});
  return Object.entries(voicesByLanguage);
}

function voiceDisplayName(voice, t) {
  const { is_stored, name, quality, files } = voice;
  const onnxFileKey = Object.keys(files).find((key) => key.endsWith(".onnx"));
  const fileSize = files?.[onnxFileKey]?.size_bytes || 0;
  const qualityLabel =
    quality === "low"
      ? t("provider-forms.tts.piper.quality-low")
      : t("provider-forms.tts.piper.quality-high");
  return `${is_stored ? "✔ " : ""}${titleCase(name)}-${qualityLabel} (${humanFileSize(fileSize)})`;
}

function PiperTTSModelSelection({ settings }) {
  const { t } = useTranslation();
  const id = useId();
  const [loading, setLoading] = useState(true);
  const [voices, setVoices] = useState([]);
  const [attempt, setAttempt] = useState(0);
  const [selectedVoice, setSelectedVoice] = useState(
    settings?.TTSPiperTTSVoiceModel
  );

  function flushVoices() {
    PiperTTSClient.flush()
      .then(() =>
        showToast(t("provider-forms.tts.piper.flushed"), "info", {
          clear: true,
        })
      )
      .catch((e) => console.error(e));
  }

  useEffect(() => {
    setLoading(true);
    PiperTTSClient.voices()
      .then((voices) => {
        if (!voices?.length)
          throw new Error("Could not fetch voices from web worker.");
        setVoices(voices);
        // Keep the saved voice when it still exists; otherwise show what the form will submit.
        setSelectedVoice((current) =>
          voices.some((voice) => voice.key === current)
            ? current
            : voices[0].key
        );
      })
      .catch((e) => {
        console.error(e);
      })
      .finally(() => setLoading(false));
  }, [attempt]);

  if (loading) {
    return (
      <div className="flex flex-col w-full md:w-60">
        <label htmlFor={`${id}-voice`} className={FIELD_LABEL}>
          {t("provider-forms.tts.voice-model")}
        </label>
        <select
          key="pending"
          id={`${id}-voice`}
          name="TTSPiperTTSVoiceModel"
          value=""
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
      <div className="flex flex-col w-full md:w-60">
        <label htmlFor={`${id}-voice`} className={FIELD_LABEL}>
          {t("provider-forms.tts.voice-model")}
        </label>
        <select
          key="empty"
          id={`${id}-voice`}
          name="TTSPiperTTSVoiceModel"
          value=""
          disabled={true}
          aria-describedby={`${id}-voice-error`}
          className={FIELD_SELECT}
        >
          <option value="">{t("provider-fields.models-empty")}</option>
        </select>
        <p id={`${id}-voice-error`} role="alert" className={FIELD_ERROR}>
          {t("provider-forms.tts.piper.voices-error")}{" "}
          <button
            type="button"
            onClick={() => setAttempt((n) => n + 1)}
            className="inline-flex items-center min-h-[44px] md:min-h-0 font-semibold underline underline-offset-2"
          >
            {t("provider-fields.retry")}
          </button>
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full md:w-fit">
      <div className="flex flex-col w-full md:w-60">
        <label htmlFor={`${id}-voice`} className={FIELD_LABEL}>
          {t("provider-forms.tts.voice-model")}
        </label>
        <div className="flex flex-col md:flex-row md:items-center md:w-fit gap-x-4 gap-y-2 mb-2">
          <select
            key="ready"
            id={`${id}-voice`}
            name="TTSPiperTTSVoiceModel"
            required={true}
            onChange={(e) => setSelectedVoice(e.target.value)}
            value={selectedVoice}
            aria-describedby={`${id}-voice-help`}
            className={`${FIELD_SELECT} flex-shrink-0`}
          >
            {voicesByLanguage(
              voices,
              t("provider-forms.tts.piper.unlisted")
            ).map(([lang, voices]) => {
              return (
                <optgroup key={lang} label={lang}>
                  {voices.map((voice) => (
                    <option key={voice.key} value={voice.key}>
                      {voiceDisplayName(voice, t)}
                    </option>
                  ))}
                </optgroup>
              );
            })}
          </select>
          <DemoVoiceSample voiceId={selectedVoice} />
        </div>
        <p id={`${id}-voice-help`} className={FIELD_HELP}>
          {t("provider-forms.tts.piper.stored-hint")}
        </p>
      </div>
      {!!voices.find((voice) => voice.is_stored) && (
        <button
          type="button"
          onClick={flushVoices}
          className="w-fit min-h-[44px] md:min-h-0 border-none text-theme-text-secondary hover:text-white hover:underline text-sm my-4 transition-colors duration-quick"
        >
          {t("provider-forms.tts.piper.flush")}
        </button>
      )}
    </div>
  );
}

function DemoVoiceSample({ voiceId }) {
  const { t } = useTranslation();
  const playerRef = useRef(null);
  const [speaking, setSpeaking] = useState(false);
  const [loading, setLoading] = useState(false);
  const [audioSrc, setAudioSrc] = useState(null);

  async function speakMessage(e) {
    e.preventDefault();
    if (loading) return;
    if (speaking) {
      playerRef?.current?.pause();
      return;
    }

    try {
      if (!audioSrc) {
        setLoading(true);
        const client = new PiperTTSClient({ voiceId });
        const blobUrl = await client.getAudioBlobForText(
          t("provider-forms.tts.piper.sample-text")
        );
        setAudioSrc(blobUrl);
        setLoading(false);
        client.worker?.terminate();
        PiperTTSClient._instance = null;
      } else {
        playerRef.current.play();
      }
    } catch (e) {
      console.error(e);
      setLoading(false);
      setSpeaking(false);
    }
  }

  useEffect(() => {
    function setupPlayer() {
      if (!playerRef?.current) return;
      playerRef.current.addEventListener("play", () => {
        setSpeaking(true);
      });

      playerRef.current.addEventListener("pause", () => {
        playerRef.current.currentTime = 0;
        setSpeaking(false);
        setAudioSrc(null);
      });
    }
    setupPlayer();
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={speakMessage}
        aria-disabled={loading}
        aria-busy={loading}
        className="w-fit min-h-[44px] md:min-h-0 border-none text-white flex items-center gap-x-1 aria-disabled:cursor-wait"
      >
        {speaking ? (
          <>
            <CirclePause
              strokeWidth={1.5}
              size={20}
              aria-hidden="true"
              className="flex-shrink-0"
            />
            <span className="text-sm flex-shrink-0">
              {t("provider-forms.tts.piper.stop-sample")}
            </span>
          </>
        ) : loading ? (
          <>
            <LoaderCircle
              strokeWidth={1.5}
              size={20}
              aria-hidden="true"
              className="animate-spin flex-shrink-0"
            />
            <span className="text-sm flex-shrink-0">
              {t("provider-forms.tts.piper.loading-voice")}
            </span>
          </>
        ) : (
          <>
            <CirclePlay
              strokeWidth={1.5}
              size={20}
              aria-hidden="true"
              className="flex-shrink-0"
            />
            <span className="text-sm flex-shrink-0">
              {t("provider-forms.tts.piper.play-sample")}
            </span>
          </>
        )}
      </button>
      <audio
        ref={playerRef}
        hidden={true}
        src={audioSrc}
        autoPlay={true}
        controls={false}
      />
    </>
  );
}
