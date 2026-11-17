import React, { useState, useRef, useEffect } from "react";
import {
  ChevronRight,
  Folder,
  FolderOpen,
  Pencil,
  Plus,
  Trash2,
  Move,
  Ellipsis,
} from "lucide-react";
import { Droppable } from "react-beautiful-dnd";
import WorkspaceFolder from "@/models/workspaceFolder";
import showToast from "@/utils/toast";
import { serverErrorMessage } from "@/utils/serverErrors";
import InlineConfirm from "@/components/lib/InlineConfirm";
import { useTranslation } from "react-i18next";
import MoveFolderModal, {
  useMoveFolderModal,
} from "@/components/Modals/MoveFolderModal";
import NewFolderModal from "@/components/Modals/NewFolderModal";

/**
 * Renders a single folder node with its children (sub-folders) and workspaces.
 * Recursively renders child FolderItem components.
 *
 * @param {Object} props
 * @param {Object} props.folder - folder node from the tree (includes .children and .workspaces)
 * @param {number} props.depth - nesting depth (0 = root level)
 * @param {Object} props.expandedMap - { [folderId]: boolean }
 * @param {Function} props.toggleExpanded - (folderId: number) => void
 * @param {Function} props.onFolderChange - () => void — triggers tree refresh
 * @param {Function} props.renderWorkspace - (workspace, index) => JSX
 * @param {Object} props.user
 * @param {string} props.currentSlug - slug of the active workspace
 * @param {(element: HTMLElement) => void} [props.onBeforeRemove] - called with the
 *   folder's name button before a confirmed delete refreshes the tree
 */
export default function FolderItem({
  folder,
  depth = 0,
  expandedMap,
  toggleExpanded,
  onFolderChange,
  renderWorkspace,
  user,
  currentSlug,
  onBeforeRemove,
}) {
  const { t } = useTranslation();
  const [isRenaming, setIsRenaming] = useState(false);
  const [showSubfolderModal, setShowSubfolderModal] = useState(false);
  const [renameValue, setRenameValue] = useState(folder.name);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const renameRef = useRef(null);
  const nameButtonRef = useRef(null);
  const wasRenaming = useRef(false);
  const deleteButtonRef = useRef(null);
  const wasConfirmingDelete = useRef(false);

  // The trash button is swapped for confirm / cancel: when the user cancels,
  // focus returns to it instead of dropping to <body>.
  useEffect(() => {
    if (showConfirmDelete) {
      wasConfirmingDelete.current = true;
      return;
    }
    if (wasConfirmingDelete.current) {
      wasConfirmingDelete.current = false;
      deleteButtonRef.current?.focus();
    }
  }, [showConfirmDelete]);
  const moveModal = useMoveFolderModal();

  const isExpanded = expandedMap[folder.id] !== false; // default: expanded
  const isAdmin = !user || user?.role !== "default";
  const indent = depth * 12;

  // Focus the input while renaming, and the folder button again afterwards
  // so keyboard users keep their place.
  useEffect(() => {
    if (isRenaming) {
      wasRenaming.current = true;
      renameRef.current?.focus();
    } else if (wasRenaming.current) {
      wasRenaming.current = false;
      nameButtonRef.current?.focus();
    }
  }, [isRenaming]);

  const handleRenameSubmit = async () => {
    const trimmed = renameValue.trim();
    if (!trimmed || trimmed === folder.name) {
      setIsRenaming(false);
      setRenameValue(folder.name);
      return;
    }
    const { folder: updated, message } = await WorkspaceFolder.update(
      folder.id,
      { name: trimmed }
    );
    if (updated) {
      showToast(t("workspace-folders.renamed", { name: trimmed }), "success", {
        clear: true,
      });
      onFolderChange();
    } else {
      showToast(
        serverErrorMessage(message, t, "sidebar-nav.folder-rename-failed", {
          known: [["Invalid folder name", "notices.folder-name-invalid"]],
        }),
        "error",
        { clear: true }
      );
    }
    setIsRenaming(false);
  };

  const handleRenameKeyDown = (e) => {
    if (e.key === "Enter") handleRenameSubmit();
    if (e.key === "Escape") {
      // Handled here: an open drawer must not close as well.
      e.preventDefault();
      setIsRenaming(false);
      setRenameValue(folder.name);
    }
  };

  const handleAddSubfolder = () => setShowSubfolderModal(true);

  const handleSubfolderCreated = () => {
    // Keep the parent open so the new subfolder is visible.
    if (expandedMap[folder.id] === false) toggleExpanded(folder.id);
    onFolderChange();
  };

  /** @returns {Promise<boolean>} true when the server deleted the folder */
  const handleDelete = async () => {
    setIsDeleting(true);
    const { success, message } = await WorkspaceFolder.delete(folder.id);
    setIsDeleting(false);
    if (!success) {
      setShowConfirmDelete(false);
      showToast(
        serverErrorMessage(message, t, "sidebar-nav.folder-delete-failed"),
        "error",
        { clear: true }
      );
      return false;
    }
    showToast(
      t("workspace-folders.deleted", { name: folder.name }),
      "success",
      {
        clear: true,
      }
    );
    // The row goes away with the refreshed tree: focus moves to the row that
    // takes its place.
    onBeforeRemove?.(nameButtonRef.current);
    onFolderChange();
    return true;
  };

  return (
    <div className="flex flex-col w-full">
      {/* Folder header row */}
      <div
        className="relative flex items-center gap-x-1 min-h-[44px] md:min-h-0 group/folder rounded-lg hover:bg-theme-sidebar-subitem-hover transition-colors duration-quick"
        style={{ paddingLeft: `${indent + 4}px`, paddingRight: "4px" }}
      >
        {/* Expand/collapse caret. Decorative for screen readers: the folder
            name button below carries the same action and the state. */}
        <button
          type="button"
          tabIndex={-1}
          aria-hidden="true"
          onClick={() => toggleExpanded(folder.id)}
          className="flex-shrink-0 flex items-center justify-center w-5 h-5 text-white/60 hover:text-white light:text-slate-600 light:hover:text-slate-900"
        >
          <ChevronRight
            size={13}
            strokeWidth={1.5}
            className={`transition-transform duration-base ease-smooth ${isExpanded ? "rotate-90" : ""}`}
          />
        </button>

        {/* Folder icon + name. While renaming, the input replaces the button
            so no control is nested inside another. */}
        {isRenaming ? (
          <div className="flex flex-grow items-center gap-x-2 py-[3px] min-w-0">
            <FolderOpen
              size={16}
              strokeWidth={1.5}
              aria-hidden="true"
              className="flex-shrink-0 text-yellow-400/80"
            />
            <input
              ref={renameRef}
              value={renameValue}
              aria-label={t("workspace-folders.placeholder")}
              onChange={(e) => setRenameValue(e.target.value)}
              onKeyDown={handleRenameKeyDown}
              onBlur={handleRenameSubmit}
              className="flex-grow bg-transparent border border-white/40 light:border-slate-400 text-white light:text-slate-800 text-base md:text-[13px] min-w-0 rounded-md px-2 h-9 md:h-auto md:py-[2px]"
            />
          </div>
        ) : (
          <button
            ref={nameButtonRef}
            type="button"
            data-sidebar-focus=""
            onClick={() => toggleExpanded(folder.id)}
            aria-expanded={isExpanded}
            className="flex flex-grow items-center gap-x-2 py-[5px] min-w-0 rounded-md"
          >
            {isExpanded ? (
              <FolderOpen
                size={16}
                strokeWidth={1.5}
                aria-hidden="true"
                className="flex-shrink-0 text-yellow-400/80"
              />
            ) : (
              <Folder
                size={16}
                strokeWidth={1.5}
                aria-hidden="true"
                className="flex-shrink-0 text-yellow-400/80"
              />
            )}
            <span className="text-white light:text-slate-700 text-[13px] font-medium truncate">
              {folder.name}
            </span>
          </button>
        )}

        {/* Touch screens: the four actions do not fit at a 44px tap size,
            so they live in one menu. */}
        {isAdmin && !isRenaming && (
          <FolderActionsMenu
            folderName={folder.name}
            onRename={() => {
              setRenameValue(folder.name);
              setIsRenaming(true);
            }}
            onAddSubfolder={handleAddSubfolder}
            onMove={moveModal.showModal}
            onDelete={handleDelete}
            isDeleting={isDeleting}
          />
        )}

        {/* Desktop: inline actions, shown on hover or keyboard focus. */}
        {isAdmin && !isRenaming && (
          <div className="hidden md:flex items-center gap-x-[2px] md:opacity-0 md:group-hover/folder:opacity-100 md:group-focus-within/folder:opacity-100 transition-opacity duration-quick">
            <button
              type="button"
              onClick={() => {
                setRenameValue(folder.name);
                setIsRenaming(true);
              }}
              title={t("workspace-folders.rename")}
              aria-label={`${t("workspace-folders.rename")}: ${folder.name}`}
              className="rounded-full p-[3px] hover:bg-white/10 light:hover:bg-slate-300/70"
            >
              <Pencil
                size={14}
                strokeWidth={1.5}
                className="text-white/70 hover:text-white light:text-slate-600 light:hover:text-slate-900"
              />
            </button>
            <button
              type="button"
              onClick={handleAddSubfolder}
              title={t("workspace-folders.add-subfolder")}
              aria-label={`${t("workspace-folders.add-subfolder")}: ${folder.name}`}
              className="rounded-full p-[3px] hover:bg-white/10 light:hover:bg-slate-300/70"
            >
              <Plus
                size={14}
                strokeWidth={1.5}
                className="text-white/70 hover:text-white light:text-slate-600 light:hover:text-slate-900"
              />
            </button>
            <button
              type="button"
              onClick={moveModal.showModal}
              title={t("workspace-folders.move")}
              aria-label={`${t("workspace-folders.move")}: ${folder.name}`}
              className="rounded-full p-[3px] hover:bg-white/10 light:hover:bg-slate-300/70"
            >
              <Move
                size={14}
                strokeWidth={1.5}
                className="text-white/70 hover:text-white light:text-slate-600 light:hover:text-slate-900"
              />
            </button>
            <button
              ref={deleteButtonRef}
              type="button"
              onClick={() => setShowConfirmDelete(true)}
              title={t("workspace-folders.delete")}
              aria-label={`${t("workspace-folders.delete")}: ${folder.name}`}
              aria-expanded={showConfirmDelete}
              className="rounded-full p-[3px] hover:bg-red-500/20 light:hover:bg-red-500/15"
            >
              <Trash2
                size={14}
                strokeWidth={1.5}
                className="text-white/70 hover:text-red-400 light:text-slate-600 light:hover:text-red-600"
              />
            </button>
          </div>
        )}
      </div>

      {/* Desktop delete confirmation, under the row: the row is too narrow
          for the question, the consequences and two buttons. */}
      {showConfirmDelete && (
        <div className="pr-1 pb-1" style={{ paddingLeft: `${indent + 28}px` }}>
          <InlineConfirm
            question={t("notices.delete-folder-question", {
              name: folder.name,
            })}
            consequences={t("notices.delete-folder-consequences")}
            confirmLabel={t("workspace-folders.delete")}
            busy={isDeleting}
            onConfirm={handleDelete}
            onCancel={() => setShowConfirmDelete(false)}
          />
        </div>
      )}

      {showSubfolderModal && (
        <NewFolderModal
          parentId={folder.id}
          parentName={folder.name}
          hideModal={() => setShowSubfolderModal(false)}
          onFolderCreated={handleSubfolderCreated}
        />
      )}
      {moveModal.showing && (
        <MoveFolderModal
          folder={folder}
          hideModal={moveModal.hideModal}
          onMoved={onFolderChange}
        />
      )}

      {/* Folder body: workspaces + sub-folders droppable zone */}
      {isExpanded && (
        <Droppable droppableId={`folder-${folder.id}`}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className={`flex flex-col gap-y-[2px] min-h-[8px] rounded-2xl transition-colors duration-150 ${
                snapshot.isDraggingOver
                  ? "bg-white/5 light:bg-slate-300/40"
                  : ""
              }`}
              style={{ paddingLeft: `${indent + 16}px` }}
            >
              {/* Child folders (recursive) */}
              {folder.children?.map((child) => (
                <FolderItem
                  key={child.id}
                  folder={child}
                  depth={depth + 1}
                  expandedMap={expandedMap}
                  toggleExpanded={toggleExpanded}
                  onFolderChange={onFolderChange}
                  renderWorkspace={renderWorkspace}
                  user={user}
                  currentSlug={currentSlug}
                  onBeforeRemove={onBeforeRemove}
                />
              ))}

              {/* Workspaces inside this folder */}
              {folder.workspaces?.map((workspace, index) =>
                renderWorkspace(workspace, index, `folder-${folder.id}`)
              )}

              {provided.placeholder}
            </div>
          )}
        </Droppable>
      )}
    </div>
  );
}

function FolderActionsMenu({
  folderName,
  onRename,
  onAddSubfolder,
  onMove,
  onDelete,
  isDeleting,
}) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [confirmingDelete, setConfirmingDelete] = useState(false);
  const wrapperRef = useRef(null);
  const buttonRef = useRef(null);
  const menuRef = useRef(null);

  const close = ({ returnFocus = false } = {}) => {
    setOpen(false);
    setConfirmingDelete(false);
    if (returnFocus) buttonRef.current?.focus();
  };

  useEffect(() => {
    // The confirmation focuses its own Confirm button.
    if (!open || confirmingDelete) return;
    menuRef.current?.querySelector("button")?.focus();
  }, [open, confirmingDelete]);

  useEffect(() => {
    if (!open) return;
    const onOutside = (e) => {
      if (!e.composedPath().includes(wrapperRef.current)) close();
    };
    const onKeyDown = (e) => {
      if (e.key === "Escape") close({ returnFocus: true });
    };
    document.addEventListener("click", onOutside);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("click", onOutside);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const run = (action) => () => {
    close();
    action();
  };

  const itemClass =
    "w-full rounded-md flex items-center min-h-[44px] px-3 gap-x-2 text-sm text-slate-200 light:text-theme-text-primary hover:bg-slate-500/20";

  return (
    <div ref={wrapperRef} className="md:hidden flex">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => (open ? close() : setOpen(true))}
        aria-label={t("sidebar-nav.folder-options", { name: folderName })}
        aria-haspopup="menu"
        aria-expanded={open}
        className="w-11 h-11 flex items-center justify-center rounded-lg text-theme-text-secondary"
      >
        <Ellipsis size={20} strokeWidth={1.5} aria-hidden="true" />
      </button>
      {open && (
        <div
          ref={menuRef}
          // Once it asks for confirmation it is no longer a menu.
          role={confirmingDelete ? undefined : "menu"}
          aria-label={
            confirmingDelete
              ? undefined
              : t("sidebar-nav.folder-options", { name: folderName })
          }
          className="absolute z-20 right-1 top-full w-max max-w-[240px] rounded-lg p-1 bg-zinc-900 light:bg-theme-bg-sidebar light:border light:border-theme-sidebar-border shadow-lg animate-in fade-in-0 slide-in-from-top-2"
        >
          {confirmingDelete ? (
            <InlineConfirm
              className="p-2"
              question={t("notices.delete-folder-question", {
                name: folderName,
              })}
              consequences={t("notices.delete-folder-consequences")}
              confirmLabel={t("workspace-folders.delete")}
              busy={isDeleting}
              onConfirm={async () => {
                if (!(await onDelete())) close({ returnFocus: true });
              }}
              onCancel={() => close({ returnFocus: true })}
            />
          ) : (
            <>
              <button
                type="button"
                role="menuitem"
                onClick={run(onRename)}
                className={itemClass}
              >
                <Pencil size={16} strokeWidth={1.5} aria-hidden="true" />
                {t("workspace-folders.rename")}
              </button>
              <button
                type="button"
                role="menuitem"
                onClick={run(onAddSubfolder)}
                className={itemClass}
              >
                <Plus size={16} strokeWidth={1.5} aria-hidden="true" />
                {t("workspace-folders.add-subfolder")}
              </button>
              <button
                type="button"
                role="menuitem"
                onClick={run(onMove)}
                className={itemClass}
              >
                <Move size={16} strokeWidth={1.5} aria-hidden="true" />
                {t("workspace-folders.move")}
              </button>
              <button
                type="button"
                role="menuitem"
                onClick={() => setConfirmingDelete(true)}
                className={`${itemClass} hover:bg-red-500/20 hover:text-red-100 light:hover:text-red-700`}
              >
                <Trash2 size={16} strokeWidth={1.5} aria-hidden="true" />
                {t("workspace-folders.delete")}
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
