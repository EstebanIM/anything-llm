import { useState, useEffect } from "react";
import System from "@/models/system";
import { DEFAULT_APP_NAME } from "@/utils/constants/brand";
import { setBrandName as setGlobalBrandName } from "@/i18n";

function readCachedName() {
  try {
    const raw = window.localStorage.getItem(System.cacheKeys.customAppName);
    if (!raw) return "";
    const { appName } = JSON.parse(raw);
    return appName || "";
  } catch {
    return "";
  }
}

export default function useCustomAppName() {
  const [brandName, setBrandName] = useState(
    () => readCachedName() || DEFAULT_APP_NAME
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    System.fetchCustomAppName().then(({ appName }) => {
      const resolved = appName || DEFAULT_APP_NAME;
      setBrandName(resolved);
      setGlobalBrandName(resolved);
      setLoading(false);
    });
  }, []);

  return { brandName, loading };
}
