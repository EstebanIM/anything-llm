import Sidebar from "@/components/SettingsSidebar";
import { useTranslation } from "react-i18next";
import { Info } from "lucide-react";
import AutoSubmit from "../components/AutoSubmit";
import AutoSpeak from "../components/AutoSpeak";
import SpellCheck from "../components/SpellCheck";
import ShowScrollbar from "../components/ShowScrollbar";
import AutoScroll from "../components/AutoScroll";
import ChatRenderHTML from "../components/ChatRenderHTML";

export default function ChatSettings() {
  const { t } = useTranslation();

  return (
    <div className="w-screen h-screen overflow-hidden bg-zinc-950 light:bg-slate-50 flex">
      <Sidebar />
      <main className="relative md:ml-[2px] md:mr-[16px] md:my-[16px] md:rounded-[16px] bg-zinc-900 light:bg-white w-full h-full md:h-[calc(100%-32px)] overflow-y-scroll p-4 md:p-0">
        <div className="flex flex-col w-full px-1 md:pl-6 md:pr-[86px] md:py-6 py-16">
          <div className="w-full flex flex-col gap-y-1 pb-6 border-white light:border-theme-sidebar-border border-b-2 border-opacity-10">
            <h1 className="text-lg leading-6 font-bold text-white">
              {t("customization.chat.title")}
            </h1>
            <p className="text-xs leading-[18px] text-white text-opacity-60">
              {t("customization.chat.description")}
            </p>
            <p className="mt-2 flex items-start gap-x-1.5 text-xs leading-[18px] text-white/60">
              <Info
                strokeWidth={1.5}
                size={14}
                aria-hidden="true"
                className="shrink-0 mt-0.5"
              />
              {t("settings-pages.chat-local-note")}
            </p>
          </div>
          <AutoSubmit />
          <AutoSpeak />
          <SpellCheck />
          <ShowScrollbar />
          <AutoScroll />
          <ChatRenderHTML />
        </div>
      </main>
    </div>
  );
}
