import { useId, useState } from "react";
import Workspace from "@/models/workspace";
import paths from "@/utils/paths";
import { useTranslation } from "react-i18next";
import showToast from "@/utils/toast";
import ConfirmModal from "@/components/lib/ConfirmModal";
import {
  DANGER_BUTTON,
  HELP_TEXT,
  SECTION_HEADING,
} from "../../components/SettingsField";

export default function DeleteWorkspace({ workspace, visible = true }) {
  const { t } = useTranslation();
  const headingId = useId();
  const helpId = useId();
  const [confirming, setConfirming] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const deleteWorkspace = async () => {
    if (deleting) return;
    setDeleting(true);
    const success = await Workspace.delete(workspace.slug);
    if (!success) {
      showToast(t("workspace-settings.delete.failed"), "error", {
        clear: true,
      });
      setDeleting(false);
      setConfirming(false);
      return;
    }
    // Full load so the sidebar drops the deleted workspace.
    window.location = paths.home();
  };

  if (!visible) return null;
  return (
    <section aria-labelledby={headingId} className="flex flex-col gap-y-2">
      <h2 id={headingId} className={SECTION_HEADING}>
        {t("general.delete.title")}
      </h2>
      <p id={helpId} className={HELP_TEXT}>
        {t("general.delete.description")}
      </p>
      <button
        type="button"
        onClick={() => setConfirming(true)}
        aria-describedby={helpId}
        className={`${DANGER_BUTTON} mt-1`}
      >
        {t("general.delete.delete")}
      </button>
      <ConfirmModal
        isOpen={confirming}
        title={t("workspace-settings.delete.confirm-title", {
          name: workspace.name,
        })}
        confirmLabel={
          deleting ? t("general.delete.deleting") : t("general.delete.delete")
        }
        busy={deleting}
        onConfirm={deleteWorkspace}
        onCancel={() => setConfirming(false)}
      >
        <p>{t("workspace-settings.delete.confirm-body")}</p>
      </ConfirmModal>
    </section>
  );
}
