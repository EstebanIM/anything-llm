import i18n from "@/i18n";
import { formatDate } from "@/utils/dates";

/**
 * Shared row styling for the document lists.
 * Selected rows use the accent fill: in light mode sky-700 with white text
 * (5.9:1), replacing the old `.file-row.selected` sky-500 fill (2.8:1).
 */
export const ROW_BASE =
  "border-b border-zinc-800 light:border-slate-200 last:border-b-0 transition-colors duration-quick ease-smooth";

export const ROW_ACCENT =
  "bg-sky-500/20 text-slate-50 light:bg-sky-700 light:text-white";

export const ROW_IDLE =
  "text-slate-100 light:text-slate-900 hover:bg-zinc-800 light:hover:bg-slate-200";

/** Secondary text inside a row, readable on both the idle and accent fills. */
export function rowSecondaryText(accent) {
  return accent
    ? "text-slate-300 light:text-sky-100"
    : "text-zinc-400 light:text-slate-600";
}

/** Small status chip ("Fijado", "En caché"). */
export function rowChip(accent) {
  return `shrink-0 inline-flex items-center gap-x-1 rounded-full px-2 py-0.5 text-[11px] font-medium ${
    accent
      ? "bg-white/15 text-slate-50 light:bg-white light:text-sky-800"
      : "bg-zinc-700 text-slate-100 light:bg-slate-200 light:text-slate-800"
  }`;
}

/**
 * Document dates come from the collector as locale strings; show them in the
 * UI language when they parse, and as they are otherwise.
 * @param {string} value
 */
export function displayDate(value) {
  if (!value) return "";
  // The collector writes "unknown" when it cannot read the file date.
  if (/^unknown$/i.test(String(value).trim()))
    return i18n.t("notices.date-unknown");
  return formatDate(value) || String(value);
}
