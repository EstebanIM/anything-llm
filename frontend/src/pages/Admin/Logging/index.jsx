import Sidebar from "@/components/SettingsSidebar";
import useQuery from "@/hooks/useQuery";
import useMultiUserMode from "@/hooks/useMultiUserMode";
import System from "@/models/system";
import { useEffect, useId, useState } from "react";
import { Trash2 } from "lucide-react";
import LogRow from "./LogRow";
import showToast from "@/utils/toast";
import { ModalDangerButton } from "@/components/lib/Modal";
import ConfirmModal from "@/components/lib/ConfirmModal";
import TableState from "@/components/lib/TableState";
import { formatNumber } from "@/utils/dates";
import { useTranslation } from "react-i18next";
import { TABLE, TBODY, TH, THEAD } from "@/pages/Admin/Users/AdminTable";

// Page size used by the server for /system/event-logs.
const PAGE_SIZE = 10;

const PAGE_BUTTON =
  "min-h-[44px] md:min-h-[36px] px-4 rounded-lg border border-zinc-500 light:border-slate-500 text-sm text-white light:text-slate-900 hover:bg-white/10 light:hover:bg-slate-100 aria-disabled:opacity-40 aria-disabled:cursor-not-allowed transition-colors duration-quick ease-smooth";

export default function AdminLogs() {
  const { t } = useTranslation();
  const query = useQuery();
  const [loading, setLoading] = useState(true);
  const [fetching, setFetching] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [logs, setLogs] = useState([]);
  const [total, setTotal] = useState(0);
  const [offset, setOffset] = useState(Number(query.get("offset") || 0));
  const [canNext, setCanNext] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [clearing, setClearing] = useState(false);
  const headingId = useId();

  const fetchLogs = async (page) => {
    setFetching(true);
    const result = await System.eventLogs(page);
    setFetching(false);
    setLoading(false);
    // The model resolves to [] when the request fails.
    if (!Array.isArray(result?.logs)) {
      setLoadError(true);
      return;
    }
    setLoadError(false);
    setLogs(result.logs);
    setCanNext(!!result.hasPages);
    setTotal(Number(result.totalLogs) || 0);
  };

  useEffect(() => {
    fetchLogs(offset);
  }, [offset]);

  const handleResetLogs = async () => {
    setClearing(true);
    const { success, error } = await System.clearEventLogs();
    setClearing(false);
    setConfirmOpen(false);
    if (!success) {
      showToast(
        t("admin-pages.logs.clear-failed", {
          error: error || t("admin-pages.unknown-error"),
        }),
        "error"
      );
      return;
    }
    showToast(t("admin-pages.logs.cleared"), "success");
    if (offset === 0) fetchLogs(0);
    else setOffset(0);
  };

  return (
    <div className="w-screen h-screen overflow-hidden bg-zinc-950 light:bg-slate-50 flex">
      <Sidebar />
      <main className="relative md:ml-[2px] md:mr-[16px] md:my-[16px] md:rounded-[16px] bg-zinc-900 light:bg-white w-full h-full md:h-[calc(100%-32px)] overflow-y-auto p-4 md:p-0">
        <div className="flex flex-col w-full px-1 md:pl-6 md:pr-[50px] md:py-6 py-16">
          <div className="w-full flex flex-col gap-y-1 pb-6 border-white/10 border-b-2">
            <h1
              id={headingId}
              tabIndex={-1}
              className="text-lg leading-6 font-bold text-theme-text-primary"
            >
              {t("event.title")}
            </h1>
            <p className="text-xs leading-[18px] text-theme-text-secondary mt-2">
              {t("event.description")}
            </p>
          </div>
          <div className="w-full justify-end flex mt-3 mb-4">
            <ModalDangerButton
              type="button"
              onClick={() => setConfirmOpen(true)}
              disabled={loading || total === 0}
              className="gap-x-2"
            >
              <Trash2
                strokeWidth={1.5}
                className="h-4 w-4"
                aria-hidden="true"
              />
              {t("event.clear")}
            </ModalDangerButton>
          </div>
          <LogsContainer
            headingId={headingId}
            loading={loading}
            fetching={fetching}
            loadError={loadError}
            logs={logs}
            offset={offset}
            total={total}
            canNext={canNext}
            onRetry={() => fetchLogs(offset)}
            handleNext={() => canNext && setOffset(offset + 1)}
            handlePrevious={() => offset > 0 && setOffset(offset - 1)}
          />
        </div>
      </main>
      <ConfirmModal
        isOpen={confirmOpen}
        title={t("admin-pages.logs.clear-title")}
        confirmLabel={t("event.clear")}
        busy={clearing}
        onConfirm={handleResetLogs}
        onCancel={() => setConfirmOpen(false)}
      >
        <p>
          {t("admin-pages.logs.clear-body", {
            count: total,
            total: formatNumber(total),
          })}
        </p>
      </ConfirmModal>
    </div>
  );
}

function LogsContainer({
  headingId,
  loading,
  fetching,
  loadError,
  logs,
  offset,
  total,
  canNext,
  onRetry,
  handleNext,
  handlePrevious,
}) {
  const { t } = useTranslation();
  const multiUserMode = useMultiUserMode();
  const columns = multiUserMode ? 4 : 3;
  const pages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const showPagination = !loading && !loadError && (pages > 1 || offset > 0);

  return (
    <>
      <table
        aria-labelledby={headingId}
        aria-busy={loading || fetching || undefined}
        className={TABLE}
      >
        <thead className={THEAD}>
          <tr>
            <th scope="col" className={TH}>
              {t("event.table.type")}
            </th>
            {multiUserMode && (
              <th scope="col" className={TH}>
                {t("event.table.user")}
              </th>
            )}
            <th scope="col" className={TH}>
              {t("event.table.occurred")}
            </th>
            <th scope="col" className={TH}>
              <span className="sr-only">{t("admin-pages.logs.details")}</span>
            </th>
          </tr>
        </thead>
        <tbody className={TBODY}>
          {loading ? (
            <TableState state="loading" colSpan={columns} />
          ) : loadError ? (
            <TableState
              state="error"
              colSpan={columns}
              message={t("admin-pages.logs.load-failed")}
              onRetry={onRetry}
            />
          ) : logs.length === 0 ? (
            <TableState
              state="empty"
              colSpan={columns}
              message={t("admin-pages.logs.empty")}
            />
          ) : (
            logs.map((log) => (
              <LogRow key={log.id} log={log} columns={columns} />
            ))
          )}
        </tbody>
      </table>
      {showPagination && (
        <nav
          aria-label={t("admin-pages.logs.pagination")}
          className="flex w-full justify-between items-center gap-x-4 mt-6"
        >
          <button
            type="button"
            onClick={handlePrevious}
            aria-disabled={offset === 0 || undefined}
            className={PAGE_BUTTON}
          >
            {t("common.previous")}
          </button>
          <p
            aria-live="polite"
            className="text-xs text-theme-text-secondary text-center"
          >
            {t("admin-pages.logs.page", {
              page: formatNumber(offset + 1),
              pages: formatNumber(Math.max(pages, offset + 1)),
            })}
          </p>
          <button
            type="button"
            onClick={handleNext}
            aria-disabled={!canNext || undefined}
            className={PAGE_BUTTON}
          >
            {t("common.next")}
          </button>
        </nav>
      )}
    </>
  );
}
