import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Sidebar from "@/components/SettingsSidebar";
import System from "@/models/system";
import PreLoader from "@/components/Preloader";
import CTAButton from "@/components/lib/CTAButton";
import SpeechToTextProvider from "./stt";
import TextToSpeechProvider from "./tts";

export default function AudioPreference() {
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  async function fetchKeys() {
    setLoading(true);
    const _settings = await System.keys();
    setSettings(_settings);
    setLoading(false);
  }

  // Keeps saved values (and which secrets are set) current after either form saves.
  async function refreshSettings() {
    const _settings = await System.keys();
    if (_settings) setSettings(_settings);
  }

  useEffect(() => {
    fetchKeys();
  }, []);

  return (
    <div className="w-screen h-screen overflow-hidden bg-zinc-950 light:bg-slate-50 flex">
      <Sidebar />
      <main className="relative md:ml-[2px] md:mr-[16px] md:my-[16px] md:rounded-[16px] bg-zinc-900 light:bg-white w-full h-full md:h-[calc(100%-32px)] overflow-y-auto p-4 md:p-0">
        <div className="flex flex-col w-full px-1 md:pl-6 md:pr-[50px] py-16 md:py-6">
          <div className="w-full flex flex-col gap-y-1 pb-6 border-white light:border-theme-sidebar-border border-b-2 border-opacity-10">
            <h1 className="text-lg leading-6 font-bold text-white">
              {t("settings.voice-speech")}
            </h1>
            <p className="text-xs leading-[18px] text-white text-opacity-60">
              {t("provider-pages.audio.description")}
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
            <>
              <SpeechToTextProvider
                settings={settings}
                onSaved={refreshSettings}
              />
              <div
                aria-hidden="true"
                className="mt-10 border-b-2 border-white border-opacity-10 light:border-theme-sidebar-border"
              />
              <TextToSpeechProvider
                settings={settings}
                onSaved={refreshSettings}
              />
            </>
          )}
        </div>
      </main>
    </div>
  );
}
