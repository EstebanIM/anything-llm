import React, { useEffect, useId, useRef, useState } from "react";
import { flushSync } from "react-dom";
import Sidebar from "@/components/SettingsSidebar";
import System from "@/models/system";
import showToast from "@/utils/toast";
import { serverErrorMessage } from "@/utils/serverErrors";
import PreLoader from "@/components/Preloader";
import OpenAiLogo from "@/media/llmprovider/openai.png";
import GenericOpenAiLogo from "@/media/llmprovider/generic-openai.png";
import { BUILT_IN_LOGO } from "@/utils/builtInLogos";
import OpenAiWhisperOptions from "@/components/TranscriptionSelection/OpenAiOptions";
import GenericOpenAiWhisperOptions from "@/components/TranscriptionSelection/GenericOpenAiOptions";
import NativeTranscriptionOptions from "@/components/TranscriptionSelection/NativeTranscriptionOptions";
import ProviderOption from "@/components/lib/ProviderSearchMenu/ProviderOption";
import CTAButton from "@/components/lib/CTAButton";
import { useTranslation } from "react-i18next";
import ProviderSearchMenu from "@/components/lib/ProviderSearchMenu";
export default function TranscriptionModelPreference() {
  const { t } = useTranslation();
  const PROVIDERS = [
    {
      name: "OpenAI",
      value: "openai",
      descriptionKey: "provider-pages.descriptions.transcription.openai",
      logo: OpenAiLogo,
      options: (settings) => <OpenAiWhisperOptions settings={settings} />,
      description:
        "Leverage the OpenAI Whisper-large model using your API key.",
    },
    {
      name: "OpenAI Compatible",
      value: "generic-openai",
      descriptionKey:
        "provider-pages.descriptions.transcription.generic-openai",
      logo: GenericOpenAiLogo,
      options: (settings) => (
        <GenericOpenAiWhisperOptions settings={settings} />
      ),
      description:
        "Transcribe audio using any OpenAI-compatible API via custom configuration.",
    },
    {
      name: t("provider-pages.names.built-in"),
      value: "local",
      descriptionKey: "provider-pages.descriptions.transcription.local",
      logo: BUILT_IN_LOGO,
      options: (settings) => <NativeTranscriptionOptions settings={settings} />,
      description: "Run a built-in whisper model on this instance privately.",
    },
  ];
  const [saving, setSaving] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedProvider, setSelectedProvider] = useState(null);
  const headingRef = useRef(null);
  const providerHeadingId = useId();
  const saveButtonId = useId();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (saving) return;
    setSaving(true);
    const data = {
      WhisperProvider: selectedProvider,
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

    showToast(t("provider-pages.toast.saved.transcription"), "success");
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

  const updateProviderChoice = (selection) => {
    if (selection === selectedProvider) return;
    setSelectedProvider(selection);
    setHasChanges(true);
  };

  async function fetchKeys() {
    setLoading(true);
    const _settings = await System.keys();
    setSettings(_settings);
    setSelectedProvider(_settings?.WhisperProvider || "local");
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
              {t("transcription.title")}
            </h1>
            <p className="text-xs leading-[18px] text-white text-opacity-60">
              {t("transcription.description")}
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
            <form onSubmit={handleSubmit} className="flex flex-col w-full">
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
                {t("transcription.provider")}
              </h2>
              <div className="relative">
                <ProviderSearchMenu
                  items={PROVIDERS}
                  labelledBy={providerHeadingId}
                  selected={selectedProviderObject}
                  placeholder={t("provider-pages.search.transcription")}
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
          )}
        </div>
      </main>
    </div>
  );
}
