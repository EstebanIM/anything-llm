import { createElement } from "react";
import { useTranslation } from "react-i18next";

/**
 * Title row of a skill panel: icon, <h2> (the name of the panel's main switch
 * through ariaLabelledBy) and the controls on the right.
 */
export default function PanelHeader({
  titleId,
  title,
  icon = null,
  badge = null,
  children,
}) {
  return (
    <div className="flex w-full flex-wrap justify-between items-center gap-x-4 gap-y-2">
      <div className="flex items-center gap-x-2 min-w-0">
        {icon}
        <h2
          id={titleId}
          tabIndex={-1}
          className="text-theme-text-primary text-base font-bold break-words"
        >
          {title}
        </h2>
        {badge}
      </div>
      {children && (
        <div className="flex items-center gap-x-2 shrink-0">{children}</div>
      )}
    </div>
  );
}

/** Lucide icon component (from skills.jsx) rendered at panel size. */
export function panelIcon(icon) {
  if (!icon) return null;
  return createElement(icon, {
    size: 24,
    strokeWidth: 1.5,
    "aria-hidden": "true",
    className: "shrink-0 text-theme-text-primary",
  });
}

/** "Applies right away" note for switches that do not wait for Save. */
export function InstantNote({ id }) {
  const { t } = useTranslation();
  return (
    <p id={id} className="text-xs text-theme-text-secondary">
      {t("agent-pages.instant")}
    </p>
  );
}

/** Secondary action button of a panel (44 px on phones). */
export const PANEL_ACTION =
  "inline-flex items-center gap-x-1.5 min-h-[44px] md:min-h-[32px] px-3 rounded-lg border border-zinc-500 light:border-slate-500 text-sm font-medium text-theme-text-primary hover:bg-white/5 light:hover:bg-slate-100 aria-busy:cursor-wait aria-busy:opacity-70 transition-colors duration-quick ease-smooth";

/** Destructive variant of PANEL_ACTION. */
export const PANEL_DANGER_ACTION =
  "inline-flex items-center gap-x-1.5 min-h-[44px] md:min-h-[32px] px-3 rounded-lg border border-red-400 light:border-red-700 text-sm font-medium text-red-300 light:text-red-700 hover:bg-red-500/10 light:hover:bg-red-50 transition-colors duration-quick ease-smooth";
