import { useId } from "react";
import { Info } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  FIELD_HELP,
  FIELD_INPUT,
  FIELD_SELECT,
  FieldLabel,
  SecretInput,
} from "@/components/ProviderFields";

/** Folder name shown in Documents: some collectors return an absolute path. */
export function folderName(destination) {
  return (
    String(destination ?? "")
      .split(/[\\/]/)
      .filter(Boolean)
      .pop() ?? ""
  );
}

/** One .gitignore pattern per line; blank lines are dropped. */
export function parseIgnorePaths(value) {
  return String(value ?? "")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
}

/**
 * Labelled field with optional help (linked with aria-describedby) and an
 * optional InfoTip next to the label.
 */
function Field({ label, help, optional, tip, className, children }) {
  const id = useId();
  const helpId = help ? `${id}-help` : undefined;
  return (
    <div className={className}>
      <FieldLabel
        htmlFor={id}
        label={label}
        optional={optional}
        tip={tip}
        tipClickable={!!tip}
      />
      {children({ id, describedBy: helpId })}
      {help && (
        <p id={helpId} className={FIELD_HELP}>
          {help}
        </p>
      )}
    </div>
  );
}

export function TextField({
  label,
  help = null,
  optional = false,
  tip = null,
  className = "flex flex-col w-full",
  ...inputProps
}) {
  return (
    <Field
      label={label}
      help={help}
      optional={optional}
      tip={tip}
      className={className}
    >
      {({ id, describedBy }) => (
        <input
          id={id}
          className={FIELD_INPUT}
          autoComplete="off"
          spellCheck={false}
          aria-describedby={describedBy}
          {...inputProps}
        />
      )}
    </Field>
  );
}

export function SelectField({
  label,
  help = null,
  className = "flex flex-col w-full",
  children,
  ...selectProps
}) {
  return (
    <Field label={label} help={help} className={className}>
      {({ id, describedBy }) => (
        <select
          id={id}
          className={FIELD_SELECT}
          aria-describedby={describedBy}
          {...selectProps}
        >
          {children}
        </select>
      )}
    </Field>
  );
}

/** Access token or API key: masked input with show/hide, help and an InfoTip. */
export function TokenField({
  label,
  help = null,
  optional = false,
  tip = null,
  className = "flex flex-col w-full",
  ...inputProps
}) {
  return (
    <Field
      label={label}
      help={help}
      optional={optional}
      tip={tip}
      className={className}
    >
      {({ id, describedBy }) => (
        <SecretInput id={id} aria-describedby={describedBy} {...inputProps} />
      )}
    </Field>
  );
}

/** .gitignore-style exclusions, one pattern per line (read with parseIgnorePaths). */
export function IgnorePathsInput({ label, name = "ignores" }) {
  const { t } = useTranslation();
  return (
    <Field
      label={label}
      help={t("data-connectors.git.ignore-help")}
      optional={true}
      className="flex flex-col w-full"
    >
      {({ id, describedBy }) => (
        <textarea
          id={id}
          name={name}
          rows={4}
          className={`${FIELD_INPUT} font-mono resize-y`}
          placeholder={"images/*\n.DS_Store\nbin/*"}
          autoComplete="off"
          spellCheck={false}
          aria-describedby={describedBy}
        />
      )}
    </Field>
  );
}

/** Informative callout (not an error) shown inside a connector form. */
export function Notice({ children }) {
  return (
    <div className="flex items-start gap-x-2 w-full rounded-lg px-4 py-3 bg-blue-800/30 light:bg-sky-100 text-white text-sm">
      <Info
        strokeWidth={1.5}
        size={18}
        aria-hidden="true"
        className="shrink-0 mt-0.5"
      />
      <div className="flex flex-col gap-y-2 min-w-0">{children}</div>
    </div>
  );
}
