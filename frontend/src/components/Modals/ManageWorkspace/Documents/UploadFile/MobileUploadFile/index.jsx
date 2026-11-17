import { useId, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, LoaderCircle, Upload } from "lucide-react";
import { FIELD_ERROR, FIELD_INPUT } from "@/components/ProviderFields";
import SupportedFormats from "../SupportedFormats";

/**
 * Touch layout of the uploader. Upload logic stays in `UploadFile`.
 *
 * @param {Object} props
 * @param {boolean} props.ready - Document processor is online
 * @param {"checking"|"online"|"offline"} props.processor
 * @param {string[]} props.formats - accepted extensions
 * @param {string} props.summaryText - live summary of the upload list
 * @param {import("react").ReactNode} props.uploadList - progress rows
 * @param {object} props.inputProps - `getInputProps()` from the dropzone
 * @param {string|null} props.linkError
 */
export default function MobileUploadFile({
  ready,
  processor,
  formats,
  summaryText,
  uploadList,
  openFilePicker,
  inputProps,
  fetchingUrl,
  linkError,
  onSubmitLink,
}) {
  const { t } = useTranslation();
  const [showLinkForm, setShowLinkForm] = useState(false);
  const formId = useId();
  const linkId = useId();
  const linkErrorId = useId();

  return (
    <div className="flex flex-col gap-y-2">
      <input {...inputProps} />
      <div className="grid grid-cols-2 gap-x-2">
        <UploadButton
          icon={Upload}
          label={t("connectors.directory.upload-files")}
          disabled={!ready}
          onClick={openFilePicker}
        />
        <UploadButton
          icon={Link}
          label={t("connectors.directory.add-link")}
          active={showLinkForm}
          aria-expanded={showLinkForm}
          aria-controls={formId}
          onClick={() => setShowLinkForm(!showLinkForm)}
        />
      </div>
      {processor === "offline" && (
        <p className="text-xs text-zinc-400 light:text-slate-600">
          {t("connectors.upload.processor-offline")}.{" "}
          {t("connectors.upload.processor-offline-desc")}
        </p>
      )}
      <SupportedFormats formats={formats} />
      <form
        id={formId}
        onSubmit={onSubmitLink}
        noValidate
        className={showLinkForm ? "flex flex-col gap-y-1.5" : "hidden"}
      >
        <label
          htmlFor={linkId}
          className="text-sm font-medium text-slate-50 light:text-slate-900"
        >
          {t("connectors.upload.or-submit-link")}
        </label>
        <div className="flex gap-x-2">
          <input
            id={linkId}
            name="link"
            // Not type="url" - that would force the user to type the protocol.
            type="text"
            inputMode="url"
            autoComplete="off"
            autoCapitalize="off"
            readOnly={fetchingUrl}
            placeholder={t("connectors.upload.placeholder-link")}
            aria-invalid={!!linkError || undefined}
            aria-describedby={linkError ? linkErrorId : undefined}
            className={`${FIELD_INPUT} flex-1 min-w-0`}
          />
          <button
            type="submit"
            aria-disabled={fetchingUrl || undefined}
            aria-busy={fetchingUrl || undefined}
            className="border-none h-11 px-4 rounded-lg text-sm font-semibold shrink-0 flex items-center gap-x-2 bg-zinc-50 light:bg-slate-900 text-zinc-950 light:text-white transition-transform duration-quick ease-smooth active:scale-[0.97] aria-disabled:opacity-60 aria-disabled:cursor-wait"
          >
            {fetchingUrl && (
              <LoaderCircle
                strokeWidth={1.5}
                size={14}
                aria-hidden="true"
                className="animate-spin"
              />
            )}
            {fetchingUrl
              ? t("connectors.upload.fetching")
              : t("connectors.upload.fetch-website")}
          </button>
        </div>
        {linkError && (
          <p id={linkErrorId} role="alert" className={FIELD_ERROR}>
            {linkError}
          </p>
        )}
      </form>
      <p
        role="status"
        className={
          summaryText
            ? "text-xs font-medium text-slate-50 light:text-slate-900"
            : "sr-only"
        }
      >
        {summaryText}
      </p>
      <div className="max-h-[136px] overflow-y-auto">{uploadList}</div>
    </div>
  );
}

function UploadButton({
  icon: Icon,
  label,
  onClick,
  disabled,
  active,
  ...props
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      {...props}
      className={`border-none h-11 rounded-xl flex items-center justify-center gap-x-2 text-sm font-medium transition-[transform,background-color] duration-quick ease-smooth active:scale-[0.97] disabled:opacity-50 ${
        active
          ? "bg-sky-500/15 text-sky-300 light:bg-sky-50 light:text-sky-700"
          : "bg-zinc-800 light:bg-slate-100 text-slate-50 light:text-slate-900"
      }`}
    >
      <Icon strokeWidth={1.5} size={18} aria-hidden="true" />
      {label}
    </button>
  );
}
