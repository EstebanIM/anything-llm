import { useEffect, useId, useState } from "react";
import Admin from "@/models/admin";
import showToast from "@/utils/toast";
import { useTranslation } from "react-i18next";
import { FIELD_ERROR, FIELD_INPUT } from "@/components/ProviderFields";
import { BRAND_SECONDARY_BUTTON, BRAND_TEXT_BUTTON } from "../brandButtons";

const DEFAULT_BRAND_COLOR = "#2563eb";
const HEX_COLOR = /^#[0-9a-fA-F]{6}$/;

export default function BrandColor() {
  const { t } = useTranslation();
  const id = useId();
  const [hasChanges, setHasChanges] = useState(false);
  const [saving, setSaving] = useState(false);
  const [brandColor, setBrandColor] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    Admin.systemPreferencesByFields(["brand_color"]).then(({ settings }) => {
      setBrandColor(settings?.brand_color || "");
    });
  }, []);

  async function save(value) {
    setSaving(true);
    const { success, error: apiError } = await Admin.updateSystemPreferences({
      brand_color: value || null,
    });
    setSaving(false);
    if (!success) {
      showToast(
        t("settings-pages.brand-color-failed", { error: apiError }),
        "error",
        { clear: true }
      );
      return false;
    }
    setHasChanges(false);
    return true;
  }

  async function handleUpdate(e) {
    e.preventDefault();
    const value = brandColor.trim();
    if (value && !HEX_COLOR.test(value)) {
      setError(t("settings-pages.brand-color-invalid"));
      document.getElementById(`${id}-input`)?.focus();
      return;
    }
    if (await save(value))
      showToast(t("settings-pages.brand-color-saved"), "success", {
        clear: true,
      });
  }

  async function clearBrandColor() {
    const previous = brandColor;
    setBrandColor("");
    setError(null);
    if (await save("")) {
      showToast(t("settings-pages.brand-color-cleared"), "success", {
        clear: true,
      });
      return;
    }
    setBrandColor(previous);
  }

  const handleChange = (value) => {
    setBrandColor(value);
    setHasChanges(true);
    if (error && (!value || HEX_COLOR.test(value.trim()))) setError(null);
  };

  return (
    <form
      noValidate
      className="flex flex-col gap-y-0.5 my-4 border-t border-white border-opacity-20 light:border-black/20 pt-6"
      onSubmit={handleUpdate}
    >
      <label
        id={`${id}-label`}
        htmlFor={`${id}-input`}
        className="text-sm leading-6 font-semibold text-white"
      >
        {t("customization.items.brand-color.title")}
      </label>
      <p id={`${id}-help`} className="text-xs text-white/60">
        {t("customization.items.brand-color.description")}
      </p>
      <div className="flex flex-wrap items-center gap-3 mt-2">
        <input
          type="color"
          aria-label={t("settings-pages.brand-color-picker")}
          className="h-11 w-14 md:h-10 cursor-pointer rounded-lg bg-theme-settings-input-bg border border-zinc-500 light:border-slate-500 p-1"
          value={HEX_COLOR.test(brandColor) ? brandColor : DEFAULT_BRAND_COLOR}
          onChange={(e) => handleChange(e.target.value)}
        />
        <input
          id={`${id}-input`}
          type="text"
          name="brand_color"
          className={`${FIELD_INPUT} !w-40 font-mono`}
          placeholder={DEFAULT_BRAND_COLOR}
          autoComplete="off"
          spellCheck={false}
          maxLength={7}
          aria-invalid={error ? true : undefined}
          aria-describedby={`${id}-help ${id}-format${error ? ` ${id}-error` : ""}`}
          value={brandColor}
          onChange={(e) => handleChange(e.target.value)}
        />
        {brandColor !== "" && (
          <button
            type="button"
            id={`${id}-clear`}
            aria-labelledby={`${id}-clear ${id}-label`}
            disabled={saving}
            onClick={clearBrandColor}
            className={BRAND_TEXT_BUTTON}
          >
            {t("settings-pages.clear")}
          </button>
        )}
      </div>
      <p id={`${id}-format`} className="text-xs text-white/60 mt-1">
        {t("settings-pages.brand-color-format")}
      </p>
      {error && (
        <p id={`${id}-error`} role="alert" className={FIELD_ERROR}>
          {error}
        </p>
      )}
      {hasChanges && (
        <button
          type="submit"
          disabled={saving}
          aria-busy={saving || undefined}
          className={BRAND_SECONDARY_BUTTON}
        >
          {saving ? t("common.saving") : t("common.save")}
        </button>
      )}
    </form>
  );
}
