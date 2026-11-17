import { useState } from "react";
import { X, LoaderCircle, TriangleAlert } from "lucide-react";
import { useTranslation } from "react-i18next";
import Workspace from "@/models/workspace";
import { nFormatter } from "@/utils/numbers";
import showToast from "@/utils/toast";
import { PARSED_FILE_ATTACHMENT_REMOVED_EVENT } from "../../../DnDWrapper";
import useUser from "@/hooks/useUser";

export default function ParsedFilesMenu({
  titleId,
  onEmbeddingChange,
  onDone,
  files,
  setFiles,
  currentTokens,
  setCurrentTokens,
  contextWindow,
  isLoading,
  workspaceSlug,
  threadSlug = null,
}) {
  const { t } = useTranslation();
  const { user } = useUser();
  const canEmbed = !user || user.role !== "default";
  const initialContextWindowLimitExceeded =
    contextWindow &&
    currentTokens >= contextWindow * Workspace.maxContextWindowLimit;
  const [isEmbedding, setIsEmbedding] = useState(false);
  const [embedProgress, setEmbedProgress] = useState(1);
  const [contextWindowLimitExceeded, setContextWindowLimitExceeded] = useState(
    initialContextWindowLimitExceeded
  );

  async function handleRemove(e, file) {
    e.preventDefault();
    e.stopPropagation();
    if (!file?.id) return;

    const success = await Workspace.deleteParsedFiles(workspaceSlug, [file.id]);
    if (!success) return;

    // Update the local files list and current tokens
    setFiles((prev) => prev.filter((f) => f.id !== file.id));

    // Dispatch an event to the DnDFileUploaderWrapper to update the files list in attachment manager if it exists
    window.dispatchEvent(
      new CustomEvent(PARSED_FILE_ATTACHMENT_REMOVED_EVENT, {
        detail: { document: file },
      })
    );
    const { currentContextTokenCount } = await Workspace.getParsedFiles(
      workspaceSlug,
      threadSlug
    );
    const newContextWindowLimitExceeded =
      contextWindow &&
      currentContextTokenCount >=
        contextWindow * Workspace.maxContextWindowLimit;
    setCurrentTokens(currentContextTokenCount);
    setContextWindowLimitExceeded(newContextWindowLimitExceeded);
  }

  /**
   * Handles the embedding of the files when the user exceeds the context window limit
   * and opts to embed the files into the workspace instead.
   * @returns {Promise<void>}
   */
  async function handleEmbed() {
    if (!files.length) return;
    setIsEmbedding(true);
    onEmbeddingChange?.(true);
    setEmbedProgress(1);
    try {
      let completed = 0;
      const results = await Promise.all(
        files.map((file) =>
          Workspace.embedParsedFile(workspaceSlug, file.id).then((result) => {
            completed++;
            setEmbedProgress(completed + 1);
            return result;
          })
        )
      );
      setFiles([]);
      const { currentContextTokenCount } = await Workspace.getParsedFiles(
        workspaceSlug,
        threadSlug
      );
      setCurrentTokens(currentContextTokenCount);
      setContextWindowLimitExceeded(
        currentContextTokenCount >=
          contextWindow * Workspace.maxContextWindowLimit
      );
      const allEmbedded = results.every(({ response }) => response.ok);
      showToast(
        allEmbedded
          ? t("chat-input.context-embed-success", { count: files.length })
          : t("chat-input.context-embed-failed"),
        allEmbedded ? "success" : "error"
      );
      setIsEmbedding(false);
      onEmbeddingChange?.(false);
      setEmbedProgress(1);
      onDone?.();
      return;
    } catch (error) {
      console.error("Failed to embed files:", error);
      showToast(t("chat-input.context-embed-failed"), "error");
    }
    setIsEmbedding(false);
    onEmbeddingChange?.(false);
    setEmbedProgress(1);
  }

  return (
    <div className="flex flex-col gap-2 p-2">
      <div className="flex items-center justify-between">
        <p id={titleId} className="text-sm font-medium text-theme-text-primary">
          {t("chat-input.context-title", { count: files.length })}
        </p>
        <div
          // If the user cannot see the embed CTA, show a tooltip
          {...(contextWindowLimitExceeded &&
            !canEmbed && {
              "data-tooltip-id": "context-window-limit-exceeded",
              "data-tooltip-content": t("chat-input.context-limit-exceeded"),
            })}
          className={`flex items-center gap-x-1 ${contextWindowLimitExceeded && !canEmbed ? "cursor-pointer" : ""}`}
        >
          {contextWindowLimitExceeded && (
            <TriangleAlert
              strokeWidth={1.5}
              size={14}
              aria-hidden="true"
              className="text-orange-500 light:text-orange-700"
            />
          )}
          <div
            className={`text-xs ${contextWindowLimitExceeded ? "text-orange-500 light:text-orange-700" : "text-theme-text-secondary"}`}
          >
            {t("chat-input.context-tokens", {
              current: nFormatter(currentTokens),
              max: contextWindow ? nFormatter(contextWindow) : "--",
            })}
          </div>
        </div>
      </div>
      {contextWindowLimitExceeded && !canEmbed && (
        <p className="sr-only">{t("chat-input.context-limit-exceeded")}</p>
      )}
      {contextWindowLimitExceeded && canEmbed && (
        <div className="flex flex-col gap-2 p-2 bg-theme-bg-secondary light:bg-theme-bg-primary rounded">
          <div className="flex items-start gap-2">
            <TriangleAlert
              strokeWidth={1.5}
              className="flex-shrink-0 mt-1 text-yellow-500 light:text-yellow-700"
              size={16}
              aria-hidden="true"
            />
            <p className="text-xs text-theme-text-primary">
              {t("chat-input.context-almost-full")}
            </p>
          </div>
          <button
            type="button"
            onClick={handleEmbed}
            disabled={isEmbedding}
            className="border-none disabled:opacity-50 flex items-center justify-center gap-2 px-3 py-2 text-xs bg-primary-button hover:bg-primary-button-hover text-theme-button-primary-text font-medium rounded transition-colors duration-quick shadow-sm"
          >
            {isEmbedding ? (
              <>
                <LoaderCircle
                  strokeWidth={1.5}
                  size={14}
                  aria-hidden="true"
                  className="animate-spin"
                />
                {t("chat-input.context-embedding", {
                  current: embedProgress,
                  total: files.length,
                })}
              </>
            ) : (
              t("chat-input.context-embed")
            )}
          </button>
        </div>
      )}
      <ul className="flex flex-col gap-1 max-h-[300px] overflow-y-auto">
        {files.length > 0 &&
          files.map((file, i) => (
            <li
              key={file.id ?? i}
              className="flex items-center justify-between gap-2 p-2 text-xs bg-theme-bg-secondary rounded"
            >
              <div className="truncate flex-1 text-theme-text-primary">
                {file.title}
              </div>
              <button
                type="button"
                onClick={(e) => handleRemove(e, file)}
                aria-label={t("chat-input.attach-remove", { name: file.title })}
                className="border-none rounded text-theme-text-secondary hover:text-theme-text-primary transition-colors duration-quick"
                disabled={isEmbedding}
              >
                <X strokeWidth={1.5} size={16} aria-hidden="true" />
              </button>
            </li>
          ))}
      </ul>
      {isLoading && (
        <div
          role="status"
          className="flex items-center justify-center gap-2 text-xs text-theme-text-secondary text-center py-2"
        >
          <LoaderCircle
            strokeWidth={1.5}
            size={16}
            aria-hidden="true"
            className="animate-spin"
          />
          {t("common.loading")}
        </div>
      )}
      {!isLoading && files.length === 0 && (
        <p className="text-xs text-theme-text-secondary text-center py-2">
          {t("chat-input.context-empty")}
        </p>
      )}
    </div>
  );
}
