import Admin from "@/models/admin";
import { Trash2 } from "lucide-react";
import { userFromStorage } from "@/utils/request";
import System from "@/models/system";
import showToast from "@/utils/toast";
import { formatDateTime } from "@/utils/dates";
import CopyButton from "@/components/lib/CopyButton";
import { maskSecret } from "@/components/lib/MaskedSecret";
import InlineConfirm, { ROW_ICON_BUTTON } from "../InlineConfirm";
import { useTranslation } from "react-i18next";

export default function ApiKeyRow({ apiKey, deleteButtonId, onRemoved }) {
  const { t } = useTranslation();
  // Unnamed keys are told apart by their masked value.
  const keyLabel = apiKey.name || maskSecret(apiKey.secret);

  const handleDelete = async () => {
    const user = userFromStorage();
    const Model = !!user ? Admin : System;
    const ok = await Model.deleteApiKey(apiKey.id);
    if (!ok) {
      showToast(t("tools-pages.api-keys.delete-failed"), "error", {
        clear: true,
      });
      return false;
    }
    showToast(t("tools-pages.api-keys.deleted"), "success", { clear: true });
    onRemoved(apiKey.id);
    return true;
  };

  return (
    <tr className="bg-transparent text-white text-opacity-80 text-xs font-medium border-b border-white/10 light:border-slate-200">
      <td className="px-4 md:px-6 py-3 align-middle">
        <InlineConfirm
          id={deleteButtonId}
          label={t("tools-pages.api-keys.delete", { name: keyLabel })}
          icon={Trash2}
          triggerClassName={ROW_ICON_BUTTON}
          consequence={t("api.row.deleteConfirm")}
          confirmLabel={t("settings-pages.delete")}
          onConfirm={handleDelete}
        />
      </td>
      <th
        scope="row"
        className="px-4 md:px-6 py-3 align-middle text-left font-medium"
      >
        {apiKey.name || (
          <span className="text-theme-text-secondary">
            {t("api.row.unnamed")}
          </span>
        )}
      </th>
      <td className="px-4 md:px-6 py-3 align-middle">
        <div className="flex items-center gap-x-1 whitespace-nowrap">
          <code className="font-mono text-xs text-theme-text-primary">
            {maskSecret(apiKey.secret)}
          </code>
          <CopyButton
            text={apiKey.secret}
            label={t("tools-pages.api-keys.copy", { name: keyLabel })}
          />
        </div>
      </td>
      <td className="px-4 md:px-6 py-3 align-middle">
        {apiKey.createdBy?.username || (
          <span className="text-theme-text-secondary">
            {t("tools-pages.api-keys.not-recorded")}
          </span>
        )}
      </td>
      <td className="px-4 md:px-6 py-3 align-middle whitespace-nowrap">
        {formatDateTime(apiKey.createdAt)}
      </td>
    </tr>
  );
}
