import paths from "@/utils/paths";
import { Trans, useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import WorkspaceModelSelect from "../../components/WorkspaceModelSelect";
import { TEXT_LINK } from "../../components/SettingsField";

/**
 * These models do NOT support function calling
 * or do not support system prompts
 * and therefore are not supported for agents.
 * @param {string} provider - The AI provider.
 * @param {string} model - The model name.
 * @returns {boolean} Whether the model is supported for agents.
 */
function supportedModel(provider, model = "") {
  if (provider === "openai") {
    return (
      [
        "gpt-3.5-turbo-0301",
        "gpt-4-turbo-2024-04-09",
        "gpt-4-turbo",
        "o1-preview",
        "o1-preview-2024-09-12",
        "o1-mini",
        "o1-mini-2024-09-12",
        "o3-mini",
        "o3-mini-2025-01-31",
      ].includes(model) === false
    );
  }

  return true;
}

export default function AgentModelSelection({ provider, workspace }) {
  const { slug } = useParams();
  const { t } = useTranslation();

  return (
    <WorkspaceModelSelect
      provider={provider}
      name="agentModel"
      label={t("agent.mode.title")}
      help={t("agent.mode.description")}
      defaultValue={workspace?.agentModel}
      isSupported={(model) => supportedModel(provider, model)}
      unsupportedNotice={
        <p className="text-sm text-theme-text-secondary">
          <Trans
            i18nKey="workspace-settings.agent.no-model-choice"
            components={{
              workspace: (
                <Link
                  to={paths.workspace.settings.chatSettings(slug)}
                  className={TEXT_LINK}
                />
              ),
              system: (
                <Link
                  to={paths.settings.llmPreference()}
                  className={TEXT_LINK}
                />
              ),
            }}
          />
        </p>
      }
    />
  );
}
