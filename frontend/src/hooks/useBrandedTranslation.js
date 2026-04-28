import { useTranslation } from "react-i18next";
import useCustomAppName from "./useCustomAppName";

export default function useBrandedTranslation(ns) {
  const { t, i18n } = useTranslation(ns);
  const { brandName } = useCustomAppName();
  const tb = (key, opts = {}) => t(key, { brandName, ...opts });
  return { t: tb, i18n, brandName };
}
