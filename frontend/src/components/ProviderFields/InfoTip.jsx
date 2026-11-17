import { useId } from "react";
import { Info } from "lucide-react";
import { Tooltip } from "react-tooltip";
import { useTranslation } from "react-i18next";

/**
 * Help bubble next to a field label: a real button (focusable, named) that
 * opens on hover, focus or tap and closes with Escape. Put short help in the
 * page as text instead, and never put errors here.
 *
 * @param {string} label - Name of the field it explains ("Más información: {label}").
 * @param {boolean} [clickable] - Keep it open while the pointer is inside (for links).
 */
export default function InfoTip({
  label,
  children,
  icon: Icon = Info,
  size = 16,
  place = "top",
  clickable = false,
  className = "",
}) {
  const { t } = useTranslation();
  const tooltipId = `info-tip-${useId()}`;

  return (
    <>
      <button
        type="button"
        data-tooltip-id={tooltipId}
        aria-label={t("provider-fields.more-info", { label })}
        className={`inline-flex items-center justify-center shrink-0 w-11 h-11 -my-3 md:w-6 md:h-6 md:my-0 rounded-md text-theme-text-secondary hover:text-white transition-colors duration-quick ${className}`}
      >
        <Icon strokeWidth={1.5} size={size} aria-hidden="true" />
      </button>
      <Tooltip
        id={tooltipId}
        place={place}
        delayShow={120}
        clickable={clickable}
        openEvents={{ mouseenter: true, focus: true, click: true }}
        closeEvents={{ mouseleave: true, blur: !clickable }}
        globalCloseEvents={{ escape: true, clickOutsideAnchor: true }}
        className="tooltip !text-xs max-w-[320px] z-99"
      >
        {children}
      </Tooltip>
    </>
  );
}
