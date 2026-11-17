import React, { useState, useEffect, useRef, useCallback, useId } from "react";
import { Trash2, EllipsisVertical, FolderTree } from "lucide-react";
import { useTranslation } from "react-i18next";
import useMenu from "@/hooks/useMenu";
import { DELETE_EVENT } from "@/components/WorkspaceChat/ChatContainer/ChatHistory/MessageActionsContext";
import { focusTargetAfterDelete } from "../DeleteMessage";
import { ACTION_BUTTON_CLASS } from "../constants";

const ITEM_CLASS =
  "border-none w-full flex items-center gap-x-2 rounded-md px-2 min-h-[44px] md:min-h-0 md:py-1.5 text-sm text-left text-white hover:bg-theme-action-menu-item-hover transition-colors duration-quick";

function ActionMenu({ chatId, forkThread, isEditing, role }) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [confirmingDelete, setConfirmingDelete] = useState(false);
  const triggerRef = useRef(null);
  const menuRef = useRef(null);
  const confirmTextId = useId();

  const close = useCallback(() => {
    setOpen(false);
    setConfirmingDelete(false);
  }, []);
  useMenu({ open, onClose: close, menuRef, triggerRef });

  // useMenu only focuses the first item when the menu opens.
  useEffect(() => {
    if (!confirmingDelete) return;
    menuRef.current?.querySelector('[role="menuitem"]')?.focus();
  }, [confirmingDelete]);

  const handleFork = () => {
    close();
    forkThread(chatId);
  };

  const cancelDelete = () => {
    close();
    triggerRef.current?.focus();
  };

  const handleDelete = () => {
    // Resolve the target before the menu (and this message) leave the DOM.
    const target = focusTargetAfterDelete(menuRef.current, chatId);
    window.dispatchEvent(new CustomEvent(DELETE_EVENT, { detail: { chatId } }));
    close();
    target?.focus();
  };

  if (!chatId || isEditing || role === "user") return null;

  return (
    <div className="relative">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => (open ? close() : setOpen(true))}
        className={ACTION_BUTTON_CLASS}
        data-tooltip-id="action-menu"
        data-tooltip-content={t("chat_window.more_actions")}
        aria-label={t("chat_window.more_actions")}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <EllipsisVertical strokeWidth={1.5} size={20} aria-hidden="true" />
      </button>
      {open && (
        <div
          ref={menuRef}
          role="menu"
          aria-label={t("chat_window.more_actions")}
          data-action-menu-open
          className="absolute top-0 left-full ml-1 w-max max-w-[240px] p-1 rounded-lg border border-white/20 light:border-slate-300 bg-theme-action-menu-bg flex flex-col shadow-[0_4px_14px_rgba(0,0,0,0.25)] text-white z-99 animate-in fade-in-0 slide-in-from-top-2"
        >
          {confirmingDelete ? (
            <div className="p-2 flex flex-col gap-y-2">
              <p id={confirmTextId} className="!m-0 text-sm text-white">
                {t("chat-history.delete-confirm")}
              </p>
              <div className="flex gap-x-2 justify-end">
                <button
                  type="button"
                  role="menuitem"
                  onClick={cancelDelete}
                  className="border-none rounded-md px-3 min-h-[44px] md:min-h-0 md:py-1 text-sm text-white hover:bg-theme-action-menu-item-hover transition-colors duration-quick"
                >
                  {t("chat_window.cancel")}
                </button>
                <button
                  type="button"
                  role="menuitem"
                  aria-describedby={confirmTextId}
                  onClick={handleDelete}
                  className="border-none rounded-md px-3 min-h-[44px] md:min-h-0 md:py-1 text-sm font-medium text-red-300 light:text-red-700 hover:bg-red-500/20 transition-colors duration-quick"
                >
                  {t("chat_window.delete")}
                </button>
              </div>
            </div>
          ) : (
            <>
              <button
                type="button"
                role="menuitem"
                onClick={handleFork}
                className={ITEM_CLASS}
              >
                <FolderTree strokeWidth={1.5} size={18} aria-hidden="true" />
                {t("chat_window.fork")}
              </button>
              <button
                type="button"
                role="menuitem"
                onClick={() => setConfirmingDelete(true)}
                className={ITEM_CLASS}
              >
                <Trash2 strokeWidth={1.5} size={18} aria-hidden="true" />
                {t("chat_window.delete")}
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default ActionMenu;
