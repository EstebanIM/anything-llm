import { useCallback, useEffect } from "react";
import { Mic, LoaderCircle } from "lucide-react";
import { Tooltip } from "react-tooltip";
import { useTranslation } from "react-i18next";
import { PROMPT_INPUT_EVENT } from "../../../PromptInput";
import {
  ariaKeyShortcuts,
  isShortcutBlocked,
  matchesShortcut,
  shortcutText,
} from "@/utils/keyboardShortcuts";

/**
 * Shared microphone button for all speech-to-text providers. Owns the Ctrl+M
 * shortcut and the PROMPT_INPUT_EVENT listener so each provider only has to
 * implement start/stop.
 * @param {Object} props - The component props
 * @param {boolean} props.listening - Whether the provider is actively listening
 * @param {boolean} [props.processing] - Whether a transcription request is in flight
 * @param {() => void} props.onStart - Called to begin listening
 * @param {() => void} props.onStop - Called to end listening
 * @returns {React.ReactElement} The MicButton component
 */
export default function MicButton({
  listening,
  processing = false,
  onStart,
  onStop,
}) {
  const { t } = useTranslation();

  const toggle = useCallback(() => {
    if (processing) return;
    if (listening) onStop();
    else onStart();
  }, [listening, processing, onStart, onStop]);

  useEffect(() => {
    const onKey = (event) => {
      // Ctrl+M (also on Mac) works while typing in the prompt, never over a dialog.
      if (isShortcutBlocked(event, { allowInFields: true })) return;
      if (!matchesShortcut(event, "dictation")) return;
      event.preventDefault();
      toggle();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [toggle]);

  useEffect(() => {
    const onPromptUpdate = (e) => {
      if (!e?.detail && listening) onStop();
    };
    window.addEventListener(PROMPT_INPUT_EVENT, onPromptUpdate);
    return () => window.removeEventListener(PROMPT_INPUT_EVENT, onPromptUpdate);
  }, [listening, onStop]);

  const active = listening || processing;
  const label = listening
    ? t("chat-input.dictation-stop")
    : t("chat-input.dictation-start");

  let status = "";
  if (listening) status = t("chat-input.dictation-listening");
  else if (processing) status = t("chat-input.dictation-transcribing");

  return (
    <>
      <button
        type="button"
        onClick={toggle}
        aria-pressed={listening}
        aria-label={label}
        aria-disabled={processing || undefined}
        aria-keyshortcuts={ariaKeyShortcuts("dictation")}
        data-tooltip-id="tooltip-microphone-btn"
        data-tooltip-content={`${label} (${shortcutText("dictation", t)})`}
        className={`group border-none relative flex justify-center items-center w-11 h-11 md:w-8 md:h-8 rounded-full transition-colors duration-quick hover:bg-zinc-700 light:hover:bg-slate-200 ${
          active ? "bg-zinc-700 light:bg-slate-200" : ""
        } ${processing ? "cursor-wait" : "cursor-pointer"}`}
      >
        <span className="relative flex pointer-events-none">
          {processing ? (
            <LoaderCircle
              strokeWidth={1.5}
              size={18}
              aria-hidden="true"
              className="text-white light:text-slate-800 animate-spin shrink-0"
            />
          ) : (
            <Mic
              strokeWidth={1.5}
              size={18}
              aria-hidden="true"
              className={`shrink-0 ${
                listening
                  ? "text-white light:text-slate-800"
                  : "text-zinc-300 light:text-slate-600 group-hover:text-white light:group-hover:text-slate-600"
              }`}
            />
          )}
          {/* Recording indicator: only exists (and loops) while listening. */}
          {listening && (
            <span
              aria-hidden="true"
              className="absolute -top-0.5 -right-1 w-2 h-2 rounded-full bg-red-500 animate-pulse"
            />
          )}
        </span>
      </button>
      <span className="sr-only" aria-live="polite">
        {status}
      </span>
      <Tooltip
        id="tooltip-microphone-btn"
        place="top"
        delayShow={100}
        className="tooltip !text-xs z-99"
      />
    </>
  );
}
