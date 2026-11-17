import { Plus } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Tooltip } from "react-tooltip";
import { useMemoriesContext, LIMITS } from "../MemoriesContext";

const TABS = ["workspace", "global"];

export default function MemoryTabs() {
  const {
    workspace,
    activeTab,
    setActiveTab,
    memories,
    openCreateModal,
    createButtonRef,
    ids,
  } = useMemoriesContext();
  const { t } = useTranslation();
  const workspaceName =
    workspace?.name || t("chat_window.memories.tab_workspace");
  const counts = {
    workspace: memories.workspace.length,
    global: memories.global.length,
  };
  const atLimit = counts[activeTab] >= LIMITS[activeTab];

  // Arrow keys move between the two tabs (roving tabindex).
  function handleKeyDown(e) {
    const step = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
    const edge = { Home: 0, End: TABS.length - 1 }[e.key];
    if (step === undefined && edge === undefined) return;
    e.preventDefault();
    const next =
      edge ?? (TABS.indexOf(activeTab) + step + TABS.length) % TABS.length;
    setActiveTab(TABS[next]);
    document.getElementById(ids.tab(TABS[next]))?.focus();
  }

  function tabProps(tab) {
    const selected = activeTab === tab;
    return {
      type: "button",
      role: "tab",
      id: ids.tab(tab),
      "aria-selected": selected,
      "aria-controls": ids.panel,
      tabIndex: selected ? 0 : -1,
      onClick: () => setActiveTab(tab),
      className: `flex items-center gap-0.5 min-h-[44px] md:min-h-0 md:h-6 px-3 rounded-full border-none cursor-pointer text-xs font-medium uppercase tracking-[1.2px] whitespace-nowrap transition-colors duration-quick min-w-0 ${
        tab === "workspace" ? "shrink" : "shrink-0"
      } ${
        selected
          ? "bg-zinc-800 light:bg-slate-300"
          : "bg-transparent hover:bg-zinc-800/50 light:hover:bg-slate-200"
      }`,
    };
  }

  return (
    <div className="flex items-center justify-between shrink-0 gap-2">
      <div
        role="tablist"
        aria-label={t("chat_window.memories.title")}
        onKeyDown={handleKeyDown}
        className="flex items-center gap-1 min-w-0"
      >
        <button
          {...tabProps("workspace")}
          data-tooltip-id="memories-workspace-pill"
          data-tooltip-content={workspaceName}
        >
          <span className="text-zinc-200 light:text-slate-800 truncate max-w-[140px]">
            {workspaceName}
          </span>
          <span className="text-zinc-400 light:text-slate-600 font-normal">
            ({counts.workspace}/{LIMITS.workspace})
          </span>
        </button>
        <button {...tabProps("global")}>
          <span className="text-zinc-200 light:text-slate-800">
            {t("chat_window.memories.tab_global")}
          </span>
          <span className="text-zinc-400 light:text-slate-600 font-normal">
            ({counts.global}/{LIMITS.global})
          </span>
        </button>
      </div>
      <button
        ref={createButtonRef}
        type="button"
        onClick={() => {
          if (!atLimit) openCreateModal();
        }}
        aria-disabled={atLimit || undefined}
        aria-label={
          atLimit
            ? t("chat-panels.memories.create-limit", {
                limit: LIMITS[activeTab],
              })
            : t("chat_window.memories.modal.create_title")
        }
        title={
          atLimit
            ? t("chat-panels.memories.create-limit", {
                limit: LIMITS[activeTab],
              })
            : undefined
        }
        className={`-mr-1 flex items-center justify-center w-11 h-11 md:w-6 md:h-6 shrink-0 rounded-lg border-none bg-transparent text-zinc-50 light:text-slate-900 transition-colors duration-quick ${
          atLimit
            ? "opacity-40 cursor-not-allowed"
            : "cursor-pointer hover:bg-zinc-800 light:hover:bg-slate-200"
        }`}
      >
        <Plus strokeWidth={1.5} size={16} aria-hidden="true" />
      </button>
      <Tooltip
        id="memories-workspace-pill"
        place="bottom"
        delayShow={120}
        className="tooltip !text-xs z-99"
      />
    </div>
  );
}
