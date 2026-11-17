import React, { createContext, useContext, useMemo } from "react";

const AvailableVariablesContext = createContext([]);

/**
 * Named flow variables from the start block. A repeated name (flagged in the
 * start block) is listed once, so pickers never show the same entry twice.
 */
export function AvailableVariablesProvider({ blocks, children }) {
  const variables = useMemo(() => {
    const startBlock = blocks.find((b) => b.type === "start");
    const seen = new Set();
    return (startBlock?.config?.variables || []).filter((v) => {
      if (!v.name || seen.has(v.name)) return false;
      seen.add(v.name);
      return true;
    });
  }, [blocks]);

  return (
    <AvailableVariablesContext.Provider value={variables}>
      {children}
    </AvailableVariablesContext.Provider>
  );
}

export function useAvailableVariables() {
  return useContext(AvailableVariablesContext);
}
