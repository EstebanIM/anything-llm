import { useId, useRef } from "react";
import { useTranslation } from "react-i18next";
import { X } from "lucide-react";
import { useDialogFocus } from "@/components/lib/Modal";
import { useModalEscape } from "@/hooks/useModalEscape";

/**
 * Bottom sheet for the mobile document picker: a modal dialog with a name,
 * focus moved inside and returned on close, Tab kept inside and Escape
 * closing only this layer. Stays mounted so it can slide out as well as in;
 * `data-app-dialog` is only set while open so a closed sheet never counts as
 * the top-most dialog.
 */
export default function MobileSheet({ open, onClose, title, children }) {
  const { t } = useTranslation();
  const sheetRef = useRef(null);
  const titleId = useId();
  useDialogFocus(open, sheetRef);
  useModalEscape(open, onClose);

  return (
    <div
      className={`fixed inset-0 z-10 transition-[visibility] ${
        open ? "visible duration-base" : "invisible duration-quick"
      }`}
    >
      <div
        aria-hidden="true"
        onClick={onClose}
        className={`absolute inset-0 bg-black/60 transition-opacity ease-smooth ${
          open ? "opacity-100 duration-base" : "opacity-0 duration-quick"
        }`}
      />
      <div
        ref={sheetRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        {...(open ? { "data-app-dialog": "" } : {})}
        className={`absolute bottom-0 inset-x-0 max-h-[70vh] flex flex-col rounded-t-2xl bg-zinc-900 light:bg-white border-t border-zinc-700 light:border-slate-300 pb-[max(12px,env(safe-area-inset-bottom))] transition-transform focus:outline-none ${
          open
            ? "translate-y-0 duration-panel ease-drawer"
            : "translate-y-full duration-quick ease-smooth"
        }`}
      >
        <div className="shrink-0 flex items-center justify-between gap-x-2 pl-5 pr-2 pt-2">
          <h2
            id={titleId}
            className="min-w-0 text-sm font-semibold text-slate-50 light:text-slate-900 truncate"
          >
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label={t("api.modal.close")}
            className="border-none bg-transparent w-11 h-11 shrink-0 flex items-center justify-center rounded-xl text-slate-50 light:text-slate-900 active:bg-zinc-800 light:active:bg-slate-100"
          >
            <X strokeWidth={1.5} size={20} aria-hidden="true" />
          </button>
        </div>
        <div className="overflow-y-auto px-2 pt-1">{children}</div>
      </div>
    </div>
  );
}

/**
 * @param {Object} props
 * @param {boolean} [props.danger] - Red treatment for destructive actions
 */
export function MobileSheetOption({ icon: Icon, label, onClick, danger }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`border-none bg-transparent w-full min-h-12 px-3 flex items-center gap-x-3 rounded-xl text-left text-sm font-medium active:bg-zinc-800 light:active:bg-slate-100 ${
        danger
          ? "text-red-400 light:text-red-700"
          : "text-slate-50 light:text-slate-900"
      }`}
    >
      <Icon
        strokeWidth={1.5}
        size={20}
        aria-hidden="true"
        className="shrink-0"
      />
      <span className="truncate">{label}</span>
    </button>
  );
}
