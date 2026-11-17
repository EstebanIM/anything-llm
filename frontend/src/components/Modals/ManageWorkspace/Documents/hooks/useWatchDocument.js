import { useState } from "react";
import { useTranslation } from "react-i18next";
import System from "@/models/system";
import showToast from "@/utils/toast";

/**
 * Live-sync watch state for a document embedded in a workspace.
 * @param {object} params
 * @param {{slug: string}} params.workspace
 * @param {string} params.docPath `folder/file.json` path of the document
 * @param {object} params.item the document record
 * @returns {{watched: boolean, watchBusy: boolean, toggleWatch: (e?: Event) => Promise<void>}}
 */
export default function useWatchDocument({ workspace, docPath, item }) {
  const { t } = useTranslation();
  const [watched, setWatched] = useState(item?.watched || false);
  const [watchBusy, setWatchBusy] = useState(false);

  const toggleWatch = async (e) => {
    e?.stopPropagation();
    if (watchBusy) return;
    const next = !watched;
    if (next)
      window.dispatchEvent(new CustomEvent("watch_document_for_changes"));
    setWatchBusy(true);
    let success = false;
    try {
      success =
        await System.experimentalFeatures.liveSync.setWatchStatusForDocument(
          workspace.slug,
          docPath,
          next
        );
    } catch (error) {
      console.error(error);
    }
    setWatchBusy(false);

    if (!success) {
      showToast(t("workspace-docs.watch-error"), "error", { clear: true });
      return;
    }
    showToast(
      next
        ? t("workspace-docs.watch-success")
        : t("workspace-docs.unwatch-success"),
      "success",
      { clear: true }
    );
    setWatched(next);
  };

  return { watched, watchBusy, toggleWatch };
}
