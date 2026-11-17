import { useTranslation } from "react-i18next";
import { X } from "lucide-react";

/** Persistent error strip with a dismiss button (not a toast). */
export default function InlineAlert({ children, onDismiss }) {
  const { t } = useTranslation();
  return (
    <div
      role="alert"
      className="shrink-0 flex items-start gap-x-2 px-3 py-2 text-xs border-b border-red-400/50 light:border-red-300 bg-red-500/10 light:bg-red-50 text-red-300 light:text-red-700"
    >
      <p className="flex-1 min-w-0 break-words whitespace-pre-line">
        {children}
      </p>
      <button
        type="button"
        onClick={onDismiss}
        aria-label={t("workspace-docs.dismiss")}
        className="border-none bg-transparent shrink-0 w-11 h-11 md:w-6 md:h-6 -my-1 flex items-center justify-center rounded-md hover:bg-red-500/15"
      >
        <X strokeWidth={1.5} size={14} aria-hidden="true" />
      </button>
    </div>
  );
}
