import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import paths from "@/utils/paths";
import { formatSkillName } from "../formatSkillName";
import { RowList, RowButton, SectionEmpty } from "../../components/SkillRows";

export default function ImportedSkillList({
  skills = [],
  labelledBy,
  isSelected = () => false,
  handleClick = null,
}) {
  const { t } = useTranslation();
  if (skills.length === 0)
    return (
      <SectionEmpty>
        <p>{t("agent-pages.imported.empty")}</p>
        <p>
          <Link
            to={paths.communityHub.trending()}
            className="inline-flex items-center min-h-[44px] md:min-h-0 underline text-theme-text-primary"
          >
            {t("agent-pages.imported.empty-action")}
          </Link>
        </p>
      </SectionEmpty>
    );
  return (
    <RowList labelledBy={labelledBy}>
      {skills.map((config) => (
        <RowButton
          key={config.hubId}
          rowKey={`imported:${config.hubId}`}
          selected={isSelected(config.hubId)}
          onClick={() => handleClick?.(config)}
          title={formatSkillName(config.name) || config.hubId}
          status={
            config.active
              ? t("agent-pages.skill-on")
              : t("agent-pages.skill-off")
          }
        />
      ))}
    </RowList>
  );
}
