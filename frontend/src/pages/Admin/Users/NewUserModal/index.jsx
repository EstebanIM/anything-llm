import React, { useState } from "react";
import Admin from "@/models/admin";
import showToast from "@/utils/toast";
import { serverErrorParts } from "@/utils/serverErrors";
import { ACCOUNT_ERRORS } from "@/utils/authErrors";
import ServerErrorDetail from "@/components/lib/ServerErrorDetail";
import {
  MessageLimitInput,
  RoleSelect,
  parseMessageLimit,
} from "../UserFields";
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

export default function NewUserModal({ currUser, closeModal, onSuccess }) {
  const { t } = useTranslation();
  const [error, setError] = useState(null);
  const [busy, setBusy] = useState(false);
  const [role, setRole] = useState("default");
  const [messageLimit, setMessageLimit] = useState({
    enabled: false,
    limit: 10,
  });

  const handleCreate = async (e) => {
    e.preventDefault();
    if (busy) return;
    setError(null);
    const data = {};
    const form = new FormData(e.target);
    for (var [key, value] of form.entries()) data[key] = value;
    const dailyMessageLimit = parseMessageLimit(messageLimit, role);
    // The number field is required while the limit is on, so the browser
    // already blocks an empty or invalid value; this is a last guard.
    if (dailyMessageLimit === undefined) return;
    data.dailyMessageLimit = dailyMessageLimit;

    setBusy(true);
    const { user, error } = await Admin.newUser(data);
    setBusy(false);
    if (!user) {
      setError(
        serverErrorParts(error, t, "settings-pages.form-error", {
          known: ACCOUNT_ERRORS,
        })
      );
      return;
    }
    showToast(
      t("admin-pages.users.created-toast", { username: user.username }),
      "success",
      { clear: true }
    );
    onSuccess?.();
    closeModal();
  };

  return (
    <form onSubmit={handleCreate} className="flex flex-col gap-y-5">
      <ModalHeader
        title={t("admin-pages.users.new-title")}
        onClose={closeModal}
      />
      <ModalBody>
        <ModalInput
          label={t("profile_settings.username")}
          name="username"
          type="text"
          minLength={USERNAME_MIN_LENGTH}
          maxLength={USERNAME_MAX_LENGTH}
          pattern={USERNAME_PATTERN}
          required={true}
          autoComplete="off"
          hint={t("common.username_requirements")}
        />
        <ModalInput
          label={t("admin-pages.users.initial-password")}
          name="password"
          type="password"
          required={true}
          autoComplete="new-password"
          minLength={8}
          hint={t("admin-pages.users.initial-password-hint")}
        />
        <ModalTextarea
          label={t("admin-pages.users.bio")}
          optional={true}
          name="bio"
          autoComplete="off"
          rows={3}
        />
        <RoleSelect
          actorRole={currUser?.role}
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
          {t("admin-pages.users.add")}
        </ModalPrimaryButton>
      </ModalFooter>
    </form>
  );
}
