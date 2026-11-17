import i18n from "@/i18n";

const locale = () => i18n.resolvedLanguage || i18n.language || "en";

function unit(value, name, fractionDigits = 0) {
  return new Intl.NumberFormat(locale(), {
    style: "unit",
    unit: name,
    unitDisplay: "short",
    maximumFractionDigits: fractionDigits,
  }).format(value);
}

/**
 * Elapsed time in the UI language: "850 ms", "5,2 s", "3 min 4 s", "1 h 5 min".
 * @param {number} ms
 * @returns {string} "" when the value is not a usable duration
 */
export function formatElapsed(ms) {
  if (!Number.isFinite(ms) || ms < 0) return "";
  if (ms < 1000) return unit(Math.round(ms), "millisecond");
  const seconds = ms / 1000;
  if (seconds < 60) return unit(seconds, "second", 1);
  const totalSeconds = Math.floor(seconds);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const rest = totalSeconds % 60;
  if (hours > 0)
    return minutes
      ? `${unit(hours, "hour")} ${unit(minutes, "minute")}`
      : unit(hours, "hour");
  return rest
    ? `${unit(minutes, "minute")} ${unit(rest, "second")}`
    : unit(minutes, "minute");
}

export const isInFlight = (status) =>
  status === "running" || status === "queued";

/**
 * Duration of a run in ms: start to finish once it ended, start to now while
 * it is running, null while it waits in the queue or when times are missing.
 * @param {{status: string, startedAt?: string, completedAt?: string}} run
 * @param {number} [now]
 * @returns {number|null}
 */
export function runDurationMs(run, now = Date.now()) {
  const start = run?.startedAt ? new Date(run.startedAt).getTime() : NaN;
  if (!Number.isFinite(start) || run.status === "queued") return null;
  const end =
    run.status === "running"
      ? now
      : run.completedAt
        ? new Date(run.completedAt).getTime()
        : NaN;
  return Number.isFinite(end) && end >= start ? end - start : null;
}

/**
 * The server and the API client report errors as fixed English strings.
 * Show the known ones in the UI language; anything else is passed through.
 * @param {(key: string, options?: object) => string} t
 * @param {string} message
 * @returns {string}
 */
export function translateJobError(t, message) {
  if (!message || typeof message !== "string") return message;
  const limit = /maximum of (\d+) active scheduled jobs/i.exec(message);
  if (limit) return t("scheduledJobs.errors.activeLimit", { limit: limit[1] });
  const known = {
    "Invalid cron expression": "scheduledJobs.modal.cronInvalid",
    "Job execution timed out": "scheduledJobs.errors.timedOut",
    "Job killed by user": "scheduledJobs.errors.killed",
    "Server restarted during execution": "scheduledJobs.errors.serverRestarted",
    "Job not found": "scheduledJobs.runHistory.jobNotFound",
    "Run not found": "scheduledJobs.runDetail.notFound",
    "Only running or queued jobs can be killed":
      "scheduledJobs.errors.notKillable",
  }[message.trim()];
  return known ? t(known) : message;
}
