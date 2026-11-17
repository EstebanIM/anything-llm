import { useId, useRef, useState } from "react";
import { ChevronDown, Download, LoaderCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { saveAs } from "file-saver";
import System from "@/models/system";
import showToast from "@/utils/toast";
import useMenu from "@/hooks/useMenu";

const EXPORT_FORMATS = [
  { key: "csv", label: "CSV", mimeType: "text/csv", extension: "csv" },
  {
    key: "json",
    label: "JSON",
    mimeType: "application/json",
    extension: "json",
  },
  {
    key: "jsonl",
    label: "JSONL",
    mimeType: "application/jsonl",
    extension: "jsonl",
  },
  {
    key: "jsonAlpaca",
    label: "JSON (Alpaca)",
    mimeType: "application/json",
    extension: "json",
    suffix: "-alpaca",
  },
];

/** "iasmar-chats-2026-11-17.csv": local date, no slashes. */
function exportFileName(prefix, format, date = new Date()) {
  const pad = (n) => String(n).padStart(2, "0");
  const day = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
  return `${prefix}-${day}${format.suffix || ""}.${format.extension}`;
}

/**
 * "Export" menu button for the chat history tables.
 *
 * @param {object} props
 * @param {"workspace" | "embed"} props.chatType - which chats the server exports
 * @param {string} props.filePrefix - e.g. "iasmar-chats"
 */
export default function ExportChatsMenu({ chatType, filePrefix }) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const triggerRef = useRef(null);
  const menuRef = useRef(null);
  const menuId = useId();

  useMenu({ open, onClose: () => setOpen(false), menuRef, triggerRef });

  async function handleExport(format) {
    setOpen(false);
    triggerRef.current?.focus();
    setBusy(true);
    const data = await System.exportChats(format.key, chatType);
    setBusy(false);
    if (!data) {
      showToast(t("embed-pages.export.failed"), "error", { clear: true });
      return;
    }
    const blob = new Blob([data], { type: format.mimeType });
    saveAs(blob, exportFileName(filePrefix, format));
    showToast(
      t("embed-pages.export.done", { format: format.label }),
      "success",
      {
        clear: true,
      }
    );
  }

  return (
    <div className="relative">
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={open ? menuId : undefined}
        aria-disabled={busy || undefined}
        aria-busy={busy || undefined}
        onClick={() => {
          if (busy) return;
          setOpen((value) => !value);
        }}
        className="flex items-center gap-x-2 px-4 rounded-lg text-xs font-semibold min-h-[44px] md:min-h-0 md:h-[34px] w-fit bg-primary-button text-theme-button-primary-text hover:bg-primary-button-hover transition-colors duration-quick ease-smooth aria-disabled:cursor-wait aria-disabled:opacity-60"
      >
        {busy ? (
          <LoaderCircle
            strokeWidth={1.5}
            size={18}
            className="animate-spin"
            aria-hidden="true"
          />
        ) : (
          <Download strokeWidth={1.5} size={18} aria-hidden="true" />
        )}
        {busy ? t("embed-pages.export.exporting") : t("embed-chats.export")}
        <ChevronDown strokeWidth={1.5} size={18} aria-hidden="true" />
      </button>
      {open && (
        <div
          ref={menuRef}
          id={menuId}
          role="menu"
          aria-label={t("embed-pages.export.menu")}
          className="absolute left-0 top-full mt-2 z-20 min-w-[10rem] p-1 rounded-lg bg-zinc-900 light:bg-white border border-zinc-700 light:border-slate-300 shadow-lg animate-in fade-in-0 slide-in-from-top-2"
        >
          {EXPORT_FORMATS.map((format) => (
            <button
              key={format.key}
              type="button"
              role="menuitem"
              onClick={() => handleExport(format)}
              className="w-full text-left px-3 min-h-[44px] md:min-h-[36px] rounded-md text-sm text-zinc-100 light:text-slate-900 hover:bg-zinc-800 light:hover:bg-slate-100 transition-colors duration-quick ease-smooth"
            >
              {format.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
