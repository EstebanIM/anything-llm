import React, { useRef, useState } from "react";
import { X } from "@phosphor-icons/react";
import WorkspaceFolder from "@/models/workspaceFolder";
import showToast from "@/utils/toast";
import { useTranslation } from "react-i18next";
import ModalWrapper from "@/components/ModalWrapper";

const noop = () => false;

export default function NewFolderModal({ hideModal = noop, onFolderCreated = noop }) {
  const { t } = useTranslation();
  const formEl = useRef(null);
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const handleCreate = async (e) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    const data = {};
    const form = new FormData(formEl.current);
    for (const [key, value] of form.entries()) data[key] = value;

    const { folder, message } = await WorkspaceFolder.new({
      name: data.name,
    });

    setSubmitting(false);
    if (folder) {
      showToast(t("workspace-folders.new") + " OK", "success", { clear: true });
      onFolderCreated();
      hideModal();
    } else {
      setError(message);
    }
  };

  return (
    <ModalWrapper isOpen={true}>
      <div className="w-full max-w-md bg-theme-bg-secondary rounded-lg shadow border-2 border-theme-modal-border overflow-hidden">
        <div className="relative p-6 border-b rounded-t border-theme-modal-border">
          <h3 className="text-xl font-semibold text-white">
            {t("workspace-folders.new")}
          </h3>
          <button
            onClick={hideModal}
            type="button"
            className="absolute top-4 right-4 transition-all duration-300 bg-transparent rounded-lg text-sm p-1 inline-flex items-center hover:bg-theme-modal-border border-transparent border"
          >
            <X size={24} weight="bold" className="text-white" />
          </button>
        </div>
        <form ref={formEl} onSubmit={handleCreate}>
          <div className="py-6 px-9 space-y-4">
            <div>
              <label htmlFor="folder-name" className="block mb-2 text-sm font-medium text-white">
                {t("workspace-folders.placeholder")}
              </label>
              <input
                name="name"
                id="folder-name"
                type="text"
                className="border-none bg-theme-settings-input-bg w-full text-white placeholder:text-theme-settings-input-placeholder text-sm rounded-lg focus:outline-primary-button outline-none block p-2.5"
                placeholder={t("workspace-folders.placeholder")}
                required
                autoComplete="off"
                autoFocus
              />
            </div>
            {error && <p className="text-red-400 text-sm">Error: {error}</p>}
          </div>
          <div className="flex w-full justify-end items-center p-6 space-x-2 border-t border-theme-modal-border rounded-b">
            <button
              type="button"
              onClick={hideModal}
              className="transition-all duration-300 text-white hover:bg-zinc-700 px-4 py-2 rounded-lg text-sm"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={submitting}
              className="transition-all duration-300 bg-white text-black hover:opacity-60 px-4 py-2 rounded-lg text-sm disabled:opacity-40"
            >
              {submitting ? "Creating..." : "Create"}
            </button>
          </div>
        </form>
      </div>
    </ModalWrapper>
  );
}

export function useNewFolderModal() {
  const [showing, setShowing] = useState(false);
  return {
    showing,
    showModal: () => setShowing(true),
    hideModal: () => setShowing(false),
  };
}
