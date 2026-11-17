import { useState } from "react";
import { useTranslation } from "react-i18next";
import Admin from "@/models/admin";
import EditUserModal from "./EditUserModal";
import showToast from "@/utils/toast";
import { serverErrorMessage } from "@/utils/serverErrors";
import { formatDateTime } from "@/utils/dates";
import { useModal } from "@/hooks/useModal";
import Modal from "@/components/lib/Modal";
import { InlineConfirmButton } from "@/components/lib/InlineConfirm";
import {
  CELL,
  MOBILE_LABEL,
  ROW,
  ROW_ACTION,
  ROW_ACTION_DANGER,
  ROW_ACTION_WARNING,
  ROW_ACTIONS,
  ROW_HEADER,
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
  // While one action asks for confirmation, the other actions step aside.
  const [openAction, setOpenAction] = useState(null);
  const trackOpen = (key) => (open) =>
    setOpenAction((current) => (open ? key : current === key ? null : current));
  const shows = (key) => !openAction || openAction === key;

  const canModify = (
    MANAGEABLE_ROLES[currUser?.role || "default"] ?? []
  ).includes(user.role);
  const isSelf = currUser?.id === user.id;
  const suspended = user.suspended === 1;
  const username = user.username;

  // Resolves to false either way: the row stays, so the panel closes and
  // focus goes back to the (relabelled) button.
  const handleSuspend = async () => {
    const { success, error } = await Admin.updateUser(user.id, {
      suspended: suspended ? 0 : 1,
    });
    if (!success) {
      showToast(
        serverErrorMessage(
          error,
          t,
          suspended
            ? "admin-pages.users.unsuspend-failed"
            : "admin-pages.users.suspend-failed",
          { values: { username } }
        ),
        "error",
        { clear: true }
      );
      return false;
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
    return false;
  };

  const handleDelete = async () => {
    const { success, error } = await Admin.deleteUser(user.id);
    if (!success) {
      showToast(
        serverErrorMessage(error, t, "admin-pages.users.delete-failed", {
          values: { username },
        }),
        "error",
        { clear: true }
      );
      return false;
    }
    showToast(t("admin-pages.users.deleted", { username }), "success", {
      clear: true,
    });
    onDeleted();
    return true;
  };

  return (
    <>
      <tr data-row="" className={ROW}>
        {/* Focus lands here when the previous row is deleted. */}
        <th scope="row" tabIndex={-1} data-row-focus="" className={ROW_HEADER}>
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
          {canModify && (
            <div className={ROW_ACTIONS}>
              {!openAction && (
                <button
                  type="button"
                  onClick={openModal}
                  aria-label={t("admin-pages.users.edit-user", { username })}
                  className={ROW_ACTION}
                >
                  {t("admin-pages.users.edit")}
                </button>
              )}
              {!isSelf && shows("suspend") && (
                <InlineConfirmButton
                  label={t(
                    suspended
                      ? "admin-pages.users.unsuspend-user"
                      : "admin-pages.users.suspend-user",
                    { username }
                  )}
                  text={t(
                    suspended
                      ? "admin-pages.users.unsuspend"
                      : "admin-pages.users.suspend"
                  )}
                  triggerClassName={suspended ? ROW_ACTION : ROW_ACTION_WARNING}
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
                  align="end"
                  onConfirm={handleSuspend}
                  onOpenChange={trackOpen("suspend")}
                />
              )}
              {!isSelf && shows("delete") && (
                <InlineConfirmButton
                  label={t("admin-pages.users.delete-user", { username })}
                  text={t("settings-pages.delete")}
                  triggerClassName={ROW_ACTION_DANGER}
                  question={t("admin-pages.users.delete-question", {
                    username,
                  })}
                  consequences={t("admin-pages.users.delete-consequences")}
                  confirmLabel={t("settings-pages.delete")}
                  align="end"
                  onConfirm={handleDelete}
                  onOpenChange={trackOpen("delete")}
                />
              )}
            </div>
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
