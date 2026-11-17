import { Check, Minus } from "lucide-react";

const BOX_SIZE = {
  sm: "w-4 h-4 rounded",
  md: "w-5 h-5 rounded-md",
};

const HIT_AREA = {
  sm: "w-7 h-7",
  md: "w-11 h-11",
};

/**
 * Tri-state selection box for the document lists.
 *
 * Interactive when `onToggle` is given: a `button role="checkbox"` with its own
 * name, so it works with the keyboard and reads its state. Without `onToggle`
 * it is only the visual box for a row that is itself the checkbox.
 *
 * @param {Object} props
 * @param {"none"|"some"|"all"} [props.state="none"] - Unchecked, mixed, or checked
 * @param {(event: React.MouseEvent) => void} [props.onToggle]
 * @param {string} [props.label] - Accessible name when interactive ("Seleccionar informe.pdf")
 * @param {"sm"|"md"} [props.size="sm"] - `md` is the touch size (44px target)
 * @param {boolean} [props.onAccent=false] - The row behind is the selected accent fill
 * @param {boolean} [props.disabled=false]
 */
export default function SelectionCheckbox({
  state = "none",
  onToggle,
  label,
  size = "sm",
  onAccent = false,
  disabled = false,
}) {
  const checked = state !== "none";
  const iconSize = size === "md" ? 14 : 12;
  const colors = !checked
    ? "border-[1.5px] border-zinc-400 light:border-slate-500 bg-transparent"
    : onAccent
      ? "bg-sky-400 border-[1.5px] border-sky-400 text-zinc-950 light:bg-white light:border-white light:text-sky-700"
      : "bg-sky-400 border-[1.5px] border-sky-400 text-zinc-950 light:bg-sky-700 light:border-sky-700 light:text-white";

  const box = (
    <span
      aria-hidden="true"
      className={`${BOX_SIZE[size]} shrink-0 flex items-center justify-center transition-colors duration-quick ease-smooth ${colors}`}
    >
      {state === "all" && <Check strokeWidth={2.5} size={iconSize} />}
      {state === "some" && <Minus strokeWidth={2.5} size={iconSize} />}
    </span>
  );

  if (!onToggle)
    return (
      <span
        className={`${HIT_AREA[size]} shrink-0 flex items-center justify-center`}
      >
        {box}
      </span>
    );

  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={state === "some" ? "mixed" : state === "all"}
      aria-label={label}
      disabled={disabled}
      onClick={(event) => {
        event.stopPropagation();
        onToggle(event);
      }}
      className={`border-none bg-transparent ${HIT_AREA[size]} shrink-0 flex items-center justify-center rounded-md disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {box}
    </button>
  );
}
