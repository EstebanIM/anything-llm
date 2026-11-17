import i18n from "@/i18n";
import { resources as languages } from "@/locales/resources";

/**
 * Name of a language written in that same language ("Español", "English"),
 * so people can find their own language whatever the current UI language is.
 * @param {string} code
 * @returns {string}
 */
function nativeLanguageName(code) {
  try {
    const name = new Intl.DisplayNames([code], { type: "language" }).of(code);
    if (!name) return code;
    return name.charAt(0).toLocaleUpperCase(code) + name.slice(1);
  } catch {
    return code;
  }
}

export function useLanguageOptions() {
  const supportedLanguages = Object.keys(languages);
  const changeLanguage = (newLang = "en") => {
    if (!Object.keys(languages).includes(newLang)) return false;
    i18n.changeLanguage(newLang);
  };

  return {
    currentLanguage: i18n.language || "en",
    supportedLanguages,
    getLanguageName: (lang = "en") => nativeLanguageName(lang),
    changeLanguage,
  };
}
