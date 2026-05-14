import { REFETCH_LOGO_EVENT } from "@/LogoContext";
import System from "@/models/system";
import showToast from "@/utils/toast";
import { useEffect, useRef, useState } from "react";
import { Plus } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";

const LOGO_THEMES = ["dark", "light"];

export default function CustomLogo() {
  const { t } = useTranslation();
  const [logos, setLogos] = useState({ dark: "", light: "" });
  const [isDefaultLogo, setIsDefaultLogo] = useState({
    dark: true,
    light: true,
  });
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

    const formData = new FormData();
    formData.append("logo", file);
    const { success, error } = await System.uploadLogo(formData, theme);
    if (!success) {
      showToast(`Failed to upload logo: ${error}`, "error");
      const { logoURL } = await System.fetchLogo(theme);
      setLogos((prev) => ({ ...prev, [theme]: logoURL || "" }));
      return;
    }

    const { logoURL } = await System.fetchLogo(theme);
    setLogos((prev) => ({ ...prev, [theme]: logoURL || "" }));
    setIsDefaultLogo((prev) => ({ ...prev, [theme]: false }));
    window.dispatchEvent(new Event(REFETCH_LOGO_EVENT));
    showToast("Image uploaded successfully.", "success");
  };

  const handleRemoveLogo = async (theme) => {
    setLogos((prev) => ({ ...prev, [theme]: "" }));
    setIsDefaultLogo((prev) => ({ ...prev, [theme]: true }));

    const { success, error } = await System.removeCustomLogo(theme);
    if (!success) {
      console.error("Failed to remove logo:", error);
      showToast(`Failed to remove logo: ${error}`, "error");
      const { logoURL } = await System.fetchLogo(theme);
      const _isDefaultLogo = await System.isDefaultLogo(theme);
      setLogos((prev) => ({ ...prev, [theme]: logoURL || "" }));
      setIsDefaultLogo((prev) => ({
        ...prev,
        [theme]: _isDefaultLogo ?? true,
      }));
      return;
    }

    const { logoURL } = await System.fetchLogo(theme);
    const _isDefaultLogo = await System.isDefaultLogo(theme);
    setLogos((prev) => ({ ...prev, [theme]: logoURL || "" }));
    setIsDefaultLogo((prev) => ({
      ...prev,
      [theme]: _isDefaultLogo ?? true,
    }));
    window.dispatchEvent(new Event(REFETCH_LOGO_EVENT));
    showToast("Image successfully removed.", "success");
  };

  const triggerFileInputClick = (theme) => {
    fileInputRefs.current?.[theme]?.click();
  };

  return (
    <div className="flex flex-col gap-y-0.5 my-4">
      <p className="text-sm leading-6 font-semibold text-white">
        {t("customization.items.logo.title")}
      </p>
      <p className="text-xs text-white/60">
        {t("customization.items.logo.description")}
      </p>
      <div className="mt-3 grid grid-cols-1 gap-4 xl:grid-cols-2">
        {LOGO_THEMES.map((theme) => (
          <LogoUploader
            key={theme}
            theme={theme}
            logo={logos[theme]}
            isDefaultLogo={isDefaultLogo[theme]}
            fileInputRef={(el) => {
              fileInputRefs.current[theme] = el;
            }}
            onUpload={(event) => handleFileUpload(event, theme)}
            onReplace={() => triggerFileInputClick(theme)}
            onRemove={() => handleRemoveLogo(theme)}
            t={t}
          />
        ))}
      </div>
    </div>
  );
}

function LogoUploader({
  theme,
  logo,
  isDefaultLogo,
  fileInputRef,
  onUpload,
  onReplace,
  onRemove,
  t,
}) {
  const inputId = `logo-upload-${theme}`;

  return (
    <div className="flex min-w-0 flex-col gap-y-2">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-white/80">
          {t(`customization.items.logo.${theme}.title`)}
        </p>
        <p className="text-xs text-white/50">
          {t(`customization.items.logo.${theme}.description`)}
        </p>
      </div>
      {isDefaultLogo ? (
        <label
          htmlFor={inputId}
          className="transition-all duration-300 hover:opacity-80"
        >
          <input
            id={inputId}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={onUpload}
          />
          <div className="h-[130px] w-full max-w-80 cursor-pointer rounded-2xl border-2 border-dashed border-theme-text-secondary border-opacity-60 bg-theme-settings-input-bg px-4 py-4 inline-flex items-center justify-center">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="rounded-full bg-white/40">
                <Plus className="w-6 h-6 text-black/80 m-2" />
              </div>
              <div className="text-theme-text-primary text-opacity-80 text-sm font-semibold py-1">
                {t("customization.items.logo.add")}
              </div>
              <div className="text-theme-text-secondary text-opacity-60 text-xs font-medium py-1">
                {t("customization.items.logo.recommended")}
              </div>
            </div>
          </div>
        </label>
      ) : (
        <div className="group relative h-[130px] w-full max-w-80 overflow-hidden">
          <img
            src={logo}
            alt={t(`customization.items.logo.${theme}.alt`)}
            className="h-full w-full rounded-2xl border-2 border-theme-text-secondary border-opacity-60 object-contain p-3"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center gap-y-3 rounded-2xl border-2 border-transparent bg-black bg-opacity-80 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 hover:border-white">
            <button
              type="button"
              onClick={onReplace}
              className="text-[#FFFFFF] text-base font-medium hover:text-opacity-60 mx-2"
            >
              {t("customization.items.logo.replace")}
            </button>

            <input
              id={inputId}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={onUpload}
              ref={fileInputRef}
            />
            <button
              type="button"
              onClick={onRemove}
              className="text-[#FFFFFF] text-base font-medium hover:text-opacity-60 mx-2"
            >
              {t("customization.items.logo.remove")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
