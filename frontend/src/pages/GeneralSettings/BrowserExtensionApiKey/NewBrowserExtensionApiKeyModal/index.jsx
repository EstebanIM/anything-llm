import { useState } from "react";
import BrowserExtensionApiKey from "@/models/browserExtensionApiKey";
import { fullApiUrl, POPUP_BROWSER_EXTENSION_EVENT } from "@/utils/constants";
import { NewKeyField } from "@/pages/GeneralSettings/ApiKeys/NewApiKeyModal";
import { useTranslation } from "react-i18next";
import {
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalPrimaryButton,
  ModalSecondaryButton,
} from "@/components/lib/Modal";

export default function NewBrowserExtensionApiKeyModal({
  closeModal,
  onSuccess,
  isMultiUser,
}) {
  const { t } = useTranslation();
  const [apiKey, setApiKey] = useState(null);
  const [error, setError] = useState(null);
  const [creating, setCreating] = useState(false);

  const handleCreate = async (e) => {
    e.preventDefault();
    // Enter in the read-only key field would submit the form again.
    if (creating || apiKey) return;
    setError(null);
    setCreating(true);

    const { apiKey: newApiKey, error } =
      await BrowserExtensionApiKey.generateKey();
    setCreating(false);
    if (!!newApiKey) {
      const fullApiKey = `${fullApiUrl()}|${newApiKey}`;
      setApiKey(fullApiKey);
      onSuccess();
      window.postMessage(
        {
          type: POPUP_BROWSER_EXTENSION_EVENT,
          apiKey: fullApiKey,
        },
        "*"
      );
      return;
    }
    setError(error || t("tools-pages.extension.create-failed"));
  };

  return (
    <form onSubmit={handleCreate} className="flex flex-col gap-y-5">
      <ModalHeader
        title={
          apiKey
            ? t("tools-pages.extension.created-title")
            : t("tools-pages.extension.modal-title")
        }
        onClose={closeModal}
      />
      <ModalBody>
        {error && (
          <p role="alert" className="text-sm text-red-400 light:text-red-700">
            {t("api.messages.error", { error })}
          </p>
        )}
        {apiKey && (
          <NewKeyField
            value={apiKey}
            label={t("tools-pages.extension.new-key")}
            hint={t("tools-pages.extension.new-key-hint")}
            copyLabel={t("tools-pages.extension.copy-new")}
          />
        )}
        {isMultiUser && (
          <p className="text-xs md:text-sm font-semibold text-amber-300 light:text-amber-700">
            {t("tools-pages.extension.multi-user-warning")}
          </p>
        )}
        <p className="text-xs text-zinc-400 light:text-slate-600">
          {apiKey
            ? t("tools-pages.extension.after-create")
            : t("tools-pages.extension.before-create")}
        </p>
      </ModalBody>
      <ModalFooter className={apiKey ? "justify-end" : undefined}>
        {!apiKey ? (
          <>
            <ModalSecondaryButton onClick={closeModal} type="button">
              {t("api.modal.cancel")}
            </ModalSecondaryButton>
            <ModalPrimaryButton type="submit" busy={creating}>
              {creating
                ? t("tools-pages.api-keys.creating")
                : t("tools-pages.extension.create")}
            </ModalPrimaryButton>
          </>
        ) : (
          <ModalSecondaryButton onClick={closeModal} type="button">
            {t("api.modal.close")}
          </ModalSecondaryButton>
        )}
      </ModalFooter>
    </form>
  );
}
