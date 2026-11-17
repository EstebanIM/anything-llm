import { memo, useEffect, useState, useRef, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { saveAs } from "file-saver";
import {
  Download,
  Copy,
  Check,
  LoaderCircle,
  ImageOff,
  Ellipsis,
  Pencil,
} from "lucide-react";
import StorageFiles from "@/models/files";
import { openImageLightbox } from "@/components/ImageLightbox";
import { PASTE_ATTACHMENT_EVENT } from "@/components/WorkspaceChat/ChatContainer/DnDWrapper";
import {
  PROMPT_INPUT_EVENT,
  PROMPT_INPUT_ID,
} from "@/components/WorkspaceChat/ChatContainer/PromptInput";
import useMenu from "@/hooks/useMenu";
import { REVEAL_ON_HOVER_CLASS } from "../HistoricalMessage/Actions/constants";

const OVERLAY_BUTTON_CLASS =
  "border-none flex items-center justify-center w-11 h-11 md:w-8 md:h-8 rounded-lg bg-black/60 hover:bg-black/80 light:bg-white/80 light:hover:bg-white text-white light:text-slate-700 transition-colors duration-quick";
const MENU_ITEM_CLASS =
  "w-full flex items-center gap-x-2 px-3 min-h-[44px] md:min-h-0 md:py-2 text-sm text-white light:text-slate-700 hover:bg-zinc-800 light:hover:bg-slate-100 border-none";

/**
 * Renders a generated image returned by the `/img` command. The serve endpoint
 * is auth-protected, so we fetch the image as a blob and render an object URL.
 * @param {{content: {storageFilename: string, filename?: string, prompt?: string}}} props
 */
function ImageGenerationCard({ props }) {
  const { t } = useTranslation();
  const { storageFilename, filename, prompt } = props.content || {};
  const [blob, setBlob] = useState(null);
  const [objectUrl, setObjectUrl] = useState(null);
  const [status, setStatus] = useState("loading");
  const [copied, setCopied] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const triggerRef = useRef(null);
  const closeMenu = useCallback(() => setMenuOpen(false), []);
  useMenu({ open: menuOpen, onClose: closeMenu, menuRef, triggerRef });

  useEffect(() => {
    let revokeUrl = null;
    async function loadImage() {
      const result = await StorageFiles.image(storageFilename);
      if (!result) return setStatus("failed");
      revokeUrl = URL.createObjectURL(result);
      setBlob(result);
      setObjectUrl(revokeUrl);
      setStatus("ready");
    }
    if (storageFilename) {
      loadImage();
    } else {
      setStatus("failed");
    }
    return () => {
      if (revokeUrl) URL.revokeObjectURL(revokeUrl);
    };
  }, [storageFilename]);

  const handleDownload = () => {
    if (!blob) return;
    saveAs(blob, filename || storageFilename);
    setMenuOpen(false);
    triggerRef.current?.focus();
  };

  const handleCopy = async () => {
    if (!blob) return;
    try {
      await navigator.clipboard.write([
        new ClipboardItem({ [blob.type]: blob }),
      ]);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  const handleEdit = async () => {
    setMenuOpen(false);
    if (!blob) return;

    const file = new File([blob], filename || storageFilename, {
      type: blob.type,
    });

    window.dispatchEvent(
      new CustomEvent(PASTE_ATTACHMENT_EVENT, {
        detail: {
          files: [file],
          storageFilename,
        },
      })
    );

    window.dispatchEvent(
      new CustomEvent(PROMPT_INPUT_EVENT, {
        detail: { messageContent: "/img ", writeMode: "replace" },
      })
    );
    // The edit continues in the prompt input, where the image is now attached.
    document.getElementById(PROMPT_INPUT_ID)?.focus();
  };

  return (
    <div className="my-2">
      <div className="inline-block">
        {status !== "ready" && (
          <div className="relative rounded-xl overflow-hidden bg-zinc-800 aspect-square w-[280px]">
            {status === "loading" && (
              <div className="absolute inset-0 flex items-center justify-center">
                <LoaderCircle
                  strokeWidth={1.5}
                  size={28}
                  aria-hidden="true"
                  className="animate-spin text-zinc-400 light:text-slate-500"
                />
              </div>
            )}

            {status === "failed" && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-y-2 text-zinc-400 light:text-slate-500">
                <ImageOff strokeWidth={1.5} size={28} aria-hidden="true" />
                <span className="text-xs">
                  {t("imageGeneration.card.failed-to-load")}
                </span>
              </div>
            )}
          </div>
        )}

        {status === "ready" && (
          <div className="relative group rounded-xl bg-zinc-800 max-w-max">
            <img
              src={objectUrl}
              alt={prompt || t("imageGeneration.card.alt-text")}
              role="button"
              tabIndex={0}
              onClick={() =>
                openImageLightbox([
                  { contentString: objectUrl, name: filename || prompt },
                ])
              }
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openImageLightbox([
                    { contentString: objectUrl, name: filename || prompt },
                  ]);
                }
              }}
              className="max-h-[280px] max-w-full md:max-w-[500px] object-contain cursor-pointer rounded-xl"
            />

            {/* Copy, bottom left. Visible while the menu is open too. */}
            <div
              className={`absolute bottom-2 left-2 ${menuOpen ? "" : REVEAL_ON_HOVER_CLASS}`}
            >
              <button
                type="button"
                onClick={handleCopy}
                aria-label={t("chat-history.image.copy")}
                title={t("chat-history.image.copy")}
                className={OVERLAY_BUTTON_CLASS}
              >
                {copied ? (
                  <Check strokeWidth={1.5} size={16} aria-hidden="true" />
                ) : (
                  <Copy strokeWidth={1.5} size={16} aria-hidden="true" />
                )}
              </button>
              <span className="sr-only" role="status">
                {copied ? t("chat-history.copied") : ""}
              </span>
            </div>

            {/* Actions menu, top right */}
            <div
              className={`absolute top-2 right-2 ${menuOpen ? "" : REVEAL_ON_HOVER_CLASS}`}
            >
              <button
                ref={triggerRef}
                type="button"
                onClick={() => setMenuOpen((prev) => !prev)}
                aria-label={t("chat-history.image.actions")}
                title={t("chat-history.image.actions")}
                aria-haspopup="menu"
                aria-expanded={menuOpen}
                className={OVERLAY_BUTTON_CLASS}
              >
                <Ellipsis strokeWidth={1.5} size={16} aria-hidden="true" />
              </button>

              {menuOpen && (
                <div
                  ref={menuRef}
                  role="menu"
                  aria-label={t("chat-history.image.actions")}
                  className="absolute right-0 mt-1 w-max min-w-36 rounded-lg bg-zinc-900 light:bg-white border border-zinc-700 light:border-slate-200 shadow-lg z-10 overflow-hidden animate-in fade-in-0 slide-in-from-top-2"
                >
                  <button
                    type="button"
                    role="menuitem"
                    onClick={handleEdit}
                    className={MENU_ITEM_CLASS}
                  >
                    <Pencil strokeWidth={1.5} size={14} aria-hidden="true" />
                    {t("imageGeneration.card.edit")}
                  </button>
                  <button
                    type="button"
                    role="menuitem"
                    onClick={handleDownload}
                    className={MENU_ITEM_CLASS}
                  >
                    <Download strokeWidth={1.5} size={14} aria-hidden="true" />
                    {t("imageGeneration.card.download")}
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default memo(ImageGenerationCard);
