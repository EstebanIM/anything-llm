import { createContext, useEffect, useState } from "react";
import System from "./models/system";

export const REFETCH_LOGO_EVENT = "refetch-logo";

export const LogoContext = createContext();

export function LogoProvider({ children }) {
  const [logo, setLogo] = useState("");
  const [loginLogo, setLoginLogo] = useState("");
  const [isCustomLogo, setIsCustomLogo] = useState(false);

  async function fetchInstanceLogo() {
    try {
      const { isCustomLogo, logoURL } = await System.fetchLogo();
      if (isCustomLogo && logoURL) {
        setLogo(logoURL);
        setLoginLogo(logoURL);
        setIsCustomLogo(true);
      } else {
        setLogo("");
        setLoginLogo("");
        setIsCustomLogo(false);
      }
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
