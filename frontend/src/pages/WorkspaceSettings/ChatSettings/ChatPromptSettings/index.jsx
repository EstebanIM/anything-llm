import { useEffect, useId, useState, useRef, Fragment } from "react";
import { Trans, useTranslation } from "react-i18next";
import SystemPromptVariable from "@/models/systemPromptVariable";
import { Link, useSearchParams } from "react-router-dom";
import paths from "@/utils/paths";
import ChatPromptHistory from "./ChatPromptHistory";
import PublishEntityModal from "@/components/CommunityHub/PublishEntityModal";
import { useModal } from "@/hooks/useModal";
import System from "@/models/system";
import { userFromStorage } from "@/utils/request";
import { useAutosaveForm } from "@/components/AutosaveForm";
import { FIELD_INPUT } from "@/components/ProviderFields";
import SettingsField, {
  HELP_TEXT,
  TEXT_LINK,
} from "../../components/SettingsField";

const TEXT_BUTTON =
  "min-h-[44px] md:min-h-0 text-xs font-medium underline transition-colors duration-quick ease-smooth";

export default function ChatPromptSettings({ workspace }) {
  // Only superadmins can edit the system prompt; the server enforces the same rule.
  const currentUser = userFromStorage();
  if (currentUser?.role && currentUser.role !== "superadmin") return null;
  return <ChatPromptSettingsForm workspace={workspace} />;
}

function ChatPromptSettingsForm({ workspace }) {
  const { t } = useTranslation();
  const { markDirty, save, hasChanges } = useAutosaveForm();
  const [searchParams] = useSearchParams();
  const variablesId = useId();

  // Prompt state
  const [prompt, setPrompt] = useState(workspace?.openAiPrompt ?? "");
  const [savedPrompt, setSavedPrompt] = useState(workspace?.openAiPrompt ?? "");
  const [defaultSystemPrompt, setDefaultSystemPrompt] = useState("");

  // UI state
  const [showPromptHistory, setShowPromptHistory] = useState(false);
  const [availableVariables, setAvailableVariables] = useState([]);
  // Prompt sent to the publish dialog: null publishes the one being edited.
  const [publishPrompt, setPublishPrompt] = useState(null);

  const promptRef = useRef(null);

  // Modals
  const {
    isOpen: showPublishModal,
    closeModal: closePublishModal,
    openModal: openPublishModal,
  } = useModal();

  // Derived state
  const isDirty = prompt !== savedPrompt;
  const hasBeenModified =
    defaultSystemPrompt && savedPrompt?.trim() !== defaultSystemPrompt?.trim();
  const showPublishButton =
    prompt?.trim().length >= 10 && (isDirty || hasBeenModified);

  useEffect(() => {
    SystemPromptVariable.getAll().then(({ variables }) =>
      setAvailableVariables(variables ?? [])
    );
  }, []);

  // Links can ask for the prompt field (?action=focus-system-prompt).
  useEffect(() => {
    if (searchParams.get("action") !== "focus-system-prompt") return;
    const field = promptRef.current;
    if (!field) return;
    field.focus();
    field.setSelectionRange(field.value.length, field.value.length);
    field.scrollIntoView({ block: "center" });
  }, [searchParams]);

  // Update saved prompt when parent clears hasChanges
  useEffect(() => {
    if (!hasChanges) setSavedPrompt(prompt);
  }, [hasChanges, prompt]);

  useEffect(() => {
    System.fetchDefaultSystemPrompt().then(({ defaultSystemPrompt }) => {
      setDefaultSystemPrompt(defaultSystemPrompt);
      if (!workspace?.openAiPrompt && defaultSystemPrompt) {
        setPrompt(defaultSystemPrompt ?? "");
        setSavedPrompt(defaultSystemPrompt);
      }
    });
  }, []);

  const handleRestoreFromHistory = (historicalPrompt) => {
    setPrompt(historicalPrompt);
    setShowPromptHistory(false);
    markDirty("openAiPrompt");
    save();
  };

  const handlePublishFromHistory = (historicalPrompt) => {
    setShowPromptHistory(false);
    setPublishPrompt(historicalPrompt);
    openPublishModal();
  };

  const handlePublishCurrent = () => {
    setPublishPrompt(null);
    openPublishModal();
  };

  // Restore to default system prompt, if no default system prompt is set
  const handleRestoreToDefaultSystemPrompt = () => {
    System.fetchDefaultSystemPrompt().then(({ defaultSystemPrompt }) => {
      setPrompt(defaultSystemPrompt ?? "");
      markDirty("openAiPrompt");
      save();
      // The restore button disappears once the prompt is the default one.
      promptRef.current?.focus();
    });
  };

  return (
    <>
      <ChatPromptHistory
        workspaceSlug={workspace.slug}
        show={showPromptHistory}
        onRestore={handleRestoreFromHistory}
        onPublishClick={handlePublishFromHistory}
        onClose={() => setShowPromptHistory(false)}
      />
      <SettingsField
        name="openAiPrompt"
        label={t("chat.prompt.title")}
        help={t("chat.prompt.description")}
      >
        {(control) => (
          <>
            <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
              <PromptVariablesHint
                id={variablesId}
                variables={availableVariables}
              />
              <button
                type="button"
                aria-haspopup="dialog"
                onClick={() => setShowPromptHistory(true)}
                className={`${TEXT_BUTTON} shrink-0 text-theme-text-secondary hover:text-white light:hover:text-slate-900`}
              >
                {t("workspace-settings.prompt.view-history")}
              </button>
            </div>
            <textarea
              {...control}
              aria-describedby={[control["aria-describedby"], variablesId]
                .filter(Boolean)
                .join(" ")}
              ref={promptRef}
              name="openAiPrompt"
              rows={8}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className={`${FIELD_INPUT} resize-y min-h-[150px]`}
            />
            <div className="w-full flex flex-wrap items-center justify-between gap-x-4">
              {prompt !== defaultSystemPrompt && (
                <button
                  type="button"
                  onClick={handleRestoreToDefaultSystemPrompt}
                  className={`${TEXT_BUTTON} text-theme-text-secondary hover:text-white light:hover:text-slate-900`}
                >
                  {t("workspace-settings.prompt.restore-default")}
                </button>
              )}
              {showPublishButton && (
                <button
                  type="button"
                  onClick={handlePublishCurrent}
                  className={`${TEXT_BUTTON} ml-auto text-sky-400 light:text-sky-700 hover:text-sky-300 light:hover:text-sky-800`}
                >
                  {t("chat.prompt.history.publish")}
                </button>
              )}
            </div>
          </>
        )}
      </SettingsField>
      <PublishEntityModal
        show={showPublishModal}
        onClose={closePublishModal}
        entityType="system-prompt"
        entity={publishPrompt ?? prompt}
      />
    </>
  );
}

/** "You can insert prompt variables like: {a}, {b}, {c} and 2 more". */
function PromptVariablesHint({ id, variables }) {
  const { t } = useTranslation();
  const shown = variables.slice(0, 3);
  const more = variables.length - shown.length;
  const variablesLink = (
    <Link to={paths.settings.systemPromptVariables()} className={TEXT_LINK} />
  );

  return (
    <p id={id} className={HELP_TEXT}>
      <Trans
        i18nKey={
          shown.length > 0
            ? "workspace-settings.prompt.variables"
            : "workspace-settings.prompt.variables-none"
        }
        components={{ anchor: variablesLink }}
      />
      {shown.map((variable, i) => (
        <Fragment key={variable.key}>
          {" "}
          <code className="bg-theme-settings-input-bg px-1 py-0.5 rounded">
            {`{${variable.key}}`}
          </code>
          {i < shown.length - 1 && ","}
        </Fragment>
      ))}
      {more > 0 && (
        <>
          {" "}
          <Link
            to={paths.settings.systemPromptVariables()}
            className={TEXT_LINK}
          >
            {t("workspace-settings.prompt.variables-more", { count: more })}
          </Link>
        </>
      )}
    </p>
  );
}
