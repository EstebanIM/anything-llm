import { useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

/**
 * Collapsible group of skills inside the tools listbox. The header is an
 * option (Enter or click expands it); since options cannot carry
 * aria-expanded, its accessible name states the count and whether it is open.
 */
export default function SkillSection({
  optionId,
  name,
  expanded,
  onToggle,
  enabledCount,
  totalCount,
  isMcp = false,
  indented = false,
  highlighted = false,
  children,
}) {
  const { t } = useTranslation();
  const ref = useRef(null);
  useEffect(() => {
    if (highlighted) ref.current?.scrollIntoView({ block: "nearest" });
  }, [highlighted]);

  let headerClasses =
    "w-full flex items-center justify-between px-2 py-1 min-h-11 md:min-h-0 rounded cursor-pointer transition-colors duration-quick";
  if (highlighted) headerClasses += " bg-zinc-700/50 light:bg-slate-100";
  else headerClasses += " hover:bg-zinc-700/30 light:hover:bg-slate-50";

  const label = t("chat-input.skills-section", {
    name: isMcp ? `${name} (MCP)` : name,
    enabled: enabledCount,
    total: totalCount,
    state: expanded ? t("chat-input.expanded") : t("chat-input.collapsed"),
  });

  return (
    <div role="none" className={indented ? "ml-3" : ""}>
      <div
        ref={ref}
        role="option"
        id={optionId}
        aria-selected={highlighted}
        aria-label={label}
        className={headerClasses}
        onClick={onToggle}
      >
        <div className="flex items-center gap-1.5">
          <ChevronDown
            strokeWidth={1.5}
            size={10}
            aria-hidden="true"
            className={`text-zinc-400 light:text-slate-500 transition-transform duration-quick ${
              expanded ? "" : "-rotate-90"
            }`}
          />
          <span className="text-[10px] font-semibold uppercase tracking-wide text-zinc-400 light:text-slate-500">
            {name}
          </span>
          {isMcp && (
            <span className="text-[8px] px-1 py-px rounded bg-zinc-600/50 light:bg-slate-200 text-zinc-300 light:text-slate-600 font-medium leading-tight">
              MCP
            </span>
          )}
        </div>
        <span className="text-[10px] text-zinc-400 light:text-slate-500 tabular-nums">
          {enabledCount}/{totalCount}
        </span>
      </div>
      {expanded && (
        <div role="none" className="pl-3">
          {children}
        </div>
      )}
    </div>
  );
}
