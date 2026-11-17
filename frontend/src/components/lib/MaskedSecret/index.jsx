import { useTranslation } from "react-i18next";
import CopyButton from "@/components/lib/CopyButton";

/** "sk-ABCD…a1b2": enough to tell keys apart, not enough to use one. */
export function maskSecret(secret = "", visibleStart = 6, visibleEnd = 4) {
  const value = String(secret ?? "");
  if (value.length <= visibleStart + visibleEnd)
    return "•".repeat(value.length);
  return `${value.slice(0, visibleStart)}…${value.slice(-visibleEnd)}`;
}

/**
 * Masked secret with a copy button that copies the full value. The full
 * secret never appears on screen (shoulder surfing, screen sharing, screen
 * readers reading 40+ characters per row).
 *
 * @param {object} props
 * @param {string} props.secret
 * @param {string} props.name - what the secret belongs to (used in the copy label)
 */
export default function MaskedSecret({ secret, name, className = "" }) {
  const { t } = useTranslation();
  return (
    <span className={`inline-flex items-center gap-x-1 ${className}`}>
      <code
        className="font-mono text-xs text-theme-text-primary"
        aria-label={t("copy.masked-secret", { name })}
      >
        {maskSecret(secret)}
      </code>
      <CopyButton text={secret} label={t("copy.copy-secret", { name })} />
    </span>
  );
}
