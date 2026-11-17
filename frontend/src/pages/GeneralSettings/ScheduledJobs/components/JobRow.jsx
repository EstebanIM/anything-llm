import { Link, useNavigate } from "react-router-dom";
import { Play, Pencil, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import paths from "@/utils/paths";
import { SimpleToggleSwitch } from "@/components/lib/Toggle";
import { humanizeCron } from "../utils/cron";
import { isInFlight } from "../utils/format";
import RunStatusBadge from "./StatusBadge";
import TimeText from "./TimeText";
import { ROW_ICON_BUTTON, ROW_ICON_MUTED } from "./PageLayout";

// Table cells below md stack as a card (each value with its own label);
// from md they are a regular table row.
export const ROW =
  "block md:table-row mb-2 md:mb-0 px-3 py-2 md:p-0 rounded-lg md:rounded-none bg-white/5 light:bg-slate-50 md:bg-transparent light:md:bg-transparent md:border-b md:border-white/5 light:md:border-slate-200 hover:bg-white/5 light:hover:bg-slate-100 transition-colors duration-quick ease-smooth cursor-pointer";
const CELL_BASE =
  "block md:table-cell py-1 md:py-3 md:px-4 align-middle text-sm";
export const CELL = `${CELL_BASE} text-zinc-400 light:text-slate-600`;
/** Row header cell (th scope="row"): the item's name or link. */
export const HEADER_CELL = `${CELL_BASE} text-left font-medium text-white light:text-slate-950`;

/** Field name shown before each value while the row is a card. */
export function CellLabel({ children }) {
  return (
    <span className="md:hidden font-medium text-zinc-300 light:text-slate-700">
      {children}:{" "}
    </span>
  );
}

/**
 * Clicking anywhere on a row opens `to`. Mouse only: keyboard and screen
 * reader users get the same page through the link in the row header, and
 * clicks on the row's own controls are left alone.
 */
export function useRowClick(to) {
  const navigate = useNavigate();
  return (e) => {
    if (e.target.closest("a, button, input, select, [role='switch']")) return;
    if (window.getSelection()?.toString()) return;
    navigate(to);
  };
}

export default function JobRow({
  job,
  linkRef,
  triggering = false,
  toggling = false,
  onTrigger,
  onToggle,
  onEdit,
  onDelete,
}) {
  const { t, i18n } = useTranslation();
  const runsPath = paths.settings.scheduledJobRuns(job.id);
  const handleRowClick = useRowClick(runsPath);
  // A job has at most one in-flight run: "Run now" stays focusable but only
  // explains that a run is already going.
  const inFlight = isInFlight(job.latestRun?.status);
  const name = job.name;

  return (
    <tr onClick={handleRowClick} className={ROW}>
      <th scope="row" className={`${HEADER_CELL} break-words`}>
        <Link
          ref={linkRef}
          to={runsPath}
          className="rounded-sm hover:underline underline-offset-2"
        >
          {name}
        </Link>
      </th>
      <td className={CELL}>
        <CellLabel>{t("scheduledJobs.table.schedule")}</CellLabel>
        {humanizeCron(job.schedule, i18n.language) || job.schedule}
      </td>
      <td className={CELL}>
        <CellLabel>{t("scheduledJobs.table.status")}</CellLabel>
        {job.latestRun ? (
          <RunStatusBadge status={job.latestRun.status} />
        ) : (
          t("scheduledJobs.row.neverRun")
        )}
      </td>
      <td className={CELL}>
        <CellLabel>{t("scheduledJobs.table.lastRun")}</CellLabel>
        {job.lastRunAt ? (
          <TimeText value={job.lastRunAt} />
        ) : (
          t("scheduledJobs.row.never")
        )}
      </td>
      <td className={CELL}>
        <CellLabel>{t("scheduledJobs.table.nextRun")}</CellLabel>
        {!job.enabled ? (
          t("scheduledJobs.row.paused")
        ) : job.nextRunAt ? (
          <TimeText value={job.nextRunAt} relative />
        ) : (
          t("scheduledJobs.row.notScheduled")
        )}
      </td>
      <td className={`${CELL} md:w-px`}>
        <div className="flex items-center md:justify-end gap-1 -ml-2.5 md:ml-0">
          <button
            type="button"
            onClick={() => onTrigger(job)}
            aria-disabled={inFlight || triggering || undefined}
            aria-busy={triggering || undefined}
            aria-label={t("scheduledJobs.row.runNow", { name })}
            title={t("scheduledJobs.row.runNow", { name })}
            className={`${ROW_ICON_BUTTON} ${ROW_ICON_MUTED} hover:text-white light:hover:text-slate-950`}
          >
            <Play strokeWidth={1.5} size={16} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => onEdit(job)}
            aria-label={t("scheduledJobs.row.edit", { name })}
            title={t("scheduledJobs.row.edit", { name })}
            className={`${ROW_ICON_BUTTON} ${ROW_ICON_MUTED} hover:text-white light:hover:text-slate-950`}
          >
            <Pencil strokeWidth={1.5} size={16} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => onDelete(job)}
            aria-label={t("scheduledJobs.row.delete", { name })}
            title={t("scheduledJobs.row.delete", { name })}
            className={`${ROW_ICON_BUTTON} ${ROW_ICON_MUTED} hover:text-red-400 light:hover:text-red-700`}
          >
            <X strokeWidth={1.5} size={16} aria-hidden="true" />
          </button>
          <SimpleToggleSwitch
            size="md"
            className="ml-2"
            enabled={job.enabled}
            disabled={toggling}
            onChange={() => onToggle(job)}
            ariaLabel={t("scheduledJobs.row.enable", { name })}
          />
        </div>
      </td>
    </tr>
  );
}
