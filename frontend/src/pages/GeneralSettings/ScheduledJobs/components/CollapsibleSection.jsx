import { useId, useState } from "react";
import { ChevronRight } from "lucide-react";
import CopyButton from "@/components/lib/CopyButton";

export const SECTION =
  "border border-zinc-700 light:border-slate-400 rounded-lg overflow-hidden";
export const SECTION_TITLE =
  "text-sm font-medium text-zinc-50 light:text-slate-950 uppercase tracking-[1.4px]";

// Generic expand/collapse panel used by the run-detail page to wrap each
// trace section (thinking, tool calls, response, files). The toggle lives in
// an <h2> so the sections show up in the page outline.
export default function CollapsibleSection({
  title,
  icon: Icon,
  children,
  defaultOpen = false,
  copyText = null,
  copyLabel,
}) {
  const [open, setOpen] = useState(defaultOpen);
  const contentId = useId();
  return (
    <section className={SECTION}>
      <div className="flex items-center justify-between gap-2 pr-2">
        <h2 className="flex-1 min-w-0">
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls={contentId}
            className="border-none w-full min-h-[48px] flex items-center gap-2 px-[18px] text-left text-sm font-medium text-zinc-50 light:text-slate-950 hover:bg-white/5 light:hover:bg-slate-100 transition-colors duration-quick ease-smooth"
          >
            <ChevronRight
              strokeWidth={1.5}
              aria-hidden="true"
              className={`h-4 w-4 shrink-0 transition-transform duration-quick ease-smooth ${
                open ? "rotate-90" : ""
              }`}
            />
            {Icon && (
              <Icon
                strokeWidth={1.5}
                aria-hidden="true"
                className="h-4 w-4 shrink-0"
              />
            )}
            <span>{title}</span>
          </button>
        </h2>
        {copyText && <CopyButton text={copyText} label={copyLabel} />}
      </div>
      <div
        id={contentId}
        hidden={!open}
        className="px-[18px] py-3 border-t border-zinc-700 light:border-slate-400"
      >
        {children}
      </div>
    </section>
  );
}
