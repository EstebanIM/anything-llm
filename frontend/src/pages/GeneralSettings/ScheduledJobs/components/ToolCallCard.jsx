import { useId, useState } from "react";
import { useTranslation } from "react-i18next";
import { Wrench } from "lucide-react";
import hljs from "highlight.js";
import { safeJsonParse } from "@/utils/request";
import { useTheme } from "@/hooks/useTheme";
import DOMPurify from "@/utils/chat/purify";
import truncate from "truncate";
import { formatNumber } from "@/utils/dates";
import TimeText from "./TimeText";

const MAX_RESULT_LENGTH = 5000;

const PLAIN_PRE =
  "text-xs text-zinc-100 light:text-slate-900 bg-zinc-950/60 light:bg-slate-100 rounded-lg p-2 mt-1 overflow-x-auto white-scrollbar tool-call-scrollbar";

/**
 * Get the appropriate highlight.js theme based on the theme.
 * @param {boolean} isLight - Whether the theme is light.
 * @returns {string} The highlight.js theme.
 */
function getHljsTheme(isLight) {
  return isLight ? "github" : "github-dark";
}

/**
 * Try to render `value` as syntax-highlighted JSON. Returns a `dangerouslySetInnerHTML`
 * payload, or null if the value isn't an object (caller should fall back to plain text).
 * @param {string} value - The value to format and highlight.
 * @returns {{html: Object, length: number}|null} The highlighted value and the untruncated length.
 */
function formatAndHighlight(value) {
  const parsed =
    typeof value === "string" ? safeJsonParse(value, value) : value;
  if (typeof parsed !== "object" || parsed === null) return null;

  const formatted = JSON.stringify(parsed, null, 2);
  const truncatedFormatted = truncate(formatted, MAX_RESULT_LENGTH);
  const highlighted = hljs.highlight(truncatedFormatted, {
    language: "json",
  }).value;
  return {
    html: { __html: DOMPurify.sanitize(highlighted) },
    length: formatted.length,
  };
}

/** Says that only the start of a long value is shown. */
function TruncatedNote({ length }) {
  const { t } = useTranslation();
  if (length <= MAX_RESULT_LENGTH) return null;
  return (
    <p className="text-xs text-zinc-400 light:text-slate-600 mt-1">
      {t("scheduledJobs.toolCall.truncated", {
        shown: formatNumber(MAX_RESULT_LENGTH),
        total: formatNumber(length),
      })}
    </p>
  );
}

/**
 * Single tool call inside the run trace. Shows the tool name, arguments, and
 * (on demand) the tool's result. JSON arguments and results are pretty-printed
 * and syntax-highlighted; non-JSON values fall back to plain text.
 * @param {Object} toolCall - The tool call object.
 * @returns {React.ReactNode} The rendered tool call card.
 */
export default function ToolCallCard({ toolCall }) {
  return (
    <div className="border border-zinc-700 light:border-slate-300 rounded-lg p-3 bg-zinc-800/40 light:bg-slate-50">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
        <h3 className="flex items-center gap-2 text-sm font-medium text-zinc-50 light:text-slate-950 break-all">
          <Wrench
            strokeWidth={1.5}
            aria-hidden="true"
            className="h-3.5 w-3.5 shrink-0 text-sky-400 light:text-sky-700"
          />
          {toolCall.toolName}
        </h3>
        {toolCall.timestamp && (
          <span className="text-xs text-zinc-400 light:text-slate-600">
            <TimeText
              value={toolCall.timestamp}
              options={{ timeStyle: "medium" }}
            />
          </span>
        )}
      </div>
      <ToolCallArguments toolCall={toolCall} />
      <ToolCallResult toolCall={toolCall} />
    </div>
  );
}

function ToolCallArguments({ toolCall }) {
  const { t } = useTranslation();
  const { isLight } = useTheme();
  if (!toolCall.arguments) return null;

  const highlighted = formatAndHighlight(toolCall.arguments);
  return (
    <div className="mb-2">
      <span className="text-xs text-zinc-400 light:text-slate-600">
        {t("scheduledJobs.toolCall.arguments")}
      </span>
      {highlighted ? (
        <>
          <pre
            className={`text-xs rounded-lg p-2 mt-1 overflow-x-auto white-scrollbar tool-call-scrollbar hljs ${getHljsTheme(isLight)}`}
            dangerouslySetInnerHTML={highlighted.html}
          />
          <TruncatedNote length={highlighted.length} />
        </>
      ) : (
        <pre className={PLAIN_PRE}>
          {typeof toolCall.arguments === "string"
            ? toolCall.arguments
            : JSON.stringify(toolCall.arguments, null, 2)}
        </pre>
      )}
    </div>
  );
}

function ToolCallResult({ toolCall }) {
  const { t } = useTranslation();
  const { isLight } = useTheme();
  const [showResult, setShowResult] = useState(false);
  const resultId = useId();
  if (!toolCall.result) return null;

  const resultText =
    typeof toolCall.result === "string"
      ? toolCall.result
      : JSON.stringify(toolCall.result, null, 2);
  if (!resultText) return null;
  const highlighted = formatAndHighlight(resultText);

  return (
    <div>
      <button
        type="button"
        onClick={() => setShowResult(!showResult)}
        aria-expanded={showResult}
        aria-controls={resultId}
        className="border-none min-h-[44px] md:min-h-0 text-xs font-medium text-sky-400 light:text-sky-700 hover:underline underline-offset-2"
      >
        {showResult
          ? t("scheduledJobs.toolCall.hideResult")
          : t("scheduledJobs.toolCall.showResult")}
      </button>
      <div id={resultId} hidden={!showResult}>
        {showResult &&
          (highlighted ? (
            <>
              <pre
                className={`text-xs rounded-lg p-2 mt-1 overflow-x-auto max-h-64 overflow-y-auto whitespace-pre-wrap white-scrollbar tool-call-scrollbar hljs ${getHljsTheme(isLight)}`}
                dangerouslySetInnerHTML={highlighted.html}
              />
              <TruncatedNote length={highlighted.length} />
            </>
          ) : (
            <>
              <pre
                className={`${PLAIN_PRE} max-h-64 overflow-y-auto whitespace-pre-wrap`}
              >
                {truncate(resultText, MAX_RESULT_LENGTH)}
              </pre>
              <TruncatedNote length={resultText.length} />
            </>
          ))}
      </div>
    </div>
  );
}
