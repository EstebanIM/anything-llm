import { useEffect, useId, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Sidebar from "@/components/SettingsSidebar";
import { BookOpen, ShieldCheck } from "lucide-react";
import Admin from "@/models/admin";
import System from "@/models/system";
import WorkspaceRow from "./WorkspaceRow";
import NewWorkspaceModal from "./NewWorkspaceModal";
import { useModal } from "@/hooks/useModal";
import Modal from "@/components/lib/Modal";
import CTAButton from "@/components/lib/CTAButton";
import TableState from "@/components/lib/TableState";
import { TABLE, TBODY, TH, THEAD } from "@/pages/Admin/Users/AdminTable";
import useFocusAfterRemoval from "@/hooks/useFocusAfterRemoval";

const COLUMNS = 5;

export default function AdminWorkspaces() {
  const { t } = useTranslation();
  const { isOpen, openModal, closeModal } = useModal();
  const [loading, setLoading] = useState(true);
  const [loadFailed, setLoadFailed] = useState(false);
  const [workspaces, setWorkspaces] = useState([]);
  const [deletionProtected, setDeletionProtected] = useState(false);
  const headingId = useId();
  const headingRef = useRef(null);
  const tbodyRef = useRef(null);
  const focusAfterRemoval = useFocusAfterRemoval(tbodyRef, headingRef);

  const fetchData = async () => {
    const [_workspaces, _settings] = await Promise.all([
      Admin.workspaces(),
      System.keys(),
    ]);
    setWorkspaces(_workspaces);
    setLoadFailed(!!_workspaces?.failed);
    setDeletionProtected(_settings?.WorkspaceDeletionProtection === true);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const removeWorkspace = (id) => {
    focusAfterRemoval(workspaces.findIndex((workspace) => workspace.id === id));
    setWorkspaces((prev) => prev.filter((workspace) => workspace.id !== id));
  };

  return (
    <div className="w-screen h-screen overflow-hidden bg-zinc-950 light:bg-slate-50 flex">
      <Sidebar />
      <main className="relative md:ml-[2px] md:mr-[16px] md:my-[16px] md:rounded-[16px] bg-zinc-900 light:bg-white w-full h-full md:h-[calc(100%-32px)] overflow-y-auto p-4 md:p-0">
        <div className="flex flex-col w-full px-1 md:pl-6 md:pr-[50px] md:py-6 py-16">
          <div className="w-full flex flex-col gap-y-1 pb-6 border-white/10 border-b-2">
            <h1
              id={headingId}
              ref={headingRef}
              tabIndex={-1}
              className="text-lg leading-6 font-bold text-theme-text-primary"
            >
              {t("admin-pages.workspaces.title")}
            </h1>
            <p className="text-xs leading-[18px] text-theme-text-secondary">
              {t("admin-pages.workspaces.description")}
            </p>
            {deletionProtected && (
              <p className="mt-2 flex items-start gap-x-2 text-xs leading-[18px] text-theme-text-secondary">
                <ShieldCheck
                  strokeWidth={1.5}
                  className="h-4 w-4 shrink-0"
                  aria-hidden="true"
                />
                {t("admin-pages.workspaces.deletion-protected")}
              </p>
            )}
          </div>
          <div className="w-full justify-end flex">
            <CTAButton
              type="button"
              onClick={openModal}
              className="mt-3 mr-0 mb-4 md:-mb-6 z-10"
            >
              <BookOpen
                strokeWidth={1.5}
                className="h-4 w-4"
                aria-hidden="true"
              />
              {t("admin-pages.workspaces.new")}
            </CTAButton>
          </div>
          <table
            aria-labelledby={headingId}
            aria-busy={loading || undefined}
            className={TABLE}
          >
            <thead className={THEAD}>
              <tr>
                <th scope="col" className={TH}>
                  {t("admin-pages.workspaces.name")}
                </th>
                <th scope="col" className={TH}>
                  {t("admin-pages.workspaces.link")}
                </th>
                <th scope="col" className={TH}>
                  {t("admin-pages.workspaces.members")}
                </th>
                <th scope="col" className={TH}>
                  {t("admin-pages.workspaces.created")}
                </th>
                <th scope="col" className={TH}>
                  <span className="sr-only">{t("api.actions")}</span>
                </th>
              </tr>
            </thead>
            <tbody ref={tbodyRef} className={TBODY}>
              {loading ? (
                <TableState state="loading" colSpan={COLUMNS} />
              ) : loadFailed ? (
                <TableState
                  state="error"
                  colSpan={COLUMNS}
                  onRetry={() => {
                    setLoading(true);
                    fetchData();
                  }}
                />
              ) : workspaces.length === 0 ? (
                <TableState
                  state="empty"
                  colSpan={COLUMNS}
                  message={t("admin-pages.workspaces.empty")}
                />
              ) : (
                workspaces.map((workspace) => (
                  <WorkspaceRow
                    key={workspace.id}
                    workspace={workspace}
                    deletionProtected={deletionProtected}
                    onDeleted={() => removeWorkspace(workspace.id)}
                  />
                ))
              )}
            </tbody>
          </table>
        </div>
        <Modal isOpen={isOpen} onClose={closeModal}>
          <NewWorkspaceModal closeModal={closeModal} onSuccess={fetchData} />
        </Modal>
      </main>
    </div>
  );
}
