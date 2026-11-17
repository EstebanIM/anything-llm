/**
 * Single-choice group of 2-5 options shown as segments (WAI-ARIA radio group).
 * - Tab lands on the checked option; arrow keys move and select; Home / End
 *   jump to the ends.
 * - The checked segment is filled with the accent (3:1 against the track in
 *   both themes) and its text is white, so state never relies on color alone
 *   within the text.
 * - Pass `name` to also submit the value with a native form.
 *
 * @param {Object} props
 * @param {string} props.value - Checked option value
 * @param {(value: string) => void} props.onChange
 * @param {{value: string, label: import("react").ReactNode, disabled?: boolean}[]} props.options
 * @param {string} [props.label] - Accessible name when there is no visible heading
 * @param {string} [props.labelledBy] - id of the visible heading that names the group
 * @param {string} [props.describedBy] - id of help text for the group
 * @param {string} [props.name] - Adds a hidden input with this name for FormData
 * @param {string} [props.className]
 */
export default function SegmentedControl({
  value,
  onChange,
  options = [],
  label,
  labelledBy,
  describedBy,
  name,
  className = "",
}) {
  const enabled = options.filter((option) => !option.disabled);
  const tabbableValue = enabled.some((option) => option.value === value)
    ? value
    : enabled[0]?.value;

  function handleKeyDown(e) {
    const step = {
      ArrowRight: 1,
      ArrowDown: 1,
      ArrowLeft: -1,
      ArrowUp: -1,
    }[e.key];
    const radios = [
      ...e.currentTarget.querySelectorAll('[role="radio"]:not(:disabled)'),
    ];
    const current = radios.indexOf(document.activeElement);
    if (current === -1) return;
    let next;
    if (step !== undefined)
      next = (current + step + radios.length) % radios.length;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = radios.length - 1;
    if (next === undefined) return;
    e.preventDefault();
    radios[next].focus();
    radios[next].click();
  }

  return (
    <div
      role="radiogroup"
      aria-labelledby={labelledBy}
      aria-label={labelledBy ? undefined : label}
      aria-describedby={describedBy}
      onKeyDown={handleKeyDown}
      className={`inline-flex flex-wrap gap-1 p-1 rounded-lg bg-theme-settings-input-bg border border-zinc-500 light:border-slate-500 ${className}`}
    >
      {options.map((option) => {
        const checked = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={checked}
            disabled={option.disabled}
            tabIndex={option.value === tabbableValue ? 0 : -1}
            onClick={() => !checked && onChange?.(option.value)}
            className={`min-h-[44px] md:min-h-[32px] px-4 rounded-md text-sm transition-colors duration-quick ease-smooth disabled:opacity-50 disabled:cursor-not-allowed ${
              checked
                ? "bg-sky-700 text-[#ffffff] font-semibold"
                : "text-zinc-400 light:text-slate-600 hover:text-white hover:bg-white/5 light:hover:text-slate-900 light:hover:bg-slate-200"
            }`}
          >
            {option.label}
          </button>
        );
      })}
      {name && <input type="hidden" name={name} value={value ?? ""} />}
    </div>
  );
}
