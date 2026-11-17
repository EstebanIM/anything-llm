import { useState, useEffect, useId, useRef } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { isMobile } from "react-device-detect";
import useUser from "@/hooks/useUser";
import { useModal } from "@/hooks/useModal";
import LLMSelectorModal from "../PromptInput/LLMSelector/index";
import SetupProvider from "../PromptInput/LLMSelector/SetupProvider";
import {
  SAVE_LLM_SELECTOR_EVENT,
  PROVIDER_SETUP_EVENT,
  TOGGLE_LLM_SELECTOR_EVENT,
} from "../PromptInput/LLMSelector/action";
import Workspace from "@/models/workspace";
import System from "@/models/system";
import ModelRouterAPI from "@/models/modelRouter";
import { SIDEBAR_TOGGLE_EVENT } from "@/components/Sidebar/SidebarToggle";

async function resolveModelName(workspace, systemSettings, t) {
  const effectiveProvider =
    workspace.chatProvider ?? systemSettings?.LLMProvider;

  if (effectiveProvider !== "anythingllm-router")
    return workspace.chatModel ?? systemSettings?.LLMModel ?? "";

  const routerId = workspace.router_id || systemSettings?.ModelRouterId;
  if (!routerId) return t("model-router.metrics.model-router-default");

  const { router } = await ModelRouterAPI.get(routerId);
  if (!router?.name) return t("model-router.metrics.model-router-default");

  return router.name;
}

async function fetchModelName(slug, setModelName, t) {
  if (!slug) return;
  const [workspace, systemSettings] = await Promise.all([
    Workspace.bySlug(slug),
    System.keys(),
  ]);
  setModelName(await resolveModelName(workspace, systemSettings, t));
}

/**
 * Model picker in the chat header: a button that opens a non-modal dialog
 * with the provider and model selector. Escape closes it and returns focus to
 * the button; Ctrl/⌘ + Shift + L toggles it from anywhere.
 */
export default function WorkspaceModelPicker({ workspaceSlug = null }) {
  const { t } = useTranslation();
  const { slug: urlSlug } = useParams();
  const slug = urlSlug ?? workspaceSlug;
  const { user } = useUser();
  const [showSelector, setShowSelector] = useState(false);
  const [modelName, setModelName] = useState("");
  const {
    isOpen: isSetupProviderOpen,
    openModal: openSetupProviderModal,
    closeModal: closeSetupProviderModal,
  } = useModal();
  const [config, setConfig] = useState({ settings: {}, provider: null });
  const [refreshKey, setRefreshKey] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(
    () => window.localStorage.getItem("anythingllm_sidebar_toggle") !== "closed"
  );
  const triggerRef = useRef(null);
  const dialogRef = useRef(null);
  const dialogId = useId();

  function closeSelector() {
    const hadFocus = dialogRef.current?.contains(document.activeElement);
    setShowSelector(false);
    if (hadFocus) triggerRef.current?.focus();
  }

  useEffect(() => {
    const handleToggle = (e) => setSidebarOpen(e.detail.open);
    window.addEventListener(SIDEBAR_TOGGLE_EVENT, handleToggle);
    return () => window.removeEventListener(SIDEBAR_TOGGLE_EVENT, handleToggle);
  }, []);

  // Move focus into the dialog when it opens so keyboard and screen reader
  // users land on it (the provider search comes next in the Tab order).
  useEffect(() => {
    if (!showSelector) return;
    const timer = setTimeout(() => dialogRef.current?.focus(), 0);
    return () => clearTimeout(timer);
  }, [showSelector]);

  // Keyboard shortcut (registered in utils/keyboardShortcuts.js)
  useEffect(() => {
    function handleShortcut() {
      if (dialogRef.current) closeSelector();
      else setShowSelector(true);
    }
    window.addEventListener(TOGGLE_LLM_SELECTOR_EVENT, handleShortcut);
    return () =>
      window.removeEventListener(TOGGLE_LLM_SELECTOR_EVENT, handleShortcut);
  }, []);

  // Fetch current model name for display
  useEffect(() => {
    fetchModelName(slug, setModelName, t);
  }, [slug]);

  // Close selector and refresh model name when model is saved
  useEffect(() => {
    function handleSave() {
      closeSelector();
      fetchModelName(slug, setModelName, t);
    }
    window.addEventListener(SAVE_LLM_SELECTOR_EVENT, handleSave);
    return () =>
      window.removeEventListener(SAVE_LLM_SELECTOR_EVENT, handleSave);
  }, [slug]);

  // Handle provider setup request
  useEffect(() => {
    function handleProviderSetup(e) {
      const { provider, settings } = e.detail;
      setConfig({ settings, provider });
      setTimeout(() => openSetupProviderModal(), 300);
    }
    window.addEventListener(PROVIDER_SETUP_EVENT, handleProviderSetup);
    return () =>
      window.removeEventListener(PROVIDER_SETUP_EVENT, handleProviderSetup);
  }, []);

  // This feature is disabled for multi-user instances where the user is not an admin
  if (!!user && !["admin", "superadmin"].includes(user.role)) return null;
  if (!slug || isMobile) return null;

  const triggerLabel = modelName
    ? t("chat-input.model-picker", { model: modelName })
    : t("chat_window.select_model");

  return (
    <>
      {showSelector && (
        <div className="fixed inset-0 z-20" onClick={() => closeSelector()} />
      )}
      <div
        className={`hidden md:block absolute top-2 z-30 transition-[left] duration-panel ease-drawer ${
          sidebarOpen ? "left-3" : "left-11"
        }`}
      >
        <button
          ref={triggerRef}
          type="button"
          aria-label={triggerLabel}
          aria-haspopup="dialog"
          aria-expanded={showSelector}
          aria-controls={showSelector ? dialogId : undefined}
          aria-keyshortcuts="Control+Shift+L Meta+Shift+L"
          onClick={() =>
            showSelector ? closeSelector() : setShowSelector(true)
          }
          className={`group border-none cursor-pointer px-2.5 py-1 flex items-center rounded-full transition-colors duration-quick ${
            showSelector
              ? "bg-zinc-700 light:bg-slate-200"
              : "hover:bg-zinc-700 light:hover:bg-slate-200"
          }`}
        >
          <span
            className={`text-xs ${
              showSelector
                ? "text-white light:text-slate-800"
                : "text-zinc-400 light:text-slate-600 group-hover:text-white light:group-hover:text-slate-800"
            }`}
          >
            {modelName || t("chat_window.select_model")}
          </span>
        </button>

        {showSelector && (
          <div
            ref={dialogRef}
            id={dialogId}
            role="dialog"
            aria-label={t("chat-input.model-picker-title")}
            tabIndex={-1}
            onKeyDown={(e) => {
              if (e.key !== "Escape" || e.defaultPrevented) return;
              e.preventDefault();
              e.stopPropagation();
              closeSelector();
            }}
            className="absolute left-0 top-full mt-1 bg-zinc-800 light:bg-white border border-zinc-700 light:border-slate-300 rounded-xl shadow-lg w-[620px] max-w-[calc(100vw-2rem)] overflow-hidden focus:outline-none animate-in fade-in-0 [--tw-enter-translate-y:-4px] [animation-duration:var(--dur-base)] [animation-timing-function:var(--ease-smooth)]"
          >
            <LLMSelectorModal
              key={refreshKey}
              workspaceSlug={slug}
              initialProvider={config.provider?.value}
            />
          </div>
        )}
      </div>

      <SetupProvider
        isOpen={isSetupProviderOpen}
        closeModal={closeSetupProviderModal}
        postSubmit={() => {
          closeSetupProviderModal();
          setRefreshKey((k) => k + 1);
        }}
        settings={config.settings}
        llmProvider={config.provider}
      />
    </>
  );
}
