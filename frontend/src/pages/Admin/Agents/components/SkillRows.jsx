import { ChevronRight } from "lucide-react";

/** Heading of one list section (skills, imported, flows, MCP). */
export function SectionHeading({ id, icon = null, action = null, children }) {
  return (
    <div className="flex items-center justify-between gap-x-2 text-theme-text-primary">
      <h2
        id={id}
        tabIndex={-1}
        className="flex items-center gap-x-2 text-lg font-medium"
      >
        {icon}
        {children}
      </h2>
      {action}
    </div>
  );
}

/** Card that holds the rows of one section. */
export function RowList({ labelledBy, children }) {
  return (
    <ul
      aria-labelledby={labelledBy}
      className="w-full bg-theme-bg-secondary rounded-xl overflow-hidden"
    >
      {children}
    </ul>
  );
}

/**
 * One selectable row: a real button, so it opens with the keyboard. The open
 * row carries aria-current and a bar in the active-navigation color (3:1 or
 * more in both themes), not only a lighter background.
 */
export function RowButton({
  rowKey,
  selected = false,
  onClick,
  leading = null,
  title,
  status = null,
}) {
  return (
    <li className="border-b border-white/10 light:border-slate-200 last:border-b-0">
      <button
        type="button"
        data-row-key={rowKey}
        aria-current={selected ? "true" : undefined}
        onClick={onClick}
        className={`relative w-full min-h-[44px] py-3 px-4 flex items-center justify-between gap-x-3 text-left transition-colors duration-quick ease-smooth ${
          selected
            ? "bg-white/10 light:bg-slate-100 before:content-[''] before:absolute before:inset-y-0 before:left-0 before:w-1 before:bg-[var(--theme-nav-active)]"
            : "hover:bg-white/5 light:hover:bg-slate-50"
        }`}
      >
        <span
          className={`flex items-center gap-x-2 min-w-0 text-sm text-theme-text-primary ${
            selected ? "font-semibold" : ""
          }`}
        >
          {leading}
          <span className="min-w-0 break-words">{title}</span>
        </span>
        <span className="flex items-center gap-x-2 shrink-0 text-sm font-medium text-theme-text-secondary">
          {status && (
            <>
              <span className="sr-only">, </span>
              {status}
            </>
          )}
          <ChevronRight strokeWidth={1.5} size={14} aria-hidden="true" />
        </span>
      </button>
    </li>
  );
}

/** Empty or info text under a section heading. */
export function SectionEmpty({ children }) {
  return (
    <div className="text-sm text-theme-text-secondary flex flex-col gap-y-1 px-1">
      {children}
    </div>
  );
}
