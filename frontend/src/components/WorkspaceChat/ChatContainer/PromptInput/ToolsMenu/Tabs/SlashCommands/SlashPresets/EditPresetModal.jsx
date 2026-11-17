import { useState, useEffect, useId } from "react";
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
import ConfirmModal from "@/components/lib/ConfirmModal";
import StatusNote from "@/components/lib/StatusNote";

/**
 * @param {object} props
 * @param {(preset: object) => Promise<string|null>} props.onSave - resolves to
 *   a translated error, or null once saved
 */
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
  const [saving, setSaving] = useState(false);
  const [commandError, setCommandError] = useState(null);
  const [formError, setFormError] = useState(null);
  const commandId = useId();

  useEffect(() => {
    if (preset && isOpen) {
      setCommand(preset.command?.slice(1) || "");
      setCommandError(null);
      setFormError(null);
    }
  }, [preset, isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (saving) return;
    setFormError(null);
    const form = new FormData(e.target);
    const sanitizedCommand = command.replace(CMD_REGEX, "");
    if (isReservedCommand(`/${sanitizedCommand}`)) {
      setCommandError(t("chat-input.preset-reserved"));
      document.getElementById(commandId)?.focus();
      return;
    }
    setSaving(true);
    const error = await onSave({
      id: preset.id,
      command: `/${sanitizedCommand}`,
      prompt: form.get("prompt"),
      description: form.get("description"),
    });
    setSaving(false);
    if (error) setFormError(error);
  };

  const handleCommandChange = (e) => {
    const value = e.target.value.replace(CMD_REGEX, "");
    setCommand(value);
    setCommandError(null);
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
            id={commandId}
            leading="/"
            placeholder={t("chat_window.your_command")}
            value={command}
            onChange={handleCommandChange}
            autoComplete="off"
            required={true}
            error={commandError}
          />
          <ModalTextarea
            label={t("chat-input.preset-prompt-label")}
            name="prompt"
            autoComplete="off"
            placeholder={t("chat_window.placeholder_prompt")}
            defaultValue={preset.prompt}
            required={true}
          />
          <ModalInput
            label={t("chat_window.description")}
            name="description"
            defaultValue={preset.description}
            placeholder={t("chat_window.placeholder_description")}
            autoComplete="off"
            required={true}
          />
          {formError && (
            <StatusNote tone="error" announce>
              {formError}
            </StatusNote>
          )}
        </ModalBody>
        <ModalFooter>
          <ModalDangerButton
            busy={deleting}
            onClick={() => setConfirmingDelete(true)}
            type="button"
          >
            {deleting
              ? t("chat-input.preset-deleting")
              : t("chat-input.preset-delete")}
          </ModalDangerButton>
          <div className="flex gap-x-2">
            <ModalSecondaryButton onClick={onClose} type="button">
              {t("settings-pages.cancel")}
            </ModalSecondaryButton>
            <ModalPrimaryButton type="submit" busy={saving}>
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
