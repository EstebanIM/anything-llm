import StatusNote from "@/components/lib/StatusNote";
import React, { useEffect, useState } from "react";
import Workspace from "@/models/workspace";
import WorkspaceFolder, { folderPathOptions } from "@/models/workspaceFolder";
import paths from "@/utils/paths";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { REFETCH_WORKSPACES_EVENT } from "@/components/Sidebar/ActiveWorkspaces";
import { serverErrorMessage } from "@/utils/serverErrors";
import Modal, {
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalPrimaryButton,
  ModalSecondaryButton,
  ModalInput,
  ModalSelect,
} from "@/components/lib/Modal";

const noop = () => false;
export default function NewWorkspaceModal({ hideModal = noop }) {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [busy, setBusy] = useState(false);
  const [folders, setFolders] = useState([]);
  const [foldersFailed, setFoldersFailed] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    WorkspaceFolder.tree().then((data) => {
      setFolders(data?.folders || []);
      setFoldersFailed(!!data?.error);
    });
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    if (busy) return;
    setError(null);
    const data = {};
    const form = new FormData(e.target);
    for (var [key, value] of form.entries()) data[key] = value;
    setBusy(true);
    const { workspace, message } = await Workspace.new(data);
    setBusy(false);
    if (!!workspace) {
      // Refresh the sidebar list and navigate via the router so
      // ActiveGenerationGuard can intercept if a response is generating.
      // If the user cancels the navigation, the workspace still exists and
      // shows in the sidebar - so close this modal either way.
      window.dispatchEvent(new CustomEvent(REFETCH_WORKSPACES_EVENT));
      hideModal();
      navigate(paths.workspace.chat(workspace.slug));
      return;
    }
    setError(serverErrorMessage(message, t, "dialogs.new-workspace.failed"));
  };

  const options = folderPathOptions(folders);

  return (
    <Modal isOpen={true} onClose={hideModal} size="md">
      <form onSubmit={handleCreate} className="flex flex-col gap-y-5">
        <ModalHeader title={t("new-workspace.title")} onClose={hideModal} />
        <ModalBody>
          <ModalInput
            label={t("common.workspaces-name")}
            name="name"
            type="text"
            placeholder={t("new-workspace.placeholder")}
            minLength={4}
            maxLength={255}
            required={true}
            autoComplete="off"
            autoFocus={true}
            hint={t("dialogs.new-workspace.hint")}
            error={error}
          />
          {foldersFailed && (
            <StatusNote tone="warning">
              {t("dialogs.new-workspace.folders-failed")}
            </StatusNote>
          )}
          {options.length > 0 && (
            <ModalSelect
              label={t("workspace-folders.label")}
              name="folderId"
              defaultValue=""
            >
              <option value="">{t("workspace-folders.root")}</option>
              {options.map(({ id, path }) => (
                <option key={id} value={id}>
                  {path}
                </option>
              ))}
            </ModalSelect>
          )}
        </ModalBody>
        <ModalFooter>
          <ModalSecondaryButton type="button" onClick={hideModal}>
            {t("settings-pages.cancel")}
          </ModalSecondaryButton>
          <ModalPrimaryButton type="submit" busy={busy}>
            {t("admin-pages.workspaces.create")}
          </ModalPrimaryButton>
        </ModalFooter>
      </form>
    </Modal>
  );
}

export function useNewWorkspaceModal() {
  const [showing, setShowing] = useState(false);
  const showModal = () => {
    setShowing(true);
  };
  const hideModal = () => {
    setShowing(false);
  };

  return { showing, showModal, hideModal };
}
