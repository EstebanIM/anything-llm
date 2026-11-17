import { useId, useRef } from "react";
import Sidebar from "@/components/SettingsSidebar";
import { useSearchParams } from "react-router-dom";
import { AppWindow, Palette, IdCard } from "lucide-react";
import CustomLogo from "../components/CustomLogo";
import { useTranslation } from "react-i18next";
import CustomAppName from "../components/CustomAppName";
import CustomLoginPoweredBy from "../components/CustomLoginPoweredBy";
import CustomSiteSettings from "../components/CustomSiteSettings";
import BrandColor from "../components/BrandColor";
import InstancePalettes from "@/palettes/InstancePalettes";
const TABS = {
  identity: {
    icon: IdCard,
    Component: () => (
      <>
        <CustomAppName />
        <CustomLoginPoweredBy />
        <CustomLogo />
      </>
    ),
  },
  colors: {
    icon: Palette,
    Component: () => (
      <>
        <InstancePalettes />
        <BrandColor />
      </>
    ),
  },
  browser: {
    icon: AppWindow,
    Component: CustomSiteSettings,
  },
};
const TAB_KEYS = Object.keys(TABS);

export default function BrandingSettings() {
  const { t } = useTranslation();
  const baseId = useId();
  const tabRefs = useRef({});
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = TABS[searchParams.get("tab")]
    ? searchParams.get("tab")
    : "identity";
  const { Component } = TABS[activeTab];
  const tabId = (key) => `${baseId}-tab-${key}`;
  const panelId = `${baseId}-panel`;

  const selectTab = (key) => setSearchParams({ tab: key }, { replace: true });

  // Tabs follow the APG pattern: one Tab stop, arrows and Home/End move and select.
  const handleTabKeyDown = (e) => {
    const current = TAB_KEYS.indexOf(activeTab);
    const next = {
      ArrowRight: current + 1,
      ArrowLeft: current - 1,
      Home: 0,
      End: TAB_KEYS.length - 1,
    }[e.key];
    if (next === undefined) return;
    e.preventDefault();
    const key = TAB_KEYS[(next + TAB_KEYS.length) % TAB_KEYS.length];
    selectTab(key);
    tabRefs.current[key]?.focus();
  };

  return (
    <div className="w-screen h-screen overflow-hidden bg-zinc-950 light:bg-slate-50 flex">
      <Sidebar />
      <main className="relative md:ml-[2px] md:mr-[16px] md:my-[16px] md:rounded-[16px] bg-zinc-900 light:bg-white w-full h-full md:h-[calc(100%-32px)] overflow-y-scroll p-4 md:p-0">
        <div className="flex flex-col w-full px-1 md:pl-6 md:pr-[86px] md:py-6 py-16">
          <div className="w-full flex flex-col gap-y-1 pb-6">
            <h1 className="text-lg leading-6 font-bold text-white">
              {t("customization.branding.title")}
            </h1>
            <p className="text-xs leading-[18px] text-white text-opacity-60">
              {t("customization.branding.description")}
            </p>
          </div>
          <div
            role="tablist"
            aria-label={t("customization.branding.title")}
            onKeyDown={handleTabKeyDown}
            className="flex gap-x-8 border-b-2 border-white/10 light:border-theme-sidebar-border overflow-x-auto overflow-y-hidden no-scroll"
          >
            {TAB_KEYS.map((key) => {
              const Icon = TABS[key].icon;
              const selected = activeTab === key;
              return (
                <button
                  key={key}
                  ref={(el) => {
                    tabRefs.current[key] = el;
                  }}
                  id={tabId(key)}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls={selected ? panelId : undefined}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => selectTab(key)}
                  className={`flex gap-x-2 items-center min-h-[44px] md:min-h-0 pb-3 -mb-[2px] border-b-2 text-sm font-medium whitespace-nowrap transition-colors duration-quick ease-smooth ${selected ? "text-sky-400 border-sky-400 light:text-sky-700 light:border-sky-700" : "text-white/60 border-transparent hover:text-sky-400 light:hover:text-sky-700"}`}
                >
                  <Icon
                    strokeWidth={1.5}
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                  {t(`customization.branding.tabs.${key}`)}
                </button>
              );
            })}
          </div>
          <div
            role="tabpanel"
            id={panelId}
            aria-labelledby={tabId(activeTab)}
            tabIndex={0}
            className="pt-2 rounded-sm"
          >
            <Component />
          </div>
        </div>
      </main>
    </div>
  );
}
