import { useEffect } from "react";
import System from "@/models/system";

const DEFAULT_TITLE = "AI Assistant | Your personal LLM trained on anything";
const DEFAULT_FAVICON = "/favicon.png";

function safeUrl(url) {
  if (!url) return null;
  try {
    new URL(url);
    return url;
  } catch {
    return null;
  }
}

function applyTitle(title) {
  document.title = title || DEFAULT_TITLE;
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
    const raw = window.localStorage.getItem(
      System.cacheKeys.browserAppearance
    );
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
