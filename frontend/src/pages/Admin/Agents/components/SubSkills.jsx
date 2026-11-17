import { useTranslation } from "react-i18next";
import { LoaderCircle } from "lucide-react";
import { SimpleToggleSwitch } from "@/components/lib/Toggle";
import StatusNote from "@/components/lib/StatusNote";
import { PANEL_ACTION } from "./PanelHeader";

/**
 * One sub-skill with its own switch (named after the sub-skill; the state is
 * the switch's aria-checked). `tone="write"` marks actions that change files.
 */
export function SubSkillRow({
  title,
  description,
  icon: Icon,
  enabled,
  onToggle,
  tone = "default",
}) {
  const write = tone === "write";
  return (
    <li
      className={`flex items-center justify-between gap-x-3 p-2 rounded-lg border ${
        write
          ? "border-orange-400/40 bg-orange-500/5 light:border-orange-700/30 light:bg-orange-50"
          : "border-zinc-700 light:border-slate-300"
      }`}
    >
      <div className="flex items-center gap-x-2 min-w-0">
        {Icon && (
          <Icon
            strokeWidth={1.5}
            size={16}
            aria-hidden="true"
            className={`shrink-0 ${
              write
                ? "text-orange-400 light:text-orange-700"
                : "text-theme-text-primary"
            }`}
          />
        )}
        <div className="flex flex-col min-w-0">
          <span className="text-sm font-medium text-theme-text-primary">
            {title}
          </span>
          <span className="text-xs text-theme-text-secondary">
            {description}
          </span>
        </div>
      </div>
      <SimpleToggleSwitch
        size="md"
        enabled={enabled}
        ariaLabel={title}
        onChange={() => onToggle()}
      />
    </li>
  );
}

/** Loading line for a sub-skill list. */
export function SubSkillsLoading() {
  const { t } = useTranslation();
  return (
    <div role="status" className="flex items-center justify-center py-4">
      <LoaderCircle
        strokeWidth={1.5}
        size={24}
        aria-hidden="true"
        className="animate-spin text-theme-text-primary"
      />
      <span className="sr-only">{t("common.loading")}</span>
    </div>
  );
}

/** Error with a retry button (used when a list or setting fails to load). */
export function LoadError({ message, onRetry }) {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-start gap-y-2">
      <StatusNote tone="error" announce>
        {message}
      </StatusNote>
      {onRetry && (
        <button
          type="button"
          onClick={() => onRetry()}
          className={PANEL_ACTION}
        >
          {t("provider-fields.retry")}
        </button>
      )}
    </div>
  );
}
