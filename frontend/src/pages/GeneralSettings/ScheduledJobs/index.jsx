import { useEffect, useId, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Bell, BellOff } from "lucide-react";
import ScheduledJobs from "@/models/scheduledJobs";
import useWebPushNotifications, {
  subscribeToPushNotifications,
} from "@/hooks/useWebPushNotifications";
import usePolling from "@/hooks/usePolling";
import { useModal } from "@/hooks/useModal";
import Modal from "@/components/lib/Modal";
import ConfirmModal from "@/components/lib/ConfirmModal";
import TableState from "@/components/lib/TableState";
import showToast from "@/utils/toast";
import JobFormModal from "./JobFormModal";
import JobRow from "./components/JobRow";
import PageLayout, {
  HEADER_BUTTON,
  PAGE_DESCRIPTION,
  PAGE_TITLE,
  StatusRegion,
  useStatusAnnouncer,
} from "./components/PageLayout";
import { isInFlight, translateJobError } from "./utils/format";

const COLUMNS = ["name", "schedule", "status", "lastRun", "nextRun"];
const TH =
  "px-4 pb-[18px] text-xs font-semibold uppercase tracking-[1.4px] text-zinc-400 light:text-slate-600 whitespace-nowrap";

export default function ScheduledJobsPage() {
  const { t } = useTranslation();
  useWebPushNotifications(false);
  const { isOpen, openModal, closeModal } = useModal();
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [editingJob, setEditingJob] = useState(null);
  const [pendingDelete, setPendingDelete] = useState(null);
  const [deleting, setDeleting] = useState(false);
  const [triggeringId, setTriggeringId] = useState(null);
  const [togglingId, setTogglingId] = useState(null);
  // Job id whose row link takes focus after the next render ("heading" for the h1).
  const [focusTarget, setFocusTarget] = useState(null);
  const headingId = useId();
  const headingRef = useRef(null);
  const rowLinks = useRef(new Map());
  const loaded = useRef(false);

  useEffect(() => {
    if (focusTarget === null) return;
    (rowLinks.current.get(focusTarget) || headingRef.current)?.focus();
    setFocusTarget(null);
  }, [focusTarget, jobs]);

  const fetchJobs = async () => {
    const { jobs: foundJobs, error } = await ScheduledJobs.list();
    if (error || !Array.isArray(foundJobs)) {
      // A failed background refresh keeps the rows already on screen.
      if (!loaded.current) setLoadError(true);
    } else {
      loaded.current = true;
      setLoadError(false);
      setJobs(foundJobs);
    }
    setLoading(false);
  };

  const retry = () => {
    setLoading(true);
    setLoadError(false);
    fetchJobs();
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  // Poll every 5s while tab is visible so status badges and run timestamps stay in sync.
  usePolling(fetchJobs, 5000);

  const statusMessage = useStatusAnnouncer(
    jobs.map((job) => ({
      key: job.id,
      status: job.latestRun?.status ?? "none",
      describe: () =>
        t("scheduledJobs.announce.jobStatus", {
          name: job.name,
          status: t(`scheduledJobs.status.${job.latestRun?.status}`),
        }),
    }))
  );

  const confirmDelete = async () => {
    const job = pendingDelete;
    if (!job || deleting) return;
    setDeleting(true);
    const { success } = await ScheduledJobs.delete(job.id);
    setDeleting(false);
    setPendingDelete(null);
    if (!success) {
      showToast(t("scheduledJobs.toast.deleteFailed"), "error", {
        clear: true,
      });
      return;
    }
    const index = jobs.findIndex((j) => j.id === job.id);
    const remaining = jobs.filter((j) => j.id !== job.id);
    setJobs(remaining);
    showToast(t("scheduledJobs.toast.deleted"), "success", { clear: true });
    // The row and its delete button are gone: land on the next row or the heading.
    const next = remaining[index] ?? remaining[index - 1];
    setFocusTarget(next?.id ?? "heading");
  };

  const handleToggle = async (job) => {
    if (togglingId) return;
    setTogglingId(job.id);
    const result = await ScheduledJobs.toggle(job.id);
    setTogglingId(null);
    if (!result?.job) {
      showToast(
        translateJobError(t, result?.error, "scheduledJobs.toast.toggleFailed"),
        "error",
        { clear: true }
      );
      return;
    }
    setJobs((prev) =>
      prev.map((j) => (j.id === job.id ? { ...j, ...result.job } : j))
    );
  };

  const handleTrigger = async (job) => {
    if (triggeringId) return;
    if (isInFlight(job.latestRun?.status)) {
      showToast(t("scheduledJobs.toast.triggerSkipped"), "info", {
        clear: true,
      });
      return;
    }
    setTriggeringId(job.id);
    const { success, skipped, error } = await ScheduledJobs.trigger(job.id);
    setTriggeringId(null);
    if (!success) {
      showToast(
        translateJobError(t, error, "scheduledJobs.toast.triggerFailed"),
        "error",
        { clear: true }
      );
    } else if (skipped) {
      showToast(t("scheduledJobs.toast.triggerSkipped"), "info", {
        clear: true,
      });
    } else {
      showToast(t("scheduledJobs.toast.triggered"), "success", { clear: true });
    }
    fetchJobs();
  };

  const handleEdit = (job) => {
    setEditingJob(job);
    openModal();
  };

  const handleCreate = () => {
    setEditingJob(null);
    openModal();
  };

  const handleSaved = async (savedJob) => {
    const created = !editingJob;
    closeModal();
    await fetchJobs();
    // The empty-state button that opened the form is gone after the first job.
    if (created && savedJob?.id) setFocusTarget(savedJob.id);
  };

  const newJobButton = (
    <button type="button" onClick={handleCreate} className={HEADER_BUTTON}>
      {t("scheduledJobs.newJob")}
    </button>
  );

  return (
    <PageLayout>
      <Header
        headingId={headingId}
        headingRef={headingRef}
        action={!loading && jobs.length > 0 ? newJobButton : null}
      />

      <div className="pt-8">
        <table
          aria-labelledby={headingId}
          className="block md:table w-full text-left"
        >
          <thead className="hidden md:table-header-group">
            <tr className="border-b border-white/10 light:border-slate-300">
              {COLUMNS.map((column) => (
                <th key={column} scope="col" className={TH}>
                  {t(`scheduledJobs.table.${column}`)}
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
            ) : loadError ? (
              <TableState
                state="error"
                colSpan={COLUMNS.length + 1}
                message={t("scheduledJobs.loadFailed")}
                onRetry={retry}
              />
            ) : jobs.length === 0 ? (
              <TableState
                state="empty"
                colSpan={COLUMNS.length + 1}
                message={
                  <span className="flex flex-col gap-1.5 py-12">
                    <span className="text-base font-semibold text-zinc-50 light:text-slate-950">
                      {t("scheduledJobs.emptyTitle")}
                    </span>
                    <span>{t("scheduledJobs.emptySubtitle")}</span>
                  </span>
                }
                action={newJobButton}
              />
            ) : (
              jobs.map((job) => (
                <JobRow
                  key={job.id}
                  job={job}
                  linkRef={(el) =>
                    el
                      ? rowLinks.current.set(job.id, el)
                      : rowLinks.current.delete(job.id)
                  }
                  triggering={triggeringId === job.id}
                  toggling={togglingId === job.id}
                  onTrigger={handleTrigger}
                  onToggle={handleToggle}
                  onEdit={handleEdit}
                  onDelete={setPendingDelete}
                />
              ))
            )}
          </tbody>
        </table>
      </div>

      <StatusRegion message={statusMessage} />

      <Modal isOpen={isOpen} onClose={closeModal} size="md">
        <JobFormModal
          job={editingJob}
          onClose={closeModal}
          onSaved={handleSaved}
        />
      </Modal>

      <ConfirmModal
        isOpen={!!pendingDelete}
        title={t("scheduledJobs.deleteTitle", { name: pendingDelete?.name })}
        confirmLabel={t("settings-pages.delete")}
        busy={deleting}
        onConfirm={confirmDelete}
        onCancel={() => setPendingDelete(null)}
      >
        <p>{t("scheduledJobs.confirmDelete")}</p>
      </ConfirmModal>
    </PageLayout>
  );
}

function Header({ headingId, headingRef, action }) {
  const { t } = useTranslation();
  const notifications = useNotificationPermission(headingRef);

  return (
    <div className="w-full flex flex-col gap-4 md:flex-row md:items-end md:justify-between pb-6 border-white/10 light:border-slate-300 border-b-2">
      <div className="flex flex-col gap-y-2">
        <h1
          id={headingId}
          ref={headingRef}
          tabIndex={-1}
          className={PAGE_TITLE}
        >
          {t("scheduledJobs.title")}
        </h1>
        <p className={PAGE_DESCRIPTION}>{t("scheduledJobs.description")}</p>
        {notifications.permission === "denied" && (
          <p
            role="status"
            className="flex items-start gap-1.5 text-xs leading-4 text-zinc-400 light:text-slate-600 max-w-[700px]"
          >
            <BellOff
              strokeWidth={1.5}
              size={14}
              aria-hidden="true"
              className="shrink-0 mt-px"
            />
            {t("scheduledJobs.notificationsBlocked")}
          </p>
        )}
      </div>
      <div className="flex items-center gap-x-2 shrink-0">
        {notifications.permission === "default" && (
          <button
            type="button"
            onClick={notifications.request}
            aria-label={t("scheduledJobs.enableNotifications")}
            title={t("scheduledJobs.enableNotifications")}
            className="border-none flex items-center justify-center w-11 h-11 md:w-9 md:h-9 rounded-lg text-orange-400 light:text-orange-700 hover:bg-white/10 light:hover:bg-slate-200 transition-colors duration-quick ease-smooth"
          >
            <Bell strokeWidth={1.5} size={20} aria-hidden="true" />
          </button>
        )}
        {action}
      </div>
    </div>
  );
}

/**
 * Browser notification permission for job results. "default" shows the bell,
 * "denied" explains how to unblock it, "granted" and "unsupported" hide both.
 */
function useNotificationPermission(headingRef) {
  const { t } = useTranslation();
  const supported =
    "serviceWorker" in navigator &&
    "PushManager" in window &&
    typeof Notification !== "undefined";
  const [permission, setPermission] = useState(
    supported ? Notification.permission : "unsupported"
  );

  const request = async () => {
    const subscribed = await subscribeToPushNotifications();
    const next = Notification.permission;
    setPermission(next);
    if (next === "default") return;
    if (next === "granted") {
      // Permission alone is not enough: the subscription can still fail
      // (no server key, service worker or network error).
      if (subscribed)
        showToast(t("scheduledJobs.notificationsEnabled"), "success", {
          clear: true,
        });
      else
        showToast(t("notices.notifications-failed"), "error", { clear: true });
    }
    // The bell disappears once the browser answers: keep focus on the page.
    setTimeout(() => headingRef.current?.focus(), 0);
  };

  return { permission, request };
}
