import { useEffect, useRef } from "react";

const ITEM_SELECTOR =
  '[role="menuitem"], [role="menuitemradio"], [role="menuitemcheckbox"]';

/**
 * Keyboard and dismissal behavior for a popup menu (WAI-ARIA menu button).
 * While `open`:
 * - focus moves to the first item (unless `autoFocus` is false),
 * - ArrowUp / ArrowDown / Home / End move between items,
 * - Escape closes and returns focus to the trigger,
 * - Tab closes and lets focus continue to the next control,
 * - a pointer press outside the menu and its trigger closes it.
 *
 * Escape calls `preventDefault()` so outer layers (a modal, the mobile
 * drawer) leave it alone and only the menu closes.
 *
 * @param {Object} params
 * @param {boolean} params.open
 * @param {() => void} params.onClose
 * @param {import("react").RefObject<HTMLElement>} params.menuRef - element with role="menu"
 * @param {import("react").RefObject<HTMLElement>} [params.triggerRef] - the button that opens it
 * @param {boolean} [params.autoFocus=true]
 */
export default function useMenu({
  open,
  onClose,
  menuRef,
  triggerRef,
  autoFocus = true,
}) {
  const onCloseRef = useRef(onClose);
  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    if (!open) return;
    // Only this menu's own items: a nested submenu handles its own keys.
    const items = () =>
      [...(menuRef.current?.querySelectorAll(ITEM_SELECTOR) || [])].filter(
        (el) =>
          !el.disabled &&
          el.getAttribute("aria-disabled") !== "true" &&
          el.closest('[role="menu"]') === menuRef.current
      );
    // A timeout rather than requestAnimationFrame: rAF never fires in a
    // background tab, which would leave focus on the trigger.
    const timer = autoFocus ? setTimeout(() => items()[0]?.focus(), 0) : null;

    const onKeyDown = (e) => {
      if (!menuRef.current) return;
      if (e.key === "Escape") {
        e.preventDefault();
        onCloseRef.current?.();
        triggerRef?.current?.focus();
        return;
      }
      if (!menuRef.current.contains(document.activeElement)) return;
      if (e.key === "Tab") return onCloseRef.current?.();
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
      list[next].focus();
    };
    const onPointerDown = (e) => {
      const path = e.composedPath();
      if (path.includes(menuRef.current)) return;
      if (triggerRef?.current && path.includes(triggerRef.current)) return;
      onCloseRef.current?.();
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      if (timer) clearTimeout(timer);
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);
}
