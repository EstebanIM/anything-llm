import React, { useId, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { useTranslation } from "react-i18next";
import System from "@/models/system";
import showToast from "@/utils/toast";
import { serverErrorMessage } from "@/utils/serverErrors";
import ProviderOption from "@/components/lib/ProviderSearchMenu/ProviderOption";
import CTAButton from "@/components/lib/CTAButton";
import OpenAiLogo from "@/media/llmprovider/openai.png";
import DeepgramLogo from "@/media/ttsproviders/deepgram.png";
import { BROWSER_LOGO } from "@/utils/builtInLogos";
import LemonadeLogo from "@/media/llmprovider/lemonade.png";
import GenericOpenAiLogo from "@/media/llmprovider/generic-openai.png";
import GroqLogo from "@/media/llmprovider/groq.png";

import BrowserNative from "@/components/SpeechToText/BrowserNative";
import OpenAiSTTOptions from "@/components/SpeechToText/OpenAiOptions";
import DeepgramSTTOptions from "@/components/SpeechToText/DeepgramOptions";
import LemonadeSTTOptions from "@/components/SpeechToText/LemonadeOptions";
import GenericOpenAiSTTOptions from "@/components/SpeechToText/GenericOpenAiOptions";
import GroqSTTOptions from "@/components/SpeechToText/GroqOptions";
import ProviderSearchMenu from "@/components/lib/ProviderSearchMenu";

const PROVIDERS = [
  {
    name: "System native",
    nameKey: "provider-pages.names.system-native",
    value: "native",
    descriptionKey: "provider-pages.descriptions.stt.native",
    logo: BROWSER_LOGO,
    options: (settings) => <BrowserNative settings={settings} />,
    description: "Uses your browser's built in STT service if supported.",
  },
  {
    name: "OpenAI",
    value: "openai",
    descriptionKey: "provider-pages.descriptions.stt.openai",
    logo: OpenAiLogo,
    options: (settings) => <OpenAiSTTOptions settings={settings} />,
    description: "Use OpenAI's Whisper API to transcribe speech to text.",
  },
  {
    name: "Lemonade",
    value: "lemonade",
    descriptionKey: "provider-pages.descriptions.stt.lemonade",
    logo: LemonadeLogo,
    options: (settings) => <LemonadeSTTOptions settings={settings} />,
    description: "Transcribe speech via your local Lemonade server.",
  },
  {
    name: "Deepgram",
    value: "deepgram",
    descriptionKey: "provider-pages.descriptions.stt.deepgram",
    logo: DeepgramLogo,
    options: (settings) => <DeepgramSTTOptions settings={settings} />,
    description: "Transcribe speech using Deepgram's hosted Nova models.",
  },
  {
    name: "Groq",
    value: "groq",
    descriptionKey: "provider-pages.descriptions.stt.groq",
    logo: GroqLogo,
    options: (settings) => <GroqSTTOptions settings={settings} />,
    description: "Transcribe speech using Groq's hosted models.",
  },
  {
    name: "Generic OpenAI",
    value: "generic-openai",
    descriptionKey: "provider-pages.descriptions.stt.generic-openai",
    logo: GenericOpenAiLogo,
    options: (settings) => <GenericOpenAiSTTOptions settings={settings} />,
    description:
      "Connect to any OpenAI-compatible STT service via a custom configuration.",
  },
];
export default function SpeechToTextProvider({ settings, onSaved }) {
  const { t } = useTranslation();
  const [saving, setSaving] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState(
    settings?.SpeechToTextProvider || "native"
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
      SpeechToTextProvider: selectedProvider,
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

    showToast(t("provider-pages.toast.saved.stt"), "success");
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
        {t("provider-pages.audio.stt.title")}
      </h2>
      <p className="mt-1 text-xs leading-[18px] text-white text-opacity-60">
        {t("provider-pages.audio.stt.description")}
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
        {t("provider-pages.audio.stt.provider")}
      </h3>
      <div className="relative">
        <ProviderSearchMenu
          items={providers}
          labelledBy={providerHeadingId}
          selected={selectedProviderObject}
          placeholder={t("provider-pages.search.stt")}
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
