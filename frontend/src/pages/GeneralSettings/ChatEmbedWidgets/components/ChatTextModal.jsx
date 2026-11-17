import { useTranslation } from "react-i18next";
import Modal, {
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalSecondaryButton,
} from "@/components/lib/Modal";

/**
 * Shows the full text of a chat message, response or session in a dialog.
 * The text box scrolls on its own and takes keyboard focus for that.
 *
 * @param {object} props
 * @param {boolean} props.isOpen
 * @param {() => void} props.onClose
 * @param {string} props.title - says what is shown ("Mensaje del chat 12")
 * @param {import("react").ReactNode} props.children
 */
export default function ChatTextModal({ isOpen, onClose, title, children }) {
  const { t } = useTranslation();
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalHeader title={title} onClose={onClose} />
      <ModalBody>
        <div
          role="region"
          aria-label={title}
          tabIndex={0}
          className="w-full max-h-[60vh] overflow-auto py-2 px-4 rounded-lg bg-zinc-800 light:bg-slate-50 border border-zinc-600 light:border-slate-300 text-zinc-100 light:text-slate-900 text-sm whitespace-pre-wrap break-words"
        >
          {children}
        </div>
      </ModalBody>
      <ModalFooter>
        <ModalSecondaryButton type="button" onClick={onClose}>
          {t("api.modal.close")}
        </ModalSecondaryButton>
      </ModalFooter>
    </Modal>
  );
}
