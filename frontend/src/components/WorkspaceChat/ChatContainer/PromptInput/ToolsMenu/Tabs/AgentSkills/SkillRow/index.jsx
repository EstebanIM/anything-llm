import { useRef, useEffect } from "react";
import { SimpleToggleSwitch } from "@/components/lib/Toggle";

/**
 * A toggleable skill in the tools listbox. The option carries the on/off state
 * with aria-checked; the switch drawn next to it is decorative and inert.
 */
export default function SkillRow({
  optionId,
  name,
  enabled,
  onToggle,
  highlighted = false,
  disabled = false,
}) {
  const ref = useRef(null);
  useEffect(() => {
    if (highlighted) ref.current?.scrollIntoView({ block: "nearest" });
  }, [highlighted]);

  let classNames =
    "w-full flex items-center justify-between px-2 py-1 min-h-11 md:min-h-0 rounded transition-colors duration-quick";
  if (highlighted) classNames += " bg-zinc-700/50 light:bg-slate-100";
  else classNames += " hover:bg-zinc-700/50 light:hover:bg-slate-100";

  if (disabled) classNames += " opacity-60 cursor-not-allowed";
  else classNames += " cursor-pointer";
  return (
    <div
      ref={ref}
      role="option"
      id={optionId}
      aria-selected={highlighted}
      aria-checked={enabled}
      aria-disabled={disabled || undefined}
      className={classNames}
      onClick={() => !disabled && onToggle()}
    >
      <span className="text-xs text-white light:text-slate-900">{name}</span>
      <div className="pointer-events-none" aria-hidden="true" inert="">
        <SimpleToggleSwitch size="sm" enabled={enabled} />
      </div>
    </div>
  );
}
