import { useState, useEffect, useRef } from "react";
import Workspace from "@/models/workspace";
import { useMessageActionsContext } from "@/components/WorkspaceChat/ChatContainer/ChatHistory/MessageActionsContext";
import { PROMPT_INPUT_ID } from "@/components/WorkspaceChat/ChatContainer/PromptInput";

// Slightly longer than the `duration-base` fade, in case transitionend never
// fires (e.g. the element is hidden mid-transition).
const EXIT_FALLBACK_MS = 400;

/**
 * Marks a message as deleted, fades it out and reports when it can unmount.
 * Deleting a chat removes both the prompt and the reply (they share chatId);
 * only the assistant side calls the API.
 */
export function useWatchDeleteMessage({ chatId = null, role = "user" }) {
  const context = useMessageActionsContext();
  const [completeDelete, setCompleteDelete] = useState(false);
  const deleteCalled = useRef(false);
  const isDeleted = context?.isDeleted(chatId) ?? false;

  useEffect(() => {
    if (isDeleted && !deleteCalled.current) {
      deleteCalled.current = true;
      if (role === "assistant") {
        Workspace.deleteChat(chatId);
      }
    }
  }, [isDeleted, chatId, role]);

  useEffect(() => {
    if (!isDeleted) return;
    const timer = setTimeout(() => setCompleteDelete(true), EXIT_FALLBACK_MS);
    return () => clearTimeout(timer);
  }, [isDeleted]);

  function onExitTransitionEnd(e) {
    if (!isDeleted) return;
    if (e.target !== e.currentTarget || e.propertyName !== "opacity") return;
    setCompleteDelete(true);
  }

  return { isDeleted, completeDelete, onExitTransitionEnd };
}

/**
 * Element that should receive focus once the messages of `chatId` are removed:
 * the next message, else the previous one, else the prompt input.
 * @param {HTMLElement|null} fromEl - any element inside the chat history
 * @param {string|number} chatId
 * @returns {HTMLElement|null}
 */
export function focusTargetAfterDelete(fromEl, chatId) {
  const container = fromEl?.closest("#chat-history");
  const messages = [
    ...(container?.querySelectorAll("[data-chat-message]") ?? []),
  ];
  const ownIndexes = messages
    .map((el, idx) => (el.dataset.chatId === String(chatId) ? idx : -1))
    .filter((idx) => idx !== -1);
  if (ownIndexes.length) {
    const next = messages[ownIndexes[ownIndexes.length - 1] + 1];
    const prev = messages[ownIndexes[0] - 1];
    if (next || prev) return next || prev;
  }
  return document.getElementById(PROMPT_INPUT_ID);
}
