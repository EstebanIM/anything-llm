import { useEffect, useId, useRef, useState } from "react";
import Admin from "@/models/admin";
import System from "@/models/system";
import showToast from "@/utils/toast";
import { useTranslation } from "react-i18next";
import { DEFAULT_APP_NAME } from "@/utils/constants/brand";
import { LoaderCircle, Plus } from "lucide-react";
import { FIELD_INPUT } from "@/components/ProviderFields";
import { BRAND_SECONDARY_BUTTON, BRAND_TEXT_BUTTON } from "../brandButtons";
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
  const id = useId();
  const [hasChanges, setHasChanges] = useState(false);
  const [saving, setSaving] = useState(false);
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
    setSaving(true);
    const { success, error } = await Admin.updateSystemPreferences({
      meta_page_title: settings.title ?? null,
      meta_page_favicon: nextFaviconUrl,
    });
    setSaving(false);
    if (!success) {
      setSettings((prev) => ({
        ...prev,
        faviconUrl: previousFaviconUrl,
      }));
      setFaviconUrlInput(previousFaviconUrlInput);
      showToast(t("settings-pages.site-failed", { error }), "error");
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
    showToast(t("settings-pages.site-saved"), "success", {
      clear: true,
    });
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
      showToast(t("settings-pages.favicon-upload-failed", { error }), "error");
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
    showToast(t("settings-pages.favicon-uploaded"), "success");
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
      showToast(t("settings-pages.favicon-remove-failed", { error }), "error");
      return;
    }
    setHasChanges(false);
    clearBrowserAppearanceCache();
    showToast(t("settings-pages.favicon-removed"), "success");
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
      <h2 className="text-sm leading-6 font-semibold text-white">
        {t("customization.items.browser-appearance.title")}
      </h2>
      <p className="text-xs text-white/60">
        {t("customization.items.browser-appearance.description")}
      </p>

      <div className="w-full max-w-[600px] flex flex-col">
        <label
          htmlFor={`${id}-title`}
          className="text-sm leading-6 font-medium text-white mt-2"
        >
          {t("customization.items.browser-appearance.tab.title")}
        </label>
        <p id={`${id}-title-help`} className="text-xs text-white/60">
          {t("customization.items.browser-appearance.tab.description")}
        </p>
        <input
          id={`${id}-title`}
          name="meta_page_title"
          type="text"
          aria-describedby={`${id}-title-help`}
          className={`${FIELD_INPUT} mt-2`}
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

      <div className="w-full max-w-[600px] flex flex-col">
        <h3 className="text-sm leading-6 font-medium text-white mt-4">
          {t("customization.items.browser-appearance.favicon.title")}
        </h3>
        <p id={`${id}-favicon-help`} className="text-xs text-white/60">
          {t("customization.items.browser-appearance.favicon.description")}
        </p>
        <div className="flex flex-wrap items-center gap-2 w-full mt-2">
          <img
            src={faviconPreviewUrl}
            onError={(e) => {
              if (!e.currentTarget.src.endsWith("/favicon.png"))
                e.currentTarget.src = "/favicon.png";
            }}
            className="h-10 w-10 shrink-0 rounded-lg border border-theme-text-secondary border-opacity-30 bg-white object-contain p-1"
            alt={t("customization.items.browser-appearance.favicon.alt")}
          />
          <input
            ref={faviconInputRef}
            type="file"
            accept="image/*,.ico"
            className="hidden"
            tabIndex={-1}
            aria-hidden="true"
            onChange={handleFaviconUpload}
          />
          <button
            type="button"
            // aria-disabled keeps focus on the button while the upload runs.
            aria-disabled={isUploadingFavicon || undefined}
            aria-busy={isUploadingFavicon || undefined}
            aria-describedby={`${id}-favicon-formats`}
            onClick={() => {
              if (!isUploadingFavicon) faviconInputRef.current?.click();
            }}
            className={`${BRAND_SECONDARY_BUTTON} !mt-0 !px-3 !py-2`}
          >
            {isUploadingFavicon ? (
              <LoaderCircle
                strokeWidth={1.5}
                aria-hidden="true"
                className="h-4 w-4 animate-spin"
              />
            ) : (
              <Plus strokeWidth={1.5} aria-hidden="true" className="h-4 w-4" />
            )}
            {isUploadingFavicon
              ? t("settings-pages.uploading")
              : hasCustomFavicon
                ? t("customization.items.browser-appearance.favicon.replace")
                : t("customization.items.browser-appearance.favicon.upload")}
          </button>
          {hasCustomFavicon && !isUploadingFavicon && (
            <button
              type="button"
              onClick={handleRemoveFavicon}
              className={BRAND_TEXT_BUTTON}
            >
              {t("customization.items.browser-appearance.favicon.remove")}
            </button>
          )}
        </div>
        <p id={`${id}-favicon-formats`} className="text-xs text-white/60 mt-2">
          {t("customization.items.browser-appearance.favicon.recommended")}
        </p>
        <label
          htmlFor={`${id}-favicon-url`}
          className="text-sm leading-6 font-medium text-white mt-3"
        >
          {t("customization.items.browser-appearance.favicon.url")}
        </label>
        <input
          id={`${id}-favicon-url`}
          name="meta_page_favicon"
          type="url"
          aria-describedby={`${id}-favicon-help`}
          className={`${FIELD_INPUT} mt-1`}
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
      </div>

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
