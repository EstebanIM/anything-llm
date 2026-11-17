import { useTranslation } from "react-i18next";

/** The document processor's accepted extensions, behind a disclosure. */
export default function SupportedFormats({ formats }) {
  const { t } = useTranslation();
  if (!formats?.length) return null;
  return (
    <details className="text-xs text-zinc-400 light:text-slate-600">
      <summary className="w-fit cursor-pointer py-3 md:py-0 underline hover:text-slate-50 light:hover:text-slate-900 transition-colors duration-quick ease-smooth">
        {t("workspace-docs.upload.formats-toggle")}
      </summary>
      <p className="mt-1">{formats.join(", ")}</p>
    </details>
  );
}
