import { useId, useState } from "react";
import { Gauge } from "lucide-react";
import { useTranslation } from "react-i18next";
import { ALL_LLM_PROVIDERS } from "@/pages/GeneralSettings/LLMPreference";
import { useAutosaveForm, SavedIndicator } from "@/components/AutosaveForm";
import { withEmbeddedLemonade } from "@/components/LLMSelection/EmbeddedLemonadeOptions";
import AgentModelSelection from "../AgentModelSelection";
import ProviderPicker from "../../components/ProviderPicker";
import { HELP_TEXT, SECTION_HEADING } from "../../components/SettingsField";
import { SYSTEM_DEFAULT_LOGO } from "@/utils/builtInLogos";

const ENABLED_PROVIDERS = [
  "openai",
  "anthropic",
  "lmstudio",
  "ollama",
  "localai",
  "groq",
  "azure",
  "koboldcpp",
  "togetherai",
  "openrouter",
  "novita",
  "mistral",
  "perplexity",
  "textgenwebui",
  "generic-openai",
  "bedrock",
  "vertex",
  "fireworksai",
  "deepseek",
  "ppio",
  "litellm",
  "apipie",
  "xai",
  "nvidia-nim",
  "gemini",
  "moonshotai",
  "cometapi",
  "foundry",
  "zai",
  "giteeai",
  "cohere",
  "llmman",
  "privatemode",
  "sambanova",
  "lemonade",
  "omlx",
  "minimax",
  "cerebras",
];
const WARN_PERFORMANCE = [
  "lmstudio",
  "koboldcpp",
  "ollama",
  "localai",
  "textgenwebui",
  "llmman",
];

export default function AgentLLMSelection({ settings, workspace }) {
  const { t } = useTranslation();
  const headingId = useId();
  const [selectedLLM, setSelectedLLM] = useState(
    workspace?.agentProvider ?? "none"
  );
  // Bumped when the chosen provider's settings change, to reload its models.
  const [settingsVersion, setSettingsVersion] = useState(0);
  const { markDirty, save } = useAutosaveForm();

  function updateLLMChoice(selection) {
    setSelectedLLM(selection);
    markDirty("agentProvider");
    markDirty("agentModel");
    // Other providers save once AgentModelSelection has loaded its models.
    if (selection === "none") save();
  }

  const systemDefault = {
    name: t("workspace-settings.llm.system-default"),
    value: "none",
    logo: SYSTEM_DEFAULT_LOGO,
    description: t("workspace-settings.agent.system-default-description"),
    requiredConfig: [],
  };
  const llms = withEmbeddedLemonade(
    [
      systemDefault,
      ...ALL_LLM_PROVIDERS.filter((llm) =>
        ENABLED_PROVIDERS.includes(llm.value)
      ),
    ],
    settings,
    { after: "none" }
  );

  return (
    <div className="flex flex-col gap-y-2">
      {WARN_PERFORMANCE.includes(selectedLLM) && (
        <div className="flex items-center gap-x-2 text-white bg-blue-800/30 light:bg-sky-100 w-fit rounded-lg px-4 py-2 mb-2">
          <Gauge
            strokeWidth={1.5}
            className="shrink-0"
            size={24}
            aria-hidden="true"
          />
          <p className="text-sm">{t("agent.performance-warning")}</p>
        </div>
      )}

      <div className="flex flex-wrap items-center">
        <h2 id={headingId} className={SECTION_HEADING}>
          {t("agent.provider.title")}
        </h2>
        <SavedIndicator name="agentProvider" />
      </div>
      <p id={`${headingId}-help`} className={HELP_TEXT}>
        {t("agent.provider.description")}
      </p>

      <input type="hidden" name="agentProvider" value={selectedLLM} />
      <ProviderPicker
        labelledBy={headingId}
        describedBy={`${headingId}-help`}
        items={llms}
        value={selectedLLM}
        noSettings={["none"]}
        settings={settings}
        purpose="agent"
        placeholder={t("chat.llm.search")}
        onChange={updateLLMChoice}
        onSettingsSaved={() => setSettingsVersion((v) => v + 1)}
      />
      {selectedLLM !== "none" && (
        <div className="mt-4">
          <AgentModelSelection
            key={`${selectedLLM}-${settingsVersion}`}
            provider={selectedLLM}
            workspace={workspace}
          />
        </div>
      )}
    </div>
  );
}
