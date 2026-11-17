import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { RotateCw, ServerOff } from "lucide-react";
import usePageTitle from "@/hooks/usePageTitle";

/**
 * Full-page state shown when the app cannot reach its server while checking
 * the session (instead of spinning forever).
 * @param {object} props
 * @param {() => void} props.onRetry
 */
export default function ServerUnavailable({ onRetry }) {
  const { t } = useTranslation();
  const headingRef = useRef(null);
  usePageTitle(t("server-unavailable.title"));

  useEffect(() => {
    headingRef.current?.focus();
  }, []);

  return (
    <main className="min-h-dvh w-full flex items-center justify-center bg-theme-bg-primary px-4">
      <div className="flex flex-col items-center gap-y-3 max-w-md text-center">
        <ServerOff
          strokeWidth={1.5}
          size={40}
          aria-hidden="true"
          className="text-theme-text-secondary"
        />
        <h1
          ref={headingRef}
          tabIndex={-1}
          className="text-xl font-semibold text-theme-text-primary"
        >
          {t("server-unavailable.title")}
        </h1>
        <p className="text-sm text-theme-text-secondary">
          {t("server-unavailable.description")}
        </p>
        <button
          type="button"
          onClick={onRetry}
          className="mt-2 inline-flex items-center gap-x-2 min-h-[44px] px-4 rounded-lg text-sm font-medium bg-primary-button text-theme-button-primary-text hover:bg-primary-button-hover transition-colors duration-quick ease-smooth"
        >
          <RotateCw strokeWidth={1.5} size={16} aria-hidden="true" />
          {t("server-unavailable.retry")}
        </button>
      </div>
    </main>
  );
}
