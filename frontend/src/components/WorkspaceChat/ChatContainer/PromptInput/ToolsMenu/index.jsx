import {
  useState,
  useEffect,
  useLayoutEffect,
  useCallback,
  useRef,
  useMemo,
} from "react";
import { useTranslation } from "react-i18next";
import useUser from "@/hooks/useUser";
import AgentSkillsTab from "./Tabs/AgentSkills";
import SlashCommandsTab from "./Tabs/SlashCommands";

export const TOOLS_MENU_KEYBOARD_EVENT = "tools-menu-keyboard";
function getTabs(t, user) {
  const tabs = [
    {
      key: "slash-commands",
      label: t("chat_window.slash_commands"),
      component: SlashCommandsTab,
    },
  ];

  // Only show agent skills tab for admins or when multiuser mode is off
  const canSeeAgentSkills =
    !user?.hasOwnProperty("role") ||
    ["admin", "superadmin"].includes(user.role);
  if (canSeeAgentSkills) {
    tabs.push({
      key: "agent-skills",
      label: t("chat_window.agent_skills"),
      component: AgentSkillsTab,
    });
  }

  return tabs;
}

/**
 * Popup of the prompt combobox. Focus stays in the prompt textarea: arrow keys
 * arrive through TOOLS_MENU_KEYBOARD_EVENT and the highlighted option is
 * exposed on the textarea with aria-activedescendant.
 * @param {Workspace} props.workspace - the workspace object
 * @param {boolean} props.showing
 * @param {function} props.setShowing
 * @param {function} props.sendCommand
 * @param {object} props.promptRef
 * @param {boolean} [props.centered] - when true, popup opens below the input
 * @param {string} props.idBase - prefix for the listbox, tab and option ids
 */
export default function ToolsMenu({
  workspace,
  showing,
  setShowing,
  sendCommand,
  promptRef,
  centered = false,
  highlightedIndexRef,
  idBase = "tools-menu",
}) {
  const { t } = useTranslation();
  const { user } = useUser();
  const TABS = useMemo(() => getTabs(t, user), [t, user]);
  const [activeTab, setActiveTab] = useState(TABS[0].key);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [maxHeight, setMaxHeight] = useState(360);
  const itemCountRef = useRef(0);
  const popoverRef = useRef(null);
  const tabRefs = useRef({});

  const listboxId = `${idBase}-listbox`;
  const panelId = `${idBase}-panel`;
  const tabId = (key) => `${idBase}-tab-${key}`;
  const getOptionId = useCallback(
    (index) => `${idBase}-opt-${index}`,
    [idBase]
  );

  // Always open to the slash commands
  useEffect(() => {
    if (showing) setActiveTab(TABS[0].key);
  }, [showing]);

  // Reset highlight when switching tabs or closing
  useEffect(() => {
    setHighlightedIndex(-1);
  }, [activeTab, showing]);

  // Constrain popover height to the space available in the viewport so it
  // never overflows off-screen on shorter windows (e.g. centered home view).
  useLayoutEffect(() => {
    if (!showing) return;
    const update = () => {
      const el = popoverRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const available = centered
        ? window.innerHeight - rect.top - 16
        : rect.bottom - 16;
      setMaxHeight(Math.max(0, Math.min(360, available)));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [showing, centered]);

  // Keep the parent ref in sync so PromptInput can check it on Enter
  useEffect(() => {
    if (highlightedIndexRef) highlightedIndexRef.current = highlightedIndex;
  }, [highlightedIndex]);

  // The textarea is the combobox: point it at the highlighted option.
  useEffect(() => {
    const textarea = promptRef?.current;
    if (!textarea) return;
    if (showing && highlightedIndex >= 0) {
      textarea.setAttribute(
        "aria-activedescendant",
        getOptionId(highlightedIndex)
      );
    } else {
      textarea.removeAttribute("aria-activedescendant");
    }
  }, [showing, highlightedIndex, activeTab, getOptionId]);

  useEffect(() => {
    const textarea = promptRef?.current;
    return () => textarea?.removeAttribute("aria-activedescendant");
  }, []);

  const registerItemCount = useCallback((count) => {
    itemCountRef.current = count;
  }, []);

  function switchTab(direction, { focus = false } = {}) {
    const currentIdx = TABS.findIndex((tab) => tab.key === activeTab);
    const nextIdx = (currentIdx + direction + TABS.length) % TABS.length;
    const nextKey = TABS[nextIdx].key;
    setActiveTab(nextKey);
    if (focus) tabRefs.current[nextKey]?.focus();
  }

  useEffect(() => {
    if (!showing) return;

    function handleKeyboard(e) {
      const { key } = e.detail;

      if (key === "ArrowLeft" || key === "ArrowRight") {
        switchTab(key === "ArrowLeft" ? -1 : 1);
        return;
      }

      if (key === "ArrowUp" || key === "ArrowDown") {
        const count = itemCountRef.current;
        if (count === 0) return;
        setHighlightedIndex((prev) => {
          if (key === "ArrowDown") {
            return prev < count - 1 ? prev + 1 : 0;
          }
          return prev > 0 ? prev - 1 : count - 1;
        });
        return;
      }

      // Enter is handled by the tab components via highlightedIndex
    }

    window.addEventListener(TOOLS_MENU_KEYBOARD_EVENT, handleKeyboard);
    return () =>
      window.removeEventListener(TOOLS_MENU_KEYBOARD_EVENT, handleKeyboard);
  }, [showing, activeTab]);

  if (!showing) return null;

  const { component: ActiveTab } = TABS.find((tab) => tab.key === activeTab);

  function handleTabListKeyDown(e) {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      e.preventDefault();
      switchTab(e.key === "ArrowLeft" ? -1 : 1, { focus: true });
    }
  }

  return (
    <>
      <div
        className="fixed inset-0 z-40"
        onMouseDown={(e) => e.preventDefault()}
        onClick={() => setShowing(false)}
      />
      <div
        ref={popoverRef}
        onMouseDown={(e) => {
          // Prevents prompt textarea from losing focus when clicking inside the menu.
          // Skip for portaled modals so their inputs can still receive focus.
          if (e.currentTarget.contains(e.target)) e.preventDefault();
        }}
        onKeyDown={(e) => {
          // Escape from a tab or a row button inside the popup (the textarea
          // handles its own). Portaled menus and modals handle theirs.
          if (e.key !== "Escape" || e.defaultPrevented) return;
          if (!e.currentTarget.contains(e.target)) return;
          e.preventDefault();
          setShowing(false);
          promptRef?.current?.focus();
        }}
        style={{ maxHeight }}
        className={`absolute left-2 right-2 md:left-14 md:right-auto md:w-[400px] z-50 bg-zinc-800 light:bg-white border border-zinc-700 light:border-slate-300 rounded-lg p-3 flex flex-col gap-2.5 shadow-lg overflow-hidden animate-in fade-in-0 [animation-duration:var(--dur-base)] [animation-timing-function:var(--ease-smooth)] ${
          centered
            ? "top-full mt-2 [--tw-enter-translate-y:-4px]"
            : "bottom-full mb-2 [--tw-enter-translate-y:4px]"
        }`}
      >
        <div
          role="tablist"
          aria-label={t("chat_window.tools")}
          onKeyDown={handleTabListKeyDown}
          className="flex shrink-0 gap-2.5 items-center"
        >
          {TABS.map((tab) => (
            <TabButton
              key={tab.key}
              buttonRef={(el) => (tabRefs.current[tab.key] = el)}
              id={tabId(tab.key)}
              controls={panelId}
              active={activeTab === tab.key}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </TabButton>
          ))}
        </div>

        <div
          role="tabpanel"
          id={panelId}
          aria-labelledby={tabId(activeTab)}
          className="flex flex-col gap-1 overflow-y-auto no-scroll min-h-0"
        >
          <ActiveTab
            sendCommand={sendCommand}
            setShowing={setShowing}
            promptRef={promptRef}
            highlightedIndex={highlightedIndex}
            registerItemCount={registerItemCount}
            workspace={workspace}
            listboxId={listboxId}
            listboxLabelledBy={tabId(activeTab)}
            getOptionId={getOptionId}
          />
        </div>
      </div>
    </>
  );
}

const TabButton = ({ buttonRef, id, controls, active, onClick, children }) => (
  <button
    ref={buttonRef}
    id={id}
    type="button"
    role="tab"
    aria-selected={active}
    aria-controls={controls}
    tabIndex={active ? 0 : -1}
    onClick={onClick}
    className={`border-none cursor-pointer hover:bg-zinc-700/50 light:hover:bg-slate-100 px-1.5 py-0.5 min-h-11 md:min-h-0 rounded text-xs font-medium text-center whitespace-nowrap transition-colors duration-quick ${
      active
        ? "bg-zinc-700 text-white light:bg-slate-200 light:text-slate-800"
        : "text-zinc-400 light:text-slate-600"
    }`}
  >
    {children}
  </button>
);
