import { useEffect, useRef, useState } from "react";
import Admin from "@/models/admin";
import System from "@/models/system";
import showToast from "@/utils/toast";
import { useTranslation } from "react-i18next";
import { DEFAULT_APP_NAME } from "@/utils/constants/brand";
import { Plus } from "lucide-react";
const INTERNAL_FAVICON_PATH = "/api/system/favicon";
function isUploadedFaviconUrl(url = null) {
  if (!url?.startsWith(INTERNAL_FAVICON_PATH)) return false;
  try {
    const parsedUrl = new URL(url, window.location.origin);
    return (
      parsedUrl.origin === window.location.origin &&
      parsedUrl.pathname === INTERNAL_FAVICON_PATH &&
      parsedUrl.searchParams.has("filename")
    );
  } catch {
    return false;
  }
}
export default function CustomSiteSettings() {
  const { t } = useTranslation();
  const [hasChanges, setHasChanges] = useState(false);
  const [faviconUrlInput, setFaviconUrlInput] = useState("");
  const [isUploadingFavicon, setIsUploadingFavicon] = useState(false);
  const [settings, setSettings] = useState({
    title: null,
    faviconUrl: null,
  });
  const faviconInputRef = useRef(null);
  useEffect(() => {
    Admin.systemPreferencesByFields([
      "meta_page_title",
      "meta_page_favicon",
    ]).then(({ settings }) => {
      const savedFaviconUrl = settings?.meta_page_favicon ?? null;
      setSettings({
        title: settings?.meta_page_title,
        faviconUrl: savedFaviconUrl,
      });
      setFaviconUrlInput(
        isUploadedFaviconUrl(savedFaviconUrl) ? "" : savedFaviconUrl || ""
      );
    });
  }, []);
  function clearBrowserAppearanceCache() {
    window.localStorage.removeItem(System.cacheKeys.browserAppearance);
  }
  async function handleSiteSettingUpdate(e) {
    e.preventDefault();
    const externalFaviconUrl = faviconUrlInput.trim();
    const uploadedFaviconUrl = isUploadedFaviconUrl(settings.faviconUrl)
      ? settings.faviconUrl
      : null;
    const nextFaviconUrl = externalFaviconUrl || uploadedFaviconUrl || null;
    const previousFaviconUrl = settings.faviconUrl;
    const previousFaviconUrlInput = faviconUrlInput;
    const { success, error } = await Admin.updateSystemPreferences({
      meta_page_title: settings.title ?? null,
      meta_page_favicon: nextFaviconUrl,
    });
    if (!success) {
      setSettings((prev) => ({
        ...prev,
        faviconUrl: previousFaviconUrl,
      }));
      setFaviconUrlInput(previousFaviconUrlInput);
      showToast(`Failed to update site preferences: ${error}`, "error");
      return;
    }
    setSettings((prev) => ({
      ...prev,
      faviconUrl: nextFaviconUrl,
    }));
    setFaviconUrlInput(
      isUploadedFaviconUrl(nextFaviconUrl) ? "" : nextFaviconUrl || ""
    );
    clearBrowserAppearanceCache();
    showToast(
      "Site preferences updated! They will reflect on page reload.",
      "success",
      {
        clear: true,
      }
    );
    setHasChanges(false);
    return;
  }
  async function handleFaviconUpload(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    const previousFaviconUrl = settings.faviconUrl;
    const previousFaviconUrlInput = faviconUrlInput;
    const objectUrl = URL.createObjectURL(file);
    setIsUploadingFavicon(true);
    setSettings((prev) => ({
      ...prev,
      faviconUrl: objectUrl,
    }));
    setFaviconUrlInput("");
    const formData = new FormData();
    formData.append("favicon", file);
    const { success, favicon, error } = await System.uploadFavicon(formData);
    URL.revokeObjectURL(objectUrl);
    event.target.value = "";
    if (!success || !favicon) {
      setSettings((prev) => ({
        ...prev,
        faviconUrl: previousFaviconUrl,
      }));
      setFaviconUrlInput(previousFaviconUrlInput);
      setIsUploadingFavicon(false);
      showToast(`Failed to upload favicon: ${error}`, "error");
      return;
    }
    setSettings((prev) => ({
      ...prev,
      faviconUrl: favicon,
    }));
    setFaviconUrlInput("");
    setHasChanges(false);
    setIsUploadingFavicon(false);
    clearBrowserAppearanceCache();
    showToast("Favicon uploaded successfully.", "success");
  }
  async function handleRemoveFavicon() {
    const previousFaviconUrl = settings.faviconUrl;
    const previousFaviconUrlInput = faviconUrlInput;
    setSettings((prev) => ({
      ...prev,
      faviconUrl: null,
    }));
    setFaviconUrlInput("");
    const { success, error } = await System.removeCustomFavicon();
    if (!success) {
      setSettings((prev) => ({
        ...prev,
        faviconUrl: previousFaviconUrl,
      }));
      setFaviconUrlInput(previousFaviconUrlInput);
      showToast(`Failed to remove favicon: ${error}`, "error");
      return;
    }
    setHasChanges(false);
    clearBrowserAppearanceCache();
    showToast("Favicon removed successfully.", "success");
  }
  const faviconPreviewUrl =
    faviconUrlInput.trim() ||
    (isUploadedFaviconUrl(settings.faviconUrl) ? settings.faviconUrl : null) ||
    "/favicon.png";
  const hasCustomFavicon = Boolean(
    faviconUrlInput.trim() || settings.faviconUrl
  );
  return (
    <form
      className="flex flex-col gap-y-0.5 my-4 border-t border-white border-opacity-20 light:border-black/20 pt-6"
      onSubmit={handleSiteSettingUpdate}
    >
      <p className="text-sm leading-6 font-semibold text-white">
        {t("customization.items.browser-appearance.title")}
      </p>
      <p className="text-xs text-white/60">
        {t("customization.items.browser-appearance.description")}
      </p>

      <div className="w-full max-w-[600px]">
        <p className="text-sm leading-6 font-medium text-white mt-2">
          {t("customization.items.browser-appearance.tab.title")}
        </p>
        <p className="text-xs text-white/60">
          {t("customization.items.browser-appearance.tab.description")}
        </p>
        <div className="flex items-center gap-x-4 w-full">
          <input
            name="meta_page_title"
            type="text"
            className="border-none bg-theme-settings-input-bg mt-2 text-white placeholder:text-theme-settings-input-placeholder text-sm rounded-lg focus:outline-primary-button active:outline-primary-button outline-none block w-full py-2 px-4"
            placeholder={DEFAULT_APP_NAME}
            autoComplete="off"
            onChange={(e) => {
              setHasChanges(true);
              setSettings((prev) => {
                return {
                  ...prev,
                  title: e.target.value,
                };
              });
            }}
            value={settings.title ?? DEFAULT_APP_NAME}
          />
        </div>
      </div>

      <div className="w-full max-w-[600px]">
        <p className="text-sm leading-6 font-medium text-white mt-2">
          {t("customization.items.browser-appearance.favicon.title")}
        </p>
        <p className="text-xs text-white/60">
          {t("customization.items.browser-appearance.favicon.description")}
        </p>
        <div className="flex items-center gap-x-2 w-full">
          <img
            src={faviconPreviewUrl}
            onError={(e) => {
              if (!e.currentTarget.src.endsWith("/favicon.png"))
                e.currentTarget.src = "/favicon.png";
            }}
            className="h-10 w-10 shrink-0 rounded-lg border border-theme-text-secondary border-opacity-30 bg-white object-contain p-1 mt-2"
            alt={t("customization.items.browser-appearance.favicon.alt")}
          />
          <input
            ref={faviconInputRef}
            type="file"
            accept="image/*,.ico"
            className="hidden"
            onChange={handleFaviconUpload}
          />
          <button
            type="button"
            disabled={isUploadingFavicon}
            onClick={() => faviconInputRef.current?.click()}
            className="transition-all mt-2 w-fit duration-300 border border-slate-200 px-3 py-2 rounded-lg text-white text-sm items-center flex gap-x-2 hover:bg-slate-200 hover:text-slate-800 focus:ring-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Plus strokeWidth={1.5} className="h-4 w-4" />
            {hasCustomFavicon
              ? t("customization.items.browser-appearance.favicon.replace")
              : t("customization.items.browser-appearance.favicon.upload")}
          </button>
          {hasCustomFavicon && (
            <button
              type="button"
              onClick={handleRemoveFavicon}
              className="text-white text-base font-medium hover:text-opacity-60 mt-2"
            >
              {t("customization.items.browser-appearance.favicon.remove")}
            </button>
          )}
        </div>
        <p className="text-xs text-white/60 mt-2">
          {t("customization.items.browser-appearance.favicon.recommended")}
        </p>
        <div className="flex items-center gap-x-2">
          <input
            name="meta_page_favicon"
            type="url"
            className="border-none bg-theme-settings-input-bg mt-2 text-white placeholder:text-theme-settings-input-placeholder text-sm rounded-lg focus:outline-primary-button active:outline-primary-button outline-none block w-full py-2 px-4"
            placeholder={t(
              "customization.items.browser-appearance.favicon.placeholder"
            )}
            onChange={(e) => {
              setHasChanges(true);
              setFaviconUrlInput(e.target.value);
            }}
            autoComplete="off"
            value={faviconUrlInput}
          />
          <span className="text-xs text-white/60 mt-2">
            {t("customization.items.browser-appearance.favicon.url")}
          </span>
        </div>
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
