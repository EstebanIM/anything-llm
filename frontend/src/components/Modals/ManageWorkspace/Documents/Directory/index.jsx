import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import { useTranslation } from "react-i18next";
import {
  ArrowRight,
  FolderPlus,
  LoaderCircle,
  RotateCw,
  Search,
  Trash2,
} from "lucide-react";
import debounce from "lodash.debounce";
import PreLoader from "@/components/Preloader";
import Modal from "@/components/lib/Modal";
import ConfirmModal from "@/components/lib/ConfirmModal";
import { FIELD_INPUT } from "@/components/ProviderFields";
import System from "@/models/system";
import Document from "@/models/document";
import showToast from "@/utils/toast";
import { useModal } from "@/hooks/useModal";
import { getFilesFromUploadEvent } from "@/utils/folderUpload";
import {
  rowsBetween,
  isSelectAllShortcut,
  isClearSelectionKey,
} from "@/utils/directories";
import UploadFile from "../UploadFile";
import useUploadQueue from "../hooks/useUploadQueue";
import SelectionCheckbox from "../SelectionCheckbox";
import InlineAlert from "../InlineAlert";
import FolderRow from "./FolderRow";
import MobileDirectory from "./MobileDirectory";
import MoveToFolderMenu from "./MoveToFolderMenu";
import NewFolderModal from "./NewFolderModal";

const NO_FILES = [];
const UPLOAD_FOLDER = "custom-documents";

const ACTION_BUTTON =
  "flex items-center gap-x-1.5 h-8 px-2.5 rounded-lg text-xs font-semibold transition-colors duration-quick ease-smooth disabled:opacity-50 disabled:cursor-not-allowed";

/** Rows in rendered order, for shift-click ranges. */
function flattenRows(rows) {
  return rows.flatMap((row) => {
    const folder = {
      id: `folder:${row.item.name}`,
      kind: "folder",
      name: row.item.name,
      files: row.files,
      expanded: row.expanded,
    };
    if (!row.expanded) return [folder];
    return [
      folder,
      ...row.files.map((file) => ({
        id: `file:${file.id}`,
        kind: "file",
        file: { ...file, folderName: row.item.name },
      })),
    ];
  });
}

/**
 * The "My Documents" picker: folders and files on disk that can be moved into
 * the workspace, moved between folders or deleted, plus the uploader.
 *
 * @param {Object} props
 * @param {"default"|"mobile"} [props.variant="default"] - `mobile` renders the
 * touch layout
 */
export default function Directory({
  picker,
  workspace,
  hiddenPaths,
  embeddedCounts,
  setHighlightWorkspace,
  moveToWorkspace,
  variant = "default",
}) {
  const { t } = useTranslation();
  const headingId = useId();
  const searchId = useId();
  const listRef = useRef(null);
  const [query, setQuery] = useState("");
  const [pickerError, setPickerError] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [focusRequest, setFocusRequest] = useState(0);
  const {
    isOpen: isFolderModalOpen,
    openModal: openFolderModal,
    closeModal: closeFolderModal,
  } = useModal();

  const {
    status,
    loadError,
    busyMessage,
    folders,
    contents,
    expanded,
    searchResults,
    searching,
    hasSelection,
    selectedCount,
    selectedFolderNames,
    isFileSelected,
    folderSelectionState,
    refresh,
    search,
    syncAfterUpload,
    toggleExpanded,
    prefetchFolder,
    loadMore,
    retryFolder,
    toggleFile,
    toggleFolder,
    selectAll,
    setFiles,
    selectRange,
    clearSelection,
    resolveSelection,
    removeFiles,
    addFolder,
    setBusy,
  } = picker;

  // Focus the list after the rows it pointed at are gone (move, delete).
  useEffect(() => {
    if (focusRequest) listRef.current?.focus();
  }, [focusRequest]);
  const focusList = () => setFocusRequest((n) => n + 1);

  /**
   * One flattened view model per visible folder. Search replaces the folder
   * list with the backend's matches (always open); otherwise rows are driven
   * by the lazily-fetched pages held in the picker.
   */
  const rows = useMemo(() => {
    const hide = (folderName, files) =>
      hiddenPaths?.size
        ? files.filter((f) => !hiddenPaths.has(`${folderName}/${f.name}`))
        : files;

    if (searchResults) {
      return searchResults.map((folder) => {
        const files = hide(folder.name, folder.items ?? []);
        return {
          item: folder,
          files,
          expanded: true,
          loading: false,
          failed: false,
          hasMore: false,
          totalCount: files.length,
          // The badge counts matches, not the folder's size - showing "(200)"
          // next to three visible rows reads as a bug.
          displayCount: files.length,
        };
      });
    }

    return folders.map((folder) => {
      const entry = contents[folder.name];
      const files = entry ? hide(folder.name, entry.items) : NO_FILES;
      const hasMore = entry?.hasMore ?? false;
      // totalCount is the server's raw count and drives "Load more (x of y)".
      const totalCount = entry?.totalCount ?? folder.fileCount ?? 0;
      return {
        item: folder,
        files,
        expanded: expanded.has(folder.name),
        loading: entry?.status === "loading",
        failed: entry?.status === "error",
        hasMore,
        totalCount,
        // Once a folder is fully fetched we know exactly how many rows it can
        // show - embedded files are filtered out of the page, so a folder with
        // everything embedded must read as empty rather than still claiming
        // its on-disk count.
        displayCount:
          entry?.status === "loaded" && !hasMore ? files.length : totalCount,
      };
    });
  }, [folders, contents, expanded, searchResults, hiddenPaths]);

  const totalDocCount = useMemo(
    () => folders.reduce((acc, folder) => acc + (folder.fileCount ?? 0), 0),
    [folders]
  );

  // While searching, the library-wide total is misleading next to a filtered
  // list, so the header reports how many matches are on screen instead.
  const searchResultCount = useMemo(
    () =>
      searchResults ? rows.reduce((acc, row) => acc + row.files.length, 0) : 0,
    [searchResults, rows]
  );

  /* -------------------------------- selection ------------------------------ */

  const pickerRows = useMemo(() => flattenRows(rows), [rows]);
  // Ref keeps the memoized file rows' click handler stable.
  const pickerRowsRef = useRef(pickerRows);
  useEffect(() => {
    pickerRowsRef.current = pickerRows;
  }, [pickerRows]);
  const rangeAnchor = useRef(null);

  // Shift-click selects from the anchor; any other click moves the anchor.
  // Returns true when the click was handled as a range.
  const clickRow = useCallback(
    (id, event) => {
      const rows = pickerRowsRef.current;
      const anchor = rangeAnchor.current;
      const range =
        event?.shiftKey && anchor ? rowsBetween(rows, anchor, id) : null;
      if (range) {
        selectRange(
          range,
          rows.find((row) => row.id === anchor)
        );
        return true;
      }
      rangeAnchor.current = id;
      return false;
    },
    [selectRange]
  );

  const handleFileClick = useCallback(
    (file, folderName, event) => {
      if (!clickRow(`file:${file.id}`, event)) toggleFile(file, folderName);
    },
    [clickRow, toggleFile]
  );

  const handleFolderToggle = (folder, files, event) => {
    if (!clickRow(`folder:${folder.name}`, event)) toggleFolder(folder, files);
  };

  // While searching, "all" means the matches on screen, not the whole library.
  const selectAllVisible = () =>
    searchResults
      ? setFiles(
          pickerRows
            .filter((row) => row.kind === "file")
            .map((row) => row.file),
          true
        )
      : selectAll();
  const allSelected =
    rows.length > 0 &&
    rows.every(
      (row) => folderSelectionState(row.item.name, row.files) === "all"
    );
  const headerState = allSelected ? "all" : hasSelection ? "some" : "none";
  const toggleAll = () => (allSelected ? clearSelection() : selectAllVisible());

  const handleKeyDown = (event) => {
    // Menus and inline editors inside the list handle their own keys.
    if (event.defaultPrevented || event.target.closest?.('[role="menu"]'))
      return;
    if (isClearSelectionKey(event) && hasSelection) {
      // Keeps the dialog's Escape handler from closing the whole manager.
      event.preventDefault();
      return clearSelection();
    }
    if (!isSelectAllShortcut(event)) return;
    event.preventDefault();
    selectAllVisible();
  };

  const selectionLabel =
    selectedCount > 0
      ? t("connectors.directory.selected-count", { count: selectedCount })
      : t("workspace-docs.selected-folders", {
          count: selectedFolderNames.length,
        });

  /* --------------------------------- search -------------------------------- */

  const runSearch = useMemo(
    () => debounce((value) => search(value), 400),
    [search]
  );
  useEffect(() => () => runSearch.cancel(), [runSearch]);
  const handleSearch = (event) => {
    setQuery(event.target.value);
    runSearch(event.target.value);
  };

  /* -------------------------------- mutations ------------------------------ */

  const foldersToDelete = selectedFolderNames.filter(
    (name) => name !== UPLOAD_FOLDER
  );

  const deleteFiles = async () => {
    setDeleting(true);
    setPickerError(null);
    // A folder with any file opted out is kept; only its resolved files go.
    const partialFolders = new Set();
    const selected = await resolveSelection({ partialFolders });
    const toRemove = selected.map((file) => `${file.folderName}/${file.name}`);
    const foldersToRemove = foldersToDelete.filter(
      (name) => !partialFolders.has(name)
    );

    setBusy(
      t("workspace-docs.deleting", {
        count: toRemove.length || foldersToRemove.length,
      })
    );
    let ok = true;
    if (toRemove.length > 0) ok = await System.deleteDocuments(toRemove);
    for (const folderName of foldersToRemove)
      ok = (await System.deleteFolder(folderName)) && ok;

    if (ok) {
      removeFiles(
        selected.map((file) => file.id),
        { deleted: true }
      );
      clearSelection();
    } else {
      setPickerError(t("workspace-docs.delete-error"));
    }
    await refresh();
    setBusy(null);
    setDeleting(false);
    setConfirmDelete(false);
    focusList();
  };

  const moveToFolder = async (folder) => {
    setPickerError(null);
    const toMove = await resolveSelection();
    if (toMove.length === 0) return;

    setBusy(t("workspace-docs.moving", { count: toMove.length }));
    const { success, message, error } = await Document.moveToFolder(
      toMove,
      folder.name
    );
    if (!success) {
      setPickerError(
        t("workspace-docs.move-error", { error: message || error || "" })
      );
      setBusy(null);
      focusList();
      return;
    }

    // A partial success returns a message explaining which files were skipped.
    if (message) showToast(message, "info");
    else
      showToast(
        t("workspace-docs.move-success", { count: toMove.length }),
        "success"
      );

    clearSelection();
    await refresh();
    setBusy(null);
    focusList();
  };

  /**
   * Dropping files onto a folder row uploads them straight into that folder,
   * so the user does not have to upload and then move. Progress is reported
   * in the shared uploader below the picker.
   */
  const uploadQueue = useUploadQueue();
  const { enqueueIntoFolder } = uploadQueue;
  const handleFolderDrop = useCallback(
    async (folderName, event) => {
      // Must be called before anything awaits: a drop's DataTransferItems are
      // only readable while the drop event is being dispatched.
      const dropped = await getFilesFromUploadEvent(event.nativeEvent ?? event);
      const { queued, skipped } = enqueueIntoFolder(dropped, folderName);

      if (queued === 0)
        return showToast(
          skipped > 0
            ? t("workspace-docs.drop-folder-only-files", {
                folder: folderName,
              })
            : t("workspace-docs.drop-nothing"),
          "warning"
        );

      // The progress list lives in the uploader below the picker, which may be
      // scrolled out of view - confirm the drop landed so it does not look
      // like nothing happened.
      showToast(
        t("workspace-docs.drop-uploading", {
          count: queued,
          folder: folderName,
        }),
        "info"
      );
      if (skipped > 0)
        showToast(
          t("workspace-docs.drop-skipped", { count: skipped }),
          "warning"
        );
    },
    [enqueueIntoFolder, t]
  );

  const handleFolderCreated = useCallback(
    (name) => {
      addFolder(name);
      closeFolderModal();
    },
    [addFolder, closeFolderModal]
  );

  const newFolderModal = (
    <Modal isOpen={isFolderModalOpen} onClose={closeFolderModal}>
      <NewFolderModal
        closeModal={closeFolderModal}
        onCreated={handleFolderCreated}
      />
    </Modal>
  );

  const deleteModal = (
    <ConfirmModal
      isOpen={confirmDelete}
      title={
        selectedCount > 0
          ? t("workspace-docs.delete-docs-title", { count: selectedCount })
          : t("workspace-docs.delete-folders-title", {
              count: foldersToDelete.length,
            })
      }
      confirmLabel={t("chat_window.delete")}
      busy={deleting}
      onConfirm={deleteFiles}
      onCancel={() => setConfirmDelete(false)}
    >
      <p>{t("workspace-docs.delete-body")}</p>
      {selectedCount > 0 && foldersToDelete.length > 0 && (
        <p>
          {t("workspace-docs.delete-folders-body", {
            count: foldersToDelete.length,
            names: foldersToDelete.join(", "),
          })}
        </p>
      )}
      <p className="font-medium">{t("workspace-docs.irreversible")}</p>
    </ConfirmModal>
  );

  if (variant === "mobile")
    return (
      <>
        <MobileDirectory
          picker={picker}
          workspace={workspace}
          rows={rows}
          query={query}
          embeddedCounts={embeddedCounts}
          documentCount={searchResults ? searchResultCount : totalDocCount}
          searchResultCount={searchResultCount}
          allSelected={allSelected}
          uploadQueue={uploadQueue}
          pickerError={pickerError}
          onDismissError={() => setPickerError(null)}
          onSearch={handleSearch}
          onSelectAll={selectAllVisible}
          onMoveToWorkspace={moveToWorkspace}
          onMoveToFolder={moveToFolder}
          onDelete={() => setConfirmDelete(true)}
          onNewFolder={openFolderModal}
          listRef={listRef}
        />
        {newFolderModal}
        {deleteModal}
      </>
    );

  const statusLine = hasSelection
    ? selectionLabel
    : searchResults
      ? t("connectors.directory.search-results", { count: searchResultCount })
      : totalDocCount > 0
        ? t("connectors.directory.total-documents", { count: totalDocCount })
        : "";

  let content;
  if (status === "initializing") {
    content = (
      <div className="h-full flex items-center justify-center">
        <PreLoader />
      </div>
    );
  } else if (loadError && folders.length === 0) {
    content = (
      <StateMessage>
        <span role="alert">{t("workspace-docs.load-docs-error")}</span>
        <RetryButton onClick={refresh} />
      </StateMessage>
    );
  } else if (searchResults && searchResultCount === 0) {
    content = (
      <StateMessage>
        {t("workspace-docs.no-results", { query: query.trim() })}
      </StateMessage>
    );
  } else if (rows.length === 0) {
    content = <StateMessage>{t("workspace-docs.empty")}</StateMessage>;
  } else {
    content = (
      <ul role="list" aria-labelledby={headingId}>
        {rows.map((row) => (
          <FolderRow
            key={row.item.name}
            item={row.item}
            files={row.files}
            expanded={row.expanded}
            loading={row.loading}
            failed={row.failed}
            hasMore={row.hasMore}
            totalCount={row.totalCount}
            displayCount={row.displayCount}
            selectionState={folderSelectionState(row.item.name, row.files)}
            isFileSelected={(id) => isFileSelected(row.item.name, id)}
            onToggleExpanded={toggleExpanded}
            onToggleFolder={(folder, event) =>
              handleFolderToggle(folder, row.files, event)
            }
            onToggleFile={handleFileClick}
            onPrefetch={prefetchFolder}
            onLoadMore={loadMore}
            onRetry={retryFolder}
            acceptsDrops={uploadQueue.ready}
            onDropFiles={handleFolderDrop}
          />
        ))}
      </ul>
    );
  }

  return (
    <>
      <section
        aria-labelledby={headingId}
        className="w-full max-w-[560px] flex flex-col gap-y-4"
      >
        <div className="flex items-center justify-between gap-x-3 min-h-[34px]">
          <h3
            id={headingId}
            className="text-base font-semibold text-slate-50 light:text-slate-900"
          >
            {t("connectors.directory.my-documents")}
          </h3>
          <button
            type="button"
            onClick={openFolderModal}
            className="border-none bg-transparent flex items-center gap-x-1.5 h-8 px-2.5 -mr-2.5 rounded-lg text-xs font-semibold text-sky-400 light:text-sky-700 hover:bg-zinc-800 light:hover:bg-sky-50 transition-colors duration-quick ease-smooth"
          >
            <FolderPlus strokeWidth={1.5} size={16} aria-hidden="true" />
            {t("connectors.directory.new-folder")}
          </button>
        </div>

        <div className="relative">
          <label htmlFor={searchId} className="sr-only">
            {t("workspace-docs.search-label")}
          </label>
          <input
            id={searchId}
            type="search"
            value={query}
            onChange={handleSearch}
            placeholder={t("connectors.directory.search-document")}
            aria-busy={searching || undefined}
            className={`${FIELD_INPUT} search-input pl-9`}
          />
          {searching ? (
            <LoaderCircle
              strokeWidth={1.5}
              size={16}
              aria-hidden="true"
              className="absolute left-3 top-1/2 -translate-y-1/2 animate-spin text-zinc-400 light:text-slate-600"
            />
          ) : (
            <Search
              strokeWidth={1.5}
              size={16}
              aria-hidden="true"
              className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 light:text-slate-600 pointer-events-none"
            />
          )}
        </div>

        {/* Focusable so shortcuts apply to the last-clicked panel and focus
            has somewhere to land after a move or delete. */}
        <div
          ref={listRef}
          tabIndex={-1}
          onKeyDown={handleKeyDown}
          aria-busy={!!busyMessage || undefined}
          className="relative flex flex-col h-[340px] rounded-2xl border border-zinc-700 light:border-slate-300 bg-theme-settings-input-bg"
        >
          <div className="shrink-0 flex items-center gap-x-1 pl-1.5 pr-4 min-h-[36px] border-b border-zinc-700 light:border-slate-300 text-xs">
            {status !== "initializing" && rows.length > 0 ? (
              <SelectionCheckbox
                state={headerState}
                label={
                  searchResults
                    ? t("workspace-docs.select-all-results")
                    : t("workspace-docs.select-all-docs")
                }
                onToggle={toggleAll}
              />
            ) : (
              <span className="w-7 shrink-0" aria-hidden="true" />
            )}
            <span className="font-medium text-slate-100 light:text-slate-900">
              {t("workspace-docs.column-name")}
            </span>
            <p
              aria-live="polite"
              className="ml-auto text-zinc-400 light:text-slate-600"
            >
              {statusLine}
            </p>
          </div>

          <p
            role="status"
            className={
              busyMessage
                ? "shrink-0 flex items-center justify-center gap-x-2 px-3 py-1.5 text-xs font-medium border-b border-zinc-700 light:border-slate-300 text-slate-50 light:text-slate-900 bg-zinc-800 light:bg-slate-100"
                : "sr-only"
            }
          >
            {busyMessage && (
              <LoaderCircle
                strokeWidth={1.5}
                size={12}
                aria-hidden="true"
                className="animate-spin"
              />
            )}
            {busyMessage}
          </p>
          {pickerError && (
            <InlineAlert onDismiss={() => setPickerError(null)}>
              {pickerError}
            </InlineAlert>
          )}

          <div className="flex-1 min-h-0 overflow-y-auto select-none">
            {content}
          </div>

          {hasSelection && (
            <div className="shrink-0 flex flex-wrap items-center gap-2 px-3 py-2 border-t border-zinc-700 light:border-slate-300">
              <button
                type="button"
                onClick={() => {
                  setHighlightWorkspace(false);
                  moveToWorkspace();
                }}
                onMouseEnter={() => setHighlightWorkspace(true)}
                onMouseLeave={() => setHighlightWorkspace(false)}
                onFocus={() => setHighlightWorkspace(true)}
                onBlur={() => setHighlightWorkspace(false)}
                disabled={selectedCount === 0}
                className={`${ACTION_BUTTON} border-none bg-zinc-50 text-zinc-950 hover:bg-zinc-200 light:bg-slate-900 light:text-white light:hover:bg-slate-700`}
              >
                <ArrowRight strokeWidth={1.5} size={16} aria-hidden="true" />
                {t("connectors.directory.move-workspace")}
              </button>
              <MoveToFolderMenu
                folders={folders}
                onSelect={moveToFolder}
                disabled={selectedCount === 0}
                className={`${ACTION_BUTTON} bg-transparent border border-zinc-600 text-slate-50 hover:bg-zinc-800 light:border-slate-400 light:text-slate-900 light:hover:bg-slate-100`}
              />
              <button
                type="button"
                onClick={() => setConfirmDelete(true)}
                className={`${ACTION_BUTTON} ml-auto border-none bg-transparent text-red-400 hover:bg-red-500/15 light:text-red-700 light:hover:bg-red-50`}
              >
                <Trash2 strokeWidth={1.5} size={16} aria-hidden="true" />
                {t("chat_window.delete")}
              </button>
            </div>
          )}
        </div>
        <UploadFile
          workspace={workspace}
          queue={uploadQueue}
          onUploadComplete={syncAfterUpload}
          onLinkScraped={syncAfterUpload}
        />
      </section>
      {newFolderModal}
      {deleteModal}
    </>
  );
}

function StateMessage({ children }) {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-y-2 px-8 text-center text-sm text-zinc-400 light:text-slate-600">
      {children}
    </div>
  );
}

function RetryButton({ onClick }) {
  const { t } = useTranslation();
  return (
    <button
      type="button"
      onClick={onClick}
      className="border-none bg-transparent flex items-center gap-x-1.5 min-h-[44px] md:min-h-0 px-2 py-1 rounded-md text-sm font-medium underline text-slate-50 light:text-slate-900"
    >
      <RotateCw strokeWidth={1.5} size={14} aria-hidden="true" />
      {t("provider-fields.retry")}
    </button>
  );
}
