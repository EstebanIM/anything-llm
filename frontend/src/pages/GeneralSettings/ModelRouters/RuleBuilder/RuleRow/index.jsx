import { Trans, useTranslation } from "react-i18next";
import { Trash2, Pencil, GripVertical } from "lucide-react";
import { SimpleToggleSwitch } from "@/components/lib/Toggle";
import truncate from "truncate";
import {
  BOOLEAN_PROPERTIES,
  NUMERIC_PROPERTIES,
  getPropertyLabel,
} from "../RuleForm/CalculatedFields";
import { ROUTER_ICON_BUTTON } from "../../fieldClasses";

const COMPARATOR_SYMBOLS = {
  gt: ">",
  gte: ">=",
  lt: "<",
  lte: "<=",
  eq: "=",
  neq: "!=",
};

function createComparatorLabels(t) {
  return {
    contains: t("model-router.rules.comparator-contains"),
    matches: t("model-router.rules.comparator-matches"),
    between: t("model-router.rules.comparator-between"),
    ...COMPARATOR_SYMBOLS,
  };
}

function getComparatorLabel(t, comparator) {
  const labels = createComparatorLabels(t);
  return labels[comparator] || comparator;
}

/** Condition value as shown in the summary: text quoted, booleans translated. */
function formatValue(t, property, value) {
  if (BOOLEAN_PROPERTIES.includes(property))
    return String(value) === "false"
      ? t("model-router.rule-form.bool-false")
      : t("model-router.rule-form.bool-true");
  if (NUMERIC_PROPERTIES.includes(property)) return String(value);
  return `"${value}"`;
}

function describeCondition(t, condition) {
  return [
    getPropertyLabel(t, condition.property),
    getComparatorLabel(t, condition.comparator),
    formatValue(t, condition.property, condition.value),
  ].join(" ");
}

export default function RuleRow({
  rule,
  isEditing,
  onEdit,
  onDelete,
  onToggle,
  dragHandleProps,
}) {
  const { t } = useTranslation();
  const isDisabled = !rule.enabled;

  return (
    <div
      className={`group flex flex-wrap md:flex-nowrap items-center gap-x-3 gap-y-1 px-3 py-2 rounded-lg bg-zinc-800 light:bg-slate-100 transition-colors duration-quick ease-smooth ${
        isEditing ? "ring-1 ring-blue-500/60" : ""
      }`}
    >
      {dragHandleProps ? (
        <div
          {...dragHandleProps}
          aria-label={t("settings-pages.rule-reorder", { title: rule.title })}
          className="cursor-grab shrink-0 flex items-center justify-center w-11 h-11 md:w-6 md:h-6 rounded-md text-zinc-400 light:text-slate-600 hover:text-white light:hover:text-slate-900 transition-colors duration-quick ease-smooth"
        >
          <GripVertical strokeWidth={1.5} size={24} aria-hidden="true" />
        </div>
      ) : (
        <div className="hidden md:block shrink-0 w-6" />
      )}
      {dragHandleProps && (
        <p className="shrink-0 text-sm font-semibold text-zinc-400 light:text-slate-600 tabular-nums">
          #{rule.priority}
        </p>
      )}
      <div className="flex flex-col flex-1 min-w-0 basis-full md:basis-auto order-last md:order-none">
        <div className="flex items-center gap-2 min-w-0">
          <span
            className={`text-sm font-medium leading-5 truncate ${
              isDisabled
                ? "text-zinc-400 light:text-slate-600"
                : "text-white light:text-slate-900"
            }`}
          >
            {rule.title}
          </span>
          {rule.type === "llm" ? (
            <span className="shrink-0 text-[10px] font-medium px-1.5 py-0.5 rounded bg-fuchsia-500/20 text-fuchsia-400 light:bg-fuchsia-100 light:text-fuchsia-700">
              {t("model-router.rules.badge-llm")}
            </span>
          ) : (
            <span className="shrink-0 text-[10px] font-medium px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-400 light:bg-blue-100 light:text-blue-700">
              {t("model-router.rules.badge-calculated")}
            </span>
          )}
          {isDisabled && (
            <span className="shrink-0 text-[10px] font-medium px-1.5 py-0.5 rounded border border-zinc-500 text-zinc-300 light:border-slate-500 light:text-slate-700">
              {t("settings-pages.rule-disabled-badge")}
            </span>
          )}
        </div>
        {rule.type === "llm" ? (
          <LLMRuleBody rule={rule} muted={isDisabled} />
        ) : (
          <CalculatedRuleBody rule={rule} muted={isDisabled} />
        )}
      </div>
      <div className="flex items-center gap-x-1 md:gap-x-2 shrink-0 ml-auto md:ml-0">
        <SimpleToggleSwitch
          enabled={rule.enabled}
          onChange={onToggle}
          size="md"
          ariaLabel={t("settings-pages.rule-enable", { title: rule.title })}
          className="mx-2"
        />
        <button
          type="button"
          onClick={onEdit}
          className={`${ROUTER_ICON_BUTTON} hover:text-white light:hover:text-slate-900`}
          aria-label={t("settings-pages.rule-edit", { title: rule.title })}
        >
          <Pencil strokeWidth={1.5} size={16} aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={onDelete}
          className={`${ROUTER_ICON_BUTTON} hover:text-red-400 light:hover:text-red-600`}
          aria-label={t("settings-pages.rule-delete", { title: rule.title })}
        >
          <Trash2 strokeWidth={1.5} size={16} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

/** Summary colors; a disabled rule keeps readable text without the accents. */
function summaryClasses(muted) {
  return {
    base: "text-sm font-medium leading-5 text-zinc-400 light:text-slate-600 truncate",
    accent: muted
      ? "font-mono text-zinc-400 light:text-slate-600"
      : "font-mono text-blue-400 light:text-blue-700",
    llmAccent: muted
      ? "font-mono text-zinc-400 light:text-slate-600"
      : "font-mono text-fuchsia-400 light:text-fuchsia-700",
    route: muted
      ? "text-zinc-300 light:text-slate-700"
      : "text-zinc-200 light:text-slate-800",
  };
}

function LLMRuleBody({ rule, muted }) {
  const classes = summaryClasses(muted);
  return (
    <p className={classes.base}>
      <Trans
        i18nKey="model-router.rules.llm-rule-body"
        values={{
          description: truncate(rule.description, 100),
          route: `${rule.route_provider}/${rule.route_model}`,
        }}
        components={{
          desc: <span className={classes.llmAccent} />,
          route: <span className={classes.route} />,
        }}
      />
    </p>
  );
}

function CalculatedRuleBody({ rule, muted }) {
  const { t } = useTranslation();
  const classes = summaryClasses(muted);
  const conditions = Array.isArray(rule.conditions) ? rule.conditions : [];
  const route = `${rule.route_provider}/${rule.route_model}`;

  if (conditions.length === 0) {
    return (
      <p className={classes.base}>
        <Trans
          i18nKey="model-router.rules.calculated-no-conditions"
          values={{ route }}
          components={{ route: <span className={classes.route} /> }}
        />
      </p>
    );
  }

  if (conditions.length === 1) {
    const c = conditions[0];
    return (
      <p className={classes.base}>
        <Trans
          i18nKey="model-router.rules.calculated-single-condition"
          values={{
            property: getPropertyLabel(t, c.property),
            comparator: getComparatorLabel(t, c.comparator),
            value: formatValue(t, c.property, c.value),
            route,
          }}
          components={{
            prop: <span className={classes.accent} />,
            val: <span className={classes.accent} />,
            route: <span className={classes.route} />,
          }}
        />
      </p>
    );
  }

  const isAny = rule.condition_logic === "OR";
  const connector = ` ${t(
    isAny
      ? "settings-pages.rule-connector-or"
      : "settings-pages.rule-connector-and"
  )} `;
  const conditionsSummary = conditions
    .map((c) => describeCondition(t, c))
    .join(connector);

  return (
    <p className={classes.base}>
      <Trans
        i18nKey="model-router.rules.calculated-multi-condition"
        values={{
          quantifier: t(
            `model-router.rules.quantifier-${isAny ? "any" : "all"}`
          ),
          conditions: truncate(conditionsSummary, 100),
          route,
        }}
        components={{
          cond: <span className={classes.accent} />,
          route: <span className={classes.route} />,
        }}
      />
    </p>
  );
}
