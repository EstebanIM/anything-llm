import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Modal, {
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalPrimaryButton,
  ModalSecondaryButton,
  ModalDangerButton,
  ModalInput,
  ModalTextarea,
} from "@/components/lib/Modal";
import { CMD_REGEX, isReservedCommand } from "./constants";
import showToast from "@/utils/toast";
import ConfirmModal from "@/components/lib/ConfirmModal";

export default function EditPresetModal({
  isOpen,
  onClose,
  onSave,
  onDelete,
  preset,
}) {
  const { t } = useTranslation();
  const [command, setCommand] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (preset && isOpen) {
      setCommand(preset.command?.slice(1) || "");
    }
  }, [preset, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const sanitizedCommand = command.replace(CMD_REGEX, "");
    if (isReservedCommand(`/${sanitizedCommand}`)) {
      showToast(t("chat-input.preset-reserved"), "error");
      return;
    }
    onSave({
      id: preset.id,
      command: `/${sanitizedCommand}`,
      prompt: form.get("prompt"),
      description: form.get("description"),
    });
  };

  const handleCommandChange = (e) => {
    const value = e.target.value.replace(CMD_REGEX, "");
    setCommand(value);
  };

  const [confirmingDelete, setConfirmingDelete] = useState(false);

  const handleDelete = async () => {
    setDeleting(true);
    await onDelete(preset.id);
    setDeleting(false);
    setConfirmingDelete(false);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-y-5">
        <ModalHeader title={t("chat-input.preset-edit")} onClose={onClose} />
        <ModalBody>
          <ModalInput
            label={t("chat_window.command")}
            name="command"
            id="command"
            leading="/"
            placeholder={t("chat_window.your_command")}
            value={command}
            onChange={handleCommandChange}
            autoComplete="off"
            required={true}
          />
          <ModalTextarea
            label={t("chat-input.preset-prompt-label")}
            name="prompt"
            id="prompt"
            autoComplete="off"
            placeholder={t("chat_window.placeholder_prompt")}
            defaultValue={preset.prompt}
            required={true}
          />
          <ModalInput
            label={t("chat_window.description")}
            name="description"
            id="description"
            defaultValue={preset.description}
            placeholder={t("chat_window.placeholder_description")}
            autoComplete="off"
            required={true}
          />
        </ModalBody>
        <ModalFooter>
          <ModalDangerButton
            disabled={deleting}
            onClick={() => setConfirmingDelete(true)}
            type="button"
          >
            {deleting
              ? t("chat-input.preset-deleting")
              : t("chat-input.preset-delete")}
          </ModalDangerButton>
          <div className="flex gap-x-2">
            <ModalSecondaryButton onClick={onClose} type="button">
              {t("chat_window.cancel")}
            </ModalSecondaryButton>
            <ModalPrimaryButton type="submit">
              {t("chat_window.save")}
            </ModalPrimaryButton>
          </div>
        </ModalFooter>
      </form>
      <ConfirmModal
        isOpen={confirmingDelete}
        title={t("chat-input.preset-delete-confirm", {
          command: preset?.command,
        })}
        confirmLabel={t("chat-input.preset-delete")}
        busy={deleting}
        onConfirm={handleDelete}
        onCancel={() => setConfirmingDelete(false)}
      />
    </Modal>
  );
}
