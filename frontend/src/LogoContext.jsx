import { createContext, useEffect, useState } from "react";
import System from "./models/system";

export const REFETCH_LOGO_EVENT = "refetch-logo";

export const LogoContext = createContext();

/**
 * `logo` follows the current theme. `loginLogo` is always the light-theme
 * variant: the sign-in panel and the onboarding welcome are light surfaces in
 * both themes, where the dark-theme logo (white text) would be unreadable.
 */
export function LogoProvider({ children }) {
  const [logo, setLogo] = useState("");
  const [loginLogo, setLoginLogo] = useState("");
  const [isCustomLogo, setIsCustomLogo] = useState(false);

  async function fetchInstanceLogo() {
    try {
      const [current, light] = await Promise.all([
        System.fetchLogo(),
        System.fetchLogo("light"),
      ]);
      const custom = !!(current?.isCustomLogo && current?.logoURL);
      setLogo(custom ? current.logoURL : "");
      setLoginLogo(
        light?.isCustomLogo && light?.logoURL
          ? light.logoURL
          : custom
            ? current.logoURL
            : ""
      );
      setIsCustomLogo(custom || !!(light?.isCustomLogo && light?.logoURL));
    } catch (err) {
      setLogo("");
      setLoginLogo("");
      setIsCustomLogo(false);
      console.error("Failed to fetch logo:", err);
    }
  }

  useEffect(() => {
    fetchInstanceLogo();
    window.addEventListener(REFETCH_LOGO_EVENT, fetchInstanceLogo);
    return () => {
      window.removeEventListener(REFETCH_LOGO_EVENT, fetchInstanceLogo);
    };
  }, []);

  return (
    <LogoContext.Provider value={{ logo, setLogo, loginLogo, isCustomLogo }}>
      {children}
    </LogoContext.Provider>
  );
}
