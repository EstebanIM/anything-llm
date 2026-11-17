import { rawMessage, serverErrorMessage } from "@/utils/serverErrors";

export { formatElapsed } from "@/utils/dates";

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

/** Fixed English messages from the server and the API client. */
const JOB_ERRORS = [
  [/^Invalid cron expression/i, "scheduledJobs.modal.cronInvalid"],
  [/^Job execution timed out/i, "scheduledJobs.errors.timedOut"],
  [/^Job killed by user/i, "scheduledJobs.errors.killed"],
  [
    /^Server restarted during execution/i,
    "scheduledJobs.errors.serverRestarted",
  ],
  [/^Job not found/i, "scheduledJobs.runHistory.jobNotFound"],
  [/^Run not found/i, "scheduledJobs.runDetail.notFound"],
  [
    /^Only running or queued jobs can be killed/i,
    "scheduledJobs.errors.notKillable",
  ],
];

/**
 * A job or run error in the UI language: the known server messages, the
 * generic network and permission errors, and `fallbackKey` for the rest (the
 * raw text goes to the console; run pages also offer it to copy).
 * @param {(key: string, options?: object) => string} t
 * @param {unknown} message - string, Error or `{ error }`
 * @param {string} [fallbackKey]
 * @returns {string}
 */
export function translateJobError(
  t,
  message,
  fallbackKey = "notices.job-run-failed"
) {
  const limit = /maximum of (\d+) active scheduled jobs/i.exec(
    rawMessage(message)
  );
  if (limit) return t("scheduledJobs.errors.activeLimit", { limit: limit[1] });
  return serverErrorMessage(message, t, fallbackKey, { known: JOB_ERRORS });
}
