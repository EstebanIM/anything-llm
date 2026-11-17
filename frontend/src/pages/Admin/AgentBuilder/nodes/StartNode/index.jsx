import { Fragment, useId, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { Trans, useTranslation } from "react-i18next";
import { Plus, X } from "lucide-react";
import SegmentedControl from "@/components/lib/SegmentedControl";
import {
  FIELD_ERROR,
  FIELD_HELP,
  FIELD_INPUT,
  FIELD_LABEL,
} from "@/components/ProviderFields";
import { VARIABLE_HIGHLIGHT_CLASS } from "../../VariableInput";
import InlineConfirm from "@/components/lib/InlineConfirm";
import variableIssues from "./variableIssues";

/**
 * Variable categories controlling LLM exposure. Variables saved before
 * categories existed have no `type` and are treated as "optional".
 */
const VARIABLE_TYPES = [
  {
    value: "required",
    labelKey: "agent-builder.start.type-required",
    hintKey: "agent-builder.start.type-required-help",
  },
  {
    value: "optional",
    labelKey: "agent-builder.start.type-optional",
    hintKey: "agent-builder.start.type-optional-help",
  },
  {
    value: "static",
    labelKey: "agent-builder.start.type-static",
    hintKey: "agent-builder.start.type-static-help",
  },
];

const ISSUE_MESSAGE_KEYS = {
  invalid: "agent-builder.start.error-invalid",
  duplicate: "agent-builder.start.error-duplicate",
};

const EMPTY_VARIABLE = {
  name: "",
  value: "",
  type: "optional",
  description: "",
};

export default function StartNode({
  config,
  onConfigChange,
  onDeleteVariable,
}) {
  const { t } = useTranslation();
  const baseId = useId();
  const addButtonRef = useRef(null);
  const [confirmingIndex, setConfirmingIndex] = useState(null);
  const variables = config.variables || [];
  const issues = variableIssues(variables);
  const exampleVariables = variables.filter((v) => v.name).slice(0, 3);
  const canDelete = variables.length > 1;
  const fieldId = (index, field) => `${baseId}-var-${index}-${field}`;

  const updateVariable = (index, updates) => {
    const newVars = [...variables];
    newVars[index] = { ...newVars[index], ...updates };
    onConfigChange({ variables: newVars });
  };

  const addVariable = () => {
    flushSync(() =>
      onConfigChange({ variables: [...variables, { ...EMPTY_VARIABLE }] })
    );
    document.getElementById(fieldId(variables.length, "name"))?.focus();
  };

  const deleteVariable = (index) => {
    const { name } = variables[index];
    // With a repeated name, the other variable still answers to it: keep the
    // blocks that store their result there.
    const isOnlyOne = variables.filter((v) => v.name === name).length === 1;
    flushSync(() => {
      setConfirmingIndex(null);
      if (name && isOnlyOne) onDeleteVariable(name);
      onConfigChange({ variables: variables.filter((_, i) => i !== index) });
    });
    const next = index < variables.length - 1 ? index : index - 1;
    const target = document.getElementById(fieldId(next, "name"));
    (target || addButtonRef.current)?.focus();
  };

  const cancelDelete = (index) => {
    setConfirmingIndex(null);
    document.getElementById(fieldId(index, "delete"))?.focus();
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2 text-xs text-theme-text-secondary">
        <p>
          <Trans
            i18nKey="agent-builder.start.intro"
            components={{
              chip: (
                <span
                  className={`${VARIABLE_HIGHLIGHT_CLASS} px-1 py-0.5 font-mono text-white`}
                />
              ),
            }}
          />
        </p>
        <p>{t("agent-builder.start.types-help")}</p>
        {exampleVariables.length > 0 && (
          <p>
            {t("agent-builder.start.example")}{" "}
            {exampleVariables.map((variable, index) => (
              <Fragment key={`${variable.name}-${index}`}>
                <span
                  className={`${VARIABLE_HIGHLIGHT_CLASS} px-1 py-0.5 font-mono text-white`}
                >
                  {`\${${variable.name}}`}
                </span>
                {index < exampleVariables.length - 1 && ", "}
              </Fragment>
            ))}
          </p>
        )}
      </div>

      {variables.map((variable, index) => {
        const type = variable.type || "optional";
        const typeInfo =
          VARIABLE_TYPES.find((option) => option.value === type) ||
          VARIABLE_TYPES[1];
        const issue = issues[index];
        const nameId = fieldId(index, "name");
        const errorId = fieldId(index, "error");
        const typeLabelId = fieldId(index, "type-label");
        const typeHelpId = fieldId(index, "type-help");
        const valueId = fieldId(index, "value");
        const descriptionId = fieldId(index, "description");
        const displayName = variable.name || index + 1;

        return (
          <fieldset
            key={index}
            className="space-y-3 p-3 rounded-lg border border-zinc-600 light:border-slate-300"
          >
            <legend className="px-1 text-xs font-semibold text-theme-text-secondary">
              {t("agent-builder.start.variable-n", { n: index + 1 })}
            </legend>

            <div>
              <div className="flex items-end gap-2">
                <div className="flex-1 min-w-0">
                  <label htmlFor={nameId} className={FIELD_LABEL}>
                    {t("agent-builder.start.name")}
                  </label>
                  <input
                    id={nameId}
                    type="text"
                    value={variable.name}
                    onChange={(e) =>
                      updateVariable(index, { name: e.target.value })
                    }
                    aria-invalid={!!issue || undefined}
                    aria-describedby={issue ? errorId : undefined}
                    className={`${FIELD_INPUT} font-mono`}
                    autoComplete="off"
                    spellCheck={false}
                  />
                </div>
                {canDelete && (
                  <button
                    id={fieldId(index, "delete")}
                    type="button"
                    aria-label={t("agent-builder.start.delete", {
                      name: displayName,
                    })}
                    onClick={() =>
                      variable.name
                        ? setConfirmingIndex(index)
                        : deleteVariable(index)
                    }
                    className="w-11 h-11 md:w-10 md:h-10 shrink-0 flex items-center justify-center rounded-lg border border-zinc-500 light:border-slate-500 bg-theme-settings-input-bg text-red-400 light:text-red-600 hover:bg-red-500/10 transition-colors duration-quick ease-smooth"
                  >
                    <X
                      strokeWidth={1.5}
                      aria-hidden="true"
                      className="w-4 h-4"
                    />
                  </button>
                )}
              </div>
              {issue && (
                <p id={errorId} role="alert" className={FIELD_ERROR}>
                  {t(ISSUE_MESSAGE_KEYS[issue])}
                </p>
              )}
            </div>

            {confirmingIndex === index && (
              <InlineConfirm
                question={t("notices.delete-variable-question", {
                  name: displayName,
                })}
                consequences={t("notices.delete-variable-consequences")}
                confirmLabel={t("settings-pages.delete")}
                onConfirm={() => deleteVariable(index)}
                onCancel={() => cancelDelete(index)}
              />
            )}

            <div>
              <span id={typeLabelId} className={FIELD_LABEL}>
                {t("agent-builder.start.type")}
              </span>
              <SegmentedControl
                value={type}
                onChange={(value) => updateVariable(index, { type: value })}
                options={VARIABLE_TYPES.map((option) => ({
                  value: option.value,
                  label: t(option.labelKey),
                }))}
                labelledBy={typeLabelId}
                describedBy={typeHelpId}
              />
              <p id={typeHelpId} className={FIELD_HELP}>
                {t(typeInfo.hintKey)}
              </p>
            </div>

            {type !== "required" && (
              <div>
                <label htmlFor={valueId} className={FIELD_LABEL}>
                  {type === "static"
                    ? t("agent-builder.start.value")
                    : t("agent-builder.start.initial-value")}
                </label>
                <input
                  id={valueId}
                  type="text"
                  value={variable.value}
                  onChange={(e) =>
                    updateVariable(index, { value: e.target.value })
                  }
                  className={FIELD_INPUT}
                  autoComplete="off"
                  spellCheck={false}
                />
              </div>
            )}

            {type !== "static" && (
              <div>
                <label htmlFor={descriptionId} className={FIELD_LABEL}>
                  {t("agent-builder.start.description")}
                </label>
                <input
                  id={descriptionId}
                  type="text"
                  placeholder={t("agent-builder.start.description-placeholder")}
                  value={variable.description || ""}
                  onChange={(e) =>
                    updateVariable(index, { description: e.target.value })
                  }
                  className={FIELD_INPUT}
                  autoComplete="off"
                  spellCheck={false}
                />
              </div>
            )}
          </fieldset>
        );
      })}

      <button
        ref={addButtonRef}
        type="button"
        onClick={addVariable}
        className="w-full min-h-[44px] md:min-h-[36px] flex items-center justify-center gap-2 px-3 rounded-lg border border-zinc-500 light:border-slate-500 bg-theme-settings-input-bg text-sm text-white hover:bg-theme-action-menu-item-hover transition-colors duration-quick ease-smooth"
      >
        <Plus strokeWidth={1.5} aria-hidden="true" className="w-4 h-4" />
        {t("agent-builder.start.add")}
      </button>
    </div>
  );
}
