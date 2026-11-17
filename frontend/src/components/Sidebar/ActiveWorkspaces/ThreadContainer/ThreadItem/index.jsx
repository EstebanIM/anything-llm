import useScrollActiveItemIntoView from "@/hooks/useScrollActiveItemIntoView";
import Workspace from "@/models/workspace";
import paths from "@/utils/paths";
import showToast from "@/utils/toast";
import { RotateCcw, Ellipsis, Pencil, Trash2, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate, useParams } from "react-router-dom";

const THREAD_CALLOUT_DETAIL_WIDTH = 26;
export default function ThreadItem({
  idx,
  activeIdx,
  isActive,
  workspace,
  thread,
  onRemove,
  toggleMarkForDeletion,
  hasNext,
  ctrlPressed = false,
}) {
  const { t } = useTranslation();
  const { slug: urlSlug, threadSlug = null } = useParams();
  const workspaceSlug = workspace?.slug ?? urlSlug;
  const optionsContainer = useRef(null);
  const optionsButton = useRef(null);
  const [showOptions, setShowOptions] = useState(false);
  const [isRenaming, setIsRenaming] = useState(false);
  const linkTo = thread.virtual
    ? "/"
    : !thread.slug
      ? paths.workspace.chat(workspaceSlug)
      : paths.workspace.thread(workspaceSlug, thread.slug);

  const { ref } = useScrollActiveItemIntoView({
    isActive,
    behavior: "instant",
    block: "center",
  });

  const closeOptions = ({ returnFocus = false } = {}) => {
    setShowOptions(false);
    if (returnFocus) optionsButton.current?.focus();
  };

  // After renaming, focus goes back to the thread link once it is rendered
  // again (the options button is hidden until the row has focus).
  const rowRef = useRef(null);
  const refocusAfterRename = useRef(false);
  useEffect(() => {
    if (isRenaming || !refocusAfterRename.current) return;
    refocusAfterRename.current = false;
    rowRef.current?.querySelector("a")?.focus();
  }, [isRenaming]);

  return (
    <div
      className="w-full relative flex h-11 md:h-[38px] items-center border-none rounded-lg"
      role="listitem"
    >
      {/* Tree lines. The path to the active thread is drawn in the accent
          color, the same marker the active workspace uses. */}
      <div
        style={{ width: THREAD_CALLOUT_DETAIL_WIDTH / 2 }}
        className={`${
          isActive
            ? "border-l-2 border-b-2 border-[var(--theme-nav-active)] z-[2]"
            : "border-l border-b border-zinc-500 light:border-slate-400 z-[1]"
        } h-[50%] absolute top-0 left-3 rounded-bl-lg`}
      ></div>
      {hasNext && (
        <div
          style={{ width: THREAD_CALLOUT_DETAIL_WIDTH / 2 }}
          className={`${
            idx <= activeIdx && !isActive
              ? "border-l-2 border-[var(--theme-nav-active)] z-[2]"
              : "border-l border-zinc-500 light:border-slate-400 z-[1]"
          } h-[100%] absolute top-0 left-3`}
        ></div>
      )}

      {/* Spacer that reserves the width of the tree lines. */}
      <div
        style={{ width: THREAD_CALLOUT_DETAIL_WIDTH + 8 }}
        className="h-full"
      />
      <div
        ref={rowRef}
        className={`flex w-full items-center justify-between pr-2 group/thread relative ${isActive ? "bg-[var(--theme-sidebar-thread-selected)] light:bg-blue-200" : "hover:bg-theme-sidebar-subitem-hover light:hover:bg-slate-300"} rounded-md`}
      >
        {thread.deleted ? (
          <div className="w-full flex justify-between">
            <div className="w-full pl-2 py-1">
              <p className="text-left text-sm text-theme-text-secondary italic">
                {t("sidebar-nav.deleted-thread")}
              </p>
            </div>
            {ctrlPressed && (
              <button
                type="button"
                className="border-none rounded-md"
                aria-label={t("sidebar-nav.restore-thread")}
                onClick={() => toggleMarkForDeletion(thread.id)}
              >
                <RotateCcw
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className="text-zinc-300 hover:text-white light:text-theme-text-secondary hover:light:text-theme-text-primary"
                  size={18}
                />
              </button>
            )}
          </div>
        ) : isRenaming ? (
          <RenameThreadInput
            workspace={workspace}
            thread={thread}
            onDone={() => {
              refocusAfterRename.current = true;
              setIsRenaming(false);
            }}
          />
        ) : (
          <Link
            ref={ref}
            to={linkTo}
            data-tooltip-id="workspace-thread-name"
            data-tooltip-content={thread.name}
            className="w-full pl-2 py-1 overflow-hidden rounded-md"
            aria-current={isActive ? "page" : undefined}
          >
            <p
              className={`text-left text-sm truncate max-w-[150px] ${
                isActive
                  ? "font-semibold text-theme-text-primary light:text-blue-900"
                  : "text-theme-text-primary font-medium light:text-slate-800"
              }`}
            >
              {thread.name}
            </p>
          </Link>
        )}
        {!!thread.slug && !thread.deleted && !thread.virtual && !isRenaming && (
          <div ref={optionsContainer} className="flex items-center">
            {ctrlPressed ? (
              <button
                type="button"
                className="border-none rounded-md"
                aria-label={t("sidebar-nav.mark-for-deletion")}
                onClick={() => toggleMarkForDeletion(thread.id)}
              >
                <X
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className="text-zinc-300 light:text-theme-text-secondary hover:text-white hover:light:text-theme-text-primary"
                  size={18}
                />
              </button>
            ) : (
              <div
                className={`flex items-center w-fit gap-x-1 ${showOptions ? "" : "md:invisible md:group-hover/thread:visible md:group-focus-within/thread:visible"}`}
              >
                <button
                  ref={optionsButton}
                  type="button"
                  className="border-none rounded-md flex items-center justify-center w-11 h-11 md:w-auto md:h-auto"
                  onClick={() => setShowOptions(!showOptions)}
                  aria-label={t("sidebar-nav.thread-options", {
                    name: thread.name,
                  })}
                  aria-haspopup="menu"
                  aria-expanded={showOptions}
                >
                  <Ellipsis
                    strokeWidth={1.5}
                    aria-hidden="true"
                    className="text-slate-300 light:text-theme-text-secondary hover:text-white hover:light:text-theme-text-primary"
                    size={25}
                  />
                </button>
              </div>
            )}
            {showOptions && (
              <OptionsMenu
                containerRef={optionsContainer}
                workspace={workspace}
                thread={thread}
                onRemove={onRemove}
                onRename={() => {
                  setShowOptions(false);
                  setIsRenaming(true);
                }}
                close={closeOptions}
                currentThreadSlug={threadSlug}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * Inline rename, the same pattern the workspace folders use.
 * Enter or blur saves, Escape cancels.
 */
function RenameThreadInput({ workspace, thread, onDone }) {
  const { t } = useTranslation();
  const [value, setValue] = useState(thread.name);
  const inputRef = useRef(null);
  const submitted = useRef(false);

  useEffect(() => {
    inputRef.current?.focus();
    inputRef.current?.select();
  }, []);

  const submit = async () => {
    if (submitted.current) return;
    submitted.current = true;
    const name = value.trim();
    if (!name || name === thread.name) return onDone();

    const { message } = await Workspace.threads.update(
      workspace.slug,
      thread.slug,
      { name }
    );
    if (message) {
      showToast(t("sidebar-nav.thread-rename-failed", { message }), "error", {
        clear: true,
      });
      return onDone();
    }
    thread.name = name;
    onDone();
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") submit();
    if (e.key === "Escape") {
      // Handled here: an open drawer must not close as well.
      e.preventDefault();
      submitted.current = true;
      onDone();
    }
  };

  return (
    <input
      ref={inputRef}
      value={value}
      aria-label={t("sidebar-nav.thread-name")}
      onChange={(e) => setValue(e.target.value)}
      onKeyDown={onKeyDown}
      onBlur={submit}
      className="w-full ml-1 my-[3px] bg-transparent border border-white/40 light:border-slate-400 text-theme-text-primary text-base md:text-sm min-w-0 rounded-md px-2 py-[2px]"
    />
  );
}

function OptionsMenu({
  containerRef,
  workspace,
  thread,
  onRemove,
  onRename,
  close,
  currentThreadSlug,
}) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const menuRef = useRef(null);
  const [confirmingDelete, setConfirmingDelete] = useState(false);

  useEffect(() => {
    // composedPath() keeps the original path even when the clicked button has
    // already been replaced, as happens when the menu switches to the
    // delete confirmation.
    const onOutsideClick = (e) => {
      const path = e.composedPath();
      if (
        !path.includes(menuRef.current) &&
        !path.includes(containerRef.current)
      )
        close();
    };
    const onKeyDown = (e) => {
      if (e.key === "Escape") close({ returnFocus: true });
    };
    document.addEventListener("click", onOutsideClick);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("click", onOutsideClick);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    menuRef.current?.querySelector("button")?.focus();
  }, [confirmingDelete]);

  const handleDelete = async () => {
    const success = await Workspace.threads.delete(workspace.slug, thread.slug);
    if (!success) {
      showToast(t("sidebar-nav.thread-delete-failed"), "error", {
        clear: true,
      });
      close({ returnFocus: true });
      return;
    }
    showToast(t("sidebar-nav.thread-deleted"), "success", { clear: true });
    onRemove(thread.id);
    // Redirect if deleting the active thread. Use router navigation so
    // ActiveGenerationGuard can intercept if a response is generating.
    if (currentThreadSlug === thread.slug) {
      navigate(paths.workspace.chat(workspace.slug));
    }
  };

  return (
    <div
      ref={menuRef}
      role="menu"
      aria-label={t("sidebar-nav.thread-options", { name: thread.name })}
      className="absolute w-max max-w-[220px] z-[20] top-[25px] right-[10px] bg-zinc-900 light:bg-theme-bg-sidebar light:border-[1px] light:border-theme-sidebar-border rounded-lg p-1 animate-in fade-in-0 slide-in-from-top-2"
    >
      {confirmingDelete ? (
        <div className="p-2 flex flex-col gap-y-2">
          <p
            id={`delete-thread-${thread.slug}`}
            className="text-sm text-theme-text-primary"
          >
            {t("sidebar-nav.delete-thread-confirm")}
          </p>
          <div className="flex gap-x-2 justify-end">
            <button
              type="button"
              role="menuitem"
              onClick={() => close({ returnFocus: true })}
              className="rounded-md px-2 py-1 text-sm text-theme-text-primary hover:bg-slate-500/20"
            >
              {t("sidebar-nav.cancel")}
            </button>
            <button
              type="button"
              role="menuitem"
              aria-describedby={`delete-thread-${thread.slug}`}
              onClick={handleDelete}
              className="rounded-md px-2 py-1 text-sm font-medium text-red-300 light:text-red-700 hover:bg-red-500/20"
            >
              {t("sidebar-nav.delete-thread")}
            </button>
          </div>
        </div>
      ) : (
        <>
          <button
            onClick={onRename}
            type="button"
            role="menuitem"
            className="w-full rounded-md flex items-center p-2 gap-x-2 hover:bg-slate-500/20 text-slate-300 light:text-theme-text-primary"
          >
            <Pencil strokeWidth={1.5} size={18} aria-hidden="true" />
            <p className="text-sm">{t("sidebar-nav.rename")}</p>
          </button>
          <button
            onClick={() => setConfirmingDelete(true)}
            type="button"
            role="menuitem"
            className="w-full rounded-md flex items-center p-2 gap-x-2 hover:bg-red-500/20 text-slate-300 light:text-theme-text-primary hover:text-red-100 light:hover:text-red-700"
          >
            <Trash2 strokeWidth={1.5} size={18} aria-hidden="true" />
            <p className="text-sm">{t("sidebar-nav.delete-thread")}</p>
          </button>
        </>
      )}
    </div>
  );
}
