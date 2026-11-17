import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useDialogFocus } from "@/components/lib/Modal";
import { useModalEscape } from "@/hooks/useModalEscape";

/**
 * Off-canvas navigation panel for phones, shared by the workspace sidebar and
 * the settings sidebar.
 * - Closed: removed from the tab order with `inert`, and without
 *   `data-app-dialog` so it never counts as an open dialog.
 * - Open: a modal dialog (shared focus trap and Escape stack with the app's
 *   modals): focus moves to the first link of the panel and stays inside,
 *   Escape or the backdrop closes it only when it is the top layer, and focus
 *   goes back to the button that opened it.
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
  const wasOpen = useRef(false);

  useDialogFocus(open, dialogRef);
  useModalEscape(open, () => {
    // A menu open inside the drawer closes first (it also prevents default).
    if (dialogRef.current?.querySelector('[role="menu"]')) return;
    onClose();
  });

  useEffect(() => {
    if (open) {
      wasOpen.current = true;
      return;
    }
    if (wasOpen.current) returnFocusRef?.current?.focus();
    wasOpen.current = false;
  }, [open]);

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={label}
      tabIndex={-1}
      className={`fixed inset-0 z-99 focus:outline-none ${open ? "" : "pointer-events-none"}`}
      {...(open ? { "data-app-dialog": "" } : { inert: "" })}
    >
      <div
        aria-hidden="true"
        onClick={onClose}
        className={`absolute inset-0 bg-black/50 transition-opacity ease-drawer ${
          open ? "opacity-100 duration-panel" : "opacity-0 duration-base"
        }`}
      />
      {/* The panel comes first in the DOM so focus lands on its first link. */}
      <div
        className={`relative h-[100vh] supports-[height:100dvh]:h-[100dvh] w-[80%] max-w-[340px] rounded-r-[26px] bg-zinc-925 light:bg-slate-200 p-[18px] transition-transform ease-drawer ${
          open
            ? "translate-x-0 duration-panel"
            : "-translate-x-full duration-base"
        }`}
      >
        {children}
      </div>
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
    </div>
  );
}
