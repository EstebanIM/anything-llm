import Sidebar from "@/components/SettingsSidebar";
import { useTranslation } from "react-i18next";
import LanguagePreference from "../components/LanguagePreference";
import ThemePreference from "../components/ThemePreference";

export default function InterfaceSettings() {
  const { t } = useTranslation();

  return (
    <div className="w-screen h-screen overflow-hidden bg-zinc-950 light:bg-slate-50 flex">
      <Sidebar />
      <main className="relative md:ml-[2px] md:mr-[16px] md:my-[16px] md:rounded-[16px] bg-zinc-900 light:bg-white w-full h-full md:h-[calc(100%-32px)] overflow-y-scroll p-4 md:p-0">
        <div className="flex flex-col w-full px-1 md:pl-6 md:pr-[86px] md:py-6 py-16">
          <div className="w-full flex flex-col gap-y-1 pb-6 border-white light:border-theme-sidebar-border border-b-2 border-opacity-10">
            <h1 className="text-lg leading-6 font-bold text-white">
              {t("customization.interface.title")}
            </h1>
            <p className="text-xs leading-[18px] text-white text-opacity-60">
              {t("customization.interface.description")}
            </p>
          </div>
          <ThemePreference />
          <LanguagePreference />
        </div>
      </main>
    </div>
  );
}
