import { CloudUpload, CloudOff, LoaderCircle } from "lucide-react";
import { useEffect, useId, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDropzone } from "react-dropzone";
import debounce from "lodash.debounce";
import showToast from "@/utils/toast";
import { serverErrorMessage } from "@/utils/serverErrors";
import Workspace from "@/models/workspace";
import { getFilesFromUploadEvent } from "@/utils/folderUpload";
import { FIELD_ERROR, FIELD_INPUT } from "@/components/ProviderFields";
import FileUploadProgress from "./FileUploadProgress";
import MobileUploadFile from "./MobileUploadFile";
import SupportedFormats from "./SupportedFormats";

/**
 * Fills in a missing protocol so the user can type "example.com/docs" instead
 * of the full URL. Anything already carrying a scheme is left alone.
 * @param {string} value raw input value
 * @returns {string|null} the URL to scrape, or null if it cannot be one
 */
function withProtocol(value = "") {
  const trimmed = value.trim();
  if (!trimmed) return null;
  const candidate = /^[a-z][a-z0-9+.-]*:\/\//i.test(trimmed)
    ? trimmed
    : `https://${trimmed}`;
  try {
    new URL(candidate);
    return candidate;
  } catch {
    return null;
  }
}

/**
 * One line for the upload list's live region: what is running, what finished
 * and what failed.
 * @param {(key: string, options?: object) => string} t
 * @param {{uploading: number, complete: number, failed: number}} summary
 */
export function uploadSummaryText(t, summary) {
  return [
    summary.uploading > 0 &&
      t("workspace-docs.upload.uploading-count", { count: summary.uploading }),
    summary.uploading === 0 &&
      summary.complete > 0 &&
      t("workspace-docs.upload.done-count", { count: summary.complete }),
    summary.failed > 0 &&
      t("workspace-docs.upload.failed-count", { count: summary.failed }),
  ]
    .filter(Boolean)
    .join(" · ");
}

/**
 * Submit handler shared by the desktop and mobile link forms.
 * @returns {{fetchingUrl: boolean, linkError: string|null, sendLink: (e: SubmitEvent) => Promise<void>}}
 */
function useLinkUpload(slug, onLinkScraped) {
  const { t } = useTranslation();
  const [fetchingUrl, setFetchingUrl] = useState(false);
  const [linkError, setLinkError] = useState(null);

  const sendLink = async (e) => {
    e.preventDefault();
    if (fetchingUrl) return;
    const formEl = e.currentTarget;
    const link = withProtocol(new FormData(formEl).get("link"));
    if (!link) {
      setLinkError(t("workspace-docs.upload.link-invalid"));
      formEl.elements.namedItem("link")?.focus();
      return;
    }

    setLinkError(null);
    setFetchingUrl(true);
    let ok = false;
    let message = "";
    try {
      const { response, data } = await Workspace.uploadLink(slug, link);
      ok = response.ok;
      message = data?.error ?? "";
    } catch (error) {
      message = error.message;
    }
    if (ok) {
      await onLinkScraped();
      showToast(t("workspace-docs.upload.link-success"), "success");
      formEl.reset();
    } else {
      setLinkError(
        serverErrorMessage(message, t, "workspace-docs.upload.link-error")
      );
    }
    setFetchingUrl(false);
  };

  return { fetchingUrl, linkError, sendLink };
}

/**
 * @param {object} props
 * @param {ReturnType<import("../hooks/useUploadQueue").default>} props.queue
 * the upload queue shared with the picker's per-folder drop targets, so both
 * report progress in this one list.
 * @param {() => Promise<void>} props.onUploadComplete called (coalesced) once a
 * burst of file uploads settles, so the picker can hydrate in place.
 * @param {() => Promise<void>} props.onLinkScraped called after a link scrape.
 * @param {"default"|"mobile"} [props.variant="default"] - `mobile` swaps the
 * drag-and-drop zone for touch-sized buttons
 */
export default function UploadFile({
  workspace,
  queue,
  onUploadComplete,
  onLinkScraped,
  variant = "default",
}) {
  const { t } = useTranslation();
  const { ready, processor, formats, files, summary, enqueueDrop } = queue;
  const { fetchingUrl, linkError, sendLink } = useLinkUpload(
    workspace.slug,
    onLinkScraped
  );
  const titleId = useId();
  const formatsId = useId();
  const linkId = useId();
  const linkErrorId = useId();

  // Uploads finish one at a time; coalesce their completions into a single
  // picker sync so a 50-file folder drop does not fire 50 refreshes.
  const syncPicker = useMemo(
    () => debounce(() => onUploadComplete?.(), 750),
    [onUploadComplete]
  );
  useEffect(() => () => syncPicker.cancel(), [syncPicker]);

  const { getRootProps, getInputProps, inputRef, isDragActive } = useDropzone({
    onDrop: enqueueDrop,
    disabled: !ready,
    getFilesFromEvent: getFilesFromUploadEvent,
  });

  const summaryText = uploadSummaryText(t, summary);
  const uploadList = (
    <UploadList
      files={files}
      slug={workspace.slug}
      queue={queue}
      onSettled={syncPicker}
    />
  );

  if (variant === "mobile")
    return (
      <MobileUploadFile
        ready={ready}
        processor={processor}
        formats={formats}
        summaryText={summaryText}
        uploadList={uploadList}
        openFilePicker={() => inputRef.current?.click()}
        inputProps={getInputProps()}
        fetchingUrl={fetchingUrl}
        linkError={linkError}
        onSubmitLink={sendLink}
      />
    );

  return (
    <div className="w-full flex flex-col gap-y-3">
      <div
        {...getRootProps({
          role: "button",
          "aria-labelledby": titleId,
          "aria-describedby": formatsId,
          "aria-disabled": !ready || undefined,
        })}
        className={`w-full border-dashed border-2 rounded-2xl p-4 flex flex-col items-center justify-center gap-y-1 text-center transition-colors duration-quick ease-smooth ${
          isDragActive
            ? "border-sky-400 bg-sky-500/10 light:border-sky-700 light:bg-sky-50"
            : "border-zinc-500 light:border-slate-500 bg-theme-bg-primary light:bg-slate-50"
        } ${
          ready
            ? "cursor-pointer hover:bg-zinc-800 light:hover:bg-sky-50"
            : "cursor-not-allowed"
        }`}
      >
        <input {...getInputProps()} />
        {processor === "checking" ? (
          <LoaderCircle
            strokeWidth={1.5}
            aria-hidden="true"
            className="w-8 h-8 animate-spin text-zinc-300 light:text-slate-600"
          />
        ) : ready ? (
          <CloudUpload
            strokeWidth={1.5}
            aria-hidden="true"
            className="w-8 h-8 text-zinc-300 light:text-slate-600"
          />
        ) : (
          <CloudOff
            strokeWidth={1.5}
            aria-hidden="true"
            className="w-8 h-8 text-zinc-300 light:text-slate-600"
          />
        )}
        <p
          id={titleId}
          className="text-sm font-semibold text-slate-50 light:text-slate-900"
        >
          {processor === "checking"
            ? t("workspace-docs.upload.checking")
            : ready
              ? t("connectors.upload.click-upload")
              : t("connectors.upload.processor-offline")}
        </p>
        <p
          id={formatsId}
          className="text-xs text-zinc-400 light:text-slate-600 max-w-[420px]"
        >
          {ready || processor === "checking"
            ? t("connectors.upload.file-types")
            : t("connectors.upload.processor-offline-desc")}
        </p>
      </div>

      <SupportedFormats formats={formats} />

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
      {uploadList}

      <form onSubmit={sendLink} noValidate className="flex flex-col gap-y-1.5">
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
            className="shrink-0 flex items-center justify-center gap-x-2 px-4 min-h-[44px] md:min-h-0 rounded-lg bg-transparent border border-zinc-500 light:border-slate-500 text-sm font-medium text-slate-50 light:text-slate-900 hover:bg-zinc-800 light:hover:bg-slate-100 transition-colors duration-quick ease-smooth aria-disabled:cursor-wait aria-disabled:opacity-60"
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
      <p className="text-xs text-zinc-400 light:text-slate-600">
        {t("connectors.upload.privacy-notice")}
      </p>
    </div>
  );
}

/** Progress rows for every queued upload, outside the dropzone. */
function UploadList({ files, slug, queue, onSettled }) {
  const { t } = useTranslation();
  if (files.length === 0) return null;
  return (
    <ul
      role="list"
      aria-label={t("workspace-docs.upload.list-label")}
      className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-[180px] overflow-y-auto p-0.5"
    >
      {files.map((entry) => (
        <FileUploadProgress
          key={entry.uid}
          entry={entry}
          slug={slug}
          onUpdate={queue.updateFile}
          onRemove={queue.removeFile}
          onRetry={queue.retryFile}
          onSettled={onSettled}
        />
      ))}
    </ul>
  );
}
