import { useId, useState } from "react";
import { useTranslation } from "react-i18next";
import { Undo2, Eye, EyeOff, LoaderCircle, Pin, PinOff } from "lucide-react";
import PreLoader from "@/components/Preloader";
import EmbeddingFileRow from "@/components/EmbeddingFileRow";
import MobileWorkspaceFileRow from "./MobileWorkspaceFileRow";
import MobileSheet, { MobileSheetOption } from "../../MobileSheet";
import MobileActionBar, { MobileActionButton } from "../../MobileActionBar";

/**
 * Touch layout of the workspace documents panel. State and mutations come from `WorkspaceDirectory`.
 *
 * @param {Object} props
 * @param {Array<[string, object]>} props.embedding - files mid-embed and their status
 * @param {import("react").ReactNode} props.alerts - error strips from the parent
 * @param {(ids: string[]) => void} props.onRemoveItems - asks for confirmation first
 */
export default function MobileWorkspaceDirectory({
  workspace,
  orderedFiles,
  loading,
  busyMessage,
  alerts,
  embedding,
  onRemoveQueued,
  hasChanges,
  selectable,
  movedItems,
  selectedItems,
  allSelected,
  onToggleItem,
  onToggleSelectAll,
  onRemoveItems,
  onSave,
  listRef,
  saveRef,
}) {
  const { t } = useTranslation();
  const listLabelId = useId();
  const [actions, setActions] = useState(null);
  const [showActions, setShowActions] = useState(false);
  const selectedIds = Object.keys(selectedItems);

  if (loading)
    return (
      <div className="flex-1 flex items-center justify-center px-8">
        <PreLoader />
      </div>
    );

  const embeddingPaths = new Set(embedding.map(([filename]) => filename));
  const embeddedFiles = orderedFiles.filter(
    ({ item, folder }) => !embeddingPaths.has(`${folder.name}/${item.name}`)
  );

  const openActions = (rowActions) => {
    setActions(rowActions);
    setShowActions(true);
  };
  const runAction = (action) => {
    setShowActions(false);
    action();
  };

  return (
    <div className="relative flex flex-col flex-1 min-h-0">
      <div className="shrink-0 flex items-center justify-between min-h-11 px-4 text-xs text-zinc-400 light:text-slate-600">
        <p id={listLabelId} aria-live="polite">
          {t("connectors.directory.total-documents", {
            count: embeddedFiles.length,
          })}
        </p>
        {selectable && embeddedFiles.length > 0 && (
          <button
            type="button"
            onClick={onToggleSelectAll}
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
      <div className="shrink-0 mx-4 rounded-xl overflow-hidden">{alerts}</div>

      <div
        ref={listRef}
        tabIndex={-1}
        aria-busy={!!busyMessage || undefined}
        className={`flex-1 min-h-0 overflow-y-auto px-2 select-none ${
          hasChanges || selectedIds.length > 0 ? "pb-40" : "pb-6"
        }`}
      >
        {embedding.length > 0 && (
          <ul
            role="list"
            className="mb-2 rounded-xl bg-zinc-800 light:bg-slate-100"
          >
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
        )}
        {embeddedFiles.length === 0 && embedding.length === 0 && (
          <p className="h-full flex items-center justify-center px-6 text-center text-sm text-zinc-400 light:text-slate-600">
            {t("workspace-docs.ws-empty")}
          </p>
        )}
        {embeddedFiles.length > 0 && (
          <ul role="list" aria-labelledby={listLabelId}>
            {embeddedFiles.map(({ item, folder }) => (
              <MobileWorkspaceFileRow
                key={item.id}
                item={item}
                folderName={folder.name}
                workspace={workspace}
                staged={movedItems.some((moved) => moved.id === item.id)}
                selected={!!selectedItems[item.id]}
                selectable={selectable}
                onToggle={onToggleItem}
                onOpenActions={openActions}
              />
            ))}
          </ul>
        )}
      </div>

      <MobileActionBar
        show={hasChanges}
        label={t("connectors.directory.ready-to-embed", {
          count: movedItems.length,
        })}
      >
        <MobileActionButton ref={saveRef} onClick={onSave}>
          {embedding.length > 0
            ? t("connectors.directory.add-to-queue")
            : t("workspace-docs.save-embed", { count: movedItems.length })}
        </MobileActionButton>
      </MobileActionBar>
      <MobileActionBar
        show={selectable && selectedIds.length > 0}
        label={t("connectors.directory.selected-count", {
          count: selectedIds.length,
        })}
      >
        <MobileActionButton
          variant="danger"
          aria-haspopup="dialog"
          onClick={() => onRemoveItems(selectedIds)}
        >
          {t("connectors.directory.remove_selected")}
        </MobileActionButton>
      </MobileActionBar>

      <MobileSheet
        open={showActions}
        onClose={() => setShowActions(false)}
        title={actions?.item.title}
      >
        {actions && (
          <>
            <MobileSheetOption
              icon={actions.pinned ? PinOff : Pin}
              label={
                actions.pinned
                  ? t("connectors.directory.unpin")
                  : t("connectors.directory.pin")
              }
              onClick={() => runAction(actions.togglePin)}
            />
            {actions.item.canWatch && (
              <MobileSheetOption
                icon={actions.watched ? EyeOff : Eye}
                label={
                  actions.watched
                    ? t("connectors.directory.unwatch")
                    : t("connectors.directory.watch")
                }
                onClick={() => runAction(actions.toggleWatch)}
              />
            )}
            <MobileSheetOption
              danger
              icon={Undo2}
              label={t("connectors.directory.remove-from-workspace")}
              onClick={() => runAction(() => onRemoveItems([actions.item.id]))}
            />
          </>
        )}
      </MobileSheet>
    </div>
  );
}
