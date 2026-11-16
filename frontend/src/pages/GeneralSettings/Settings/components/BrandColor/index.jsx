import { useEffect, useState } from "react";
import Admin from "@/models/admin";
import showToast from "@/utils/toast";
import { useTranslation } from "react-i18next";

const DEFAULT_BRAND_COLOR = "#2563eb";

export default function BrandColor() {
  const { t } = useTranslation();
  const [hasChanges, setHasChanges] = useState(false);
  const [brandColor, setBrandColor] = useState("");

  useEffect(() => {
    Admin.systemPreferencesByFields(["brand_color"]).then(({ settings }) => {
      setBrandColor(settings?.brand_color || "");
    });
  }, []);

  async function handleUpdate(e) {
    e.preventDefault();
    const { success, error } = await Admin.updateSystemPreferences({
      brand_color: brandColor || null,
    });
    if (!success) {
      showToast(`Failed to update brand color: ${error}`, "error", {
        clear: true,
      });
      return;
    }
    showToast(
      "Brand color updated. It will reflect on the chat embed widget.",
      "success",
      { clear: true }
    );
    setHasChanges(false);
  }

  async function clearBrandColor() {
    setBrandColor("");
    await Admin.updateSystemPreferences({ brand_color: null });
    showToast("Brand color cleared.", "success", { clear: true });
    setHasChanges(false);
  }

  const handleChange = (value) => {
    setBrandColor(value);
    setHasChanges(true);
  };

  return (
    <form
      className="flex flex-col gap-y-0.5 my-4 border-t border-white border-opacity-20 light:border-black/20 pt-6"
      onSubmit={handleUpdate}
    >
      <p className="text-sm leading-6 font-semibold text-white">
        {t("customization.items.brand-color.title")}
      </p>
      <p className="text-xs text-white/60">
        {t("customization.items.brand-color.description")}
      </p>
      <div className="flex items-center gap-x-3 mt-2">
        <input
          type="color"
          aria-label="Brand color picker"
          className="h-10 w-14 cursor-pointer rounded-lg bg-theme-settings-input-bg border-none p-1"
          value={brandColor || DEFAULT_BRAND_COLOR}
          onChange={(e) => handleChange(e.target.value)}
        />
        <input
          type="text"
          name="brand_color"
          className="border-none bg-theme-settings-input-bg text-white placeholder:text-theme-settings-input-placeholder text-sm rounded-lg focus:outline-primary-button active:outline-primary-button outline-none block w-fit py-2 px-4"
          placeholder={DEFAULT_BRAND_COLOR}
          autoComplete="off"
          value={brandColor}
          onChange={(e) => handleChange(e.target.value)}
        />
        {brandColor !== "" && (
          <button
            type="button"
            onClick={clearBrandColor}
            className="text-white text-base font-medium hover:text-opacity-60"
          >
            Clear
          </button>
        )}
      </div>
      {hasChanges && (
        <button
          type="submit"
          className="transition-all mt-2 w-fit duration-300 border border-slate-200 px-5 py-2.5 rounded-lg text-white text-sm items-center flex gap-x-2 hover:bg-slate-200 hover:text-slate-800 focus:ring-gray-800"
        >
          Save
        </button>
      )}
    </form>
  );
}
