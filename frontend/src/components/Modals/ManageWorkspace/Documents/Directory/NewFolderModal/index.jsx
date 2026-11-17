import { useId, useState } from "react";
import { useTranslation } from "react-i18next";
import Document from "@/models/document";
import { FIELD_ERROR } from "@/components/ProviderFields";
import {
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalInput,
  ModalPrimaryButton,
  ModalSecondaryButton,
} from "@/components/lib/Modal";

export default function NewFolderModal({ closeModal, onCreated }) {
  const { t } = useTranslation();
  const [error, setError] = useState(null);
  const [folderName, setFolderName] = useState("");
  const [creating, setCreating] = useState(false);
  const inputId = useId();
  const errorId = useId();

  const handleCreate = async (e) => {
    e.preventDefault();
    if (creating) return;
    setError(null);
    const name = folderName.trim().replace(/^[\\/]+|[\\/]+$/g, "");
    if (!name) return setError(t("workspace-docs.new-folder.required"));
    if (/[\\/]/.test(name))
      return setError(t("workspace-docs.new-folder.invalid-chars"));

    setCreating(true);
    const {
      success,
      message,
      error: requestError,
    } = await Document.createFolder(name);
    setCreating(false);
    if (!success)
      return setError(
        message || requestError || t("workspace-docs.new-folder.failed")
      );
    onCreated(name);
  };

  return (
    <form onSubmit={handleCreate} noValidate className="flex flex-col gap-y-5">
      <ModalHeader
        title={t("workspace-docs.new-folder.title")}
        onClose={closeModal}
      />
      <ModalBody>
        <div className="flex flex-col gap-y-1.5">
          <ModalInput
            id={inputId}
            name="folderName"
            type="text"
            label={t("workspace-docs.new-folder.label")}
            placeholder={t("workspace-docs.new-folder.placeholder")}
            autoComplete="off"
            autoFocus
            required
            value={folderName}
            onChange={(e) => {
              setFolderName(e.target.value);
              if (error) setError(null);
            }}
            aria-invalid={!!error || undefined}
            aria-describedby={error ? errorId : undefined}
          />
          {error && (
            <p id={errorId} role="alert" className={FIELD_ERROR}>
              {error}
            </p>
          )}
        </div>
      </ModalBody>
      <ModalFooter>
        <ModalSecondaryButton onClick={closeModal} type="button">
          {t("settings-pages.cancel")}
        </ModalSecondaryButton>
        <ModalPrimaryButton
          type="submit"
          aria-disabled={creating || undefined}
          aria-busy={creating || undefined}
          className="aria-disabled:cursor-wait aria-disabled:opacity-60"
        >
          {creating
            ? t("workspace-docs.new-folder.creating")
            : t("workspace-docs.new-folder.create")}
        </ModalPrimaryButton>
      </ModalFooter>
    </form>
  );
}
