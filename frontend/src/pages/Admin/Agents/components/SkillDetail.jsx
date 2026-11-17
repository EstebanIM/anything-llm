import { useTranslation } from "react-i18next";
import { Bot } from "lucide-react";
import ImportedSkillConfig from "../Imported/ImportedSkillConfig";
import FlowPanel from "../AgentFlows/FlowPanel";
import ServerPanel from "../MCPServers/ServerPanel";

/**
 * Panel for the selected skill, imported skill, flow or MCP server; shared by
 * the desktop two-column layout and the phone detail view.
 *
 * @param {object} props
 * @param {{kind: "skill" | "imported" | "flow" | "mcp", id: string} | null} props.selection
 */
export default function SkillDetail({
  selection,
  defaultSkills = {},
  configurableSkills = {},
  appIntegrationSkills = {},
  settings,
  agentSkills = [],
  disabledAgentSkills = [],
  toggleDefaultSkill,
  toggleAgentSkill,
  hasChanges,
  setHasChanges,
  importedSkill = null,
  setImportedSkills,
  onImportedDelete,
  flow = null,
  flowEnabled = false,
  toggleFlow,
  onFlowDelete,
  server = null,
  onServerToggled,
  onServerDelete,
  onToggleTool,
}) {
  if (selection?.kind === "mcp" && server) {
    return (
      <ServerPanel
        server={server}
        onServerToggled={onServerToggled}
        onDelete={onServerDelete}
        onToggleTool={onToggleTool}
      />
    );
  }

  if (selection?.kind === "flow" && flow) {
    return (
      <FlowPanel
        flow={flow}
        toggleFlow={toggleFlow}
        enabled={flowEnabled}
        onDelete={onFlowDelete}
      />
    );
  }

  if (selection?.kind === "imported" && importedSkill) {
    return (
      <ImportedSkillConfig
        key={importedSkill.hubId}
        selectedSkill={importedSkill}
        setImportedSkills={setImportedSkills}
        onDelete={onImportedDelete}
      />
    );
  }

  if (selection?.kind === "skill") {
    const id = selection.id;
    if (defaultSkills[id]) {
      const config = defaultSkills[id];
      const Component = config.component;
      return (
        <Component
          skill={config.skill}
          settings={settings}
          toggleSkill={toggleDefaultSkill}
          enabled={!disabledAgentSkills.includes(config.skill)}
          setHasChanges={setHasChanges}
          hasChanges={hasChanges}
          {...config}
        />
      );
    }
    const config = configurableSkills[id] || appIntegrationSkills[id];
    if (config) {
      const Component = config.component;
      return (
        <Component
          skill={config.skill}
          settings={settings}
          toggleSkill={toggleAgentSkill}
          enabled={agentSkills.includes(config.skill)}
          setHasChanges={setHasChanges}
          hasChanges={hasChanges}
          {...config}
        />
      );
    }
  }

  return <EmptyDetail />;
}

function EmptyDetail() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center gap-y-2 h-full min-h-[200px] text-center text-theme-text-secondary">
      <Bot strokeWidth={1.5} size={40} aria-hidden="true" />
      <p className="font-medium">{t("agent-pages.select")}</p>
    </div>
  );
}
