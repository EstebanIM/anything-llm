import React, { useEffect, useRef, useState } from "react";
import Workspace from "@/models/workspace";
import WorkspaceFolder, { flattenFolderTree } from "@/models/workspaceFolder";
import paths from "@/utils/paths";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { REFETCH_WORKSPACES_EVENT } from "@/components/Sidebar/ActiveWorkspaces";
import Modal, {
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalPrimaryButton,
  ModalInput,
  ModalLabel,
} from "@/components/lib/Modal";

const noop = () => false;
export default function NewWorkspaceModal({ hideModal = noop }) {
  const navigate = useNavigate();
  const formEl = useRef(null);
  const [error, setError] = useState(null);
  const [folders, setFolders] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    WorkspaceFolder.tree().then((data) => setFolders(data?.folders || []));
  }, []);

  const handleCreate = async (e) => {
    setError(null);
    e.preventDefault();
    const data = {};
    const form = new FormData(formEl.current);
    for (var [key, value] of form.entries()) data[key] = value;
    const { workspace, message } = await Workspace.new(data);
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
    setError(message);
  };

  return (
    <Modal isOpen={true} onClose={hideModal} size="md">
      <form
        ref={formEl}
        onSubmit={handleCreate}
        className="flex flex-col gap-y-5"
      >
        <ModalHeader title={t("new-workspace.title")} onClose={hideModal} />
        <ModalBody>
          <ModalInput
            label={t("common.workspaces-name")}
            name="name"
            type="text"
            id="name"
            placeholder={t("new-workspace.placeholder")}
            required={true}
            autoComplete="off"
            autoFocus={true}
          />
          {folders.length > 0 && (
            <div>
              <ModalLabel htmlFor="folderId">
                {t("workspace-folders.label")}
              </ModalLabel>
              <select
                name="folderId"
                id="folderId"
                defaultValue=""
                className="w-full h-[34px] px-3.5 text-sm rounded-lg outline-none bg-zinc-800 border border-zinc-800 text-zinc-100 light:bg-white light:border-slate-300 light:text-slate-900 focus:border-sky-500 light:focus:border-sky-500 cursor-pointer"
              >
                <option value="">{t("workspace-folders.root")}</option>
                {flattenFolderTree(folders).map(({ folder, depth }) => (
                  <option key={folder.id} value={folder.id}>
                    {"\u00A0\u00A0\u00A0".repeat(depth) + folder.name}
                  </option>
                ))}
              </select>
            </div>
          )}
          {error && <p className="text-red-400 text-sm">Error: {error}</p>}
        </ModalBody>
        <ModalFooter className="justify-end">
          <ModalPrimaryButton type="submit">Save</ModalPrimaryButton>
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
