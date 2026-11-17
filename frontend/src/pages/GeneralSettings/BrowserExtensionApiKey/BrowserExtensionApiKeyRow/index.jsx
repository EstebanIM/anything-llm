import BrowserExtensionApiKey from "@/models/browserExtensionApiKey";
import showToast from "@/utils/toast";
import { formatDateTime } from "@/utils/dates";
import { Trash2, Plug } from "lucide-react";
import { POPUP_BROWSER_EXTENSION_EVENT } from "@/utils/constants";
import CopyButton from "@/components/lib/CopyButton";
import { maskSecret } from "@/components/lib/MaskedSecret";
import InlineConfirm, {
  ROW_ICON_BUTTON,
} from "@/pages/GeneralSettings/ApiKeys/InlineConfirm";
import { useTranslation } from "react-i18next";

export default function BrowserExtensionApiKeyRow({
  apiKey,
  revokeButtonId,
  onRemoved,
  connectionString,
  isMultiUser,
}) {
  const { t } = useTranslation();
  const keyLabel = maskSecret(apiKey.key);

  const handleRevoke = async () => {
    const result = await BrowserExtensionApiKey.revoke(apiKey.id);
    if (!result.success) {
      showToast(t("tools-pages.extension.revoke-failed"), "error", {
        clear: true,
      });
      return false;
    }
    showToast(t("tools-pages.extension.revoked"), "success", { clear: true });
    onRemoved(apiKey.id);
    return true;
  };

  const handleConnect = () => {
    // Sending a message to Chrome extension to pop up the extension window
    // This will open the extension window and attempt to connect with the API key
    window.postMessage(
      { type: POPUP_BROWSER_EXTENSION_EVENT, apiKey: connectionString },
      "*"
    );
    showToast(t("tools-pages.extension.connecting"), "info", {
      clear: true,
    });
  };

  return (
    <tr className="bg-transparent text-white text-opacity-80 text-xs font-medium border-b border-white/10 light:border-slate-200">
      <td className="px-4 md:px-6 py-3 align-middle">
        <div className="flex items-center gap-x-1">
          <button
            type="button"
            onClick={handleConnect}
            aria-label={t("tools-pages.extension.connect-label", {
              key: keyLabel,
            })}
            className="inline-flex items-center gap-x-1.5 min-h-[44px] md:min-h-[32px] px-2 rounded-lg text-sm text-theme-text-secondary hover:text-white light:hover:text-slate-900 hover:bg-white/5 light:hover:bg-slate-100 transition-colors duration-quick ease-smooth whitespace-nowrap"
          >
            <Plug strokeWidth={1.5} className="h-4 w-4" aria-hidden="true" />
            {t("tools-pages.extension.connect")}
          </button>
          <InlineConfirm
            id={revokeButtonId}
            label={t("tools-pages.extension.revoke-label", { key: keyLabel })}
            icon={Trash2}
            triggerClassName={ROW_ICON_BUTTON}
            consequence={t("tools-pages.extension.revoke-consequence")}
            confirmLabel={t("tools-pages.extension.revoke")}
            onConfirm={handleRevoke}
          />
        </div>
      </td>
      <th
        scope="row"
        className="px-4 md:px-6 py-3 align-middle text-left font-medium"
      >
        <div className="flex items-center gap-x-1 whitespace-nowrap">
          <code className="font-mono text-xs text-theme-text-primary">
            {keyLabel}
          </code>
          <CopyButton
            text={connectionString}
            label={t("tools-pages.extension.copy-label", { key: keyLabel })}
          />
        </div>
      </th>
      {isMultiUser && (
        <td className="px-4 md:px-6 py-3 align-middle">
          {apiKey.user?.username || (
            <span className="text-theme-text-secondary">
              {t("tools-pages.api-keys.not-recorded")}
            </span>
          )}
        </td>
      )}
      <td className="px-4 md:px-6 py-3 align-middle whitespace-nowrap">
        {formatDateTime(apiKey.createdAt)}
      </td>
    </tr>
  );
}
