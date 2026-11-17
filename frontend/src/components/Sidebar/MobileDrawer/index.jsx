import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { useTranslation } from "react-i18next";

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select, textarea, [tabindex]:not([tabindex="-1"])';

/**
 * Off-canvas navigation panel for phones, shared by the workspace sidebar and
 * the settings sidebar.
 * - Closed: removed from the tab order with `inert`.
 * - Open: focus moves inside and stays there, Escape or the backdrop closes
 *   it, and focus goes back to the button that opened it.
 */
export default function MobileDrawer({
  open,
  onClose,
  returnFocusRef,
  label,
  children,
}) {
  const { t } = useTranslation();
  const dialogRef = useRef(null);
  const panelRef = useRef(null);
  const wasOpen = useRef(false);

  useEffect(() => {
    if (!open) {
      if (wasOpen.current) returnFocusRef?.current?.focus();
      wasOpen.current = false;
      return;
    }
    wasOpen.current = true;
    panelRef.current?.querySelector(FOCUSABLE)?.focus();

    // Only the top layer reacts: a menu open inside the drawer, or a modal
    // opened from it, handles its own Escape and Tab first.
    const ownsFocus = () =>
      document.activeElement === document.body ||
      dialogRef.current?.contains(document.activeElement);
    const onKeyDown = (e) => {
      if (e.defaultPrevented || !ownsFocus()) return;
      if (e.key === "Escape") {
        if (dialogRef.current?.querySelector('[role="menu"]')) return;
        return onClose();
      }
      if (e.key !== "Tab" || !dialogRef.current) return;
      const focusable = [
        ...dialogRef.current.querySelectorAll(FOCUSABLE),
      ].filter((el) => el.offsetParent !== null);
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={label}
      className={`fixed inset-0 z-99 ${open ? "" : "pointer-events-none"}`}
      {...(!open && { inert: "" })}
    >
      <div
        aria-hidden="true"
        onClick={onClose}
        className={`absolute inset-0 bg-black/50 transition-opacity ease-drawer ${
          open ? "opacity-100 duration-panel" : "opacity-0 duration-base"
        }`}
      />
      <button
        type="button"
        onClick={onClose}
        aria-label={t("sidebar-nav.close-menu")}
        className={`absolute top-3 right-3 w-11 h-11 flex items-center justify-center rounded-lg text-white bg-black/40 transition-opacity ease-drawer ${
          open ? "opacity-100 duration-panel" : "opacity-0 duration-base"
        }`}
      >
        <X strokeWidth={1.5} size={22} aria-hidden="true" />
      </button>
      <div
        ref={panelRef}
        className={`relative h-[100vh] supports-[height:100dvh]:h-[100dvh] w-[80%] max-w-[340px] rounded-r-[26px] bg-zinc-925 light:bg-slate-200 p-[18px] transition-transform ease-drawer ${
          open
            ? "translate-x-0 duration-panel"
            : "-translate-x-full duration-base"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
