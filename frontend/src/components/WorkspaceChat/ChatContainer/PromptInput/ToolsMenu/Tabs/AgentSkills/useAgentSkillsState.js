import { useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import Admin from "@/models/admin";
import showToast from "@/utils/toast";
import System from "@/models/system";
import AgentPlugins from "@/models/experimental/agentPlugins";
import AgentFlows from "@/models/agentFlows";
import MCPServers from "@/models/mcpServers";
import { getSubSkillPreferenceKeys } from "./skillRegistry";
import useSubSkillPreferences from "./useSubSkillPreferences";
import { toggleAgentSessionTool } from "@/utils/chat/agent";

function notifyToggleFailed(t) {
  showToast(t("chat-input.skill-toggle-failed"), "error", { clear: true });
}

/**
 * Core hook for managing all agent skill state.
 * Handles fetching, toggling, and persisting skill preferences.
 */
export default function useAgentSkillsState(defaultSkills) {
  const { t } = useTranslation();
  // Core skill state
  const [fileSystemAgentAvailable, setFileSystemAgentAvailable] =
    useState(false);
  const [imageGenerationAvailable, setImageGenerationAvailable] =
    useState(false);
  const [isMultiUser, setIsMultiUser] = useState(false);
  const [disabledDefaults, setDisabledDefaults] = useState([]);
  const [enabledConfigurable, setEnabledConfigurable] = useState([]);
  const [importedSkills, setImportedSkills] = useState([]);
  const [flows, setFlows] = useState([]);
  const [mcpServers, setMcpServers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mcpLoading, setMcpLoading] = useState(true);

  // Sub-skill preferences (managed by dedicated hook)
  const subSkillPrefs = useSubSkillPreferences();

  // Fetch all skill settings on mount
  useEffect(() => {
    fetchSkillSettings();
    fetchMcpServers();
  }, []);

  async function fetchSkillSettings() {
    try {
      const subSkillPrefKeys = getSubSkillPreferenceKeys();
      const [
        prefs,
        flowsRes,
        fsAgentAvailable,
        multiUserMode,
        imageGenAvailable,
      ] = await Promise.all([
        Admin.systemPreferencesByFields([
          "disabled_agent_skills",
          "default_agent_skills",
          "imported_agent_skills",
          ...subSkillPrefKeys,
        ]),
        AgentFlows.listFlows(),
        System.isFileSystemAgentAvailable(),
        System.isMultiUserMode(),
        System.isImageGenerationAvailable(),
      ]);

      if (prefs?.settings) {
        setDisabledDefaults(prefs.settings.disabled_agent_skills ?? []);
        setEnabledConfigurable(prefs.settings.default_agent_skills ?? []);
        setImportedSkills(prefs.settings.imported_agent_skills ?? []);
        subSkillPrefs.loadFromSettings(prefs.settings);
      }
      if (flowsRes?.flows) setFlows(flowsRes.flows);
      setFileSystemAgentAvailable(fsAgentAvailable);
      setImageGenerationAvailable(imageGenAvailable);
      setIsMultiUser(!!multiUserMode);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  async function fetchMcpServers() {
    try {
      const { servers = [] } = await MCPServers.listServers();
      setMcpServers(servers);
    } catch (e) {
      console.error(e);
    } finally {
      setMcpLoading(false);
    }
  }

  // Skill enabled/disabled checks
  const isSkillEnabled = useCallback(
    (key) => {
      return key in defaultSkills
        ? !disabledDefaults.includes(key)
        : enabledConfigurable.includes(key);
    },
    [defaultSkills, disabledDefaults, enabledConfigurable]
  );

  // Toggle functions. Each one updates the UI optimistically and rolls back
  // with a toast if the server does not save the change.
  const toggleSkill = useCallback(
    async (key) => {
      const toggleItem = (arr, item) =>
        arr.includes(item) ? arr.filter((s) => s !== item) : [...arr, item];
      const newEnabled = !isSkillEnabled(key);

      if (key in defaultSkills) {
        const previous = disabledDefaults;
        const updated = toggleItem(disabledDefaults, key);
        setDisabledDefaults(updated);
        const res = await Admin.updateSystemPreferences({
          disabled_agent_skills: updated.join(","),
          default_agent_skills: enabledConfigurable.join(","),
        });
        if (!res?.success) {
          setDisabledDefaults(previous);
          return notifyToggleFailed(t);
        }
        toggleAgentSessionTool(key, newEnabled);
        return;
      }

      const previous = enabledConfigurable;
      const updated = toggleItem(enabledConfigurable, key);
      setEnabledConfigurable(updated);
      const res = await Admin.updateSystemPreferences({
        disabled_agent_skills: disabledDefaults.join(","),
        default_agent_skills: updated.join(","),
      });
      if (!res?.success) {
        setEnabledConfigurable(previous);
        return notifyToggleFailed(t);
      }
      toggleAgentSessionTool(key, newEnabled);
    },
    [defaultSkills, disabledDefaults, enabledConfigurable, isSkillEnabled, t]
  );

  const toggleImportedSkill = useCallback(
    async (skill) => {
      const setActive = (active) =>
        setImportedSkills((prev) =>
          prev.map((s) => (s.hubId === skill.hubId ? { ...s, active } : s))
        );
      const newActive = !skill.active;
      setActive(newActive);
      const saved = await AgentPlugins.toggleFeature(skill.hubId, newActive);
      if (!saved) {
        setActive(skill.active);
        return notifyToggleFailed(t);
      }
      toggleAgentSessionTool(skill.hubId, newActive);
    },
    [t]
  );

  const toggleFlow = useCallback(
    async (flow) => {
      const setActive = (active) =>
        setFlows((prev) =>
          prev.map((f) => (f.uuid === flow.uuid ? { ...f, active } : f))
        );
      const newActive = !flow.active;
      setActive(newActive);
      const res = await AgentFlows.toggleFlow(flow.uuid, newActive);
      if (!res?.success) {
        setActive(flow.active);
        return notifyToggleFailed(t);
      }
      toggleAgentSessionTool(`@@flow_${flow.uuid}`, newActive);
    },
    [t]
  );

  const toggleMcpTool = useCallback(
    async (serverName, toolName, currentlyEnabled) => {
      const newEnabled = !currentlyEnabled;
      const setToolEnabled = (enabled) =>
        setMcpServers((prev) => {
          return prev.map((server) => {
            if (server.name !== serverName) return server;
            const currentSuppressed =
              server.config?.anythingllm?.suppressedTools || [];
            const withoutTool = currentSuppressed.filter(
              (name) => name !== toolName
            );
            const newSuppressed = enabled
              ? withoutTool
              : [...withoutTool, toolName];
            return {
              ...server,
              config: {
                ...server.config,
                anythingllm: {
                  ...server.config?.anythingllm,
                  suppressedTools: newSuppressed,
                },
              },
            };
          });
        });
      setToolEnabled(newEnabled);
      const res = await MCPServers.toggleTool(serverName, toolName, newEnabled);
      if (!res?.success) {
        setToolEnabled(currentlyEnabled);
        return notifyToggleFailed(t);
      }
      toggleAgentSessionTool(
        `${serverName}-${toolName}`,
        newEnabled,
        serverName
      );
    },
    [t]
  );

  return {
    // State
    fileSystemAgentAvailable,
    imageGenerationAvailable,
    isMultiUser,
    disabledDefaults,
    enabledConfigurable,
    importedSkills,
    flows,
    mcpServers,
    loading,
    mcpLoading,

    // Skill checks
    isSkillEnabled,

    // Toggle functions
    toggleSkill,
    toggleImportedSkill,
    toggleFlow,
    toggleMcpTool,

    // Sub-skill preferences (delegated)
    isSubSkillEnabled: subSkillPrefs.isSubSkillEnabled,
    toggleSubSkill: subSkillPrefs.toggleSubSkill,
    disabledSubSkills: subSkillPrefs.disabledSubSkills,
  };
}
