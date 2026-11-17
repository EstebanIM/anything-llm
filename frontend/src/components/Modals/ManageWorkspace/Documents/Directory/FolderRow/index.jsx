import { useId, useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronRight, Folder, LoaderCircle, RotateCw } from "lucide-react";
import FileRow from "../FileRow";
import SelectionCheckbox from "../../SelectionCheckbox";
import {
  ROW_ACCENT,
  ROW_BASE,
  ROW_IDLE,
  rowSecondaryText,
} from "../../listStyles";

const NOTE_ROW =
  "flex items-center gap-x-2 pl-9 pr-3 min-h-[36px] text-xs text-zinc-400 light:text-slate-600 border-b border-zinc-800 light:border-slate-200";

/**
 * A folder in the document picker. Purely presentational - every piece of
 * state (which files are loaded, whether it is open, what is selected) is
 * owned by `useDocumentPicker` so the row can never drift out of sync with
 * the rest of the picker.
 *
 * The checkbox selects the folder; the rest of the row is a disclosure button
 * that opens it. A whole-row selection would be too easy to hit by accident
 * for something that can stage hundreds of files for embedding.
 *
 * @param {object} props
 * @param {{name: string, fileCount: number}} props.item folder shell
 * @param {Array<object>} props.files files currently fetched for this folder
 * @param {boolean} props.expanded
 * @param {boolean} props.loading a page request is in flight
 * @param {boolean} props.failed the last page request failed
 * @param {boolean} props.hasMore more pages remain on the server
 * @param {number} props.totalCount server-side count, shown in "Load more"
 * @param {number} props.displayCount the badge next to the folder name; the
 * caller resolves this because it differs by context (matches while searching,
 * listable rows once fully fetched, the raw count before that)
 * @param {'none'|'some'|'all'} props.selectionState folder checkbox tri-state
 * @param {(id: string) => boolean} props.isFileSelected
 * @param {boolean} props.acceptsDrops whether files can be dropped onto this
 * row right now (false while the document processor is offline)
 * @param {(folderName: string, event: React.DragEvent) => void} props.onDropFiles
 */
export default function FolderRow({
  item,
  files = [],
  expanded = false,
  loading = false,
  failed = false,
  hasMore = false,
  totalCount = 0,
  displayCount = 0,
  selectionState = "none",
  isFileSelected,
  onToggleExpanded,
  onToggleFolder,
  onToggleFile,
  onPrefetch,
  onLoadMore,
  onRetry,
  acceptsDrops = false,
  onDropFiles,
}) {
  const { t } = useTranslation();
  const listId = useId();
  const [isDropTarget, setIsDropTarget] = useState(false);
  const highlighted = selectionState !== "none";

  // Only react to drags carrying files - dragging text or a link over the
  // picker should not light every folder up.
  const dragHasFiles = (event) =>
    Array.from(event.dataTransfer?.types ?? []).includes("Files");

  const handleDragOver = (event) => {
    if (!acceptsDrops || !dragHasFiles(event)) return;
    // Both required, or the browser refuses the drop and opens the file.
    event.preventDefault();
    event.stopPropagation();
    event.dataTransfer.dropEffect = "copy";
    if (!isDropTarget) setIsDropTarget(true);
  };

  const handleDragLeave = (event) => {
    // dragleave also fires when moving onto a child element, so ignore any
    // leave that lands somewhere still inside this row.
    if (event.currentTarget.contains(event.relatedTarget)) return;
    setIsDropTarget(false);
  };

  const handleDrop = (event) => {
    setIsDropTarget(false);
    if (!acceptsDrops || !dragHasFiles(event)) return;
    // preventDefault stops the browser from navigating to the dropped file;
    // stopPropagation keeps the drop from also being handled as an untargeted
    // one by anything above this row.
    event.preventDefault();
    event.stopPropagation();
    onDropFiles(item.name, event);
  };

  return (
    <li>
      <div
        onMouseEnter={() => onPrefetch(item.name)}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`flex items-center gap-x-1 pl-1.5 pr-3 min-h-[36px] text-xs ${ROW_BASE} ${
          highlighted ? ROW_ACCENT : ROW_IDLE
        } ${
          isDropTarget
            ? "outline-dashed outline-2 -outline-offset-2 outline-sky-400 light:outline-sky-700"
            : ""
        }`}
      >
        <SelectionCheckbox
          state={selectionState}
          label={t("workspace-docs.select-folder", { name: item.name })}
          onToggle={(event) => onToggleFolder(item, event)}
          onAccent={highlighted}
        />
        <button
          type="button"
          aria-expanded={expanded}
          aria-controls={expanded ? listId : undefined}
          onClick={() => onToggleExpanded(item.name)}
          onFocus={() => onPrefetch(item.name)}
          className="border-none bg-transparent flex-1 min-w-0 flex items-center gap-x-1.5 min-h-[36px] text-left text-inherit rounded-md"
        >
          <ChevronRight
            strokeWidth={1.5}
            aria-hidden="true"
            className={`shrink-0 w-4 h-4 transition-transform duration-base ease-smooth ${
              expanded ? "rotate-90" : ""
            }`}
          />
          <Folder
            strokeWidth={1.5}
            aria-hidden="true"
            className="shrink-0 w-4 h-4"
          />
          <span className="truncate font-medium">{item.name}</span>
          {displayCount > 0 && (
            <span className={`shrink-0 ${rowSecondaryText(highlighted)}`}>
              ({displayCount})
            </span>
          )}
          {loading && files.length > 0 && (
            <LoaderCircle
              strokeWidth={1.5}
              size={12}
              aria-hidden="true"
              className="animate-spin ml-1 shrink-0"
            />
          )}
        </button>
      </div>
      {expanded && (
        <ul id={listId} role="list" aria-label={item.name}>
          {loading && files.length === 0 && (
            <li className={NOTE_ROW}>
              <LoaderCircle
                strokeWidth={1.5}
                size={14}
                aria-hidden="true"
                className="animate-spin"
              />
              <span>{t("common.loading")}…</span>
            </li>
          )}
          {failed && (
            <li className={NOTE_ROW}>
              <span role="alert" className="text-red-400 light:text-red-700">
                {t("workspace-docs.folder-error")}
              </span>
              <button
                type="button"
                onClick={() => onRetry(item.name)}
                className="border-none bg-transparent flex items-center gap-x-1 px-1.5 py-1 rounded-md text-xs font-medium underline text-slate-50 light:text-slate-900"
              >
                <RotateCw strokeWidth={1.5} size={12} aria-hidden="true" />
                {t("provider-fields.retry")}
              </button>
            </li>
          )}
          {!loading && !failed && files.length === 0 && (
            <li className={NOTE_ROW}>{t("workspace-docs.folder-empty")}</li>
          )}
          {files.map((file) => (
            <FileRow
              key={file.id}
              item={file}
              selected={isFileSelected(file.id)}
              folderName={item.name}
              toggleSelection={onToggleFile}
            />
          ))}
          {hasMore && (
            <li className={NOTE_ROW}>
              <button
                type="button"
                onClick={() => onLoadMore(item.name)}
                aria-disabled={loading || undefined}
                className="border-none bg-transparent p-0 text-xs font-medium underline text-sky-400 light:text-sky-700 hover:text-sky-300 light:hover:text-sky-800 aria-disabled:opacity-60 aria-disabled:cursor-wait"
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
