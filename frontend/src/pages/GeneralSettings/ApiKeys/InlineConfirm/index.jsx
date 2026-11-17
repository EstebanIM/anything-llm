import { useEffect, useId, useRef, useState } from "react";
import { LoaderCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

const BUTTON =
  "inline-flex items-center justify-center gap-x-1.5 min-h-[44px] md:min-h-[32px] px-3 rounded-lg text-sm font-medium whitespace-nowrap transition-colors duration-quick ease-smooth";

/** Icon-only destructive trigger for table rows (44px below md). */
export const ROW_ICON_BUTTON =
  "inline-flex items-center justify-center min-h-[44px] min-w-[44px] md:min-h-[32px] md:min-w-[32px] rounded-lg text-theme-text-secondary hover:text-red-300 light:hover:text-red-700 hover:bg-red-500/10 transition-colors duration-quick ease-smooth";

/**
 * Destructive row action confirmed in place. The trigger is swapped for a
 * short line with the consequences plus Confirm / Cancel. Confirm takes the
 * focus; Cancel and Escape give it back to the trigger.
 * `onConfirm` resolves to true when the server confirmed the action (the
 * caller then removes the row) and to false when it failed (the trigger
 * comes back so the user can try again).
 *
 * @param {object} props
 * @param {string} [props.id] - id of the trigger, so a sibling row can focus it
 * @param {string} props.label - accessible name of the trigger ("Eliminar la clave «X»")
 * @param {import("react").ComponentType} [props.icon] - Lucide icon for the trigger
 * @param {import("react").ReactNode} [props.text] - visible trigger text (icon-only when omitted)
 * @param {string} [props.triggerClassName]
 * @param {import("react").ReactNode} props.consequence
 * @param {string} props.confirmLabel - visible verb ("Eliminar")
 * @param {() => Promise<boolean>} props.onConfirm
 * @param {(open: boolean) => void} [props.onOpenChange]
 */
export default function InlineConfirm({
  id,
  label,
  icon: Icon = null,
  text = null,
  triggerClassName = "",
  consequence,
  confirmLabel,
  onConfirm,
  onOpenChange,
}) {
  const { t } = useTranslation();
  const descId = useId();
  const triggerRef = useRef(null);
  const wasOpen = useRef(false);
  const mounted = useRef(true);
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  useEffect(() => {
    onOpenChange?.(open);
    if (open) {
      wasOpen.current = true;
    } else if (wasOpen.current) {
      wasOpen.current = false;
      triggerRef.current?.focus();
    }
  }, [open]);

  async function confirm(e) {
    if (busy) return e.preventDefault();
    setBusy(true);
    const ok = await onConfirm();
    // On success the row is usually unmounted by the caller.
    if (!mounted.current) return;
    setBusy(false);
    if (!ok) setOpen(false);
  }

  if (!open) {
    return (
      <button
        ref={triggerRef}
        id={id}
        type="button"
        onClick={() => setOpen(true)}
        // With visible text, `label` must start with it (label in name).
        aria-label={label}
        title={text ? undefined : label}
        className={triggerClassName}
      >
        {Icon && (
          <Icon strokeWidth={1.5} className="h-4 w-4" aria-hidden="true" />
        )}
        {text}
      </button>
    );
  }

  return (
    <div
      className="flex flex-col items-start gap-y-2 min-w-[200px] max-w-[280px]"
      onKeyDown={(e) => {
        if (e.key !== "Escape" || busy) return;
        e.preventDefault();
        setOpen(false);
      }}
    >
      <p
        id={descId}
        className="text-xs font-normal normal-case whitespace-normal text-theme-text-secondary"
      >
        {consequence}
      </p>
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          // Takes the focus from the trigger it replaces.
          autoFocus
          onClick={confirm}
          aria-describedby={descId}
          aria-busy={busy || undefined}
          aria-disabled={busy || undefined}
          className={`${BUTTON} border-none bg-red-600 hover:bg-red-700 text-[#ffffff] aria-disabled:opacity-60 aria-disabled:cursor-wait`}
        >
          {busy && (
            <LoaderCircle
              strokeWidth={1.5}
              className="h-4 w-4 animate-spin"
              aria-hidden="true"
            />
          )}
          {confirmLabel}
        </button>
        <button
          type="button"
          onClick={() => !busy && setOpen(false)}
          aria-disabled={busy || undefined}
          className={`${BUTTON} border border-zinc-500 light:border-slate-500 text-white hover:bg-white/5 light:hover:bg-slate-100 aria-disabled:opacity-60`}
        >
          {t("settings-pages.cancel")}
        </button>
      </div>
    </div>
  );
}
