import { memo } from "react";
import { useTranslation } from "react-i18next";
import renderMarkdown from "@/utils/chat/markdown";
import DOMPurify from "@/utils/chat/purify";
import Citations from "../Citation";
import ResponseError from "../ResponseError";
import {
  THOUGHT_REGEX_CLOSE,
  THOUGHT_REGEX_COMPLETE,
  THOUGHT_REGEX_OPEN,
} from "../ThoughtContainer";

const DOT_DELAYS = [
  "[animation-delay:0ms]",
  "[animation-delay:200ms]",
  "[animation-delay:400ms]",
];

const PromptReply = ({
  uuid,
  reply,
  pending,
  error,
  sources = [],
  onRetry = null,
}) => {
  const { t } = useTranslation();
  if (!reply && sources.length === 0 && !pending && !error) return null;

  if (pending) {
    return (
      <div className="flex justify-start w-full">
        <div className="py-4 pl-0 pr-4 flex flex-col md:max-w-[80%]">
          {/*
            The dots are the only visual signal that a reply is coming. The
            status region gives a screen reader user the same information. It
            carries the text rather than wrapping the dots so that it announces
            once, on appearance, instead of on every repaint.
          */}
          <span className="sr-only" role="status">
            {t("chat_window.generating_response")}
          </span>
          {/* Mounted only while pending, so the loop stops with the state. */}
          <div
            className="mt-3 ml-1 flex items-center gap-x-1.5"
            aria-hidden="true"
          >
            {DOT_DELAYS.map((delay) => (
              <span
                key={delay}
                className={`size-2 rounded-full bg-zinc-400 light:bg-slate-500 animate-pulse ${delay}`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) return <ResponseError error={error} onRetry={onRetry} announce />;

  return (
    <div key={uuid} className="flex justify-start w-full">
      <div className="py-4 pl-0 pr-4 flex flex-col w-full">
        <RenderAssistantChatContent
          key={`${uuid}-prompt-reply-content`}
          message={reply}
        />
        <Citations sources={sources} />
      </div>
    </div>
  );
};

function RenderAssistantChatContent({ message }) {
  // Thought segments are rendered by the activity chain (buildMessages splits
  // them out) - this only renders the visible remainder of the reply.
  if (message.match(THOUGHT_REGEX_OPEN) && !message.match(THOUGHT_REGEX_CLOSE))
    return null;
  const msgToRender = message.replace(THOUGHT_REGEX_COMPLETE, "");
  if (!msgToRender.trim().length) return null;

  return (
    <span
      className="break-words flex flex-col gap-y-1"
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(renderMarkdown(msgToRender)),
      }}
    />
  );
}

export default memo(PromptReply);
