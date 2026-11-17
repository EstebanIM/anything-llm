import { useId, useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown, CircleCheck } from "lucide-react";
import Toggle from "@/components/lib/Toggle";
import StatusNote from "@/components/lib/StatusNote";
import PreLoader from "@/components/Preloader";

/** Inline link inside panel text, readable in both themes. */
export const LINK_CLASS =
  "underline text-sky-300 hover:text-sky-200 light:text-sky-700 light:hover:text-sky-800 transition-colors duration-quick ease-smooth";

/** Outlined secondary action (Retry, Check status...). */
export const SECONDARY_BUTTON =
  "inline-flex w-fit items-center justify-center gap-x-2 min-h-[44px] md:min-h-[34px] px-4 rounded-lg border border-zinc-500 light:border-slate-500 bg-transparent text-sm font-medium text-white hover:bg-zinc-800 light:hover:bg-slate-100 transition-colors duration-quick ease-smooth aria-disabled:cursor-wait aria-disabled:opacity-60";

/** Outlined destructive action that opens a confirmation. */
export const DANGER_OUTLINE_BUTTON =
  "inline-flex w-fit items-center justify-center gap-x-2 min-h-[44px] md:min-h-[34px] px-4 rounded-lg border border-red-400 light:border-red-700 bg-transparent text-sm font-medium text-red-300 light:text-red-700 hover:bg-red-950 light:hover:bg-red-50 transition-colors duration-quick ease-smooth";

/** Panel description under the title. */
export const PANEL_TEXT = "text-theme-text-secondary text-xs font-medium";

/**
 * Panel title (h2) with the skill's main switch, named by that heading.
 * @param {object} props
 * @param {string} props.headingId
 * @param {string} props.title
 * @param {import("react").ReactNode} [props.icon] - decorative logo or icon
 * @param {import("react").ReactNode} [props.badge]
 * @param {boolean} props.enabled
 * @param {boolean} [props.disabled]
 * @param {() => void} props.onToggle
 * @param {string} [props.describedBy] - id of a warning that explains a disabled switch
 */
export function PanelHeader({
  headingId,
  title,
  icon = null,
  badge = null,
  enabled,
  disabled = false,
  onToggle,
  describedBy,
}) {
  return (
    <div className="flex w-full justify-between items-center gap-x-3">
      <div className="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1">
        {icon}
        <h2
          id={headingId}
          tabIndex={-1}
          className="text-theme-text-primary text-base font-bold break-words"
        >
          {title}
        </h2>
        {badge}
      </div>
      <Toggle
        size="lg"
        enabled={enabled}
        disabled={disabled}
        onChange={() => onToggle?.()}
        ariaLabelledBy={headingId}
        describedBy={describedBy}
      />
    </div>
  );
}

/** "Configured" mark with icon and text (never color alone). */
export function ConfiguredBadge({ children }) {
  return (
    <span className="inline-flex items-center gap-x-1 text-xs font-medium text-green-400 light:text-green-700">
      <CircleCheck strokeWidth={1.5} size={14} aria-hidden="true" />
      {children}
    </span>
  );
}

/**
 * Collapsible configuration card. The heading holds the disclosure button
 * (`aria-expanded` / `aria-controls`); the content stays mounted but `hidden`
 * while collapsed. Controlled with `expanded` + `onExpandedChange`, or
 * uncontrolled with `defaultExpanded`.
 */
export function IntegrationConfigCard({
  title,
  configuredLabel = null,
  expanded,
  onExpandedChange,
  defaultExpanded = true,
  children,
}) {
  const [internalExpanded, setInternalExpanded] = useState(defaultExpanded);
  const isOpen = expanded ?? internalExpanded;
  const contentId = useId();

  function toggle() {
    const next = !isOpen;
    if (expanded === undefined) setInternalExpanded(next);
    onExpandedChange?.(next);
  }

  return (
    <div className="border border-zinc-700 light:border-slate-300 rounded-lg">
      <h3>
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={contentId}
          onClick={toggle}
          className="w-full flex items-center justify-between gap-x-2 p-3 min-h-[44px] rounded-lg border-none bg-transparent text-left hover:bg-zinc-800 light:hover:bg-slate-100 transition-colors duration-quick ease-smooth"
        >
          <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="text-theme-text-primary font-semibold text-sm">
              {title}
            </span>
            {configuredLabel && (
              <ConfiguredBadge>{configuredLabel}</ConfiguredBadge>
            )}
          </span>
          <ChevronDown
            strokeWidth={1.5}
            size={16}
            aria-hidden="true"
            className={`shrink-0 text-theme-text-secondary transition-transform duration-base ease-smooth ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </h3>
      <div
        id={contentId}
        hidden={!isOpen}
        className="p-3 flex flex-col gap-y-4 border-t border-zinc-700 light:border-slate-300"
      >
        {children}
      </div>
    </div>
  );
}

export function PanelLoading() {
  return (
    <div className="flex justify-center py-4">
      <PreLoader size="8" />
    </div>
  );
}

/** Visible load error with a retry button, so a failed request never looks like an empty or unconfigured panel. */
export function PanelLoadError({ message, onRetry }) {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-start gap-y-3">
      <StatusNote tone="error" announce>
        {message}
      </StatusNote>
      <button type="button" onClick={onRetry} className={SECONDARY_BUTTON}>
        {t("provider-fields.retry")}
      </button>
    </div>
  );
}
