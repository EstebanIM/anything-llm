import React, { memo, useState } from "react";
import useCopyText from "@/hooks/useCopyText";
import { Check, ThumbsUp, RefreshCw, Copy } from "lucide-react";
import Workspace from "@/models/workspace";
import { EditMessageAction } from "./EditMessage";
import RenderMetrics from "./RenderMetrics";
import ActionMenu from "./ActionMenu";
import { useTranslation } from "react-i18next";
import { ACTION_BUTTON_CLASS, REVEAL_ON_HOVER_CLASS } from "./constants";

const Actions = ({
  message,
  feedbackScore,
  chatId,
  slug,
  isLastMessage,
  regenerateMessage,
  forkThread,
  isEditing,
  role,
  metrics = {},
}) => {
  const { t } = useTranslation();
  const [selectedFeedback, setSelectedFeedback] = useState(feedbackScore);
  const handleFeedback = async (newFeedback) => {
    const updatedFeedback =
      selectedFeedback === newFeedback ? null : newFeedback;
    await Workspace.updateChatFeedback(chatId, slug, updatedFeedback);
    setSelectedFeedback(updatedFeedback);
  };

  return (
    <div
      className={`flex w-full flex-wrap items-center gap-y-1 mt-2 ${role === "user" ? "justify-end" : "justify-between"}`}
    >
      <div className="flex justify-start items-center">
        <div
          className={`flex justify-start items-center md:gap-x-1 ${REVEAL_ON_HOVER_CLASS}`}
        >
          <div
            className={`flex justify-start items-center md:gap-x-1 ${role === "user" ? "flex-row-reverse" : ""}`}
          >
            <CopyMessage message={message} />
            <EditMessageAction
              chatId={chatId}
              role={role}
              isEditing={isEditing}
            />
          </div>
          {isLastMessage && !isEditing && (
            <RegenerateMessage
              regenerateMessage={regenerateMessage}
              slug={slug}
              chatId={chatId}
            />
          )}
          {chatId && role !== "user" && !isEditing && (
            <FeedbackButton
              isSelected={selectedFeedback === true}
              handleFeedback={() => handleFeedback(true)}
              tooltipContent={t("chat_window.good_response")}
              IconComponent={ThumbsUp}
            />
          )}
          <ActionMenu
            chatId={chatId}
            forkThread={forkThread}
            isEditing={isEditing}
            role={role}
          />
        </div>
      </div>
      <RenderMetrics metrics={metrics} />
    </div>
  );
};

function FeedbackButton({
  isSelected,
  handleFeedback,
  tooltipContent,
  IconComponent,
}) {
  return (
    <button
      type="button"
      onClick={handleFeedback}
      data-tooltip-id="feedback-button"
      data-tooltip-content={tooltipContent}
      className={ACTION_BUTTON_CLASS}
      aria-label={tooltipContent}
      aria-pressed={isSelected}
    >
      <IconComponent
        strokeWidth={1.5}
        fill={isSelected ? "currentColor" : "none"}
        size={20}
        aria-hidden="true"
      />
    </button>
  );
}

function CopyMessage({ message }) {
  const { copied, copyText } = useCopyText();
  const { t } = useTranslation();

  return (
    <>
      <button
        type="button"
        onClick={() => copyText(message)}
        data-tooltip-id="copy-assistant-text"
        data-tooltip-content={t("chat_window.copy")}
        className={ACTION_BUTTON_CLASS}
        aria-label={t("chat_window.copy")}
      >
        {copied ? (
          <Check strokeWidth={1.5} size={20} aria-hidden="true" />
        ) : (
          <Copy strokeWidth={1.5} size={20} aria-hidden="true" />
        )}
      </button>
      <span className="sr-only" role="status">
        {copied ? t("chat-history.copied") : ""}
      </span>
    </>
  );
}

function RegenerateMessage({ regenerateMessage, chatId }) {
  const { t } = useTranslation();
  if (!chatId) return null;
  return (
    <button
      type="button"
      onClick={() => regenerateMessage(chatId)}
      data-tooltip-id="regenerate-assistant-text"
      data-tooltip-content={t("chat_window.regenerate_response")}
      className={ACTION_BUTTON_CLASS}
      aria-label={t("chat_window.regenerate_response")}
    >
      <RefreshCw strokeWidth={1.5} size={20} aria-hidden="true" />
    </button>
  );
}

export default memo(Actions);
