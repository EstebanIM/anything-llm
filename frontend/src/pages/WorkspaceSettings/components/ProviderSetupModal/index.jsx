import { useEffect, useId, useState } from "react";
import { useTranslation } from "react-i18next";
import Modal, {
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalPrimaryButton,
  ModalSecondaryButton,
} from "@/components/lib/Modal";
import PreLoader from "@/components/Preloader";
import StatusNote from "@/components/lib/StatusNote";
import System from "@/models/system";
import { serverErrorMessage } from "@/utils/serverErrors";

/**
 * Credentials dialog of an LLM provider, shared by the workspace chat and agent
 * pickers. It is rendered next to the picker (never inside a listbox row), and
 * its form is portalled, so its events do not reach the settings form.
 * @param {object} props
 * @param {object|null} props.provider - provider to set up; null keeps it closed
 * @param {"chat"|"agent"} props.purpose - what the provider will be used for
 * @param {() => void} props.onClose
 * @param {() => void} props.onSaved - settings were stored
 */
export default function ProviderSetupModal({
  provider,
  purpose = "chat",
  onClose,
  onSaved,
}) {
  const { t } = useTranslation();
  const formId = useId();
  const isOpen = !!provider;
  const [settings, setSettings] = useState(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  // Fresh settings on every open: the fields only read their initial values.
  useEffect(() => {
    if (!isOpen) return;
    let cancelled = false;
    setSettings(null);
    setError(null);
    System.keys().then((keys) => {
      if (!cancelled) setSettings(keys ?? {});
    });
    return () => {
      cancelled = true;
    };
  }, [isOpen, provider?.value]);

  async function handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    if (saving) return;
    const data = {};
    for (const [key, value] of new FormData(e.target).entries())
      data[key] = value;
    setSaving(true);
    setError(null);
    const { error: saveError } = await System.updateSystem(data);
    setSaving(false);
    if (saveError) {
      // The dialog stays open: the error goes next to the fields.
      setError(
        serverErrorMessage(
          saveError,
          t,
          "workspace-settings.provider-setup.failed",
          { values: { name: provider.name } }
        )
      );
      return;
    }
    onSaved();
  }

  const close = saving ? undefined : onClose;
  return (
    <Modal isOpen={isOpen} onClose={close} size="lg">
      {isOpen && (
        <form
          id={formId}
          onSubmit={handleSubmit}
          className="flex flex-col gap-y-5"
        >
          <ModalHeader
            title={t("model-router.provider-picker.configure-provider", {
              name: provider.name,
            })}
            subtitle={t(`workspace-settings.provider-setup.intro-${purpose}`, {
              name: provider.name,
            })}
            onClose={close}
          />
          <ModalBody className="max-h-[60vh] overflow-y-auto p-1">
            {settings ? (
              provider.options?.(settings, { credentialsOnly: true })
            ) : (
              <div className="flex justify-center py-6">
                <PreLoader size="8" />
              </div>
            )}
            {error && (
              <StatusNote tone="error" announce className="mt-4">
                {error}
              </StatusNote>
            )}
          </ModalBody>
          <ModalFooter>
            <ModalSecondaryButton
              type="button"
              onClick={onClose}
              disabled={saving}
            >
              {t("settings-pages.cancel")}
            </ModalSecondaryButton>
            <ModalPrimaryButton
              type="submit"
              disabled={!settings}
              aria-busy={saving || undefined}
              aria-disabled={saving || undefined}
              className="aria-disabled:cursor-wait aria-disabled:opacity-60"
            >
              {saving
                ? t("common.saving")
                : t("model-router.provider-picker.save-settings")}
            </ModalPrimaryButton>
          </ModalFooter>
        </form>
      )}
    </Modal>
  );
}
