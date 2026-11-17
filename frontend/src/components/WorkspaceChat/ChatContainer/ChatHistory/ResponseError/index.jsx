import { Link } from "react-router-dom";
import { RefreshCw, TriangleAlert } from "lucide-react";
import { useTranslation } from "react-i18next";
import useUser from "@/hooks/useUser";
import paths from "@/utils/paths";
import { PROMPT_INPUT_ID } from "@/components/WorkspaceChat/ChatContainer/PromptInput";

// Server messages meaning the workspace has no usable LLM provider or model,
// e.g. "Unknown provider: undefined. Please use a valid provider."
const MISSING_MODEL_PATTERN =
  /(unknown|invalid|valid|missing|no)\s+(llm\s+)?provider|provider:?\s+(undefined|null)|no llm|no (chat )?models? (set|selected|configured|loaded)/i;

/**
 * Card shown when a reply could not be generated. Explains the cause and the
 * next step in the user's language and keeps the raw server message as a
 * secondary technical detail.
 * @param {Object} props
 * @param {string|boolean} props.error - server error message, when there is one
 * @param {(() => void)|null} [props.onRetry] - regenerates the reply from the last prompt
 * @param {boolean} [props.announce] - interrupt screen readers (live failures only)
 */
export default function ResponseError({
  error,
  onRetry = null,
  announce = false,
}) {
  const { t } = useTranslation();
  const { user } = useUser();
  const detail = typeof error === "string" && error.trim() ? error : null;
  const missingModel = !!detail && MISSING_MODEL_PATTERN.test(detail);
  // Single-user mode has no user object and full access to settings.
  const canConfigure = !user || user.role !== "default";

  function retry() {
    onRetry?.();
    // The card unmounts once the retry starts; keep focus somewhere useful.
    document.getElementById(PROMPT_INPUT_ID)?.focus();
  }

  return (
    <div className="flex justify-start w-full">
      <div className="py-4 px-4 md:pl-0 flex flex-col w-full md:max-w-[80%]">
        <div
          role={announce ? "alert" : undefined}
          className="flex flex-col gap-y-2 rounded-xl border p-3 text-sm bg-red-950/40 border-red-900/60 text-red-300 light:bg-red-50 light:border-red-200 light:text-red-700"
        >
          <p className="!m-0 flex items-center gap-x-2 font-medium">
            <TriangleAlert
              strokeWidth={1.5}
              aria-hidden="true"
              className="size-4 shrink-0"
            />
            {t("chat-history.error.title")}
          </p>
          <p className="!m-0">
            {missingModel
              ? canConfigure
                ? t("chat-history.error.missing-model")
                : t("chat-history.error.missing-model-ask-admin")
              : t("chat-history.error.generic")}
          </p>
          {missingModel && canConfigure && (
            <Link
              to={paths.settings.llmPreference()}
              className="w-fit font-medium underline underline-offset-2 text-red-200 light:text-red-800"
            >
              {t("chat-history.error.configure-model")}
            </Link>
          )}
          {detail && (
            <p className="!m-0 text-xs font-mono break-words text-zinc-300 light:text-slate-600">
              {t("chat-history.error.detail", { detail })}
            </p>
          )}
          {onRetry && (
            <button
              type="button"
              onClick={retry}
              className="w-fit flex items-center gap-x-1.5 rounded-lg border border-red-900/60 light:border-red-300 px-3 min-h-[44px] md:min-h-0 md:py-1.5 text-sm font-medium text-red-200 light:text-red-800 hover:bg-red-900/40 light:hover:bg-red-100 transition-colors duration-quick"
            >
              <RefreshCw strokeWidth={1.5} size={16} aria-hidden="true" />
              {t("chat_window.regenerate")}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
