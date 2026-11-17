import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

/**
 * Collapsible block for optional provider settings.
 * The content stays mounted (only `hidden`) so its fields are still sent with
 * the form. If the browser rejects a hidden field on submit, the section opens
 * and the field reports its error, instead of the save silently doing nothing.
 *
 * Controlled with `open` + `onOpenChange`, or uncontrolled with `defaultOpen`.
 */
export default function AdvancedSection({
  label,
  open,
  onOpenChange,
  defaultOpen = false,
  className = "",
  children,
}) {
  const { t } = useTranslation();
  const panelId = useId();
  const [innerOpen, setInnerOpen] = useState(defaultOpen);
  const isOpen = open ?? innerOpen;

  function setOpen(next) {
    if (open === undefined) setInnerOpen(next);
    onOpenChange?.(next);
  }

  return (
    <div
      className={className}
      onInvalidCapture={(e) => {
        if (isOpen) return;
        const field = e.target;
        setOpen(true);
        setTimeout(() => {
          field.focus?.();
          field.reportValidity?.();
        }, 0);
      }}
    >
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setOpen(!isOpen)}
        className="flex items-center gap-x-1 min-h-[44px] md:min-h-[28px] text-white hover:text-white/80 light:hover:text-slate-700 text-sm font-medium transition-colors duration-quick"
      >
        {label ?? t("provider-fields.advanced")}
        <ChevronDown
          strokeWidth={1.5}
          aria-hidden="true"
          className={`h-4 w-4 transition-transform duration-quick ease-smooth ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div id={panelId} hidden={!isOpen}>
        {children}
      </div>
    </div>
  );
}
