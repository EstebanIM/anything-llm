import { useEffect, useId, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowLeft } from "lucide-react";
import Sidebar from "@/components/SettingsSidebar";
import System from "@/models/system";
import paths from "@/utils/paths";
import TableState from "@/components/lib/TableState";
import {
  TABLE,
  TBODY,
  TH,
  THEAD,
  focusAfterRemoval,
} from "@/pages/Admin/Users/AdminTable";
import DocumentSyncQueueRow from "./DocumentSyncQueueRow";

const COLUMNS = 5;

export default function LiveDocumentSyncManager() {
  const { t } = useTranslation();
  const headingId = useId();
  const headingRef = useRef(null);

  return (
    <div className="w-screen h-screen overflow-hidden bg-zinc-950 light:bg-slate-50 flex">
      <Sidebar />
      <main className="relative md:ml-[2px] md:mr-[16px] md:my-[16px] md:rounded-[16px] bg-zinc-900 light:bg-white w-full h-full md:h-[calc(100%-32px)] overflow-y-auto p-4 md:p-0">
        <div className="flex flex-col w-full px-1 md:pl-6 md:pr-[50px] md:py-6 py-16">
          <Link
            to={paths.settings.experimental()}
            className="inline-flex items-center gap-x-1.5 w-fit min-h-[44px] md:min-h-0 mb-3 text-sm text-theme-text-secondary hover:text-white light:hover:text-slate-900 underline transition-colors duration-quick ease-smooth"
          >
            <ArrowLeft strokeWidth={1.5} size={16} aria-hidden="true" />
            {t("admin-pages.watched.back")}
          </Link>
          <div className="w-full flex flex-col gap-y-1 pb-6 border-white/10 border-b-2">
            <h1
              id={headingId}
              ref={headingRef}
              tabIndex={-1}
              className="text-lg leading-6 font-bold text-theme-text-primary"
            >
              {t("admin-pages.watched.title")}
            </h1>
            <p className="text-xs leading-[18px] text-theme-text-secondary">
              {t("admin-pages.watched.description")}
            </p>
          </div>
          <WatchedDocumentsContainer
            headingId={headingId}
            headingRef={headingRef}
          />
        </div>
      </main>
    </div>
  );
}

function WatchedDocumentsContainer({ headingId, headingRef }) {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [queues, setQueues] = useState([]);
  const tbodyRef = useRef(null);

  useEffect(() => {
    async function fetchData() {
      const _queues = await System.experimentalFeatures.liveSync.queues();
      setQueues(_queues);
      setLoading(false);
    }
    fetchData();
  }, []);

  const removeQueue = (id) => {
    const index = queues.findIndex((queue) => queue.id === id);
    setQueues((prev) => prev.filter((queue) => queue.id !== id));
    focusAfterRemoval(tbodyRef, index, headingRef);
  };

  return (
    <table
      aria-labelledby={headingId}
      aria-busy={loading || undefined}
      className={`${TABLE} mt-6`}
    >
      <thead className={THEAD}>
        <tr>
          <th scope="col" className={TH}>
            {t("admin-pages.watched.document")}
          </th>
          <th scope="col" className={TH}>
            {t("admin-pages.watched.last-synced")}
          </th>
          <th scope="col" className={TH}>
            {t("admin-pages.watched.next-sync")}
          </th>
          <th scope="col" className={TH}>
            {t("admin-pages.watched.created")}
          </th>
          <th scope="col" className={TH}>
            <span className="sr-only">{t("api.actions")}</span>
          </th>
        </tr>
      </thead>
      <tbody ref={tbodyRef} className={TBODY}>
        {loading ? (
          <TableState state="loading" colSpan={COLUMNS} />
        ) : queues.length === 0 ? (
          <TableState
            state="empty"
            colSpan={COLUMNS}
            message={t("admin-pages.watched.empty")}
          />
        ) : (
          queues.map((queue) => (
            <DocumentSyncQueueRow
              key={queue.id}
              queue={queue}
              onRemoved={() => removeQueue(queue.id)}
            />
          ))
        )}
      </tbody>
    </table>
  );
}
