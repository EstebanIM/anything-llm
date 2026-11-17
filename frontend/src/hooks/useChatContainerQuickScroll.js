import { useEffect, useRef } from "react";
import { isShortcutBlocked, matchesShortcut } from "@/utils/keyboardShortcuts";

/**
 * Hook for scrolling the chat container using keyboard shortcuts.
 * @returns {Object} - An object containing the chat history ref and the scroll to top and bottom functions.
 */
export default function useChatContainerQuickScroll() {
  const chatHistoryRef = useRef(null);

  const scrollToTop = (event) => {
    event.preventDefault();
    chatHistoryRef.current.scrollToTop();
  };

  const scrollToBottom = (event) => {
    event.preventDefault();
    chatHistoryRef.current.scrollToBottom();
  };

  useEffect(() => {
    function handleScrollShortcuts(event) {
      if (!chatHistoryRef.current) return;
      // Not in text fields (cursor movement), over dialogs or on repeats.
      if (isShortcutBlocked(event)) return;
      if (matchesShortcut(event, "scrollTop")) scrollToTop(event);
      else if (matchesShortcut(event, "scrollBottom")) scrollToBottom(event);
    }

    window.addEventListener("keydown", handleScrollShortcuts);
    return () => window.removeEventListener("keydown", handleScrollShortcuts);
  }, []);

  return { chatHistoryRef };
}
