import { useEffect, useId, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { ChevronRight } from "lucide-react";

const ITEM_SELECTOR =
  '[role="menuitem"], [role="menuitemradio"], [role="menuitemcheckbox"]';
const OPEN_KEYS = ["Enter", " ", "ArrowRight", "ArrowLeft"];
const CLOSE_KEYS = ["Escape", "ArrowLeft", "ArrowRight"];

export const MENU_ITEM_CLASSES =
  "w-full flex items-center justify-between px-2 py-1 min-h-11 md:min-h-0 rounded border-none bg-transparent text-left cursor-pointer text-sm font-normal text-zinc-50 light:text-slate-800 hover:bg-zinc-700 light:hover:bg-slate-200 focus-visible:bg-zinc-700 light:focus-visible:bg-slate-200 transition-colors duration-quick";

/**
 * Menu item that opens a nested menu inside the chat settings menu (which uses
 * `useMenu`). Opens on hover, on click, and from the keyboard with Enter,
 * Space or the arrow keys (it opens to the left, so both arrows work).
 * Inside the submenu, arrows/Home/End move between its items and Escape or
 * an arrow key closes it and returns focus to this item; Tab is left to the
 * parent menu, which closes everything.
 */
export default function SubmenuItem({
  label,
  submenuLabel,
  widthClass = "w-[130px]",
  children,
}) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef(null);
  const submenuRef = useRef(null);
  const focusOnOpenRef = useRef(false);
  const submenuId = useId();

  function items() {
    return [
      ...(submenuRef.current?.querySelectorAll(ITEM_SELECTOR) || []),
    ].filter(
      (el) => !el.disabled && el.getAttribute("aria-disabled") !== "true"
    );
  }

  function focusFirstItem() {
    const list = items();
    const checked = list.find(
      (el) => el.getAttribute("aria-checked") === "true"
    );
    (checked || list[0])?.focus();
  }

  useEffect(() => {
    if (!open || !focusOnOpenRef.current) return;
    focusOnOpenRef.current = false;
    focusFirstItem();
  }, [open]);

  function openFromKeyboard() {
    if (open) return focusFirstItem();
    focusOnOpenRef.current = true;
    setOpen(true);
  }

  function handleTriggerKeyDown(e) {
    if (OPEN_KEYS.includes(e.key)) {
      e.preventDefault();
      e.stopPropagation();
      return openFromKeyboard();
    }
    // A submenu opened by hover must not join the parent's arrow navigation.
    if (open && ["ArrowDown", "ArrowUp", "Home", "End"].includes(e.key)) {
      flushSync(() => setOpen(false));
    }
  }

  function handleSubmenuKeyDown(e) {
    if (CLOSE_KEYS.includes(e.key)) {
      e.preventDefault();
      e.stopPropagation();
      setOpen(false);
      triggerRef.current?.focus();
      return;
    }
    const list = items();
    if (list.length === 0) return;
    const current = list.indexOf(document.activeElement);
    let next = null;
    if (e.key === "ArrowDown") next = (current + 1) % list.length;
    if (e.key === "ArrowUp") next = (current - 1 + list.length) % list.length;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = list.length - 1;
    if (next === null) return;
    e.preventDefault();
    e.stopPropagation();
    list[next].focus();
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => {
        if (submenuRef.current?.contains(document.activeElement)) return;
        setOpen(false);
      }}
    >
      <button
        ref={triggerRef}
        type="button"
        role="menuitem"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={open ? submenuId : undefined}
        onKeyDown={handleTriggerKeyDown}
        onClick={(e) => (e.detail === 0 ? openFromKeyboard() : setOpen(true))}
        className={`${MENU_ITEM_CLASSES} ${open ? "bg-zinc-700 light:bg-slate-200" : ""}`}
      >
        <span>{label}</span>
        <ChevronRight
          strokeWidth={1.5}
          size={14}
          aria-hidden="true"
          className="text-zinc-50 light:text-slate-800"
        />
      </button>
      {open && (
        <div role="none" className="absolute right-full top-0 -mr-2 pr-2 pt-0">
          <div
            ref={submenuRef}
            id={submenuId}
            role="menu"
            aria-label={submenuLabel ?? label}
            onKeyDown={handleSubmenuKeyDown}
            className={`bg-zinc-800 light:bg-slate-50 border border-zinc-700 light:border-slate-300 rounded-lg p-3.5 ${widthClass} flex flex-col gap-1.5 shadow-lg animate-in fade-in-0 [--tw-enter-translate-x:4px] [animation-duration:var(--dur-base)] [animation-timing-function:var(--ease-smooth)]`}
          >
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
