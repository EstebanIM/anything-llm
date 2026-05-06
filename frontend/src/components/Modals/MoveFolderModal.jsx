import React, { useState, useEffect } from "react";
import { X, FolderSimple } from "@phosphor-icons/react";
import WorkspaceFolder from "@/models/workspaceFolder";
import showToast from "@/utils/toast";
import { useTranslation } from "react-i18next";
import ModalWrapper from "@/components/ModalWrapper";

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
      const opts = buildOptions(
        data.folders || [],
        excludeIds,
        movingDepth,
        t
      );
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
    <ModalWrapper isOpen={true}>
      <div className="w-full max-w-md bg-theme-bg-secondary rounded-lg shadow border-2 border-theme-modal-border overflow-hidden">
        {/* Header */}
        <div className="relative p-6 border-b rounded-t border-theme-modal-border">
          <h3 className="text-xl font-semibold text-white">
            {t("workspace-folders.move-title")}
          </h3>
          <p className="text-white/60 text-sm mt-1 truncate">
            &ldquo;{folder.name}&rdquo;
          </p>
          <button
            onClick={hideModal}
            type="button"
            className="absolute top-4 right-4 transition-all duration-300 bg-transparent rounded-lg text-sm p-1 inline-flex items-center hover:bg-theme-modal-border border-transparent border"
          >
            <X size={24} weight="bold" className="text-white" />
          </button>
        </div>

        {/* Destination list */}
        <div className="py-4 px-6">
          <p className="text-white/70 text-sm mb-3">
            {t("workspace-folders.move-description")}
          </p>

          <div className="max-h-56 overflow-y-auto flex flex-col gap-y-[2px]">
            {/* Root option */}
            <button
              type="button"
              disabled={selected === null && isCurrentParent(null)}
              onClick={() => setSelected(null)}
              className={`flex items-center gap-x-2 w-full text-left px-3 py-2 rounded-lg text-sm transition-colors duration-150
                ${selected === null ? "bg-white/15 text-white font-medium" : "text-white/80 hover:bg-white/8 light:hover:bg-slate-200"}
                ${isCurrentParent(null) ? "opacity-50 cursor-default" : ""}
              `}
            >
              <FolderSimple
                size={14}
                weight="fill"
                className="flex-shrink-0 text-yellow-400/80"
              />
              <span className="flex-grow">{t("workspace-folders.root")}</span>
              {isCurrentParent(null) && (
                <span className="text-xs text-white/40">
                  {t("workspace-folders.move-current")}
                </span>
              )}
            </button>

            {/* Folder options */}
            {options === null ? (
              <p className="text-white/40 text-xs px-3 py-2">
                {t("workspace-folders.move-loading", "Cargando...")}
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
                    ${selected === opt.id ? "bg-white/15 text-white font-medium" : "text-white/80 hover:bg-white/8 light:hover:bg-slate-200"}
                    ${opt.disabled || isCurrentParent(opt.id) ? "opacity-40 cursor-default" : "cursor-pointer"}
                  `}
                  title={opt.disabledReason || undefined}
                >
                  <FolderSimple
                    size={14}
                    weight="fill"
                    className="flex-shrink-0 text-yellow-400/80"
                  />
                  <span className="flex-grow truncate">
                    {"— ".repeat(opt.depth)}
                    {opt.name}
                  </span>
                  {isCurrentParent(opt.id) && (
                    <span className="text-xs text-white/40 flex-shrink-0">
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

          {error && (
            <p className="text-red-400 text-sm mt-3">
              {error}
            </p>
          )}
        </div>

        {/* Footer */}
        <div className="flex w-full justify-end items-center p-6 space-x-2 border-t border-theme-modal-border rounded-b">
          <button
            type="button"
            onClick={hideModal}
            className="transition-all duration-300 text-white hover:bg-zinc-700 px-4 py-2 rounded-lg text-sm"
          >
            {t("workspace-folders.move-cancel", "Cancelar")}
          </button>
          <button
            type="button"
            disabled={submitting || options === null}
            onClick={handleMove}
            className="transition-all duration-300 bg-white text-black hover:opacity-60 px-4 py-2 rounded-lg text-sm disabled:opacity-40"
          >
            {submitting
              ? t("workspace-folders.move-moving", "Moviendo...")
              : t("workspace-folders.move-button")}
          </button>
        </div>
      </div>
    </ModalWrapper>
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
