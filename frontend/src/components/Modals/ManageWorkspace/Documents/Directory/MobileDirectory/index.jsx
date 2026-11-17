import { useId, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FolderInput,
  FolderPlus,
  Folder,
  LoaderCircle,
  RotateCw,
  Search,
  Trash2,
} from "lucide-react";
import PreLoader from "@/components/Preloader";
import { FIELD_INPUT } from "@/components/ProviderFields";
import UploadFile from "../../UploadFile";
import MobileFolderRow from "./MobileFolderRow";
import MobileSheet, { MobileSheetOption } from "../../MobileSheet";
import MobileActionBar, {
  MobileActionButton,
  MobileActionIconButton,
} from "../../MobileActionBar";
import InlineAlert from "../../InlineAlert";

/**
 * Touch layout of the "My Documents" picker. State and mutations come from `Directory`.
 *
 * @param {Object} props
 * @param {ReturnType<import("../../hooks/useDocumentPicker").default>} props.picker
 * @param {Record<string, number>} props.embeddedCounts - Per folder, documents already in workspace
 * @param {number} props.documentCount - Total documents, or matches while searching
 * @param {import("react").RefObject<HTMLElement>} props.listRef - focus target after a move or delete
 */
export default function MobileDirectory({
  picker,
  workspace,
  rows,
  query,
  embeddedCounts,
  documentCount,
  searchResultCount,
  allSelected,
  uploadQueue,
  pickerError,
  onDismissError,
  onSearch,
  onSelectAll,
  onMoveToWorkspace,
  onMoveToFolder,
  onDelete,
  onNewFolder,
  listRef,
}) {
  const { t } = useTranslation();
  const searchId = useId();
  const listLabelId = useId();
  const [showFolderSheet, setShowFolderSheet] = useState(false);
  const {
    status,
    loadError,
    busyMessage,
    folders,
    searching,
    searchResults,
    hasSelection,
    selectedCount,
    selectedFolderNames,
    isFileSelected,
    folderSelectionState,
    toggleExpanded,
    toggleFolder,
    toggleFile,
    loadMore,
    retryFolder,
    clearSelection,
    syncAfterUpload,
    refresh,
    contents,
  } = picker;

  // Until a selected folder is fully loaded its count comes from the server,
  // which still includes documents already in the workspace.
  const alreadyEmbedded = selectedFolderNames.reduce((sum, name) => {
    const entry = contents[name];
    const exact = entry?.status === "loaded" && !entry.hasMore;
    return exact ? sum : sum + (embeddedCounts[name] ?? 0);
  }, 0);
  const movableCount = Math.max(0, selectedCount - alreadyEmbedded);
  const hasFiles = movableCount > 0;

  return (
    <div className="relative flex flex-col flex-1 min-h-0">
      <div className="shrink-0 flex flex-col gap-y-3 px-4 pb-3">
        <UploadFile
          variant="mobile"
          workspace={workspace}
          queue={uploadQueue}
          onUploadComplete={syncAfterUpload}
          onLinkScraped={syncAfterUpload}
        />
        <div className="flex gap-x-2">
          <div className="relative flex-1 min-w-0">
            <label htmlFor={searchId} className="sr-only">
              {t("workspace-docs.search-label")}
            </label>
            <input
              id={searchId}
              type="search"
              value={query}
              onChange={onSearch}
              placeholder={t("connectors.directory.search-document")}
              aria-busy={searching || undefined}
              className={`${FIELD_INPUT} search-input pl-10`}
            />
            {searching ? (
              <LoaderCircle
                strokeWidth={1.5}
                size={16}
                aria-hidden="true"
                className="absolute left-3.5 top-1/2 -translate-y-1/2 animate-spin text-zinc-400 light:text-slate-600"
              />
            ) : (
              <Search
                strokeWidth={1.5}
                size={16}
                aria-hidden="true"
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400 light:text-slate-600 pointer-events-none"
              />
            )}
          </div>
          <MobileActionIconButton
            label={t("connectors.directory.new-folder")}
            onClick={onNewFolder}
          >
            <FolderPlus strokeWidth={1.5} size={20} aria-hidden="true" />
          </MobileActionIconButton>
        </div>
      </div>

      <div className="shrink-0 flex items-center justify-between min-h-11 px-4 text-xs text-zinc-400 light:text-slate-600">
        <p id={listLabelId} aria-live="polite">
          {searchResults
            ? t("connectors.directory.search-results", {
                count: documentCount,
              })
            : t("connectors.directory.total-documents", {
                count: documentCount,
              })}
        </p>
        {rows.length > 0 && (
          <button
            type="button"
            onClick={allSelected ? clearSelection : onSelectAll}
            className="border-none bg-transparent h-11 -mr-2 px-2 text-xs font-semibold text-sky-400 light:text-sky-700"
          >
            {allSelected
              ? t("connectors.directory.deselect_all")
              : t("connectors.directory.select_all")}
          </button>
        )}
      </div>

      <p
        role="status"
        className={
          busyMessage
            ? "shrink-0 flex items-center gap-x-2 mx-4 mb-2 px-3 py-2 rounded-xl text-xs font-medium bg-zinc-800 light:bg-slate-100 text-slate-50 light:text-slate-900"
            : "sr-only"
        }
      >
        {busyMessage && (
          <LoaderCircle
            strokeWidth={1.5}
            size={14}
            aria-hidden="true"
            className="animate-spin"
          />
        )}
        {busyMessage}
      </p>
      {pickerError && (
        <div className="shrink-0 mx-4 mb-2 rounded-xl overflow-hidden">
          <InlineAlert onDismiss={onDismissError}>{pickerError}</InlineAlert>
        </div>
      )}

      <div
        ref={listRef}
        tabIndex={-1}
        aria-busy={!!busyMessage || undefined}
        className={`flex-1 min-h-0 overflow-y-auto px-2 select-none ${
          hasSelection ? "pb-40" : "pb-6"
        }`}
      >
        <DirectoryContent
          status={status}
          loadError={loadError && rows.length === 0}
          noResults={!!searchResults && searchResultCount === 0}
          query={query}
          rows={rows}
          listLabelId={listLabelId}
          embeddedCounts={searchResults ? {} : embeddedCounts}
          folderSelectionState={folderSelectionState}
          isFileSelected={isFileSelected}
          onRetryLoad={refresh}
          onToggleExpanded={toggleExpanded}
          onToggleFolder={toggleFolder}
          onToggleFile={toggleFile}
          onLoadMore={loadMore}
          onRetry={retryFolder}
        />
      </div>

      <MobileActionBar
        show={hasSelection}
        label={
          hasFiles
            ? t("connectors.directory.selected-count", { count: movableCount })
            : t("workspace-docs.selected-folders", {
                count: selectedFolderNames.length,
              })
        }
      >
        <MobileActionButton disabled={!hasFiles} onClick={onMoveToWorkspace}>
          {t("connectors.directory.move-workspace")}
        </MobileActionButton>
        <MobileActionIconButton
          label={t("connectors.directory.move-to-folder")}
          aria-haspopup="dialog"
          disabled={!hasFiles}
          onClick={() => setShowFolderSheet(true)}
        >
          <FolderInput strokeWidth={1.5} size={20} aria-hidden="true" />
        </MobileActionIconButton>
        <MobileActionIconButton
          danger
          label={t("chat_window.delete")}
          aria-haspopup="dialog"
          onClick={onDelete}
        >
          <Trash2 strokeWidth={1.5} size={20} aria-hidden="true" />
        </MobileActionIconButton>
      </MobileActionBar>

      <MobileSheet
        open={showFolderSheet}
        onClose={() => setShowFolderSheet(false)}
        title={t("connectors.directory.move-to-folder")}
      >
        {folders.map((folder) => (
          <MobileSheetOption
            key={folder.name}
            icon={Folder}
            label={folder.name}
            onClick={() => {
              setShowFolderSheet(false);
              onMoveToFolder(folder);
            }}
          />
        ))}
      </MobileSheet>
    </div>
  );
}

function DirectoryContent({
  status,
  loadError,
  noResults,
  query,
  rows,
  listLabelId,
  embeddedCounts,
  folderSelectionState,
  isFileSelected,
  onRetryLoad,
  ...handlers
}) {
  const { t } = useTranslation();
  const message =
    "h-full flex flex-col items-center justify-center gap-y-2 px-6 text-center text-sm text-zinc-400 light:text-slate-600";

  if (status === "initializing")
    return (
      <div className="h-full flex items-center justify-center">
        <PreLoader />
      </div>
    );

  if (loadError)
    return (
      <div className={message}>
        <span role="alert">{t("workspace-docs.load-docs-error")}</span>
        <button
          type="button"
          onClick={onRetryLoad}
          className="border-none bg-transparent flex items-center gap-x-1.5 min-h-11 px-3 rounded-md text-sm font-medium underline text-slate-50 light:text-slate-900"
        >
          <RotateCw strokeWidth={1.5} size={14} aria-hidden="true" />
          {t("provider-fields.retry")}
        </button>
      </div>
    );

  if (noResults)
    return (
      <p className={message}>
        {t("workspace-docs.no-results", { query: query.trim() })}
      </p>
    );

  if (rows.length === 0)
    return <p className={message}>{t("workspace-docs.empty")}</p>;

  return (
    <ul role="list" aria-labelledby={listLabelId}>
      {rows.map((row) => (
        <MobileFolderRow
          key={row.item.name}
          row={row}
          inWorkspaceCount={embeddedCounts[row.item.name] ?? 0}
          selectionState={folderSelectionState(row.item.name, row.files)}
          isFileSelected={(id) => isFileSelected(row.item.name, id)}
          {...handlers}
        />
      ))}
    </ul>
  );
}
