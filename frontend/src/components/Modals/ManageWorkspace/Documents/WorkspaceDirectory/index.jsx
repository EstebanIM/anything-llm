import { memo, useEffect, useId, useMemo, useRef, useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Eye, LoaderCircle, Pin, Undo2 } from "lucide-react";
import { Tooltip } from "react-tooltip";
import PreLoader from "@/components/Preloader";
import Modal, {
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalPrimaryButton,
} from "@/components/lib/Modal";
import ConfirmModal from "@/components/lib/ConfirmModal";
import EmbeddingFileRow from "@/components/EmbeddingFileRow";
import Workspace from "@/models/workspace";
import { SEEN_DOC_PIN_ALERT, SEEN_WATCH_ALERT } from "@/utils/constants";
import paths from "@/utils/paths";
import {
  rowsBetween,
  isSelectAllShortcut,
  isClearSelectionKey,
} from "@/utils/directories";
import SelectionCheckbox from "../SelectionCheckbox";
import InlineAlert from "../InlineAlert";
import WorkspaceFileRow, { ROW_ACTION_TOOLTIP } from "./WorkspaceFileRow";
import MobileWorkspaceDirectory from "./MobileWorkspaceDirectory";

/**
 * Right-hand panel: documents embedded in the workspace, documents staged to
 * be embedded, and live embedding progress.
 *
 * @param {Object} props
 * @param {Record<string, object>|null} props.embeddingProgress - per-file progress, or null
 * @param {(filename: string) => void} props.onRemoveQueued
 * @param {string|null} props.embedError - why the last "save and embed" failed
 * @param {{target: "save"|"list", n: number}|null} props.focusRequest - set by
 * the parent after a move or save so focus lands on what comes next
 */
function WorkspaceDirectory({
  workspace,
  files,
  highlightWorkspace,
  loading,
  embeddingProgress,
  onRemoveQueued,
  fetchKeys,
  hasChanges,
  saveChanges,
  movedItems,
  embedError,
  onDismissEmbedError,
  focusRequest,
  variant = "default",
}) {
  const { t } = useTranslation();
  const headingId = useId();
  const saveHelpId = useId();
  const listRef = useRef(null);
  const saveRef = useRef(null);
  const [selectedItems, setSelectedItems] = useState({});
  const [busyMessage, setBusyMessage] = useState(null);
  const [removeError, setRemoveError] = useState(null);
  const [confirmIds, setConfirmIds] = useState(null);
  const [removing, setRemoving] = useState(false);
  const [listFocus, setListFocus] = useState(0);

  // Staged for embedding first, then pinned, then the rest.
  const orderedFiles = useMemo(() => {
    const isMoved = (item) =>
      movedItems.some((movedItem) => movedItem.id === item.id);
    const isPinned = (item) => item.pinnedWorkspaces?.includes(workspace.id);
    return files.items
      .flatMap((folder) => folder.items.map((item) => ({ item, folder })))
      .sort((a, b) => {
        if (isMoved(a.item) && !isMoved(b.item)) return -1;
        if (!isMoved(a.item) && isMoved(b.item)) return 1;
        if (isPinned(a.item) && !isPinned(b.item)) return -1;
        if (!isPinned(a.item) && isPinned(b.item)) return 1;
        return 0;
      });
  }, [files, movedItems, workspace.id]);
  const rangeAnchor = useRef(null);

  const embedding = Object.entries(embeddingProgress ?? {});
  const selectable = !hasChanges && embedding.length === 0;
  const selectedIds = Object.keys(selectedItems);
  const allSelected =
    orderedFiles.length > 0 &&
    orderedFiles.every(({ item }) => selectedItems[item.id]);

  useEffect(() => {
    if (!focusRequest) return;
    const target =
      focusRequest.target === "save" ? saveRef.current : listRef.current;
    target?.focus();
  }, [focusRequest]);
  useEffect(() => {
    if (listFocus) listRef.current?.focus();
  }, [listFocus]);

  const setItems = (items, on) => {
    setSelectedItems((prevSelectedItems) => {
      const newSelectedItems = { ...prevSelectedItems };
      for (const item of items) {
        if (on) newSelectedItems[item.id] = true;
        else delete newSelectedItems[item.id];
      }
      return newSelectedItems;
    });
  };

  const handleRowClick = (item, event) => {
    const anchor = rangeAnchor.current;
    const range =
      event?.shiftKey && anchor
        ? rowsBetween(
            orderedFiles.map((row) => row.item),
            anchor,
            item.id
          )
        : null;
    if (range) return setItems(range, !!selectedItems[anchor]);
    rangeAnchor.current = item.id;
    setItems([item], !selectedItems[item.id]);
  };

  const selectAll = () =>
    setItems(
      orderedFiles.map(({ item }) => item),
      true
    );
  const toggleSelectAll = () =>
    allSelected ? setSelectedItems({}) : selectAll();

  const handleKeyDown = (event) => {
    if (event.defaultPrevented || !selectable) return;
    if (isClearSelectionKey(event) && selectedIds.length > 0) {
      // Keeps the dialog's Escape handler from closing the whole manager.
      event.preventDefault();
      return setSelectedItems({});
    }
    if (!isSelectAllShortcut(event)) return;
    event.preventDefault();
    selectAll();
  };

  /** @returns {Promise<boolean>} whether the documents were removed */
  const removeItems = async (itemIds) => {
    const docPaths = itemIds
      .map((itemId) => {
        const folder = files.items.find((f) =>
          f.items.some((i) => i.id === itemId)
        );
        const item = folder?.items.find((i) => i.id === itemId);
        return folder && item ? `${folder.name}/${item.name}` : null;
      })
      .filter(Boolean);
    if (docPaths.length === 0) return true;

    setRemoveError(null);
    setBusyMessage(t("workspace-docs.removing", { count: docPaths.length }));
    const { workspace: updated, message } = await Workspace.modifyEmbeddings(
      workspace.slug,
      { adds: [], deletes: docPaths }
    );
    if (!updated) {
      console.error("Failed to remove documents:", message);
      setRemoveError(t("workspace-docs.remove-error"));
      setBusyMessage(null);
      return false;
    }
    await fetchKeys(true);
    setItems(
      itemIds.map((id) => ({ id })),
      false
    );
    setBusyMessage(null);
    setListFocus((n) => n + 1);
    return true;
  };

  const confirmRemoval = async () => {
    setRemoving(true);
    await removeItems(confirmIds);
    setRemoving(false);
    setConfirmIds(null);
  };

  const handleSaveChanges = (e) => {
    setSelectedItems({});
    saveChanges(e);
  };

  const removeModal = (
    <ConfirmModal
      isOpen={!!confirmIds}
      title={t("workspace-docs.remove-title", {
        count: confirmIds?.length ?? 0,
      })}
      confirmLabel={t("workspace-docs.remove")}
      busy={removing}
      onConfirm={confirmRemoval}
      onCancel={() => setConfirmIds(null)}
    >
      <p>{t("workspace-docs.remove-body")}</p>
    </ConfirmModal>
  );

  const alerts = (
    <>
      {removeError && (
        <InlineAlert onDismiss={() => setRemoveError(null)}>
          {removeError}
        </InlineAlert>
      )}
      {embedError && (
        <InlineAlert onDismiss={onDismissEmbedError}>{embedError}</InlineAlert>
      )}
    </>
  );

  if (variant === "mobile")
    return (
      <>
        <MobileWorkspaceDirectory
          workspace={workspace}
          orderedFiles={orderedFiles}
          loading={loading}
          busyMessage={busyMessage}
          alerts={alerts}
          embedding={embedding}
          onRemoveQueued={onRemoveQueued}
          hasChanges={hasChanges}
          selectable={selectable}
          movedItems={movedItems}
          selectedItems={selectedItems}
          allSelected={allSelected}
          onToggleItem={(item) => setItems([item], !selectedItems[item.id])}
          onToggleSelectAll={toggleSelectAll}
          onRemoveItems={(ids) => setConfirmIds(ids)}
          onSave={handleSaveChanges}
          listRef={listRef}
          saveRef={saveRef}
        />
        {removeModal}
        <PinAlert />
        <DocumentWatchAlert />
      </>
    );

  let content;
  if (loading) {
    content = (
      <div className="h-full flex items-center justify-center">
        <PreLoader />
      </div>
    );
  } else if (embedding.length > 0) {
    content = (
      <ul role="list" aria-labelledby={headingId}>
        {embedding.map(([filename, fileStatus]) => (
          <li key={filename}>
            <EmbeddingFileRow
              filename={filename}
              status={fileStatus}
              onRemove={
                fileStatus.status === "pending"
                  ? () => onRemoveQueued(filename)
                  : null
              }
            />
          </li>
        ))}
      </ul>
    );
  } else if (orderedFiles.length === 0) {
    content = (
      <div className="h-full flex items-center justify-center px-8 text-center text-sm text-zinc-400 light:text-slate-600">
        {t("workspace-docs.ws-empty")}
      </div>
    );
  } else {
    content = (
      <ul role="list" aria-labelledby={headingId}>
        {orderedFiles.map(({ item, folder }) => (
          <WorkspaceFileRow
            key={item.id}
            item={item}
            folderName={folder.name}
            workspace={workspace}
            staged={movedItems.some((moved) => moved.id === item.id)}
            selected={!!selectedItems[item.id]}
            selectable={selectable}
            onToggle={(event) => handleRowClick(item, event)}
            onRemove={removeItems}
          />
        ))}
      </ul>
    );
  }

  const statusLine =
    selectable && selectedIds.length > 0
      ? t("connectors.directory.selected-count", { count: selectedIds.length })
      : embedding.length > 0
        ? t("connectors.directory.total-documents", { count: embedding.length })
        : orderedFiles.length > 0
          ? t("connectors.directory.total-documents", {
              count: orderedFiles.length,
            })
          : "";

  return (
    <>
      <section
        aria-labelledby={headingId}
        className="w-full max-w-[560px] flex flex-col gap-y-4"
      >
        <div className="flex items-center min-h-[34px]">
          <h3
            id={headingId}
            className="text-base font-semibold text-slate-50 light:text-slate-900"
          >
            {t("connectors.directory.in-workspace")}
          </h3>
        </div>
        <div
          ref={listRef}
          tabIndex={-1}
          onKeyDown={handleKeyDown}
          aria-busy={!!busyMessage || undefined}
          className={`relative flex flex-col h-[398px] rounded-2xl border bg-theme-settings-input-bg transition-colors duration-quick ease-smooth ${
            highlightWorkspace
              ? "border-sky-400 light:border-sky-700 ring-2 ring-sky-400/60 light:ring-sky-700/40"
              : "border-zinc-700 light:border-slate-300"
          }`}
        >
          <div className="shrink-0 flex items-center gap-x-1 pl-1.5 pr-4 min-h-[36px] border-b border-zinc-700 light:border-slate-300 text-xs">
            {selectable && orderedFiles.length > 0 ? (
              <SelectionCheckbox
                state={
                  allSelected ? "all" : selectedIds.length > 0 ? "some" : "none"
                }
                label={t("workspace-docs.select-all-ws")}
                onToggle={toggleSelectAll}
              />
            ) : (
              <span className="w-7 shrink-0" aria-hidden="true" />
            )}
            <span className="font-medium text-slate-100 light:text-slate-900">
              {t("workspace-docs.column-name")}
            </span>
            {embedding.length > 0 && (
              <span className="ml-auto font-medium text-slate-100 light:text-slate-900">
                {t("workspace-docs.column-status")}
              </span>
            )}
            <p
              aria-live="polite"
              className={`text-zinc-400 light:text-slate-600 ${
                embedding.length > 0 ? "sr-only" : "ml-auto"
              }`}
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
          {alerts}

          <div className="flex-1 min-h-0 overflow-y-auto select-none">
            {content}
          </div>

          {selectable && selectedIds.length > 0 && (
            <div className="shrink-0 flex items-center justify-end gap-2 px-3 py-2 border-t border-zinc-700 light:border-slate-300">
              <button
                type="button"
                onClick={() => setConfirmIds(selectedIds)}
                className="flex items-center gap-x-1.5 h-8 px-2.5 rounded-lg text-xs font-semibold border-none bg-transparent text-red-400 hover:bg-red-500/15 light:text-red-700 light:hover:bg-red-50 transition-colors duration-quick ease-smooth"
              >
                <Undo2 strokeWidth={1.5} size={16} aria-hidden="true" />
                {t("connectors.directory.remove_selected")}
              </button>
            </div>
          )}
        </div>

        {hasChanges && movedItems.length > 0 && (
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <p
              id={saveHelpId}
              className="text-xs text-zinc-400 light:text-slate-600"
            >
              {embedding.length > 0
                ? t("connectors.directory.ready-to-embed", {
                    count: movedItems.length,
                  })
                : t("workspace-docs.save-help")}
            </p>
            <button
              ref={saveRef}
              type="button"
              onClick={handleSaveChanges}
              aria-describedby={saveHelpId}
              className="shrink-0 flex items-center justify-center h-11 md:h-[34px] px-4 rounded-lg border-none text-sm font-medium bg-zinc-50 text-zinc-950 hover:bg-zinc-200 light:bg-slate-900 light:text-white light:hover:bg-slate-700 transition-colors duration-quick ease-smooth"
            >
              {embedding.length > 0
                ? t("connectors.directory.add-to-queue")
                : t("workspace-docs.save-embed", { count: movedItems.length })}
            </button>
          </div>
        )}
      </section>
      {removeModal}
      <PinAlert />
      <DocumentWatchAlert />
      <Tooltip
        id={ROW_ACTION_TOOLTIP}
        place="bottom"
        delayShow={300}
        className="tooltip invert !text-xs z-[100]"
      />
    </>
  );
}

/**
 * Shows an explanation once, the first time something fires `eventName`
 * (pinning or watching a document), then remembers it was seen.
 */
function useFirstTimeAlert(eventName, storageKey) {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (window.localStorage.getItem(storageKey)) return;
    const handleEvent = () => {
      if (!window.localStorage.getItem(storageKey)) setShowAlert(true);
    };
    window.addEventListener(eventName, handleEvent);
    return () => window.removeEventListener(eventName, handleEvent);
  }, [eventName, storageKey]);

  const dismissAlert = () => {
    setShowAlert(false);
    window.localStorage.setItem(storageKey, "1");
  };

  return { showAlert, dismissAlert };
}

const PinAlert = memo(() => {
  const { t } = useTranslation();
  const { showAlert, dismissAlert } = useFirstTimeAlert(
    "pinned_document",
    SEEN_DOC_PIN_ALERT
  );

  return (
    <Modal isOpen={showAlert} onClose={dismissAlert}>
      <ModalHeader
        title={
          <span className="flex items-center gap-x-2">
            <Pin strokeWidth={1.5} className="w-5 h-5" aria-hidden="true" />
            {t("connectors.pinning.what_pinning")}
          </span>
        }
        onClose={dismissAlert}
      />
      <ModalBody>
        <div className="w-full text-sm text-zinc-300 light:text-slate-700 flex flex-col gap-y-2">
          <p>
            <Trans
              i18nKey="connectors.pinning.pin_explained_block1"
              components={{ b: <b /> }}
            />
          </p>
          <p>
            <Trans
              i18nKey="connectors.pinning.pin_explained_block2"
              components={{ b: <b /> }}
            />
          </p>
          <p>{t("connectors.pinning.pin_explained_block3")}</p>
        </div>
      </ModalBody>
      <ModalFooter className="justify-end">
        <ModalPrimaryButton type="button" onClick={dismissAlert}>
          {t("connectors.pinning.accept")}
        </ModalPrimaryButton>
      </ModalFooter>
    </Modal>
  );
});

const DocumentWatchAlert = memo(() => {
  const { t } = useTranslation();
  const { showAlert, dismissAlert } = useFirstTimeAlert(
    "watch_document_for_changes",
    SEEN_WATCH_ALERT
  );

  return (
    <Modal isOpen={showAlert} onClose={dismissAlert}>
      <ModalHeader
        title={
          <span className="flex items-center gap-x-2">
            <Eye strokeWidth={1.5} className="w-5 h-5" aria-hidden="true" />
            {t("connectors.watching.what_watching")}
          </span>
        }
        onClose={dismissAlert}
      />
      <ModalBody>
        <div className="w-full text-sm text-zinc-300 light:text-slate-700 flex flex-col gap-y-2">
          <p>
            <Trans
              i18nKey="connectors.watching.watch_explained_block1"
              components={{ b: <b />, i: <i /> }}
            />
          </p>
          <p>{t("connectors.watching.watch_explained_block2")}</p>
          <p>
            {t("connectors.watching.watch_explained_block3_start")}
            <Link
              to={paths.experimental.liveDocumentSync.manage()}
              className="underline text-sky-400 light:text-sky-700"
            >
              {t("connectors.watching.watch_explained_block3_link")}
            </Link>
            {t("connectors.watching.watch_explained_block3_end")}
          </p>
        </div>
      </ModalBody>
      <ModalFooter className="justify-end">
        <ModalPrimaryButton type="button" onClick={dismissAlert}>
          {t("connectors.watching.accept")}
        </ModalPrimaryButton>
      </ModalFooter>
    </Modal>
  );
});

export default memo(WorkspaceDirectory);
