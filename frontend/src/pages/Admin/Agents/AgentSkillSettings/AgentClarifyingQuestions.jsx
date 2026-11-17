import { useState } from "react";
import { useTranslation } from "react-i18next";
import Toggle from "@/components/lib/Toggle";
import Admin from "@/models/admin";
import showToast from "@/utils/toast";
import NumberSetting from "./NumberSetting";

export default function AgentClarifyingQuestions({ keys = {} }) {
  const { t } = useTranslation();
  const [enabled, setEnabled] = useState(
    !!keys.AgentClarifyingQuestionsEnabled
  );
  const initialMax = parseInt(keys.AgentClarifyingQuestionsMaxPerTurn, 10);

  async function toggleEnabled(next) {
    setEnabled(next);
    const res = await Admin.updateSystemPreferences({
      agent_clarifying_questions_enabled: String(next),
    });
    if (!res?.success) {
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
        name="agentClarifyingQuestionsEnabled"
        enabled={enabled}
        onChange={toggleEnabled}
        label={
          <>
            {t("agent.settings.clarifying-questions.title")}
            <span className="ml-1 rounded-md border px-2 py-0.5 text-xs font-medium bg-sky-500/10 border-sky-400/40 text-sky-200 light:bg-sky-50 light:border-sky-700/40 light:text-sky-800">
              {t("agent.settings.clarifying-questions.beta-badge")}
            </span>
          </>
        }
        description={t("agent.settings.clarifying-questions.description")}
      />
      {enabled && (
        <NumberSetting
          name="agentClarifyingQuestionsMaxPerTurn"
          label={t("agent.settings.clarifying-questions.max-per-turn.title")}
          description={t(
            "agent.settings.clarifying-questions.max-per-turn.description"
          )}
          initialValue={Number.isFinite(initialMax) ? initialMax : 3}
          min={1}
          onSave={async (value) => {
            const res = await Admin.updateSystemPreferences({
              agent_clarifying_questions_max_per_turn: String(value),
            });
            return !!res?.success;
          }}
        />
      )}
    </div>
  );
}
