import { useEffect, useId, useRef, useState } from "react";
import { LoaderCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

const BUTTON =
  "inline-flex items-center justify-center gap-x-1.5 min-h-[44px] md:min-h-[32px] px-3 rounded-lg text-xs font-medium whitespace-nowrap transition-colors duration-quick ease-smooth";

// Enter held down on the trigger must not confirm the action that just opened.
const ACTIVATION_GRACE_MS = 300;

/** Icon-only trigger for row actions (44 px below md). */
export const ROW_ICON_BUTTON =
  "inline-flex items-center justify-center min-h-[44px] min-w-[44px] md:min-h-[32px] md:min-w-[32px] rounded-lg text-theme-text-secondary hover:text-red-300 light:hover:text-red-700 hover:bg-red-500/10 transition-colors duration-quick ease-smooth";

/**
 * In-place confirmation panel (the app's single pattern; dialogs use
 * `lib/ConfirmModal`). The question names the group, the consequences are
 * always visible and describe the confirm button, Escape cancels (and stops
 * there, so an enclosing dialog or drawer stays open), and while `busy` the
 * buttons stay focusable but ignore activation.
 * Order: Cancel, then Confirm; Confirm takes the focus when the panel opens.
 *
 * @param {object} props
 * @param {import("react").ReactNode} [props.question] - "¿Eliminar la clave «X»?"
 * @param {import("react").ReactNode} [props.consequences] - what happens, in plain words
 * @param {string} props.confirmLabel - visible verb ("Eliminar")
 * @param {string} [props.cancelLabel]
 * @param {boolean} [props.busy=false]
 * @param {boolean} [props.danger=true] - red confirm button
 * @param {"start"|"end"} [props.align="start"]
 * @param {() => void} props.onConfirm
 * @param {() => void} props.onCancel
 * @param {string} [props.className]
 */
export default function InlineConfirm({
  question = null,
  consequences = null,
  confirmLabel,
  cancelLabel,
  busy = false,
  danger = true,
  align = "start",
  onConfirm,
  onCancel,
  className = "",
}) {
  const { t } = useTranslation();
  const questionId = useId();
  const consequencesId = useId();
  const openedAt = useRef(0);
  useEffect(() => {
    openedAt.current = Date.now();
  }, []);

  const onKeyDown = (e) => {
    if (e.key !== "Escape") return;
    e.preventDefault();
    e.stopPropagation();
    if (!busy) onCancel();
  };

  const confirm = (e) => {
    if (busy || Date.now() - openedAt.current < ACTIVATION_GRACE_MS)
      return e.preventDefault();
    onConfirm();
  };

  return (
    <div
      role="group"
      aria-labelledby={question ? questionId : undefined}
      aria-label={question ? undefined : confirmLabel}
      onKeyDown={onKeyDown}
      className={`flex flex-col gap-y-1.5 py-1 max-w-[320px] ${
        align === "end"
          ? "md:items-end md:text-right md:ml-auto"
          : "items-start"
      } ${className}`}
    >
      {question && (
        <p
          id={questionId}
          className="text-xs font-semibold whitespace-normal text-white light:text-slate-900"
        >
          {question}
        </p>
      )}
      {consequences && (
        <p
          id={consequencesId}
          className="text-xs font-normal normal-case whitespace-normal text-theme-text-secondary"
        >
          {consequences}
        </p>
      )}
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => !busy && onCancel()}
          aria-disabled={busy || undefined}
          className={`${BUTTON} border border-zinc-500 light:border-slate-500 text-white light:text-slate-900 hover:bg-white/10 light:hover:bg-slate-100 aria-disabled:opacity-60 aria-disabled:cursor-not-allowed`}
        >
          {cancelLabel || t("settings-pages.cancel")}
        </button>
        <button
          type="button"
          // Takes the focus from the control that opened the panel.
          autoFocus
          onClick={confirm}
          aria-describedby={consequences ? consequencesId : undefined}
          aria-busy={busy || undefined}
          aria-disabled={busy || undefined}
          className={`${BUTTON} aria-disabled:opacity-60 aria-disabled:cursor-wait ${
            danger
              ? "border-none bg-red-600 hover:bg-red-700 text-[#ffffff]"
              : "border-none bg-zinc-50 light:bg-slate-900 text-zinc-950 light:text-[#ffffff] hover:opacity-80"
          }`}
        >
          {busy && (
            <LoaderCircle
              strokeWidth={1.5}
              className="h-3.5 w-3.5 animate-spin"
              aria-hidden="true"
            />
          )}
          {confirmLabel}
        </button>
      </div>
    </div>
  );
}

/**
 * Row action confirmed in place: the trigger is swapped for an
 * `InlineConfirm` panel. Cancel, Escape or a failed request give the focus
 * back to the trigger. `onConfirm` resolves to true when the server confirmed
 * the action (the caller then removes the row, see `hooks/useFocusAfterRemoval`)
 * and to false when it failed (the trigger comes back to try again).
 *
 * @param {object} props
 * @param {string} [props.id] - id of the trigger
 * @param {string} props.label - accessible name of the trigger ("Eliminar la clave «X»")
 * @param {import("react").ComponentType} [props.icon] - Lucide icon for the trigger
 * @param {import("react").ReactNode} [props.text] - visible trigger text (icon-only when omitted; `label` must start with it)
 * @param {string} [props.triggerClassName] - defaults to ROW_ICON_BUTTON
 * @param {import("react").ReactNode} [props.question]
 * @param {import("react").ReactNode} props.consequences
 * @param {string} props.confirmLabel
 * @param {boolean} [props.danger=true]
 * @param {"start"|"end"} [props.align]
 * @param {() => Promise<boolean>} props.onConfirm
 * @param {(open: boolean) => void} [props.onOpenChange]
 * Any other prop (`data-row-focus`, `aria-*`…) goes to the trigger button.
 */
export function InlineConfirmButton({
  id,
  label,
  icon: Icon = null,
  text = null,
  triggerClassName = ROW_ICON_BUTTON,
  question = null,
  consequences,
  confirmLabel,
  danger = true,
  align = "start",
  onConfirm,
  onOpenChange,
  ...triggerProps
}) {
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

  async function confirm() {
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
        {...triggerProps}
        ref={triggerRef}
        id={id}
        type="button"
        onClick={() => setOpen(true)}
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
    <InlineConfirm
      question={question}
      consequences={consequences}
      confirmLabel={confirmLabel}
      busy={busy}
      danger={danger}
      align={align}
      onConfirm={confirm}
      onCancel={() => setOpen(false)}
    />
  );
}
