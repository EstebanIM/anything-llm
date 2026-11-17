import { useId, useState } from "react";
import { useTranslation } from "react-i18next";
import { ALL_LLM_PROVIDERS } from "@/pages/GeneralSettings/LLMPreference";
import { useAutosaveForm, SavedIndicator } from "@/components/AutosaveForm";
import { withEmbeddedLemonade } from "@/components/LLMSelection/EmbeddedLemonadeOptions";
import { FIELD_INPUT } from "@/components/ProviderFields";
import ChatModelSelection from "./ChatModelSelection";
import RouterSelection from "./RouterSelection";
import ProviderPicker from "../../components/ProviderPicker";
import SettingsField, {
  HELP_TEXT,
  SECTION_HEADING,
} from "../../components/SettingsField";
import { MODEL_ROUTER_LOGO, SYSTEM_DEFAULT_LOGO } from "@/utils/builtInLogos";

// Some providers do not support model selection via /models.
// In that case we allow the user to enter the model name manually and hope they
// type it correctly.
const FREE_FORM_LLM_SELECTION = ["azure"];

// Some providers we just fully disable for ease of use.
const DISABLED_PROVIDERS = [];

export default function WorkspaceLLMSelection({ settings, workspace }) {
  const { t } = useTranslation();
  const headingId = useId();
  const [selectedLLM, setSelectedLLM] = useState(
    workspace?.chatProvider ?? "default"
  );
  // Bumped when the chosen provider's settings change, to reload its models.
  const [settingsVersion, setSettingsVersion] = useState(0);
  const { markDirty, save } = useAutosaveForm();

  function updateLLMChoice(selection) {
    setSelectedLLM(selection);
    markDirty("chatProvider");
    markDirty("chatModel");
    // Every other provider saves once its model/router picker is ready, see ModelSelector.
    if (selection === "default") save();
  }

  const systemDefault = {
    name: t("workspace-settings.llm.system-default"),
    value: "default",
    logo: SYSTEM_DEFAULT_LOGO,
    description: t("workspace-settings.llm.system-default-description"),
    requiredConfig: [],
  };
  const providers = ALL_LLM_PROVIDERS.filter(
    (llm) => !DISABLED_PROVIDERS.includes(llm.value)
  ).map((llm) =>
    llm.value === "anythingllm-router"
      ? { ...llm, name: t("settings.model-router"), logo: MODEL_ROUTER_LOGO }
      : llm
  );
  const llms = withEmbeddedLemonade([systemDefault, ...providers], settings, {
    after: "default",
  });

  return (
    <div className="border-b border-zinc-600 light:border-slate-300 pb-8 min-w-0 flex flex-col gap-y-2">
      <div className="flex flex-wrap items-center">
        <h2 id={headingId} className={SECTION_HEADING}>
          {t("chat.llm.title")}
        </h2>
        <SavedIndicator name="chatProvider" />
      </div>
      <p id={`${headingId}-help`} className={HELP_TEXT}>
        {t("chat.llm.description")}
      </p>
      <input type="hidden" name="chatProvider" value={selectedLLM} />
      <ProviderPicker
        labelledBy={headingId}
        describedBy={`${headingId}-help`}
        items={llms}
        value={selectedLLM}
        noSettings={["default"]}
        settings={settings}
        purpose="chat"
        placeholder={t("chat.llm.search")}
        onChange={updateLLMChoice}
        onSettingsSaved={() => setSettingsVersion((v) => v + 1)}
      />
      {selectedLLM !== "default" && (
        <div className="mt-4">
          <ModelSelector
            key={`${selectedLLM}-${settingsVersion}`}
            selectedLLM={selectedLLM}
            workspace={workspace}
          />
        </div>
      )}
    </div>
  );
}

function ModelSelector({ selectedLLM, workspace }) {
  if (selectedLLM === "anythingllm-router")
    return <RouterSelection workspace={workspace} />;
  if (FREE_FORM_LLM_SELECTION.includes(selectedLLM))
    return <FreeFormLLMInput workspace={workspace} />;
  return <ChatModelSelection provider={selectedLLM} workspace={workspace} />;
}

function FreeFormLLMInput({ workspace }) {
  const { t } = useTranslation();
  return (
    <SettingsField
      name="chatModel"
      label={t("chat.model.title")}
      help={t("chat.model.description")}
    >
      {(control) => (
        <input
          {...control}
          type="text"
          name="chatModel"
          defaultValue={workspace?.chatModel || ""}
          className={`${FIELD_INPUT} max-w-[640px]`}
          placeholder={t("workspace-settings.llm.free-form-placeholder")}
          autoComplete="off"
        />
      )}
    </SettingsField>
  );
}
