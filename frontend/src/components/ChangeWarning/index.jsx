import { TriangleAlert } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalSecondaryButton,
  ModalDangerButton,
} from "@/components/lib/Modal";

/**
 * Body of the confirmation shown before a destructive settings change.
 * @param {object} props
 * @param {string} props.warningText - What will be lost. Line breaks are kept (real ones or a literal "\n").
 * @param {string} [props.confirmLabel] - What the confirm button does, e.g. "Change and clear embeddings".
 * @param {boolean} [props.busy] - The change is being saved: the confirm button is disabled.
 * @param {() => void} props.onClose
 * @param {() => void} props.onConfirm
 */
export default function ChangeWarningModal({
  warningText = "",
  confirmLabel,
  busy = false,
  onClose,
  onConfirm,
}) {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-y-5">
      <ModalHeader
        title={
          <span className="flex items-center gap-x-2 text-red-500 light:text-red-600">
            <TriangleAlert
              strokeWidth={1.5}
              aria-hidden="true"
              className="w-6 h-6 shrink-0"
            />
            {t("provider-pages.change-warning.title")}
          </span>
        }
        onClose={onClose}
      />
      <ModalBody>
        <p className="whitespace-pre-line text-zinc-300 light:text-slate-700">
          {warningText.replace(/\\n/g, "\n")}
        </p>
        <p className="text-zinc-300 light:text-slate-700">
          {t("provider-pages.change-warning.question")}
        </p>
      </ModalBody>
      <ModalFooter className="justify-end">
        <ModalSecondaryButton onClick={onClose} type="button">
          {t("provider-pages.change-warning.cancel")}
        </ModalSecondaryButton>
        <ModalDangerButton
          onClick={onConfirm}
          type="button"
          disabled={busy}
          aria-busy={busy || undefined}
        >
          {busy
            ? t("common.saving")
            : confirmLabel || t("provider-pages.change-warning.confirm")}
        </ModalDangerButton>
      </ModalFooter>
    </div>
  );
}
