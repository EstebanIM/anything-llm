import React, { useEffect, useRef, useState } from "react";
import Workspace from "@/models/workspace";
import LoadingChat from "./LoadingChat";
import ChatContainer from "./ChatContainer";
import paths from "@/utils/paths";
import Modal, {
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@/components/lib/Modal";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import {
  DnDFileUploaderProvider,
  DndUploaderContext,
  PASTE_ATTACHMENT_EVENT,
} from "./ChatContainer/DnDWrapper";
import { CircleAlert } from "lucide-react";
import {
  TTSProvider,
  useWatchForAutoPlayAssistantTTSResponse,
} from "../contexts/TTSProvider";
import { PENDING_HOME_MESSAGE } from "@/utils/constants";
import { PROMPT_INPUT_ID } from "./ChatContainer/PromptInput";
import { movePromptInputDraft } from "@/hooks/usePromptInputStorage";
import showToast from "@/utils/toast";

export default function WorkspaceChat({ loading, workspace }) {
  const { t } = useTranslation();
  useWatchForAutoPlayAssistantTTSResponse();
  const { threadSlug = null } = useParams();
  const navigate = useNavigate();
  // Stores { key, workspace, history } currently rendered. Lags the props so
  // the previous chat stays mounted until the next one's history is ready,
  // avoiding a skeleton/loader flash on workspace/thread switches.
  const [loaded, setLoaded] = useState(null);
  const [dragging, setDragging] = useState(false);
  const pendingFilesRef = useRef([]);

  // When the thread becomes available and we have pending files, trigger upload
  useEffect(() => {
    if (loaded?.threadSlug && pendingFilesRef.current.length > 0) {
      const files = pendingFilesRef.current;
      pendingFilesRef.current = [];
      window.dispatchEvent(
        new CustomEvent(PASTE_ATTACHMENT_EVENT, { detail: { files } })
      );
    }
  }, [loaded?.threadSlug]);

  async function handleDropWithoutThread(acceptedFiles) {
    setDragging(false);
    pendingFilesRef.current = acceptedFiles;
    const { thread } = await Workspace.threads.new(workspace.slug);
    if (!thread) return;
    // The thread route remounts PromptInput under the thread's storage key,
    // so carry the unsent draft over with the files.
    movePromptInputDraft({
      from: workspace.slug,
      to: thread.slug,
      value: document.getElementById(PROMPT_INPUT_ID)?.value ?? "",
    });
    navigate(paths.workspace.thread(workspace.slug, thread.slug));
  }

  useEffect(() => {
    let cancelled = false;

    async function getHistory() {
      if (loading) return;
      if (!workspace?.slug) {
        setLoaded({ key: "none", workspace: null, history: [] });
        return false;
      }

      const chatHistory = threadSlug
        ? await Workspace.threads.chatHistory(workspace.slug, threadSlug)
        : await Workspace.chatHistory(workspace.slug);

      if (cancelled) return;

      setLoaded({
        key: `${workspace.slug}:${threadSlug ?? "default"}`,
        workspace,
        threadSlug,
        history: chatHistory,
      });
    }
    getHistory();

    return () => {
      cancelled = true;
    };
  }, [workspace, loading, threadSlug]);

  const hasPendingMessage = !!sessionStorage.getItem(PENDING_HOME_MESSAGE);
  if (loaded === null) {
    if (hasPendingMessage) {
      return (
        <main
          aria-busy="true"
          className="relative md:ml-[2px] md:mr-[16px] md:my-[16px] md:rounded-[16px] bg-zinc-900 light:bg-white w-full h-full"
        />
      );
    }
    return <LoadingChat />;
  }
  if (!loading && !workspace) {
    return (
      <>
        {loading === false && !workspace && (
          <Modal isOpen={true} size="md">
            <ModalHeader
              title={
                <span className="flex items-center gap-x-2 text-red-400 light:text-red-700">
                  <CircleAlert
                    strokeWidth={1.5}
                    className="w-5 h-5"
                    aria-hidden="true"
                  />
                  {t("chat-panels.not-found.title")}
                </span>
              }
            />
            <ModalBody>
              <p className="text-zinc-300 light:text-slate-700 text-sm">
                {t("chat-panels.not-found.description")}
              </p>
            </ModalBody>
            <ModalFooter className="justify-end">
              <Link
                to={paths.home()}
                className="flex items-center justify-center h-[34px] px-4 rounded-lg text-sm font-medium border-none bg-zinc-50 light:bg-slate-900 text-zinc-950 light:text-white hover:opacity-80 transition-opacity duration-quick"
              >
                {t("chat-panels.not-found.home")}
              </Link>
            </ModalFooter>
          </Modal>
        )}
        <LoadingChat />
      </>
    );
  }

  setEventDelegatorForCodeSnippets();

  return (
    <TTSProvider>
      <DnDWrapper
        loaded={loaded}
        opts={{
          files: [],
          ready: true,
          dragging,
          setDragging,
          onDrop: handleDropWithoutThread,
          parseAttachments: () => [],
        }}
      >
        <ChatContainer
          key={loaded.key}
          workspace={loaded.workspace}
          threadSlug={loaded.threadSlug}
          knownHistory={loaded.history}
        />
      </DnDWrapper>
    </TTSProvider>
  );
}

function DnDWrapper({ children, loaded, opts }) {
  if (!loaded?.threadSlug) {
    return (
      <DndUploaderContext.Provider value={opts}>
        {children}
      </DndUploaderContext.Provider>
    );
  }
  return (
    <DnDFileUploaderProvider
      workspace={loaded.workspace}
      threadSlug={loaded.threadSlug}
    >
      {children}
    </DnDFileUploaderProvider>
  );
}

const COPY_STATUS_ID = "code-copy-status";

/**
 * Copies text with the async Clipboard API when the page is a secure context,
 * falling back to a hidden textarea + execCommand on plain HTTP.
 * @param {string} text
 * @returns {Promise<boolean>}
 */
async function writeToClipboard(text) {
  if (window.isSecureContext && navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // fall through to the legacy path
    }
  }

  const previousFocus = document.activeElement;
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.setAttribute("aria-hidden", "true");
  Object.assign(textarea.style, {
    position: "fixed",
    top: "0",
    left: "0",
    opacity: "0",
    pointerEvents: "none",
  });
  document.body.appendChild(textarea);
  textarea.select();
  textarea.setSelectionRange(0, text.length);
  let copied = false;
  try {
    copied = document.execCommand("copy");
  } catch {
    copied = false;
  }
  textarea.remove();
  previousFocus?.focus?.({ preventScroll: true });
  return copied;
}

/** Polite live region shared by every code block's copy button. */
function announceCopyStatus(message) {
  let region = document.getElementById(COPY_STATUS_ID);
  if (!region) {
    region = document.createElement("div");
    region.id = COPY_STATUS_ID;
    region.setAttribute("role", "status");
    region.className = "sr-only";
    document.body.appendChild(region);
  }
  // Clear first so the same message is announced again on a second copy.
  region.textContent = "";
  setTimeout(() => {
    region.textContent = message;
  }, 50);
}

// Enables us to safely markdown and sanitize all responses without risk of injection
// but still be able to attach a handler to copy code snippets on all elements
// that are code snippets.
async function copyCodeSnippet(uuid) {
  const target = document.querySelector(`[data-code="${uuid}"]`);
  if (!target || target.hasAttribute("disabled")) return false;
  const markdown =
    target.parentElement?.parentElement?.querySelector(
      "pre:first-of-type"
    )?.innerText;
  if (!markdown) return false;

  const copied = await writeToClipboard(markdown);
  if (!copied) {
    showToast(i18next.t("chat-panels.copy-code.failed"), "error", {
      clear: true,
    });
    return false;
  }

  const copiedLabel = i18next.t("chat-panels.copy-code.copied");
  announceCopyStatus(copiedLabel);
  target.classList.add("text-green-500");
  const originalText = target.innerHTML;
  target.innerText = copiedLabel;
  target.setAttribute("disabled", true);

  setTimeout(() => {
    target.classList.remove("text-green-500");
    target.innerHTML = originalText;
    target.removeAttribute("disabled");
  }, 2500);
  return true;
}

// Listens and hunts for all data-code-snippet clicks.
let _codeSnippetDelegatorRegistered = false;
export function setEventDelegatorForCodeSnippets() {
  if (_codeSnippetDelegatorRegistered) return;
  _codeSnippetDelegatorRegistered = true;
  document?.addEventListener("click", function (e) {
    const target = e.target.closest("[data-code-snippet]");
    const uuidCode = target?.dataset?.code;
    if (!uuidCode) return false;
    copyCodeSnippet(uuidCode);
  });
}
