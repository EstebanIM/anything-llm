import { useEffect, useId, useRef, useState } from "react";
import { flushSync } from "react-dom";
import Sidebar from "@/components/SettingsSidebar";
import System from "@/models/system";
import showToast from "@/utils/toast";
import OpenAiLogo from "@/media/llmprovider/openai.png";
import OllamaLogo from "@/media/llmprovider/ollama.png";
import LemonadeLogo from "@/media/llmprovider/lemonade.png";
import OpenRouterLogo from "@/media/llmprovider/openrouter.jpeg";
import LocalAiLogo from "@/media/llmprovider/localai.png";
import LlmmanLogo from "@/media/llmprovider/llmman.png";
import GeminiLogo from "@/media/llmprovider/gemini.png";
import MinimaxLogo from "@/media/llmprovider/minimax.png";

import PreLoader from "@/components/Preloader";
import OpenAiOptions from "@/components/ImageGenerationSelection/OpenAiOptions";
import OllamaOptions from "@/components/ImageGenerationSelection/OllamaOptions";
import LemonadeOptions from "@/components/ImageGenerationSelection/LemonadeOptions";
import OpenRouterOptions from "@/components/ImageGenerationSelection/OpenRouterOptions";
import LocalAiOptions from "@/components/ImageGenerationSelection/LocalAiOptions";
import LlmmanOptions from "@/components/ImageGenerationSelection/LlmmanOptions";
import GeminiOptions from "@/components/ImageGenerationSelection/GeminiOptions";
import MinimaxOptions from "@/components/ImageGenerationSelection/MinimaxOptions";
import ProviderOption from "@/components/lib/ProviderSearchMenu/ProviderOption";

import CTAButton from "@/components/lib/CTAButton";
import { useTranslation } from "react-i18next";
import ProviderSearchMenu from "@/components/lib/ProviderSearchMenu";

const PROVIDERS = [
  {
    name: "OpenAI",
    value: "openai",
    descriptionKey: "provider-pages.descriptions.image.openai",
    logo: OpenAiLogo,
    options: (settings) => <OpenAiOptions settings={settings} />,
    description: "Generate images with OpenAI's DALL-E and image models.",
  },
  {
    name: "Gemini",
    value: "gemini",
    descriptionKey: "provider-pages.descriptions.image.gemini",
    logo: GeminiLogo,
    options: (settings) => <GeminiOptions settings={settings} />,
    description:
      "Generate and edit images with Google Gemini (Nano Banana) models.",
  },
  {
    name: "Ollama",
    value: "ollama",
    descriptionKey: "provider-pages.descriptions.image.ollama",
    logo: OllamaLogo,
    options: (settings) => <OllamaOptions settings={settings} />,
    description: "Generate images locally on your own machine (macOS only).",
  },
  {
    name: "Lemonade",
    value: "lemonade",
    descriptionKey: "provider-pages.descriptions.image.lemonade",
    logo: LemonadeLogo,
    options: (settings) => <LemonadeOptions settings={settings} />,
    description: "Generate images locally on your own machine using Lemonade.",
  },
  {
    name: "LocalAI",
    value: "localai",
    descriptionKey: "provider-pages.descriptions.image.localai",
    logo: LocalAiLogo,
    options: (settings) => <LocalAiOptions settings={settings} />,
    description: "Generate images locally on your own machine using LocalAI.",
  },
  {
    name: "llmman",
    value: "llmman",
    descriptionKey: "provider-pages.descriptions.image.llmman",
    logo: LlmmanLogo,
    options: (settings) => <LlmmanOptions settings={settings} />,
    description: "Generate images locally on your own machine using llmman.",
  },
  {
    name: "OpenRouter",
    value: "openrouter",
    descriptionKey: "provider-pages.descriptions.image.openrouter",
    logo: OpenRouterLogo,
    options: (settings) => <OpenRouterOptions settings={settings} />,
    description: "Generate images from image models on OpenRouter.",
  },
  {
    name: "MiniMax",
    value: "minimax",
    descriptionKey: "provider-pages.descriptions.image.minimax",
    logo: MinimaxLogo,
    options: (settings) => <MinimaxOptions settings={settings} />,
    description: "Generate and edit images with MiniMax image models.",
  },
];

export default function ImageGenerationPreference() {
  const [saving, setSaving] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedProvider, setSelectedProvider] = useState(null);
  const headingRef = useRef(null);
  const providerHeadingId = useId();
  const saveButtonId = useId();
  const { t } = useTranslation();

  const handleSubmit = async (e) => {
    e?.preventDefault();
    if (saving) return;
    setSaving(true);
    const form = document.getElementById("image-generation-form");
    const settingsData = { ImageGenerationProvider: selectedProvider };
    const formData = new FormData(form);
    for (const [key, value] of formData.entries()) settingsData[key] = value;

    const { error } = await System.updateSystem(settingsData);
    if (error) {
      showToast(t("provider-pages.toast.failed", { error }), "error");
      flushSync(() => setSaving(false));
      restoreFocusAfterSave(false);
      return;
    }

    showToast(t("provider-pages.toast.saved.image"), "success");
    const freshSettings = await System.keys();
    flushSync(() => {
      if (freshSettings) setSettings(freshSettings);
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

  const updateChoice = (selection) => {
    if (selection === selectedProvider) return;
    setSelectedProvider(selection);
    setHasChanges(true);
  };

  async function fetchKeys() {
    setLoading(true);
    const _settings = await System.keys();
    setSettings(_settings);
    setSelectedProvider(_settings?.ImageGenerationProvider || null);
    setLoading(false);
  }

  useEffect(() => {
    fetchKeys();
  }, []);

  const selectedProviderObject = PROVIDERS.find(
    (provider) => provider.value === selectedProvider
  );

  return (
    <div className="w-screen h-screen overflow-hidden bg-zinc-950 light:bg-slate-50 flex">
      <Sidebar />
      <main className="relative md:ml-[2px] md:mr-[16px] md:my-[16px] md:rounded-[16px] bg-zinc-900 light:bg-white w-full h-full md:h-[calc(100%-32px)] overflow-y-auto p-4 md:p-0">
        <div className="flex flex-col w-full px-1 md:pl-6 md:pr-[50px] py-16 md:py-6">
          <div className="w-full flex flex-col gap-y-1 pb-6 border-white light:border-theme-sidebar-border border-b-2 border-opacity-10">
            <h1
              ref={headingRef}
              tabIndex={-1}
              className="text-lg leading-6 font-bold text-white"
            >
              {t("imageGeneration.title")}
            </h1>
            <p className="text-xs leading-[18px] text-white text-opacity-60">
              {t("imageGeneration.description")}
            </p>
          </div>
          {loading ? (
            <div className="w-full flex justify-center py-16">
              <PreLoader />
            </div>
          ) : !settings ? (
            <div className="flex flex-col items-start gap-y-4 py-10">
              <p role="alert" className="text-sm text-white">
                {t("provider-pages.load-error")}
              </p>
              <CTAButton type="button" onClick={fetchKeys} className="mr-0">
                {t("provider-fields.retry")}
              </CTAButton>
            </div>
          ) : (
            <form
              id="image-generation-form"
              onSubmit={handleSubmit}
              className="flex flex-col w-full"
            >
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
              <h2
                id={providerHeadingId}
                className="text-base font-bold text-white mt-6 mb-4"
              >
                {t("imageGeneration.provider")}
              </h2>
              <div className="relative">
                <ProviderSearchMenu
                  items={PROVIDERS}
                  labelledBy={providerHeadingId}
                  selected={
                    selectedProviderObject ?? {
                      name: t("provider-pages.menu.none-selected"),
                      description: t("provider-pages.none.image"),
                    }
                  }
                  placeholder={t("provider-pages.search.image")}
                  renderItem={(provider, close) => (
                    <ProviderOption
                      name={provider.name}
                      value={provider.value}
                      image={provider.logo}
                      description={provider.description}
                      descriptionKey={provider.descriptionKey}
                      checked={selectedProvider === provider.value}
                      onClick={() => {
                        updateChoice(provider.value);
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
          )}
        </div>
      </main>
    </div>
  );
}
