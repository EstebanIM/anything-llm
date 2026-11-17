import { useTranslation } from "react-i18next";
import Modal, { ModalHeader, ModalBody } from "@/components/lib/Modal";
import EmbeddingFileRow from "@/components/EmbeddingFileRow";
import { useEmbeddingProgress } from "@/EmbeddingProgressContext";

export default function EmbeddingProgressModal({
  show,
  onClose,
  workspaceSlug,
}) {
  const { t } = useTranslation();
  const { embeddingProgressMap, removeQueuedFile } = useEmbeddingProgress();
  const embeddingProgress = embeddingProgressMap[workspaceSlug];
  if (!show || !embeddingProgress) return null;

  const statuses = Object.values(embeddingProgress);
  const done = statuses.filter((s) =>
    ["complete", "failed"].includes(s.status)
  ).length;

  return (
    <Modal isOpen={show} onClose={onClose} size="lg">
      <ModalHeader
        title={t("chat-panels.embedding.title")}
        subtitle={t("chat-panels.embedding.subtitle")}
        onClose={onClose}
      />
      <ModalBody>
        {/* Per-file percentages would be too chatty; announce finished files. */}
        <p role="status" className="sr-only">
          {t("chat-panels.embedding.summary", {
            done,
            count: statuses.length,
          })}
        </p>
        <div className="max-h-[300px] overflow-y-auto thin-scroll">
          {Object.entries(embeddingProgress).map(([filename, fileStatus]) => (
            <EmbeddingFileRow
              key={filename}
              filename={filename}
              status={fileStatus}
              onRemove={
                fileStatus.status === "pending"
                  ? () => removeQueuedFile(workspaceSlug, filename)
                  : null
              }
            />
          ))}
        </div>
      </ModalBody>
    </Modal>
  );
}
