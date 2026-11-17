import { useSyncExternalStore } from "react";

// Matches Tailwind's `md` breakpoint (768px): below it the layout is mobile.
const QUERY = "(max-width: 767.98px)";

function subscribe(onChange) {
  const media = window.matchMedia(QUERY);
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

const getSnapshot = () => window.matchMedia(QUERY).matches;

/**
 * True when the viewport is narrower than Tailwind's `md` breakpoint.
 * Use it instead of react-device-detect's `isMobile` (user agent) for layout:
 * a narrow desktop window or a split-screen tablet needs the mobile layout too,
 * and the md: classes already switch by width.
 */
export default function useIsMobile() {
  return useSyncExternalStore(subscribe, getSnapshot, () => false);
}
