/**
 * Shared classes for provider and settings form fields.
 * - 3:1 boundary in both themes (zinc-500 / slate-500 against the page and fill).
 * - No `outline-none`: the global :focus-visible ring (8:1 dark, 6:1 light) applies.
 * - 16px text and 44px height below md so iOS does not zoom and targets fit a finger.
 */
export const FIELD_INPUT =
  "block w-full rounded-lg border border-zinc-500 light:border-slate-500 bg-theme-settings-input-bg text-white placeholder:text-theme-settings-input-placeholder text-base md:text-sm p-2.5 min-h-[44px] md:min-h-0 disabled:opacity-60 disabled:cursor-not-allowed";

/** Same look as FIELD_INPUT; kept separate so selects can diverge later. */
export const FIELD_SELECT = FIELD_INPUT;

export const FIELD_LABEL = "block text-white text-sm font-semibold mb-3";

/** Help text under a field: link it with aria-describedby. */
export const FIELD_HELP = "mt-2 text-xs text-theme-text-secondary";

/** Inline error under a field: render with role="alert" and aria-invalid on the control. */
export const FIELD_ERROR = "mt-2 text-xs text-red-400 light:text-red-700";

/** Row of fields: stacked on phones, side by side (wrapping) from md up. */
export const FIELD_ROW =
  "w-full flex flex-col md:flex-row md:flex-wrap md:items-start gap-4 md:gap-x-9";

/** One field column inside FIELD_ROW. */
export const FIELD_COL = "flex flex-col w-full md:w-60";
