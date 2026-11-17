import { useTranslation } from "react-i18next";
import System from "@/models/system";
import NumberSetting from "./NumberSetting";

export default function MaxToolCallStack({ keys = {} }) {
  const { t } = useTranslation();
  const initial = parseInt(keys.AgentSkillMaxToolCalls, 10);

  return (
    <NumberSetting
      name="agentSkillMaxToolCalls"
      label={t("agent.settings.max-tool-calls.title")}
      description={t("agent.settings.max-tool-calls.description")}
      initialValue={Number.isFinite(initial) ? initial : 10}
      min={1}
      onSave={async (value) => {
        const res = await System.updateSystem({
          AgentSkillMaxToolCalls: String(value),
        });
        return !!res && !res.error;
      }}
    />
  );
}
