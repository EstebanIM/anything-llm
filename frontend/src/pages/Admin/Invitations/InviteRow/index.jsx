import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Trash2 } from "lucide-react";
import Admin from "@/models/admin";
import showToast from "@/utils/toast";
import { formatDateTime } from "@/utils/dates";
import CopyButton from "@/components/lib/CopyButton";
import InlineConfirm, {
  CELL,
  MOBILE_LABEL,
  ROW,
  ROW_ACTION_DANGER,
  ROW_ACTIONS,
  ROW_HEADER,
  useConfirmFocusReturn,
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
  const [confirming, setConfirming] = useState(null);
  const [busy, setBusy] = useState(false);
  const revokeRef = useRef(null);
  useConfirmFocusReturn(confirming, { revoke: revokeRef });
  const created = formatDateTime(invite.createdAt);
  const status = invite.status;

  const handleRevoke = async () => {
    setBusy(true);
    const { success, error } = await Admin.disableInvite(invite.id);
    setBusy(false);
    setConfirming(null);
    if (!success) {
      showToast(
        t("admin-pages.invites.revoke-failed", {
          error: error || t("admin-pages.unknown-error"),
        }),
        "error",
        { clear: true }
      );
      return;
    }
    showToast(t("admin-pages.invites.revoked"), "success", { clear: true });
    onUpdated({ status: "disabled" });
    onRevoked?.();
  };

  return (
    <tr data-row="" className={ROW}>
      <th scope="row" className={ROW_HEADER}>
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
        {confirming === "revoke" ? (
          <InlineConfirm
            question={t("admin-pages.invites.revoke-question")}
            consequences={t("admin-pages.invites.revoke-consequences")}
            confirmLabel={t("admin-pages.invites.revoke")}
            busy={busy}
            onConfirm={handleRevoke}
            onCancel={() => setConfirming(null)}
          />
        ) : (
          status === "pending" && (
            <div className={ROW_ACTIONS}>
              <CopyButton
                text={inviteLink(invite)}
                label={t("admin-pages.invites.copy-link", { date: created })}
              />
              <button
                ref={revokeRef}
                type="button"
                onClick={() => setConfirming("revoke")}
                aria-label={t("admin-pages.invites.revoke-invite", {
                  date: created,
                })}
                title={t("admin-pages.invites.revoke-invite", {
                  date: created,
                })}
                className={ROW_ACTION_DANGER}
              >
                <Trash2
                  strokeWidth={1.5}
                  className="h-4 w-4"
                  aria-hidden="true"
                />
              </button>
            </div>
          )
        )}
      </td>
    </tr>
  );
}
