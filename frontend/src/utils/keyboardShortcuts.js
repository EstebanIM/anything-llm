import paths from "./paths";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userFromStorage } from "./request";
import { TOGGLE_LLM_SELECTOR_EVENT } from "@/components/WorkspaceChat/ChatContainer/PromptInput/LLMSelector/action";

export const KEYBOARD_SHORTCUTS_HELP_EVENT = "keyboard-shortcuts-help";
export const isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;

/**
 * Opens (true), closes (false) or toggles (undefined) the shortcuts help.
 * @param {boolean} [show]
 */
export function showKeyboardShortcutsHelp(show = true) {
  window.dispatchEvent(
    new CustomEvent(KEYBOARD_SHORTCUTS_HELP_EVENT, { detail: { show } })
  );
}

// `null` user = single-user mode, where everything is available.
const canOpenSettings = (user) => !user || user.role !== "default";
const isAdmin = (user) => !user || ["admin", "superadmin"].includes(user.role);

/**
 * @typedef {Object} Shortcut
 * @property {string} id
 * @property {string[][]} combos - alternatives; "Mod" is ⌘ on Mac and Ctrl elsewhere, "Ctrl" is Control everywhere
 * @property {string} labelKey - translation key of what it does
 * @property {"global"|"chat"} group - where it works (help dialog section)
 * @property {string} [noteKey] - translation key with extra context
 * @property {boolean} [allowInFields] - also acts while typing in a text field
 * @property {(user: object|null) => boolean} [available] - roles that get it
 * @property {(ctx: {navigate: import("react-router-dom").NavigateFunction}) => void} [action]
 *   handled here; entries without it are handled where they live and only listed
 */

/**
 * Single registry of the app's keyboard shortcuts: the help dialog lists it
 * and `initKeyboardShortcuts` runs the entries with an `action`.
 *
 * @note Navigating actions MUST use the injected `navigate` (react-router)
 * rather than `window.location`. Router navigation is interceptable - it lets
 * ActiveGenerationGuard warn before a shortcut abandons an in-flight response -
 * and avoids a full page reload of the whole SPA.
 *
 * @type {Shortcut[]}
 */
export const SHORTCUTS = [
  {
    id: "help",
    combos: [["F1"], ["Mod", "Shift", "?"]],
    labelKey: "keyboard-shortcuts.shortcuts.help",
    group: "global",
    allowInFields: true,
    action: () => showKeyboardShortcutsHelp(true),
  },
  {
    id: "settings",
    combos: [["Mod", ","]],
    labelKey: "keyboard-shortcuts.shortcuts.settings",
    group: "global",
    available: canOpenSettings,
    action: ({ navigate }) => navigate(paths.settings.interface()),
  },
  {
    id: "llmSelector",
    combos: [["Mod", "Shift", "L"]],
    labelKey: "keyboard-shortcuts.shortcuts.showLLMSelector",
    noteKey: "dialogs.shortcuts.note-workspace",
    group: "chat",
    available: isAdmin,
    action: () => window.dispatchEvent(new Event(TOGGLE_LLM_SELECTOR_EVENT)),
  },
  {
    // components/Sidebar/SidebarToggle
    id: "sidebar",
    combos: [["Mod", "Shift", "S"]],
    labelKey: "dialogs.shortcuts.sidebar",
    noteKey: "dialogs.shortcuts.note-sidebar",
    group: "chat",
  },
  {
    // components/WorkspaceChat/ChatContainer/PromptInput/SpeechToText/MicButton
    id: "dictation",
    combos: [["Ctrl", "M"]],
    labelKey: "dialogs.shortcuts.dictation",
    noteKey: "dialogs.shortcuts.note-dictation",
    group: "chat",
    allowInFields: true,
  },
  {
    // hooks/useChatContainerQuickScroll
    id: "scrollTop",
    combos: [["Mod", "ArrowUp"]],
    labelKey: "dialogs.shortcuts.scroll-top",
    group: "chat",
  },
  {
    id: "scrollBottom",
    combos: [["Mod", "ArrowDown"]],
    labelKey: "dialogs.shortcuts.scroll-bottom",
    group: "chat",
  },
];

/**
 * @param {Shortcut} shortcut
 * @param {object|null} user
 */
export function isShortcutAvailable(shortcut, user) {
  return !shortcut.available || shortcut.available(user ?? null);
}

const TEXT_INPUT_TYPES = [
  "text",
  "search",
  "email",
  "url",
  "tel",
  "password",
  "number",
  "date",
  "datetime-local",
  "month",
  "time",
  "week",
];

/** Elements where typed keys belong to the text, not to the app. */
function isTextField(target) {
  if (!(target instanceof Element)) return false;
  if (target.isContentEditable || target.tagName === "TEXTAREA") return true;
  if (target.tagName === "INPUT")
    return TEXT_INPUT_TYPES.includes((target.type || "text").toLowerCase());
  return target.closest('[role="textbox"]') !== null;
}

/**
 * Shared rules for the app's shortcuts: never while an IME composes, on a
 * held-down key, after someone else handled the key, or over a modal dialog;
 * and, unless `allowInFields`, never while typing in a text field.
 * @param {KeyboardEvent} event
 * @param {{allowInFields?: boolean}} [options]
 */
export function isShortcutBlocked(event, { allowInFields = false } = {}) {
  if (event.defaultPrevented || event.repeat) return true;
  if (event.isComposing || event.keyCode === 229) return true;
  if (document.querySelector("[data-app-dialog]")) return true;
  return !allowInFields && isTextField(event.target);
}

function matchesKey(event, key) {
  if (key === "?")
    return event.key === "?" || event.key === "/" || event.code === "Slash";
  if (key.length === 1 && /[a-z]/i.test(key)) {
    // Non-Latin layouts report another character: fall back to the key position.
    if (/^[a-z]$/i.test(event.key))
      return event.key.toLowerCase() === key.toLowerCase();
    return event.code === `Key${key.toUpperCase()}`;
  }
  return event.key === key;
}

/** On Mac only ⌘ counts as "Mod"; elsewhere only Ctrl. */
function matchesCombo(event, combo) {
  const key = combo[combo.length - 1];
  const ctrl = combo.includes("Ctrl") || (combo.includes("Mod") && !isMac);
  const meta = combo.includes("Mod") && isMac;
  if (event.ctrlKey !== ctrl || event.metaKey !== meta || event.altKey)
    return false;
  if (event.shiftKey !== combo.includes("Shift")) return false;
  return matchesKey(event, key);
}

/**
 * @param {KeyboardEvent} event
 * @param {string} id - registry id
 */
export function matchesShortcut(event, id) {
  const shortcut = SHORTCUTS.find((s) => s.id === id);
  return !!shortcut?.combos.some((combo) => matchesCombo(event, combo));
}

/**
 * Keys of a combo as shown to people: `{ label, srLabel? }` per key
 * ("Ctrl", "Mayús", "↑" read as "Flecha arriba"…).
 * @param {string[]} combo
 * @param {import("i18next").TFunction} t
 */
export function comboKeys(combo, t) {
  return combo.map((key) => {
    switch (key) {
      case "Mod":
        return { label: isMac ? "⌘" : "Ctrl" };
      case "Ctrl":
        return { label: isMac ? "⌃" : "Ctrl" };
      case "Shift":
        return { label: isMac ? "⇧" : t("dialogs.shortcuts.key-shift") };
      case "ArrowUp":
        return { label: "↑", srLabel: t("dialogs.shortcuts.key-up") };
      case "ArrowDown":
        return { label: "↓", srLabel: t("dialogs.shortcuts.key-down") };
      default:
        return { label: key.length === 1 ? key.toUpperCase() : key };
    }
  });
}

/**
 * First combo of a shortcut as plain text ("Ctrl + Mayús + S"), for tooltips.
 * @param {string} id
 * @param {import("i18next").TFunction} t
 */
export function shortcutText(id, t) {
  const combo = SHORTCUTS.find((s) => s.id === id)?.combos[0];
  if (!combo) return "";
  return comboKeys(combo, t)
    .map(({ label }) => label)
    .join(" + ");
}

/**
 * `aria-keyshortcuts` value for a shortcut ("F1 Control+Shift+?").
 * @param {string} id
 */
export function ariaKeyShortcuts(id) {
  const shortcut = SHORTCUTS.find((s) => s.id === id);
  if (!shortcut) return undefined;
  const name = (key) => {
    if (key === "Mod") return isMac ? "Meta" : "Control";
    if (key === "Ctrl") return "Control";
    return key;
  };
  return shortcut.combos.map((combo) => combo.map(name).join("+")).join(" ");
}

/** The open dialog on top is the shortcuts help itself. */
function helpIsOnTop() {
  const dialogs = document.querySelectorAll("[data-app-dialog]");
  return !!dialogs[dialogs.length - 1]?.querySelector("[data-shortcuts-help]");
}

/**
 * Initialize keyboard shortcuts.
 * @param {{navigate: import("react-router-dom").NavigateFunction}} ctx - Context passed to each shortcut action
 * @returns {() => void} cleanup function that removes the listener
 */
export function initKeyboardShortcuts(ctx = {}) {
  function handleKeyDown(event) {
    const shortcut = SHORTCUTS.find(
      (s) => s.action && s.combos.some((combo) => matchesCombo(event, combo))
    );
    if (!shortcut || !isShortcutAvailable(shortcut, userFromStorage())) return;

    if (shortcut.id === "help" && !event.defaultPrevented) {
      // F1 is ours even over a dialog (no browser help tab); it only closes
      // the help when the help is the dialog on top.
      if (document.querySelector("[data-app-dialog]")) {
        event.preventDefault();
        if (helpIsOnTop() && !event.repeat) showKeyboardShortcutsHelp(false);
        return;
      }
    }
    if (isShortcutBlocked(event, { allowInFields: shortcut.allowInFields }))
      return;
    event.preventDefault();
    shortcut.action(ctx);
  }

  window.addEventListener("keydown", handleKeyDown);
  return () => window.removeEventListener("keydown", handleKeyDown);
}

function useKeyboardShortcuts() {
  const navigate = useNavigate();
  useEffect(() => {
    // Every role gets the listener; each shortcut checks its own `available`.
    const cleanup = initKeyboardShortcuts({ navigate });
    return () => cleanup();
  }, [navigate]);
}

export function KeyboardShortcutWrapper({ children }) {
  useKeyboardShortcuts();
  return children;
}
