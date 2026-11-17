import { useId } from "react";
import { useTranslation } from "react-i18next";

/**
 * In-place confirmation for deleting something from the flow: the message,
 * then Cancel and the destructive action (focused on mount). Escape cancels;
 * the caller returns focus to the button that opened it.
 *
 * @param {object} props
 * @param {string} props.message - The question, with the consequences
 * @param {string} props.confirmLabel
 * @param {() => void} props.onConfirm
 * @param {() => void} props.onCancel
 */
export default function InlineConfirm({
  message,
  confirmLabel,
  onConfirm,
  onCancel,
}) {
  const { t } = useTranslation();
  const messageId = useId();

  return (
    <div
      role="group"
      aria-labelledby={messageId}
      onKeyDown={(e) => {
        if (e.key !== "Escape") return;
        e.preventDefault();
        onCancel();
      }}
      className="flex flex-col sm:flex-row sm:items-center gap-2 rounded-lg border border-red-400/40 light:border-red-700/40 bg-red-400/10 light:bg-red-50 px-3 py-2"
    >
      <p
        id={messageId}
        className="flex-1 min-w-0 text-sm text-red-200 light:text-red-800"
      >
        {message}
      </p>
      <div className="flex gap-2 justify-end shrink-0">
        <button
          type="button"
          onClick={onCancel}
          className="min-h-[44px] md:min-h-[32px] px-3 rounded-md text-sm text-white hover:bg-zinc-800 light:hover:bg-slate-100 transition-colors duration-quick ease-smooth"
        >
          {t("settings-pages.cancel")}
        </button>
        <button
          type="button"
          autoFocus
          onClick={onConfirm}
          className="min-h-[44px] md:min-h-[32px] px-3 rounded-md text-sm font-semibold bg-red-600 text-[#ffffff] hover:bg-red-700 transition-colors duration-quick ease-smooth"
        >
          {confirmLabel}
        </button>
      </div>
    </div>
  );
}
