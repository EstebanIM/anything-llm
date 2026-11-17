import { useEffect } from "react";
import { useBlocker } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Modal, {
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalDangerButton,
  ModalSecondaryButton,
} from "@/components/lib/Modal";

/**
 * Asks before leaving a page with unsaved changes: in-app navigation through
 * the router (`navigate` / `<Link>`, back / forward) opens a dialog, and a
 * reload or tab close gets the browser's own prompt.
 *
 * @note Same constraints as ActiveGenerationGuard: needs the data router, and
 * react-router allows ONE active blocker app-wide. Mount it only on pages that
 * never mount ActiveGenerationGuard (settings pages, the agent builder).
 *
 * @param {object} props
 * @param {boolean} props.when - there are unsaved changes
 */
export default function UnsavedChangesGuard({ when = false }) {
  const { t } = useTranslation();
  const blocker = useBlocker(
    ({ currentLocation, nextLocation }) =>
      when && currentLocation.pathname !== nextLocation.pathname
  );

  useEffect(() => {
    if (!when) return;
    const onBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = "";
    };
    window.addEventListener("beforeunload", onBeforeUnload);
    return () => window.removeEventListener("beforeunload", onBeforeUnload);
  }, [when]);

  if (blocker.state !== "blocked") return null;
  return (
    <Modal isOpen={true} onClose={blocker.reset} size="sm">
      <ModalHeader title={t("unsaved-guard.title")} onClose={blocker.reset} />
      <ModalBody>
        <p className="text-sm text-zinc-300 light:text-slate-700">
          {t("unsaved-guard.description")}
        </p>
      </ModalBody>
      <ModalFooter>
        <ModalSecondaryButton type="button" onClick={blocker.reset}>
          {t("unsaved-guard.stay")}
        </ModalSecondaryButton>
        <ModalDangerButton type="button" onClick={() => blocker.proceed()}>
          {t("unsaved-guard.leave")}
        </ModalDangerButton>
      </ModalFooter>
    </Modal>
  );
}
