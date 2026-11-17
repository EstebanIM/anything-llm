import { useId, useRef } from "react";
import { useTranslation } from "react-i18next";
import { LoaderCircle } from "lucide-react";
import Modal, {
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalSecondaryButton,
  ModalDangerButton,
  ModalPrimaryButton,
} from "@/components/lib/Modal";

/**
 * Confirmation dialog for destructive or irreversible settings actions.
 * While `busy` the dialog cannot be dismissed, so the request is never left
 * running behind a closed dialog.
 *
 * @param {Object} props
 * @param {boolean} props.isOpen
 * @param {import("react").ReactNode} props.title - Question shown as the dialog title
 * @param {import("react").ReactNode} [props.children] - Consequences of the action
 * @param {string} props.confirmLabel - Verb for the confirm button ("Eliminar")
 * @param {boolean} [props.busy=false] - The confirmed action is running
 * @param {boolean} [props.danger=true] - Red confirm button
 * @param {() => void} props.onConfirm
 * @param {() => void} props.onCancel
 */
export default function ConfirmModal({
  isOpen,
  title,
  children,
  confirmLabel,
  busy = false,
  danger = true,
  onConfirm,
  onCancel,
}) {
  const { t } = useTranslation();
  const descriptionId = useId();
  const cancelRef = useRef(null);
  const ConfirmButton = danger ? ModalDangerButton : ModalPrimaryButton;
  const close = busy ? undefined : onCancel;

  // Announced as an alert dialog with its consequences; a destructive choice
  // opens with focus on Cancel so a stray Enter never confirms it.
  return (
    <Modal
      isOpen={isOpen}
      onClose={close}
      size="sm"
      role="alertdialog"
      describedBy={children ? descriptionId : undefined}
      initialFocusRef={danger ? cancelRef : null}
    >
      <ModalHeader title={title} onClose={close} />
      {children && (
        <ModalBody>
          <div
            id={descriptionId}
            className="text-sm text-zinc-300 light:text-slate-700 flex flex-col gap-y-2"
          >
            {children}
          </div>
        </ModalBody>
      )}
      <ModalFooter>
        <ModalSecondaryButton
          ref={cancelRef}
          type="button"
          onClick={onCancel}
          disabled={busy}
        >
          {t("settings-pages.cancel")}
        </ModalSecondaryButton>
        <ConfirmButton
          type="button"
          onClick={onConfirm}
          busy={busy}
          className="gap-x-2"
        >
          {busy && (
            <LoaderCircle
              strokeWidth={1.5}
              className="h-4 w-4 animate-spin"
              aria-hidden="true"
            />
          )}
          {confirmLabel}
        </ConfirmButton>
      </ModalFooter>
    </Modal>
  );
}
