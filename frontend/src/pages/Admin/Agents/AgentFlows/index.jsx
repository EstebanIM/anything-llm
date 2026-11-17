import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import paths from "@/utils/paths";
import { RowList, RowButton, SectionEmpty } from "../components/SkillRows";

export default function AgentFlowsList({
  flows = [],
  labelledBy,
  isSelected = () => false,
  handleClick,
  activeFlowIds = [],
}) {
  const { t } = useTranslation();
  if (flows.length === 0) {
    return (
      <SectionEmpty>
        <p>{t("agent-pages.flows.empty")}</p>
        <p>
          <Link
            to={paths.agents.builder()}
            className="inline-flex items-center min-h-[44px] md:min-h-0 underline text-theme-text-primary"
          >
            {t("agent-pages.flows.empty-action")}
          </Link>
        </p>
      </SectionEmpty>
    );
  }

  return (
    <RowList labelledBy={labelledBy}>
      {flows.map((flow) => (
        <RowButton
          key={flow.uuid}
          rowKey={`flow:${flow.uuid}`}
          selected={isSelected(flow.uuid)}
          onClick={() => handleClick?.(flow)}
          title={flow.name}
          status={
            activeFlowIds.includes(flow.uuid)
              ? t("agent-pages.flow-on")
              : t("agent-pages.flow-off")
          }
        />
      ))}
    </RowList>
  );
}
