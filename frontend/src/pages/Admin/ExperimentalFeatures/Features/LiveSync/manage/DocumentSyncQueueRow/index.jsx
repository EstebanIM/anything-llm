import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { EyeOff } from "lucide-react";
import { stripUuidAndJsonFromString } from "@/components/Modals/ManageWorkspace/Documents/Directory/utils";
import System from "@/models/system";
import showToast from "@/utils/toast";
import { formatDateTime, formatRelative } from "@/utils/dates";
import InlineConfirm, {
  CELL,
  MOBILE_LABEL,
  ROW,
  ROW_ACTION,
  ROW_ACTIONS,
  ROW_HEADER,
  useConfirmFocusReturn,
} from "@/pages/Admin/Users/AdminTable";

export default function DocumentSyncQueueRow({ queue, onRemoved }) {
  const { t } = useTranslation();
  const [confirming, setConfirming] = useState(null);
  const [busy, setBusy] = useState(false);
  const unwatchRef = useRef(null);
  useConfirmFocusReturn(confirming, { unwatch: unwatchRef });
  const name = stripUuidAndJsonFromString(queue.workspaceDoc.filename);

  const handleUnwatch = async () => {
    setBusy(true);
    const success =
      await System.experimentalFeatures.liveSync.setWatchStatusForDocument(
        queue.workspaceDoc.workspace.slug,
        queue.workspaceDoc.docpath,
        false
      );
    setBusy(false);
    if (!success) {
      setConfirming(null);
      showToast(t("admin-pages.watched.unwatch-failed", { name }), "error", {
        clear: true,
      });
      return;
    }
    showToast(t("admin-pages.watched.unwatched", { name }), "success", {
      clear: true,
    });
    onRemoved();
  };

  return (
    <tr data-row="" className={ROW}>
      <th scope="row" className={`${ROW_HEADER} break-all md:break-normal`}>
        {name}
      </th>
      <td className={CELL}>
        <span aria-hidden="true" className={MOBILE_LABEL}>
          {t("admin-pages.watched.last-synced")}:{" "}
        </span>
        <span title={formatDateTime(queue.lastSyncedAt)}>
          {formatRelative(queue.lastSyncedAt)}
        </span>
      </td>
      <td className={CELL}>
        <span aria-hidden="true" className={MOBILE_LABEL}>
          {t("admin-pages.watched.next-sync")}:{" "}
        </span>
        {formatDateTime(queue.nextSyncAt)}{" "}
        <span className="text-theme-text-secondary">
          ({formatRelative(queue.nextSyncAt)})
        </span>
      </td>
      <td className={CELL}>
        <span aria-hidden="true" className={MOBILE_LABEL}>
          {t("admin-pages.watched.created")}:{" "}
        </span>
        {formatDateTime(queue.createdAt)}
      </td>
      <td className={`${CELL} pt-2`}>
        {confirming === "unwatch" ? (
          <InlineConfirm
            question={t("admin-pages.watched.unwatch-question", { name })}
            consequences={t("admin-pages.watched.unwatch-consequences")}
            confirmLabel={t("admin-pages.watched.unwatch")}
            danger={false}
            busy={busy}
            onConfirm={handleUnwatch}
            onCancel={() => setConfirming(null)}
          />
        ) : (
          <div className={ROW_ACTIONS}>
            <button
              ref={unwatchRef}
              type="button"
              onClick={() => setConfirming("unwatch")}
              aria-label={t("admin-pages.watched.unwatch-document", { name })}
              title={t("admin-pages.watched.unwatch-document", { name })}
              className={ROW_ACTION}
            >
              <EyeOff
                strokeWidth={1.5}
                className="h-4 w-4"
                aria-hidden="true"
              />
            </button>
          </div>
        )}
      </td>
    </tr>
  );
}
