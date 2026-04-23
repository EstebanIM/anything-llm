import React, { useRef, useState, useEffect } from "react";
import { X } from "@phosphor-icons/react";
import Workspace from "@/models/workspace";
import WorkspaceFolder from "@/models/workspaceFolder";
import paths from "@/utils/paths";
import { useTranslation } from "react-i18next";
import ModalWrapper from "@/components/ModalWrapper";

const noop = () => false;
export default function NewWorkspaceModal({ hideModal = noop }) {
  const formEl = useRef(null);
  const [error, setError] = useState(null);
  const [folders, setFolders] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    WorkspaceFolder.tree().then((data) => setFolders(data.folders || []));
  }, []);
  const handleCreate = async (e) => {
    setError(null);
    e.preventDefault();
    const data = {};
    const form = new FormData(formEl.current);
    for (var [key, value] of form.entries()) data[key] = value;
    const { workspace, message } = await Workspace.new(data);
    if (!!workspace) {
      window.location.href = paths.workspace.chat(workspace.slug);
    }
    setError(message);
  };

  return (
    <ModalWrapper isOpen={true}>
      <div className="w-full max-w-2xl bg-theme-bg-secondary rounded-lg shadow border-2 border-theme-modal-border overflow-hidden">
        <div className="relative p-6 border-b rounded-t border-theme-modal-border">
          <div className="w-full flex gap-x-2 items-center">
            <h3 className="text-xl font-semibold text-white overflow-hidden overflow-ellipsis whitespace-nowrap">
              {t("new-workspace.title")}
            </h3>
          </div>
          <button
            onClick={hideModal}
            type="button"
            className="absolute top-4 right-4 transition-all duration-300 bg-transparent rounded-lg text-sm p-1 inline-flex items-center hover:bg-theme-modal-border hover:border-theme-modal-border hover:border-opacity-50 border-transparent border"
          >
            <X size={24} weight="bold" className="text-white" />
          </button>
        </div>
        <div
          className="h-full w-full overflow-y-auto"
          style={{ maxHeight: "calc(100vh - 200px)" }}
        >
          <form ref={formEl} onSubmit={handleCreate}>
            <div className="py-7 px-9 space-y-2 flex-col">
              <div className="w-full flex flex-col gap-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    {t("common.workspaces-name")}
                  </label>
                  <input
                    name="name"
                    type="text"
                    id="name"
                    className="border-none bg-theme-settings-input-bg w-full text-white placeholder:text-theme-settings-input-placeholder text-sm rounded-lg focus:outline-primary-button active:outline-primary-button outline-none block w-full p-2.5"
                    placeholder={t("new-workspace.placeholder")}
                    required={true}
                    autoComplete="off"
                    autoFocus={true}
                  />
                </div>
                {folders.length > 0 && (
                  <div>
                    <label
                      htmlFor="folderId"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      {t("workspace-folders.root")}
                    </label>
                    <select
                      name="folderId"
                      id="folderId"
                      defaultValue=""
                      className="border-none bg-theme-settings-input-bg w-full text-white text-sm rounded-lg focus:outline-primary-button outline-none block p-2.5"
                    >
                      <option value="">{t("workspace-folders.root")}</option>
                      {flattenFolders(folders).map(({ folder, depth }) => (
                        <option key={folder.id} value={folder.id}>
                          {"— ".repeat(depth) + folder.name}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
                {error && (
                  <p className="text-red-400 text-sm">Error: {error}</p>
                )}
              </div>
            </div>
            <div className="flex w-full justify-end items-center p-6 space-x-2 border-t border-theme-modal-border rounded-b">
              <button
                type="submit"
                className="transition-all duration-300 bg-white text-black hover:opacity-60 px-4 py-2 rounded-lg text-sm"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </ModalWrapper>
  );
}

function flattenFolders(folders, depth = 0) {
  const result = [];
  for (const folder of folders) {
    result.push({ folder, depth });
    if (folder.children?.length > 0) {
      result.push(...flattenFolders(folder.children, depth + 1));
    }
  }
  return result;
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
