import { EllipsisVertical, Trash2 } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import truncate from "truncate";
import useMenu from "@/hooks/useMenu";
import { formatDateTime, formatRelative } from "@/utils/dates";

const MAX_PROMPT_LENGTH = 200; // chars

const MENU_ITEM =
  "w-full flex items-center gap-x-2 text-left text-sm font-medium border-none bg-transparent cursor-pointer rounded px-2.5 min-h-[44px] md:min-h-0 md:py-1.5 whitespace-nowrap transition-colors duration-quick ease-smooth";

export default function PromptHistoryItem({
  prompt,
  modifiedAt,
  user,
  onRestore,
  onDelete,
}) {
  const { t } = useTranslation();
  const metaId = useId();
  const textId = useId();
  const [showMenu, setShowMenu] = useState(false);
  const menuButtonRef = useRef(null);
  const [expanded, setExpanded] = useState(false);
  const isLong = prompt.length > MAX_PROMPT_LENGTH;

  return (
    <div className="text-white">
      <div className="flex items-center justify-between gap-x-2">
        <p id={metaId} className="min-w-0 text-xs text-theme-text-secondary">
          {user && (
            <>
              <span className="font-medium text-theme-text-primary">
                {user.username}
              </span>
              <span aria-hidden="true" className="mx-1">
                •
              </span>
            </>
          )}
          <span title={formatDateTime(modifiedAt)}>
            {formatRelative(modifiedAt)}
          </span>
        </p>
        <div className="flex shrink-0 items-center gap-x-1">
          <button
            type="button"
            data-history-restore=""
            aria-describedby={metaId}
            onClick={onRestore}
            className="min-h-[44px] md:min-h-[28px] px-2 rounded-md text-sm text-theme-text-primary hover:bg-zinc-700 light:hover:bg-slate-200 transition-colors duration-quick ease-smooth"
          >
            {t("chat.prompt.history.restore")}
          </button>
          <div className="relative">
            <button
              type="button"
              ref={menuButtonRef}
              aria-haspopup="menu"
              aria-expanded={showMenu}
              aria-label={t("workspace-settings.history.options")}
              aria-describedby={metaId}
              onClick={() => setShowMenu((open) => !open)}
              className="w-11 h-11 md:w-7 md:h-7 flex items-center justify-center rounded-md text-theme-text-secondary hover:text-white hover:bg-zinc-700 light:hover:text-slate-900 light:hover:bg-slate-200 transition-colors duration-quick ease-smooth"
            >
              <EllipsisVertical
                strokeWidth={1.5}
                size={16}
                aria-hidden="true"
              />
            </button>
            {showMenu && (
              <HistoryItemMenu
                triggerRef={menuButtonRef}
                onClose={() => setShowMenu(false)}
                onDelete={onDelete}
              />
            )}
          </div>
        </div>
      </div>
      <p
        id={textId}
        className="mt-1 text-theme-text-primary text-sm font-medium break-words whitespace-pre-wrap"
      >
        {isLong && !expanded ? truncate(prompt, MAX_PROMPT_LENGTH) : prompt}
      </p>
      {isLong && (
        <button
          type="button"
          aria-expanded={expanded}
          aria-controls={textId}
          onClick={() => setExpanded((open) => !open)}
          className="min-h-[44px] md:min-h-0 mt-1 text-xs underline text-sky-400 light:text-sky-700 hover:text-sky-300 light:hover:text-sky-800 transition-colors duration-quick ease-smooth"
        >
          {expanded
            ? t("workspace-settings.history.collapse")
            : t("chat.prompt.history.expand")}
        </button>
      )}
    </div>
  );
}

/** Options of one history entry; deleting asks for confirmation in place. */
function HistoryItemMenu({ triggerRef, onClose, onDelete }) {
  const { t } = useTranslation();
  const menuRef = useRef(null);
  const confirmId = useId();
  const [confirming, setConfirming] = useState(false);
  const [deleting, setDeleting] = useState(false);

  useMenu({ open: true, onClose, menuRef, triggerRef });

  useEffect(() => {
    if (confirming)
      menuRef.current?.querySelector('[role="menuitem"]')?.focus();
  }, [confirming]);

  async function confirmDelete() {
    if (deleting) return;
    setDeleting(true);
    await onDelete();
    setDeleting(false);
  }

  return (
    <div
      ref={menuRef}
      role="menu"
      aria-label={t("workspace-settings.history.options")}
      className="absolute right-0 top-full mt-1 z-10 w-max min-w-[200px] max-w-[260px] p-1.5 flex flex-col rounded-lg border border-zinc-700 light:border-slate-300 bg-zinc-800 light:bg-slate-50 shadow-lg"
    >
      {confirming ? (
        <div className="p-1.5 flex flex-col gap-y-2">
          <p
            id={confirmId}
            className="text-sm text-zinc-50 light:text-slate-800"
          >
            {t("chat.prompt.history.deleteConfirm")}
          </p>
          <div className="flex gap-x-2 justify-end">
            <button
              type="button"
              role="menuitem"
              onClick={() => {
                onClose();
                triggerRef.current?.focus();
              }}
              className="rounded-md px-2.5 min-h-[44px] md:min-h-0 md:py-1 text-sm text-zinc-50 light:text-slate-800 hover:bg-zinc-700 light:hover:bg-slate-200 transition-colors duration-quick ease-smooth"
            >
              {t("settings-pages.cancel")}
            </button>
            <button
              type="button"
              role="menuitem"
              aria-describedby={confirmId}
              aria-busy={deleting || undefined}
              aria-disabled={deleting || undefined}
              onClick={confirmDelete}
              className="rounded-md px-2.5 min-h-[44px] md:min-h-0 md:py-1 text-sm font-medium text-red-300 light:text-red-700 hover:bg-red-500/20 transition-colors duration-quick ease-smooth aria-disabled:opacity-60 aria-disabled:cursor-wait"
            >
              {t("chat.prompt.history.delete")}
            </button>
          </div>
        </div>
      ) : (
        <>
          <button
            type="button"
            role="menuitem"
            onClick={() => setConfirming(true)}
            className={`${MENU_ITEM} text-red-300 light:text-red-700 hover:bg-red-500/20 light:hover:bg-red-500/10`}
          >
            <Trash2 strokeWidth={1.5} size={16} aria-hidden="true" />
            {t("chat.prompt.history.delete")}
          </button>
        </>
      )}
    </div>
  );
}
