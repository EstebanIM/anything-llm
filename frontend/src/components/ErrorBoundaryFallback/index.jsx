import { useEffect, useRef, useState } from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  ChevronRight,
  House,
  RefreshCw,
  RotateCw,
  TriangleAlert,
} from "lucide-react";
import usePageTitle from "@/hooks/usePageTitle";
import CopyButton from "@/components/lib/CopyButton";
import paths from "@/utils/paths";

// A lazy screen whose file no longer exists (the app was updated while open)
// or could not be downloaded, in Chrome, Firefox, Safari and Vite's wording.
const CHUNK_LOAD_ERROR =
  /dynamically imported module|importing a module script failed|failed to load module script|unable to preload css|chunkloaderror|loading (css )?chunk [\w-]+ failed/i;

export function isChunkLoadError(error) {
  return CHUNK_LOAD_ERROR.test(`${error?.name || ""} ${error?.message || ""}`);
}

/** Plain-text report for support: no stack trace, nothing from the session. */
function errorReport(error) {
  const summary = isRouteErrorResponse(error)
    ? `${error.status} ${error.statusText || ""}`.trim()
    : `${error?.name || "Error"}: ${error?.message || String(error ?? "")}`;
  return [
    summary,
    window.location.href,
    new Date().toISOString(),
    navigator.userAgent,
  ].join("\n");
}

/**
 * The router error screen replaces the whole app, ThemeProvider included,
 * and may show before it ever ran: apply the stored theme so the page is not
 * left half dark, half light.
 */
function useStoredTheme() {
  useEffect(() => {
    const root = document.documentElement;
    if (root.hasAttribute("data-theme")) return;
    let stored = null;
    try {
      stored = window.localStorage.getItem("theme");
    } catch {}
    const theme =
      stored === "light" || stored === "dark"
        ? stored
        : stored !== "default" &&
            window.matchMedia?.("(prefers-color-scheme: light)").matches
          ? "light"
          : "dark";
    root.setAttribute("data-theme", theme);
    document.body.classList.toggle("light", theme === "light");
  }, []);
}

const BUTTON =
  "inline-flex items-center justify-center gap-x-2 min-h-[44px] px-4 rounded-lg text-sm font-medium transition-colors duration-quick ease-smooth";
const PRIMARY = `${BUTTON} bg-primary-button text-theme-button-primary-text hover:bg-primary-button-hover`;
const SECONDARY = `${BUTTON} border border-zinc-600 light:border-slate-500 text-theme-text-primary hover:bg-zinc-800 light:hover:bg-slate-100`;

/**
 * Full-page error state: what happened in plain words, a way out (retry,
 * reload, home) and the technical details folded away for support.
 * @param {object} props
 * @param {unknown} props.error
 * @param {() => void} [props.onRetry] - re-render the failed part (error boundary reset)
 */
function ErrorScreen({ error, onRetry }) {
  const { t } = useTranslation();
  const headingRef = useRef(null);
  const [report] = useState(() => errorReport(error));
  const needsReload = isChunkLoadError(error);
  const title = needsReload
    ? t("dialogs.error.update-title")
    : t("dialogs.error.title");
  usePageTitle(title);
  useStoredTheme();

  useEffect(() => {
    headingRef.current?.focus();
  }, []);

  const reload = () => window.location.reload();
  const reloadLabel = needsReload
    ? t("dialogs.error.reload-update")
    : t("dialogs.error.reload");
  const retryFirst = !needsReload && !!onRetry;

  return (
    <main className="min-h-dvh w-full flex items-center justify-center bg-theme-bg-primary px-4 py-8">
      <div className="flex flex-col items-center gap-y-3 w-full max-w-lg text-center">
        <TriangleAlert
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
          {title}
        </h1>
        <p className="text-sm text-theme-text-secondary">
          {needsReload
            ? t("dialogs.error.update-description")
            : t("dialogs.error.description")}
        </p>
        <div className="mt-2 flex flex-col md:flex-row md:flex-wrap md:justify-center gap-2 w-full">
          {retryFirst && (
            <button type="button" onClick={onRetry} className={PRIMARY}>
              <RotateCw strokeWidth={1.5} size={16} aria-hidden="true" />
              {t("server-unavailable.retry")}
            </button>
          )}
          <button
            type="button"
            onClick={reload}
            className={retryFirst ? SECONDARY : PRIMARY}
          >
            <RefreshCw strokeWidth={1.5} size={16} aria-hidden="true" />
            {reloadLabel}
          </button>
          {/* A full load on purpose: a router link does nothing when the
              failure happened on the home page itself. */}
          <a href={paths.home()} className={SECONDARY}>
            <House strokeWidth={1.5} size={16} aria-hidden="true" />
            {t("sidebar-nav.go-home")}
          </a>
        </div>
        <details className="group mt-4 w-full text-left">
          <summary className="list-none [&::-webkit-details-marker]:hidden inline-flex items-center gap-x-1.5 min-h-[44px] md:min-h-[32px] px-2 rounded-lg cursor-pointer text-sm text-theme-text-secondary hover:text-theme-text-primary">
            <ChevronRight
              strokeWidth={1.5}
              size={16}
              aria-hidden="true"
              className="transition-transform duration-quick ease-smooth group-open:rotate-90"
            />
            {t("dialogs.error.details")}
          </summary>
          <div className="mt-2 flex flex-col items-start gap-y-2">
            <pre className="w-full max-h-60 overflow-auto p-3 rounded-lg bg-theme-bg-secondary border border-zinc-700 light:border-slate-300 text-xs font-mono whitespace-pre-wrap break-words text-theme-text-secondary">
              {report}
            </pre>
            <CopyButton
              text={report}
              label={t("dialogs.error.copy-details")}
              showLabel
            />
          </div>
        </details>
      </div>
    </main>
  );
}

/** Fallback for the app-wide react-error-boundary in App.jsx. */
export default function ErrorBoundaryFallback({ error, resetErrorBoundary }) {
  return <ErrorScreen error={error} onRetry={resetErrorBoundary} />;
}

/**
 * `errorElement` of the root route: a lazy screen that failed to load, or an
 * error outside the app's own boundary. Without it React Router shows its
 * developer page (English, with the stack).
 */
export function RouteErrorFallback() {
  const error = useRouteError();
  useEffect(() => {
    console.error(error);
  }, [error]);
  return <ErrorScreen error={error} />;
}
