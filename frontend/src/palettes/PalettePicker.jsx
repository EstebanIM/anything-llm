import { Check } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { useTranslation } from "react-i18next";

/**
 * Display name of a palette. Built-in palettes have translated names; the
 * ones an admin creates keep the name they were given.
 * @param {(key: string, options?: object) => string} t
 * @param {{key: string, name: string, isInstance?: boolean}} option
 */
export function paletteName(t, { key, name, isInstance }) {
  if (isInstance) return name;
  return t(`settings-pages.palette-${key}`, { defaultValue: name });
}

/**
 * Lets a user pick a color palette. Picking the instance default clears the
 * choice so the user keeps following whatever the admin sets as the default.
 */
export default function PalettePicker({ labelledBy, describedBy }) {
  const { t } = useTranslation();
  const { palette, setPalette, availablePalettes, instancePalettes } =
    useTheme();
  const instanceDefault =
    availablePalettes.find(({ key }) => key === instancePalettes.defaultPalette)
      ?.key ?? "default";

  if (instancePalettes.enforced)
    return (
      <p className="text-xs text-white/60 mt-2">
        {t("customization.items.palette.enforced")}
      </p>
    );

  const hasSelection = availablePalettes.some(({ key }) => key === palette);

  return (
    <PaletteRadioGroup
      labelledBy={labelledBy}
      describedBy={describedBy}
      label={t("customization.items.palette.title")}
    >
      {availablePalettes.map((option, index) => (
        <PaletteButton
          key={option.key}
          name={paletteName(t, option)}
          colors={option.colors}
          selected={palette === option.key}
          tabbable={hasSelection ? palette === option.key : index === 0}
          isDefault={option.key === instanceDefault}
          onClick={() =>
            setPalette(option.key === instanceDefault ? null : option.key)
          }
        />
      ))}
    </PaletteRadioGroup>
  );
}

/**
 * Radio group of palette tiles with a roving tabindex: Tab lands on the
 * checked palette, arrow keys move and select, Home and End jump to the ends.
 * Tiles may hold extra action buttons; those keep their own Tab stops.
 */
export function PaletteRadioGroup({
  labelledBy,
  describedBy,
  label,
  className = "",
  children,
}) {
  function handleKeyDown(e) {
    if (e.target.getAttribute("role") !== "radio") return;
    const radios = [...e.currentTarget.querySelectorAll('[role="radio"]')];
    const current = radios.indexOf(e.target);
    if (current === -1) return;
    const next = {
      ArrowRight: current + 1,
      ArrowDown: current + 1,
      ArrowLeft: current - 1,
      ArrowUp: current - 1,
      Home: 0,
      End: radios.length - 1,
    }[e.key];
    if (next === undefined) return;
    e.preventDefault();
    const target = radios[(next + radios.length) % radios.length];
    target.focus();
    target.click();
  }

  return (
    <div
      role="radiogroup"
      aria-labelledby={labelledBy}
      aria-label={labelledBy ? undefined : label}
      aria-describedby={describedBy}
      onKeyDown={handleKeyDown}
      className={`flex flex-wrap items-center gap-2 mt-2 ${className}`}
    >
      {children}
    </div>
  );
}

/**
 * A selectable palette (role radio). `actions` renders extra icon buttons
 * inside the tile, next to (not inside) the radio.
 */
export function PaletteButton({
  name,
  colors,
  selected,
  tabbable = selected,
  isDefault = false,
  onClick,
  actions = null,
}) {
  const { t } = useTranslation();
  return (
    <div
      className={`flex items-center rounded-lg bg-theme-settings-input-bg border-2 transition-colors duration-quick ease-smooth ${
        selected
          ? "border-sky-400 light:border-sky-700"
          : "border-transparent hover:border-theme-sidebar-border"
      }`}
    >
      <button
        type="button"
        role="radio"
        aria-checked={selected}
        tabIndex={tabbable ? 0 : -1}
        onClick={onClick}
        className="flex items-center gap-x-2 min-h-[44px] md:min-h-0 py-2 px-3 rounded-md text-sm text-white"
      >
        <PaletteSwatch colors={colors} />
        {name}
        {isDefault && (
          <span className="text-xs text-white/60">
            {t("customization.items.palette.default-badge")}
          </span>
        )}
        <Check
          strokeWidth={1.5}
          size={14}
          aria-hidden="true"
          className={`shrink-0 text-sky-400 light:text-sky-700 ${selected ? "" : "invisible"}`}
        />
      </button>
      {actions && (
        <div className="flex items-center gap-x-1 pr-1 md:pr-2 -ml-1">
          {actions}
        </div>
      )}
    </div>
  );
}

export function PaletteSwatch({ colors }) {
  return (
    <span className="flex" aria-hidden="true">
      {[colors.main, colors.accent].map((color, i) => (
        <span
          key={i}
          className="w-3.5 h-3.5 rounded-full border border-white/20 -ml-1 first:ml-0"
          style={{ backgroundColor: color }}
        />
      ))}
    </span>
  );
}
