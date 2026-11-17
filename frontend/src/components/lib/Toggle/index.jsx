import { Info } from "lucide-react";

const TOGGLE_STYLES = {
  sm: "h-[12px] w-[20px] after:h-[8px] after:w-[8px] after:top-[2px] after:left-[2px] peer-checked:after:translate-x-full",
  md: "h-[16px] w-[28px] after:h-[12px] after:w-[12px] after:top-[2px] after:left-[2px] peer-checked:after:translate-x-full",
  lg: "h-[19px] w-[36px] after:h-[15px] after:w-[15px] after:top-[2px] after:left-[2px] peer-checked:after:translate-x-[17px]",
};

const LABEL_STYLES = {
  sm: {
    label: "text-[12px] leading-[10px] font-medium mt-[1.5px]",
    description: "text-[10px] leading-[16px] font-normal",
    gap: "gap-[2px]",
  },
  md: {
    label: "text-[14px] leading-[18px] font-medium -mt-[2px]",
    description: "text-[12px] leading-[16px] font-normal",
    gap: "gap-[2px]",
  },
  lg: {
    label: "text-[16px] leading-[14px] font-medium mt-[2.5px]",
    description: "text-[14px] leading-[24px] font-normal",
    gap: "gap-[2px]",
  },
};

/**
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {boolean} [props.enabled] - Controlled checked state
 * @param {(checked: boolean) => void} [props.onChange] - Change handler receiving new checked state
 * @param {boolean} [props.disabled=false] - Whether toggle is disabled
 * @param {"sm" | "md" | "lg"} [props.size="sm"] - Toggle size
 * @param {string} [props.name] - Input name for form submission
 * @param {string} [props.label] - Label text next to toggle
 * @param {string} [props.description] - Description text below label
 * @param {"default" | "horizontal"} [props.variant="default"] - Layout variant
 * @param {string} [props.hint] - Tooltip ID for info icon hint next to label
 * @param {string} [props.value] - Input value for form submission
 * @param {string} [props.labelClassName] - Additional CSS classes for label
 * @param {string} [props.descriptionClassName] - Additional CSS classes for description
 * @param {string} [props.gapClassName] - Additional CSS classes for gap
 * @param {string} [props.describedBy] - id of a help or warning text tied to the switch
 * @param {string} [props.ariaLabel] - accessible name when there is no `label`
 * @param {string} [props.ariaLabelledBy] - id of a visible heading that names the switch
 * @param {string} [props.id] - id of the underlying checkbox
 */
export default function Toggle({
  className,
  enabled,
  onChange,
  disabled = false,
  size = "sm",
  name,
  label,
  description,
  variant = "default",
  hint,
  value,
  labelClassName,
  descriptionClassName,
  gapClassName,
  describedBy,
  ariaLabel,
  ariaLabelledBy,
  id,
}) {
  const inputProps = {
    ...(id ? { id } : {}),
    ...(ariaLabel ? { "aria-label": ariaLabel } : {}),
    ...(ariaLabelledBy ? { "aria-labelledby": ariaLabelledBy } : {}),
    ...(enabled !== undefined
      ? { checked: enabled, onChange: (e) => onChange?.(e.target.checked) }
      : { defaultChecked: false }),
    ...(describedBy ? { "aria-describedby": describedBy } : {}),
  };

  const labelStyles = LABEL_STYLES[size] || LABEL_STYLES.sm;

  if (variant === "horizontal") {
    return (
      <label
        className={`flex items-start justify-between max-w-[700px] ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"} ${className ?? ""}`}
      >
        <TextContent
          label={label}
          description={description}
          labelStyles={labelStyles}
          hint={hint}
          labelClassName={labelClassName}
          descriptionClassName={descriptionClassName}
          gapClassName={gapClassName}
        />
        <div className="shrink-0 ml-4">
          <ToggleSwitch
            name={name}
            disabled={disabled}
            size={size}
            inputProps={inputProps}
            value={value}
          />
        </div>
      </label>
    );
  }

  return (
    <label
      className={`inline-flex items-start ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"} ${className ?? ""}`}
    >
      <ToggleSwitch
        name={name}
        disabled={disabled}
        size={size}
        inputProps={inputProps}
        value={value}
      />
      {(label || description) && (
        <div className="ml-3">
          <TextContent
            label={label}
            description={description}
            labelStyles={labelStyles}
            hint={hint}
            labelClassName={labelClassName}
            descriptionClassName={descriptionClassName}
            gapClassName={gapClassName}
          />
        </div>
      )}
    </label>
  );
}

function ToggleSwitch({ name, disabled, size, inputProps, value }) {
  // The span gives the switch a 44px touch area on phones (the label around it
  // takes the tap); input and track stay siblings so `peer-*` keeps working.
  return (
    <span className="relative inline-flex shrink-0 items-center justify-center min-h-[44px] min-w-[44px] md:min-h-0 md:min-w-0">
      <input
        type="checkbox"
        name={name}
        disabled={disabled}
        className="peer sr-only"
        value={value}
        {...inputProps}
      />
      <div
        className={`
          relative shrink-0 peer pointer-events-none rounded-full
          ${TOGGLE_STYLES[size] || TOGGLE_STYLES.sm}
          after:absolute after:rounded-full after:bg-white
          after:transition-transform after:duration-quick after:ease-smooth after:content-['']
          transition-colors duration-quick ease-smooth
          peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[var(--theme-focus-ring)]
          bg-zinc-500 light:bg-slate-500
          peer-checked:bg-green-400 light:peer-checked:bg-green-600
        `}
      />
    </span>
  );
}

function TextContent({
  label,
  description,
  labelStyles = {},
  hint,
  labelClassName,
  descriptionClassName,
  gapClassName,
}) {
  if (!label && !description) return null;
  return (
    <div className={`flex flex-col ${gapClassName ?? labelStyles.gap}`}>
      {label && (
        <span
          className={`flex items-center gap-x-1 text-white light:text-slate-950 ${labelClassName ?? labelStyles.label}`}
        >
          {label}
          {hint && (
            <Info
              strokeWidth={1.5}
              size={14}
              className="text-theme-text-secondary cursor-pointer"
              data-tooltip-id={hint}
            />
          )}
        </span>
      )}
      {description && (
        <span
          className={`text-zinc-400 light:text-zinc-600 ${descriptionClassName ?? labelStyles.description}`}
        >
          {description}
        </span>
      )}
    </div>
  );
}

/**
 * Simple toggle switch that doesn't use label/input to avoid focus-scroll issues
 */
export function SimpleToggleSwitch({
  className,
  enabled,
  onChange,
  disabled = false,
  size = "sm",
  ariaLabel,
  ariaLabelledBy,
}) {
  const toggle = () => {
    if (disabled) return;
    onChange(!enabled);
  };
  return (
    <div
      role="switch"
      aria-checked={enabled}
      aria-disabled={disabled || undefined}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      tabIndex={0}
      onClick={(e) => {
        e.stopPropagation();
        toggle();
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          e.stopPropagation();
          toggle();
        }
      }}
      className={`
        relative shrink-0 cursor-pointer rounded-full ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
        before:absolute before:content-[''] before:-inset-x-2 before:-inset-y-3.5 md:before:hidden
        ${size === "sm" ? "h-[12px] w-[20px]" : size === "md" ? "h-[16px] w-[28px]" : "h-[19px] w-[36px]"}
        transition-colors duration-quick
        ${enabled ? "bg-green-400 light:bg-green-600" : "bg-zinc-500"}
        ${className ?? ""}
      `}
    >
      <div
        className={`
          absolute top-[2px] left-[2px]
          ${size === "sm" ? "h-[8px] w-[8px]" : size === "md" ? "h-[12px] w-[12px]" : "h-[15px] w-[15px]"}
          rounded-full bg-white
          transition-transform duration-quick ease-smooth
          ${enabled ? "translate-x-full" : "translate-x-0"}
        `}
      />
    </div>
  );
}
