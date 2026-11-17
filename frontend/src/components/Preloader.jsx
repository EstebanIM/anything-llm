import { useTranslation } from "react-i18next";

export default function PreLoader({ size = "16" }) {
  const { t } = useTranslation();
  return (
    <div role="status">
      <div
        aria-hidden="true"
        className={`h-${size} w-${size} animate-spin rounded-full border-4 border-solid border-primary border-t-transparent`}
      ></div>
      <span className="sr-only">{t("common.loading")}</span>
    </div>
  );
}

export function FullScreenLoader() {
  const { t } = useTranslation();
  return (
    <div
      id="preloader"
      role="status"
      className="fixed left-0 top-0 z-999999 flex h-screen w-screen items-center justify-center bg-theme-bg-primary"
    >
      <div
        aria-hidden="true"
        className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-[var(--theme-loader)] border-t-transparent"
      ></div>
      <span className="sr-only">{t("common.loading")}</span>
    </div>
  );
}
