import React, { useState, useEffect, useId } from "react";
import { Check, Folder, RotateCw } from "lucide-react";
import WorkspaceFolder from "@/models/workspaceFolder";
import showToast from "@/utils/toast";
import { serverErrorMessage } from "@/utils/serverErrors";
import { useTranslation } from "react-i18next";
import Modal, {
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalPrimaryButton,
  ModalSecondaryButton,
} from "@/components/lib/Modal";
import StatusNote from "@/components/lib/StatusNote";

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

function treeHasFolder(nodes, id) {
  return nodes.some(
    (node) => node.id === id || treeHasFolder(node.children || [], id)
  );
}

/**
 * Flatten a folder tree into a list of destination options, excluding the
 * folder being moved and all its descendants. Each option keeps its full path
 * for screen readers ("Proyectos / Clientes").
 */
function buildOptions(treeFolders, excludeIds, movingSubtreeDepth) {
  const options = [];

  function walk(node, depth, parents) {
    if (excludeIds.has(node.id)) return;
    const path = [...parents, node.name];
    // If moving here would exceed MAX_DEPTH: depth + 1 (target becomes parent) + movingSubtreeDepth >= MAX_DEPTH
    options.push({
      id: node.id,
      name: node.name,
      path: path.join(" / "),
      depth,
      tooDeep: depth + 1 + movingSubtreeDepth >= MAX_DEPTH,
    });
    for (const child of node.children || []) {
      walk(child, depth + 1, path);
    }
  }

  for (const folder of treeFolders) {
    walk(folder, 0, []);
  }
  return options;
}

export default function MoveFolderModal({
  folder,
  hideModal = noop,
  onMoved = noop,
}) {
  const { t } = useTranslation();
  const currentParent = folder.parent_id ?? null;
  const [tree, setTree] = useState({ status: "loading", options: [] });
  const [selected, setSelected] = useState(currentParent);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const loadTree = () => {
    setTree({ status: "loading", options: [] });
    WorkspaceFolder.tree().then((data) => {
      // The model answers a failed request with an empty tree; a real tree
      // always holds the folder being moved, so its absence means it failed.
      const folders = Array.isArray(data?.folders) ? data.folders : [];
      if (!treeHasFolder(folders, folder.id)) {
        setTree({ status: "error", options: [] });
        return;
      }
      const options = buildOptions(
        folders,
        collectDescendantIds(folder),
        subtreeMaxDepth(folder)
      );
      setTree({ status: "ready", options });
    });
  };

  useEffect(() => {
    loadTree();
  }, []);

  const changed = selected !== currentParent;
  const ready = tree.status === "ready";

  const handleMove = async (e) => {
    e.preventDefault();
    if (submitting || !ready || !changed) return;
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
      return;
    }
    setError(
      serverErrorMessage(message, t, "dialogs.move-folder.failed", {
        known: [[/maximum folder depth/i, "workspace-folders.max-depth"]],
      })
    );
  };

  const close = submitting ? undefined : hideModal;

  return (
    <Modal isOpen={true} onClose={close} size="md">
      <form onSubmit={handleMove} className="flex flex-col gap-y-5">
        <ModalHeader
          title={t("dialogs.move-folder.title", { name: folder.name })}
          onClose={close}
        />
        <ModalBody>
          <fieldset className="min-w-0">
            <legend className="text-sm text-zinc-300 light:text-slate-700 mb-2">
              {t("workspace-folders.move-description")}
            </legend>
            <div className="max-h-64 overflow-y-auto overscroll-contain flex flex-col gap-y-0.5 -mx-1 px-1 py-1">
              <DestinationOption
                value={null}
                name={t("workspace-folders.root")}
                depth={0}
                selected={selected}
                isCurrent={currentParent === null}
                onSelect={setSelected}
              />
              {tree.status === "loading" && (
                <p
                  role="status"
                  className="text-sm text-zinc-400 light:text-slate-600 px-3 py-2"
                >
                  {t("workspace-folders.move-loading")}
                </p>
              )}
              {tree.options.map((option) => (
                <DestinationOption
                  key={option.id}
                  value={option.id}
                  name={option.name}
                  path={option.path}
                  depth={option.depth}
                  selected={selected}
                  isCurrent={currentParent === option.id}
                  disabledReason={
                    option.tooDeep ? t("dialogs.move-folder.too-deep") : null
                  }
                  onSelect={setSelected}
                />
              ))}
            </div>
          </fieldset>
          {tree.status === "error" && (
            <StatusNote tone="error" announce>
              <span className="flex flex-col items-start gap-y-2">
                {t("dialogs.move-folder.load-failed")}
                <button
                  type="button"
                  onClick={loadTree}
                  className="inline-flex items-center gap-x-1.5 min-h-[44px] md:min-h-[32px] -ml-1 px-1 rounded-md font-medium underline underline-offset-2"
                >
                  <RotateCw strokeWidth={1.5} size={14} aria-hidden="true" />
                  {t("server-unavailable.retry")}
                </button>
              </span>
            </StatusNote>
          )}
          {error && (
            <StatusNote tone="error" announce>
              {error}
            </StatusNote>
          )}
        </ModalBody>
        <ModalFooter>
          <ModalSecondaryButton type="button" onClick={hideModal}>
            {t("workspace-folders.move-cancel")}
          </ModalSecondaryButton>
          <ModalPrimaryButton
            type="submit"
            busy={submitting}
            disabled={!ready || !changed}
          >
            {submitting
              ? t("workspace-folders.move-moving")
              : t("workspace-folders.move-button")}
          </ModalPrimaryButton>
        </ModalFooter>
      </form>
    </Modal>
  );
}

/**
 * One destination as a real radio button (arrow keys move between them, the
 * disabled ones are skipped). The check icon, not only the background, marks
 * the selection; the reason a destination is not allowed is visible text.
 */
function DestinationOption({
  value,
  name,
  path = null,
  depth,
  selected,
  isCurrent,
  disabledReason = null,
  onSelect,
}) {
  const { t } = useTranslation();
  const reasonId = useId();
  const isSelected = selected === value;
  const disabled = !!disabledReason;

  return (
    <label
      style={{ paddingLeft: `${12 + depth * 16}px` }}
      className={`flex items-center gap-x-2 w-full min-h-[44px] md:min-h-[36px] pr-3 py-1.5 rounded-lg text-sm transition-colors duration-quick ease-smooth has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-[-2px] has-[:focus-visible]:outline-[var(--theme-focus-ring)] ${
        disabled
          ? "cursor-not-allowed text-zinc-400 light:text-slate-600"
          : isSelected
            ? "cursor-pointer bg-zinc-800 light:bg-slate-100 text-slate-50 light:text-slate-900 font-medium"
            : "cursor-pointer text-zinc-200 light:text-slate-800 hover:bg-zinc-800/60 light:hover:bg-slate-100"
      }`}
    >
      <input
        type="radio"
        name="destination"
        value={value ?? ""}
        checked={isSelected}
        disabled={disabled}
        onChange={() => onSelect(value)}
        aria-describedby={disabledReason ? reasonId : undefined}
        className="sr-only"
      />
      <Folder
        strokeWidth={1.5}
        size={16}
        aria-hidden="true"
        className="shrink-0 text-amber-400 light:text-amber-700"
      />
      <span className="flex flex-col min-w-0 flex-grow">
        {path && path !== name ? (
          <>
            <span aria-hidden="true" className="truncate">
              {name}
            </span>
            <span className="sr-only">{path}</span>
          </>
        ) : (
          <span className="truncate">{name}</span>
        )}
        {disabledReason && (
          <span id={reasonId} className="text-xs font-normal">
            {disabledReason}
          </span>
        )}
      </span>
      {isCurrent && (
        <span className="shrink-0 text-xs text-zinc-400 light:text-slate-600">
          {t("workspace-folders.move-current")}
        </span>
      )}
      <Check
        strokeWidth={1.5}
        size={16}
        aria-hidden="true"
        className={`shrink-0 text-sky-400 light:text-sky-700 ${isSelected ? "" : "invisible"}`}
      />
    </label>
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
