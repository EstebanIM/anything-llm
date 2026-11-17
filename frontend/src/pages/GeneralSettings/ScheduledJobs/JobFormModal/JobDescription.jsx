import { useTranslation } from "react-i18next";
import { ModalInput, ModalTextarea } from "@/components/lib/Modal";

export default function JobDescription({ form, errors, ids, onChange }) {
  const { t } = useTranslation();

  return (
    <>
      <ModalInput
        id={ids.name}
        name="name"
        label={t("scheduledJobs.modal.nameLabel")}
        value={form.name}
        onChange={onChange}
        placeholder={t("scheduledJobs.modal.namePlaceholder")}
        autoComplete="off"
        aria-required="true"
        error={errors.name}
      />

      <ModalTextarea
        id={ids.prompt}
        name="prompt"
        label={t("scheduledJobs.modal.promptLabel")}
        value={form.prompt}
        onChange={onChange}
        placeholder={t("scheduledJobs.modal.promptPlaceholder")}
        rows={4}
        className="resize-y"
        aria-required="true"
        error={errors.prompt}
      />
    </>
  );
}
