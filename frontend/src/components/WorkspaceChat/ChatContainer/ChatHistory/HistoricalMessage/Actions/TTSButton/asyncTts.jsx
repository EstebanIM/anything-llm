import { useEffect, useState, useRef } from "react";
import { Volume2, CirclePause, LoaderCircle } from "lucide-react";
import Workspace from "@/models/workspace";
import showToast from "@/utils/toast";
import { useTranslation } from "react-i18next";
import { ACTION_BUTTON_CLASS } from "../constants";

export default function AsyncTTSMessage({ slug, chatId }) {
  const playerRef = useRef(null);
  // Object URL of the fetched audio, owned by this component until cleanup.
  const audioUrlRef = useRef(null);
  // Bumped on cleanup so a request that resolves late releases its URL.
  const generationRef = useRef(0);
  const [speaking, setSpeaking] = useState(false);
  const [loading, setLoading] = useState(false);
  const [audioSrc, setAudioSrc] = useState(null);
  const { t } = useTranslation();

  function speakMessage() {
    if (speaking) {
      playerRef?.current?.pause();
      return;
    }

    try {
      if (!audioSrc) {
        setLoading(true);
        const generation = generationRef.current;
        Workspace.ttsMessage(slug, chatId)
          .then((audioUrl) => {
            if (!audioUrl) throw new Error(t("chat-history.tts.failed"));
            if (generation !== generationRef.current) {
              URL.revokeObjectURL(audioUrl);
              return;
            }
            audioUrlRef.current = audioUrl;
            setAudioSrc(audioUrl);
          })
          .catch((e) => showToast(e.message, "error", { clear: true }))
          .finally(() => setLoading(false));
      } else {
        playerRef.current.play();
      }
    } catch (e) {
      console.error(e);
      setLoading(false);
      setSpeaking(false);
    }
  }

  useEffect(() => {
    const player = playerRef.current;
    if (!player) return;
    const onPlay = () => setSpeaking(true);
    const onPause = (e) => {
      e.target.currentTime = 0;
      setSpeaking(false);
    };
    player.addEventListener("play", onPlay);
    player.addEventListener("pause", onPause);
    return () => {
      player.removeEventListener("play", onPlay);
      player.removeEventListener("pause", onPause);
    };
  }, []);

  // Stop the audio and release its URL when the message changes (rows are
  // reused across threads) or the button unmounts, so speech never carries
  // over to another thread.
  useEffect(() => {
    // Captured now: React clears the ref before this cleanup runs on unmount,
    // and a detached <audio> keeps playing.
    const player = playerRef.current;
    return () => {
      generationRef.current += 1;
      player?.pause();
      player?.removeAttribute("src");
      if (audioUrlRef.current) URL.revokeObjectURL(audioUrlRef.current);
      audioUrlRef.current = null;
      setAudioSrc(null);
      setSpeaking(false);
      setLoading(false);
    };
  }, [chatId]);

  if (!chatId) return null;
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
        <>
          {loading ? (
            <LoaderCircle
              strokeWidth={1.5}
              size={18}
              aria-hidden="true"
              className="animate-spin"
            />
          ) : (
            <Volume2 strokeWidth={1.5} size={18} aria-hidden="true" />
          )}
        </>
      )}
      <audio
        ref={playerRef}
        hidden={true}
        src={audioSrc ?? undefined}
        autoPlay={true}
        controls={false}
      />
    </button>
  );
}
