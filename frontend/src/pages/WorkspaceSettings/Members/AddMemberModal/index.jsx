import { useEffect, useId, useRef, useState } from "react";
import { Search } from "lucide-react";
import { useTranslation } from "react-i18next";
import Admin from "@/models/admin";
import showToast from "@/utils/toast";
import {
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalPrimaryButton,
  ModalSecondaryButton,
} from "@/components/lib/Modal";
import { FIELD_INPUT } from "@/components/ProviderFields";

// Admins and managers already reach every workspace, so they are not listed.
const UNLISTED_ROLES = ["superadmin", "admin", "manager"];

const CHECKBOX =
  "h-4 w-4 shrink-0 cursor-pointer accent-sky-500 light:accent-sky-700";
const OPTION_ROW =
  "flex items-center gap-x-3 min-h-[44px] md:min-h-[32px] px-2 rounded-md cursor-pointer text-sm font-medium text-zinc-100 light:text-slate-900 hover:bg-zinc-800 light:hover:bg-slate-100 transition-colors duration-quick ease-smooth";

export default function AddMemberModal({
  closeModal,
  workspace,
  users,
  onSaved,
  onBusyChange,
}) {
  const { t } = useTranslation();
  const searchId = useId();
  const helpId = useId();
  const selectAllRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [initialUsers] = useState(() => workspace?.userIds || []);
  const [selectedUsers, setSelectedUsers] = useState(initialUsers);
  const [saving, setSaving] = useState(false);

  const listedUsers = users.filter(
    (user) => !UNLISTED_ROLES.includes(user.role)
  );
  const filteredUsers = listedUsers.filter((user) =>
    user.username.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );
  const shownSelected = filteredUsers.filter((user) =>
    selectedUsers.includes(user.id)
  ).length;
  const allShownSelected =
    filteredUsers.length > 0 && shownSelected === filteredUsers.length;
  const someShownSelected = shownSelected > 0 && !allShownSelected;
  const removedCount = listedUsers.filter(
    (user) => initialUsers.includes(user.id) && !selectedUsers.includes(user.id)
  ).length;

  useEffect(() => {
    if (selectAllRef.current)
      selectAllRef.current.indeterminate = someShownSelected;
  }, [someShownSelected]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (saving || !workspace) return;
    setSaving(true);
    onBusyChange?.(true);
    const { success, error } = await Admin.updateUsersInWorkspace(
      workspace.id,
      selectedUsers
    );
    setSaving(false);
    onBusyChange?.(false);
    if (!success) {
      showToast(
        error
          ? t("workspace-settings.members.save-failed", { error })
          : t("workspace-settings.members.save-failed-generic"),
        "error"
      );
      return;
    }
    onSaved?.();
  };

  const toggleUser = (userId) => {
    setSelectedUsers((current) =>
      current.includes(userId)
        ? current.filter((id) => id !== userId)
        : [...current, userId]
    );
  };

  // Acts on the users shown by the search; hidden selections are kept.
  const toggleShown = () => {
    const shownIds = filteredUsers.map((user) => user.id);
    setSelectedUsers((current) =>
      allShownSelected
        ? current.filter((id) => !shownIds.includes(id))
        : [...new Set([...current, ...shownIds])]
    );
  };

  const close = saving ? undefined : closeModal;
  return (
    <form onSubmit={handleUpdate} className="flex flex-col gap-y-5">
      <ModalHeader
        title={t("workspace-settings.members.manage")}
        subtitle={
          workspace?.name
            ? t("workspace-settings.members.manage-subtitle", {
                name: workspace.name,
              })
            : null
        }
        onClose={close}
      />
      <ModalBody>
        <div className="flex flex-col gap-y-1.5">
          <label htmlFor={searchId} className="sr-only">
            {t("workspace-settings.members.search")}
          </label>
          <div className="relative">
            <Search
              strokeWidth={1.5}
              size={16}
              aria-hidden="true"
              className="pointer-events-none text-zinc-400 light:text-slate-600 absolute left-3 top-1/2 -translate-y-1/2"
            />
            <input
              id={searchId}
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={t("workspace-settings.members.search")}
              aria-describedby={helpId}
              autoComplete="off"
              className={`${FIELD_INPUT} pl-9`}
            />
          </div>
          <p id={helpId} className="text-xs text-zinc-400 light:text-slate-600">
            {t("workspace-settings.members.roles-note")}
          </p>
        </div>

        <fieldset className="min-w-0">
          <legend className="sr-only">
            {t("workspace-settings.members.users")}
          </legend>
          {filteredUsers.length > 0 ? (
            <>
              <label
                className={`${OPTION_ROW} border-b border-zinc-700 light:border-slate-200 mb-1`}
              >
                <input
                  ref={selectAllRef}
                  type="checkbox"
                  checked={allShownSelected}
                  onChange={toggleShown}
                  className={CHECKBOX}
                />
                {searchTerm.trim()
                  ? t("workspace-settings.members.select-shown")
                  : t("workspace-settings.members.select-all")}
              </label>
              <ul className="flex flex-col max-h-[320px] overflow-y-auto">
                {filteredUsers.map((user) => (
                  <li key={user.id}>
                    <label className={OPTION_ROW}>
                      <input
                        type="checkbox"
                        checked={selectedUsers.includes(user.id)}
                        onChange={() => toggleUser(user.id)}
                        className={CHECKBOX}
                      />
                      <span className="min-w-0 break-words">
                        {user.username}
                      </span>
                    </label>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p className="text-zinc-400 light:text-slate-600 text-sm font-medium">
              {listedUsers.length === 0
                ? t("workspace-settings.members.no-users")
                : t("common.noResults")}
            </p>
          )}
        </fieldset>
        <p
          role="status"
          className="text-xs text-amber-300 light:text-amber-800"
        >
          {removedCount > 0
            ? t("workspace-settings.members.removing", { count: removedCount })
            : ""}
        </p>
      </ModalBody>
      <ModalFooter>
        <ModalSecondaryButton
          type="button"
          onClick={closeModal}
          disabled={saving}
        >
          {t("settings-pages.cancel")}
        </ModalSecondaryButton>
        <ModalPrimaryButton
          type="submit"
          aria-busy={saving || undefined}
          aria-disabled={saving || undefined}
          className="aria-disabled:cursor-wait aria-disabled:opacity-60"
        >
          {saving ? t("common.saving") : t("common.save")}
        </ModalPrimaryButton>
      </ModalFooter>
    </form>
  );
}
