import { useEffect, useId, useRef, useState } from "react";
import { Info, LoaderCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import paths from "@/utils/paths";
import { FIELD_COL, FIELD_HELP, FIELD_LABEL, FIELD_SELECT } from "./classes";
import InfoTip from "./InfoTip";

/** Number inputs: drop focus on wheel so scrolling the page never changes the value. */
export const blurOnWheel = (e) => e.currentTarget.blur();

/** Secondary text button (eg: "Select from available models"). */
export const TEXT_BUTTON =
  "w-fit min-h-[44px] md:min-h-0 mt-1.5 text-xs text-left underline text-theme-text-secondary hover:text-white transition-colors duration-quick ease-smooth";

/**
 * Field label, optionally with an "(optional)" mark, an InfoTip and extra
 * content on the right (eg: the auto-detect button).
 */
export function FieldLabel({
  htmlFor,
  label,
  optional = false,
  tip = null,
  tipClickable = false,
  children = null,
}) {
  const { t } = useTranslation();
  const text = (
    <>
      {label}
      {optional && (
        <span className="font-normal text-theme-text-secondary">
          {" "}
          ({t("provider-fields.optional")})
        </span>
      )}
    </>
  );

  if (!tip && !children)
    return (
      <label htmlFor={htmlFor} className={FIELD_LABEL}>
        {text}
      </label>
    );

  return (
    <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1 mb-3 min-h-5">
      <div className="flex items-center gap-x-1">
        <label htmlFor={htmlFor} className="text-white text-sm font-semibold">
          {text}
        </label>
        {tip && (
          <InfoTip label={label} clickable={tipClickable}>
            {tip}
          </InfoTip>
        )}
      </div>
      {children}
    </div>
  );
}

/**
 * State of a model list for ModelSelectField.
 * @param {{loading: boolean, error?: string|null, count: number, needs?: "need-key"|"need-url"|null}} state
 * @returns {"need-key"|"need-url"|"loading"|"error"|"empty"|"ready"}
 */
export function modelStatus({
  loading,
  error = null,
  count = 0,
  needs = null,
}) {
  if (needs) return needs;
  if (loading) return "loading";
  if (error) return "error";
  return count > 0 ? "ready" : "empty";
}

/**
 * Model <select> with explicit states, so a list that cannot load never shows
 * an endless "loading". The ready <select> is keyed apart from the placeholder
 * one so `defaultValue` applies to the options that just arrived.
 * Pass `value` + `onChange` for a controlled select, and `errorMessage` to
 * replace the generic "could not load" text.
 */
export function ModelSelectField({
  name,
  label,
  status,
  error = null,
  errorMessage = null,
  onRetry = null,
  defaultValue,
  value,
  onChange,
  required = true,
  help = null,
  tip = null,
  messages = {},
  className = FIELD_COL,
  children,
}) {
  const { t } = useTranslation();
  const id = useId();
  const helpId = `${id}-help`;
  const errorId = `${id}-error`;
  const selectRef = useRef(null);
  const [retrying, setRetrying] = useState(false);

  // After a retry the button stays mounted while loading; if the list arrives,
  // focus moves to the select instead of being lost with the button.
  useEffect(() => {
    if (!retrying || status === "loading") return;
    setRetrying(false);
    if (status === "ready") selectRef.current?.focus();
  }, [status]);

  const placeholder =
    messages[status] ??
    {
      loading: t("provider-fields.models-loading"),
      "need-key": t("provider-fields.models-need-key"),
      "need-url": t("provider-fields.models-need-url"),
      empty: t("provider-fields.models-empty"),
      error: t("provider-fields.models-empty"),
    }[status];
  const showRetry =
    !!onRetry &&
    (status === "error" ||
      status === "empty" ||
      (retrying && status === "loading"));
  const describedBy =
    [status === "error" ? errorId : null, help ? helpId : null]
      .filter(Boolean)
      .join(" ") || undefined;
  const valueProps =
    value !== undefined ? { value, onChange } : { defaultValue, onChange };

  return (
    <div className={className}>
      <FieldLabel htmlFor={id} label={label} tip={tip} />
      {status === "ready" ? (
        <select
          key="ready"
          ref={selectRef}
          id={id}
          name={name}
          required={required}
          aria-describedby={describedBy}
          className={FIELD_SELECT}
          {...valueProps}
        >
          {children}
        </select>
      ) : (
        <select
          key="pending"
          id={id}
          name={name}
          disabled={true}
          defaultValue=""
          aria-busy={status === "loading" || undefined}
          aria-describedby={describedBy}
          className={FIELD_SELECT}
        >
          <option value="">{placeholder}</option>
        </select>
      )}
      {(status === "error" || showRetry) && (
        <div className="mt-2 flex flex-wrap items-center gap-x-3">
          {status === "error" && (
            <p
              id={errorId}
              role="alert"
              className="text-xs text-red-400 light:text-red-700"
            >
              {errorMessage ?? t("provider-fields.models-error", { error })}
            </p>
          )}
          {showRetry && (
            <button
              type="button"
              aria-busy={status === "loading" || undefined}
              onClick={() => {
                if (status === "loading") return;
                setRetrying(true);
                onRetry();
              }}
              className="min-h-[44px] md:min-h-0 text-xs font-medium underline text-white hover:text-white/80 light:hover:text-slate-700 transition-colors duration-quick ease-smooth"
            >
              {t("provider-fields.retry")}
            </button>
          )}
        </div>
      )}
      {help && (
        <p id={helpId} className={FIELD_HELP}>
          {help}
        </p>
      )}
    </div>
  );
}

/**
 * Auto-detect trigger for providers that run on a local URL. It stays mounted
 * while detecting (aria-busy) so keyboard focus is never lost.
 */
export function AutoDetectButton({ busy = false, onClick }) {
  const { t } = useTranslation();
  return (
    <button
      type="button"
      aria-busy={busy || undefined}
      aria-disabled={busy || undefined}
      onClick={(e) => {
        if (busy) return e.preventDefault();
        onClick(e);
      }}
      className="inline-flex shrink-0 items-center justify-center gap-x-1.5 min-h-[44px] md:min-h-[28px] px-3 rounded-lg border border-zinc-500 light:border-slate-500 bg-transparent text-xs font-medium text-white hover:bg-zinc-800 light:hover:bg-slate-100 transition-colors duration-quick ease-smooth aria-disabled:cursor-wait"
    >
      {busy && (
        <LoaderCircle
          strokeWidth={1.5}
          aria-hidden="true"
          className="w-3.5 h-3.5 animate-spin"
        />
      )}
      {busy ? t("provider-fields.detecting") : t("provider-fields.auto-detect")}
    </button>
  );
}

/** Result of the auto-detection, announced politely. Always mounted. */
export function AutoDetectStatus({ status, provider, endpoint }) {
  const { t } = useTranslation();
  let message = "";
  if (status === "found")
    message = t("provider-fields.detect-success", { provider, url: endpoint });
  if (status === "not-found")
    message = t("provider-fields.detect-failed", { provider });
  return (
    <p aria-live="polite" className="text-xs text-theme-text-secondary">
      {message}
    </p>
  );
}

/** Auto-detect button and its result, side by side. */
export function AutoDetectRow({
  provider,
  busy,
  status,
  endpoint,
  onDetect,
  className = "",
}) {
  return (
    <div className={`flex flex-wrap items-center gap-x-3 gap-y-2 ${className}`}>
      <AutoDetectButton busy={busy} onClick={onDetect} />
      <AutoDetectStatus
        status={status}
        provider={provider}
        endpoint={endpoint}
      />
    </div>
  );
}

/** Long help for the context window of local servers that cap it themselves. */
export function ContextWindowTip({ fallback }) {
  const { t } = useTranslation();
  return (
    <>
      <p>{t("llm-fields.common.context-window-tip.intro")}</p>
      <p className="mt-2">
        {t("llm-fields.common.context-window-tip.auto", { fallback })}
      </p>
      <p className="mt-2">
        <b>{t("llm-fields.common.context-window-tip.important")}</b>{" "}
        {t("llm-fields.common.context-window-tip.cap")}
      </p>
      <p className="mt-2">
        {t("llm-fields.common.context-window-tip.invalid")}
      </p>
    </>
  );
}

/** Notice for local LLMs that need an embedding provider set up separately. */
export function EmbedderRequiredNotice({ provider }) {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-x-2 text-white mb-6 bg-blue-800/30 light:bg-sky-100 w-fit rounded-lg px-4 py-2">
      <div className="gap-x-2 flex items-center">
        <Info
          strokeWidth={1.5}
          size={12}
          aria-hidden="true"
          className="hidden md:block shrink-0"
        />
        <p className="text-sm md:text-base">
          {t("llm-fields.common.requires-embedder", { provider })}
        </p>
      </div>
      <Link
        to={paths.settings.embedder.modelPreference()}
        className="text-sm md:text-base my-2 underline"
      >
        {t("llm-fields.common.manage-embedding")} &rarr;
      </Link>
    </div>
  );
}

/** Link to another site, in a new tab, with the hidden "opens in a new tab" notice. */
export function ExternalLink({ href, className = "", children }) {
  const { t } = useTranslation();
  return (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      {children}
      <span className="sr-only"> {t("provider-fields.opens-new-tab")}</span>
    </a>
  );
}
