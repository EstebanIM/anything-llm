import Modal, {
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalPrimaryButton,
  ModalSecondaryButton,
} from "@/components/lib/Modal";
import { useTranslation } from "react-i18next";
import { numberWithCommas } from "@/utils/numbers";
import useUser from "@/hooks/useUser";
import Workspace from "@/models/workspace";

export default function FileUploadWarningModal({
  show,
  onClose,
  onContinue,
  onEmbed,
  tokenCount,
  maxTokens,
  fileCount = 1,
}) {
  const { t } = useTranslation();
  const { user } = useUser();
  const canEmbed = !user || user.role !== "default";
  if (!show) return null;

  return (
    <Modal isOpen={show} onClose={onClose} size="lg">
      <ModalHeader
        title={t("chat-panels.context-warning.title")}
        onClose={onClose}
      />
      <ModalBody>
        <p className="text-zinc-300 light:text-slate-700 text-sm">
          {t("chat-panels.context-warning.description", {
            used: numberWithCommas(tokenCount),
            max: numberWithCommas(maxTokens),
            percent: (Workspace.maxContextWindowLimit * 100).toFixed(0),
            count: fileCount,
          })}
        </p>
        <p className="text-zinc-300 light:text-slate-700 text-sm">
          {t("chat-panels.context-warning.choose")}
        </p>
      </ModalBody>
      <ModalFooter>
        <ModalSecondaryButton onClick={onClose} type="button">
          {t("settings-pages.cancel")}
        </ModalSecondaryButton>
        <div className="flex items-center gap-x-2">
          <ModalSecondaryButton onClick={onContinue} type="button">
            {t("chat-panels.context-warning.continue")}
          </ModalSecondaryButton>
          {canEmbed && (
            <ModalPrimaryButton onClick={onEmbed} type="button">
              {t("chat-panels.context-warning.embed", { count: fileCount })}
            </ModalPrimaryButton>
          )}
        </div>
      </ModalFooter>
    </Modal>
  );
}
