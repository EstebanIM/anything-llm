import Modal from "@/components/lib/Modal";
import { useModal } from "@/hooks/useModal";
import Admin from "@/models/admin";
import { useEffect, useId, useState } from "react";
import { useTranslation } from "react-i18next";
import * as Skeleton from "react-loading-skeleton";
import showToast from "@/utils/toast";
import AddMemberModal from "./AddMemberModal";
import WorkspaceMemberRow from "./WorkspaceMemberRow";
import CTAButton from "@/components/lib/CTAButton";
import { SECTION_HEADING } from "../components/SettingsField";

export default function Members({ workspace }) {
  const { t } = useTranslation();
  const headingId = useId();
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [workspaceUsers, setWorkspaceUsers] = useState([]);
  const [adminWorkspace, setAdminWorkspace] = useState(null);
  // While the members are being saved the dialog cannot be dismissed.
  const [savingMembers, setSavingMembers] = useState(false);

  const { isOpen, openModal, closeModal } = useModal();

  async function fetchMembers() {
    const [workspaceUsers, adminWorkspaces] = await Promise.all([
      Admin.workspaceUsers(workspace.id),
      Admin.workspaces(),
    ]);
    setAdminWorkspace(
      adminWorkspaces.find(
        (adminWorkspace) => adminWorkspace.id === workspace.id
      )
    );
    setWorkspaceUsers(workspaceUsers);
  }

  useEffect(() => {
    async function fetchData() {
      const [_users] = await Promise.all([Admin.users(), fetchMembers()]);
      setUsers(_users);
      setLoading(false);
    }
    fetchData();
  }, [workspace]);

  async function handleSaved() {
    await fetchMembers();
    closeModal();
    showToast(t("workspace-settings.members.saved"), "success");
  }

  if (loading) {
    return (
      <div role="status">
        <span className="sr-only">{t("common.loading")}</span>
        <Skeleton.default
          height="80vh"
          width="100%"
          highlightColor="var(--theme-bg-primary)"
          baseColor="var(--theme-bg-secondary)"
          count={1}
          className="w-full p-4 rounded-b-2xl rounded-tr-2xl rounded-tl-sm mt-6"
          containerClassName="flex w-full"
        />
      </div>
    );
  }

  return (
    <section
      aria-labelledby={headingId}
      className="flex flex-col gap-y-4 w-full max-w-[700px]"
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 id={headingId} className={SECTION_HEADING}>
          {t("workspaces—settings.members")}
        </h2>
        <CTAButton
          type="button"
          onClick={openModal}
          aria-haspopup="dialog"
          className="mr-0"
        >
          {t("workspace-settings.members.manage")}
        </CTAButton>
      </div>
      <div className="w-full overflow-x-auto">
        <table aria-labelledby={headingId} className="w-full text-sm text-left">
          <thead className="text-theme-text-secondary text-xs leading-[18px] font-bold uppercase border-b border-white/10 light:border-slate-300">
            <tr>
              <th scope="col" className="px-4 md:px-6 py-3">
                {t("workspace-settings.members.username")}
              </th>
              <th scope="col" className="px-4 md:px-6 py-3">
                {t("workspace-settings.members.role")}
              </th>
              <th scope="col" className="px-4 md:px-6 py-3">
                {t("workspace-settings.members.date-added")}
              </th>
            </tr>
          </thead>
          <tbody>
            {workspaceUsers.length > 0 ? (
              workspaceUsers.map((user) => (
                <WorkspaceMemberRow key={user.userId} user={user} />
              ))
            ) : (
              <tr>
                <td
                  className="text-center py-4 text-theme-text-secondary"
                  colSpan="3"
                >
                  {t("workspace-settings.members.empty")}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <Modal
        isOpen={isOpen}
        onClose={savingMembers ? undefined : closeModal}
        size="lg"
      >
        <AddMemberModal
          closeModal={closeModal}
          users={users}
          workspace={adminWorkspace}
          onSaved={handleSaved}
          onBusyChange={setSavingMembers}
        />
      </Modal>
    </section>
  );
}
