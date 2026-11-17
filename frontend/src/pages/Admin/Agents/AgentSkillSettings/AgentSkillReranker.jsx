import { useState } from "react";
import { useTranslation } from "react-i18next";
import Toggle from "@/components/lib/Toggle";
import System from "@/models/system";
import showToast from "@/utils/toast";
import NumberSetting from "./NumberSetting";

export default function AgentSkillReranker({ keys = {} }) {
  const { t } = useTranslation();
  const [enabled, setEnabled] = useState(!!keys.AgentSkillRerankerEnabled);
  const initialTopN = parseInt(keys.AgentSkillRerankerTopN, 10);

  async function toggleEnabled(next) {
    setEnabled(next);
    const res = await System.updateSystem({
      AgentSkillRerankerEnabled: String(next),
    });
    if (!res || res.error) {
      setEnabled(!next);
      showToast(t("agent-pages.settings.save-failed"), "error", {
        clear: true,
      });
    }
  }

  return (
    <div className="flex flex-col gap-y-4">
      <Toggle
        variant="horizontal"
        size="lg"
        name="agentSkillRerankerEnabled"
        enabled={enabled}
        onChange={toggleEnabled}
        label={t("agent.settings.intelligent-skill-selection.title")}
        description={t(
          "agent.settings.intelligent-skill-selection.description"
        )}
      />
      {enabled && (
        <NumberSetting
          name="agentSkillRerankerTopN"
          label={t(
            "agent.settings.intelligent-skill-selection.max-tools.title"
          )}
          description={t(
            "agent.settings.intelligent-skill-selection.max-tools.description"
          )}
          initialValue={Number.isFinite(initialTopN) ? initialTopN : 15}
          min={10}
          onSave={async (value) => {
            const res = await System.updateSystem({
              AgentSkillRerankerTopN: String(value),
            });
            return !!res && !res.error;
          }}
        />
      )}
    </div>
  );
}
