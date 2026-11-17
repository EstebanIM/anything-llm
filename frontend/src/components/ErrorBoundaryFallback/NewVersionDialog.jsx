import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ConfirmModal from "@/components/lib/ConfirmModal";
import { NEW_VERSION_EVENT } from "@/hooks/useWebPushNotifications";

/**
 * Asks before loading a new version of the app (an updated service worker is
 * ready). Reloading is the person's choice: the browser still warns about
 * unsaved changes through UnsavedChangesGuard.
 */
export default function NewVersionDialog() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const show = () => setOpen(true);
    window.addEventListener(NEW_VERSION_EVENT, show);
    return () => window.removeEventListener(NEW_VERSION_EVENT, show);
  }, []);

  return (
    <ConfirmModal
      isOpen={open}
      danger={false}
      title={t("dialogs.new-version.title")}
      confirmLabel={t("dialogs.new-version.reload")}
      onConfirm={() => window.location.reload()}
      onCancel={() => setOpen(false)}
    >
      <p>{t("dialogs.new-version.description")}</p>
    </ConfirmModal>
  );
}
