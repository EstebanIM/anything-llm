import { TriangleAlert } from "lucide-react";
import { useTranslation } from "react-i18next";

/**
 * "Unsaved changes" bar with Cancel / Save. Top of the screen from md up,
 * bottom on phones (so it never covers a page's own back button), announced
 * once when it appears. `busy` keeps Save focusable while blocking resubmits.
 *
 * @param {object} props
 * @param {boolean} props.showing
 * @param {() => void} props.onSave
 * @param {() => void} props.onCancel - must restore the saved state, not only hide the bar
 * @param {boolean} [props.busy=false]
 */
export default function ContextualSaveBar({
  showing = false,
  onSave,
  onCancel,
  busy = false,
}) {
  const { t } = useTranslation();

  return (
    <>
      <p role="status" aria-live="polite" className="sr-only">
        {showing ? t("save-bar.unsaved") : ""}
      </p>
      {showing && (
        <div
          role="region"
          aria-label={t("save-bar.unsaved")}
          className="fixed left-0 right-0 bottom-0 md:bottom-auto md:top-0 min-h-14 pb-[env(safe-area-inset-bottom)] md:pb-0 bg-dark-input light:bg-white border-t md:border-t-0 md:border-b border-zinc-700 light:border-slate-300 flex items-center justify-between md:justify-end gap-x-3 px-4 z-[999]"
        >
          <div className="md:absolute md:left-1/2 md:-translate-x-1/2 flex items-center gap-x-2">
            <TriangleAlert
              strokeWidth={1.5}
              size={18}
              aria-hidden="true"
              className="text-[#FFFFFF] light:text-slate-900"
            />
            <p className="text-[#FFFFFF] light:text-slate-900 font-medium text-sm">
              {t("save-bar.unsaved")}
            </p>
          </div>
          <div className="flex items-center gap-x-2">
            <button
              type="button"
              className="border-none text-theme-text-primary font-medium text-sm px-3 min-h-[44px] md:min-h-[32px] rounded-md bg-theme-bg-secondary hover:bg-theme-bg-primary light:bg-slate-200 light:hover:bg-slate-300 transition-colors duration-quick"
              onClick={onCancel}
            >
              {t("save-bar.cancel")}
            </button>
            <button
              type="button"
              aria-disabled={busy || undefined}
              aria-busy={busy || undefined}
              className="border-none text-theme-button-primary-text font-medium text-sm px-3 min-h-[44px] md:min-h-[32px] rounded-md bg-primary-button hover:bg-primary-button-hover aria-disabled:opacity-60 aria-disabled:cursor-wait transition-colors duration-quick"
              onClick={(e) => {
                if (busy) return e.preventDefault();
                onSave?.(e);
              }}
            >
              {busy ? t("common.saving") : t("save-bar.save")}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
