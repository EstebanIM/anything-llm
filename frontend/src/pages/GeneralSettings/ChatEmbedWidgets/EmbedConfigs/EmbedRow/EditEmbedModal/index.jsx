import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  ChatModeSelection,
  FORM_ERROR,
  NumberInput,
  OverrideToggles,
  PermittedDomains,
  WorkspaceSelection,
  enforceSubmissionSchema,
  focusInvalidField,
} from "../../NewEmbedModal";
import Embed from "@/models/embed";
import { safeJsonParse } from "@/utils/request";
import {
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalPrimaryButton,
  ModalSecondaryButton,
} from "@/components/lib/Modal";

export default function EditEmbedModal({ embed, closeModal, onSaved }) {
  const { t } = useTranslation();
  const [error, setError] = useState(null);
  const [saving, setSaving] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (saving || focusInvalidField(e.currentTarget)) return;
    setError(null);
    setSaving(true);
    const data = enforceSubmissionSchema(new FormData(e.currentTarget));
    const { success, error } = await Embed.updateEmbed(embed.id, data);
    setSaving(false);
    if (!success) {
      setError(error || t("embed-pages.form.save-failed"));
      return;
    }
    onSaved();
  };

  return (
    <form onSubmit={handleUpdate} className="flex flex-col gap-y-5">
      <ModalHeader
        title={t("embed-pages.edit.title", {
          id: embed.id,
          workspace: embed.workspace?.name,
        })}
        onClose={closeModal}
      />
      <ModalBody>
        <WorkspaceSelection defaultValue={embed.workspace?.id} />
        <ChatModeSelection defaultValue={embed.chat_mode} />
        <PermittedDomains
          defaultValue={safeJsonParse(embed.allowlist_domains, null) || []}
        />
        <NumberInput
          name="max_chats_per_day"
          title={t("embed-pages.form.max-chats-day")}
          hint={t("embed-pages.form.max-chats-day-hint")}
          defaultValue={embed.max_chats_per_day}
        />
        <NumberInput
          name="max_chats_per_session"
          title={t("embed-pages.form.max-chats-session")}
          hint={t("embed-pages.form.max-chats-session-hint")}
          defaultValue={embed.max_chats_per_session}
        />
        <NumberInput
          name="message_limit"
          title={t("embed-pages.form.message-limit")}
          hint={t("embed-pages.form.message-limit-hint")}
          defaultValue={embed.message_limit}
        />
        <OverrideToggles embed={embed} />
        {error && (
          <p role="alert" className={FORM_ERROR}>
            {t("settings-pages.form-error", { error })}
          </p>
        )}
      </ModalBody>
      <ModalFooter>
        <ModalSecondaryButton onClick={closeModal} type="button">
          {t("settings-pages.cancel")}
        </ModalSecondaryButton>
        <ModalPrimaryButton type="submit" busy={saving}>
          {saving ? t("common.saving") : t("common.save")}
        </ModalPrimaryButton>
      </ModalFooter>
    </form>
  );
}
