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
