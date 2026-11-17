import { useTranslation } from "react-i18next";

/**
 * The server's own error text, shown under a translated message: labelled,
 * smaller, and marked as English so screen readers pronounce it correctly.
 * Renders nothing without a detail. Inherits the colour of the error it sits
 * in, so it keeps that error's contrast.
 *
 * @param {object} props
 * @param {string|null} props.detail - from `serverErrorParts(...).detail`
 * @param {string} [props.className]
 */
export default function ServerErrorDetail({ detail, className = "" }) {
  const { t } = useTranslation();
  if (!detail) return null;
  return (
    <span
      className={`block mt-0.5 text-xs font-normal break-words ${className}`}
    >
      {t("server-errors.detail")}{" "}
      <span lang="en" className="font-mono">
        {detail}
      </span>
    </span>
  );
}
