import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import paths from "@/utils/paths";
import {
  getDefaultSkills,
  getConfigurableSkills,
  getAppIntegrationSkills,
} from "@/pages/Admin/Agents/skills";
import useToolsMenuItems from "../../useToolsMenuItems";
import useAgentSkillsState from "./useAgentSkillsState";
import useSkillSections from "./useSkillSections";
import SkillRow from "./SkillRow";
import SkillSection from "./SkillSection";
import { Wrench, Search, LoaderCircle } from "lucide-react";
import { useIsAgentSessionActive } from "@/utils/chat/agent";

const MIN_ITEMS_TO_SHOW_SEARCH = 10;

export default function AgentSkillsTab({
  highlightedIndex = -1,
  registerItemCount,
  workspace,
  listboxId,
  listboxLabelledBy,
  getOptionId = (index) => `agent-skill-${index}`,
}) {
  const { t } = useTranslation();
  const { showAgentCommand = true } = workspace ?? {};
  const agentSessionActive = useIsAgentSessionActive();

  // Get skill definitions
  const defaultSkills = getDefaultSkills(t);
  const appIntegrationSkills = getAppIntegrationSkills(t);

  // All skill state management
  const {
    fileSystemAgentAvailable,
    imageGenerationAvailable,
    importedSkills,
    flows,
    mcpServers,
    loading,
    mcpLoading,
    isSkillEnabled,
    toggleSkill,
    toggleImportedSkill,
    toggleFlow,
    toggleMcpTool,
    isMultiUser,
    isSubSkillEnabled,
    toggleSubSkill,
    disabledSubSkills,
  } = useAgentSkillsState(defaultSkills);

  const configurableSkills = getConfigurableSkills(t, {
    fileSystemAgentAvailable,
    imageGenerationAvailable,
  });

  // UI state
  const [expandedSections, setExpandedSections] = useState({});
  const [expandedSubSections, setExpandedSubSections] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  const showAgentCmdActivationAlert = showAgentCommand && !agentSessionActive;

  // Build all sections
  const sections = useSkillSections({
    t,
    defaultSkills,
    configurableSkills,
    appIntegrationSkills,
    importedSkills,
    flows,
    mcpServers,
    isMultiUser,
    isSkillEnabled,
    toggleSkill,
    isSubSkillEnabled,
    toggleSubSkill,
    toggleImportedSkill,
    toggleFlow,
    toggleMcpTool,
    disabledSubSkills,
  });

  // Section expansion helpers
  function isSectionExpanded(sectionId) {
    return !!(searchQuery.trim() || expandedSections[sectionId]);
  }

  function toggleSection(sectionId) {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  }

  function isSubSectionExpanded(subSectionId) {
    return !!(searchQuery.trim() || expandedSubSections[subSectionId]);
  }

  function toggleSubSection(subSectionId) {
    setExpandedSubSections((prev) => ({
      ...prev,
      [subSectionId]: !prev[subSectionId],
    }));
  }

  // Filter sections by search query
  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return sections;
    const q = searchQuery.toLowerCase();
    return sections
      .map((section) => {
        const items = section.items.filter((item) => {
          const nameMatches = item.name.toLowerCase().includes(q);
          const subSkillMatches =
            item.subSkills?.some((sub) => sub.name.toLowerCase().includes(q)) ??
            false;
          return nameMatches || subSkillMatches;
        });
        return {
          ...section,
          items,
          enabledCount: items.filter((i) => i.enabled).length,
        };
      })
      .filter((section) => section.items.length > 0);
  }, [sections, searchQuery]);

  // Flat list of navigable items for keyboard nav
  const { flatItems, flatIndexMap } = useMemo(() => {
    const items = [];
    const indexMap = {};
    for (const section of filteredSections) {
      indexMap[section.id] = items.length;
      items.push({
        type: "header",
        id: section.id,
        onToggle: () => toggleSection(section.id),
      });
      if (isSectionExpanded(section.id)) {
        for (const item of section.items) {
          indexMap[item.id] = items.length;
          items.push(item);

          // Must mirror the render below: the sub-skills block only exists
          // while its parent skill is enabled.
          if (item.hasSubSkills && item.subSkills && item.enabled) {
            indexMap[`subsection-${item.id}`] = items.length;
            items.push({
              type: "subheader",
              id: `subsection-${item.id}`,
              parentId: item.id,
              onToggle: () => toggleSubSection(item.id),
            });

            if (isSubSectionExpanded(item.id)) {
              for (const subItem of item.subSkills) {
                indexMap[subItem.id] = items.length;
                items.push(subItem);
              }
            }
          }
        }
      }
    }
    return { flatItems: items, flatIndexMap: indexMap };
  }, [filteredSections, expandedSections, expandedSubSections, searchQuery]);

  const totalItemCount = sections.reduce((sum, s) => sum + s.items.length, 0);

  useToolsMenuItems({
    items: flatItems,
    highlightedIndex,
    onSelect: (item) => {
      if (item.type === "header") return item.onToggle();
      item.onToggle();
    },
    registerItemCount,
  });

  if (loading) return null;

  return (
    <>
      {showAgentCmdActivationAlert && (
        <p className="text-xs text-theme-text-secondary text-center py-1">
          {t("chat_window.use_agent_session_to_use_tools")}
        </p>
      )}
      {totalItemCount >= MIN_ITEMS_TO_SHOW_SEARCH && (
        <SearchInput
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder={t("common.search")}
        />
      )}
      <div
        role="listbox"
        id={listboxId}
        aria-labelledby={listboxLabelledBy}
        className="flex flex-col"
      >
        {filteredSections.map((section) => (
          <SkillSection
            key={section.id}
            optionId={getOptionId(flatIndexMap[section.id])}
            name={section.name}
            expanded={isSectionExpanded(section.id)}
            onToggle={() => toggleSection(section.id)}
            enabledCount={section.enabledCount}
            totalCount={section.items.length}
            isMcp={section.isMcp}
            highlighted={highlightedIndex === flatIndexMap[section.id]}
          >
            {section.items.map((item) => (
              <div key={item.id} role="none">
                <SkillRow
                  optionId={getOptionId(flatIndexMap[item.id])}
                  name={item.name}
                  enabled={item.enabled}
                  onToggle={item.onToggle}
                  highlighted={highlightedIndex === flatIndexMap[item.id]}
                />
                {item.hasSubSkills && item.subSkills && item.enabled && (
                  <SkillSection
                    optionId={getOptionId(
                      flatIndexMap[`subsection-${item.id}`]
                    )}
                    name={t("chat_window.sub_skills")}
                    expanded={isSubSectionExpanded(item.id)}
                    onToggle={() => toggleSubSection(item.id)}
                    enabledCount={
                      item.subSkills.filter((s) => s.enabled).length
                    }
                    totalCount={item.subSkills.length}
                    highlighted={
                      highlightedIndex === flatIndexMap[`subsection-${item.id}`]
                    }
                    indented
                  >
                    {item.subSkills.map((subItem) => (
                      <SkillRow
                        key={subItem.id}
                        optionId={getOptionId(flatIndexMap[subItem.id])}
                        name={subItem.name}
                        enabled={subItem.enabled}
                        onToggle={subItem.onToggle}
                        highlighted={
                          highlightedIndex === flatIndexMap[subItem.id]
                        }
                        disabled={!subItem.parentEnabled}
                      />
                    ))}
                  </SkillSection>
                )}
              </div>
            ))}
          </SkillSection>
        ))}
      </div>
      {mcpLoading && (
        <div role="status" className="flex items-center gap-1.5 px-2 py-1.5">
          <LoaderCircle
            strokeWidth={1.5}
            size={12}
            aria-hidden="true"
            className="text-zinc-400 light:text-slate-500 animate-spin"
          />
          <span className="text-[10px] text-zinc-400 light:text-slate-500">
            {t("chat_window.loading_mcp_servers")}
          </span>
        </div>
      )}
      {filteredSections.length === 0 && !mcpLoading && searchQuery.trim() && (
        <p
          role="status"
          className="text-xs text-zinc-400 light:text-slate-500 text-center py-2"
        >
          {t("chat_window.no_tools_found")}
        </p>
      )}
      <Link
        to={paths.settings.agentSkills()}
        className="flex items-center gap-1.5 px-2 min-h-11 md:min-h-0 md:h-6 rounded cursor-pointer hover:bg-zinc-700/50 light:hover:bg-slate-100 text-theme-text-primary transition-colors duration-quick"
      >
        <Wrench
          strokeWidth={1.5}
          size={12}
          aria-hidden="true"
          className="text-theme-text-primary"
        />
        <span className="text-xs text-theme-text-primary">
          {t("chat_window.manage_agent_skills")}
        </span>
      </Link>
    </>
  );
}

function SearchInput({ value, onChange, placeholder }) {
  return (
    <div className="relative shrink-0">
      <Search
        strokeWidth={1.5}
        size={12}
        aria-hidden="true"
        className="absolute left-2 top-1/2 -translate-y-1/2 text-zinc-400 light:text-slate-500"
      />
      <input
        type="search"
        aria-label={placeholder}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onMouseDown={(e) => e.stopPropagation()}
        onKeyDown={(e) => {
          // First Escape clears the query; with an empty query it bubbles up
          // so the tools popup closes and focus returns to the prompt.
          if (e.key === "Escape" && value) {
            e.preventDefault();
            onChange("");
          }
          if (e.key === "Enter") e.preventDefault();
        }}
        className="w-full pl-7 pr-2 py-1 text-base md:text-xs bg-zinc-700/50 light:bg-slate-100 border border-zinc-600 light:border-slate-300 rounded text-white light:text-slate-900 placeholder:text-zinc-400 light:placeholder:text-slate-600 focus:border-zinc-500 light:focus:border-slate-500"
      />
    </div>
  );
}
