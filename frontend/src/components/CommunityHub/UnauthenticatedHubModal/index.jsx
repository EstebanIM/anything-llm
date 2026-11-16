import { useTranslation } from "react-i18next";
import Modal, { ModalHeader, ModalBody } from "@/components/lib/Modal";

// The Community Hub pages are not routed in this build, so the modal only
// explains why publishing is unavailable instead of linking to a missing page.
export default function UnauthenticatedHubModal({ show, onClose }) {
  const { t } = useTranslation();
  if (!show) return null;
  return (
    <Modal isOpen={show} onClose={onClose} size="sm">
      <ModalHeader
        title={t("community_hub.publish.generic.unauthenticated.title")}
        onClose={onClose}
      />
      <ModalBody>
        <div className="flex flex-col items-center justify-center gap-y-4">
          <p className="text-sm text-zinc-300 light:text-slate-700 text-center max-w-[300px]">
            {t("community_hub.publish.generic.unauthenticated.description")}
          </p>
        </div>
      </ModalBody>
    </Modal>
  );
}
