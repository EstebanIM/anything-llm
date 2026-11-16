import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { defaultNS, resources } from "./locales/resources";
import { DEFAULT_APP_NAME } from "./utils/constants/brand";

const BRAND_CACHE_KEY = "anythingllm_custom_app_name";

function readCachedBrandName() {
  try {
    const raw = window.localStorage.getItem(BRAND_CACHE_KEY);
    if (!raw) return "";
    const { appName } = JSON.parse(raw);
    return appName || "";
  } catch {
    return "";
  }
}

let currentBrandName = readCachedBrandName() || DEFAULT_APP_NAME;

export function getBrandName() {
  return currentBrandName;
}

export function setBrandName(name) {
  const next = name || DEFAULT_APP_NAME;
  if (next === currentBrandName) return;
  currentBrandName = next;
  i18next.emit("languageChanged");
}

const brandPostProcessor = {
  type: "postProcessor",
  name: "brand",
  process: (value) => {
    if (typeof value !== "string" || !value.includes("{{brandName}}"))
      return value;
    return value.replace(/\{\{\s*brandName\s*\}\}/g, currentBrandName);
  },
};

i18next
  // https://github.com/i18next/i18next-browser-languageDetector/blob/9efebe6ca0271c3797bc09b84babf1ba2d9b4dbb/src/index.js#L11
  .use(initReactI18next) // Initialize i18n for React
  .use(LanguageDetector)
  .use(brandPostProcessor)
  .init({
    fallbackLng: "en",
    debug: import.meta.env.DEV,
    defaultNS,
    resources,
    lowerCaseLng: true,
    interpolation: {
      escapeValue: false,
    },
    postProcess: ["brand"],
  });

export default i18next;
