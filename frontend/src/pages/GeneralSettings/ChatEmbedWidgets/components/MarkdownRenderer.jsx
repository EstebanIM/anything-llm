import { useId, useState } from "react";
import MarkdownIt from "markdown-it";
import hljs from "highlight.js";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import DOMPurify from "@/utils/chat/purify";
import { useTheme } from "@/hooks/useTheme";
import "@/utils/chat/themes/github-dark.css";
import "@/utils/chat/themes/github.css";

const md = new MarkdownIt({
  html: true,
  breaks: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(str, { language: lang }).value;
      } catch {}
    }
    return ""; // use external default escaping
  },
});

function ThoughtBubble({ thought }) {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);
  const panelId = useId();

  const cleanThought = (thought || "").replace(/<\/?think>/g, "").trim();
  if (!cleanThought) return null;

  return (
    <div className="mb-3">
      <button
        type="button"
        aria-expanded={isExpanded}
        aria-controls={panelId}
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-x-2 min-h-[44px] md:min-h-0 mb-2 rounded-md text-theme-text-secondary hover:text-theme-text-primary transition-colors duration-quick ease-smooth"
      >
        <ChevronDown
          strokeWidth={1.5}
          size={14}
          aria-hidden="true"
          className={`transition-transform duration-quick ease-smooth ${isExpanded ? "rotate-180" : ""}`}
        />
        <span className="text-xs font-medium">{t("embed-pages.thoughts")}</span>
      </button>
      <div
        id={panelId}
        hidden={!isExpanded}
        className="bg-theme-bg-chat-input rounded-md p-3 border-l-2 border-theme-text-secondary/30"
      >
        <div className="text-xs text-theme-text-secondary font-mono whitespace-pre-wrap">
          {cleanThought}
        </div>
      </div>
    </div>
  );
}

function parseContent(content) {
  const parts = [];
  let lastIndex = 0;
  content.replace(/<think>([^]*?)<\/think>/g, (match, thinkContent, offset) => {
    if (offset > lastIndex) {
      parts.push({ type: "normal", text: content.slice(lastIndex, offset) });
    }
    parts.push({ type: "think", text: thinkContent });
    lastIndex = offset + match.length;
  });
  if (lastIndex < content.length) {
    parts.push({ type: "normal", text: content.slice(lastIndex) });
  }
  return parts;
}

/**
 * Renders a stored chat response (markdown, with optional <think> blocks) for
 * the chat history views. Code colors follow the active theme.
 */
export default function MarkdownRenderer({ content }) {
  const { isLight } = useTheme();
  if (!content) return null;

  const parts = parseContent(content);
  return (
    <div
      className={`whitespace-normal break-words ${isLight ? "github" : "github-dark"} [&_pre]:my-2 [&_pre]:p-3 [&_pre]:rounded-md [&_pre]:overflow-x-auto [&_pre]:border [&_pre]:border-zinc-700 light:[&_pre]:border-slate-300`}
    >
      {parts.map((part, index) => {
        if (part.type === "think")
          return <ThoughtBubble key={index} thought={part.text} />;
        return (
          <div
            key={index}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(md.render(part.text)),
            }}
          />
        );
      })}
    </div>
  );
}
