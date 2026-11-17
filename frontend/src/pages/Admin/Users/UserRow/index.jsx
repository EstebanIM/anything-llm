import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Admin from "@/models/admin";
import EditUserModal from "./EditUserModal";
import showToast from "@/utils/toast";
import { formatDateTime } from "@/utils/dates";
import { useModal } from "@/hooks/useModal";
import Modal from "@/components/lib/Modal";
import InlineConfirm, {
  CELL,
  MOBILE_LABEL,
  ROW,
  ROW_ACTION,
  ROW_ACTION_DANGER,
  ROW_ACTION_WARNING,
  ROW_ACTIONS,
  ROW_HEADER,
  useConfirmFocusReturn,
} from "../AdminTable";
import { MANAGEABLE_ROLES, useRoleLabel } from "../UserFields";

export default function UserRow({
  currUser,
  user,
  onUpdated,
  onDeleted,
  onEdited,
}) {
  const { t } = useTranslation();
  const roleLabel = useRoleLabel();
  const { isOpen, openModal, closeModal } = useModal();
  const [confirming, setConfirming] = useState(null);
  const [busy, setBusy] = useState(false);
  const suspendRef = useRef(null);
  const deleteRef = useRef(null);
  useConfirmFocusReturn(confirming, { suspend: suspendRef, delete: deleteRef });

  const canModify = (
    MANAGEABLE_ROLES[currUser?.role || "default"] ?? []
  ).includes(user.role);
  const isSelf = currUser?.id === user.id;
  const suspended = user.suspended === 1;
  const username = user.username;

  const handleSuspend = async () => {
    setBusy(true);
    const { success, error } = await Admin.updateUser(user.id, {
      suspended: suspended ? 0 : 1,
    });
    setBusy(false);
    setConfirming(null);
    if (!success) {
      showToast(
        t(
          suspended
            ? "admin-pages.users.unsuspend-failed"
            : "admin-pages.users.suspend-failed",
          { username, error: error || t("admin-pages.unknown-error") }
        ),
        "error",
        { clear: true }
      );
      return;
    }
    showToast(
      t(
        suspended
          ? "admin-pages.users.unsuspended"
          : "admin-pages.users.suspended-toast",
        { username }
      ),
      "success",
      { clear: true }
    );
    onUpdated({ suspended: suspended ? 0 : 1 });
  };

  const handleDelete = async () => {
    setBusy(true);
    const { success, error } = await Admin.deleteUser(user.id);
    setBusy(false);
    if (!success) {
      setConfirming(null);
      showToast(
        t("admin-pages.users.delete-failed", {
          username,
          error: error || t("admin-pages.unknown-error"),
        }),
        "error",
        {
          clear: true,
        }
      );
      return;
    }
    showToast(t("admin-pages.users.deleted", { username }), "success", {
      clear: true,
    });
    onDeleted();
  };

  return (
    <>
      <tr data-row="" className={ROW}>
        <th scope="row" className={ROW_HEADER}>
          {username}
          {isSelf && (
            <span className="ml-1 font-normal text-theme-text-secondary">
              {t("admin-pages.users.you")}
            </span>
          )}
        </th>
        <td className={CELL}>
          <span aria-hidden="true" className={MOBILE_LABEL}>
            {t("admin-pages.users.role")}:{" "}
          </span>
          {roleLabel(user.role)}
        </td>
        <td className={CELL}>
          <span aria-hidden="true" className={MOBILE_LABEL}>
            {t("admin-pages.users.status")}:{" "}
          </span>
          <StatusBadge suspended={suspended} />
        </td>
        <td className={CELL}>
          <span aria-hidden="true" className={MOBILE_LABEL}>
            {t("admin-pages.users.created")}:{" "}
          </span>
          {formatDateTime(user.createdAt)}
        </td>
        <td className={`${CELL} pt-2`}>
          {confirming === "suspend" ? (
            <InlineConfirm
              question={t(
                suspended
                  ? "admin-pages.users.unsuspend-question"
                  : "admin-pages.users.suspend-question",
                { username }
              )}
              consequences={t(
                suspended
                  ? "admin-pages.users.unsuspend-consequences"
                  : "admin-pages.users.suspend-consequences"
              )}
              confirmLabel={t(
                suspended
                  ? "admin-pages.users.unsuspend"
                  : "admin-pages.users.suspend"
              )}
              danger={!suspended}
              busy={busy}
              onConfirm={handleSuspend}
              onCancel={() => setConfirming(null)}
            />
          ) : confirming === "delete" ? (
            <InlineConfirm
              question={t("admin-pages.users.delete-question", { username })}
              consequences={t("admin-pages.users.delete-consequences")}
              confirmLabel={t("settings-pages.delete")}
              busy={busy}
              onConfirm={handleDelete}
              onCancel={() => setConfirming(null)}
            />
          ) : (
            canModify && (
              <div className={ROW_ACTIONS}>
                <button
                  type="button"
                  onClick={openModal}
                  aria-label={t("admin-pages.users.edit-user", { username })}
                  className={ROW_ACTION}
                >
                  {t("admin-pages.users.edit")}
                </button>
                {!isSelf && (
                  <>
                    <button
                      ref={suspendRef}
                      type="button"
                      onClick={() => setConfirming("suspend")}
                      aria-label={t(
                        suspended
                          ? "admin-pages.users.unsuspend-user"
                          : "admin-pages.users.suspend-user",
                        { username }
                      )}
                      className={suspended ? ROW_ACTION : ROW_ACTION_WARNING}
                    >
                      {t(
                        suspended
                          ? "admin-pages.users.unsuspend"
                          : "admin-pages.users.suspend"
                      )}
                    </button>
                    <button
                      ref={deleteRef}
                      type="button"
                      onClick={() => setConfirming("delete")}
                      aria-label={t("admin-pages.users.delete-user", {
                        username,
                      })}
                      className={ROW_ACTION_DANGER}
                    >
                      {t("settings-pages.delete")}
                    </button>
                  </>
                )}
              </div>
            )
          )}
        </td>
      </tr>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <EditUserModal
          currentUser={currUser}
          user={user}
          closeModal={closeModal}
          onSuccess={onEdited}
        />
      </Modal>
    </>
  );
}

function StatusBadge({ suspended }) {
  const { t } = useTranslation();
  return (
    <span
      className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${
        suspended
          ? "bg-red-600/20 text-red-300 light:text-red-800"
          : "bg-green-600/20 text-green-300 light:text-green-800"
      }`}
    >
      {t(
        suspended ? "admin-pages.users.suspended" : "admin-pages.users.active"
      )}
    </span>
  );
}
