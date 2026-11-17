import { useRef, useState } from "react";
import showToast from "@/utils/toast";

/**
 * Submit flow shared by the data connectors.
 * - One collection at a time (a ref, so a double Enter cannot slip through).
 * - A pending toast, then the outcome both as a toast and kept in the panel.
 * - On success the form is reset; forms holding state listen to `onReset`.
 *
 * `run(formData)` resolves to `{ error }` or `{ message, type? }`, where type
 * is "success" (default) or "warning" (partial import).
 */
export default function useConnectorSubmit({ pending } = {}) {
  const [busy, setBusy] = useState(false);
  const [outcome, setOutcome] = useState(null);
  const busyRef = useRef(false);

  async function collect(formEl, run) {
    if (busyRef.current) return;
    busyRef.current = true;
    setBusy(true);
    setOutcome(null);
    if (pending) showToast(pending, "info", { clear: true, autoClose: false });

    try {
      const result = await run(new FormData(formEl));
      if (result?.error) {
        showToast(result.error, "error", { clear: true });
        setOutcome({ type: "error", message: result.error });
        return;
      }
      const type = result?.type ?? "success";
      showToast(result?.message, type, { clear: true });
      setOutcome({ type, message: result?.message });
      formEl.reset();
    } catch (e) {
      console.error(e);
      showToast(e.message, "error", { clear: true });
      setOutcome({ type: "error", message: e.message });
    } finally {
      busyRef.current = false;
      setBusy(false);
    }
  }

  return { busy, outcome, collect };
}
