import { Fragment, useEffect, useRef } from "react";
import { ChevronLeft, Info, X } from "lucide-react";
import { decode as HTMLDecode } from "he";
import truncate from "truncate";
import { useTranslation } from "react-i18next";
import { omitChunkHeader } from "../../../ChatHistory/Citation";
import { formatPercent } from "@/utils/dates";

const ICON_BUTTON =
  "w-11 h-11 shrink-0 flex items-center justify-center rounded-md text-zinc-300 light:text-slate-600 hover:text-white light:hover:text-slate-900 transition-colors duration-quick";

export default function SourceDetailView({ source, onBack, onClose }) {
  const { t } = useTranslation();
  const backRef = useRef(null);

  // The list this view replaced held the focused item, so keep focus inside.
  useEffect(() => {
    backRef.current?.focus({ preventScroll: true });
  }, []);

  return (
    <>
      <div className="flex items-center justify-between -mx-3">
        <button
          ref={backRef}
          onClick={onBack}
          type="button"
          aria-label={t("chat-panels.sources.back")}
          className={ICON_BUTTON}
        >
          <ChevronLeft strokeWidth={1.5} size={20} aria-hidden="true" />
        </button>
        <h2
          title={source.title}
          className="font-semibold text-base leading-6 text-white light:text-slate-900 truncate px-2"
        >
          {truncate(source.title, 30)}
        </h2>
        <button
          onClick={onClose}
          type="button"
          aria-label={t("chat-panels.sources.close")}
          className={ICON_BUTTON}
        >
          <X strokeWidth={1.5} size={16} aria-hidden="true" />
        </button>
      </div>
      <div className="flex flex-col overflow-y-auto thin-scroll">
        {source.chunks.map(({ text, score }, idx) => (
          <Fragment key={idx}>
            <div className="flex flex-col gap-y-1 py-4">
              <p className="text-sm leading-[20px] text-white light:text-slate-900">
                {HTMLDecode(omitChunkHeader(text))}
              </p>
              {!!score && (
                <div className="flex items-center text-xs text-zinc-300 light:text-slate-600 gap-x-1">
                  <Info strokeWidth={1.5} size={14} aria-hidden="true" />
                  <p>
                    {formatPercent(score)} {t("chat_window.similarity_match")}
                  </p>
                </div>
              )}
            </div>
            {idx !== source.chunks.length - 1 && (
              <hr className="border-zinc-700 light:border-slate-300" />
            )}
          </Fragment>
        ))}
      </div>
    </>
  );
}
