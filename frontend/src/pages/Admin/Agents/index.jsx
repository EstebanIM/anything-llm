import { useEffect, useId, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  Bot,
  ChevronLeft,
  Hammer,
  Package,
  Plug,
  Workflow,
  Wrench,
} from "lucide-react";
import Sidebar from "@/components/SettingsSidebar";
import Admin from "@/models/admin";
import System from "@/models/system";
import MCPServers from "@/models/mcpServers";
import AgentFlows from "@/models/agentFlows";
import showToast from "@/utils/toast";
import { serverErrorMessage } from "@/utils/serverErrors";
import paths from "@/utils/paths";
import useIsMobile from "@/hooks/useIsMobile";
import ContextualSaveBar from "@/components/ContextualSaveBar";
import UnsavedChangesGuard from "@/components/UnsavedChangesGuard";
import PreLoader from "@/components/Preloader";
import {
  getDefaultSkills,
  getConfigurableSkills,
  getAppIntegrationSkills,
} from "./skills.jsx";
import ImportedSkillList from "./Imported/SkillList";
import AgentFlowsList from "./AgentFlows";
import { MCPServersSection, useMcpServers } from "./MCPServers";
import AgentSkillSettings from "./AgentSkillSettings";
import SkillDetail from "./components/SkillDetail";
import { RowList, RowButton, SectionHeading } from "./components/SkillRows";
import { LoadError } from "./components/SubSkills";
import useFocusAfterRemoval from "@/hooks/useFocusAfterRemoval";

const PREFERENCE_FIELDS = [
  "disabled_agent_skills",
  "default_agent_skills",
  "imported_agent_skills",
];
const OUTLOOK_SKILL = "outlook-agent";
const SECTION_ICON = {
  strokeWidth: 1.5,
  size: 24,
  "aria-hidden": "true",
  className: "shrink-0",
};
const HEADER_LINK =
  "inline-flex items-center gap-x-1 min-h-[44px] md:min-h-[32px] px-2 rounded-lg text-sm text-theme-text-secondary hover:text-theme-text-primary hover:bg-white/5 light:hover:bg-slate-100 transition-colors duration-quick ease-smooth";

const toggleIn = (list, value) =>
  list.includes(value) ? list.filter((v) => v !== value) : [...list, value];

function findRow(container, rowKey) {
  return (
    [...(container?.querySelectorAll("[data-row-key]") || [])].find(
      (el) => el.dataset.rowKey === rowKey
    ) || null
  );
}

function isVisible(el) {
  return !!el && el.getClientRects().length > 0;
}

export default function AdminAgents() {
  const { t } = useTranslation();
  const isMobile = useIsMobile();
  const formEl = useRef(null);
  const headingRef = useRef(null);
  const listRef = useRef(null);
  const detailRef = useRef(null);
  const builtinId = useId();
  const appsId = useId();
  const importedId = useId();
  const flowsId = useId();
  const mcpId = useId();
  const sectionIds = {
    skill: builtinId,
    imported: importedId,
    flow: flowsId,
    mcp: mcpId,
  };
  // After a delete: the next row of the same section, else its heading.
  const sectionHeading = (kind) => ({
    get current() {
      return document.getElementById(sectionIds[kind]);
    },
  });
  const focusAfterRowRemoval = {
    flow: useFocusAfterRemoval(
      listRef,
      sectionHeading("flow"),
      '[data-row-key^="flow:"]'
    ),
    imported: useFocusAfterRemoval(
      listRef,
      sectionHeading("imported"),
      '[data-row-key^="imported:"]'
    ),
    mcp: useFocusAfterRemoval(
      listRef,
      sectionHeading("mcp"),
      '[data-row-key^="mcp:"]'
    ),
  };

  const [status, setStatus] = useState("loading"); // loading | ready | error
  const [hasChanges, setHasChanges] = useState(false);
  const [saving, setSaving] = useState(false);
  const [settings, setSettings] = useState({});
  // { kind: "skill" | "imported" | "flow" | "mcp", id } of the open panel
  const [selection, setSelection] = useState(null);
  const [showDetail, setShowDetail] = useState(false);
  const [panelKey, setPanelKey] = useState(0);
  // Skill panels left with unsaved edits stay mounted (hidden) while another
  // item is open, so Save still sends their fields.
  const [keptSkillIds, setKeptSkillIds] = useState([]);
  const [focusRequest, setFocusRequest] = useState(null);

  const [agentSkills, setAgentSkills] = useState([]);
  const [importedSkills, setImportedSkills] = useState([]);
  const [disabledAgentSkills, setDisabledAgentSkills] = useState([]);

  const [agentFlows, setAgentFlows] = useState([]);
  const [flowsStatus, setFlowsStatus] = useState("loading");
  const [activeFlowIds, setActiveFlowIds] = useState([]);

  const [fileSystemAgentAvailable, setFileSystemAgentAvailable] =
    useState(false);
  const [createFilesAgentAvailable, setCreateFilesAgentAvailable] =
    useState(false);

  // Last saved state, restored by "Discard changes".
  const saved = useRef({
    agentSkills: [],
    disabledAgentSkills: [],
    activeFlowIds: [],
  });
  // Coming back from the Outlook sign-in: open its panel to show the result.
  const outlookReturn = useRef(
    new URLSearchParams(window.location.search).has("outlook_auth")
  );
  const mcp = useMcpServers();

  const defaultSkills = getDefaultSkills(t);
  const allConfigurableSkills = getConfigurableSkills(t, {
    fileSystemAgentAvailable,
    createFilesAgentAvailable,
  });
  const allAppIntegrationSkills = getAppIntegrationSkills(t);

  // Filter skills based on mode restrictions
  // singleUserOnly -> hidden in multi-user mode
  // multiUserOnly -> hidden when NOT in multi-user mode
  const isMultiUserMode = settings?.MultiUserMode ?? false;
  const filterSkillsByMode = ([_, skillConfig]) => {
    if (!skillConfig.mode) return true;
    if (skillConfig.mode.includes("singleUserOnly") && isMultiUserMode)
      return false;
    if (skillConfig.mode.includes("multiUserOnly") && !isMultiUserMode)
      return false;
    return true;
  };
  const configurableSkills = Object.fromEntries(
    Object.entries(allConfigurableSkills).filter(filterSkillsByMode)
  );
  const appIntegrationSkills = Object.fromEntries(
    Object.entries(allAppIntegrationSkills).filter(filterSkillsByMode)
  );

  function applyPreferences(prefs) {
    const next = {
      agentSkills: prefs?.default_agent_skills ?? [],
      disabledAgentSkills: prefs?.disabled_agent_skills ?? [],
    };
    setAgentSkills(next.agentSkills);
    setDisabledAgentSkills(next.disabledAgentSkills);
    setImportedSkills(prefs?.imported_agent_skills ?? []);
    saved.current = { ...saved.current, ...next };
  }

  async function loadFlows() {
    setFlowsStatus("loading");
    const res = await AgentFlows.listFlows();
    if (res?.success === false || !Array.isArray(res?.flows)) {
      setFlowsStatus("error");
      return;
    }
    const flowIds = res.flows.filter((f) => f.active).map((f) => f.uuid);
    setAgentFlows(res.flows);
    setActiveFlowIds(flowIds);
    saved.current = { ...saved.current, activeFlowIds: flowIds };
    setFlowsStatus("ready");
  }

  async function fetchSettings() {
    setStatus("loading");
    try {
      const [_settings, _preferences, fsAgentAvailable, createFilesAvailable] =
        await Promise.all([
          System.keys(),
          Admin.systemPreferencesByFields(PREFERENCE_FIELDS),
          System.isFileSystemAgentAvailable(),
          System.isCreateFilesAgentAvailable(),
          loadFlows(),
        ]);
      // Without the saved preferences a save would overwrite them with
      // empty lists, so the page does not render its form.
      if (!_settings || !_preferences?.settings) {
        setStatus("error");
        return;
      }
      setSettings({ ..._settings, preferences: _preferences.settings });
      applyPreferences(_preferences.settings);
      setFileSystemAgentAvailable(!!fsAgentAvailable);
      setCreateFilesAgentAvailable(!!createFilesAvailable);
      setStatus("ready");
    } catch (error) {
      console.error("Failed to load agent settings:", error);
      setStatus("error");
    }
  }

  useEffect(() => {
    fetchSettings();
  }, []);

  useEffect(() => {
    if (status !== "ready" || !outlookReturn.current) return;
    outlookReturn.current = false;
    if (!appIntegrationSkills[OUTLOOK_SKILL]) return;
    setSelection({ kind: "skill", id: OUTLOOK_SKILL });
    setShowDetail(true);
    setFocusRequest({ target: "detail" });
  }, [status]);

  useEffect(() => {
    if (!hasChanges) setKeptSkillIds([]);
  }, [hasChanges]);

  /** Moves focus to the open panel's heading; false when there is none. */
  function focusDetailHeading() {
    const root = detailRef.current;
    if (!isVisible(root)) return false;
    const heading = [...root.querySelectorAll("h2")].find(
      (h2) => !h2.closest("[hidden]")
    );
    if (!heading) return false;
    if (!heading.hasAttribute("tabindex"))
      heading.setAttribute("tabindex", "-1");
    heading.focus();
    return true;
  }

  useEffect(() => {
    if (!focusRequest) return;
    // After the render and after a closing dialog has returned focus.
    const timer = setTimeout(() => {
      const request = focusRequest;
      setFocusRequest(null);
      if (request.target === "detail") {
        if (!focusDetailHeading()) detailRef.current?.focus();
        return;
      }
      const row =
        request.target === "row"
          ? findRow(listRef.current, request.rowKey)
          : null;
      const fallback = request.kind
        ? document.getElementById(sectionIds[request.kind])
        : headingRef.current;
      (row || fallback || headingRef.current)?.focus();
    }, 0);
    return () => clearTimeout(timer);
  }, [focusRequest]);

  /** The save bar disappears after Save / Discard: keep focus on the page. */
  function refocusIfLost() {
    setTimeout(() => {
      const active = document.activeElement;
      if (active && active !== document.body && document.body.contains(active))
        return;
      if (!focusDetailHeading()) headingRef.current?.focus();
    }, 0);
  }

  const toggleDefaultSkill = (skillName) => {
    setDisabledAgentSkills((prev) => toggleIn(prev, skillName));
    setHasChanges(true);
  };

  const toggleAgentSkill = (skillName) => {
    setAgentSkills((prev) => toggleIn(prev, skillName));
    setHasChanges(true);
  };

  // Flows are switched on the server right away: the saved state moves too.
  const toggleFlow = (flowId) => {
    setActiveFlowIds((prev) => toggleIn(prev, flowId));
    saved.current = {
      ...saved.current,
      activeFlowIds: toggleIn(saved.current.activeFlowIds, flowId),
    };
  };

  // One rule for phone and desktop: only named fields of the page form count.
  // Search boxes have no name, and switches that save on their own (flows,
  // imported skills, MCP) either have no name or are not inputs. Fields in a
  // dialog (agent settings, SQL connection) bubble here through the React
  // portal but are not part of this form.
  const handleFormChange = (e) => {
    const target = e.target;
    if (!target?.name) return;
    if (target.closest?.('[role="dialog"]')) return;
    setHasChanges(true);
  };

  const handleSubmit = async (e) => {
    e?.preventDefault?.();
    if (saving || !formEl.current) return;
    setSaving(true);
    const data = { system: {}, env: {} };
    const form = new FormData(formEl.current);
    for (const [key, value] of form.entries()) {
      if (key.startsWith("system::")) {
        data.system[key.slice("system::".length)] = String(value);
      } else if (key.startsWith("env::")) {
        data.env[key.slice("env::".length)] = String(value);
      }
    }

    const prefsRes = await Admin.updateSystemPreferences(data.system);
    const envRes =
      Object.keys(data.env).length > 0
        ? await System.updateSystem(data.env)
        : null;
    if (!prefsRes?.success || envRes?.error) {
      setSaving(false);
      showToast(
        serverErrorMessage(
          prefsRes?.error || envRes?.error,
          t,
          "agent-pages.save-failed"
        ),
        "error",
        { clear: true }
      );
      return;
    }

    const [_settings, _preferences] = await Promise.all([
      System.keys(),
      Admin.systemPreferencesByFields(PREFERENCE_FIELDS),
    ]);
    if (_settings && _preferences?.settings) {
      setSettings({ ..._settings, preferences: _preferences.settings });
      applyPreferences(_preferences.settings);
    } else {
      saved.current = { ...saved.current, agentSkills, disabledAgentSkills };
    }
    setHasChanges(false);
    setSaving(false);
    showToast(t("agent-pages.saved"), "success", { clear: true });
    refocusIfLost();
  };

  const handleCancel = () => {
    const last = saved.current;
    setAgentSkills(last.agentSkills);
    setDisabledAgentSkills(last.disabledAgentSkills);
    setActiveFlowIds(last.activeFlowIds);
    // Remount the open panel so its own fields reload the saved values.
    setPanelKey((key) => key + 1);
    setHasChanges(false);
    refocusIfLost();
  };

  const isSelected = (kind, id) =>
    selection?.kind === kind && selection?.id === id;

  const openItem = (kind, id) => {
    if (hasChanges && selection?.kind === "skill") {
      const leaving = selection.id;
      setKeptSkillIds((ids) =>
        ids.includes(leaving) ? ids : [...ids, leaving]
      );
    }
    setSelection({ kind, id });
    if (isMobile) {
      setShowDetail(true);
      setFocusRequest({ target: "detail" });
    }
  };

  const closeDetail = () => {
    setShowDetail(false);
    if (selection)
      setFocusRequest({
        target: "row",
        rowKey: `${selection.kind}:${selection.id}`,
        kind: selection.kind,
      });
  };

  /** After a delete: focus the next row of the section, or its heading. */
  const focusAfterRemoval = (kind, ids, removedId) => {
    focusAfterRowRemoval[kind](ids.indexOf(removedId));
    setSelection(null);
    setShowDetail(false);
  };

  const handleFlowDelete = (flowId) => {
    focusAfterRemoval(
      "flow",
      agentFlows.map((flow) => flow.uuid),
      flowId
    );
    setActiveFlowIds((prev) => prev.filter((id) => id !== flowId));
    saved.current = {
      ...saved.current,
      activeFlowIds: saved.current.activeFlowIds.filter((id) => id !== flowId),
    };
    setAgentFlows((prev) => prev.filter((flow) => flow.uuid !== flowId));
  };

  // ImportedSkillConfig already removed the skill from the list.
  const handleImportedDelete = (hubId) => {
    focusAfterRemoval(
      "imported",
      importedSkills.map((skill) => skill.hubId),
      hubId
    );
  };

  const handleMCPServerDelete = (serverName) => {
    focusAfterRemoval(
      "mcp",
      mcp.servers.map((server) => server.name),
      serverName
    );
    mcp.setServers((prev) =>
      prev.filter((server) => server.name !== serverName)
    );
  };

  const handleMCPServerToggled = async (serverName) => {
    mcp.setServers((prev) =>
      prev.map((server) =>
        server.name === serverName
          ? { ...server, running: !server.running, error: null }
          : server
      )
    );
    // Starting a server loads its tools (or its startup error).
    await mcp.load({ silent: true });
  };

  const handleMCPToolToggle = async (serverName, toolName, enabled) => {
    const { success, error, suppressedTools } = await MCPServers.toggleTool(
      serverName,
      toolName,
      enabled
    );

    if (!success) {
      showToast(
        serverErrorMessage(error, t, "agent-pages.mcp.tool-toggle-failed", {
          values: { tool: toolName },
        }),
        "error",
        { clear: true }
      );
      return;
    }

    mcp.setServers((prev) =>
      prev.map((server) => {
        if (server.name !== serverName) return server;
        return {
          ...server,
          config: {
            ...server.config,
            anythingllm: {
              ...server.config?.anythingllm,
              suppressedTools,
            },
          },
        };
      })
    );
  };

  if (status !== "ready") {
    return (
      <PageShell>
        <div className="flex flex-col gap-y-6 p-4 mt-10 md:mt-0 md:p-6">
          <PageTitle headingRef={headingRef} />
          {status === "loading" ? (
            <div className="flex justify-center py-16">
              <PreLoader />
            </div>
          ) : (
            <LoadError
              message={t("agent-pages.load-error")}
              onRetry={fetchSettings}
            />
          )}
        </div>
      </PageShell>
    );
  }

  const selectedImported =
    selection?.kind === "imported"
      ? (importedSkills.find((skill) => skill.hubId === selection.id) ?? null)
      : null;
  const selectedFlow =
    selection?.kind === "flow"
      ? (agentFlows.find((flow) => flow.uuid === selection.id) ?? null)
      : null;
  const selectedServer =
    selection?.kind === "mcp"
      ? (mcp.servers.find((server) => server.name === selection.id) ?? null)
      : null;
  const skillPanelIds =
    selection?.kind === "skill" && !keptSkillIds.includes(selection.id)
      ? [...keptSkillIds, selection.id]
      : keptSkillIds;
  const detailProps = {
    defaultSkills,
    configurableSkills,
    appIntegrationSkills,
    settings,
    agentSkills,
    disabledAgentSkills,
    toggleDefaultSkill,
    toggleAgentSkill,
    hasChanges,
    setHasChanges,
    importedSkill: selectedImported,
    setImportedSkills,
    onImportedDelete: handleImportedDelete,
    flow: selectedFlow,
    flowEnabled: !!selectedFlow && activeFlowIds.includes(selectedFlow.uuid),
    toggleFlow,
    onFlowDelete: handleFlowDelete,
    server: selectedServer,
    onServerToggled: handleMCPServerToggled,
    onServerDelete: handleMCPServerDelete,
    onToggleTool: handleMCPToolToggle,
  };

  return (
    <PageShell
      footer={
        <>
          <ContextualSaveBar
            showing={hasChanges}
            busy={saving}
            onSave={handleSubmit}
            onCancel={handleCancel}
          />
          <UnsavedChangesGuard when={hasChanges} />
        </>
      }
    >
      <form
        onSubmit={handleSubmit}
        onChange={handleFormChange}
        ref={formEl}
        className={`flex flex-col md:flex-row md:flex-1 md:min-h-0 gap-6 p-4 mt-10 ${
          hasChanges ? "pb-24 md:pb-4" : ""
        }`}
      >
        <input
          name="system::default_agent_skills"
          type="hidden"
          value={agentSkills.join(",")}
        />
        <input
          name="system::disabled_agent_skills"
          type="hidden"
          value={disabledAgentSkills.join(",")}
        />
        <input
          type="hidden"
          name="system::active_agent_flows"
          id="active_agent_flows"
          value={activeFlowIds.join(",")}
        />

        {/* Lists: the only view on phones until an item is opened. */}
        <div
          ref={listRef}
          className={`flex flex-col w-full md:w-auto md:min-w-[280px] md:max-w-[320px] xl:min-w-[360px] xl:max-w-[420px] md:shrink-0 md:min-h-0 ${
            isMobile && showDetail ? "hidden" : ""
          }`}
        >
          <div className="flex-none flex justify-between items-center gap-x-2 mb-4">
            <PageTitle headingRef={headingRef} />
            <AgentSkillSettings />
          </div>

          <div className="md:flex-1 md:min-h-0 md:overflow-y-auto md:pr-2 pb-4">
            <div className="flex flex-col gap-y-6">
              <section
                aria-labelledby={builtinId}
                className="flex flex-col gap-y-3"
              >
                <SectionHeading
                  id={builtinId}
                  icon={<Wrench {...SECTION_ICON} />}
                >
                  {t("agent-pages.builtin")}
                </SectionHeading>
                <SkillList
                  skills={defaultSkills}
                  labelledBy={builtinId}
                  isSelected={(id) => isSelected("skill", id)}
                  onSelect={(id) => openItem("skill", id)}
                  activeSkills={Object.keys(defaultSkills).filter(
                    (skill) => !disabledAgentSkills.includes(skill)
                  )}
                />
                <SkillList
                  skills={configurableSkills}
                  labelledBy={builtinId}
                  isSelected={(id) => isSelected("skill", id)}
                  onSelect={(id) => openItem("skill", id)}
                  activeSkills={agentSkills}
                />
              </section>

              {Object.keys(appIntegrationSkills).length > 0 && (
                <section
                  aria-labelledby={appsId}
                  className="flex flex-col gap-y-3"
                >
                  <SectionHeading
                    id={appsId}
                    icon={<Package {...SECTION_ICON} />}
                  >
                    {t("chat_window.app_integrations")}
                  </SectionHeading>
                  <SkillList
                    skills={appIntegrationSkills}
                    labelledBy={appsId}
                    isSelected={(id) => isSelected("skill", id)}
                    onSelect={(id) => openItem("skill", id)}
                    activeSkills={agentSkills}
                  />
                </section>
              )}

              <section
                aria-labelledby={importedId}
                className="flex flex-col gap-y-3"
              >
                <SectionHeading
                  id={importedId}
                  icon={<Plug {...SECTION_ICON} />}
                >
                  {t("chat_window.custom_skills")}
                </SectionHeading>
                <ImportedSkillList
                  skills={importedSkills}
                  labelledBy={importedId}
                  isSelected={(hubId) => isSelected("imported", hubId)}
                  handleClick={(config) => openItem("imported", config.hubId)}
                />
              </section>

              <section
                aria-labelledby={flowsId}
                className="flex flex-col gap-y-3"
              >
                <SectionHeading
                  id={flowsId}
                  icon={<Workflow {...SECTION_ICON} />}
                  action={
                    agentFlows.length > 0 && (
                      <Link to={paths.agents.builder()} className={HEADER_LINK}>
                        <Hammer
                          strokeWidth={1.5}
                          size={16}
                          aria-hidden="true"
                        />
                        {t("agent-pages.flows.open-builder")}
                      </Link>
                    )
                  }
                >
                  {t("chat_window.agent_flows")}
                </SectionHeading>
                {flowsStatus === "error" ? (
                  <LoadError
                    message={t("agent-pages.flows.load-error")}
                    onRetry={loadFlows}
                  />
                ) : (
                  <AgentFlowsList
                    flows={agentFlows}
                    labelledBy={flowsId}
                    isSelected={(uuid) => isSelected("flow", uuid)}
                    handleClick={(flow) => openItem("flow", flow.uuid)}
                    activeFlowIds={activeFlowIds}
                  />
                )}
              </section>

              <MCPServersSection
                headingId={mcpId}
                mcp={mcp}
                isSelected={(name) => isSelected("mcp", name)}
                handleClick={(server) => openItem("mcp", server.name)}
              />
            </div>
          </div>
        </div>

        {/* Selected item: beside the lists from md up, its own view on phones. */}
        <div
          className={`flex-[2] min-w-0 flex flex-col gap-y-3 md:mt-10 md:min-h-0 ${
            isMobile && !showDetail ? "hidden" : ""
          }`}
        >
          {isMobile && (
            <button
              type="button"
              onClick={closeDetail}
              className="self-start inline-flex items-center gap-x-1 min-h-[44px] pr-3 pl-1 rounded-lg text-sm font-medium text-theme-text-primary hover:bg-white/5 light:hover:bg-slate-100 transition-colors duration-quick ease-smooth"
            >
              <ChevronLeft strokeWidth={1.5} size={20} aria-hidden="true" />
              {t("agent-pages.back")}
            </button>
          )}
          <section
            ref={detailRef}
            tabIndex={-1}
            aria-label={t("agent-pages.detail")}
            className="bg-theme-bg-secondary text-white rounded-xl md:flex-1 p-4 md:overflow-y-auto"
          >
            {skillPanelIds.map((id) => (
              <div
                key={`skill:${id}:${panelKey}`}
                hidden={!isSelected("skill", id)}
              >
                <SkillDetail
                  selection={{ kind: "skill", id }}
                  {...detailProps}
                />
              </div>
            ))}
            {selection?.kind !== "skill" && (
              <SkillDetail
                key={`${selection?.kind}:${selection?.id}:${panelKey}`}
                selection={selection}
                {...detailProps}
              />
            )}
          </section>
        </div>
      </form>
    </PageShell>
  );
}

function PageShell({ children, footer = null }) {
  return (
    <div
      id="workspace-agent-settings-container"
      className="w-screen h-screen overflow-hidden bg-zinc-950 light:bg-slate-50 flex pt-6 md:pt-0"
    >
      <Sidebar />
      <main className="relative md:ml-[2px] md:mr-[16px] md:my-[16px] md:rounded-[16px] w-full h-full md:h-[calc(100%-32px)] flex flex-col overflow-y-auto md:overflow-hidden">
        {children}
      </main>
      {footer}
    </div>
  );
}

function PageTitle({ headingRef }) {
  const { t } = useTranslation();
  return (
    <h1
      ref={headingRef}
      tabIndex={-1}
      className="flex items-center gap-x-2 text-lg leading-6 font-bold text-theme-text-primary"
    >
      <Bot {...SECTION_ICON} />
      {t("settings.agent-skills")}
    </h1>
  );
}

function SkillList({
  skills = {},
  labelledBy,
  isSelected = () => false,
  onSelect,
  activeSkills = [],
}) {
  const { t } = useTranslation();
  const entries = Object.entries(skills);
  if (entries.length === 0) return null;

  return (
    <RowList labelledBy={labelledBy}>
      {entries.map(([skill, config]) => (
        <RowButton
          key={skill}
          rowKey={`skill:${skill}`}
          selected={isSelected(skill)}
          onClick={() => onSelect?.(skill)}
          leading={config.Icon ? <config.Icon size={16} /> : null}
          title={config.title}
          status={
            activeSkills.includes(skill)
              ? t("agent-pages.skill-on")
              : t("agent-pages.skill-off")
          }
        />
      ))}
    </RowList>
  );
}
