import { useEffect, useState } from "react";
import System from "@/models/system";

export default function useProviderEndpointAutoDiscovery({
  provider = null,
  initialBasePath = "",
  initialAuthToken = null,
  ENDPOINTS = [],
  discoveryTimeout = 2_000,
  fallbackBasePath = null,
}) {
  const [loading, setLoading] = useState(false);
  const [basePath, setBasePath] = useState(initialBasePath);
  const [basePathValue, setBasePathValue] = useState(initialBasePath);

  const [authToken, setAuthToken] = useState(initialAuthToken);
  const [authTokenValue, setAuthTokenValue] = useState(initialAuthToken);
  const [autoDetectAttempted, setAutoDetectAttempted] = useState(false);
  const [autoDetectFailed, setAutoDetectFailed] = useState(false);
  const [showAdvancedControls, setShowAdvancedControls] = useState(true);

  async function autoDetect() {
    setLoading(true);
    setAutoDetectAttempted(true);
    setAutoDetectFailed(false);
    const possibleEndpoints = [];
    ENDPOINTS.forEach((endpoint) => {
      possibleEndpoints.push(
        new Promise((resolve, reject) => {
          System.customModels(provider, authTokenValue, endpoint, discoveryTimeout)
            .then((results) => {
              // Treat "server reachable but no models loaded" as a detectable endpoint.
              if (results?.error === "LMSTUDIO_NO_MODELS_LOADED") {
                resolve({ endpoint, models: [] });
                return;
              }
              if (!results?.models || results.models.length === 0)
                throw new Error("No models");
              resolve({ endpoint, models: results.models });
            })
            .catch(() => {
              reject(`${provider} @ ${endpoint} did not resolve.`);
            });
        })
      );
    });

    const { endpoint, models } = await Promise.any(possibleEndpoints)
      .then((resolved) => resolved)
      .catch(() => {
        console.error("All endpoints failed to resolve.");
        return { endpoint: null, models: null };
      });

    if (models !== null) {
      setBasePath(endpoint);
      setBasePathValue(endpoint);
      setLoading(false);
      setShowAdvancedControls(false);
      return;
    }

    // All probes failed — pre-fill the fallback URL so the user has a starting point.
    if (fallbackBasePath && !basePathValue) {
      setBasePathValue(fallbackBasePath);
    }
    setAutoDetectFailed(true);
    setLoading(false);
    setShowAdvancedControls(true);
  }

  function handleAutoDetectClick(e) {
    e.preventDefault();
    autoDetect();
  }

  function handleBasePathChange(e) {
    const value = e.target.value;
    setBasePathValue(value);
  }

  function handleBasePathBlur() {
    setBasePath(basePathValue);
  }

  function handleAuthTokenChange(e) {
    const value = e.target.value;
    setAuthTokenValue(value);
  }

  function handleAuthTokenBlur() {
    setAuthToken(authTokenValue);
  }

  useEffect(() => {
    if (!initialBasePath && !autoDetectAttempted) autoDetect(true);
  }, [initialBasePath, initialAuthToken, autoDetectAttempted]);

  return {
    autoDetecting: loading,
    autoDetectAttempted,
    autoDetectFailed,
    showAdvancedControls,
    setShowAdvancedControls,
    basePath: {
      value: basePath,
      set: setBasePathValue,
      onChange: handleBasePathChange,
      onBlur: handleBasePathBlur,
    },
    basePathValue: {
      value: basePathValue,
      set: setBasePathValue,
    },
    authToken: {
      value: authToken,
      set: setAuthTokenValue,
      onChange: handleAuthTokenChange,
      onBlur: handleAuthTokenBlur,
    },
    authTokenValue: {
      value: authTokenValue,
      set: setAuthTokenValue,
    },
    handleAutoDetectClick,
    runAutoDetect: autoDetect,
  };
}
