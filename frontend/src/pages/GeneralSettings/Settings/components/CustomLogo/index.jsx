import { REFETCH_LOGO_EVENT } from "@/LogoContext";
import System from "@/models/system";
import showToast from "@/utils/toast";
import { useEffect, useId, useRef, useState } from "react";
import { LoaderCircle, Plus } from "lucide-react";
import { useTranslation } from "react-i18next";
import ConfirmModal from "@/components/lib/ConfirmModal";
import { BRAND_SECONDARY_BUTTON, BRAND_TEXT_BUTTON } from "../brandButtons";

const LOGO_THEMES = ["dark", "light"];

/** The upload or replace button of a variant, which survives every state change. */
function focusUploadButton(theme) {
  setTimeout(
    () =>
      document
        .querySelector(`[data-logo-upload="${theme}"]`)
        ?.focus({ preventScroll: true }),
    0
  );
}

export default function CustomLogo() {
  const { t } = useTranslation();
  const [logos, setLogos] = useState({ dark: "", light: "" });
  const [isDefaultLogo, setIsDefaultLogo] = useState({
    dark: true,
    light: true,
  });
  const [uploading, setUploading] = useState({ dark: false, light: false });
  const [pendingRemove, setPendingRemove] = useState(null);
  const [removing, setRemoving] = useState(false);
  const fileInputRefs = useRef({});

  useEffect(() => {
    async function logoInit() {
      const [darkLogo, lightLogo, darkIsDefault, lightIsDefault] =
        await Promise.all([
          System.fetchLogo("dark"),
          System.fetchLogo("light"),
          System.isDefaultLogo("dark"),
          System.isDefaultLogo("light"),
        ]);

      setLogos({
        dark: darkLogo.logoURL || "",
        light: lightLogo.logoURL || "",
      });
      setIsDefaultLogo({
        dark: darkIsDefault ?? true,
        light: lightIsDefault ?? true,
      });
    }
    logoInit();
  }, []);

  const handleFileUpload = async (event, theme) => {
    const file = event.target.files[0];
    if (!file) return false;

    const objectURL = URL.createObjectURL(file);
    setLogos((prev) => ({ ...prev, [theme]: objectURL }));
    setUploading((prev) => ({ ...prev, [theme]: true }));

    const formData = new FormData();
    formData.append("logo", file);
    const { success, error } = await System.uploadLogo(formData, theme);
    // Allow picking the same file again after a failure.
    event.target.value = "";
    setUploading((prev) => ({ ...prev, [theme]: false }));
    if (!success) {
      showToast(t("settings-pages.logo-upload-failed", { error }), "error");
      const { logoURL } = await System.fetchLogo(theme);
      setLogos((prev) => ({ ...prev, [theme]: logoURL || "" }));
      focusUploadButton(theme);
      return;
    }

    const { logoURL } = await System.fetchLogo(theme);
    setLogos((prev) => ({ ...prev, [theme]: logoURL || "" }));
    setIsDefaultLogo((prev) => ({ ...prev, [theme]: false }));
    window.dispatchEvent(new Event(REFETCH_LOGO_EVENT));
    showToast(t("settings-pages.logo-uploaded"), "success");
    focusUploadButton(theme);
  };

  const handleRemoveLogo = async (theme) => {
    setRemoving(true);
    const { success, error } = await System.removeCustomLogo(theme);
    const { logoURL } = await System.fetchLogo(theme);
    const _isDefaultLogo = await System.isDefaultLogo(theme);
    setRemoving(false);
    setPendingRemove(null);
    setLogos((prev) => ({ ...prev, [theme]: logoURL || "" }));
    setIsDefaultLogo((prev) => ({
      ...prev,
      [theme]: _isDefaultLogo ?? true,
    }));

    if (!success) {
      console.error("Failed to remove logo:", error);
      showToast(t("settings-pages.logo-remove-failed", { error }), "error");
      return;
    }

    window.dispatchEvent(new Event(REFETCH_LOGO_EVENT));
    showToast(t("settings-pages.logo-removed"), "success");
    // The remove button is gone; continue from this variant's upload button.
    focusUploadButton(theme);
  };

  return (
    <div className="flex flex-col gap-y-0.5 my-4">
      <h2 className="text-sm leading-6 font-semibold text-white">
        {t("customization.items.logo.title")}
      </h2>
      <p className="text-xs text-white/60">
        {t("customization.items.logo.description")}
      </p>
      <p className="text-xs text-white/60">
        {t("settings-pages.logo-formats")}
      </p>
      <div className="mt-3 grid grid-cols-1 gap-4 xl:grid-cols-2">
        {LOGO_THEMES.map((theme) => (
          <LogoUploader
            key={theme}
            theme={theme}
            logo={logos[theme]}
            isDefaultLogo={isDefaultLogo[theme]}
            uploading={uploading[theme]}
            fileInputRef={(el) => {
              fileInputRefs.current[theme] = el;
            }}
            onUpload={(event) => handleFileUpload(event, theme)}
            onPick={() => fileInputRefs.current?.[theme]?.click()}
            onRemove={() => setPendingRemove(theme)}
            t={t}
          />
        ))}
      </div>
      <ConfirmModal
        isOpen={!!pendingRemove}
        title={
          pendingRemove
            ? t(`settings-pages.logo-remove-title-${pendingRemove}`)
            : ""
        }
        confirmLabel={t("customization.items.logo.remove")}
        busy={removing}
        onConfirm={() => handleRemoveLogo(pendingRemove)}
        onCancel={() => setPendingRemove(null)}
      >
        <p>{t("settings-pages.logo-remove-body")}</p>
      </ConfirmModal>
    </div>
  );
}

function LogoUploader({
  theme,
  logo,
  isDefaultLogo,
  uploading,
  fileInputRef,
  onUpload,
  onPick,
  onRemove,
  t,
}) {
  const id = useId();
  const logoPreviewBgClass =
    theme === "dark" ? "bg-zinc-700" : "bg-white light:bg-white";

  return (
    <div className="flex min-w-0 flex-col gap-y-2">
      <div>
        <h3
          id={`${id}-title`}
          className="text-xs font-semibold uppercase tracking-wide text-theme-text-primary"
        >
          {t(`customization.items.logo.${theme}.title`)}
        </h3>
        <p className="text-xs text-theme-text-secondary">
          {t(`customization.items.logo.${theme}.description`)}
        </p>
      </div>
      {/* One file input per variant, always mounted, opened by the buttons below. */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        tabIndex={-1}
        aria-hidden="true"
        onChange={onUpload}
      />
      {isDefaultLogo && !uploading ? (
        <button
          type="button"
          data-logo-upload={theme}
          onClick={onPick}
          className="h-[130px] w-full max-w-80 rounded-2xl border-2 border-dashed border-zinc-500 light:border-slate-500 bg-theme-settings-input-bg px-4 py-4 inline-flex items-center justify-center hover:opacity-80 transition-opacity duration-quick ease-smooth"
        >
          <span className="flex flex-col items-center justify-center text-center">
            <span className="rounded-full bg-white/40" aria-hidden="true">
              <Plus strokeWidth={1.5} className="w-6 h-6 text-black/80 m-2" />
            </span>
            <span className="text-theme-text-primary text-sm font-semibold py-1">
              {t("customization.items.logo.add")}
              <span className="sr-only">
                {" "}
                {t(`settings-pages.logo-variant-${theme}`)}
              </span>
            </span>
            <span className="text-theme-text-secondary text-xs font-medium py-1">
              {t("customization.items.logo.recommended")}
            </span>
          </span>
        </button>
      ) : (
        <div className="flex flex-col gap-y-2">
          <div className="relative h-[130px] w-full max-w-80">
            <img
              src={logo}
              alt={t(`customization.items.logo.${theme}.alt`)}
              className={`h-full w-full rounded-2xl border-2 border-zinc-500 light:border-slate-500 object-contain p-3 ${logoPreviewBgClass} ${uploading ? "opacity-60" : ""}`}
            />
            {uploading && (
              <span
                role="status"
                className="absolute inset-0 flex items-center justify-center gap-x-2 rounded-2xl text-sm font-medium text-white"
              >
                <LoaderCircle
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className="h-4 w-4 animate-spin"
                />
                {t("settings-pages.uploading")}
              </span>
            )}
          </div>
          {!uploading && (
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                data-logo-upload={theme}
                onClick={onPick}
                aria-label={t(`settings-pages.logo-replace-${theme}`)}
                className={`${BRAND_SECONDARY_BUTTON} !mt-0 !px-3 !py-2`}
              >
                {t("customization.items.logo.replace")}
              </button>
              <button
                type="button"
                onClick={onRemove}
                aria-label={t(`settings-pages.logo-remove-${theme}`)}
                className={BRAND_TEXT_BUTTON}
              >
                {t("customization.items.logo.remove")}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
