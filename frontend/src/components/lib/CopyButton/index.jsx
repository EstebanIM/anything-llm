import { Check, Copy } from "lucide-react";
import { useTranslation } from "react-i18next";
import useCopyToClipboard from "@/hooks/useCopyToClipboard";

/**
 * Copy-to-clipboard button. Never disables itself (focus stays put), shows
 * "Copied" for a moment and announces the result in a polite live region.
 *
 * @param {object} props
 * @param {string} props.text - what is copied
 * @param {string} props.label - accessible name: what it copies ("Copiar la clave «Producción»")
 * @param {boolean} [props.showLabel=false] - visible text next to the icon
 * @param {string} [props.className]
 */
export default function CopyButton({
  text,
  label,
  showLabel = false,
  className = "",
}) {
  const { t } = useTranslation();
  const { copy, status } = useCopyToClipboard();
  const Icon = status === "copied" ? Check : Copy;
  const message =
    status === "copied"
      ? t("copy.copied")
      : status === "failed"
        ? t("copy.failed")
        : "";

  return (
    <>
      <button
        type="button"
        onClick={() => copy(text)}
        aria-label={showLabel ? undefined : label}
        title={showLabel ? undefined : label}
        className={`inline-flex items-center justify-center gap-x-1.5 min-h-[44px] min-w-[44px] md:min-h-[32px] md:min-w-[32px] px-2 rounded-lg text-sm text-theme-text-secondary hover:text-white light:hover:text-slate-900 hover:bg-white/5 light:hover:bg-slate-100 transition-colors duration-quick ease-smooth ${className}`}
      >
        <Icon strokeWidth={1.5} size={16} aria-hidden="true" />
        {showLabel && (
          <span>{status === "copied" ? t("copy.copied") : label}</span>
        )}
      </button>
      <span role="status" aria-live="polite" className="sr-only">
        {message}
      </span>
    </>
  );
}
