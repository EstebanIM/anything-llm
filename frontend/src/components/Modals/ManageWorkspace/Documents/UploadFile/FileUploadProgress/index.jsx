import { memo, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { CircleCheck, CircleX, LoaderCircle, RotateCw, X } from "lucide-react";
import Workspace from "@/models/workspace";
import { humanFileSize, milliToHms } from "@/utils/numbers";

/** How long a finished upload stays in the list before it leaves. */
const COMPLETE_LINGER_MS = 5000;
/** Matches duration-quick, the exit fade. */
const EXIT_MS = 150;

/**
 * One row of the upload list. Starts its upload on mount and reports the
 * result to the queue; a retry gives the entry a new uid, which remounts the
 * row and uploads again. Failed and rejected rows stay until dismissed.
 *
 * @param {Object} props
 * @param {object} props.entry - queue entry from useUploadQueue
 * @param {string} props.slug - workspace slug
 * @param {(uid: string, patch: object) => void} props.onUpdate
 * @param {(uid: string) => void} props.onRemove
 * @param {(uid: string) => void} props.onRetry
 * @param {() => void} [props.onSettled] - an upload finished (either way)
 */
function FileUploadProgress({
  entry,
  slug,
  onUpdate,
  onRemove,
  onRetry,
  onSettled,
}) {
  const { t } = useTranslation();
  const { uid, file, status, error, rejected, folderName, relativePath } =
    entry;
  const [timerMs, setTimerMs] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const displayName = relativePath || file?.name || "";

  // Every timer this row starts, so nothing fires after unmount.
  const timers = useRef([]);
  useEffect(() => () => timers.current.forEach((id) => clearTimeout(id)), []);

  useEffect(() => {
    if (!file || rejected) return;
    let cancelled = false;

    async function uploadFile() {
      const start = Date.now();
      const formData = new FormData();

      // folderName/metadata MUST be appended before the file part - multer
      // only populates request.body with text fields it saw before the file,
      // so reordering these silently breaks folder uploads server-side.
      if (!!folderName && !!relativePath) {
        formData.append("folderName", folderName);
        formData.append(
          "metadata",
          JSON.stringify({ title: relativePath, docSource: relativePath })
        );
        // Flatten the relative path into the upload name so files from
        // different subfolders that share a basename cannot clobber each
        // other in the document processor's hotdir mid-upload.
        formData.append("file", file, relativePath.replace(/\//g, "_"));
      } else {
        formData.append("file", file, file.name);
      }

      const timer = setInterval(() => setTimerMs(Date.now() - start), 100);
      let ok = false;
      let message = null;
      try {
        const { response, data } = await Workspace.uploadFile(slug, formData);
        ok = response.ok;
        message = data?.error ?? null;
      } catch (e) {
        message = e.message;
      }
      clearInterval(timer);
      if (cancelled) return;
      onUpdate(
        uid,
        ok ? { status: "complete" } : { status: "failed", error: message }
      );
      onSettled?.();
    }
    uploadFile();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (status !== "complete") return;
    timers.current.push(
      setTimeout(() => {
        setLeaving(true);
        timers.current.push(setTimeout(() => onRemove(uid), EXIT_MS));
      }, COMPLETE_LINGER_MS)
    );
  }, [status]);

  const failed = status === "failed" || status === "rejected";
  const detail = failed
    ? rejected
      ? t("workspace-docs.upload.rejected")
      : error || t("workspace-docs.upload.failed")
    : status === "complete"
      ? t("workspace-docs.upload.done")
      : `${humanFileSize(file?.size ?? 0)} · ${milliToHms(timerMs)}`;

  return (
    <li
      className={`animate-in fade-in-0 transition-opacity duration-quick ease-smooth flex items-center gap-x-3 min-h-14 px-3 py-2 rounded-lg border ${
        leaving ? "opacity-0" : "opacity-100"
      } ${
        failed
          ? "bg-red-500/10 border-red-400/60 light:bg-red-50 light:border-red-600"
          : "bg-zinc-800 border-zinc-700 light:bg-white light:border-slate-300"
      }`}
    >
      <span className="w-5 h-5 shrink-0 flex items-center justify-center">
        {status === "uploading" && (
          <LoaderCircle
            strokeWidth={1.5}
            size={18}
            aria-hidden="true"
            className="animate-spin text-zinc-300 light:text-slate-600"
          />
        )}
        {status === "complete" && (
          <CircleCheck
            strokeWidth={1.5}
            size={18}
            aria-hidden="true"
            className="text-green-400 light:text-green-700"
          />
        )}
        {failed && (
          <CircleX
            strokeWidth={1.5}
            size={18}
            aria-hidden="true"
            className="text-red-400 light:text-red-700"
          />
        )}
      </span>
      <div className="flex-1 min-w-0">
        <p
          className="text-xs font-medium truncate text-slate-50 light:text-slate-900"
          title={displayName}
        >
          {displayName}
        </p>
        <p
          className={`text-xs break-words ${
            failed
              ? "text-red-300 light:text-red-700"
              : "text-zinc-400 light:text-slate-600"
          }`}
        >
          {detail}
        </p>
      </div>
      {failed && (
        <div className="flex items-center gap-x-1 shrink-0">
          {!rejected && (
            <button
              type="button"
              onClick={() => onRetry(uid)}
              aria-label={t("workspace-docs.upload.retry-file", {
                name: displayName,
              })}
              className="border-none bg-transparent h-11 md:h-8 px-2 rounded-md flex items-center gap-x-1.5 text-xs font-medium text-slate-50 light:text-slate-900 hover:bg-zinc-700 light:hover:bg-slate-200 transition-colors duration-quick ease-smooth"
            >
              <RotateCw strokeWidth={1.5} size={14} aria-hidden="true" />
              {t("provider-fields.retry")}
            </button>
          )}
          <button
            type="button"
            onClick={() => onRemove(uid)}
            aria-label={t("workspace-docs.upload.dismiss-file", {
              name: displayName,
            })}
            className="border-none bg-transparent w-11 h-11 md:w-8 md:h-8 rounded-md flex items-center justify-center text-zinc-300 light:text-slate-600 hover:bg-zinc-700 light:hover:bg-slate-200 transition-colors duration-quick ease-smooth"
          >
            <X strokeWidth={1.5} size={16} aria-hidden="true" />
          </button>
        </div>
      )}
    </li>
  );
}

export default memo(FileUploadProgress);
