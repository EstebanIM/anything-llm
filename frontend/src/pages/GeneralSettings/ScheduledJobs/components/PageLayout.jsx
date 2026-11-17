import { useEffect, useRef, useState } from "react";
import Sidebar from "@/components/SettingsSidebar";

/** Settings page shell shared by the job list, run history and run detail. */
export default function PageLayout({ children }) {
  return (
    <div className="w-screen h-screen overflow-hidden bg-zinc-950 light:bg-slate-50 flex">
      <Sidebar />
      <main className="relative md:ml-[2px] md:mr-[16px] md:my-[16px] md:rounded-[16px] bg-zinc-900 light:bg-white w-full h-full md:h-[calc(100%-32px)] overflow-y-auto p-4 md:p-0">
        <div className="flex flex-col w-full px-1 md:pl-6 md:pr-[50px] md:py-6 py-16">
          {children}
        </div>
      </main>
    </div>
  );
}

export const PAGE_TITLE =
  "text-lg leading-7 font-semibold text-zinc-50 light:text-slate-950";

export const PAGE_DESCRIPTION =
  "text-xs leading-4 text-zinc-400 light:text-slate-600 max-w-[700px]";

/** Light text button for page headers (Run now, New job). */
export const HEADER_BUTTON =
  "inline-flex items-center justify-center gap-2 border-none min-h-[44px] md:min-h-0 md:h-9 px-5 rounded-lg bg-zinc-50 text-zinc-950 light:bg-slate-900 light:text-white text-sm font-medium hover:bg-zinc-200 light:hover:bg-slate-800 transition-colors duration-quick ease-smooth aria-disabled:opacity-60 aria-disabled:cursor-not-allowed";

/** Outlined button for secondary page actions (Edit). */
export const HEADER_SECONDARY_BUTTON =
  "inline-flex items-center justify-center gap-2 min-h-[44px] md:min-h-0 md:h-9 px-4 rounded-lg border border-zinc-500 light:border-slate-500 bg-transparent text-zinc-50 light:text-slate-900 text-sm font-medium hover:bg-zinc-800 light:hover:bg-slate-100 transition-colors duration-quick ease-smooth";

/**
 * Round icon button for table rows: 44 px below md, 32 px from md. Add the
 * text color per use (ROW_ICON_MUTED or a status color).
 */
export const ROW_ICON_BUTTON =
  "inline-flex items-center justify-center w-11 h-11 md:w-8 md:h-8 rounded-full transition-colors duration-quick ease-smooth aria-disabled:opacity-50 aria-disabled:cursor-not-allowed";
export const ROW_ICON_MUTED =
  "text-zinc-400 light:text-slate-700 hover:bg-white/10 light:hover:bg-slate-200";

/**
 * Polite live-region text for status changes found while polling. Only
 * entries whose status changed since the previous poll are announced; the
 * first load and new entries stay silent.
 * @param {{key: string|number, status: string, describe: () => string}[]} entries
 * @returns {string} message to render inside an aria-live region
 */
export function useStatusAnnouncer(entries) {
  const previous = useRef(null);
  const [message, setMessage] = useState("");
  const signature = entries.map((e) => `${e.key}:${e.status}`).join("|");

  useEffect(() => {
    const current = new Map(entries.map((e) => [e.key, e.status]));
    if (previous.current) {
      const changes = entries
        .filter(
          (e) =>
            previous.current.has(e.key) &&
            previous.current.get(e.key) !== e.status
        )
        .map((e) => e.describe());
      if (changes.length) setMessage(changes.join(". "));
    }
    previous.current = current;
  }, [signature]);

  return message;
}

/** Visually hidden polite region for `useStatusAnnouncer`. */
export function StatusRegion({ message }) {
  return (
    <div role="status" aria-live="polite" className="sr-only">
      {message}
    </div>
  );
}
