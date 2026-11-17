import { memo, useId } from "react";
import { useTranslation } from "react-i18next";
import {
  ChevronRight,
  LoaderCircle,
  File,
  Folder,
  RotateCw,
} from "lucide-react";
import { getFileExtension } from "@/utils/directories";
import SelectionCheckbox from "../../../SelectionCheckbox";
import { displayDate } from "../../../listStyles";

const NOTE =
  "flex items-center gap-x-2 min-h-12 pl-4 text-xs text-zinc-400 light:text-slate-600";

/**
 * @param {Object} props
 * @param {number} props.inWorkspaceCount - Documents of this folder already in workspace
 * @param {"none"|"some"|"all"} props.selectionState
 */
export default function MobileFolderRow({
  row,
  inWorkspaceCount,
  selectionState,
  isFileSelected,
  onToggleExpanded,
  onToggleFolder,
  onToggleFile,
  onLoadMore,
  onRetry,
}) {
  const { t } = useTranslation();
  const listId = useId();
  const {
    item,
    files,
    expanded,
    loading,
    failed,
    hasMore,
    totalCount,
    displayCount,
  } = row;
  const availableCount =
    inWorkspaceCount > 0
      ? Math.max(0, totalCount - inWorkspaceCount)
      : displayCount;

  return (
    <li>
      <div className="flex items-center min-h-14 rounded-xl">
        <SelectionCheckbox
          size="md"
          state={selectionState}
          label={t("workspace-docs.select-folder", { name: item.name })}
          onToggle={() => onToggleFolder(item, files)}
        />
        <button
          type="button"
          aria-expanded={expanded}
          aria-controls={expanded ? listId : undefined}
          onClick={() => onToggleExpanded(item.name)}
          className="border-none bg-transparent flex-1 min-w-0 flex items-center gap-x-3 min-h-14 pr-3 rounded-xl text-left transition-colors duration-quick ease-smooth active:bg-zinc-800 light:active:bg-slate-100"
        >
          <Folder
            strokeWidth={1.5}
            aria-hidden="true"
            className="w-5 h-5 shrink-0 text-zinc-400 light:text-slate-600"
          />
          <span className="flex-1 min-w-0">
            <span className="block text-sm font-medium truncate text-slate-50 light:text-slate-900">
              {item.name}
            </span>
            <span className="block text-xs text-zinc-400 light:text-slate-600">
              {t("connectors.directory.total-documents", {
                count: availableCount,
              })}
              {inWorkspaceCount > 0 &&
                ` · ${t("workspace-docs.in-workspace-count", {
                  count: inWorkspaceCount,
                })}`}
            </span>
          </span>
          {loading && files.length > 0 && (
            <LoaderCircle
              strokeWidth={1.5}
              size={14}
              aria-hidden="true"
              className="animate-spin shrink-0 text-zinc-400 light:text-slate-600"
            />
          )}
          <ChevronRight
            strokeWidth={1.5}
            size={16}
            aria-hidden="true"
            className={`shrink-0 text-zinc-400 light:text-slate-600 transition-transform duration-base ease-smooth ${
              expanded ? "rotate-90" : ""
            }`}
          />
        </button>
      </div>

      {expanded && (
        <ul id={listId} role="list" aria-label={item.name} className="pl-5">
          {loading && files.length === 0 && (
            <li className={NOTE}>
              <LoaderCircle
                strokeWidth={1.5}
                size={14}
                aria-hidden="true"
                className="animate-spin"
              />
              {t("common.loading")}…
            </li>
          )}
          {failed && (
            <li className={NOTE}>
              <span role="alert" className="text-red-400 light:text-red-700">
                {t("workspace-docs.folder-error")}
              </span>
              <button
                type="button"
                onClick={() => onRetry(item.name)}
                className="border-none bg-transparent flex items-center gap-x-1 min-h-11 px-2 text-xs font-medium underline text-slate-50 light:text-slate-900"
              >
                <RotateCw strokeWidth={1.5} size={12} aria-hidden="true" />
                {t("provider-fields.retry")}
              </button>
            </li>
          )}
          {!loading && !failed && files.length === 0 && (
            <li className={NOTE}>{t("workspace-docs.folder-empty")}</li>
          )}
          {files.map((file) => (
            <MobileFileRow
              key={file.id}
              file={file}
              folderName={item.name}
              selected={isFileSelected(file.id)}
              onToggle={onToggleFile}
            />
          ))}
          {hasMore && (
            <li>
              <button
                type="button"
                aria-disabled={loading || undefined}
                onClick={() => onLoadMore(item.name)}
                className="border-none bg-transparent min-h-11 pl-4 text-sm font-medium text-sky-400 light:text-sky-700 aria-disabled:opacity-60"
              >
                {loading
                  ? `${t("common.loading")}…`
                  : t("workspace-docs.load-more", {
                      shown: files.length,
                      total: totalCount,
                    })}
              </button>
            </li>
          )}
        </ul>
      )}
    </li>
  );
}

/** The whole row is the checkbox: one large target with the file's details. */
const MobileFileRow = memo(
  function MobileFileRow({ file, folderName, selected, onToggle }) {
    const { t } = useTranslation();
    const meta = [
      getFileExtension(file.url),
      displayDate(file.published),
      file.cached && t("workspace-docs.cached"),
    ]
      .filter(Boolean)
      .join(" · ");
    return (
      <li>
        <button
          type="button"
          role="checkbox"
          aria-checked={selected}
          onClick={() => onToggle(file, folderName)}
          className={`border-none w-full flex items-center min-h-[52px] pr-3 rounded-xl text-left transition-colors duration-quick ease-smooth ${
            selected
              ? "bg-sky-500/15 light:bg-sky-50"
              : "bg-transparent active:bg-zinc-800 light:active:bg-slate-100"
          }`}
        >
          <SelectionCheckbox size="md" state={selected ? "all" : "none"} />
          <File
            strokeWidth={1.5}
            aria-hidden="true"
            className="w-5 h-5 shrink-0 text-zinc-400 light:text-slate-600"
          />
          <span className="flex-1 min-w-0 ml-3 py-1.5">
            <span className="block text-sm truncate text-slate-50 light:text-slate-900">
              {file.title}
            </span>
            <span className="block text-xs truncate text-zinc-400 light:text-slate-600">
              {meta}
            </span>
          </span>
        </button>
      </li>
    );
  },
  (prev, next) =>
    prev.file.id === next.file.id &&
    prev.selected === next.selected &&
    prev.onToggle === next.onToggle
);
