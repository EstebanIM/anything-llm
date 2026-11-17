import React, { useState } from "react";
import WorkspaceFolder from "@/models/workspaceFolder";
import showToast from "@/utils/toast";
import { useTranslation } from "react-i18next";
import Modal, {
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalInput,
  ModalPrimaryButton,
  ModalSecondaryButton,
} from "@/components/lib/Modal";

const noop = () => false;

/**
 * Create a folder at the root, or inside `parentId` (subfolder).
 * @param {object} props
 * @param {() => void} props.hideModal
 * @param {(folder: object) => void} [props.onFolderCreated]
 * @param {number|string} [props.parentId] - parent folder; root when missing
 * @param {string} [props.parentName] - shown in the subfolder title
 */
export default function NewFolderModal({
  hideModal = noop,
  onFolderCreated = noop,
  parentId = null,
  parentName = null,
}) {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const isSubfolder = parentId !== null && parentId !== undefined;

  const handleCreate = async (e) => {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) {
      setError(t("workspace-folders.name-required"));
      return;
    }
    setError(null);
    setSubmitting(true);
    const { folder, message } = await WorkspaceFolder.new({
      name: trimmed,
      ...(isSubfolder ? { parent_id: parentId } : {}),
    });
    setSubmitting(false);
    if (folder) {
      showToast(
        t(
          isSubfolder
            ? "workspace-folders.subfolder-created"
            : "workspace-folders.created",
          {
            name: trimmed,
          }
        ),
        "success",
        { clear: true }
      );
      onFolderCreated(folder);
      hideModal();
    } else {
      setError(message || t("sidebar-nav.folder-create-failed"));
    }
  };

  return (
    <Modal isOpen={true} onClose={hideModal} size="sm">
      <ModalHeader
        title={
          isSubfolder
            ? t("workspace-folders.new-subfolder-in", { name: parentName })
            : t("workspace-folders.new")
        }
        onClose={hideModal}
      />
      <form onSubmit={handleCreate} noValidate>
        <ModalBody>
          <ModalInput
            name="name"
            label={t("workspace-folders.placeholder")}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (error) setError(null);
            }}
            error={error}
            autoComplete="off"
            maxLength={100}
            autoFocus
          />
        </ModalBody>
        <ModalFooter>
          <ModalSecondaryButton type="button" onClick={hideModal}>
            {t("workspace-folders.move-cancel")}
          </ModalSecondaryButton>
          <ModalPrimaryButton
            type="submit"
            disabled={submitting}
            aria-busy={submitting || undefined}
          >
            {submitting
              ? t("workspace-folders.creating")
              : t("workspace-folders.create")}
          </ModalPrimaryButton>
        </ModalFooter>
      </form>
    </Modal>
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
