import { useEffect, useId, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { ArrowRightLeft, Pencil, Trash2 } from "lucide-react";
import useMenu from "@/hooks/useMenu";

const ITEM_CLASS =
  "w-full flex items-center gap-x-2 text-left text-sm font-medium text-zinc-50 light:text-slate-800 border-none bg-transparent cursor-pointer hover:bg-zinc-700 light:hover:bg-slate-200 rounded px-2.5 min-h-[44px] md:min-h-0 md:py-1.5 transition-colors duration-quick";

/**
 * Options menu for a memory card, anchored under its trigger (no portal, so
 * it follows the card in the tab order). Deleting asks for confirmation
 * inside the menu.
 * @param {Object} props
 * @param {React.RefObject} props.triggerRef
 * @param {boolean} props.isWorkspace
 * @param {boolean} props.canMove - hide the move option when the target scope is full
 * @param {function} props.onClose
 * @param {function} props.onEdit
 * @param {function} props.onMove
 * @param {function} props.onDelete - async; resolves once the delete settles
 */
export default function CardMenu({
  triggerRef,
  isWorkspace,
  canMove,
  onClose,
  onEdit,
  onMove,
  onDelete,
}) {
  const { t } = useTranslation();
  const menuRef = useRef(null);
  const confirmId = useId();
  const [confirmingDelete, setConfirmingDelete] = useState(false);
  const [deleting, setDeleting] = useState(false);

  useMenu({ open: true, onClose, menuRef, triggerRef });

  useEffect(() => {
    if (confirmingDelete)
      menuRef.current?.querySelector('[role="menuitem"]')?.focus();
  }, [confirmingDelete]);

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
      aria-label={t("chat-panels.memories.options")}
      className="absolute right-2 top-12 md:top-10 z-20 bg-zinc-800 light:bg-slate-50 border border-zinc-700 light:border-slate-300 rounded-lg p-1.5 flex flex-col shadow-lg w-max min-w-[175px] max-w-[260px]"
    >
      {confirmingDelete ? (
        <div className="p-1.5 flex flex-col gap-y-2">
          <p
            id={confirmId}
            className="text-sm text-zinc-50 light:text-slate-800"
          >
            {t("chat-panels.memories.delete-confirm")}
          </p>
          <div className="flex gap-x-2 justify-end">
            <button
              type="button"
              role="menuitem"
              onClick={() => {
                onClose();
                triggerRef.current?.focus();
              }}
              className="rounded-md px-2.5 min-h-[44px] md:min-h-0 md:py-1 text-sm text-zinc-50 light:text-slate-800 hover:bg-zinc-700 light:hover:bg-slate-200 transition-colors duration-quick"
            >
              {t("chat_window.memories.modal.cancel")}
            </button>
            <button
              type="button"
              role="menuitem"
              aria-describedby={confirmId}
              disabled={deleting}
              onClick={confirmDelete}
              className="rounded-md px-2.5 min-h-[44px] md:min-h-0 md:py-1 text-sm font-medium text-red-300 light:text-red-700 hover:bg-red-500/20 transition-colors duration-quick disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {t("chat_window.memories.menu.delete")}
            </button>
          </div>
        </div>
      ) : (
        <>
          <button
            type="button"
            role="menuitem"
            onClick={onEdit}
            className={ITEM_CLASS}
          >
            <Pencil strokeWidth={1.5} size={16} aria-hidden="true" />
            {t("chat_window.memories.menu.edit")}
          </button>
          {canMove && (
            <button
              type="button"
              role="menuitem"
              onClick={onMove}
              className={ITEM_CLASS}
            >
              <ArrowRightLeft strokeWidth={1.5} size={16} aria-hidden="true" />
              {isWorkspace
                ? t("chat_window.memories.menu.move_to_global")
                : t("chat_window.memories.menu.move_to_workspace")}
            </button>
          )}
          <button
            type="button"
            role="menuitem"
            onClick={() => setConfirmingDelete(true)}
            className={`${ITEM_CLASS} hover:bg-red-500/20 light:hover:bg-red-500/10 hover:text-red-200 light:hover:text-red-700`}
          >
            <Trash2 strokeWidth={1.5} size={16} aria-hidden="true" />
            {t("chat_window.memories.menu.delete")}
          </button>
        </>
      )}
    </div>
  );
}
