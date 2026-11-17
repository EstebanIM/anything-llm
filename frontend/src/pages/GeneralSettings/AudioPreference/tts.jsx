import React, { useId, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { useTranslation } from "react-i18next";
import System from "@/models/system";
import showToast from "@/utils/toast";
import { serverErrorMessage } from "@/utils/serverErrors";
import ProviderOption from "@/components/lib/ProviderSearchMenu/ProviderOption";
import CTAButton from "@/components/lib/CTAButton";
import OpenAiLogo from "@/media/llmprovider/openai.png";
import { BROWSER_LOGO } from "@/utils/builtInLogos";
import ElevenLabsIcon from "@/media/ttsproviders/elevenlabs.png";
import PiperTTSIcon from "@/media/ttsproviders/piper.png";
import GenericOpenAiLogo from "@/media/ttsproviders/generic-openai.png";
import KokoroIcon from "@/media/ttsproviders/kokoro.png";

import BrowserNative from "@/components/TextToSpeech/BrowserNative";
import OpenAiTTSOptions from "@/components/TextToSpeech/OpenAiOptions";
import ElevenLabsTTSOptions from "@/components/TextToSpeech/ElevenLabsOptions";
import PiperTTSOptions from "@/components/TextToSpeech/PiperTTSOptions";
import OpenAiGenericTTSOptions from "@/components/TextToSpeech/OpenAiGenericOptions";
import KokoroTTSOptions from "@/components/TextToSpeech/KokoroOptions";
import ProviderSearchMenu from "@/components/lib/ProviderSearchMenu";

const PROVIDERS = [
  {
    name: "System native",
    nameKey: "provider-pages.names.system-native",
    value: "native",
    descriptionKey: "provider-pages.descriptions.tts.native",
    logo: BROWSER_LOGO,
    options: (settings) => <BrowserNative settings={settings} />,
    description: "Uses your browser's built in TTS service if supported.",
  },
  {
    name: "OpenAI",
    value: "openai",
    descriptionKey: "provider-pages.descriptions.tts.openai",
    logo: OpenAiLogo,
    options: (settings) => <OpenAiTTSOptions settings={settings} />,
    description: "Use OpenAI's text to speech voices.",
  },
  {
    name: "ElevenLabs",
    value: "elevenlabs",
    descriptionKey: "provider-pages.descriptions.tts.elevenlabs",
    logo: ElevenLabsIcon,
    options: (settings) => <ElevenLabsTTSOptions settings={settings} />,
    description: "Use ElevenLabs's text to speech voices and technology.",
  },
  {
    name: "PiperTTS",
    value: "piper_local",
    descriptionKey: "provider-pages.descriptions.tts.piper_local",
    logo: PiperTTSIcon,
    options: (settings) => <PiperTTSOptions settings={settings} />,
    description: "Run TTS models locally in your browser privately.",
  },
  {
    name: "Kokoro",
    value: "kokoro",
    descriptionKey: "provider-pages.descriptions.tts.kokoro",
    logo: KokoroIcon,
    options: (settings) => <KokoroTTSOptions settings={settings} />,
    description:
      "Connect to a self-hosted kokoro-fastapi server for high-quality open-source voices.",
  },
  {
    name: "OpenAI Compatible",
    value: "generic-openai",
    descriptionKey: "provider-pages.descriptions.tts.generic-openai",
    logo: GenericOpenAiLogo,
    options: (settings) => <OpenAiGenericTTSOptions settings={settings} />,
    description:
      "Connect to an OpenAI compatible TTS service running locally or remotely.",
  },
];
export default function TextToSpeechProvider({ settings, onSaved }) {
  const { t } = useTranslation();
  const [saving, setSaving] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState(
    settings?.TextToSpeechProvider || "native"
  );
  const headingRef = useRef(null);
  const sectionHeadingId = useId();
  const providerHeadingId = useId();
  const saveButtonId = useId();
  const providers = PROVIDERS.map((provider) =>
    provider.nameKey ? { ...provider, name: t(provider.nameKey) } : provider
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (saving) return;
    setSaving(true);
    const data = {
      TextToSpeechProvider: selectedProvider,
    };
    const formData = new FormData(e.target);
    for (const [key, value] of formData.entries()) data[key] = value;

    const { error } = await System.updateSystem(data);
    if (error) {
      showToast(
        serverErrorMessage(error, t, "provider-pages.toast.failed"),
        "error"
      );
      flushSync(() => setSaving(false));
      restoreFocusAfterSave(false);
      return;
    }

    showToast(t("provider-pages.toast.saved.tts"), "success");
    await onSaved?.();
    flushSync(() => {
      setHasChanges(false);
      setSaving(false);
    });
    restoreFocusAfterSave(true);
  };

  // Saving disables the button and success removes it, which drops focus on <body>.
  function restoreFocusAfterSave(saved) {
    if (document.activeElement && document.activeElement !== document.body)
      return;
    if (saved) headingRef.current?.focus();
    else document.getElementById(saveButtonId)?.focus();
  }

  const updateProviderChoice = (selection) => {
    if (selection === selectedProvider) return;
    setSelectedProvider(selection);
    setHasChanges(true);
  };

  const selectedProviderObject = providers.find(
    (provider) => provider.value === selectedProvider
  );

  return (
    <form
      onSubmit={handleSubmit}
      aria-labelledby={sectionHeadingId}
      className="flex flex-col w-full pt-8"
    >
      <h2
        ref={headingRef}
        id={sectionHeadingId}
        tabIndex={-1}
        className="text-base leading-6 font-bold text-white"
      >
        {t("provider-pages.audio.tts.title")}
      </h2>
      <p className="mt-1 text-xs leading-[18px] text-white text-opacity-60">
        {t("provider-pages.audio.tts.description")}
      </p>
      <div className="w-full justify-end flex">
        {hasChanges && (
          <CTAButton
            id={saveButtonId}
            busy={saving}
            className="mt-3 mr-0 -mb-14 z-10"
          >
            {saving ? t("common.saving") : t("common.save")}
          </CTAButton>
        )}
      </div>
      <h3
        id={providerHeadingId}
        className="text-sm font-bold text-white mt-6 mb-4"
      >
        {t("provider-pages.audio.tts.provider")}
      </h3>
      <div className="relative">
        <ProviderSearchMenu
          items={providers}
          labelledBy={providerHeadingId}
          selected={selectedProviderObject}
          placeholder={t("provider-pages.search.tts")}
          renderItem={(provider, close) => (
            <ProviderOption
              name={provider.name}
              value={provider.value}
              image={provider.logo}
              description={provider.description}
              descriptionKey={provider.descriptionKey}
              checked={selectedProvider === provider.value}
              onClick={() => {
                updateProviderChoice(provider.value);
                close();
              }}
            />
          )}
        />
      </div>
      <div
        onChange={() => setHasChanges(true)}
        className="mt-4 flex flex-col gap-y-1"
      >
        {selectedProviderObject?.options(settings)}
      </div>
    </form>
  );
}
