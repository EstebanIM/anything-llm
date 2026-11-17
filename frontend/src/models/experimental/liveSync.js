import { API_BASE } from "@/utils/constants";
import { baseHeaders } from "@/utils/request";

const LiveDocumentSync = {
  featureFlag: "experimental_live_file_sync",
  toggleFeature: async function (updatedStatus = false) {
    return await fetch(`${API_BASE}/experimental/toggle-live-sync`, {
      method: "POST",
      headers: baseHeaders(),
      body: JSON.stringify({ updatedStatus }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Could not update status.");
        return true;
      })
      .then((res) => res)
      .catch((e) => {
        console.error(e);
        return false;
      });
  },
  /**
   * Watched documents. A failed load is not an empty list: `disabled` when the
   * server refuses because the feature flag is off (401), `error` otherwise.
   * @returns {Promise<{queues: Array, disabled?: boolean, error?: boolean}>}
   */
  queues: async function () {
    return await fetch(`${API_BASE}/experimental/live-sync/queues`, {
      headers: baseHeaders(),
    })
      .then(async (res) => {
        if (res.status === 401) return { queues: [], disabled: true };
        if (!res.ok) throw new Error(`status-${res.status}`);
        const data = await res.json();
        return { queues: data?.queues || [] };
      })
      .catch((e) => {
        console.error(e);
        return { queues: [], error: true };
      });
  },

  // Should be in Workspaces but is here for now while in preview
  setWatchStatusForDocument: async function (slug, docPath, watchStatus) {
    return fetch(`${API_BASE}/workspace/${slug}/update-watch-status`, {
      method: "POST",
      headers: baseHeaders(),
      body: JSON.stringify({ docPath, watchStatus }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            res.statusText || "Error setting watch status for document."
          );
        }
        return true;
      })
      .catch((e) => {
        console.error(e);
        return false;
      });
  },
};

export default LiveDocumentSync;
