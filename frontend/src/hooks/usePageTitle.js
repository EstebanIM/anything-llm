import { useEffect } from "react";
import { setPageTitle } from "@/hooks/useCustomBrowserAppearance";

/**
 * Names the current screen in the browser tab: "Iniciar sesión · IASMAR".
 * Restores the base title when the screen unmounts.
 * @param {string|null} title - already translated
 */
export default function usePageTitle(title) {
  useEffect(() => {
    setPageTitle(title);
    return () => setPageTitle(null);
  }, [title]);
}
