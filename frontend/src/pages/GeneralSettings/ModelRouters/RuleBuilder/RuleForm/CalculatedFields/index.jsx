import { useEffect, useId, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Plus, X } from "lucide-react";
import {
  ROUTER_CONTROL,
  ROUTER_HINT,
  ROUTER_ICON_BUTTON,
  ROUTER_LABEL,
} from "../../../fieldClasses";

export const NUMERIC_PROPERTIES = [
  "conversationTokenCount",
  "conversationMessageCount",
  "currentHour",
];

export const BOOLEAN_PROPERTIES = ["hasImageAttachment"];

function createProperties(t) {
  return [
    {
      value: "promptContent",
      label: t("model-router.rule-form.prop-prompt-content"),
    },
    {
      value: "conversationTokenCount",
      label: t("model-router.rule-form.prop-token-count"),
    },
    {
      value: "conversationMessageCount",
      label: t("model-router.rule-form.prop-message-count"),
    },
    {
      value: "currentHour",
      label: t("model-router.rule-form.prop-current-hour"),
    },
    {
      value: "hasImageAttachment",
      label: t("model-router.rule-form.prop-has-image"),
    },
  ];
}

/** Readable name of a condition property, used by the rule summary. */
export function getPropertyLabel(t, property) {
  return (
    createProperties(t).find(({ value }) => value === property)?.label ??
    property
  );
}

function createStringComparators(t) {
  return [
    { value: "contains", label: t("model-router.rule-form.cmp-contains") },
    { value: "matches", label: t("model-router.rule-form.cmp-matches-regex") },
    { value: "eq", label: t("model-router.rule-form.cmp-equals") },
    { value: "neq", label: t("model-router.rule-form.cmp-not-equals") },
  ];
}

function createNumericComparators(t) {
  return [
    { value: "gt", label: t("model-router.rule-form.cmp-greater-than") },
    {
      value: "gte",
      label: t("model-router.rule-form.cmp-greater-than-or-equal"),
    },
    { value: "lt", label: t("model-router.rule-form.cmp-less-than") },
    { value: "lte", label: t("model-router.rule-form.cmp-less-than-or-equal") },
    { value: "eq", label: t("model-router.rule-form.cmp-equals") },
    { value: "neq", label: t("model-router.rule-form.cmp-not-equals") },
    { value: "between", label: t("model-router.rule-form.cmp-between") },
  ];
}

function comparatorsFor(t, property) {
  return NUMERIC_PROPERTIES.includes(property)
    ? createNumericComparators(t)
    : createStringComparators(t);
}

function valuePlaceholder(t, property, comparator) {
  if (comparator === "between") {
    return property === "currentHour"
      ? t("model-router.rule-form.placeholder-between-hour")
      : t("model-router.rule-form.placeholder-between-numeric");
  }
  if (property === "currentHour")
    return t("model-router.rule-form.placeholder-hour");
  if (property === "conversationMessageCount")
    return t("model-router.rule-form.placeholder-message-count");
  if (NUMERIC_PROPERTIES.includes(property))
    return t("model-router.rule-form.placeholder-numeric");
  if (comparator === "contains")
    return t("model-router.rule-form.placeholder-contains");
  if (comparator === "matches")
    return t("model-router.rule-form.placeholder-matches");
  return t("model-router.rule-form.placeholder-default");
}

function valueHelp(t, property, comparator) {
  if (NUMERIC_PROPERTIES.includes(property)) return null;
  if (comparator === "contains")
    return t("model-router.rule-form.help-contains");
  if (comparator === "matches") return t("model-router.rule-form.help-matches");
  return null;
}

export default function CalculatedFields({
  conditionLogic,
  setConditionLogic,
  conditions,
  setConditions,
}) {
  const { t } = useTranslation();
  const baseId = useId();
  const pendingFocus = useRef(null);
  const propertyId = (index) => `${baseId}-c${index}-property`;

  // Keep keyboard users in place after a condition is added or removed.
  useEffect(() => {
    if (pendingFocus.current === null) return;
    document.getElementById(pendingFocus.current)?.focus();
    pendingFocus.current = null;
  }, [conditions.length]);

  const updateCondition = (index, changes) => {
    setConditions((prev) =>
      prev.map((c, i) => (i === index ? { ...c, ...changes } : c))
    );
  };

  const addCondition = () => {
    pendingFocus.current = propertyId(conditions.length);
    setConditions((prev) => [
      ...prev,
      { property: "", comparator: "", value: "" },
    ]);
  };

  const removeCondition = (index) => {
    pendingFocus.current = propertyId(Math.max(0, index - 1));
    setConditions((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col gap-y-4 items-start w-full">
      {conditions.length > 1 && (
        <LogicChoice value={conditionLogic} onChange={setConditionLogic} />
      )}

      <ol className="flex flex-col gap-y-4 w-full list-none">
        {conditions.map((condition, index) => (
          <li
            key={index}
            className="border-t border-white/10 light:border-slate-200 pt-4 first:border-t-0 first:pt-0 md:border-t-0 md:pt-0"
          >
            <ConditionRow
              idPrefix={`${baseId}-c${index}`}
              index={index}
              condition={condition}
              onChange={(changes) => updateCondition(index, changes)}
              onRemove={
                conditions.length > 1 ? () => removeCondition(index) : null
              }
            />
          </li>
        ))}
      </ol>

      <button
        type="button"
        onClick={addCondition}
        className="border-none flex items-center gap-x-1.5 min-h-[44px] md:min-h-0 md:h-8 px-3 rounded-md bg-zinc-800 light:bg-slate-900 text-zinc-50 light:text-white text-sm font-medium hover:opacity-90 transition-opacity duration-quick ease-smooth"
      >
        <Plus strokeWidth={1.5} size={16} aria-hidden="true" />
        {t("model-router.rule-form.add-condition")}
      </button>
    </div>
  );
}

/** "All / Any" choice, shown once there is more than one condition. */
function LogicChoice({ value, onChange }) {
  const { t } = useTranslation();
  const name = useId();
  const options = [
    { value: "AND", label: t("settings-pages.logic-all") },
    { value: "OR", label: t("settings-pages.logic-any") },
  ];

  return (
    <fieldset className="min-w-0">
      <legend className={`${ROUTER_LABEL} mb-1.5`}>
        {t("settings-pages.logic-legend")}
      </legend>
      <div className="inline-flex flex-wrap gap-0.5 p-0.5 rounded-lg border border-zinc-500 light:border-slate-500">
        {options.map((option) => (
          <label key={option.value} className="relative cursor-pointer">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={() => onChange(option.value)}
              className="peer sr-only"
            />
            <span className="flex items-center justify-center min-h-[40px] md:min-h-0 md:h-7 px-3 rounded-md text-sm font-medium text-zinc-300 light:text-slate-700 hover:bg-zinc-800 light:hover:bg-slate-100 peer-checked:bg-zinc-50 peer-checked:text-zinc-950 light:peer-checked:bg-slate-900 light:peer-checked:text-white peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[var(--theme-focus-ring)] transition-colors duration-quick ease-smooth">
              {option.label}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

function ConditionRow({ idPrefix, index, condition, onChange, onRemove }) {
  const { t } = useTranslation();
  const isBoolean = BOOLEAN_PROPERTIES.includes(condition.property);
  const number = index + 1;
  // Below md every row stacks and shows its labels; from md only the first
  // row shows them, the rest keep numbered labels for screen readers.
  const labelClass = index === 0 ? ROUTER_LABEL : `${ROUTER_LABEL} md:sr-only`;
  const fieldLabel = (key) => (
    <>
      {t(key)}
      <span className="sr-only">
        {" "}
        {t("settings-pages.condition-number", { index: number })}
      </span>
    </>
  );

  // Boolean properties (hasImageAttachment) have a fixed comparator (eq) and a
  // True/False value picker, so we short-circuit the normal comparator/value
  // fields when one is selected.
  const handlePropertyChange = (nextProperty) => {
    if (BOOLEAN_PROPERTIES.includes(nextProperty)) {
      onChange({ property: nextProperty, comparator: "eq", value: "true" });
      return;
    }
    const prevComparators = comparatorsFor(t, condition.property);
    const nextComparators = comparatorsFor(t, nextProperty);
    const comparatorStillValid =
      !!condition.comparator &&
      nextComparators.some((c) => c.value === condition.comparator) &&
      prevComparators.some((c) => c.value === condition.comparator);
    onChange({
      property: nextProperty,
      comparator: comparatorStillValid ? condition.comparator : "",
      value: BOOLEAN_PROPERTIES.includes(condition.property)
        ? ""
        : condition.value,
    });
  };
  const properties = createProperties(t);

  return (
    <div className="flex flex-col md:flex-row md:items-start gap-3 md:gap-x-5 w-full">
      <div
        className={`grid flex-1 min-w-0 grid-cols-1 ${isBoolean ? "md:grid-cols-2" : "md:grid-cols-3"} gap-3 md:gap-x-5`}
      >
        <FieldColumn
          id={`${idPrefix}-property`}
          labelClass={labelClass}
          label={fieldLabel("model-router.rule-form.property-label")}
        >
          <select
            id={`${idPrefix}-property`}
            value={condition.property}
            onChange={(e) => handlePropertyChange(e.target.value)}
            className={ROUTER_CONTROL}
            required
          >
            <option value="">
              {t("model-router.rule-form.property-select")}
            </option>
            {properties.map((p) => (
              <option key={p.value} value={p.value}>
                {p.label}
              </option>
            ))}
          </select>
        </FieldColumn>

        {isBoolean ? (
          <FieldColumn
            id={`${idPrefix}-value`}
            labelClass={labelClass}
            label={fieldLabel("model-router.rule-form.value-label")}
          >
            <BooleanValueField
              id={`${idPrefix}-value`}
              value={condition.value}
              onChange={(value) => onChange({ value })}
            />
          </FieldColumn>
        ) : (
          <ComparatorAndValueFields
            idPrefix={idPrefix}
            condition={condition}
            onChange={onChange}
            labelClass={labelClass}
            fieldLabel={fieldLabel}
          />
        )}
      </div>

      {onRemove && (
        <button
          type="button"
          onClick={onRemove}
          aria-label={t("settings-pages.condition-remove", { index: number })}
          className={`${ROUTER_ICON_BUTTON} self-end md:self-start ${index === 0 ? "md:mt-[29px]" : "md:mt-[3px]"} hover:text-red-400 light:hover:text-red-600`}
        >
          <X strokeWidth={1.5} size={16} aria-hidden="true" />
        </button>
      )}
    </div>
  );
}

function FieldColumn({ id, label, labelClass, children }) {
  return (
    <div className="flex flex-col gap-y-1.5 min-w-0">
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      {children}
    </div>
  );
}

function BooleanValueField({ id, value, onChange }) {
  const { t } = useTranslation();
  return (
    <select
      id={id}
      value={value || "true"}
      onChange={(e) => onChange(e.target.value)}
      className={ROUTER_CONTROL}
      required
    >
      <option value="true">{t("model-router.rule-form.bool-true")}</option>
      <option value="false">{t("model-router.rule-form.bool-false")}</option>
    </select>
  );
}

function ComparatorAndValueFields({
  idPrefix,
  condition,
  onChange,
  labelClass,
  fieldLabel,
}) {
  const { t } = useTranslation();
  const comparators = comparatorsFor(t, condition.property);
  const help = valueHelp(t, condition.property, condition.comparator);
  const helpId = `${idPrefix}-value-help`;
  return (
    <>
      <FieldColumn
        id={`${idPrefix}-comparator`}
        labelClass={labelClass}
        label={fieldLabel("model-router.rule-form.comparator-label")}
      >
        <select
          id={`${idPrefix}-comparator`}
          value={condition.comparator}
          onChange={(e) => onChange({ comparator: e.target.value })}
          className={ROUTER_CONTROL}
          required
        >
          <option value="">
            {t("model-router.rule-form.comparator-select")}
          </option>
          {comparators.map((c) => (
            <option key={c.value} value={c.value}>
              {c.label}
            </option>
          ))}
        </select>
      </FieldColumn>

      <FieldColumn
        id={`${idPrefix}-value`}
        labelClass={labelClass}
        label={fieldLabel("model-router.rule-form.value-label")}
      >
        <input
          id={`${idPrefix}-value`}
          type="text"
          value={condition.value}
          onChange={(e) => onChange({ value: e.target.value })}
          placeholder={valuePlaceholder(
            t,
            condition.property,
            condition.comparator
          )}
          aria-describedby={help ? helpId : undefined}
          className={`${ROUTER_CONTROL} ${
            condition.comparator === "matches" ? "font-mono" : ""
          }`}
          required
        />
        {help && (
          <p id={helpId} className={ROUTER_HINT}>
            {help}
          </p>
        )}
      </FieldColumn>
    </>
  );
}
