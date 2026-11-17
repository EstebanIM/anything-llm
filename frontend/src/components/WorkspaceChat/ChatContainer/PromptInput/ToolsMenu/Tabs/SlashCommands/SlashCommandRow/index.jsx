import { useState, useRef, useEffect, useId } from "react";
import { createPortal } from "react-dom";
import { Ellipsis } from "lucide-react";
import { useTranslation } from "react-i18next";
import useMenu from "@/hooks/useMenu";

const MENU_WIDTH = 120;

/**
 * One slash command in the tools listbox. The row itself is the option (the
 * prompt textarea stays focused and points at it with aria-activedescendant);
 * the preset "⋯" button sits next to the option, not inside it, so it keeps
 * its own focus and accessible name.
 */
export default function SlashCommandRow({
  optionId,
  command,
  description,
  onClick,
  onEdit,
  onPublish,
  showMenu = false,
  highlighted = false,
}) {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  const rowRef = useRef(null);
  const menuRef = useRef(null);
  const menuBtnRef = useRef(null);
  const menuId = useId();

  useMenu({
    open: menuOpen,
    onClose: () => setMenuOpen(false),
    menuRef,
    triggerRef: menuBtnRef,
  });

  useEffect(() => {
    if (highlighted) rowRef.current?.scrollIntoView({ block: "nearest" });
  }, [highlighted]);

  useEffect(() => {
    if (menuOpen && menuBtnRef.current) {
      const rect = menuBtnRef.current.getBoundingClientRect();
      setMenuPosition({
        top: rect.bottom,
        left: Math.max(8, rect.right - MENU_WIDTH),
      });
    }
  }, [menuOpen]);

  function runAction(action) {
    // Park focus on the trigger first so a modal opened by the action
    // returns focus there when it closes.
    menuBtnRef.current?.focus();
    setMenuOpen(false);
    action?.();
  }

  return (
    <div
      ref={rowRef}
      role="none"
      className={`flex items-center justify-between rounded group relative transition-colors duration-quick ${
        highlighted
          ? "bg-zinc-700/50 light:bg-slate-100"
          : "hover:bg-zinc-700/50 light:hover:bg-slate-100"
      }`}
    >
      <div
        role="option"
        id={optionId}
        aria-selected={highlighted}
        onClick={onClick}
        className="flex gap-1.5 items-center text-xs min-w-0 flex-1 px-2 py-1 min-h-11 md:min-h-0 cursor-pointer"
      >
        <span className="text-white light:text-slate-900 shrink-0">
          {command}
        </span>
        <span className="text-zinc-400 light:text-slate-500 italic truncate">
          {description}
        </span>
      </div>

      {showMenu && (
        <button
          ref={menuBtnRef}
          type="button"
          aria-label={t("chat-input.preset-options", { command })}
          aria-haspopup="menu"
          aria-expanded={menuOpen}
          aria-controls={menuOpen ? menuId : undefined}
          onClick={(e) => {
            e.stopPropagation();
            setMenuOpen(!menuOpen);
          }}
          className={`border-none shrink-0 ml-1 flex items-center justify-center w-11 h-11 md:w-6 md:h-6 cursor-pointer text-zinc-400 light:text-slate-500 hover:text-white light:hover:text-slate-900 rounded transition-opacity duration-quick group-hover:opacity-100 focus-visible:opacity-100 [@media(hover:none)]:opacity-100 ${
            menuOpen || highlighted ? "opacity-100" : "opacity-0"
          }`}
        >
          <Ellipsis strokeWidth={1.5} size={16} aria-hidden="true" />
        </button>
      )}

      {menuOpen &&
        createPortal(
          <div
            ref={menuRef}
            id={menuId}
            role="menu"
            aria-label={t("chat-input.preset-options", { command })}
            style={{
              position: "fixed",
              top: menuPosition.top,
              left: menuPosition.left,
            }}
            className="z-[9999] bg-zinc-800 light:bg-white border border-zinc-700 light:border-slate-300 rounded-lg shadow-lg min-w-[120px] flex flex-col overflow-hidden animate-in fade-in-0 [--tw-enter-translate-y:-4px] [animation-duration:var(--dur-base)] [animation-timing-function:var(--ease-smooth)]"
          >
            <button
              type="button"
              role="menuitem"
              className="border-none px-3 py-1.5 min-h-11 md:min-h-0 text-xs text-white light:text-slate-900 hover:bg-zinc-700 light:hover:bg-slate-100 focus-visible:bg-zinc-700 light:focus-visible:bg-slate-100 cursor-pointer text-left"
              onClick={(e) => {
                e.stopPropagation();
                runAction(onEdit);
              }}
            >
              {t("chat_window.edit")}
            </button>
            <button
              type="button"
              role="menuitem"
              className="border-none px-3 py-1.5 min-h-11 md:min-h-0 text-xs text-white light:text-slate-900 hover:bg-zinc-700 light:hover:bg-slate-100 focus-visible:bg-zinc-700 light:focus-visible:bg-slate-100 cursor-pointer text-left"
              onClick={(e) => {
                e.stopPropagation();
                runAction(onPublish);
              }}
            >
              {t("chat_window.publish")}
            </button>
          </div>,
          document.body
        )}
    </div>
  );
}
