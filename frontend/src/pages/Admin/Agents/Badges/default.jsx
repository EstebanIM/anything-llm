import { useTranslation } from "react-i18next";

/**
 * Marks a skill that comes enabled out of the box. It can still be switched
 * off, so the text says "included" and never "cannot be turned off".
 * `title` is kept for existing callers.
 */
export function DefaultBadge({ title: _title }) {
  const { t } = useTranslation();
  return (
    <span className="inline-flex items-center w-fit shrink-0 rounded-full border px-2.5 py-0.5 text-xs font-medium bg-sky-500/10 border-sky-400/40 text-sky-200 light:bg-sky-50 light:border-sky-700/40 light:text-sky-800">
      {t("agent-pages.default-badge")}
    </span>
  );
}
