/**
 * Field look for the router dialogs, matching the lib/Modal inputs: 3:1
 * border in both themes, no `outline-none` (the global focus ring applies),
 * 16px text and 44px height below md.
 */
export const ROUTER_FIELD =
  "block w-full text-base md:text-sm rounded-lg bg-zinc-800 border border-zinc-500 text-zinc-100 placeholder:text-zinc-400 light:bg-white light:border-slate-500 light:text-slate-900 light:placeholder:text-slate-500 focus:border-sky-500 light:focus:border-sky-500 disabled:opacity-50 disabled:cursor-not-allowed";

export const ROUTER_CONTROL = `${ROUTER_FIELD} h-11 md:h-[34px] px-3.5`;

export const ROUTER_LABEL =
  "text-sm font-medium leading-5 text-zinc-50 light:text-slate-700";

export const ROUTER_HINT =
  "text-xs leading-4 text-zinc-400 light:text-slate-600";

/** Light filled button used for the page actions ("New router", "Add rule"). */
export const ROUTER_ACTION_BUTTON =
  "border-none shrink-0 flex items-center justify-center min-h-[44px] md:min-h-0 md:h-9 px-5 py-2.5 rounded-lg bg-slate-50 text-zinc-950 text-sm font-medium leading-5 hover:opacity-90 transition-opacity duration-quick ease-smooth";

/** Icon-only row action: 44px target below md. */
export const ROUTER_ICON_BUTTON =
  "border-none bg-transparent flex items-center justify-center w-11 h-11 md:w-7 md:h-7 rounded-md text-zinc-400 light:text-slate-600 transition-colors duration-quick ease-smooth";
