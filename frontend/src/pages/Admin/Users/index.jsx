import { useEffect, useId, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Sidebar from "@/components/SettingsSidebar";
import { UserPlus } from "lucide-react";
import Admin from "@/models/admin";
import UserRow from "./UserRow";
import useUser from "@/hooks/useUser";
import NewUserModal from "./NewUserModal";
import { useModal } from "@/hooks/useModal";
import Modal from "@/components/lib/Modal";
import CTAButton from "@/components/lib/CTAButton";
import TableState from "@/components/lib/TableState";
import { TABLE, TBODY, TH, THEAD, focusAfterRemoval } from "./AdminTable";

const COLUMNS = 5;

export default function AdminUsers() {
  const { t } = useTranslation();
  const { user: currUser } = useUser();
  const { isOpen, openModal, closeModal } = useModal();
  const [loading, setLoading] = useState(true);
  const [loadFailed, setLoadFailed] = useState(false);
  const [users, setUsers] = useState([]);
  const headingId = useId();
  const headingRef = useRef(null);
  const tbodyRef = useRef(null);

  const fetchUsers = async () => {
    const _users = await Admin.users();
    setUsers(_users);
    setLoadFailed(!!_users?.failed);
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const updateUser = (id, patch) =>
    setUsers((prev) =>
      prev.map((user) => (user.id === id ? { ...user, ...patch } : user))
    );

  const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id);
    setUsers((prev) => prev.filter((user) => user.id !== id));
    focusAfterRemoval(tbodyRef, index, headingRef);
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
              {t("admin-pages.users.title")}
            </h1>
            <p className="text-xs leading-[18px] text-theme-text-secondary">
              {t("admin-pages.users.description")}
            </p>
          </div>
          <div className="w-full justify-end flex">
            <CTAButton
              type="button"
              onClick={openModal}
              className="mt-3 mr-0 mb-4 md:-mb-6 z-10"
            >
              <UserPlus
                strokeWidth={1.5}
                className="h-4 w-4"
                aria-hidden="true"
              />
              {t("admin-pages.users.add")}
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
                  {t("admin-pages.users.username")}
                </th>
                <th scope="col" className={TH}>
                  {t("admin-pages.users.role")}
                </th>
                <th scope="col" className={TH}>
                  {t("admin-pages.users.status")}
                </th>
                <th scope="col" className={TH}>
                  {t("admin-pages.users.created")}
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
                    fetchUsers();
                  }}
                />
              ) : users.length === 0 ? (
                <TableState
                  state="empty"
                  colSpan={COLUMNS}
                  message={t("admin-pages.users.empty")}
                />
              ) : (
                users.map((user) => (
                  <UserRow
                    key={user.id}
                    currUser={currUser}
                    user={user}
                    onUpdated={(patch) => updateUser(user.id, patch)}
                    onDeleted={() => removeUser(user.id)}
                    onEdited={fetchUsers}
                  />
                ))
              )}
            </tbody>
          </table>
        </div>
        <Modal isOpen={isOpen} onClose={closeModal}>
          <NewUserModal
            currUser={currUser}
            closeModal={closeModal}
            onSuccess={fetchUsers}
          />
        </Modal>
      </main>
    </div>
  );
}
