import { useTranslation } from "react-i18next";
import {
  ModalFooter,
  ModalPrimaryButton,
  ModalSecondaryButton,
} from "@/components/lib/Modal";

export default function FormActions({ isEditing, saving, onClose }) {
  const { t } = useTranslation();

  return (
    <ModalFooter>
      <ModalSecondaryButton type="button" onClick={onClose}>
        {t("settings-pages.cancel")}
      </ModalSecondaryButton>
      <ModalPrimaryButton type="submit" busy={saving}>
        {saving
          ? t("scheduledJobs.modal.saving")
          : isEditing
            ? t("scheduledJobs.modal.updateJob")
            : t("scheduledJobs.modal.createJob")}
      </ModalPrimaryButton>
    </ModalFooter>
  );
}
