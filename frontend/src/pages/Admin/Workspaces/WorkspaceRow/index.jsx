import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ExternalLink, Trash2 } from "lucide-react";
import Admin from "@/models/admin";
import paths from "@/utils/paths";
import showToast from "@/utils/toast";
import { formatDateTime } from "@/utils/dates";
import InlineConfirm, {
  CELL,
  MOBILE_LABEL,
  ROW,
  ROW_ACTION_DANGER,
  ROW_ACTIONS,
  ROW_HEADER,
  useConfirmFocusReturn,
} from "@/pages/Admin/Users/AdminTable";

const LINK =
  "inline-flex items-center gap-x-1.5 min-h-[44px] md:min-h-0 underline text-sky-400 light:text-sky-700 hover:text-sky-300 light:hover:text-sky-800 transition-colors duration-quick ease-smooth";

export default function WorkspaceRow({
  workspace,
  deletionProtected = false,
  onDeleted,
}) {
  const { t } = useTranslation();
  const [confirming, setConfirming] = useState(null);
  const [busy, setBusy] = useState(false);
  const deleteRef = useRef(null);
  useConfirmFocusReturn(confirming, { delete: deleteRef });
  const name = workspace.name;
  const memberCount = workspace.userIds?.length ?? 0;

  const handleDelete = async () => {
    setBusy(true);
    const { success, error } = await Admin.deleteWorkspace(workspace.id);
    setBusy(false);
    if (!success) {
      setConfirming(null);
      showToast(
        t("admin-pages.workspaces.delete-failed", {
          name,
          error: error || t("admin-pages.unknown-error"),
        }),
        "error",
        { clear: true }
      );
      return;
    }
    showToast(t("admin-pages.workspaces.deleted", { name }), "success", {
      clear: true,
    });
    onDeleted();
  };

  return (
    <tr data-row="" className={ROW}>
      <th scope="row" className={ROW_HEADER}>
        {name}
      </th>
      <td className={CELL}>
        <span aria-hidden="true" className={MOBILE_LABEL}>
          {t("admin-pages.workspaces.link")}:{" "}
        </span>
        <Link
          to={paths.workspace.chat(workspace.slug)}
          target="_blank"
          rel="noreferrer"
          className={LINK}
        >
          {workspace.slug}
          <ExternalLink
            strokeWidth={1.5}
            className="h-3.5 w-3.5 shrink-0"
            aria-hidden="true"
          />
          <span className="sr-only">{t("provider-fields.opens-new-tab")}</span>
        </Link>
      </td>
      <td className={CELL}>
        <span aria-hidden="true" className={MOBILE_LABEL}>
          {t("admin-pages.workspaces.members")}:{" "}
        </span>
        <Link
          to={paths.workspace.settings.members(workspace.slug)}
          aria-label={t("admin-pages.workspaces.members-link", {
            count: memberCount,
            name,
          })}
          className={LINK}
        >
          {memberCount}
        </Link>
      </td>
      <td className={CELL}>
        <span aria-hidden="true" className={MOBILE_LABEL}>
          {t("admin-pages.workspaces.created")}:{" "}
        </span>
        {formatDateTime(workspace.createdAt)}
      </td>
      <td className={`${CELL} pt-2`}>
        {confirming === "delete" ? (
          <InlineConfirm
            question={t("admin-pages.workspaces.delete-question", { name })}
            consequences={t("admin-pages.workspaces.delete-consequences")}
            confirmLabel={t("settings-pages.delete")}
            busy={busy}
            onConfirm={handleDelete}
            onCancel={() => setConfirming(null)}
          />
        ) : (
          !deletionProtected && (
            <div className={ROW_ACTIONS}>
              <button
                ref={deleteRef}
                type="button"
                onClick={() => setConfirming("delete")}
                aria-label={t("admin-pages.workspaces.delete", { name })}
                title={t("admin-pages.workspaces.delete", { name })}
                className={ROW_ACTION_DANGER}
              >
                <Trash2
                  strokeWidth={1.5}
                  className="h-4 w-4"
                  aria-hidden="true"
                />
              </button>
            </div>
          )
        )}
      </td>
    </tr>
  );
}
