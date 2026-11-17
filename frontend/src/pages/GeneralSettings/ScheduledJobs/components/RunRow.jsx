import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Circle, LoaderCircle, Square } from "lucide-react";
import paths from "@/utils/paths";
import ScheduledJobs from "@/models/scheduledJobs";
import showToast from "@/utils/toast";
import { formatDateTime } from "@/utils/dates";
import RunStatusBadge from "./StatusBadge";
import TimeText from "./TimeText";
import { CELL, CellLabel, HEADER_CELL, ROW, useRowClick } from "./JobRow";
import { ROW_ICON_BUTTON } from "./PageLayout";
import {
  formatElapsed,
  isInFlight,
  runDurationMs,
  translateJobError,
} from "../utils/format";

/**
 * One row of the run history table. The start time links to the run detail;
 * "Stop" is a sibling button so both stay reachable by keyboard.
 * @param {Object} props
 * @param {Object} props.run - The run object.
 * @param {string} props.jobId - The ID of the job.
 * @param {function} [props.onKilled] - Called after a run is stopped (to refresh the list).
 */
export default function RunRow({ run, jobId, onKilled }) {
  const { t } = useTranslation();
  const [killing, setKilling] = useState(false);
  const linkRef = useRef(null);
  const detailPath = paths.settings.scheduledJobRunDetail(jobId, run.id);
  const handleRowClick = useRowClick(detailPath);
  const unread = !run.readAt && !isInFlight(run.status);
  const startedLabel = formatDateTime(run.startedAt);
  const duration = runDurationMs(run);
  const error = run.error ? translateJobError(t, run.error) : null;

  const handleKill = async () => {
    if (killing) return;
    setKilling(true);
    const { success, error } = await ScheduledJobs.killRun(run.id);
    setKilling(false);

    if (!success) {
      showToast(
        translateJobError(t, error, "scheduledJobs.toast.killFailed"),
        "error"
      );
      return;
    }

    showToast(t("scheduledJobs.toast.killed"), "success");
    // The Stop button goes away with the refreshed status; keep focus on the row.
    linkRef.current?.focus();
    onKilled?.();
  };

  return (
    <tr onClick={handleRowClick} className={ROW}>
      <th scope="row" className={HEADER_CELL}>
        <span className="inline-flex items-center gap-2">
          {unread && (
            <>
              <Circle
                strokeWidth={1.5}
                fill="currentColor"
                aria-hidden="true"
                className="h-2 w-2 shrink-0 text-sky-400 light:text-sky-700"
              />
              <span className="sr-only">
                {t("scheduledJobs.runHistory.unread")},{" "}
              </span>
            </>
          )}
          <Link
            ref={linkRef}
            to={detailPath}
            className="rounded-sm hover:underline underline-offset-2"
          >
            <TimeText value={run.startedAt} />
          </Link>
        </span>
      </th>
      <td className={CELL}>
        <CellLabel>{t("scheduledJobs.runHistory.table.status")}</CellLabel>
        <RunStatusBadge status={run.status} />
      </td>
      <td className={`${CELL} tabular-nums`}>
        <CellLabel>{t("scheduledJobs.runHistory.table.duration")}</CellLabel>
        {duration !== null
          ? formatElapsed(duration)
          : t("scheduledJobs.runHistory.noDuration")}
      </td>
      <td className={`${CELL} md:max-w-[320px]`}>
        <CellLabel>{t("scheduledJobs.runHistory.table.error")}</CellLabel>
        {error ? (
          <span
            title={error}
            className="text-red-400 light:text-red-700 md:block md:truncate"
          >
            {error}
          </span>
        ) : (
          t("scheduledJobs.runHistory.noError")
        )}
      </td>
      <td className={`${CELL} md:w-px max-md:empty:hidden`}>
        {isInFlight(run.status) && (
          <button
            type="button"
            onClick={handleKill}
            aria-busy={killing || undefined}
            aria-disabled={killing || undefined}
            aria-label={t("scheduledJobs.runHistory.stopJob", {
              date: startedLabel,
            })}
            title={t("scheduledJobs.runHistory.stopJob", {
              date: startedLabel,
            })}
            className={`${ROW_ICON_BUTTON} -ml-2.5 md:ml-0 text-red-400 light:text-red-700 hover:bg-red-500/20 light:hover:bg-red-100`}
          >
            {killing ? (
              <LoaderCircle
                strokeWidth={1.5}
                size={16}
                aria-hidden="true"
                className="motion-safe:animate-spin"
              />
            ) : (
              <Square strokeWidth={1.5} size={16} aria-hidden="true" />
            )}
          </button>
        )}
      </td>
    </tr>
  );
}
