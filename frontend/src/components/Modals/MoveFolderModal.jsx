import React, { useState, useEffect } from "react";
import { X, Folder } from "lucide-react";
import WorkspaceFolder from "@/models/workspaceFolder";
import showToast from "@/utils/toast";
import { useTranslation } from "react-i18next";
import Modal from "@/components/lib/Modal";

const MAX_DEPTH = 5; // must match server/models/workspaceFolder.js MAX_DEPTH

const noop = () => false;

/** Returns the max depth of the subtree rooted at a folder node (already hydrated with .children). */
function subtreeMaxDepth(folderNode) {
  if (!folderNode.children?.length) return 0;
  let max = 0;
  for (const child of folderNode.children) {
    const d = 1 + subtreeMaxDepth(child);
    if (d > max) max = d;
  }
  return max;
}

/** Collect the ids of a folder node and all its descendants. */
function collectDescendantIds(folderNode) {
  const ids = new Set([folderNode.id]);
  function walk(node) {
    for (const child of node.children || []) {
      ids.add(child.id);
      walk(child);
    }
  }
  walk(folderNode);
  return ids;
}

/**
 * Flatten a folder tree into a list of destination options, excluding the
 * folder being moved and all its descendants.
 */
function buildOptions(treeFolders, excludeIds, movingSubtreeDepth, t) {
  const options = [];

  function walk(node, depth) {
    if (excludeIds.has(node.id)) return;
    // If moving here would exceed MAX_DEPTH: depth + 1 (target becomes parent) + movingSubtreeDepth >= MAX_DEPTH
    const wouldExceed = depth + 1 + movingSubtreeDepth >= MAX_DEPTH;
    options.push({
      id: node.id,
      name: node.name,
      depth,
      disabled: wouldExceed,
      disabledReason: wouldExceed ? t("workspace-folders.max-depth") : null,
    });
    for (const child of node.children || []) {
      walk(child, depth + 1);
    }
  }

  for (const folder of treeFolders) {
    walk(folder, 0);
  }
  return options;
}

export default function MoveFolderModal({
  folder,
  hideModal = noop,
  onMoved = noop,
}) {
  const { t } = useTranslation();
  const [options, setOptions] = useState(null); // null = loading
  const [selected, setSelected] = useState(folder.parent_id ?? null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    WorkspaceFolder.tree().then((data) => {
      const excludeIds = collectDescendantIds(folder);
      const movingDepth = subtreeMaxDepth(folder);
      const opts = buildOptions(data.folders || [], excludeIds, movingDepth, t);
      setOptions(opts);
    });
  }, []);

  const handleMove = async () => {
    setError(null);
    setSubmitting(true);
    const { folder: updated, message } = await WorkspaceFolder.update(
      folder.id,
      { parent_id: selected }
    );
    setSubmitting(false);
    if (updated) {
      showToast(t("workspace-folders.move-success"), "success", {
        clear: true,
      });
      onMoved();
      hideModal();
    } else {
      setError(message);
    }
  };

  const isCurrentParent = (id) => {
    const current = folder.parent_id ?? null;
    return id === current;
  };

  return (
    <Modal isOpen={true} onClose={hideModal} variant="bare">
      <div className="w-full max-w-md bg-theme-bg-secondary rounded-lg shadow border-2 border-theme-modal-border overflow-hidden">
        {/* Header */}
        <div className="relative p-6 border-b rounded-t border-theme-modal-border">
          <h3 className="text-xl font-semibold text-theme-text-primary">
            {t("workspace-folders.move-title")}
          </h3>
          <p className="text-theme-text-secondary text-sm mt-1 truncate">
            &ldquo;{folder.name}&rdquo;
          </p>
          <button
            onClick={hideModal}
            type="button"
            className="absolute top-4 right-4 transition-all duration-300 bg-transparent rounded-lg text-sm p-1 inline-flex items-center hover:bg-theme-modal-border border-transparent border"
          >
            <X
              strokeWidth={1.5}
              size={24}
              className="text-theme-text-primary"
            />
          </button>
        </div>

        {/* Destination list */}
        <div className="py-4 px-6">
          <p className="text-theme-text-secondary text-sm mb-3">
            {t("workspace-folders.move-description")}
          </p>

          <div className="max-h-56 overflow-y-auto flex flex-col gap-y-[2px]">
            {/* Root option */}
            <button
              type="button"
              disabled={selected === null && isCurrentParent(null)}
              onClick={() => setSelected(null)}
              className={`flex items-center gap-x-2 w-full text-left px-3 py-2 rounded-lg text-sm transition-colors duration-150
                ${
                  selected === null
                    ? "bg-theme-file-picker-hover text-theme-text-primary font-medium"
                    : "text-theme-text-secondary hover:bg-theme-action-menu-item-hover"
                }
                ${isCurrentParent(null) ? "cursor-default" : ""}
              `}
            >
              <Folder
                strokeWidth={1.5}
                size={14}
                className="flex-shrink-0 text-yellow-400/80"
              />
              <span className="flex-grow">{t("workspace-folders.root")}</span>
              {isCurrentParent(null) && (
                <span className="text-xs text-theme-text-primary font-medium">
                  {t("workspace-folders.move-current")}
                </span>
              )}
            </button>

            {/* Folder options */}
            {options === null ? (
              <p className="text-theme-text-secondary text-xs px-3 py-2">
                {t("workspace-folders.move-loading")}
              </p>
            ) : (
              options.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  disabled={opt.disabled || isCurrentParent(opt.id)}
                  onClick={() => !opt.disabled && setSelected(opt.id)}
                  style={{ paddingLeft: `${12 + opt.depth * 16}px` }}
                  className={`flex items-center gap-x-2 w-full text-left pr-3 py-2 rounded-lg text-sm transition-colors duration-150
                    ${
                      selected === opt.id
                        ? "bg-theme-file-picker-hover text-theme-text-primary font-medium"
                        : "text-theme-text-secondary hover:bg-theme-action-menu-item-hover"
                    }
                    ${opt.disabled ? "opacity-40 cursor-default" : isCurrentParent(opt.id) ? "cursor-default" : "cursor-pointer"}
                  `}
                  title={opt.disabledReason || undefined}
                >
                  <Folder
                    strokeWidth={1.5}
                    size={14}
                    className="flex-shrink-0 text-yellow-400/80"
                  />
                  <span className="flex-grow truncate">
                    {"-- ".repeat(opt.depth)}
                    {opt.name}
                  </span>
                  {isCurrentParent(opt.id) && (
                    <span className="text-xs text-theme-text-primary font-medium flex-shrink-0">
                      {t("workspace-folders.move-current")}
                    </span>
                  )}
                  {opt.disabled && (
                    <span className="text-xs text-red-400/70 flex-shrink-0">
                      max
                    </span>
                  )}
                </button>
              ))
            )}
          </div>

          {error && <p className="text-red-400 text-sm mt-3">{error}</p>}
        </div>

        {/* Footer */}
        <div className="flex w-full justify-end items-center p-6 space-x-2 border-t border-theme-modal-border rounded-b">
          <button
            type="button"
            onClick={hideModal}
            className="transition-all duration-300 border border-theme-modal-border text-theme-text-primary hover:bg-theme-action-menu-item-hover px-4 py-2 rounded-lg text-sm"
          >
            {t("workspace-folders.move-cancel")}
          </button>
          <button
            type="button"
            disabled={submitting || options === null}
            onClick={handleMove}
            className="transition-all duration-300 bg-primary-button text-theme-button-primary-text hover:bg-primary-button-hover px-4 py-2 rounded-lg text-sm disabled:opacity-40"
          >
            {submitting
              ? t("workspace-folders.move-moving")
              : t("workspace-folders.move-button")}
          </button>
        </div>
      </div>
    </Modal>
  );
}

export function useMoveFolderModal() {
  const [showing, setShowing] = useState(false);
  return {
    showing,
    showModal: () => setShowing(true),
    hideModal: () => setShowing(false),
  };
}
