import { useEffect, useId, useState } from "react";
import Sidebar from "@/components/SettingsSidebar";
import showToast from "@/utils/toast";
import System from "@/models/system";
import PreLoader from "@/components/Preloader";
import { useTranslation } from "react-i18next";
import ProviderPrivacy from "@/components/ProviderPrivacy";
import Toggle from "@/components/lib/Toggle";

export default function PrivacyAndDataHandling() {
  const [settings, setSettings] = useState({});
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();
  useEffect(() => {
    async function fetchSettings() {
      setLoading(true);
      const settings = await System.keys();
      setSettings(settings);
      setLoading(false);
    }
    fetchSettings();
  }, []);

  return (
    <div className="w-screen h-screen overflow-hidden bg-zinc-950 light:bg-slate-50 flex">
      <Sidebar />
      <main className="relative md:ml-[2px] md:mr-[16px] md:my-[16px] md:rounded-[16px] light:border light:border-theme-sidebar-border bg-theme-bg-secondary w-full h-full md:h-[calc(100%-32px)] overflow-y-scroll p-4 md:p-0">
        <div className="flex flex-col w-full px-1 md:pl-6 md:pr-[50px] md:py-6 py-16">
          <div className="w-full flex flex-col gap-y-1 pb-6 border-white/10 border-b-2">
            <h1 className="text-lg leading-6 font-bold text-theme-text-primary">
              {t("privacy.title")}
            </h1>
            <p className="text-xs leading-[18px] text-theme-text-secondary">
              {t("privacy.description")}
            </p>
          </div>
          {loading ? (
            <div className="flex justify-center items-center py-10">
              <PreLoader />
            </div>
          ) : (
            <div className="flex flex-col gap-y-6 pt-6">
              <ProviderPrivacy />
              <TelemetryLogs settings={settings} />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export function TelemetryLogs({ settings }) {
  const detailsId = useId();
  const [telemetry, setTelemetry] = useState(
    settings?.DisableTelemetry !== "true"
  );
  const [saving, setSaving] = useState(false);
  const { t } = useTranslation();

  async function toggleTelemetry() {
    const next = !telemetry;
    setSaving(true);
    const { error } = await System.updateSystem({
      DisableTelemetry: next ? "false" : "true",
    });
    setSaving(false);
    if (error) {
      showToast(t("settings-pages.telemetry-failed", { error }), "error", {
        clear: true,
      });
      return;
    }
    setTelemetry(next);
    showToast(
      t(
        next
          ? "settings-pages.telemetry-enabled"
          : "settings-pages.telemetry-disabled"
      ),
      "info",
      { clear: true }
    );
  }

  return (
    <div className="flex flex-col gap-y-3 w-full max-w-2xl">
      <Toggle
        size="lg"
        label={t("privacy.anonymous")}
        enabled={telemetry}
        disabled={saving}
        onChange={toggleTelemetry}
        describedBy={detailsId}
      />
      <div
        id={detailsId}
        className="flex flex-col gap-y-2 text-theme-text-secondary text-xs leading-[18px]"
      >
        <p>{t("settings-pages.telemetry-what")}</p>
        <p>{t("settings-pages.telemetry-not-included")}</p>
        <p>{t("settings-pages.telemetry-env")}</p>
      </div>
    </div>
  );
}
