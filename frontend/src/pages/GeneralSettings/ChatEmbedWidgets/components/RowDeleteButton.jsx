import { useEffect, useId, useRef, useState } from "react";
import { LoaderCircle, Trash2 } from "lucide-react";
import { useTranslation } from "react-i18next";

/**
 * Trash button for one table row with in-place confirmation: the button is
 * swapped for "Delete" / "Cancel"; Escape or Cancel bring focus back to it.
 * The row stays until `onConfirm` resolves to true (the server confirmed).
 *
 * @param {object} props
 * @param {string} props.label - names the row ("Eliminar el chat 12")
 * @param {string} props.consequence - read with the confirm button
 * @param {() => Promise<boolean>} props.onConfirm
 */
export default function RowDeleteButton({ label, consequence, onConfirm }) {
  const { t } = useTranslation();
  const [confirming, setConfirming] = useState(false);
  const [busy, setBusy] = useState(false);
  const triggerRef = useRef(null);
  const wasConfirming = useRef(false);
  const descId = useId();

  useEffect(() => {
    if (confirming) {
      wasConfirming.current = true;
      return;
    }
    if (wasConfirming.current) {
      wasConfirming.current = false;
      triggerRef.current?.focus();
    }
  }, [confirming]);

  async function handleConfirm() {
    if (busy) return;
    setBusy(true);
    const deleted = await onConfirm();
    // On success the row unmounts; only a failure needs the state back.
    if (!deleted) {
      setBusy(false);
      setConfirming(false);
    }
  }

  if (!confirming) {
    return (
      <button
        ref={triggerRef}
        type="button"
        data-row-focus=""
        onClick={() => setConfirming(true)}
        aria-label={label}
        title={label}
        className="flex items-center justify-center w-11 h-11 md:w-8 md:h-8 rounded-lg text-theme-text-secondary hover:text-red-400 light:hover:text-red-700 hover:bg-red-500/10 transition-colors duration-quick ease-smooth"
      >
        <Trash2 strokeWidth={1.5} className="h-5 w-5" aria-hidden="true" />
      </button>
    );
  }

  return (
    <div
      className="flex items-center gap-x-1"
      onKeyDown={(e) => {
        if (e.key !== "Escape" || busy) return;
        e.preventDefault();
        setConfirming(false);
      }}
    >
      <span id={descId} className="sr-only">
        {consequence}
      </span>
      <button
        type="button"
        // Takes focus from the trash button it replaces.
        autoFocus
        onClick={handleConfirm}
        aria-describedby={descId}
        aria-disabled={busy || undefined}
        aria-busy={busy || undefined}
        className="flex items-center gap-x-1.5 min-h-[44px] md:min-h-[32px] px-3 rounded-lg text-xs font-semibold bg-red-600 hover:bg-red-700 text-[#ffffff] transition-colors duration-quick ease-smooth aria-disabled:opacity-60 aria-disabled:cursor-wait"
      >
        {busy && (
          <LoaderCircle
            strokeWidth={1.5}
            className="h-3.5 w-3.5 animate-spin"
            aria-hidden="true"
          />
        )}
        {t("settings-pages.delete")}
      </button>
      <button
        type="button"
        onClick={() => !busy && setConfirming(false)}
        aria-disabled={busy || undefined}
        className="min-h-[44px] md:min-h-[32px] px-3 rounded-lg text-xs font-medium border border-zinc-500 light:border-slate-500 text-zinc-200 light:text-slate-800 hover:bg-zinc-800 light:hover:bg-slate-100 transition-colors duration-quick ease-smooth aria-disabled:opacity-60"
      >
        {t("settings-pages.cancel")}
      </button>
    </div>
  );
}
