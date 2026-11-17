import { useTranslation } from "react-i18next";
import { EyeOff } from "lucide-react";
import { stripUuidAndJsonFromString } from "@/components/Modals/ManageWorkspace/Documents/Directory/utils";
import System from "@/models/system";
import showToast from "@/utils/toast";
import { formatDateTime, formatRelative } from "@/utils/dates";
import { InlineConfirmButton } from "@/components/lib/InlineConfirm";
import {
  CELL,
  MOBILE_LABEL,
  ROW,
  ROW_ACTION,
  ROW_ACTIONS,
  ROW_HEADER,
} from "@/pages/Admin/Users/AdminTable";

export default function DocumentSyncQueueRow({ queue, onRemoved }) {
  const { t } = useTranslation();
  const name = stripUuidAndJsonFromString(queue.workspaceDoc.filename);

  const handleUnwatch = async () => {
    const success =
      await System.experimentalFeatures.liveSync.setWatchStatusForDocument(
        queue.workspaceDoc.workspace.slug,
        queue.workspaceDoc.docpath,
        false
      );
    if (!success) {
      showToast(t("admin-pages.watched.unwatch-failed", { name }), "error", {
        clear: true,
      });
      return false;
    }
    showToast(t("admin-pages.watched.unwatched", { name }), "success", {
      clear: true,
    });
    onRemoved();
    return true;
  };

  return (
    <tr data-row="" className={ROW}>
      {/* Focus lands here when the previous row is removed. */}
      <th
        scope="row"
        tabIndex={-1}
        data-row-focus=""
        className={`${ROW_HEADER} break-all md:break-normal`}
      >
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
        <div className={ROW_ACTIONS}>
          <InlineConfirmButton
            label={t("admin-pages.watched.unwatch-document", { name })}
            icon={EyeOff}
            triggerClassName={ROW_ACTION}
            question={t("admin-pages.watched.unwatch-question", { name })}
            consequences={t("admin-pages.watched.unwatch-consequences")}
            confirmLabel={t("admin-pages.watched.unwatch")}
            danger={false}
            align="end"
            onConfirm={handleUnwatch}
          />
        </div>
      </td>
    </tr>
  );
}
