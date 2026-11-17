import PreLoader from "@/components/Preloader";
import System from "@/models/system";
import { useEffect, useId, useState } from "react";
import { useTranslation } from "react-i18next";
import { formatNumber } from "@/utils/dates";
import { SECTION_HEADING } from "../../components/SettingsField";

/** Total vectors of the workspace; `reload` changes to fetch it again. */
export default function VectorCount({ reload, workspace }) {
  const { t } = useTranslation();
  const headingId = useId();
  const [totalVectors, setTotalVectors] = useState(null);

  useEffect(() => {
    async function fetchVectorCount() {
      const totalVectors = await System.totalIndexes(workspace.slug);
      setTotalVectors(totalVectors);
    }
    fetchVectorCount();
  }, [workspace?.slug, reload]);

  return (
    <section aria-labelledby={headingId} className="flex flex-col gap-y-2">
      <h2 id={headingId} className={SECTION_HEADING}>
        {t("general.vector.title")}
      </h2>
      {totalVectors === null ? (
        <PreLoader size="4" />
      ) : (
        <p className="text-sm text-theme-text-secondary tabular-nums">
          {formatNumber(totalVectors)}
        </p>
      )}
    </section>
  );
}
