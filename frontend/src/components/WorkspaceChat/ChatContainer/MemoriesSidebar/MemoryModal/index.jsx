import { useState, useEffect, useId, useMemo, useRef } from "react";
import { useTranslation } from "react-i18next";
import Modal, {
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalPrimaryButton,
  ModalSecondaryButton,
  ModalTextarea,
} from "@/components/lib/Modal";

/**
 * @param {Object} props
 * @param {boolean} props.isOpen
 * @param {function} props.onClose
 * @param {(content: string) => Promise<boolean>} props.onSubmit - Resolves to
 *   whether the memory was saved; the modal stays open with the text if not.
 * @param {string} [props.initialContent] - Pre-filled content for editing
 * @param {"create"|"edit"} [props.mode]
 */
export default function MemoryModal({
  isOpen,
  onClose,
  onSubmit,
  initialContent = "",
  mode = "create",
}) {
  const { t } = useTranslation();
  const fieldId = useId();
  const errorId = useId();
  const [content, setContent] = useState(initialContent);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const openRef = useRef(isOpen);
  useEffect(() => {
    openRef.current = isOpen;
  }, [isOpen]);
  const isCreate = mode === "create";
  const [title, submitLabel, description] = useMemo(() => {
    if (isCreate) {
      return [
        t("chat_window.memories.modal.create_title"),
        t("chat_window.memories.modal.create"),
        t("chat_window.memories.modal.create_description"),
      ];
    } else {
      return [
        t("chat_window.memories.modal.edit_title"),
        t("chat_window.memories.modal.save"),
        t("chat_window.memories.modal.edit_description"),
      ];
    }
  }, [isCreate, t]);

  useEffect(() => {
    if (!isOpen) return;
    setContent(initialContent);
    setSaving(false);
    setError(null);
  }, [isOpen, initialContent]);

  async function handleSubmit() {
    const value = content.trim();
    if (!value || saving) return;
    setSaving(true);
    setError(null);
    const saved = await Promise.resolve(onSubmit(value)).catch((e) => {
      console.error(e);
      return false;
    });
    if (!openRef.current) return;
    setSaving(false);
    if (saved) return onClose();
    setError(t("chat-panels.memories.save-failed"));
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="sm">
      <ModalHeader title={title} subtitle={description} onClose={onClose} />
      <ModalBody>
        <ModalTextarea
          id={fieldId}
          label={t("chat_window.memories.modal.label")}
          autoFocus
          onFocus={(e) => {
            const len = e.currentTarget.value.length;
            e.currentTarget.setSelectionRange(len, len);
          }}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder={t("chat_window.memories.modal.placeholder")}
          aria-invalid={!!error || undefined}
          aria-describedby={error ? errorId : undefined}
          className="text-base md:text-sm"
          rows={4}
        />
        {error && (
          <p
            id={errorId}
            role="alert"
            className="text-sm text-red-300 light:text-red-700"
          >
            {error}
          </p>
        )}
      </ModalBody>
      <ModalFooter>
        <ModalSecondaryButton type="button" onClick={onClose}>
          {t("chat_window.memories.modal.cancel")}
        </ModalSecondaryButton>
        <ModalPrimaryButton
          type="button"
          onClick={handleSubmit}
          disabled={!content.trim()}
          aria-disabled={saving || undefined}
        >
          {saving ? t("common.saving") : submitLabel}
        </ModalPrimaryButton>
      </ModalFooter>
    </Modal>
  );
}
