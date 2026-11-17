import { useId, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { History, SquareCode } from "lucide-react";
import Sidebar from "@/components/SettingsSidebar";
import EmbedConfigsView from "./EmbedConfigs";
import EmbedChatsView from "./EmbedChats";

const VIEWS = {
  widgets: { icon: SquareCode, Component: EmbedConfigsView },
  history: { icon: History, Component: EmbedChatsView },
};
const VIEW_KEYS = Object.keys(VIEWS);

export default function ChatEmbedWidgets() {
  const { t } = useTranslation();
  const baseId = useId();
  const tabRefs = useRef({});
  const [searchParams, setSearchParams] = useSearchParams();
  const view = VIEWS[searchParams.get("view")]
    ? searchParams.get("view")
    : "widgets";
  const { Component } = VIEWS[view];
  const tabId = (key) => `${baseId}-tab-${key}`;
  const panelId = `${baseId}-panel`;

  // Switching views drops the history page (?offset) on purpose.
  const selectView = (key) =>
    setSearchParams(key === "widgets" ? {} : { view: key }, { replace: true });

  // Tabs follow the APG pattern: one Tab stop, arrows and Home/End move and select.
  const handleTabKeyDown = (e) => {
    const current = VIEW_KEYS.indexOf(view);
    const next = {
      ArrowRight: current + 1,
      ArrowLeft: current - 1,
      Home: 0,
      End: VIEW_KEYS.length - 1,
    }[e.key];
    if (next === undefined) return;
    e.preventDefault();
    const key = VIEW_KEYS[(next + VIEW_KEYS.length) % VIEW_KEYS.length];
    selectView(key);
    tabRefs.current[key]?.focus();
  };

  return (
    <div className="w-screen h-screen overflow-hidden bg-zinc-950 light:bg-slate-50 flex">
      <Sidebar />
      <main className="relative md:ml-[2px] md:mr-[16px] md:my-[16px] md:rounded-[16px] bg-zinc-900 light:bg-white w-full h-full md:h-[calc(100%-32px)] overflow-y-auto p-4 md:p-0">
        <div className="flex flex-col w-full px-1 md:pl-6 md:pr-[50px] md:py-6 py-16">
          <div className="w-full flex flex-col gap-y-1 pb-6">
            <h1 className="text-lg leading-6 font-bold text-white">
              {t("settings.embeds")}
            </h1>
          </div>
          <div
            role="tablist"
            aria-label={t("settings.embeds")}
            onKeyDown={handleTabKeyDown}
            className="flex gap-x-8 border-b-2 border-white/10 light:border-theme-sidebar-border overflow-x-auto overflow-y-hidden no-scroll"
          >
            {VIEW_KEYS.map((key) => {
              const Icon = VIEWS[key].icon;
              const selected = view === key;
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
                  onClick={() => selectView(key)}
                  className={`flex gap-x-2 items-center min-h-[44px] md:min-h-0 pb-3 -mb-[2px] border-b-2 text-sm font-medium whitespace-nowrap transition-colors duration-quick ease-smooth ${selected ? "text-sky-400 border-sky-400 light:text-sky-700 light:border-sky-700" : "text-white/60 border-transparent hover:text-sky-400 light:hover:text-sky-700"}`}
                >
                  <Icon
                    strokeWidth={1.5}
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                  {t(`embed-pages.tabs.${key}`)}
                </button>
              );
            })}
          </div>
          <div
            role="tabpanel"
            id={panelId}
            aria-labelledby={tabId(view)}
            tabIndex={0}
            className="pt-6 rounded-sm"
          >
            <Component />
          </div>
        </div>
      </main>
    </div>
  );
}
