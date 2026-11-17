import { useEffect } from "react";
import System from "@/models/system";
import { DEFAULT_APP_NAME } from "@/utils/constants/brand";

const DEFAULT_TITLE = DEFAULT_APP_NAME;
const DEFAULT_FAVICON = "/favicon.png";
const INTERNAL_FAVICON_PATH = "/api/system/favicon";

function isInternalFaviconUrl(url) {
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

function safeUrl(url) {
  if (!url) return null;
  if (isInternalFaviconUrl(url)) return url;

  try {
    new URL(url);
    return url;
  } catch {
    return null;
  }
}

// The base title (custom browser title or brand) and the current page's own
// title are kept apart so a late fetch of the base never drops the page part.
let baseTitle = DEFAULT_TITLE;
let pageTitle = null;

function renderTitle() {
  document.title = pageTitle ? `${pageTitle} · ${baseTitle}` : baseTitle;
}

function applyTitle(title) {
  baseTitle = title || DEFAULT_TITLE;
  renderTitle();
}

/**
 * Sets the page part of `document.title` ("Iniciar sesión · IASMAR"); null
 * goes back to the base title. Use it through `hooks/usePageTitle`.
 * @param {string|null} title
 */
export function setPageTitle(title) {
  pageTitle = title || null;
  renderTitle();
}

function applyFavicon(favicon) {
  const href = safeUrl(favicon) || DEFAULT_FAVICON;
  document
    .querySelectorAll('link[rel="icon"], link[rel="apple-touch-icon"]')
    .forEach((el) => {
      el.href = href;
    });
}

function readCache() {
  try {
    const raw = window.localStorage.getItem(System.cacheKeys.browserAppearance);
    if (!raw) return { title: null, favicon: null };
    const { title, favicon } = JSON.parse(raw);
    return { title: title ?? null, favicon: favicon ?? null };
  } catch {
    return { title: null, favicon: null };
  }
}

export default function useCustomBrowserAppearance() {
  useEffect(() => {
    // Apply cached values synchronously to avoid flash of default title/favicon
    const cached = readCache();
    applyTitle(cached.title);
    applyFavicon(cached.favicon);

    // Then fetch fresh values and re-apply
    System.fetchBrowserAppearance().then(({ title, favicon }) => {
      applyTitle(title);
      applyFavicon(favicon);
    });
  }, []);
}
