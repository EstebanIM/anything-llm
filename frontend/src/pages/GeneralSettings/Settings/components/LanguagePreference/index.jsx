import { useId } from "react";
import { useLanguageOptions } from "@/hooks/useLanguageOptions";
import { useTranslation } from "react-i18next";
import { FIELD_SELECT } from "@/components/ProviderFields";

export default function LanguagePreference() {
  const { t } = useTranslation();
  const id = useId();
  const {
    currentLanguage,
    supportedLanguages,
    getLanguageName,
    changeLanguage,
  } = useLanguageOptions();

  return (
    <div className="flex flex-col gap-y-0.5 my-4">
      <label
        htmlFor={`${id}-language`}
        className="text-sm leading-6 font-semibold text-white"
      >
        {t("customization.items.display-language.title")}
      </label>
      <p id={`${id}-language-help`} className="text-xs text-white/60">
        {t("customization.items.display-language.description")}
      </p>
      <select
        id={`${id}-language`}
        name="userLang"
        aria-describedby={`${id}-language-help`}
        className={`${FIELD_SELECT} mt-2 md:w-60`}
        defaultValue={currentLanguage || "en"}
        onChange={(e) => changeLanguage(e.target.value)}
      >
        {supportedLanguages.map((lang) => {
          return (
            <option key={lang} value={lang} lang={lang}>
              {getLanguageName(lang)}
            </option>
          );
        })}
      </select>
    </div>
  );
}
