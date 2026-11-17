import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Trash2 } from "lucide-react";
import Admin from "@/models/admin";
import showToast from "@/utils/toast";
import { serverErrorMessage } from "@/utils/serverErrors";
import { formatDateTime } from "@/utils/dates";
import CopyButton from "@/components/lib/CopyButton";
import { InlineConfirmButton } from "@/components/lib/InlineConfirm";
import {
  CELL,
  MOBILE_LABEL,
  ROW,
  ROW_ACTION_DANGER,
  ROW_ACTIONS,
  ROW_HEADER,
} from "@/pages/Admin/Users/AdminTable";

const STATUS_STYLES = {
  pending: "bg-sky-600/20 text-sky-300 light:text-sky-800",
  claimed: "bg-green-600/20 text-green-300 light:text-green-800",
  disabled: "bg-zinc-500/20 text-zinc-300 light:text-slate-700",
};

export function inviteLink(invite) {
  return `${window.location.origin}/accept-invite/${invite.code}`;
}

export default function InviteRow({ invite, onUpdated, onRevoked }) {
  const { t } = useTranslation();
  const [revokeOpen, setRevokeOpen] = useState(false);
  const created = formatDateTime(invite.createdAt);
  const status = invite.status;

  const handleRevoke = async () => {
    const { success, error } = await Admin.disableInvite(invite.id);
    if (!success) {
      showToast(
        serverErrorMessage(error, t, "admin-pages.invites.revoke-failed"),
        "error",
        { clear: true }
      );
      return false;
    }
    showToast(t("admin-pages.invites.revoked"), "success", { clear: true });
    // The row stays ("Disabled") without actions: focus moves on.
    onRevoked?.();
    onUpdated({ status: "disabled" });
    return true;
  };

  return (
    <tr data-row="" className={ROW}>
      {/* Focus lands here when the previous row is revoked. */}
      <th scope="row" tabIndex={-1} data-row-focus="" className={ROW_HEADER}>
        <span
          className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${
            STATUS_STYLES[status] ?? STATUS_STYLES.disabled
          }`}
        >
          {t(`admin-pages.invites.status-${status}`, { defaultValue: status })}
        </span>
      </th>
      <td className={CELL}>
        <span aria-hidden="true" className={MOBILE_LABEL}>
          {t("admin-pages.invites.accepted-by")}:{" "}
        </span>
        {invite.claimedBy
          ? invite.claimedBy?.username || t("admin-pages.invites.deleted-user")
          : t("admin-pages.invites.not-claimed")}
      </td>
      <td className={CELL}>
        <span aria-hidden="true" className={MOBILE_LABEL}>
          {t("admin-pages.invites.created-by")}:{" "}
        </span>
        {invite.createdBy?.username || t("admin-pages.invites.deleted-user")}
      </td>
      <td className={CELL}>
        <span aria-hidden="true" className={MOBILE_LABEL}>
          {t("admin-pages.invites.created")}:{" "}
        </span>
        {created}
      </td>
      <td className={`${CELL} pt-2`}>
        {status === "pending" && (
          <div className={ROW_ACTIONS}>
            {!revokeOpen && (
              <CopyButton
                text={inviteLink(invite)}
                label={t("admin-pages.invites.copy-link", { date: created })}
              />
            )}
            <InlineConfirmButton
              label={t("admin-pages.invites.revoke-invite", { date: created })}
              icon={Trash2}
              triggerClassName={ROW_ACTION_DANGER}
              question={t("admin-pages.invites.revoke-question")}
              consequences={t("admin-pages.invites.revoke-consequences")}
              confirmLabel={t("admin-pages.invites.revoke")}
              align="end"
              onConfirm={handleRevoke}
              onOpenChange={setRevokeOpen}
            />
          </div>
        )}
      </td>
    </tr>
  );
}
