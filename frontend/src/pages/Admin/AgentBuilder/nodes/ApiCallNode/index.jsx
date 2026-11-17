import { useId, useRef } from "react";
import { flushSync } from "react-dom";
import { useTranslation } from "react-i18next";
import { Plus, X } from "lucide-react";
import {
  FIELD_INPUT,
  FIELD_LABEL,
  FIELD_SELECT,
} from "@/components/ProviderFields";
import VariableInput from "../../VariableInput";
import VariableSelect from "../../VariableSelect";

const METHODS = ["GET", "POST", "DELETE", "PUT", "PATCH"];
const BODY_METHODS = ["POST", "PUT", "PATCH"];

/**
 * Whether a JSON body parses once every ${...} reference is swapped for a
 * placeholder value (references can sit inside a string or stand alone).
 * Only a warning: the request is still saved as written.
 * @param {string} body
 */
function looksLikeJson(body) {
  if (!body?.trim()) return true;
  try {
    JSON.parse(body.replace(/\$\{[^}]+\}/g, "0"));
    return true;
  } catch {
    return false;
  }
}

const ROW_BUTTON =
  "w-11 h-11 md:w-10 md:h-10 shrink-0 self-end md:self-start flex items-center justify-center rounded-lg border border-zinc-500 light:border-slate-500 bg-theme-settings-input-bg text-red-400 light:text-red-600 hover:bg-red-500/10 transition-colors duration-quick ease-smooth";

const ADD_BUTTON =
  "min-h-[44px] md:min-h-[36px] flex items-center justify-center gap-2 px-3 rounded-lg border border-zinc-500 light:border-slate-500 bg-theme-settings-input-bg text-sm text-white hover:bg-theme-action-menu-item-hover transition-colors duration-quick ease-smooth";

/**
 * Editable list of key/value rows (request headers or form fields): one
 * fieldset with a legend, named fields, rows stacked on phones, and focus
 * moved to the new row or to a neighbor after removing one.
 */
function KeyValueRows({
  legend,
  rows,
  onChange,
  addLabel,
  keyLabel,
  valueLabel,
  removeLabel,
}) {
  const { t } = useTranslation();
  const baseId = useId();
  const addButtonRef = useRef(null);
  const keyId = (index) => `${baseId}-${index}-key`;

  const updateRow = (index, field, value) => {
    const next = [...rows];
    next[index] = { ...next[index], [field]: value };
    onChange(next);
  };

  const addRow = () => {
    flushSync(() => onChange([...rows, { key: "", value: "" }]));
    document.getElementById(keyId(rows.length))?.focus();
  };

  const removeRow = (index) => {
    flushSync(() => onChange(rows.filter((_, i) => i !== index)));
    const next = index < rows.length - 1 ? index : index - 1;
    (document.getElementById(keyId(next)) || addButtonRef.current)?.focus();
  };

  return (
    <fieldset className="min-w-0">
      <legend className={FIELD_LABEL}>{legend}</legend>
      <div className="space-y-3">
        {rows.map((row, index) => {
          const n = index + 1;
          const valueId = `${baseId}-${index}-value`;
          return (
            <div
              key={index}
              className="flex flex-col md:flex-row md:items-start gap-2 pb-3 md:pb-0 border-b md:border-0 border-zinc-700 light:border-slate-300"
            >
              <div className="md:flex-1 min-w-0">
                <label htmlFor={keyId(index)} className="sr-only">
                  {keyLabel(n)}
                </label>
                <input
                  id={keyId(index)}
                  type="text"
                  placeholder={t("agent-builder.api.name-placeholder")}
                  value={row.key}
                  onChange={(e) => updateRow(index, "key", e.target.value)}
                  className={FIELD_INPUT}
                  autoComplete="off"
                  spellCheck={false}
                />
              </div>
              <div className="md:flex-1 min-w-0">
                <label htmlFor={valueId} className="sr-only">
                  {valueLabel(n)}
                </label>
                <VariableInput
                  id={valueId}
                  label={valueLabel(n)}
                  placeholder={t("agent-builder.api.value-placeholder")}
                  value={row.value}
                  onChange={(e) => updateRow(index, "value", e.target.value)}
                />
              </div>
              <button
                type="button"
                aria-label={removeLabel(row.key || n)}
                onClick={() => removeRow(index)}
                className={ROW_BUTTON}
              >
                <X strokeWidth={1.5} aria-hidden="true" className="w-4 h-4" />
              </button>
            </div>
          );
        })}
      </div>
      <button
        ref={addButtonRef}
        type="button"
        onClick={addRow}
        className={`${ADD_BUTTON} mt-3`}
      >
        <Plus strokeWidth={1.5} aria-hidden="true" className="w-4 h-4" />
        {addLabel}
      </button>
    </fieldset>
  );
}

export default function ApiCallNode({ config, onConfigChange }) {
  const { t } = useTranslation();
  const urlId = useId();
  const methodId = useId();
  const bodyTypeId = useId();
  const bodyId = useId();
  const jsonWarningId = useId();
  const urlLabel = t("agent-builder.api.url");
  const bodyLabel = t("agent-builder.api.body-content");
  const bodyType = config.bodyType || "json";
  const jsonInvalid = bodyType === "json" && !looksLikeJson(config.body);

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor={urlId} className={FIELD_LABEL}>
          {urlLabel}
        </label>
        <VariableInput
          id={urlId}
          label={urlLabel}
          placeholder="https://api.example.com/endpoint"
          value={config.url}
          onChange={(e) => onConfigChange({ url: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor={methodId} className={FIELD_LABEL}>
          {t("agent-builder.api.method")}
        </label>
        <select
          id={methodId}
          value={config.method}
          onChange={(e) => onConfigChange({ method: e.target.value })}
          className={FIELD_SELECT}
        >
          {METHODS.map((method) => (
            <option key={method} value={method} className="bg-theme-bg-primary">
              {method}
            </option>
          ))}
        </select>
      </div>

      <KeyValueRows
        legend={t("agent-builder.api.headers")}
        rows={config.headers || []}
        onChange={(headers) => onConfigChange({ headers })}
        addLabel={t("agent-builder.api.add-header")}
        keyLabel={(n) => t("agent-builder.api.header-name", { n })}
        valueLabel={(n) => t("agent-builder.api.header-value", { n })}
        removeLabel={(name) => t("agent-builder.api.remove-header", { name })}
      />

      {BODY_METHODS.includes(config.method) && (
        <fieldset className="min-w-0 space-y-3">
          <legend className={FIELD_LABEL}>{t("agent-builder.api.body")}</legend>
          <div>
            <label
              htmlFor={bodyTypeId}
              className="block text-sm text-white mb-2"
            >
              {t("agent-builder.api.body-format")}
            </label>
            <select
              id={bodyTypeId}
              value={bodyType}
              onChange={(e) => onConfigChange({ bodyType: e.target.value })}
              className={FIELD_SELECT}
            >
              <option value="json" className="bg-theme-bg-primary">
                JSON
              </option>
              <option value="text" className="bg-theme-bg-primary">
                {t("agent-builder.api.body-text")}
              </option>
              <option value="form" className="bg-theme-bg-primary">
                {t("agent-builder.api.body-form")}
              </option>
            </select>
          </div>
          {bodyType === "form" ? (
            <KeyValueRows
              legend={t("agent-builder.api.form-fields")}
              rows={config.formData || []}
              onChange={(formData) => onConfigChange({ formData })}
              addLabel={t("agent-builder.api.add-form-field")}
              keyLabel={(n) => t("agent-builder.api.form-key", { n })}
              valueLabel={(n) => t("agent-builder.api.form-value", { n })}
              removeLabel={(name) =>
                t("agent-builder.api.remove-form-field", { name })
              }
            />
          ) : (
            <div>
              <label htmlFor={bodyId} className="block text-sm text-white mb-2">
                {bodyLabel}
              </label>
              <VariableInput
                id={bodyId}
                label={bodyLabel}
                multiline
                mono={bodyType === "json"}
                rows={4}
                placeholder={bodyType === "json" ? '{"key": "value"}' : ""}
                describedBy={jsonInvalid ? jsonWarningId : undefined}
                value={config.body}
                onChange={(e) => onConfigChange({ body: e.target.value })}
              />
              {jsonInvalid && (
                <p
                  id={jsonWarningId}
                  className="mt-2 text-xs text-amber-300 light:text-amber-800"
                >
                  {t("agent-builder.api.json-invalid")}
                </p>
              )}
            </div>
          )}
        </fieldset>
      )}

      <VariableSelect
        label={t("agent-builder.api.response-variable")}
        value={config.responseVariable}
        onChange={(value) => onConfigChange({ responseVariable: value })}
      />
    </div>
  );
}
