import React, { useEffect, useId, useState } from "react";
import { useTranslation } from "react-i18next";
import Admin from "@/models/admin";
import Workspace from "@/models/workspace";
import CopyButton from "@/components/lib/CopyButton";
import ServerErrorDetail from "@/components/lib/ServerErrorDetail";
import { serverErrorParts } from "@/utils/serverErrors";
import {
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalPrimaryButton,
  ModalSecondaryButton,
  ModalInput,
  ModalHint,
} from "@/components/lib/Modal";
import { inviteLink } from "../InviteRow";

export default function NewInviteModal({ closeModal, onSuccess }) {
  const { t } = useTranslation();
  const [invite, setInvite] = useState(null);
  const [error, setError] = useState(null);
  const [busy, setBusy] = useState(false);
  const [workspaces, setWorkspaces] = useState([]);
  const [selectedWorkspaceIds, setSelectedWorkspaceIds] = useState([]);
  const hintId = useId();

  const handleCreate = async (e) => {
    e.preventDefault();
    if (busy) return;
    setError(null);
    setBusy(true);
    const { invite: newInvite, error } = await Admin.newInvite({
      role: null,
      workspaceIds: selectedWorkspaceIds,
    });
    setBusy(false);
    if (!newInvite) {
      setError(serverErrorParts(error, t, "settings-pages.form-error"));
      return;
    }
    setInvite(newInvite);
    onSuccess?.();
  };

  const toggleWorkspace = (workspaceId, checked) => {
    setSelectedWorkspaceIds((prev) =>
      checked ? [...prev, workspaceId] : prev.filter((id) => id !== workspaceId)
    );
  };

  useEffect(() => {
    Workspace.all()
      .then((workspaces) => setWorkspaces(workspaces ?? []))
      .catch(() => setWorkspaces([]));
  }, []);

  return (
    <form onSubmit={handleCreate} className="flex flex-col gap-y-5">
      <ModalHeader
        title={t("admin-pages.invites.new-title")}
        onClose={closeModal}
      />
      <ModalBody>
        {invite ? (
          <div className="flex flex-col gap-y-1.5">
            <div className="flex items-end gap-x-2">
              <ModalInput
                label={t("admin-pages.invites.link-label")}
                type="url"
                value={inviteLink(invite)}
                readOnly={true}
                // The link replaces the create button: land here so it can be
                // copied right away.
                autoFocus={true}
                onFocus={(e) => e.target.select()}
              />
              <CopyButton
                text={inviteLink(invite)}
                label={t("admin-pages.invites.copy-new-link")}
                className="shrink-0 border border-zinc-500 light:border-slate-500"
              />
            </div>
            <ModalHint>{t("admin-pages.invites.link-hint")}</ModalHint>
          </div>
        ) : (
          <>
            <p className="text-zinc-300 light:text-slate-700 text-sm">
              {t("admin-pages.invites.new-description", {
                role: t("profile_settings.roles.default"),
              })}
            </p>
            {workspaces.length > 0 && (
              <fieldset
                aria-describedby={hintId}
                className="w-full flex flex-col gap-y-2"
              >
                <legend className="text-sm font-medium text-zinc-50 light:text-slate-700">
                  {t("admin-pages.invites.workspaces-legend")}{" "}
                  <span className="font-normal text-zinc-400 light:text-slate-500">
                    ({t("common.optional")})
                  </span>
                </legend>
                <ModalHint id={hintId}>
                  {t("admin-pages.invites.workspaces-hint")}
                </ModalHint>
                <div className="flex flex-col gap-y-2 mt-1">
                  {workspaces.map((workspace) => (
                    <WorkspaceOption
                      key={workspace.id}
                      workspace={workspace}
                      checked={selectedWorkspaceIds.includes(workspace.id)}
                      onChange={toggleWorkspace}
                    />
                  ))}
                </div>
              </fieldset>
            )}
          </>
        )}
        {error && (
          <p role="alert" className="text-sm text-red-400 light:text-red-700">
            {error.message}
            <ServerErrorDetail detail={error.detail} />
          </p>
        )}
      </ModalBody>
      <ModalFooter>
        {!invite ? (
          <>
            <ModalSecondaryButton onClick={closeModal} type="button">
              {t("settings-pages.cancel")}
            </ModalSecondaryButton>
            <ModalPrimaryButton type="submit" busy={busy}>
              {t("admin-pages.invites.create-submit")}
            </ModalPrimaryButton>
          </>
        ) : (
          <ModalSecondaryButton onClick={closeModal} type="button">
            {t("api.modal.close")}
          </ModalSecondaryButton>
        )}
      </ModalFooter>
    </form>
  );
}

function WorkspaceOption({ workspace, checked, onChange }) {
  return (
    <label
      className={`w-full min-h-[44px] px-3 py-2 rounded-lg flex items-center gap-x-3 cursor-pointer border transition-colors duration-quick ease-smooth hover:bg-theme-bg-secondary ${
        checked
          ? "border-sky-400 light:border-sky-700 bg-theme-bg-secondary"
          : "border-zinc-600 light:border-slate-400"
      }`}
    >
      <input
        type="checkbox"
        name="workspaceIds"
        value={workspace.id}
        checked={checked}
        onChange={(e) => onChange(workspace.id, e.target.checked)}
        className="h-4 w-4 shrink-0 accent-sky-500 light:accent-sky-700"
      />
      <span className="text-theme-text-primary text-sm font-medium leading-tight break-words min-w-0">
        {workspace.name}
      </span>
    </label>
  );
}
