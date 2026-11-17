import { CircleCheck, CircleX, LoaderCircle, Clock, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { middleTruncate } from "@/utils/directories";

/**
 * @param {string} filename
 */
const getDisplayName = (filename) => {
  const base = filename.split("/").pop() || filename;
  return base.replace(
    /-[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}\.json$/,
    ""
  );
};

const STATUS_STYLES = {
  pending: {
    icon: (
      <Clock
        strokeWidth={1.5}
        size={16}
        aria-hidden="true"
        className="text-slate-100 light:text-slate-600 shrink-0"
      />
    ),
    textColor: "text-slate-100 light:text-slate-700",
    label: "chat-panels.embedding.status.pending",
  },
  embedding: {
    icon: (
      <LoaderCircle
        strokeWidth={1.5}
        size={16}
        aria-hidden="true"
        className="text-slate-100 light:text-slate-600 animate-spin shrink-0"
      />
    ),
    textColor: "text-slate-100 light:text-slate-700",
    label: "chat-panels.embedding.status.embedding",
  },
  complete: {
    icon: (
      <CircleCheck
        strokeWidth={1.5}
        size={16}
        aria-hidden="true"
        className="text-green-400 light:text-green-700 shrink-0"
      />
    ),
    textColor: "text-green-400 light:text-green-700",
    label: "chat-panels.embedding.status.complete",
  },
  failed: {
    icon: (
      <CircleX
        strokeWidth={1.5}
        size={16}
        aria-hidden="true"
        className="text-red-400 light:text-red-700 shrink-0"
      />
    ),
    textColor: "text-red-400 light:text-red-700",
    label: "chat-panels.embedding.status.failed",
  },
};

export default function EmbeddingFileRow({
  filename,
  status: fileStatus,
  onRemove,
}) {
  const { t } = useTranslation();
  const { status, chunksProcessed = 0, totalChunks = 0 } = fileStatus;
  const style = STATUS_STYLES[status] || STATUS_STYLES.pending;
  const displayName = getDisplayName(filename);
  const isEmbedding = status === "embedding";
  const pct =
    isEmbedding && totalChunks > 0
      ? Math.round((chunksProcessed / totalChunks) * 100)
      : 0;

  return (
    <div className="text-slate-100 light:text-slate-900 text-xs grid grid-cols-12 py-2 pl-3.5 pr-3.5 min-h-[34px] items-center border-b border-white/5 light:border-slate-200 last:border-b-0">
      <div className="col-span-7 flex items-center gap-x-2 overflow-hidden">
        {style.icon}
        <p
          className={`whitespace-nowrap overflow-hidden text-ellipsis ${
            status === "failed" ? "text-red-400 light:text-red-700" : ""
          }`}
          title={displayName}
        >
          {middleTruncate(displayName, 40)}
        </p>
      </div>
      <div className="col-span-5 flex justify-end items-center gap-x-2">
        {isEmbedding ? (
          <div className="flex items-center gap-x-2 w-full justify-end">
            <div
              role="progressbar"
              aria-label={t("chat-panels.embedding.progress", {
                name: displayName,
              })}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={pct}
              className="w-20 h-1 bg-white/10 light:bg-sky-900/10 rounded-full overflow-hidden"
            >
              <div
                className="h-full w-full origin-left bg-white light:bg-sky-700 rounded-full transition-transform duration-base ease-smooth"
                style={{ transform: `scaleX(${pct / 100})` }}
              />
            </div>
            <p
              aria-hidden="true"
              className="text-xs whitespace-nowrap w-8 text-right tabular-nums"
            >
              {pct}%
            </p>
          </div>
        ) : (
          <div className="flex items-center gap-x-2">
            <p
              className={`text-xs italic whitespace-nowrap flex gap-2 justify-center items-center ${style.textColor}`}
            >
              {t(style.label)}
            </p>
            {onRemove && (
              <button
                type="button"
                onClick={onRemove}
                aria-label={t("chat-panels.embedding.remove", {
                  name: displayName,
                })}
                title={t("chat-panels.embedding.remove", {
                  name: displayName,
                })}
                className="border-none hover:bg-white/10 light:hover:bg-sky-900/10 rounded p-1 transition-colors duration-quick text-slate-100 light:text-slate-600 hover:text-slate-100 light:hover:text-slate-900"
              >
                <X strokeWidth={1.5} size={14} aria-hidden="true" />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
