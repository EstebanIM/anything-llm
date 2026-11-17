import { useCallback, useEffect, useRef, useState } from "react";
import Admin from "@/models/admin";

/**
 * Loads the list of switched-off sub-skills stored in a system preference.
 * `status` is "loading" | "ready" | "error": on error the panel must not
 * render its hidden input, or a page save would switch every sub-skill on.
 * Reloads silently after a save or a cancel (hasChanges true -> false).
 *
 * @param {string} field - system preference label (eg: "disabled_filesystem_skills")
 * @param {boolean} hasChanges - the page's unsaved-changes flag
 */
export default function useDisabledSubSkills(field, hasChanges) {
  const [disabled, setDisabled] = useState([]);
  const [status, setStatus] = useState("loading");
  const prevHasChanges = useRef(hasChanges);

  const load = useCallback(
    async ({ silent = false } = {}) => {
      if (!silent) setStatus("loading");
      const res = await Admin.systemPreferencesByFields([field]);
      if (!res?.settings) {
        if (!silent) setStatus("error");
        return;
      }
      const value = res.settings[field];
      setDisabled(Array.isArray(value) ? value : []);
      setStatus("ready");
    },
    [field]
  );

  useEffect(() => {
    load();
  }, [load]);

  useEffect(() => {
    if (prevHasChanges.current === true && hasChanges === false)
      load({ silent: true });
    prevHasChanges.current = hasChanges;
  }, [hasChanges, load]);

  return { disabled, setDisabled, status, reload: load };
}
