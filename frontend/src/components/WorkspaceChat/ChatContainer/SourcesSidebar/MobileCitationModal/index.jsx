import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { useTranslation } from "react-i18next";
import Modal from "@/components/lib/Modal";
import { combineLikeSources } from "../../ChatHistory/Citation";
import SourceDetailView from "./SourceDetailView";
import SourceItem from "../SourceItem";

export default function MobileCitationModal({
  sources: rawSources,
  isOpen,
  selectedSource,
  setSelectedSource,
  onClose,
}) {
  const sources = combineLikeSources(rawSources);
  const { t } = useTranslation();
  const listRef = useRef(null);
  const lastSelected = useRef(null);

  // Coming back from the detail view, focus the source that was opened.
  useEffect(() => {
    if (selectedSource) {
      lastSelected.current = selectedSource;
      return;
    }
    if (!lastSelected.current) return;
    const index = sources.findIndex(
      (s) => s.title === lastSelected.current.title
    );
    lastSelected.current = null;
    const buttons = listRef.current?.querySelectorAll("button");
    buttons?.[Math.max(index, 0)]?.focus({ preventScroll: true });
  }, [selectedSource]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      variant="bare"
      ariaLabel={t("chat_window.sources")}
    >
      <div aria-hidden="true" className="fixed inset-0" onClick={onClose} />
      <div className="relative z-10 w-[calc(100%-40px)] max-h-[70vh] rounded-[16px] bg-zinc-800 light:bg-white light:border-2 light:border-slate-300 p-4 flex flex-col gap-4">
        {selectedSource ? (
          <SourceDetailView
            source={selectedSource}
            onBack={() => setSelectedSource(null)}
            onClose={onClose}
          />
        ) : (
          <>
            <div className="flex items-center justify-between gap-2">
              <h2 className="font-semibold text-base leading-6 text-white light:text-slate-900">
                {t("chat_window.sources")}
              </h2>
              <button
                onClick={onClose}
                type="button"
                aria-label={t("chat-panels.sources.close")}
                className="-mr-3 w-11 h-11 flex items-center justify-center rounded-md text-zinc-300 light:text-slate-600 hover:text-white light:hover:text-slate-900 transition-colors duration-quick"
              >
                <X strokeWidth={1.5} size={16} aria-hidden="true" />
              </button>
            </div>
            <ul
              ref={listRef}
              className="flex flex-col gap-3 overflow-y-auto thin-scroll"
            >
              {sources.map((source, idx) => (
                <li key={source.title || idx}>
                  <SourceItem
                    source={source}
                    onClick={() => setSelectedSource(source)}
                  />
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </Modal>
  );
}
