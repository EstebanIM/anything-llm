import React, { useState } from "react";
import Admin from "@/models/admin";
import showToast from "@/utils/toast";
import { serverErrorParts } from "@/utils/serverErrors";
import ServerErrorDetail from "@/components/lib/ServerErrorDetail";
import { useTranslation } from "react-i18next";
import {
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalPrimaryButton,
  ModalSecondaryButton,
  ModalInput,
} from "@/components/lib/Modal";

export default function NewWorkspaceModal({ closeModal, onSuccess }) {
  const [error, setError] = useState(null);
  const [busy, setBusy] = useState(false);
  const { t } = useTranslation();

  const handleCreate = async (e) => {
    e.preventDefault();
    if (busy) return;
    setError(null);
    const form = new FormData(e.target);
    setBusy(true);
    const { workspace, error } = await Admin.newWorkspace(form.get("name"));
    setBusy(false);
    if (!workspace) {
      setError(serverErrorParts(error, t, "settings-pages.form-error"));
      return;
    }
    showToast(
      t("admin-pages.workspaces.created-toast", { name: workspace.name }),
      "success",
      { clear: true }
    );
    onSuccess?.();
    closeModal();
  };

  return (
    <form onSubmit={handleCreate} className="flex flex-col gap-y-5">
      <ModalHeader
        title={t("admin-pages.workspaces.new-title")}
        onClose={closeModal}
      />
      <ModalBody>
        <ModalInput
          label={t("common.workspaces-name")}
          name="name"
          type="text"
          minLength={4}
          required={true}
          autoComplete="off"
          error={
            error ? (
              <>
                {error.message}
                <ServerErrorDetail detail={error.detail} />
              </>
            ) : null
          }
          hint={t("admin-pages.workspaces.new-hint")}
        />
      </ModalBody>
      <ModalFooter>
        <ModalSecondaryButton onClick={closeModal} type="button">
          {t("settings-pages.cancel")}
        </ModalSecondaryButton>
        <ModalPrimaryButton type="submit" busy={busy}>
          {t("admin-pages.workspaces.create")}
        </ModalPrimaryButton>
      </ModalFooter>
    </form>
  );
}
