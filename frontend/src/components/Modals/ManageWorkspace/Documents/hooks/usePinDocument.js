import { useState } from "react";
import { useTranslation } from "react-i18next";
import Workspace from "@/models/workspace";
import showToast from "@/utils/toast";

/**
 * Pin state for a document embedded in a workspace.
 * @param {object} params
 * @param {{slug: string, id: number}} params.workspace
 * @param {string} params.docPath `folder/file.json` path of the document
 * @param {object} params.item the document record
 * @returns {{pinned: boolean, pinBusy: boolean, togglePin: (e?: Event) => Promise<void>}}
 */
export default function usePinDocument({ workspace, docPath, item }) {
  const { t } = useTranslation();
  const [pinned, setPinned] = useState(
    item?.pinnedWorkspaces?.includes(workspace.id) || false
  );
  const [pinBusy, setPinBusy] = useState(false);

  const togglePin = async (e) => {
    e?.stopPropagation();
    if (pinBusy) return;
    const next = !pinned;
    if (next) window.dispatchEvent(new CustomEvent("pinned_document"));
    setPinBusy(true);
    const success = await Workspace.setPinForDocument(
      workspace.slug,
      docPath,
      next
    );
    setPinBusy(false);

    if (!success) {
      showToast(t("workspace-docs.pin-error"), "error", { clear: true });
      return;
    }
    showToast(
      next
        ? t("workspace-docs.pin-success")
        : t("workspace-docs.unpin-success"),
      "success",
      { clear: true }
    );
    setPinned(next);
  };

  return { pinned, pinBusy, togglePin };
}
