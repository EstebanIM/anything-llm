import { useEffect, useId, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowLeft, Pencil, Play } from "lucide-react";
import ScheduledJobs from "@/models/scheduledJobs";
import usePolling from "@/hooks/usePolling";
import { useModal } from "@/hooks/useModal";
import Modal from "@/components/lib/Modal";
import TableState from "@/components/lib/TableState";
import showToast from "@/utils/toast";
import paths from "@/utils/paths";
import { formatDateTime } from "@/utils/dates";
import JobFormModal from "./JobFormModal";
import RunRow from "./components/RunRow";
import PageLayout, {
  HEADER_BUTTON,
  HEADER_SECONDARY_BUTTON,
  PAGE_DESCRIPTION,
  PAGE_TITLE,
  StatusRegion,
  useStatusAnnouncer,
} from "./components/PageLayout";
import { humanizeCron } from "./utils/cron";
import { isInFlight, translateJobError } from "./utils/format";

const COLUMNS = ["started", "status", "duration", "error"];
const TH =
  "px-4 pb-[18px] text-xs font-semibold uppercase tracking-[1.4px] text-zinc-400 light:text-slate-600 whitespace-nowrap";

export default function RunHistoryPage() {
  const { t, i18n } = useTranslation();
  const { id } = useParams();
  const { isOpen, openModal, closeModal } = useModal();
  const [job, setJob] = useState(null);
  // "loading" | "ready" | "notFound" | "error"
  const [jobState, setJobState] = useState("loading");
  const [runs, setRuns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [triggering, setTriggering] = useState(false);
  const headingId = useId();
  const hasInFlightRun = runs.some((r) => isInFlight(r.status));

  const fetchJob = async () => {
    const { job: foundJob, error } = await ScheduledJobs.get(id);
    if (foundJob) {
      setJob(foundJob);
      setJobState("ready");
    } else {
      // The API answers a missing job with an error message; a failed request has none.
      setJobState(error ? "notFound" : "error");
    }
  };

  const fetchRuns = async () => {
    const { runs: foundRuns } = await ScheduledJobs.runs(id);
    if (Array.isArray(foundRuns)) setRuns(foundRuns);
    setLoading(false);
  };

  const retry = () => {
    setJobState("loading");
    fetchJob();
    fetchRuns();
  };

  useEffect(() => {
    setJobState("loading");
    setLoading(true);
    fetchJob();
    fetchRuns();
  }, [id]);

  // Poll every 5s while visible so new runs appear and running statuses update.
  usePolling(fetchRuns, 5000, jobState === "ready");

  const statusMessage = useStatusAnnouncer(
    runs.map((run) => ({
      key: run.id,
      status: run.status,
      describe: () =>
        t("scheduledJobs.runHistory.announce", {
          date: formatDateTime(run.startedAt),
          status: t(`scheduledJobs.status.${run.status}`),
        }),
    }))
  );

  const handleRunNow = async () => {
    if (triggering) return;
    if (hasInFlightRun) {
      showToast(t("scheduledJobs.toast.triggerSkipped"), "info");
      return;
    }
    setTriggering(true);
    const { success, skipped, error } = await ScheduledJobs.trigger(id);
    setTriggering(false);
    if (!success) {
      showToast(
        translateJobError(t, error, "scheduledJobs.toast.triggerFailed"),
        "error"
      );
      return;
    }
    showToast(
      skipped
        ? t("scheduledJobs.toast.triggerSkipped")
        : t("scheduledJobs.toast.triggered"),
      skipped ? "info" : "success"
    );
    fetchRuns();
  };

  const handleSaved = () => {
    closeModal();
    fetchJob();
  };

  if (jobState === "notFound" || jobState === "error") {
    return (
      <PageLayout>
        <BackLink />
        <div className="flex flex-col items-start gap-4 pt-6">
          <h1 className={PAGE_TITLE}>{t("scheduledJobs.title")}</h1>
          <p
            role="alert"
            className="text-sm text-zinc-300 light:text-slate-700"
          >
            {jobState === "notFound"
              ? t("scheduledJobs.runHistory.jobNotFound")
              : t("scheduledJobs.runHistory.loadFailed")}
          </p>
          {jobState === "error" && (
            <button
              type="button"
              onClick={retry}
              className={HEADER_SECONDARY_BUTTON}
            >
              {t("provider-fields.retry")}
            </button>
          )}
        </div>
      </PageLayout>
    );
  }

  const schedule = humanizeCron(job?.schedule, i18n.language) || job?.schedule;

  return (
    <PageLayout>
      <div className="w-full flex flex-col gap-4 md:flex-row md:items-end md:justify-between pb-6 border-white/10 light:border-slate-300 border-b-2">
        <div className="flex flex-col gap-y-2 min-w-0">
          <BackLink />
          <h1 id={headingId} className={`${PAGE_TITLE} break-words`}>
            {t("scheduledJobs.runHistory.title", { name: job?.name ?? "…" })}
          </h1>
          {schedule && (
            <p className={PAGE_DESCRIPTION}>
              {t("scheduledJobs.runHistory.schedule")} {schedule}
            </p>
          )}
        </div>
        {job && (
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={openModal}
              className={HEADER_SECONDARY_BUTTON}
            >
              <Pencil strokeWidth={1.5} size={16} aria-hidden="true" />
              {t("scheduledJobs.runHistory.edit")}
            </button>
            <button
              type="button"
              onClick={handleRunNow}
              aria-busy={triggering || undefined}
              aria-disabled={triggering || hasInFlightRun || undefined}
              className={HEADER_BUTTON}
            >
              <Play strokeWidth={1.5} size={16} aria-hidden="true" />
              {t("scheduledJobs.runHistory.runNow")}
            </button>
          </div>
        )}
      </div>

      <div className="pt-8">
        <table
          aria-labelledby={headingId}
          className="block md:table w-full text-left"
        >
          <thead className="hidden md:table-header-group">
            <tr className="border-b border-white/10 light:border-slate-300">
              {COLUMNS.map((column) => (
                <th key={column} scope="col" className={TH}>
                  {t(`scheduledJobs.runHistory.table.${column}`)}
                </th>
              ))}
              <th scope="col" className={TH}>
                <span className="sr-only">
                  {t("scheduledJobs.table.actions")}
                </span>
              </th>
            </tr>
          </thead>
          <tbody className="block md:table-row-group">
            {loading ? (
              <TableState state="loading" colSpan={COLUMNS.length + 1} />
            ) : runs.length === 0 ? (
              <TableState
                state="empty"
                colSpan={COLUMNS.length + 1}
                message={
                  <span className="flex flex-col gap-1.5 py-12">
                    <span className="text-base font-semibold text-zinc-50 light:text-slate-950">
                      {t("scheduledJobs.runHistory.emptyTitle")}
                    </span>
                    <span>{t("scheduledJobs.runHistory.emptySubtitle")}</span>
                  </span>
                }
              />
            ) : (
              runs.map((run) => (
                <RunRow
                  key={run.id}
                  run={run}
                  jobId={id}
                  onKilled={fetchRuns}
                />
              ))
            )}
          </tbody>
        </table>
      </div>

      <StatusRegion message={statusMessage} />

      <Modal isOpen={isOpen} onClose={closeModal} size="md">
        <JobFormModal job={job} onClose={closeModal} onSaved={handleSaved} />
      </Modal>
    </PageLayout>
  );
}

function BackLink() {
  const { t } = useTranslation();
  return (
    <Link
      to={paths.settings.scheduledJobs()}
      className="flex items-center gap-2 min-h-[44px] md:min-h-0 w-fit rounded-sm text-sm text-zinc-400 light:text-slate-600 hover:text-zinc-50 light:hover:text-slate-950 transition-colors duration-quick ease-smooth"
    >
      <ArrowLeft strokeWidth={1.5} className="h-4 w-4" aria-hidden="true" />
      {t("scheduledJobs.runHistory.back")}
    </Link>
  );
}
