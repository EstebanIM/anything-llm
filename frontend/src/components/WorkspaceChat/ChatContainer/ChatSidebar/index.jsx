import {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

const ChatSidebarContext = createContext();

const PROMPT_INPUT_ID = "primary-prompt-input";
const PANEL_WIDTH = 366;
// Matches `duration-base`, used as a fallback when `transitionend` never fires.
const CLOSE_FALLBACK_MS = 300;
export const WIDE_SCREEN_QUERY = "(min-width: 1024px)";
export const PHONE_SCREEN_QUERY = "(max-width: 767px)";

/**
 * Tracks a CSS media query (by viewport width, not by user agent).
 * @param {string} query
 * @returns {boolean}
 */
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(
    () => typeof window !== "undefined" && !!window.matchMedia?.(query)?.matches
  );

  useEffect(() => {
    const mql = window.matchMedia?.(query);
    if (!mql) return;
    const onChange = () => setMatches(mql.matches);
    onChange();
    mql.addEventListener?.("change", onChange);
    return () => mql.removeEventListener?.("change", onChange);
  }, [query]);

  return matches;
}

export function ChatSidebarProvider({ children }) {
  const [activeSidebar, setActiveSidebar] = useState(null);
  const [sidebarData, setSidebarData] = useState(null);
  const openerRef = useRef(null);

  /**
   * @param {string} type
   * @param {any} [data]
   * @param {{returnFocusTo?: HTMLElement}} [opts] - element that gets focus
   * back when the panel closes (defaults to the element focused once the
   * panel renders open, e.g. a menu trigger that took focus back)
   */
  function openSidebar(type, data = null, opts = {}) {
    if (activeSidebar !== type) openerRef.current = opts.returnFocusTo ?? null;
    setActiveSidebar(type);
    setSidebarData(data);
  }

  function closeSidebar() {
    setActiveSidebar(null);
    setSidebarData(null);
  }

  function toggleSidebar(type, data = null, opts = {}) {
    if (activeSidebar === type) closeSidebar();
    else openSidebar(type, data, opts);
  }

  function rememberOpener() {
    if (!openerRef.current) openerRef.current = document.activeElement;
  }

  function restoreFocus() {
    const opener = openerRef.current;
    openerRef.current = null;
    if (opener?.isConnected && opener !== document.body) {
      opener.focus({ preventScroll: true });
      return;
    }
    document.getElementById(PROMPT_INPUT_ID)?.focus({ preventScroll: true });
  }

  return (
    <ChatSidebarContext.Provider
      value={{
        activeSidebar,
        sidebarData,
        openSidebar,
        closeSidebar,
        toggleSidebar,
        rememberOpener,
        restoreFocus,
      }}
    >
      {children}
    </ChatSidebarContext.Provider>
  );
}

export function useChatSidebar() {
  return useContext(ChatSidebarContext);
}

export function useSourcesSidebar() {
  const { activeSidebar, sidebarData, openSidebar, closeSidebar } =
    useContext(ChatSidebarContext);
  return {
    sidebarOpen: activeSidebar === "sources",
    sources: activeSidebar === "sources" ? sidebarData : [],
    openSidebar: (sources, opts) => openSidebar("sources", sources, opts),
    closeSidebar,
  };
}

export function useMemoriesSidebar() {
  const { activeSidebar, toggleSidebar, closeSidebar } =
    useContext(ChatSidebarContext);
  return {
    sidebarOpen: activeSidebar === "memories",
    toggleSidebar: (opts) => toggleSidebar("memories", null, opts),
    closeSidebar,
  };
}

/**
 * Right-side chat panel (`<aside>`), shared by Sources and Memories.
 * - Only `transform` animates. On wide screens (lg) the panel still pushes the
 *   chat: its width is reserved at once on open and released after the
 *   slide-out, so the long chat history reflows once instead of every frame.
 *   Below lg it overlays the chat instead.
 * - Closed: `inert`, so nothing inside is reachable with Tab.
 * - Open: focus moves to the element marked `data-panel-title` (or the first
 *   control); Escape closes it and focus returns to the opener.
 *
 * @param {Object} props
 * @param {boolean} props.isOpen
 * @param {() => void} props.onClose
 * @param {string} props.labelledBy - id of the panel heading
 * @param {import("react").ReactNode} props.children
 */
export default function ChatSidebar({ isOpen, onClose, labelledBy, children }) {
  const { rememberOpener, restoreFocus } = useContext(ChatSidebarContext);
  const isWide = useMediaQuery(WIDE_SCREEN_QUERY);
  const asideRef = useRef(null);
  const wasOpen = useRef(isOpen);
  const onCloseRef = useRef(onClose);
  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  // Width stays reserved while the panel slides out (push mode only).
  const [reserved, setReserved] = useState(isOpen);
  if (isOpen && !reserved) setReserved(true);

  useEffect(() => {
    if (isOpen || !reserved) return;
    const timer = setTimeout(() => setReserved(false), CLOSE_FALLBACK_MS);
    return () => clearTimeout(timer);
  }, [isOpen, reserved]);

  // Before focus moves in (opening) or the browser drops it from the now-inert
  // panel (closing).
  useLayoutEffect(() => {
    const opening = !wasOpen.current && isOpen;
    const closing = wasOpen.current && !isOpen;
    wasOpen.current = isOpen;
    if (opening) rememberOpener();
    if (!closing) return;
    const active = document.activeElement;
    if (active === document.body || asideRef.current?.contains(active))
      restoreFocus();
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const timer = setTimeout(() => {
      const aside = asideRef.current;
      if (!aside || aside.contains(document.activeElement)) return;
      const target =
        aside.querySelector("[data-panel-title]") ||
        aside.querySelector("button:not([disabled]), [href], [tabindex='0']");
      target?.focus({ preventScroll: true });
    }, 0);

    // Window listener: menus inside the panel handle Escape first (document
    // level) and mark it with preventDefault.
    const onKeyDown = (e) => {
      if (e.key !== "Escape" || e.defaultPrevented) return;
      if (!asideRef.current?.contains(document.activeElement)) return;
      e.preventDefault();
      onCloseRef.current?.();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  const motion = `transition-transform ease-drawer ${
    isOpen ? "translate-x-0 duration-panel" : "translate-x-full duration-base"
  }`;

  return (
    <aside
      ref={asideRef}
      aria-labelledby={labelledBy}
      {...(!isOpen && { inert: "" })}
      className={
        isWide
          ? "relative h-full flex-shrink-0 overflow-hidden"
          : `absolute inset-y-0 right-0 z-20 h-full max-w-full overflow-hidden ${
              isOpen ? "" : "pointer-events-none"
            }`
      }
      style={
        isWide
          ? { width: reserved ? `${PANEL_WIDTH}px` : "0px", contain: "strict" }
          : { width: `${PANEL_WIDTH}px` }
      }
    >
      <div
        className={`h-full max-w-full ${motion} ${
          isWide
            ? ""
            : "bg-zinc-950 light:bg-slate-50 border-l border-zinc-800 light:border-slate-300 shadow-2xl"
        }`}
        style={{ width: `${PANEL_WIDTH}px` }}
        onTransitionEnd={(e) => {
          if (e.target === e.currentTarget && !isOpen) setReserved(false);
        }}
      >
        {children}
      </div>
    </aside>
  );
}
