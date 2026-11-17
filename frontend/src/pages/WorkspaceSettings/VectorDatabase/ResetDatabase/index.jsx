import { useId, useState } from "react";
import Workspace from "@/models/workspace";
import showToast from "@/utils/toast";
import { useTranslation } from "react-i18next";
import ConfirmModal from "@/components/lib/ConfirmModal";
import {
  DANGER_BUTTON,
  HELP_TEXT,
  SECTION_HEADING,
} from "../../components/SettingsField";

export default function ResetDatabase({ workspace, onReset }) {
  const { t } = useTranslation();
  const headingId = useId();
  const helpId = useId();
  const [confirming, setConfirming] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const resetVectorDatabase = async () => {
    if (deleting) return;
    setDeleting(true);
    const success = await Workspace.wipeVectorDb(workspace.slug);
    setDeleting(false);
    setConfirming(false);
    if (!success) {
      showToast(t("vector-workspace.reset.error"), "error", { clear: true });
      return;
    }
    showToast(t("vector-workspace.reset.success"), "success", { clear: true });
    onReset?.();
  };

  return (
    <section aria-labelledby={headingId} className="flex flex-col gap-y-2">
      <h2 id={headingId} className={SECTION_HEADING}>
        {t("vector-workspace.reset.reset")}
      </h2>
      <p id={helpId} className={HELP_TEXT}>
        {t("workspace-settings.reset.description")}
      </p>
      <button
        type="button"
        onClick={() => setConfirming(true)}
        aria-describedby={helpId}
        className={`${DANGER_BUTTON} mt-1`}
      >
        {t("workspace-settings.reset.button")}
      </button>
      <ConfirmModal
        isOpen={confirming}
        title={t("workspace-settings.reset.confirm-title", {
          name: workspace.name,
        })}
        confirmLabel={
          deleting
            ? t("vector-workspace.reset.resetting")
            : t("workspace-settings.reset.button")
        }
        busy={deleting}
        onConfirm={resetVectorDatabase}
        onCancel={() => setConfirming(false)}
      >
        <p>{t("workspace-settings.reset.confirm-body")}</p>
      </ConfirmModal>
    </section>
  );
}
