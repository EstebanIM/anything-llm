import { useId, useState } from "react";
import { useTranslation } from "react-i18next";
import { X } from "lucide-react";
import {
  combineLikeSources,
  CitationDetailModal,
} from "../ChatHistory/Citation";
import MobileCitationModal from "./MobileCitationModal";
import SourceItem from "./SourceItem";
import ChatSidebar, {
  useSourcesSidebar,
  useMediaQuery,
  PHONE_SCREEN_QUERY,
} from "../ChatSidebar";

// Re-export for backward compat with existing imports
export { useSourcesSidebar } from "../ChatSidebar";

export default function SourcesSidebar() {
  const { sources, sidebarOpen, closeSidebar } = useSourcesSidebar();
  const { t } = useTranslation();
  const [selectedSource, setSelectedSource] = useState(null);
  const isPhone = useMediaQuery(PHONE_SCREEN_QUERY);
  const headingId = useId();

  const combined = combineLikeSources(sources);

  if (isPhone) {
    return (
      <MobileCitationModal
        sources={sources}
        isOpen={sidebarOpen}
        selectedSource={selectedSource}
        setSelectedSource={setSelectedSource}
        onClose={() => {
          setSelectedSource(null);
          closeSidebar();
        }}
      />
    );
  }

  return (
    <>
      <ChatSidebar
        isOpen={sidebarOpen}
        onClose={closeSidebar}
        labelledBy={headingId}
      >
        <div
          className="ml-4 w-[350px] max-w-[calc(100%-16px)] bg-zinc-900 light:bg-white light:border-2 light:border-slate-300 md:rounded-[16px] p-4 flex flex-col gap-4 overflow-hidden mt-[72px]"
          style={{ maxHeight: "calc(100% - 88px)" }}
        >
          <div className="flex items-start justify-between gap-2">
            <h2
              id={headingId}
              tabIndex={-1}
              data-panel-title=""
              className="font-medium text-base leading-6 text-white light:text-slate-900"
            >
              {t("chat_window.sources")}
            </h2>
            <button
              onClick={closeSidebar}
              type="button"
              aria-label={t("chat-panels.sources.close")}
              className="-m-1.5 p-1.5 rounded-md text-zinc-300 light:text-slate-600 hover:text-white light:hover:text-slate-900 transition-colors duration-quick border-none bg-transparent cursor-pointer"
            >
              <X strokeWidth={1.5} size={16} aria-hidden="true" />
            </button>
          </div>
          <ul className="flex flex-col gap-3 overflow-y-auto thin-scroll">
            {combined.map((source, idx) => (
              <li key={source.title || idx}>
                <SourceItem
                  source={source}
                  onClick={() => setSelectedSource(source)}
                />
              </li>
            ))}
          </ul>
        </div>
      </ChatSidebar>
      {selectedSource && (
        <CitationDetailModal
          source={selectedSource}
          onClose={() => setSelectedSource(null)}
        />
      )}
    </>
  );
}
