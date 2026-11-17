import React, { useContext, useState } from "react";
import Admin from "@/models/admin";
import showToast from "@/utils/toast";
import { AuthContext } from "@/AuthContext";
import ConfirmModal from "@/components/lib/ConfirmModal";
import ServerErrorDetail from "@/components/lib/ServerErrorDetail";
import { serverErrorParts } from "@/utils/serverErrors";
import { ACCOUNT_ERRORS } from "@/utils/authErrors";
import {
  MessageLimitInput,
  ROLE_RANK,
  RoleSelect,
  parseMessageLimit,
  useRoleLabel,
} from "../../UserFields";
import { useTranslation } from "react-i18next";
import {
  USERNAME_MIN_LENGTH,
  USERNAME_MAX_LENGTH,
  USERNAME_PATTERN,
} from "@/utils/username";
import {
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalPrimaryButton,
  ModalSecondaryButton,
  ModalInput,
  ModalTextarea,
} from "@/components/lib/Modal";

export default function EditUserModal({
  currentUser,
  user,
  closeModal,
  onSuccess,
}) {
  const { t } = useTranslation();
  const roleLabel = useRoleLabel();
  const auth = useContext(AuthContext);
  const [role, setRole] = useState(user.role);
  const [error, setError] = useState(null);
  const [busy, setBusy] = useState(false);
  const [pendingData, setPendingData] = useState(null);
  const [messageLimit, setMessageLimit] = useState({
    enabled: user.dailyMessageLimit !== null,
    limit: user.dailyMessageLimit || 10,
  });
  const isSelf = !!currentUser && currentUser.id === user.id;

  const save = async (data) => {
    setBusy(true);
    const { success, error } = await Admin.updateUser(user.id, data);
    setBusy(false);
    setPendingData(null);
    if (!success) {
      setError(
        serverErrorParts(error, t, "settings-pages.form-error", {
          known: ACCOUNT_ERRORS,
        })
      );
      return;
    }
    if (isSelf) {
      // Keep the signed-in user in step without reloading the app.
      auth?.actions?.updateUser(
        {
          ...currentUser,
          username: data.username,
          bio: data.bio,
          role: data.role,
        },
        auth?.store?.authToken ?? ""
      );
    }
    showToast(
      t("admin-pages.users.updated", { username: data.username }),
      "success",
      { clear: true }
    );
    onSuccess?.();
    closeModal();
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (busy) return;
    setError(null);
    const data = {};
    const form = new FormData(e.target);
    for (var [key, value] of form.entries()) {
      if (!value && key !== "bio") continue;
      data[key] = value;
    }
    const dailyMessageLimit = parseMessageLimit(messageLimit, role);
    if (dailyMessageLimit === undefined) return;
    data.dailyMessageLimit = dailyMessageLimit;

    // Lowering your own role cannot be undone from this account: ask first.
    if (isSelf && ROLE_RANK[data.role] < ROLE_RANK[user.role]) {
      setPendingData(data);
      return;
    }
    await save(data);
  };

  return (
    <>
      <form onSubmit={handleUpdate} className="flex flex-col gap-y-5">
        <ModalHeader
          title={t("admin-pages.users.edit-title", {
            username: user.username,
          })}
          onClose={closeModal}
        />
        <ModalBody>
          <ModalInput
            label={t("profile_settings.username")}
            name="username"
            type="text"
            defaultValue={user.username}
            minLength={USERNAME_MIN_LENGTH}
            maxLength={USERNAME_MAX_LENGTH}
            pattern={USERNAME_PATTERN}
            required={true}
            autoComplete="off"
            hint={t("common.username_requirements")}
          />
          <ModalInput
            label={t("profile_settings.new_password")}
            optional={true}
            name="password"
            type="password"
            autoComplete="new-password"
            minLength={8}
            hint={t("admin-pages.users.new-password-hint")}
          />
          <ModalTextarea
            label={t("admin-pages.users.bio")}
            optional={true}
            name="bio"
            defaultValue={user.bio}
            autoComplete="off"
            rows={3}
          />
          <RoleSelect
            actorRole={currentUser?.role}
            value={role}
            onChange={setRole}
          />
          <MessageLimitInput
            role={role}
            enabled={messageLimit.enabled}
            limit={messageLimit.limit}
            updateState={setMessageLimit}
          />
          {error && (
            <p role="alert" className="text-sm text-red-400 light:text-red-700">
              {error.message}
              <ServerErrorDetail detail={error.detail} />
            </p>
          )}
        </ModalBody>
        <ModalFooter>
          <ModalSecondaryButton onClick={closeModal} type="button">
            {t("settings-pages.cancel")}
          </ModalSecondaryButton>
          <ModalPrimaryButton type="submit" busy={busy}>
            {t("common.save")}
          </ModalPrimaryButton>
        </ModalFooter>
      </form>
      <ConfirmModal
        isOpen={!!pendingData}
        title={t("admin-pages.users.self-demote-title", {
          role: roleLabel(pendingData?.role),
        })}
        confirmLabel={t("admin-pages.users.self-demote-confirm")}
        busy={busy}
        onConfirm={() => save(pendingData)}
        onCancel={() => setPendingData(null)}
      >
        <p>
          {t("admin-pages.users.self-demote-body", {
            role: roleLabel(user.role),
          })}
        </p>
      </ConfirmModal>
    </>
  );
}
