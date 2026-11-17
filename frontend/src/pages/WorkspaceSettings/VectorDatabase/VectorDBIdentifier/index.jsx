import { useId } from "react";
import { useTranslation } from "react-i18next";
import { SECTION_HEADING } from "../../components/SettingsField";

export default function VectorDBIdentifier({ workspace }) {
  const { t } = useTranslation();
  const headingId = useId();
  return (
    <section aria-labelledby={headingId} className="flex flex-col gap-y-2">
      <h2 id={headingId} className={SECTION_HEADING}>
        {t("vector-workspace.identifier")}
      </h2>
      <p className="text-sm text-theme-text-secondary break-all">
        {workspace?.slug}
      </p>
    </section>
  );
}
