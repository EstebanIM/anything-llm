import { useEffect, useId, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Sidebar from "@/components/SettingsSidebar";
import { Mail } from "lucide-react";
import Admin from "@/models/admin";
import InviteRow from "./InviteRow";
import NewInviteModal from "./NewInviteModal";
import { useModal } from "@/hooks/useModal";
import Modal from "@/components/lib/Modal";
import CTAButton from "@/components/lib/CTAButton";
import TableState from "@/components/lib/TableState";
import { TABLE, TBODY, TH, THEAD } from "@/pages/Admin/Users/AdminTable";
import useFocusAfterRemoval from "@/hooks/useFocusAfterRemoval";

const COLUMNS = 5;

export default function AdminInvites() {
  const { t } = useTranslation();
  const { isOpen, openModal, closeModal } = useModal();
  const [loading, setLoading] = useState(true);
  const [loadFailed, setLoadFailed] = useState(false);
  const [invites, setInvites] = useState([]);
  const headingId = useId();
  const headingRef = useRef(null);
  const tbodyRef = useRef(null);
  const focusAfterRemoval = useFocusAfterRemoval(tbodyRef, headingRef);

  const fetchInvites = async () => {
    const _invites = await Admin.invites();
    setInvites(_invites);
    setLoadFailed(!!_invites?.failed);
    setLoading(false);
  };

  useEffect(() => {
    fetchInvites();
  }, []);

  const updateInvite = (id, patch) =>
    setInvites((prev) =>
      prev.map((invite) =>
        invite.id === id ? { ...invite, ...patch } : invite
      )
    );

  // The revoked row stays (now "Disabled") but loses its buttons: move on to
  // the next row's actions, or to the heading.
  const focusAfterRevoke = (id) => {
    focusAfterRemoval(invites.findIndex((invite) => invite.id === id) + 1);
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
              {t("admin-pages.invites.title")}
            </h1>
            <p className="text-xs leading-[18px] text-theme-text-secondary mt-2">
              {t("admin-pages.invites.description")}
            </p>
          </div>
          <div className="w-full justify-end flex">
            <CTAButton
              type="button"
              onClick={openModal}
              className="mt-3 mr-0 mb-4 md:-mb-6 z-10"
            >
              <Mail strokeWidth={1.5} className="h-4 w-4" aria-hidden="true" />
              {t("admin-pages.invites.create")}
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
                  {t("admin-pages.invites.status")}
                </th>
                <th scope="col" className={TH}>
                  {t("admin-pages.invites.accepted-by")}
                </th>
                <th scope="col" className={TH}>
                  {t("admin-pages.invites.created-by")}
                </th>
                <th scope="col" className={TH}>
                  {t("admin-pages.invites.created")}
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
                    fetchInvites();
                  }}
                />
              ) : invites.length === 0 ? (
                <TableState
                  state="empty"
                  colSpan={COLUMNS}
                  message={t("admin-pages.invites.empty")}
                />
              ) : (
                invites.map((invite) => (
                  <InviteRow
                    key={invite.id}
                    invite={invite}
                    onUpdated={(patch) => updateInvite(invite.id, patch)}
                    onRevoked={() => focusAfterRevoke(invite.id)}
                  />
                ))
              )}
            </tbody>
          </table>
        </div>
        <Modal isOpen={isOpen} onClose={closeModal}>
          <NewInviteModal closeModal={closeModal} onSuccess={fetchInvites} />
        </Modal>
      </main>
    </div>
  );
}
