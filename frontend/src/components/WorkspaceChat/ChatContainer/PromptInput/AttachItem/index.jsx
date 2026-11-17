import { Plus } from "lucide-react";
import { Tooltip } from "react-tooltip";
import { useTranslation } from "react-i18next";
import { useRef, useState, useEffect, useId } from "react";
import { useParams } from "react-router-dom";
import Workspace from "@/models/workspace";
import {
  ATTACHMENTS_PROCESSED_EVENT,
  PARSED_FILES_UPDATED_EVENT,
  REMOVE_ATTACHMENT_EVENT,
} from "../../DnDWrapper";
import { useTheme } from "@/hooks/useTheme";
import ParsedFilesMenu from "./ParsedFilesMenu";

/**
 * This is a simple proxy component that clicks on the DnD file uploader for the user.
 * @returns
 */
export default function AttachItem({
  workspaceSlug = null,
  workspaceThreadSlug = null,
}) {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const params = useParams();
  const slug = workspaceSlug || params.slug;
  const threadSlug = workspaceThreadSlug ?? params.threadSlug ?? null;
  const buttonRef = useRef(null);
  const panelRef = useRef(null);
  const titleId = useId();
  const [isEmbedding, setIsEmbedding] = useState(false);
  const [files, setFiles] = useState([]);
  const [currentTokens, setCurrentTokens] = useState(0);
  const [contextWindow, setContextWindow] = useState(Infinity);
  const [showTooltip, setShowTooltip] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const isEmbeddingRef = useRef(false);
  useEffect(() => {
    isEmbeddingRef.current = isEmbedding;
  }, [isEmbedding]);
  useEffect(() => {
    if (!showTooltip) setPanelOpen(false);
  }, [showTooltip]);

  const fetchFiles = () => {
    if (!slug) return;
    if (isEmbedding) return;
    setIsLoading(true);
    Workspace.getParsedFiles(slug, threadSlug)
      .then(({ files, contextWindow, currentContextTokenCount }) => {
        setFiles(files);
        setShowTooltip(files.length > 0);
        setContextWindow(contextWindow);
        setCurrentTokens(currentContextTokenCount);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  /**
   * Handles the removal of an attachment from the parsed files
   * and triggers a re-fetch of the parsed files.
   * This function handles when the user clicks the X on an Attachment via the AttachmentManager
   * so we need to sync the state in the ParsedFilesMenu picker here.
   */
  async function handleRemoveAttachment(e) {
    const { document } = e.detail;
    if (!document?.id) return;
    await Workspace.deleteParsedFiles(slug, [document.id]);
    fetchFiles();
  }

  /**
   * Handles the click event for the attach item button.
   * @param {MouseEvent} e - The click event.
   * @returns {void}
   */
  function handleClick(e) {
    e?.target?.blur();
    document?.getElementById("dnd-chat-file-uploader")?.click();
    return;
  }

  /**
   * The context file list opens on hover and on keyboard focus of the attach
   * button (react-tooltip default events). It stays open while focus is inside
   * the list, so keyboard users can Tab into it, and never closes mid-embed.
   */
  function requestPanelOpen(value) {
    if (!value) {
      if (isEmbeddingRef.current) return;
      if (panelRef.current?.contains(document.activeElement)) return;
    }
    setPanelOpen(value);
  }

  function closePanel({ returnFocus = false } = {}) {
    setPanelOpen(false);
    if (returnFocus) buttonRef.current?.focus();
  }

  useEffect(() => {
    fetchFiles();
    window.addEventListener(ATTACHMENTS_PROCESSED_EVENT, fetchFiles);
    window.addEventListener(PARSED_FILES_UPDATED_EVENT, fetchFiles);
    window.addEventListener(REMOVE_ATTACHMENT_EVENT, handleRemoveAttachment);
    return () => {
      window.removeEventListener(ATTACHMENTS_PROCESSED_EVENT, fetchFiles);
      window.removeEventListener(PARSED_FILES_UPDATED_EVENT, fetchFiles);
      window.removeEventListener(
        REMOVE_ATTACHMENT_EVENT,
        handleRemoveAttachment
      );
    };
  }, [slug, threadSlug]);

  const label =
    files.length > 0
      ? t("chat-input.attach-with-context", {
          label: t("chat_window.attach_file"),
          count: files.length,
        })
      : t("chat_window.attach_file");

  return (
    <>
      <button
        ref={buttonRef}
        id="attach-item-btn"
        data-tooltip-id={
          showTooltip ? "tooltip-attach-item-btn" : "attach-item-btn"
        }
        data-tooltip-content={
          !showTooltip ? t("chat_window.attach_file") : undefined
        }
        aria-label={label}
        type="button"
        onClick={handleClick}
        onPointerEnter={fetchFiles}
        className="group border-none relative flex justify-center items-center cursor-pointer w-11 h-11 md:w-6 md:h-6 rounded-full hover:bg-zinc-700 light:hover:bg-slate-200 transition-colors duration-quick"
      >
        <div className="relative">
          <Plus
            strokeWidth={1.5}
            size={18}
            aria-hidden="true"
            className="pointer-events-none text-zinc-300 light:text-slate-600 group-hover:text-white light:group-hover:text-slate-600 shrink-0"
          />
          {files.length > 0 && (
            <div
              aria-hidden="true"
              className="absolute -top-2.5 -right-2 bg-white text-black light:invert text-[8px] rounded-full px-1 flex items-center justify-center"
            >
              {files.length}
            </div>
          )}
        </div>
      </button>
      {showTooltip && (
        <Tooltip
          id="tooltip-attach-item-btn"
          role="none"
          place="top"
          opacity={1}
          clickable={true}
          isOpen={panelOpen}
          setIsOpen={requestPanelOpen}
          delayShow={300}
          delayHide={800}
          arrowColor={
            theme === "light"
              ? "var(--theme-modal-border)"
              : "var(--theme-bg-primary)"
          }
          className="z-99 !w-[400px] !max-w-[calc(100vw-2rem)] !bg-theme-bg-primary !px-[5px] !rounded-lg !pointer-events-auto light:border-2 light:border-theme-modal-border"
        >
          <div
            ref={panelRef}
            role="group"
            aria-labelledby={titleId}
            onKeyDown={(e) => {
              if (e.key !== "Escape") return;
              e.preventDefault();
              e.stopPropagation();
              closePanel({ returnFocus: true });
            }}
            onBlur={(e) => {
              const next = e.relatedTarget;
              if (isEmbeddingRef.current) return;
              if (next && panelRef.current?.contains(next)) return;
              if (next && next === buttonRef.current) return;
              // A click on plain text inside the list blurs without a new
              // target; the tooltip's own hover logic closes it later.
              if (!next && panelRef.current?.matches(":hover")) return;
              closePanel();
            }}
          >
            <ParsedFilesMenu
              titleId={titleId}
              onEmbeddingChange={setIsEmbedding}
              onDone={() => closePanel({ returnFocus: true })}
              isLoading={isLoading}
              files={files}
              setFiles={setFiles}
              currentTokens={currentTokens}
              setCurrentTokens={setCurrentTokens}
              contextWindow={contextWindow}
              workspaceSlug={slug}
              threadSlug={threadSlug}
            />
          </div>
        </Tooltip>
      )}
    </>
  );
}
