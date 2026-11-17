import { useEffect, useId, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Brain, Check } from "lucide-react";
import { Tooltip } from "react-tooltip";
import { useTranslation } from "react-i18next";
import Workspace from "@/models/workspace";
import useMenu from "@/hooks/useMenu";
import { SAVE_LLM_SELECTOR_EVENT } from "../LLMSelector/action";
import {
  getSessionReasoningEffort,
  setSessionReasoningEffort,
} from "@/utils/chat/reasoningEffort";

/**
 * Quick picker for the current chat session's reasoning effort. The choice is
 * kept per thread in this browser, so it never changes other users' chats.
 * Only renders when the workspace's current model supports reasoning controls.
 * @param {object} props
 * @param {string} [props.workspaceSlug] - Workspace slug when the route has no params (home page)
 * @param {string} [props.threadSlug] - Thread slug when the route has no params (home page)
 * @param {boolean} [props.centered] - When true the menu opens below the button (home page layout)
 */
export default function ReasoningEffortButton({
  workspaceSlug = null,
  threadSlug = null,
  centered = false,
}) {
  const { t } = useTranslation();
  const params = useParams();
  const slug = workspaceSlug ?? params.slug ?? null;
  const thread = threadSlug ?? params.threadSlug ?? null;
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const [sessionEffort, setSessionEffort] = useState(null);
  const triggerRef = useRef(null);
  const menuRef = useRef(null);
  const menuId = useId();
  const noteId = useId();

  useMenu({
    open,
    onClose: () => setOpen(false),
    menuRef,
    triggerRef,
  });

  useEffect(() => {
    setSessionEffort(getSessionReasoningEffort(slug, thread));
  }, [slug, thread]);

  useEffect(() => {
    if (!slug) return;
    async function load() {
      const capabilities = await Workspace.llmCapabilities(slug);
      setOptions(
        capabilities?.reasoning === true ? capabilities.reasoningOptions : []
      );
    }
    load();
    window.addEventListener(SAVE_LLM_SELECTOR_EVENT, load);
    return () => window.removeEventListener(SAVE_LLM_SELECTOR_EVENT, load);
  }, [slug]);

  function select(value) {
    setOpen(false);
    setSessionEffort(value);
    setSessionReasoningEffort(slug, thread, value);
    triggerRef.current?.focus();
  }

  if (!options.length) return null;

  const usingDefault = !sessionEffort || !options.includes(sessionEffort);
  const showNote = !options.includes("off");

  // The menu is positioned against the prompt input's outer wrapper (not this
  // button) so the input's overflow-hidden container does not clip it.
  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(!open)}
        data-tooltip-id="reasoning-effort"
        data-tooltip-content={t("chat.reasoning_effort.title")}
        aria-label={t("chat.reasoning_effort.title")}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={open ? menuId : undefined}
        className={`group border-none cursor-pointer flex items-center justify-center gap-x-1 w-11 h-11 md:w-auto md:h-6 md:px-1.5 rounded-full transition-colors duration-quick ${
          open
            ? "bg-zinc-700 light:bg-slate-200"
            : "hover:bg-zinc-700 light:hover:bg-slate-200"
        }`}
      >
        <Brain
          strokeWidth={1.5}
          size={18}
          aria-hidden="true"
          className={`pointer-events-none shrink-0 ${
            open
              ? "text-white light:text-slate-800"
              : "text-zinc-300 light:text-slate-600 group-hover:text-white light:group-hover:text-slate-800"
          }`}
        />
      </button>
      {!open && (
        <Tooltip
          id="reasoning-effort"
          place="bottom"
          delayShow={100}
          className="tooltip !text-xs z-99"
        />
      )}
      {open && (
        <div
          ref={menuRef}
          className={`absolute left-5 z-50 w-[200px] p-1 flex flex-col bg-zinc-800 light:bg-white border border-zinc-700 light:border-slate-300 rounded-xl shadow-lg animate-in fade-in-0 [animation-duration:var(--dur-base)] [animation-timing-function:var(--ease-smooth)] ${
            centered
              ? "top-full mt-2 [--tw-enter-translate-y:-4px]"
              : "bottom-full mb-2 [--tw-enter-translate-y:4px]"
          }`}
        >
          <div
            id={menuId}
            role="menu"
            aria-label={t("chat.reasoning_effort.title")}
            aria-describedby={showNote ? noteId : undefined}
            className="flex flex-col"
          >
            <EffortOption
              label={t("chat.reasoning_effort.default")}
              selected={usingDefault}
              onClick={() => select(null)}
            />
            {options.map((option) => (
              <EffortOption
                key={option}
                label={t(`chat.reasoning_effort.levels.${option}`, {
                  defaultValue: option,
                })}
                selected={!usingDefault && sessionEffort === option}
                onClick={() => select(option)}
              />
            ))}
          </div>
          {showNote && (
            <p
              id={noteId}
              className="px-2 pt-1 pb-0.5 text-[11px] text-zinc-400 light:text-slate-500"
            >
              {t("chat.reasoning_effort.cannot_disable")}
            </p>
          )}
        </div>
      )}
    </>
  );
}

function EffortOption({ label, selected, onClick }) {
  return (
    <button
      type="button"
      role="menuitemradio"
      aria-checked={selected}
      onClick={onClick}
      className={`border-none w-full flex items-center justify-between gap-2 text-left px-2 py-1.5 min-h-11 md:min-h-0 rounded-lg text-xs cursor-pointer transition-colors duration-quick ${
        selected
          ? "bg-zinc-700 light:bg-slate-200 text-white light:text-slate-800"
          : "text-zinc-300 light:text-slate-600 hover:bg-zinc-700 light:hover:bg-slate-200 hover:text-white light:hover:text-slate-800 focus-visible:bg-zinc-700 light:focus-visible:bg-slate-200"
      }`}
    >
      <span>{label}</span>
      {selected && (
        <Check
          strokeWidth={1.5}
          size={14}
          aria-hidden="true"
          className="shrink-0"
        />
      )}
    </button>
  );
}
