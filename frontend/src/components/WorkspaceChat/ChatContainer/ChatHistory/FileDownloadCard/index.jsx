import { memo, useState } from "react";
import { useTranslation } from "react-i18next";
import { saveAs } from "file-saver";
import { Download, LoaderCircle } from "lucide-react";
import { humanFileSize } from "@/utils/numbers";
import StorageFiles from "@/models/files";

/**
 * @param {{content: {filename: string, storageFilename?: string, fileSize?: number}}} props
 */
function FileDownloadCard({ props }) {
  const { t } = useTranslation();
  const { filename, storageFilename, fileSize } = props.content || {};
  const { badge, badgeBg, badgeText, fileTypeKey } =
    getFileDisplayInfo(filename);
  const fileType = t(`chat-history.file.type.${fileTypeKey}`);
  // Older records carry no size; never print "NaN kB".
  const sizeLabel = Number.isFinite(fileSize)
    ? humanFileSize(fileSize, true, 1)
    : null;
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    if (downloading) return;
    if (!storageFilename) return;

    setDownloading(true);
    try {
      const blob = await StorageFiles.download(storageFilename);
      if (!blob) throw new Error("Failed to download file");
      saveAs(blob, filename || storageFilename);
    } catch {
      console.error("Failed to download file");
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="flex justify-center w-full my-2">
      <div className="w-full max-w-[750px] mr-4">
        <div className="flex items-center justify-between bg-zinc-800 light:bg-slate-100 light:border light:border-slate-200/50 rounded-xl px-2 py-1">
          <div className="flex items-center gap-x-3 min-w-0">
            <div
              aria-hidden="true"
              className={`${badgeBg} ${badgeText} rounded-lg flex items-center justify-center flex-shrink-0 h-[48px] w-[48px] text-xs font-bold`}
            >
              {badge}
            </div>
            <div className="flex flex-col min-w-0">
              <p className="text-white light:text-slate-900 text-sm font-medium truncate leading-snug">
                {filename || t("chat-history.file.unknown")}
              </p>
              <p className="text-zinc-400 light:text-slate-500 text-xs leading-snug">
                {[sizeLabel, fileType].filter(Boolean).join(" · ")}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleDownload}
            disabled={downloading}
            aria-label={
              downloading
                ? t("chat-history.file.downloading")
                : t("chat-history.file.download-name", {
                    name: filename || t("chat-history.file.unknown"),
                  })
            }
            className="flex items-center gap-x-2 px-4 min-h-[44px] md:min-h-0 md:py-2 rounded-lg border border-zinc-600 light:border-theme-sidebar-border hover:bg-zinc-700 light:hover:bg-theme-bg-secondary transition-colors text-white light:text-theme-text-primary text-sm font-medium flex-shrink-0 ml-4 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {downloading ? (
              <LoaderCircle
                strokeWidth={1.5}
                size={16}
                aria-hidden="true"
                className="animate-spin"
              />
            ) : (
              <Download strokeWidth={1.5} size={16} aria-hidden="true" />
            )}
            <span>
              {downloading
                ? t("chat-history.file.downloading")
                : t("chat-history.file.download")}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

/**
 * Get display info for a file based on its extension
 * @param {string} filename
 * @returns {{badge: string, badgeBg: string, badgeText: string, fileTypeKey: string}}
 */
function getFileDisplayInfo(filename) {
  const extension = filename?.split(".")?.pop()?.toLowerCase() ?? "txt";
  switch (extension) {
    case "pptx":
    case "ppt":
      return {
        badge: "PPT",
        badgeBg: "bg-orange-100",
        badgeText: "text-orange-700",
        fileTypeKey: "presentation",
      };
    case "pdf":
      return {
        badge: "PDF",
        badgeBg: "bg-red-100",
        badgeText: "text-red-700",
        fileTypeKey: "pdf",
      };
    case "doc":
    case "docx":
      return {
        badge: "DOC",
        badgeBg: "bg-blue-100",
        badgeText: "text-blue-700",
        fileTypeKey: "document",
      };
    case "xls":
    case "xlsx":
      return {
        badge: "XLS",
        badgeBg: "bg-green-100",
        badgeText: "text-green-700",
        fileTypeKey: "spreadsheet",
      };
    case "csv":
      return {
        badge: "CSV",
        badgeBg: "bg-green-100",
        badgeText: "text-green-700",
        fileTypeKey: "spreadsheet",
      };
    default:
      return {
        badge: extension.toUpperCase().slice(0, 4),
        badgeBg: "bg-slate-200",
        badgeText: "text-slate-700",
        fileTypeKey: "file",
      };
  }
}

export default memo(FileDownloadCard);
