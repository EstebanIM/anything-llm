import { useId } from "react";
import { useTheme } from "@/hooks/useTheme";
import { useTranslation } from "react-i18next";
import PalettePicker from "@/palettes/PalettePicker";
import { FIELD_SELECT } from "@/components/ProviderFields";

export default function ThemePreference() {
  const { t } = useTranslation();
  const id = useId();
  const { theme, setTheme, availableThemes } = useTheme();

  return (
    <div className="flex flex-col gap-y-0.5 my-4">
      <label
        htmlFor={`${id}-theme`}
        className="text-sm leading-6 font-semibold text-white"
      >
        {t("customization.items.theme.title")}
      </label>
      <p id={`${id}-theme-help`} className="text-xs text-white/60">
        {t("customization.items.theme.description")}
      </p>
      <select
        id={`${id}-theme`}
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        aria-describedby={`${id}-theme-help`}
        className={`${FIELD_SELECT} mt-2 md:w-60`}
      >
        {Object.entries(availableThemes).map(([key, value]) => (
          <option key={key} value={key}>
            {value}
          </option>
        ))}
      </select>
      <p
        id={`${id}-palette`}
        className="text-sm leading-6 font-semibold text-white mt-4"
      >
        {t("customization.items.palette.title")}
      </p>
      <p id={`${id}-palette-help`} className="text-xs text-white/60">
        {t("customization.items.palette.description")}
      </p>
      <PalettePicker
        labelledBy={`${id}-palette`}
        describedBy={`${id}-palette-help`}
      />
    </div>
  );
}
