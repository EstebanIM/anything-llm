import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "@/components/SettingsSidebar";
import PreLoader from "@/components/Preloader";
import { ExternalLink } from "@/components/ProviderFields";
import Telegram from "@/models/telegram";
import ConnectedView from "./ConnectedView";
import SetupView from "./SetupView";
import { useTranslation } from "react-i18next";
import System from "@/models/system";
import paths from "@/utils/paths";

export default function TelegramBotSettings() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [config, setConfig] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const [isMultiUserMode, configRes] = await Promise.all([
        System.isMultiUserMode(),
        Telegram.getConfig(),
      ]);

      if (isMultiUserMode) navigate(paths.home());
      setConfig(configRes?.config || null);
      setLoading(false);
    }
    fetchData();
  }, []);

  const handleConnected = (newConfig) => setConfig(newConfig);
  const handleDisconnected = () => setConfig(null);

  if (loading) {
    return (
      <ConnectionsLayout>
        <div className="flex justify-center py-16">
          <PreLoader />
        </div>
      </ConnectionsLayout>
    );
  }

  const hasConfig = config?.active && config?.bot_username;
  if (!hasConfig) {
    return (
      <ConnectionsLayout>
        <SetupView onConnected={handleConnected} />
      </ConnectionsLayout>
    );
  }

  return (
    <ConnectionsLayout>
      <ConnectedView
        config={config}
        onDisconnected={handleDisconnected}
        onReconnected={handleConnected}
      />
    </ConnectionsLayout>
  );
}

function ConnectionsLayout({ children }) {
  const { t } = useTranslation();
  return (
    <div className="w-screen h-screen overflow-hidden bg-zinc-950 light:bg-slate-50 flex md:mt-0 mt-6">
      <Sidebar />
      <main className="relative md:ml-[2px] md:mr-[16px] md:my-[16px] md:rounded-2xl bg-zinc-900 light:bg-white light:border light:border-slate-300 w-full h-full md:h-[calc(100%-32px)] overflow-y-auto p-4 md:p-0">
        <div className="flex flex-col w-full px-1 md:pl-6 md:pr-[50px] md:py-6 py-16">
          <div className="w-full flex flex-col gap-y-2 pb-6 border-b border-white/20 light:border-slate-300">
            <h1 className="text-lg font-semibold leading-7 text-white light:text-slate-900">
              {t("telegram.title")}
            </h1>
            <p className="text-xs leading-4 text-zinc-400 light:text-slate-600 max-w-[700px]">
              {t("telegram.description")}
            </p>
            <ExternalLink
              href={paths.docs("/channels/telegram")}
              className="text-xs leading-4 text-white light:text-slate-900 underline hover:no-underline w-fit"
            >
              {t("tools-pages.telegram.docs")}
            </ExternalLink>
          </div>
          {children}
        </div>
      </main>
    </div>
  );
}
