import { useId, useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import { useAutosaveForm, SavedIndicator } from "@/components/AutosaveForm";
import SegmentedControl from "@/components/lib/SegmentedControl";
import { SECTION_HEADING } from "../../components/SettingsField";

const CHAT_MODES = ["automatic", "chat", "query"];

export default function ChatModeSelection({ workspace }) {
  const { t } = useTranslation();
  const titleId = useId();
  const explanationId = useId();
  const [chatMode, setChatMode] = useState(workspace?.chatMode || "chat");
  const { markDirty, save } = useAutosaveForm();
  const selectMode = (mode) => {
    setChatMode(mode);
    markDirty("chatMode");
    save();
  };

  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex flex-wrap items-center">
        <h2 id={titleId} className={SECTION_HEADING}>
          {t("chat.mode.title")}
        </h2>
        <SavedIndicator name="chatMode" />
      </div>
      <div className="flex flex-col gap-y-2 mt-2">
        <SegmentedControl
          value={chatMode}
          onChange={selectMode}
          options={CHAT_MODES.map((mode) => ({
            value: mode,
            label: t(`chat.mode.${mode}.title`),
          }))}
          labelledBy={titleId}
          describedBy={explanationId}
          name="chatMode"
          className="w-fit"
        />
        <ChatModeExplanation id={explanationId} chatMode={chatMode} />
      </div>
    </div>
  );
}

/**
 * A component that displays the explanation for a given chat mode.
 * @param {'automatic' | 'chat' | 'query'} chatMode - The chat mode to display the explanation for.
 * @returns {JSX.Element} The component to display the explanation for the given chat mode.
 */
function ChatModeExplanation({ id, chatMode = "chat" }) {
  const { t } = useTranslation();
  return (
    <p id={id} className="text-sm text-theme-text-secondary">
      <b>{t(`chat.mode.${chatMode}.title`)}</b>{" "}
      <Trans
        i18nKey={`chat.mode.${chatMode}.description`}
        components={{
          b: <b />,
          br: <br />,
        }}
      />
    </p>
  );
}
