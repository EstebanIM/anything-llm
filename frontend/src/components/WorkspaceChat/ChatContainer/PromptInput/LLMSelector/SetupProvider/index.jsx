import Modal, {
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalPrimaryButton,
  ModalSecondaryButton,
} from "@/components/lib/Modal";
import { CircleAlert } from "lucide-react";
import System from "@/models/system";
import showToast from "@/utils/toast";
import { useTranslation } from "react-i18next";

export default function SetupProvider({
  isOpen,
  closeModal,
  postSubmit,
  settings,
  llmProvider,
}) {
  const { t } = useTranslation();
  if (!isOpen) return null;

  async function handleUpdate(e) {
    e.preventDefault();
    e.stopPropagation();
    const data = {};
    const form = new FormData(e.target);
    for (var [key, value] of form.entries()) data[key] = value;
    const { error } = await System.updateSystem(data);
    if (error) {
      showToast(
        t("chat-input.provider-save-failed", {
          provider: llmProvider.name,
          error,
        }),
        "error"
      );
      return;
    }

    closeModal();
    postSubmit();
    return false;
  }

  return (
    <Modal isOpen={isOpen} onClose={closeModal} size="lg">
      <form
        id="provider-form"
        onSubmit={handleUpdate}
        className="flex flex-col gap-y-5"
      >
        <ModalHeader
          title={t("chat-input.provider-settings", {
            provider: llmProvider.name,
          })}
          onClose={closeModal}
        />
        <ModalBody>
          <div className="space-y-6 max-h-[60vh] overflow-y-auto p-1">
            <p className="text-sm text-zinc-400 light:text-slate-600">
              {t("chat-input.provider-setup-required", {
                provider: llmProvider.name,
              })}
            </p>
            <div>
              {llmProvider.options(settings, { credentialsOnly: true })}
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <ModalSecondaryButton type="button" onClick={closeModal}>
            {t("chat_window.cancel")}
          </ModalSecondaryButton>
          <ModalPrimaryButton type="submit" form="provider-form">
            {t("chat-input.provider-save")}
          </ModalPrimaryButton>
        </ModalFooter>
      </form>
    </Modal>
  );
}

export function NoSetupWarning({ showing, onSetupClick }) {
  const { t } = useTranslation();
  if (!showing) return null;

  return (
    <div className="flex items-start gap-1.5">
      <CircleAlert
        strokeWidth={1.5}
        size={16}
        aria-hidden="true"
        className="text-white light:text-slate-800 shrink-0 mt-0.5"
      />
      <p className="text-[13px] text-white light:text-slate-800 leading-5">
        {t("chat_window.workspace_llm_manager.missing_credentials")}{" "}
        <button
          type="button"
          onClick={onSetupClick}
          className="border-none bg-transparent p-0 rounded text-sky-400 light:text-sky-700 font-semibold cursor-pointer hover:underline"
        >
          {t(
            "chat_window.workspace_llm_manager.missing_credentials_description"
          )}
        </button>
      </p>
    </div>
  );
}
