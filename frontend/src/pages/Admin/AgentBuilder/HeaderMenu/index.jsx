import { ChevronDown, ChevronUp, Plus, ChevronLeft } from "lucide-react";
import AnythingInfinityLogo from "@/media/logo/anything-llm-infinity.png";
import { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import paths from "@/utils/paths";

export default function HeaderMenu({
  agentName,
  availableFlows = [],
  onNewFlow,
  onSaveFlow,
  onPublishFlow,
}) {
  const { flowId = null } = useParams();
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const hasOtherFlows =
    availableFlows.filter((flow) => flow.uuid !== flowId).length > 0;

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="absolute top-4 md:top-[calc(40px+16px)] left-4 right-4">
      <div className="flex flex-col md:flex-row gap-3 md:gap-0 md:justify-between md:items-start max-w-[1700px] mx-auto">
        <div className="flex items-center gap-x-2 min-w-0">
          <button
            onClick={() => navigate(paths.settings.agentSkills())}
            className="w-8 h-8 shrink-0 flex items-center justify-center rounded-full bg-theme-settings-input-bg border border-white/10 hover:bg-theme-action-menu-bg transition-colors duration-300"
          >
            <ChevronLeft
              strokeWidth={1.5}
              className="w-5 h-5 text-theme-text-primary"
            />
          </button>
          <div
            className="flex min-w-0 flex-1 md:flex-none items-center bg-theme-settings-input-bg rounded-md border border-white/10 pointer-events-auto"
            ref={dropdownRef}
          >
            <button
              onClick={() => navigate(paths.settings.agentSkills())}
              className="!border-t-transparent !border-l-transparent !border-b-transparent flex shrink-0 items-center gap-x-2 px-3 md:px-4 py-2 border-r border-white/10 hover:bg-theme-action-menu-bg transition-colors duration-300"
            >
              <img
                src={AnythingInfinityLogo}
                alt="logo"
                className="w-[20px] light:invert"
              />
              <span className="text-theme-text-primary text-sm uppercase tracking-widest">
                Builder
              </span>
            </button>
            <div className="relative">
              <button
                disabled={!hasOtherFlows}
                className="border-none flex min-w-0 items-center justify-between gap-x-1 text-theme-text-primary text-sm px-3 md:px-4 py-2 enabled:hover:bg-theme-action-menu-bg transition-colors duration-300 w-full md:min-w-[200px] md:max-w-[300px]"
                onClick={() => {
                  if (!agentName && !hasOtherFlows) {
                    const agentNameInput = document.getElementById(
                      "agent-flow-name-input"
                    );
                    if (agentNameInput) agentNameInput.focus();
                    return;
                  }
                  setShowDropdown(!showDropdown);
                }}
              >
                <span
                  className={`text-sm font-medium truncate ${!!agentName ? "text-theme-text-primary " : "text-theme-text-secondary"}`}
                >
                  {agentName || "Untitled Flow"}
                </span>
                {hasOtherFlows && (
                  <div className="flex flex-col ml-2 shrink-0">
                    <ChevronUp strokeWidth={1.5} size={10} />
                    <ChevronDown strokeWidth={1.5} size={10} />
                  </div>
                )}
              </button>
              {showDropdown && (
                <div className="absolute top-full left-0 mt-1 w-full min-w-[200px] max-w-[350px] bg-theme-settings-input-bg border border-white/10 rounded-md shadow-lg z-50 animate-fadeUpIn">
                  {availableFlows
                    .filter((flow) => flow.uuid !== flowId)
                    .map((flow, index) => (
                      <button
                        key={flow?.uuid || `flow-${index}`}
                        onClick={() => {
                          navigate(paths.agents.editAgent(flow.uuid));
                          setShowDropdown(false);
                        }}
                        className="border-none w-full text-left px-2 py-1 text-sm text-theme-text-primary hover:bg-theme-action-menu-bg transition-colors duration-300"
                      >
                        <span className="block truncate">
                          {flow?.name || "Untitled Flow"}
                        </span>
                      </button>
                    ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-y-1 items-end">
          <div className="flex w-full md:w-auto items-center justify-end gap-x-2 md:gap-x-[15px]">
            <button
              onClick={onNewFlow}
              className="flex min-w-0 items-center gap-x-2 text-theme-text-primary text-sm font-medium px-3 py-2 rounded-lg border border-white bg-theme-settings-input-bg hover:bg-theme-action-menu-bg transition-colors duration-300"
            >
              <Plus strokeWidth={1.5} className="w-4 h-4" />
              <span className="truncate">New Flow</span>
            </button>
            <button
              onClick={onPublishFlow}
              className="px-3 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 border border-white/10 bg-theme-bg-primary text-theme-text-primary hover:bg-theme-action-menu-bg transition-all duration-300"
            >
              Publish
            </button>
            <button
              onClick={onSaveFlow}
              className="border-none bg-primary-button hover:opacity-80 text-black light:text-white px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
