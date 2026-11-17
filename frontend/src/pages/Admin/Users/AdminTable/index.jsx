import { useEffect, useId, useRef } from "react";
import { LoaderCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

/*
 * Settings tables of the admin pages. Below md each row is a stacked card
 * (cells carry a visible label, the column headers stay for screen readers);
 * from md up it is a regular table.
 */
export const TABLE =
  "block md:table w-full md:min-w-[640px] text-left text-xs border-spacing-0";
export const THEAD =
  "sr-only md:not-sr-only md:table-header-group text-theme-text-secondary text-xs leading-[18px] font-bold uppercase border-b border-white/10";
export const TH = "px-6 py-3 align-bottom";
// Rows without data-row are TableState rows: keep them full width on phones.
export const TBODY =
  "block md:table-row-group [&>tr:not([data-row])]:table [&>tr:not([data-row])]:w-full md:[&>tr:not([data-row])]:table-row";
export const ROW =
  "block mb-3 p-3 rounded-lg border border-white/10 md:table-row md:mb-0 md:p-0 md:rounded-none md:border-0 md:border-b text-white text-xs font-medium";
export const CELL = "block py-1 md:table-cell md:px-6 md:py-2 align-middle";
export const ROW_HEADER = `${CELL} text-sm md:text-xs font-semibold md:font-medium md:whitespace-nowrap`;
/** Visible column name inside a cell on phones (the <th> covers it from md). */
export const MOBILE_LABEL = "md:hidden text-theme-text-secondary font-normal";

const ROW_ACTION_BASE =
  "inline-flex items-center justify-center gap-x-1.5 min-h-[44px] min-w-[44px] md:min-h-[32px] md:min-w-[32px] px-3 md:px-2 rounded-lg text-xs font-medium text-white light:text-slate-800 transition-colors duration-quick ease-smooth";

/** Row action button: 44px target on phones, compact from md up. */
export const ROW_ACTION = `${ROW_ACTION_BASE} hover:bg-white/10 light:hover:bg-slate-100`;

/** Row action with a red hover for destructive actions. */
export const ROW_ACTION_DANGER = `${ROW_ACTION_BASE} hover:text-red-300 light:hover:text-red-700 hover:bg-red-500/10 light:hover:bg-red-50`;

/** Row action with an orange hover for reversible but disruptive actions. */
export const ROW_ACTION_WARNING = `${ROW_ACTION_BASE} hover:text-orange-300 light:hover:text-orange-800 hover:bg-orange-500/10 light:hover:bg-orange-50`;

/** Wrapper for a row's action buttons (never display:flex on the <td>). */
export const ROW_ACTIONS = "flex flex-wrap items-center md:justify-end gap-1";

/**
 * In-place confirmation for an action on one table row: the row's action
 * buttons are swapped for this block. The confirm button takes focus, the
 * consequences are its description and Escape cancels.
 *
 * @param {object} props
 * @param {import("react").ReactNode} props.question - "¿Eliminar a juan?"
 * @param {import("react").ReactNode} [props.consequences]
 * @param {string} props.confirmLabel - verb for the confirm button
 * @param {boolean} [props.busy=false] - the confirmed action is running
 * @param {boolean} [props.danger=true] - red confirm button
 * @param {() => void} props.onConfirm
 * @param {() => void} props.onCancel
 */
export default function InlineConfirm({
  question,
  consequences,
  confirmLabel,
  busy = false,
  danger = true,
  onConfirm,
  onCancel,
}) {
  const { t } = useTranslation();
  const questionId = useId();
  const consequencesId = useId();

  const onKeyDown = (e) => {
    if (e.key !== "Escape") return;
    // Handled here so an enclosing dialog or drawer does not close as well.
    e.preventDefault();
    if (!busy) onCancel();
  };

  return (
    <div
      role="group"
      aria-labelledby={questionId}
      onKeyDown={onKeyDown}
      className="flex flex-col gap-y-1.5 md:items-end md:text-right max-w-[320px] md:ml-auto py-1"
    >
      <p
        id={questionId}
        className="text-xs font-semibold text-white light:text-slate-900"
      >
        {question}
      </p>
      {consequences && (
        <p
          id={consequencesId}
          className="text-xs font-normal text-theme-text-secondary"
        >
          {consequences}
        </p>
      )}
      <div className="flex items-center gap-x-2">
        <button
          type="button"
          onClick={() => !busy && onCancel()}
          aria-disabled={busy || undefined}
          className="min-h-[44px] md:min-h-[32px] px-3 rounded-lg text-xs font-medium border border-zinc-500 light:border-slate-500 text-white light:text-slate-900 hover:bg-white/10 light:hover:bg-slate-100 aria-disabled:opacity-60 aria-disabled:cursor-not-allowed transition-colors duration-quick ease-smooth"
        >
          {t("settings-pages.cancel")}
        </button>
        <button
          type="button"
          // Takes focus from the button it replaces.
          autoFocus
          onClick={() => !busy && onConfirm()}
          aria-describedby={consequences ? consequencesId : undefined}
          aria-disabled={busy || undefined}
          aria-busy={busy || undefined}
          className={`inline-flex items-center gap-x-1.5 min-h-[44px] md:min-h-[32px] px-3 rounded-lg text-xs font-medium aria-disabled:opacity-60 aria-disabled:cursor-wait transition-colors duration-quick ease-smooth ${
            danger
              ? "bg-red-600 hover:bg-red-700 text-[#ffffff]"
              : "bg-zinc-50 light:bg-slate-900 text-zinc-950 light:text-[#ffffff] hover:opacity-80"
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
 * Returns focus to the button that opened an inline confirmation once it
 * closes without removing the row (cancel, Escape or a failed request).
 *
 * @param {string|null} confirming - key of the action being confirmed
 * @param {Record<string, import("react").RefObject<HTMLElement>>} triggers
 */
export function useConfirmFocusReturn(confirming, triggers) {
  const last = useRef(null);
  useEffect(() => {
    if (confirming) {
      last.current = confirming;
      return;
    }
    if (!last.current) return;
    const key = last.current;
    last.current = null;
    triggers[key]?.current?.focus();
  }, [confirming]);
}

/**
 * After a row is removed from the list, focus the row that took its place (or
 * the previous one), falling back to the page heading.
 *
 * @param {import("react").RefObject<HTMLElement>} tbodyRef
 * @param {number} index - index the removed row had
 * @param {import("react").RefObject<HTMLElement>} fallbackRef
 */
export function focusAfterRemoval(tbodyRef, index, fallbackRef) {
  setTimeout(() => {
    const rows = tbodyRef.current?.querySelectorAll(":scope > tr[data-row]");
    const row = rows?.[Math.min(index, rows.length - 1)];
    const target = row?.querySelector("button, a[href]");
    (target || fallbackRef.current)?.focus();
  }, 0);
}
