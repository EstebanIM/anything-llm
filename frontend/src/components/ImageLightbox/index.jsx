import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Modal from "@/components/lib/Modal";

const OPEN_EVENT = "open-image-lightbox";

// `.text-white` is remapped to dark text in the light theme, but this overlay
// stays black in both themes, so icons use a fixed light color.
const CONTROL_CLASS =
  "absolute flex items-center justify-center rounded-full text-zinc-50 bg-white/10 hover:bg-white/20 hover:text-zinc-300 transition-colors duration-quick border-none cursor-pointer";

/**
 * Opens the image lightbox from anywhere in the app.
 * @param {{contentString: string, name: string}[]} images
 * @param {number} initialIndex
 */
export function openImageLightbox(images, initialIndex = 0) {
  window.dispatchEvent(
    new CustomEvent(OPEN_EVENT, { detail: { images, initialIndex } })
  );
}

export default function ImageLightbox() {
  const { t } = useTranslation();
  const [images, setImages] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    function handleOpen(e) {
      setImages(e.detail.images);
      setCurrentIndex(e.detail.initialIndex);
    }
    window.addEventListener(OPEN_EVENT, handleOpen);
    return () => window.removeEventListener(OPEN_EVENT, handleOpen);
  }, []);

  function close() {
    setImages(null);
  }

  function handlePrevious() {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  }

  function handleNext() {
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  }

  // Escape is handled by Modal; arrows page through the images.
  useEffect(() => {
    if (!images) return;
    function handleKeyDown(e) {
      if (e.key === "ArrowLeft") handlePrevious();
      else if (e.key === "ArrowRight") handleNext();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [images]);

  const isOpen = !!images && images.length > 0;
  const safeIndex = isOpen ? Math.min(currentIndex, images.length - 1) : 0;
  const currentImage = isOpen ? images[safeIndex] : null;

  return (
    <Modal
      isOpen={isOpen && !!currentImage}
      onClose={close}
      variant="bare"
      ariaLabel={t("chat-panels.lightbox.label")}
      className="!bg-black/90"
    >
      {currentImage && (
        <>
          <div
            aria-hidden="true"
            className="absolute inset-0"
            onClick={close}
          />
          <button
            type="button"
            onClick={close}
            className={`${CONTROL_CLASS} top-4 right-4 w-11 h-11`}
            aria-label={t("chat-panels.lightbox.close")}
          >
            <X strokeWidth={1.5} size={24} aria-hidden="true" />
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={handlePrevious}
                className={`${CONTROL_CLASS} left-4 w-12 h-12`}
                aria-label={t("chat-panels.lightbox.previous")}
              >
                <ChevronLeft strokeWidth={1.5} size={24} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className={`${CONTROL_CLASS} right-4 w-12 h-12`}
                aria-label={t("chat-panels.lightbox.next")}
              >
                <ChevronRight strokeWidth={1.5} size={24} aria-hidden="true" />
              </button>
            </>
          )}

          <img
            src={currentImage.contentString}
            alt={currentImage.name || t("chat-panels.lightbox.image")}
            className="relative max-w-[90vw] max-h-[90vh] object-contain"
          />

          {images.length > 1 && (
            <p
              aria-live="polite"
              className="absolute bottom-4 left-1/2 -translate-x-1/2 text-zinc-200 text-sm bg-black/50 px-3 py-1 rounded-full tabular-nums"
            >
              {t("chat-panels.lightbox.position", {
                current: safeIndex + 1,
                total: images.length,
              })}
            </p>
          )}
        </>
      )}
    </Modal>
  );
}
