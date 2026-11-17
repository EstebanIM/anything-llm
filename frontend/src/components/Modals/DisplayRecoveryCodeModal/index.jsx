import { useId, useState } from "react";
import { useTranslation } from "react-i18next";
import { Download } from "lucide-react";
import { saveAs } from "file-saver";
import Modal, {
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalPrimaryButton,
} from "@/components/lib/Modal";
import CopyButton from "@/components/lib/CopyButton";
import StatusNote from "@/components/lib/StatusNote";
import useCustomAppName from "@/hooks/useCustomAppName";
import { formatDateTime } from "@/utils/dates";

/**
 * Shows the recovery codes the server just generated. The server marks them as
 * seen when it creates them, so this is the only chance to keep them: the
 * dialog does not close with Escape or a close button, and "Continue" stays
 * blocked until the person confirms they saved the codes.
 *
 * Renders its own Modal (portaled to #root, never inside the sign-in panel,
 * whose backdrop-filter would clip a fixed overlay).
 *
 * @param {object} props
 * @param {boolean} props.isOpen
 * @param {string[]} props.recoveryCodes
 * @param {string} [props.username] - written into the downloaded file
 * @param {() => void} props.onContinue - store the session and go on
 */
export default function RecoveryCodesDialog({
  isOpen,
  recoveryCodes = [],
  username = "",
  onContinue,
}) {
  const { t } = useTranslation();
  const { brandName } = useCustomAppName();
  const confirmId = useId();
  const [saved, setSaved] = useState(false);
  const text = recoveryCodes.join("\n");

  function download() {
    const header = [
      t("recovery-codes.file.title", { brandName }),
      username ? t("recovery-codes.file.user", { username }) : null,
      t("recovery-codes.file.date", { date: formatDateTime(new Date()) }),
      "",
    ]
      .filter((line) => line !== null)
      .join("\n");
    const blob = new Blob([`${header}${text}\n`], { type: "text/plain" });
    saveAs(blob, t("recovery-codes.file.name", { brandName }));
  }

  return (
    <Modal isOpen={isOpen} onClose={() => null} closeOnEsc={false} size="md">
      <ModalHeader
        title={t("recovery-codes.title")}
        subtitle={t("recovery-codes.description")}
      />
      <ModalBody className="flex flex-col gap-y-4">
        <StatusNote tone="warning">{t("recovery-codes.warning")}</StatusNote>
        <ul
          aria-label={t("recovery-codes.list")}
          className="grid grid-cols-1 sm:grid-cols-2 gap-2 rounded-lg border border-zinc-700 light:border-slate-400 bg-zinc-900 light:bg-slate-50 p-3"
        >
          {recoveryCodes.map((code) => (
            <li
              key={code}
              className="font-mono text-sm text-zinc-100 light:text-slate-900 break-all select-all"
            >
              {code}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap items-center gap-2">
          <CopyButton text={text} label={t("recovery-codes.copy")} showLabel />
          <button
            type="button"
            onClick={download}
            className="inline-flex items-center justify-center gap-x-1.5 min-h-[44px] md:min-h-[32px] px-2 rounded-lg text-sm text-theme-text-secondary hover:text-white light:hover:text-slate-900 hover:bg-white/5 light:hover:bg-slate-100 transition-colors duration-quick ease-smooth"
          >
            <Download strokeWidth={1.5} size={16} aria-hidden="true" />
            {t("recovery-codes.download")}
          </button>
        </div>
        <label
          htmlFor={confirmId}
          className="flex items-start gap-x-2 min-h-[44px] md:min-h-0 text-sm text-theme-text-primary cursor-pointer"
        >
          <input
            id={confirmId}
            type="checkbox"
            checked={saved}
            onChange={(e) => setSaved(e.target.checked)}
            className="mt-0.5 h-4 w-4 shrink-0 accent-[var(--theme-button-primary)] cursor-pointer"
          />
          {t("recovery-codes.confirm")}
        </label>
      </ModalBody>
      <ModalFooter>
        <ModalPrimaryButton
          type="button"
          aria-disabled={!saved || undefined}
          aria-describedby={saved ? undefined : confirmId}
          onClick={() => {
            if (!saved) return;
            onContinue?.();
          }}
          className="aria-disabled:opacity-60 aria-disabled:cursor-not-allowed"
        >
          {t("recovery-codes.continue")}
        </ModalPrimaryButton>
      </ModalFooter>
    </Modal>
  );
}
