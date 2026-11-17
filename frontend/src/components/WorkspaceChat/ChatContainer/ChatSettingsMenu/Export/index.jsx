import { useState } from "react";
import { useTranslation } from "react-i18next";
import { saveAs } from "file-saver";
import Workspace from "@/models/workspace";
import showToast from "@/utils/toast";
import useCustomAppName from "@/hooks/useCustomAppName";
import moment from "moment";
import SubmenuItem from "../Submenu";

const EXPORT_FORMATS = [
  { key: "pdf", label: "PDF", ext: "pdf" },
  { key: "markdown", label: "Markdown", ext: "md" },
  { key: "plaintext", labelKey: "chat-input.export-plaintext", ext: "txt" },
  { key: "json", label: "JSON", ext: "json" },
  { key: "html", label: "HTML", ext: "html" },
];

/**
 * File name safe on every OS: no spaces or characters Windows rejects
 * (\ / : * ? " < > |). Example: IASMAR-chat-2026-11-16-1530.pdf
 * @param {string} brandName
 * @param {string} ext
 */
function exportFileName(brandName, ext) {
  const brand =
    (brandName || "chat")
      .replace(/[\\/:*?"<>|\s]+/g, "-")
      .replace(/-+/g, "-") || "chat";
  const stamp = moment().format("YYYY-MM-DD-HHmm");
  return `${brand}-chat-${stamp}.${ext}`;
}

export default function ExportRow({
  history = [],
  workspace = null,
  threadSlug = null,
  onClose,
}) {
  const { t } = useTranslation();
  const { brandName } = useCustomAppName();
  const [exporting, setExporting] = useState(false);

  async function handleExport(format) {
    if (exporting || !workspace?.slug) return;
    setExporting(true);
    try {
      const blob = await Workspace.exportChatsToType(
        workspace.slug,
        threadSlug,
        format.key
      );
      if (blob) saveAs(blob, exportFileName(brandName, format.ext));
      else showToast(t("chat-input.export-failed"), "error");
    } finally {
      setExporting(false);
      onClose({ returnFocus: true });
    }
  }

  if (history.length === 0) return null;
  return (
    <SubmenuItem
      label={exporting ? t("chat_window.exporting") : t("chat_window.export")}
      submenuLabel={t("chat_window.export")}
    >
      {EXPORT_FORMATS.map((format) => (
        <button
          key={format.key}
          type="button"
          role="menuitem"
          aria-disabled={exporting || undefined}
          onClick={() => !exporting && handleExport(format)}
          className={`w-full text-left border-none bg-transparent px-2 py-1 min-h-11 md:min-h-0 rounded text-sm font-normal text-white light:text-slate-800 transition-colors duration-quick ${
            exporting
              ? "opacity-50 cursor-not-allowed"
              : "cursor-pointer hover:bg-zinc-700/50 light:hover:bg-slate-100 focus-visible:bg-zinc-700/50 light:focus-visible:bg-slate-100"
          }`}
        >
          {format.labelKey ? t(format.labelKey) : format.label}
        </button>
      ))}
    </SubmenuItem>
  );
}
