import { useRef, useState } from "react";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import showToast from "@/utils/toast";
import { serverErrorMessage } from "@/utils/serverErrors";

/**
 * Submit flow shared by the data connectors.
 * - One collection at a time (a ref, so a double Enter cannot slip through).
 * - A pending toast while it runs (the panel can be closed meanwhile).
 * - The outcome is kept in the panel; it is also a toast only when the
 *   panel was closed before the collection finished.
 * - On success the form is reset; forms holding state listen to `onReset`.
 *
 * `run(formData)` resolves to `{ error }` or `{ message, type? }`, where type
 * is "success" (default) or "warning" (partial import).
 */
export default function useConnectorSubmit({ pending } = {}) {
  const { t } = useTranslation();
  const [busy, setBusy] = useState(false);
  const [outcome, setOutcome] = useState(null);
  const busyRef = useRef(false);

  async function collect(formEl, run) {
    if (busyRef.current) return;
    busyRef.current = true;
    setBusy(true);
    setOutcome(null);
    const pendingId = pending
      ? showToast(pending, "info", { clear: true, autoClose: false })
      : null;

    const finish = (type, message) => {
      if (pendingId !== null) toast.dismiss(pendingId);
      setOutcome({ type, message });
      if (!formEl.isConnected) showToast(message, type);
    };

    try {
      const result = await run(new FormData(formEl));
      if (result?.error) {
        finish(
          "error",
          serverErrorMessage(result.error, t, "notices.collect-failed")
        );
        return;
      }
      finish(result?.type ?? "success", result?.message);
      formEl.reset();
    } catch (e) {
      finish("error", serverErrorMessage(e, t, "notices.collect-failed"));
    } finally {
      busyRef.current = false;
      setBusy(false);
    }
  }

  return { busy, outcome, collect };
}
