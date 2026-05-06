import React, { useState, useRef, useEffect } from "react";
import {
  CaretRight,
  CaretDown,
  FolderSimple,
  FolderOpen,
  PencilSimple,
  Plus,
  Trash,
  Check,
  X,
  ArrowsOutCardinal,
} from "@phosphor-icons/react";
import { Droppable } from "react-beautiful-dnd";
import WorkspaceFolder from "@/models/workspaceFolder";
import showToast from "@/utils/toast";
import { useTranslation } from "react-i18next";
import MoveFolderModal, { useMoveFolderModal } from "@/components/Modals/MoveFolderModal";

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
}) {
  const { t } = useTranslation();
  const [isRenaming, setIsRenaming] = useState(false);
  const [renameValue, setRenameValue] = useState(folder.name);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const renameRef = useRef(null);
  const moveModal = useMoveFolderModal();

  const isExpanded = expandedMap[folder.id] !== false; // default: expanded
  const isAdmin = !user || user?.role !== "default";
  const indent = depth * 12;

  useEffect(() => {
    if (isRenaming && renameRef.current) renameRef.current.focus();
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
      showToast(t("workspace-folders.rename") + " OK", "success", {
        clear: true,
      });
      onFolderChange();
    } else {
      showToast(message || "Error renaming folder", "error", { clear: true });
    }
    setIsRenaming(false);
  };

  const handleRenameKeyDown = (e) => {
    if (e.key === "Enter") handleRenameSubmit();
    if (e.key === "Escape") {
      setIsRenaming(false);
      setRenameValue(folder.name);
    }
  };

  const handleAddSubfolder = async () => {
    const name = window.prompt(t("workspace-folders.placeholder"));
    if (!name?.trim()) return;
    const { folder: created, message } = await WorkspaceFolder.new({
      name: name.trim(),
      parent_id: folder.id,
    });
    if (created) {
      // Ensure parent stays expanded
      if (expandedMap[folder.id] === false) toggleExpanded(folder.id);
      onFolderChange();
    } else {
      showToast(message || "Error creating subfolder", "error", {
        clear: true,
      });
    }
  };

  const handleDelete = async () => {
    setIsDeleting(true);
    const { success, message } = await WorkspaceFolder.delete(folder.id);
    setIsDeleting(false);
    setShowConfirmDelete(false);
    if (success) {
      showToast(t("workspace-folders.delete") + " OK", "success", {
        clear: true,
      });
      onFolderChange();
    } else {
      showToast(message || "Error deleting folder", "error", { clear: true });
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Folder header row */}
      <div
        className="flex items-center gap-x-1 group/folder rounded-full hover:bg-theme-sidebar-subitem-hover transition-colors duration-150"
        style={{ paddingLeft: `${indent + 4}px`, paddingRight: "4px" }}
      >
        {/* Expand/collapse caret */}
        <button
          type="button"
          onClick={() => toggleExpanded(folder.id)}
          className="flex-shrink-0 flex items-center justify-center w-5 h-5 text-white/60 hover:text-white light:text-slate-600 light:hover:text-slate-900"
          aria-label={isExpanded ? "Collapse folder" : "Expand folder"}
        >
          {isExpanded ? (
            <CaretDown size={13} weight="bold" />
          ) : (
            <CaretRight size={13} weight="bold" />
          )}
        </button>

        {/* Folder icon + name */}
        <button
          type="button"
          onClick={() => toggleExpanded(folder.id)}
          className="flex flex-grow items-center gap-x-2 py-[5px] min-w-0"
        >
          {isExpanded ? (
            <FolderOpen
              size={16}
              weight="fill"
              className="flex-shrink-0 text-yellow-400/80"
            />
          ) : (
            <FolderSimple
              size={16}
              weight="fill"
              className="flex-shrink-0 text-yellow-400/80"
            />
          )}

          {isRenaming ? (
            <input
              ref={renameRef}
              value={renameValue}
              onChange={(e) => setRenameValue(e.target.value)}
              onKeyDown={handleRenameKeyDown}
              onBlur={handleRenameSubmit}
              className="flex-grow bg-transparent border border-white/40 light:border-slate-400 text-white light:text-slate-800 text-[13px] outline-none min-w-0 rounded-full px-3"
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <span className="text-white light:text-slate-700 text-[13px] font-medium truncate">
              {folder.name}
            </span>
          )}
        </button>

        {/* Admin action buttons (visible on hover) */}
        {isAdmin && !isRenaming && (
          <div className="flex items-center gap-x-[2px] opacity-0 group-hover/folder:opacity-100 transition-opacity duration-150">
            <button
              type="button"
              onClick={() => {
                setRenameValue(folder.name);
                setIsRenaming(true);
              }}
              title={t("workspace-folders.rename")}
              className="rounded-full p-[3px] hover:bg-white/10 light:hover:bg-slate-300/70"
            >
              <PencilSimple
                size={14}
                className="text-white/70 hover:text-white light:text-slate-600 light:hover:text-slate-900"
              />
            </button>
            <button
              type="button"
              onClick={handleAddSubfolder}
              title={t("workspace-folders.add-subfolder")}
              className="rounded-full p-[3px] hover:bg-white/10 light:hover:bg-slate-300/70"
            >
              <Plus
                size={14}
                className="text-white/70 hover:text-white light:text-slate-600 light:hover:text-slate-900"
              />
            </button>
            <button
              type="button"
              onClick={moveModal.showModal}
              title={t("workspace-folders.move")}
              className="rounded-full p-[3px] hover:bg-white/10 light:hover:bg-slate-300/70"
            >
              <ArrowsOutCardinal
                size={14}
                className="text-white/70 hover:text-white light:text-slate-600 light:hover:text-slate-900"
              />
            </button>
            {!showConfirmDelete ? (
              <button
                type="button"
                onClick={() => setShowConfirmDelete(true)}
                title={t("workspace-folders.delete")}
                className="rounded-full p-[3px] hover:bg-red-500/20 light:hover:bg-red-500/15"
              >
                <Trash
                  size={14}
                  className="text-white/70 hover:text-red-400 light:text-slate-600 light:hover:text-red-600"
                />
              </button>
            ) : (
              <>
                <button
                  type="button"
                  onClick={handleDelete}
                  disabled={isDeleting}
                  title="Confirm delete"
                  className="rounded-full p-[3px] hover:bg-red-500/40 light:hover:bg-red-500/20"
                >
                  <Check
                    size={14}
                    className="text-red-400 light:text-red-600"
                  />
                </button>
                <button
                  type="button"
                  onClick={() => setShowConfirmDelete(false)}
                  title="Cancel"
                  className="rounded-full p-[3px] hover:bg-white/10 light:hover:bg-slate-300/70"
                >
                  <X
                    size={14}
                    className="text-white/70 light:text-slate-600"
                  />
                </button>
              </>
            )}
          </div>
        )}
      </div>

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
                snapshot.isDraggingOver ? "bg-white/5 light:bg-slate-300/40" : ""
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
