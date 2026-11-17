import React, { useEffect, useId, useRef, useState } from "react";
import { flushSync } from "react-dom";
import Sidebar from "@/components/SettingsSidebar";
import System from "@/models/system";
import showToast from "@/utils/toast";
import { BUILT_IN_LOGO } from "@/utils/builtInLogos";
import OpenAiLogo from "@/media/llmprovider/openai.png";
import AzureOpenAiLogo from "@/media/llmprovider/azure.png";
import GeminiAiLogo from "@/media/llmprovider/gemini.png";
import LocalAiLogo from "@/media/llmprovider/localai.png";
import OllamaLogo from "@/media/llmprovider/ollama.png";
import LMStudioLogo from "@/media/llmprovider/lmstudio.png";
import CohereLogo from "@/media/llmprovider/cohere.png";
import VoyageAiLogo from "@/media/embeddingprovider/voyageai.png";
import LiteLLMLogo from "@/media/llmprovider/litellm.png";
import GenericOpenAiLogo from "@/media/llmprovider/generic-openai.png";
import MistralAiLogo from "@/media/llmprovider/mistral.jpeg";
import OpenRouterLogo from "@/media/llmprovider/openrouter.jpeg";
import LemonadeLogo from "@/media/llmprovider/lemonade.png";

import PreLoader from "@/components/Preloader";
import ChangeWarningModal from "@/components/ChangeWarning";
import OpenAiOptions from "@/components/EmbeddingSelection/OpenAiOptions";
import AzureAiOptions from "@/components/EmbeddingSelection/AzureAiOptions";
import GeminiOptions from "@/components/EmbeddingSelection/GeminiOptions";
import LocalAiOptions from "@/components/EmbeddingSelection/LocalAiOptions";
import NativeEmbeddingOptions from "@/components/EmbeddingSelection/NativeEmbeddingOptions";
import OllamaEmbeddingOptions from "@/components/EmbeddingSelection/OllamaOptions";
import LMStudioEmbeddingOptions from "@/components/EmbeddingSelection/LMStudioOptions";
import CohereEmbeddingOptions from "@/components/EmbeddingSelection/CohereOptions";
import VoyageAiOptions from "@/components/EmbeddingSelection/VoyageAiOptions";
import LiteLLMOptions from "@/components/EmbeddingSelection/LiteLLMOptions";
import GenericOpenAiEmbeddingOptions from "@/components/EmbeddingSelection/GenericOpenAiOptions";
import OpenRouterOptions from "@/components/EmbeddingSelection/OpenRouterOptions";
import MistralAiOptions from "@/components/EmbeddingSelection/MistralAiOptions";
import LemonadeOptions from "@/components/EmbeddingSelection/LemonadeOptions";

import { useModal } from "@/hooks/useModal";
import Modal from "@/components/lib/Modal";
import CTAButton from "@/components/lib/CTAButton";
import { useTranslation } from "react-i18next";
import useCustomAppName from "@/hooks/useCustomAppName";
import ProviderSearchMenu from "@/components/lib/ProviderSearchMenu";
import ProviderOption from "@/components/lib/ProviderSearchMenu/ProviderOption";
const EMBEDDERS_EXTRA = [
  {
    name: "OpenAI",
    value: "openai",
    descriptionKey: "provider-pages.descriptions.embedding.openai",
    logo: OpenAiLogo,
    options: (settings) => <OpenAiOptions settings={settings} />,
    description: "The standard option for most non-commercial use.",
  },
  {
    name: "Azure OpenAI",
    value: "azure",
    descriptionKey: "provider-pages.descriptions.embedding.azure",
    logo: AzureOpenAiLogo,
    options: (settings) => <AzureAiOptions settings={settings} />,
    description: "The enterprise option of OpenAI hosted on Azure services.",
  },
  {
    name: "Gemini",
    value: "gemini",
    descriptionKey: "provider-pages.descriptions.embedding.gemini",
    logo: GeminiAiLogo,
    options: (settings) => <GeminiOptions settings={settings} />,
    description: "Run powerful embedding models from Google AI.",
  },
  {
    name: "Local AI",
    value: "localai",
    descriptionKey: "provider-pages.descriptions.embedding.localai",
    logo: LocalAiLogo,
    options: (settings) => <LocalAiOptions settings={settings} />,
    description: "Run embedding models locally on your own machine.",
  },
  {
    name: "Ollama",
    value: "ollama",
    descriptionKey: "provider-pages.descriptions.embedding.ollama",
    logo: OllamaLogo,
    options: (settings) => <OllamaEmbeddingOptions settings={settings} />,
    description: "Run embedding models locally on your own machine.",
  },
  {
    name: "LM Studio",
    value: "lmstudio",
    descriptionKey: "provider-pages.descriptions.embedding.lmstudio",
    logo: LMStudioLogo,
    options: (settings) => <LMStudioEmbeddingOptions settings={settings} />,
    description:
      "Discover, download, and run thousands of cutting edge LLMs in a few clicks.",
  },
  {
    name: "Lemonade",
    value: "lemonade",
    descriptionKey: "provider-pages.descriptions.embedding.lemonade",
    logo: LemonadeLogo,
    options: (settings) => <LemonadeOptions settings={settings} />,
    description:
      "Run embedding models locally on your own machine using Lemonade.",
  },
  {
    name: "OpenRouter",
    value: "openrouter",
    descriptionKey: "provider-pages.descriptions.embedding.openrouter",
    logo: OpenRouterLogo,
    options: (settings) => <OpenRouterOptions settings={settings} />,
    description: "Run embedding models from OpenRouter.",
  },
  {
    name: "LiteLLM",
    value: "litellm",
    descriptionKey: "provider-pages.descriptions.embedding.litellm",
    logo: LiteLLMLogo,
    options: (settings) => <LiteLLMOptions settings={settings} />,
    description: "Run powerful embedding models from LiteLLM.",
  },
  {
    name: "Cohere",
    value: "cohere",
    descriptionKey: "provider-pages.descriptions.embedding.cohere",
    logo: CohereLogo,
    options: (settings) => <CohereEmbeddingOptions settings={settings} />,
    description: "Run powerful embedding models from Cohere.",
  },
  {
    name: "Voyage AI",
    value: "voyageai",
    descriptionKey: "provider-pages.descriptions.embedding.voyageai",
    logo: VoyageAiLogo,
    options: (settings) => <VoyageAiOptions settings={settings} />,
    description: "Run powerful embedding models from Voyage AI.",
  },
  {
    name: "Mistral AI",
    value: "mistral",
    descriptionKey: "provider-pages.descriptions.embedding.mistral",
    logo: MistralAiLogo,
    options: (settings) => <MistralAiOptions settings={settings} />,
    description: "Run powerful embedding models from Mistral AI.",
  },
  {
    name: "Generic OpenAI",
    value: "generic-openai",
    descriptionKey: "provider-pages.descriptions.embedding.generic-openai",
    logo: GenericOpenAiLogo,
    options: (settings) => (
      <GenericOpenAiEmbeddingOptions settings={settings} />
    ),
    description: "Run embedding models from any OpenAI compatible API service.",
  },
];
export default function GeneralEmbeddingPreference() {
  const { brandName } = useCustomAppName();
  const { t } = useTranslation();
  const EMBEDDERS = [
    {
      name: t("provider-pages.names.native-embedder"),
      value: "native",
      descriptionKey: "provider-pages.descriptions.embedding.native",
      logo: BUILT_IN_LOGO,
      options: (settings) => <NativeEmbeddingOptions settings={settings} />,
      description: `Use the built-in embedding provider for ${brandName}. Zero setup!`,
    },
    ...EMBEDDERS_EXTRA,
  ];
  const [saving, setSaving] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const [hasEmbeddings, setHasEmbeddings] = useState(false);
  const [hasCachedEmbeddings, setHasCachedEmbeddings] = useState(false);
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedEmbedder, setSelectedEmbedder] = useState(null);
  const { isOpen, openModal, closeModal } = useModal();
  const headingRef = useRef(null);
  const providerHeadingId = useId();
  const saveButtonId = useId();

  function embedderModelChanged(formEl) {
    try {
      const formData = new FormData(formEl);
      const newModel =
        formData.get("EmbeddingModelPref") ??
        formData.get("AzureOpenAiEmbeddingModelPref") ??
        null;
      if (newModel === null) return false;
      return settings?.EmbeddingModelPref !== newModel;
    } catch (error) {
      console.error(error);
    }
    return false;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (saving) return;
    if (
      (selectedEmbedder !== settings?.EmbeddingEngine ||
        embedderModelChanged(e.target)) &&
      hasChanges &&
      (hasEmbeddings || hasCachedEmbeddings)
    ) {
      openModal();
    } else {
      await handleSaveSettings();
    }
  };

  const handleSaveSettings = async () => {
    setSaving(true);
    const form = document.getElementById("embedding-form");
    const settingsData = {};
    const formData = new FormData(form);
    settingsData.EmbeddingEngine = selectedEmbedder;
    for (const [key, value] of formData.entries()) settingsData[key] = value;

    const { error } = await System.updateSystem(settingsData);
    if (error) {
      showToast(t("provider-pages.toast.failed", { error }), "error");
      flushSync(() => {
        setSaving(false);
        closeModal();
      });
      restoreFocusAfterSave(false);
      return;
    }

    showToast(t("provider-pages.toast.saved.embedding"), "success");
    const freshSettings = await System.keys();
    flushSync(() => {
      if (freshSettings) applySettings(freshSettings);
      setHasChanges(false);
      setSaving(false);
      closeModal();
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
    if (selection === selectedEmbedder) return;
    setSelectedEmbedder(selection);
    setHasChanges(true);
  };

  function applySettings(_settings) {
    setSettings(_settings);
    setHasEmbeddings(_settings?.HasExistingEmbeddings || false);
    setHasCachedEmbeddings(_settings?.HasCachedEmbeddings || false);
  }

  async function fetchKeys() {
    setLoading(true);
    const _settings = await System.keys();
    applySettings(_settings);
    setSelectedEmbedder(_settings?.EmbeddingEngine || "native");
    setLoading(false);
  }

  useEffect(() => {
    fetchKeys();
  }, []);

  const selectedEmbedderObject = EMBEDDERS.find(
    (embedder) => embedder.value === selectedEmbedder
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
              {t("embedding.title")}
            </h1>
            <p className="text-xs leading-[18px] text-white text-opacity-60">
              {t("embedding.desc-start")}
              <br />
              {t("embedding.desc-end")}
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
              id="embedding-form"
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
                {t("embedding.provider.title")}
              </h2>
              <div className="relative">
                <ProviderSearchMenu
                  items={EMBEDDERS}
                  labelledBy={providerHeadingId}
                  selected={selectedEmbedderObject}
                  placeholder={t("provider-pages.search.embedding")}
                  renderItem={(embedder, close) => (
                    <ProviderOption
                      name={embedder.name}
                      value={embedder.value}
                      image={embedder.logo}
                      description={embedder.description}
                      descriptionKey={embedder.descriptionKey}
                      checked={selectedEmbedder === embedder.value}
                      onClick={() => {
                        updateChoice(embedder.value);
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
                {selectedEmbedderObject?.options(settings)}
              </div>
            </form>
          )}
        </div>
      </main>
      <Modal isOpen={isOpen} onClose={closeModal} size="lg">
        <ChangeWarningModal
          warningText={t("provider-pages.change-warning.embedding")}
          confirmLabel={t("provider-pages.change-warning.confirm-clear")}
          busy={saving}
          onClose={closeModal}
          onConfirm={handleSaveSettings}
        />
      </Modal>
    </div>
  );
}
