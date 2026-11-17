import { useId, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Plug, Trash2 } from "lucide-react";
import System from "@/models/system";
import showToast from "@/utils/toast";
import Toggle from "@/components/lib/Toggle";
import ConfirmModal from "@/components/lib/ConfirmModal";
import {
  ExternalLink,
  FIELD_ERROR,
  FIELD_HELP,
  FIELD_INPUT,
  FIELD_LABEL,
  SecretInput,
  blurOnWheel,
} from "@/components/ProviderFields";
import { formatSkillName } from "../formatSkillName";
import PanelHeader, {
  InstantNote,
  PANEL_DANGER_ACTION,
} from "../../components/PanelHeader";

const SECRET_KEY_PATTERN = /(key|token|secret|password)/i;

function isPlainObject(value) {
  return !!value && typeof value === "object" && !Array.isArray(value);
}

function initialValue(props = {}) {
  const raw = Object.prototype.hasOwnProperty.call(props, "value")
    ? props.value
    : props?.input?.default;
  if (props?.type === "boolean") return raw === true || raw === "true";
  return raw === undefined || raw === null ? "" : String(raw);
}

/**
 * Current values of a skill's setup_args, as field values: strings for text
 * and number fields, booleans for boolean ones.
 * @param {object} setupArgs - The setup arguments object
 * @returns {object} - The inputs object
 */
function inputsFromArgs(setupArgs) {
  if (!isPlainObject(setupArgs)) return {};
  return Object.fromEntries(
    Object.entries(setupArgs).map(([key, props]) => [key, initialValue(props)])
  );
}

function isRequired(props = {}) {
  return !!(props?.required || props?.input?.required);
}

function isSecret(key, props = {}) {
  return props?.input?.type === "password" || SECRET_KEY_PATTERN.test(key);
}

function isSafeUrl(url) {
  return typeof url === "string" && /^https?:\/\//i.test(url);
}

/**
 * Imported skill config component for imported skills only.
 * Its switch and its options save straight to the skill's plugin.json, so
 * nothing here marks the page as changed (the fields have no `name`).
 * @returns {JSX.Element}
 */
export default function ImportedSkillConfig({
  selectedSkill, // imported skill config object
  setImportedSkills, // function to set imported skills since config is file-write
  onDelete, // (hubId) => void, called once the skill is gone
}) {
  const { t } = useTranslation();
  const titleId = useId();
  const noteId = useId();
  const optionsId = useId();
  const fieldsRef = useRef(null);
  const [config, setConfig] = useState(selectedSkill);
  const [inputs, setInputs] = useState(() =>
    inputsFromArgs(selectedSkill?.setup_args)
  );
  const [errors, setErrors] = useState({});
  const [toggling, setToggling] = useState(false);
  const [saving, setSaving] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const name = formatSkillName(config.name) || config.hubId;

  const hasSetupArgs =
    isPlainObject(config?.setup_args) &&
    Object.keys(config.setup_args).length > 0;
  const hasChanges = useMemo(
    () =>
      JSON.stringify(inputs) !==
      JSON.stringify(inputsFromArgs(config.setup_args)),
    [inputs, config.setup_args]
  );

  function replaceInList(updatedConfig) {
    setImportedSkills((prev) =>
      prev.map((s) => (s.hubId === updatedConfig.hubId ? updatedConfig : s))
    );
  }

  async function toggleSkill() {
    if (toggling) return;
    const active = !config.active;
    setToggling(true);
    const ok =
      await System.experimentalFeatures.agentPlugins.updatePluginConfig(
        config.hubId,
        { active }
      );
    setToggling(false);
    if (!ok) {
      showToast(t("agent-pages.imported.toggle-failed"), "error", {
        clear: true,
      });
      return;
    }
    const updatedConfig = { ...config, active };
    replaceInList(updatedConfig);
    setConfig(updatedConfig);
    showToast(
      active
        ? t("agent-pages.imported.activated", { name })
        : t("agent-pages.imported.deactivated", { name }),
      "success",
      { clear: true }
    );
  }

  function validate() {
    const nextErrors = {};
    const values = {};
    for (const [key, props] of Object.entries(config.setup_args)) {
      const raw = inputs[key];
      if (props?.type === "boolean") {
        values[key] = !!raw;
        continue;
      }
      const text = String(raw ?? "").trim();
      if (!text) {
        if (isRequired(props))
          nextErrors[key] = t("agent-pages.imported.required-error");
        values[key] = "";
        continue;
      }
      if (props?.type === "number") {
        const number = Number(text);
        if (!Number.isFinite(number)) {
          nextErrors[key] = t("agent-pages.imported.number-error");
          continue;
        }
        values[key] = number;
        continue;
      }
      values[key] = String(raw);
    }
    return { nextErrors, values };
  }

  async function saveOptions() {
    if (saving || !hasChanges) return;
    const { nextErrors, values } = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      // Focus the first field that failed, after the errors render.
      setTimeout(() => {
        fieldsRef.current?.querySelector('[aria-invalid="true"]')?.focus();
      }, 0);
      return;
    }

    const setupArgs = Object.fromEntries(
      Object.entries(config.setup_args).map(([key, props]) => [
        key,
        { ...props, value: values[key] },
      ])
    );
    setSaving(true);
    const ok =
      await System.experimentalFeatures.agentPlugins.updatePluginConfig(
        config.hubId,
        { setup_args: setupArgs }
      );
    setSaving(false);
    if (!ok) {
      showToast(t("agent-pages.imported.save-failed"), "error", {
        clear: true,
      });
      return;
    }
    const updatedConfig = { ...config, setup_args: setupArgs };
    setConfig(updatedConfig);
    setInputs(inputsFromArgs(setupArgs));
    replaceInList(updatedConfig);
    showToast(t("agent-pages.imported.saved"), "success", { clear: true });
  }

  async function deleteSkill() {
    setDeleting(true);
    const ok = await System.experimentalFeatures.agentPlugins.deletePlugin(
      config.hubId
    );
    setDeleting(false);
    if (!ok) {
      showToast(t("agent-pages.imported.delete-failed"), "error", {
        clear: true,
      });
      return;
    }
    setConfirmDelete(false);
    setImportedSkills((prev) => prev.filter((s) => s.hubId !== config.hubId));
    showToast(t("agent-pages.imported.deleted", { name }), "success", {
      clear: true,
    });
    onDelete?.(config.hubId);
  }

  function setField(key, value) {
    setInputs((prev) => ({ ...prev, [key]: value }));
    if (errors[key])
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
  }

  // These fields sit inside the page form: Enter saves the skill's options
  // instead of submitting the page.
  function onFieldKeyDown(e) {
    if (e.key !== "Enter" || e.nativeEvent?.isComposing) return;
    e.preventDefault();
    saveOptions();
  }

  return (
    <div className="p-2">
      <div className="flex flex-col gap-y-[18px] max-w-[500px]">
        <PanelHeader
          titleId={titleId}
          title={name}
          icon={
            <Plug
              strokeWidth={1.5}
              size={24}
              aria-hidden="true"
              className="shrink-0 text-theme-text-primary"
            />
          }
        >
          <Toggle
            size="lg"
            enabled={!!config.active}
            ariaLabelledBy={titleId}
            describedBy={noteId}
            onChange={toggleSkill}
          />
        </PanelHeader>
        <InstantNote id={noteId} />
        <div className="flex flex-col gap-y-1 text-xs font-medium text-theme-text-secondary">
          {config.description && <p>{config.description}</p>}
          {config.author && (
            <p>
              {t("agent-pages.imported.author")}{" "}
              {isSafeUrl(config.author_url) ? (
                <ExternalLink
                  href={config.author_url}
                  className="underline text-theme-text-primary"
                >
                  {config.author}
                </ExternalLink>
              ) : (
                <span className="text-theme-text-primary">{config.author}</span>
              )}
            </p>
          )}
        </div>

        {hasSetupArgs ? (
          <div
            ref={fieldsRef}
            role="group"
            aria-labelledby={optionsId}
            className="flex flex-col gap-y-4"
          >
            <h3
              id={optionsId}
              className="text-theme-text-primary font-semibold text-sm"
            >
              {t("agent-pages.imported.options")}
            </h3>
            {Object.entries(config.setup_args).map(([key, props]) => (
              <ArgField
                key={key}
                fieldKey={key}
                props={props}
                value={inputs[key]}
                error={errors[key]}
                onChange={(value) => setField(key, value)}
                onKeyDown={onFieldKeyDown}
              />
            ))}
            {hasChanges && (
              <button
                type="button"
                onClick={saveOptions}
                aria-disabled={saving || undefined}
                aria-busy={saving || undefined}
                className="w-fit border-none text-theme-button-primary-text font-medium text-sm px-4 min-h-[44px] md:min-h-[36px] rounded-lg bg-primary-button hover:bg-primary-button-hover aria-disabled:opacity-60 aria-disabled:cursor-wait transition-colors duration-quick ease-smooth"
              >
                {saving ? t("common.saving") : t("agent-pages.imported.save")}
              </button>
            )}
          </div>
        ) : (
          <p className="text-theme-text-secondary text-sm font-medium py-1.5">
            {t("agent-pages.imported.no-options")}
          </p>
        )}

        {config.hubId && (
          <div>
            <button
              type="button"
              onClick={() => setConfirmDelete(true)}
              className={PANEL_DANGER_ACTION}
            >
              <Trash2 strokeWidth={1.5} size={16} aria-hidden="true" />
              {t("agent-pages.imported.delete")}
            </button>
          </div>
        )}
      </div>
      <ConfirmModal
        isOpen={confirmDelete}
        title={t("agent-pages.imported.delete-title", { name })}
        confirmLabel={t("settings-pages.delete")}
        busy={deleting}
        onConfirm={deleteSkill}
        onCancel={() => setConfirmDelete(false)}
      >
        <p>{t("agent-pages.imported.delete-body")}</p>
      </ConfirmModal>
    </div>
  );
}

function ArgField({ fieldKey, props = {}, value, error, onChange, onKeyDown }) {
  const { t } = useTranslation();
  const id = useId();
  const hintId = useId();
  const errorId = useId();
  const hint = props?.input?.hint;
  const required = isRequired(props);

  if (props?.type === "boolean") {
    return (
      <Toggle
        variant="horizontal"
        size="md"
        label={fieldKey}
        description={hint}
        enabled={!!value}
        onChange={onChange}
      />
    );
  }

  const describedBy =
    [hint ? hintId : null, error ? errorId : null].filter(Boolean).join(" ") ||
    undefined;
  const fieldProps = {
    id,
    value: value ?? "",
    onChange: (e) => onChange(e.target.value),
    onKeyDown,
    placeholder: props?.input?.placeholder || "",
    "aria-required": required || undefined,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": describedBy,
    autoComplete: "off",
  };

  return (
    <div className="flex flex-col">
      <label htmlFor={id} className={FIELD_LABEL}>
        <span className="font-mono">{fieldKey}</span>
        {required && (
          <>
            <span aria-hidden="true" className="ml-0.5">
              *
            </span>
            <span className="sr-only"> ({t("agent-pages.required")})</span>
          </>
        )}
      </label>
      {isSecret(fieldKey, props) ? (
        <SecretInput {...fieldProps} />
      ) : props?.type === "number" ? (
        <input
          {...fieldProps}
          type="number"
          inputMode="decimal"
          onWheel={blurOnWheel}
          className={FIELD_INPUT}
        />
      ) : (
        <input {...fieldProps} type="text" className={FIELD_INPUT} />
      )}
      {hint && (
        <p id={hintId} className={FIELD_HELP}>
          {hint}
        </p>
      )}
      {error && (
        <p id={errorId} role="alert" className={FIELD_ERROR}>
          {error}
        </p>
      )}
    </div>
  );
}
