import React, { useEffect, useRef, useState } from "react";
import { Volume2, CirclePause } from "lucide-react";
import { useTranslation } from "react-i18next";
import messageToSpeech from "@/utils/chat/messageToSpeech";
import { ACTION_BUTTON_CLASS } from "../constants";

export default function NativeTTSMessage({ chatId, message }) {
  const { t } = useTranslation();
  const [speaking, setSpeaking] = useState(false);
  const [supported, setSupported] = useState(false);
  // Read from the cleanup, which must not see a stale `speaking`.
  const speakingRef = useRef(false);
  useEffect(() => {
    setSupported("speechSynthesis" in window);
  }, []);

  function updateSpeaking(value) {
    speakingRef.current = value;
    setSpeaking(value);
  }

  function endSpeechUtterance() {
    window.speechSynthesis?.cancel();
    updateSpeaking(false);
    return;
  }

  // Speech belongs to the message that started it: stop it when this button
  // switches to another message (rows are reused across threads) or unmounts.
  useEffect(() => {
    return () => {
      if (!speakingRef.current) return;
      speakingRef.current = false;
      window.speechSynthesis?.cancel();
    };
  }, [chatId]);

  function speakMessage() {
    // if the user is pausing this particular message
    // while the synth is speaking we can end it.
    // If they are clicking another message's TTS
    // we need to ignore that until they pause the one that is playing.
    if (window.speechSynthesis.speaking && speaking) {
      endSpeechUtterance();
      return;
    }

    if (window.speechSynthesis.speaking && !speaking) return;
    const utterance = new SpeechSynthesisUtterance(messageToSpeech(message));
    utterance.addEventListener("end", endSpeechUtterance);
    window.speechSynthesis.speak(utterance);
    updateSpeaking(true);
  }

  if (!supported) return null;
  const label = speaking
    ? t("chat-history.tts.pause")
    : t("chat_window.tts_speak_message");
  return (
    <button
      type="button"
      onClick={speakMessage}
      data-auto-play-chat-id={chatId}
      data-tooltip-id="message-to-speech"
      data-tooltip-content={label}
      className={ACTION_BUTTON_CLASS}
      aria-label={label}
    >
      {speaking ? (
        <CirclePause strokeWidth={1.5} size={18} aria-hidden="true" />
      ) : (
        <Volume2 strokeWidth={1.5} size={18} aria-hidden="true" />
      )}
    </button>
  );
}
