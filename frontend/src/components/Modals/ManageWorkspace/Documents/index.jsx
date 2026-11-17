import { ArrowUpDown } from "lucide-react";
import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import { useTranslation } from "react-i18next";
import Workspace from "@/models/workspace";
import Directory from "./Directory";
import WorkspaceDirectory from "./WorkspaceDirectory";
import useDocumentPicker from "./hooks/useDocumentPicker";
import { useWorkspaceEmbeddingProgress } from "@/EmbeddingProgressContext";

const UPLOAD_FOLDER = "custom-documents";
const NO_PATHS = new Set();

/**
 * @param {Object} props
 * @param {"default"|"mobile"} [props.variant="default"] - `mobile` stacks the
 * two panels behind tabs instead of side by side
 * @param {boolean} [props.active=true] - false while another tab of the
 * manager is showing; coming back refreshes, since a connector may have added
 * documents in the meantime
 * @param {(count: number) => void} [props.onPendingChange] - documents moved
 * into the workspace but not embedded yet
 */
export default function DocumentSettings({
  workspace,
  variant = "default",
  active = true,
  onPendingChange,
}) {
  const { t } = useTranslation();
  const [highlightWorkspace, setHighlightWorkspace] = useState(false);
  const [mobileTab, setMobileTab] = useState("documents");
  const [movedItems, setMovedItems] = useState([]);
  const [embedError, setEmbedError] = useState(null);
  // Progress entries of a save that failed outright: nothing will report on
  // them again, so they are hidden instead of sitting at "pending".
  const [discardedProgress, setDiscardedProgress] = useState(NO_PATHS);
  const [focusRequest, setFocusRequest] = useState(null);
  const picker = useDocumentPicker(workspace);
  const {
    refresh,
    resolveSelection,
    removeFiles,
    clearSelection,
    workspaceDocs: embeddedDocs,
  } = picker;
  const hasChanges = movedItems.length > 0;

  useEffect(() => {
    onPendingChange?.(movedItems.length);
  }, [movedItems.length, onPendingChange]);

  const wasActive = useRef(active);
  useEffect(() => {
    if (active && !wasActive.current) refresh();
    wasActive.current = active;
  }, [active, refresh]);

  // `syncAfterUpload` pre-selects files it has not seen before, so the upload
  // folder must already be loaded or every existing file in it reads as new.
  // Desktop loads it on hover, which touch screens never fire.
  const uploadFolderStatus = picker.contents[UPLOAD_FOLDER]?.status;
  useEffect(() => {
    if (variant !== "mobile") return;
    if (picker.status === "ready" && !uploadFolderStatus)
      picker.prefetchFolder(UPLOAD_FOLDER);
  }, [variant, picker.status, uploadFolderStatus, picker.prefetchFolder]);

  const { embeddingProgress, startEmbedding, removeQueuedFile } =
    useWorkspaceEmbeddingProgress(workspace.slug, {
      onProgressCleared: refresh,
    });

  const visibleProgress = useMemo(() => {
    if (!embeddingProgress) return null;
    if (discardedProgress.size === 0) return embeddingProgress;
    const entries = Object.entries(embeddingProgress).filter(
      ([filename]) => !discardedProgress.has(filename)
    );
    return entries.length > 0 ? Object.fromEntries(entries) : null;
  }, [embeddingProgress, discardedProgress]);

  /**
   * Files mid-embed are shown in the workspace panel, so hide them from the
   * picker to avoid rendering the same document on both sides.
   */
  const hiddenPaths = useMemo(
    () => new Set(Object.keys(visibleProgress ?? {})),
    [visibleProgress]
  );

  /**
   * Stage the current selection for embedding. Files are removed from the
   * picker optimistically - no refetch, so the move is instant. Focus goes to
   * "Save and embed", the step that comes next.
   * @param {{afterMove?: () => void}} [options] - runs in the same render as
   * the move (mobile switches tabs there so the save button is visible)
   */
  const moveSelectedItemsToWorkspace = useCallback(
    async (options = {}) => {
      setHighlightWorkspace(false);
      const resolved = await resolveSelection();
      if (resolved.length === 0) return clearSelection();

      setMovedItems((prev) => {
        const seen = new Set(prev.map((item) => item.id));
        return [...prev, ...resolved.filter((item) => !seen.has(item.id))];
      });
      removeFiles(resolved.map((item) => item.id));
      clearSelection();
      options.afterMove?.();
      setFocusRequest({ target: "save", n: Date.now() });
    },
    [resolveSelection, removeFiles, clearSelection]
  );

  const updateWorkspace = async (e) => {
    e?.preventDefault?.();
    const staged = movedItems;
    const filenames = staged.map((item) => `${item.folderName}/${item.name}`);

    setMovedItems([]);
    setHighlightWorkspace(false);
    clearSelection();
    setEmbedError(null);
    setDiscardedProgress((prev) => {
      if (prev.size === 0) return prev;
      const next = new Set(prev);
      filenames.forEach((name) => next.delete(name));
      return next;
    });
    setFocusRequest({ target: "list", n: Date.now() });

    // Fire the embed POST first so the server is already processing the job
    // by the time the SSE connection opens. This avoids the server sending
    // idle (no active job) before embedding has started.
    const embedPromise = Workspace.modifyEmbeddings(workspace.slug, {
      adds: filenames,
    });
    startEmbedding(workspace.slug, filenames);
    const { workspace: updated, message } = await embedPromise;

    if (!updated) {
      // Nothing was embedded: put the files back so the user can retry.
      console.error("Workspace update failed:", message);
      setMovedItems((prev) => {
        const seen = new Set(prev.map((item) => item.id));
        return [...staged.filter((item) => !seen.has(item.id)), ...prev];
      });
      setDiscardedProgress((prev) => new Set([...prev, ...filenames]));
      setEmbedError(t("workspace-docs.embed-error"));
      return;
    }
    // Some embedders report per-file failures in an otherwise good response.
    if (message)
      setEmbedError(t("workspace-docs.embed-partial", { error: message }));
  };

  /** Merge not-yet-embedded staged files into the workspace panel. */
  const workspaceDocs = useMemo(() => {
    if (movedItems.length === 0) return embeddedDocs;
    const items = embeddedDocs.items.map((f) => ({
      ...f,
      items: [...f.items],
    }));
    for (const moved of movedItems) {
      let folder = items.find((f) => f.name === moved.folderName);
      if (!folder) {
        folder = { name: moved.folderName, type: "folder", items: [] };
        items.push(folder);
      }
      if (!folder.items.some((item) => item.id === moved.id))
        folder.items.push(moved);
    }
    return { ...embeddedDocs, items };
  }, [embeddedDocs, movedItems]);

  const initializing = picker.status === "initializing";
  const workspacePanel = (
    <WorkspaceDirectory
      variant={variant}
      workspace={workspace}
      files={workspaceDocs}
      highlightWorkspace={highlightWorkspace}
      loading={initializing}
      embeddingProgress={visibleProgress}
      onRemoveQueued={removeQueuedFile}
      fetchKeys={refresh}
      hasChanges={hasChanges}
      saveChanges={updateWorkspace}
      movedItems={movedItems}
      embedError={embedError}
      onDismissEmbedError={() => setEmbedError(null)}
      focusRequest={focusRequest}
    />
  );

  if (variant === "mobile") {
    const workspaceDocCount = workspaceDocs.items.reduce(
      (sum, folder) => sum + folder.items.length,
      0
    );
    return (
      <MobileTabs
        selected={mobileTab}
        onSelect={setMobileTab}
        workspaceDocCount={workspaceDocCount}
        hasChanges={hasChanges}
        documents={
          <Directory
            variant="mobile"
            picker={picker}
            workspace={workspace}
            hiddenPaths={hiddenPaths}
            embeddedCounts={Object.fromEntries(
              embeddedDocs.items.map((folder) => [
                folder.name,
                folder.items.length,
              ])
            )}
            setHighlightWorkspace={setHighlightWorkspace}
            moveToWorkspace={() =>
              moveSelectedItemsToWorkspace({
                afterMove: () => setMobileTab("workspace"),
              })
            }
          />
        }
        inWorkspace={workspacePanel}
      />
    );
  }

  return (
    <div className="flex flex-col min-[1330px]:flex-row items-center min-[1330px]:items-start justify-center gap-6 px-6 pb-6">
      <Directory
        picker={picker}
        workspace={workspace}
        hiddenPaths={hiddenPaths}
        setHighlightWorkspace={setHighlightWorkspace}
        moveToWorkspace={() => moveSelectedItemsToWorkspace()}
      />
      <ArrowUpDown
        strokeWidth={1.5}
        aria-hidden="true"
        className="shrink-0 w-8 h-8 text-zinc-400 light:text-slate-500 min-[1330px]:rotate-90 min-[1330px]:mt-[248px]"
      />
      {workspacePanel}
    </div>
  );
}

const MOBILE_TABS = ["documents", "workspace"];

/**
 * Two tabs over the mobile panels. Inactive panels stay mounted (hidden) so
 * in-flight uploads and selections survive a switch.
 *
 * @param {Object} props
 * @param {"documents"|"workspace"} props.selected
 */
function MobileTabs({
  selected,
  onSelect,
  workspaceDocCount,
  hasChanges,
  documents,
  inWorkspace,
}) {
  const { t } = useTranslation();
  const baseId = useId();
  const tabRefs = useRef({});
  const tabId = (name) => `${baseId}-tab-${name}`;
  const panelId = (name) => `${baseId}-panel-${name}`;

  const handleKeyDown = (event) => {
    const index = MOBILE_TABS.indexOf(selected);
    let next = null;
    if (event.key === "ArrowRight") next = (index + 1) % MOBILE_TABS.length;
    if (event.key === "ArrowLeft")
      next = (index - 1 + MOBILE_TABS.length) % MOBILE_TABS.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = MOBILE_TABS.length - 1;
    if (next === null) return;
    event.preventDefault();
    onSelect(MOBILE_TABS[next]);
    tabRefs.current[MOBILE_TABS[next]]?.focus();
  };

  const tab = (name, children) => (
    <button
      key={name}
      ref={(node) => (tabRefs.current[name] = node)}
      id={tabId(name)}
      type="button"
      role="tab"
      aria-selected={selected === name}
      aria-controls={panelId(name)}
      tabIndex={selected === name ? 0 : -1}
      onClick={() => onSelect(name)}
      className={`border-none bg-transparent relative h-11 flex items-center justify-center gap-x-1.5 rounded-lg text-sm font-medium transition-colors duration-quick ease-smooth ${
        selected === name
          ? "text-slate-50 light:text-slate-900"
          : "text-zinc-400 light:text-slate-600"
      }`}
    >
      {children}
    </button>
  );

  return (
    <div className="flex flex-col flex-1 min-h-0">
      <div className="shrink-0 px-4 pb-4">
        <div
          role="tablist"
          aria-label={t("workspace-docs.mobile-tabs-label")}
          onKeyDown={handleKeyDown}
          className="relative grid grid-cols-2 p-1 rounded-xl bg-zinc-800 light:bg-slate-100"
        >
          <div
            aria-hidden="true"
            className={`absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] rounded-lg bg-zinc-700 light:bg-white light:shadow-sm transition-transform duration-base ease-smooth ${
              selected === "workspace" ? "translate-x-full" : "translate-x-0"
            }`}
          />
          {tab("documents", t("connectors.directory.my-documents"))}
          {tab(
            "workspace",
            <>
              {t("connectors.directory.in-workspace")}
              <span
                className={
                  hasChanges
                    ? "text-sky-400 light:text-sky-700"
                    : "text-zinc-400 light:text-slate-600"
                }
              >
                {workspaceDocCount}
              </span>
              {hasChanges && (
                <>
                  <span
                    aria-hidden="true"
                    className="w-1.5 h-1.5 rounded-full bg-sky-400 light:bg-sky-700"
                  />
                  <span className="sr-only">
                    {t("workspace-docs.unsaved-changes")}
                  </span>
                </>
              )}
            </>
          )}
        </div>
      </div>
      {MOBILE_TABS.map((name) => (
        <div
          key={name}
          id={panelId(name)}
          role="tabpanel"
          aria-labelledby={tabId(name)}
          className={`flex-col flex-1 min-h-0 ${
            selected === name ? "flex" : "hidden"
          }`}
        >
          {name === "documents" ? documents : inWorkspace}
        </div>
      ))}
    </div>
  );
}
