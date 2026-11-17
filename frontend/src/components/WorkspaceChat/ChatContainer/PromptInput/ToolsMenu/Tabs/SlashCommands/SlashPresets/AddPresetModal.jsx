import { useId, useState } from "react";
import Modal, {
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalPrimaryButton,
  ModalSecondaryButton,
  ModalInput,
  ModalTextarea,
} from "@/components/lib/Modal";
import StatusNote from "@/components/lib/StatusNote";
import { CMD_REGEX, isReservedCommand } from "./constants";
import { useTranslation } from "react-i18next";

/**
 * @param {object} props
 * @param {(preset: object) => Promise<string|null>} props.onSave - resolves to
 *   a translated error, or null once saved
 */
export default function AddPresetModal({ isOpen, onClose, onSave }) {
  const [command, setCommand] = useState("");
  const [commandError, setCommandError] = useState(null);
  const [formError, setFormError] = useState(null);
  const [saving, setSaving] = useState(false);
  const commandId = useId();
  const { t } = useTranslation();

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
      command: `/${sanitizedCommand}`,
      prompt: form.get("prompt"),
      description: form.get("description"),
    });
    setSaving(false);
    if (error) return setFormError(error);
    setCommand("");
  };

  const handleCommandChange = (e) => {
    const value = e.target.value.replace(CMD_REGEX, "");
    setCommand(value);
    setCommandError(null);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-y-5">
        <ModalHeader
          title={t("chat_window.add_new_preset").trim()}
          onClose={onClose}
        />
        <ModalBody>
          <ModalInput
            label={t("chat_window.command")}
            name="command"
            id={commandId}
            leading="/"
            placeholder={t("chat_window.your_command")}
            value={command}
            onChange={handleCommandChange}
            maxLength={25}
            autoComplete="off"
            required={true}
            error={commandError}
          />
          <ModalTextarea
            label={t("chat-input.preset-prompt-label")}
            name="prompt"
            autoComplete="off"
            placeholder={t("chat_window.placeholder_prompt")}
            required={true}
          />
          <ModalInput
            label={t("chat_window.description")}
            name="description"
            placeholder={t("chat_window.placeholder_description")}
            maxLength={80}
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
          <ModalSecondaryButton onClick={onClose} type="button">
            {t("settings-pages.cancel")}
          </ModalSecondaryButton>
          <ModalPrimaryButton type="submit" busy={saving}>
            {t("chat_window.save")}
          </ModalPrimaryButton>
        </ModalFooter>
      </form>
    </Modal>
  );
}
