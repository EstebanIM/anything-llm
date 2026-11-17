import React, { memo, useLayoutEffect, useRef, useState } from "react";
import { Info, TriangleAlert } from "lucide-react";
import Actions from "./Actions";
import renderMarkdown from "@/utils/chat/markdown";
import Citations from "../Citation";
import { v4 } from "uuid";
import DOMPurify from "@/utils/chat/purify";
import { EditMessageForm, useEditMessage } from "./Actions/EditMessage";
import { useWatchDeleteMessage } from "./Actions/DeleteMessage";
import TTSMessage from "./Actions/TTSButton";
import {
  THOUGHT_REGEX_CLOSE,
  THOUGHT_REGEX_COMPLETE,
  THOUGHT_REGEX_OPEN,
} from "../ThoughtContainer";
import paths from "@/utils/paths";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { chatQueryRefusalResponse } from "@/utils/chat";
import HistoricalOutputs from "./HistoricalOutputs";
import HistoricalClarifyingQuestions from "./HistoricalClarifyingQuestions";
import { openImageLightbox } from "@/components/ImageLightbox";
import ResponseError from "../ResponseError";

function hasVisibleContent(message) {
  if (!message) return false;
  const stripped = message
    .replace(new RegExp(THOUGHT_REGEX_COMPLETE, "g"), "")
    .trim();
  if (!stripped) return false;
  if (
    stripped.match(THOUGHT_REGEX_OPEN) &&
    !stripped.match(THOUGHT_REGEX_CLOSE)
  )
    return false;
  return true;
}

const HistoricalMessage = ({
  uuid: uuidProp,
  message,
  role,
  workspace,
  sources = [],
  attachments = [],
  error = false,
  feedbackScore = null,
  chatId = null,
  isLastMessage = false,
  regenerateMessage,
  saveEditedMessage,
  forkThread,
  metrics = {},
  outputs = [],
  clarifyingQuestions = [],
  canRetry = false,
}) => {
  // Freeze uuid on first render. User messages arrive without a uuid and this value
  // is used as the wrapper div's `key` — a default param fallback would regenerate
  // on every render and remount the subtree, wiping TruncatableContent state.
  const [uuid] = useState(() => uuidProp ?? v4());
  const { t } = useTranslation();
  const { isEditing } = useEditMessage({ chatId, role });
  const { isDeleted, completeDelete, onExitTransitionEnd } =
    useWatchDeleteMessage({
      chatId,
      role,
    });
  const adjustTextArea = (event) => {
    const element = event.target;
    element.style.height = "auto";
    element.style.height = element.scrollHeight + "px";
  };

  const isRefusalMessage =
    role === "assistant" && message === chatQueryRefusalResponse(workspace);

  // An assistant record with no text (failed or abandoned generation) has nothing to render.
  const isUnanswered =
    role === "assistant" &&
    !message?.trim() &&
    !outputs?.length &&
    !clarifyingQuestions?.length &&
    !attachments?.length;

  if (completeDelete) return null;

  if (!!error) {
    return (
      <ResponseError
        key={uuid}
        error={error}
        // Only the latest failure is live; older ones are history.
        announce={isLastMessage}
        onRetry={
          isLastMessage && canRetry && regenerateMessage
            ? () => regenerateMessage(chatId)
            : null
        }
      />
    );
  }

  // Shared by both roles: lets focus land on a message after a delete, and
  // fades the message out before it unmounts.
  const messageProps = {
    "data-chat-message": "",
    "data-chat-id": chatId ?? undefined,
    tabIndex: -1,
    onTransitionEnd: onExitTransitionEnd,
  };
  const exitClass = `transition-opacity duration-base ease-smooth ${isDeleted ? "opacity-0 pointer-events-none" : "opacity-100"}`;

  if (role === "user") {
    if (isEditing) {
      return (
        <div key={uuid} className="flex justify-end w-full py-4 px-4">
          <EditMessageForm
            role={role}
            chatId={chatId}
            message={message}
            attachments={attachments}
            adjustTextArea={adjustTextArea}
            saveChanges={saveEditedMessage}
          />
        </div>
      );
    }

    return (
      <div
        key={uuid}
        {...messageProps}
        className={`${exitClass} flex justify-end w-full group`}
      >
        <div className="py-4 px-4 flex flex-col items-end">
          <div className="bg-zinc-800 light:bg-slate-100 rounded-[20px] rounded-br-none px-4 py-3.5 max-w-[600px] [&_p]:m-0">
            <TruncatableContent>
              <RenderChatContent
                role={role}
                message={message}
                messageId={uuid}
              />
              <ChatAttachments attachments={attachments} />
            </TruncatableContent>
          </div>
          <Actions
            message={message}
            feedbackScore={feedbackScore}
            chatId={chatId}
            slug={workspace?.slug}
            isLastMessage={isLastMessage}
            regenerateMessage={regenerateMessage}
            isEditing={isEditing}
            role={role}
            forkThread={forkThread}
            metrics={metrics}
          />
        </div>
      </div>
    );
  }

  return (
    <div
      key={uuid}
      {...messageProps}
      className={`${exitClass} flex justify-start w-full group`}
    >
      <div className="py-4 px-4 md:pl-0 flex flex-col w-full">
        {isEditing ? (
          <EditMessageForm
            role={role}
            chatId={chatId}
            message={message}
            attachments={attachments}
            adjustTextArea={adjustTextArea}
            saveChanges={saveEditedMessage}
          />
        ) : (
          <div className="break-words">
            <HistoricalClarifyingQuestions surveys={clarifyingQuestions} />
            {isUnanswered ? (
              <div className="flex items-center gap-x-1.5 text-xs font-mono text-zinc-400 light:text-slate-500">
                <TriangleAlert
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0"
                />
                <p className="!m-0">{t("chat.no_response")}</p>
              </div>
            ) : (
              <RenderChatContent role={role} message={message} />
            )}
            {isRefusalMessage && (
              <Link
                data-tooltip-id="query-refusal-info"
                data-tooltip-content={`${t("chat.refusal.tooltip-description")}`}
                className="!no-underline group !flex w-fit"
                to={paths.chatModes()}
                target="_blank"
              >
                <div className="flex flex-row items-center gap-x-1 group-hover:opacity-100 opacity-60 w-fit">
                  <Info
                    strokeWidth={1.5}
                    aria-hidden="true"
                    className="text-theme-text-secondary"
                  />
                  <p className="!m-0 !p-0 text-theme-text-secondary !no-underline text-xs cursor-pointer">
                    {t("chat.refusal.tooltip-title")}
                  </p>
                </div>
              </Link>
            )}
            <ChatAttachments attachments={attachments} />
            <HistoricalOutputs outputs={outputs} />
            {metrics?.truncated && (
              <div className="flex items-center gap-x-1.5 mt-2 text-xs text-amber-400 light:text-amber-700">
                <TriangleAlert
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0"
                />
                <p className="!m-0">{t("chat.token_limit_reached")}</p>
              </div>
            )}
          </div>
        )}
        {hasVisibleContent(message) && (
          <div className="flex items-start md:items-center gap-x-1">
            <TTSMessage
              slug={workspace?.slug}
              chatId={chatId}
              message={message}
            />
            <Actions
              message={message}
              feedbackScore={feedbackScore}
              chatId={chatId}
              slug={workspace?.slug}
              isLastMessage={isLastMessage}
              regenerateMessage={regenerateMessage}
              isEditing={isEditing}
              role={role}
              forkThread={forkThread}
              metrics={metrics}
            />
          </div>
        )}
        {role === "assistant" && <Citations sources={sources} />}
      </div>
    </div>
  );
};

export default memo(
  HistoricalMessage,
  // Skip re-render the historical message:
  // - if the content is the exact same
  // - AND (not streaming)
  // - the lastMessage status is the same (regen icon)
  // - the chatID matches between renders. (feedback icons)
  // - the metrics are the same (metrics are updated in real time)
  (prevProps, nextProps) => {
    return (
      prevProps.message === nextProps.message &&
      prevProps.isLastMessage === nextProps.isLastMessage &&
      prevProps.chatId === nextProps.chatId &&
      prevProps.error === nextProps.error &&
      prevProps.canRetry === nextProps.canRetry &&
      JSON.stringify(prevProps.metrics) === JSON.stringify(nextProps.metrics) &&
      JSON.stringify(prevProps.sources) === JSON.stringify(nextProps.sources) &&
      JSON.stringify(prevProps.clarifyingQuestions) ===
        JSON.stringify(nextProps.clarifyingQuestions)
    );
  }
);

/**
 * Currently only renders image attachments as clickable thumbnails that open in the lightbox.
 * Other attachment types may be supported here in the future.
 */
function ChatAttachments({ attachments = [] }) {
  const { t } = useTranslation();
  if (!attachments.length) return null;
  return (
    <div className="flex flex-wrap gap-4 mt-4">
      {attachments.map((item, index) => (
        <button
          type="button"
          key={item.name}
          onClick={() => openImageLightbox(attachments, index)}
          className="p-0 border-none bg-transparent cursor-pointer hover:opacity-80 transition-opacity"
        >
          <img
            alt={t("chat-history.attachment-alt", { name: item.name })}
            src={item.contentString}
            className="w-[120px] h-[120px] object-cover rounded-lg"
          />
        </button>
      ))}
    </div>
  );
}

function TruncatableContent({ children }) {
  const contentRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const { t } = useTranslation();

  // useLayoutEffect (not useEffect) so collapse applies before paint — avoids a
  // one-frame flash of uncollapsed content on mount.
  useLayoutEffect(() => {
    if (contentRef.current) {
      setIsOverflowing(contentRef.current.scrollHeight > 250);
    }
  }, []);

  const showTruncation = !isExpanded && isOverflowing;

  return (
    <>
      <div className="relative">
        <div
          ref={contentRef}
          className={showTruncation ? "max-h-[250px] overflow-hidden" : ""}
        >
          {children}
        </div>
        {showTruncation && (
          // Same palette tokens as the bubble behind it, so the fade has no seam.
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-0 right-0 h-9 pointer-events-none bg-gradient-to-b from-transparent to-zinc-800 light:to-slate-100"
          />
        )}
      </div>
      {isOverflowing && (
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
          className="text-zinc-300 light:text-slate-700 hover:text-white light:hover:text-slate-900 text-xs font-medium leading-4 mt-2 min-h-[44px] md:min-h-0"
        >
          {isExpanded ? t("chat_window.see_less") : t("chat_window.see_more")}
        </button>
      )}
    </>
  );
}

const RenderChatContent = memo(
  ({ role, message }) => {
    // If the message is not from the assistant, we can render it directly
    // as normal since the user cannot think (lol)
    if (role !== "assistant")
      return (
        <span
          className="flex flex-col gap-y-1 text-white light:text-slate-900"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(renderMarkdown(message)),
          }}
        />
      );
    if (!message) return null;

    // Thought segments are rendered by the activity chain (buildMessages
    // splits them out) - this only renders the visible remainder.
    if (
      message.match(THOUGHT_REGEX_OPEN) &&
      !message.match(THOUGHT_REGEX_CLOSE)
    )
      return null;
    const msgToRender = message.replace(THOUGHT_REGEX_COMPLETE, "");
    if (!msgToRender.trim().length) return null;

    return (
      <span
        className="flex flex-col gap-y-1 text-white light:text-slate-900"
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(renderMarkdown(msgToRender)),
        }}
      />
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.role === nextProps.role &&
      prevProps.message === nextProps.message
    );
  }
);
