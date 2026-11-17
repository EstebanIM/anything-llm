import { useEffect, useId, useRef, useState } from "react";
import Admin from "@/models/admin";
import paths from "@/utils/paths";
import { userFromStorage } from "@/utils/request";
import { serverErrorParts } from "@/utils/serverErrors";
import System from "@/models/system";
import CopyButton from "@/components/lib/CopyButton";
import ServerErrorDetail from "@/components/lib/ServerErrorDetail";
import { ExternalLink, FIELD_INPUT } from "@/components/ProviderFields";
import { useTranslation } from "react-i18next";
import {
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalPrimaryButton,
  ModalSecondaryButton,
  ModalInput,
  ModalLabel,
  ModalHint,
} from "@/components/lib/Modal";

export default function NewApiKeyModal({ closeModal, onSuccess }) {
  const { t } = useTranslation();
  const [apiKey, setApiKey] = useState(null);
  const [name, setName] = useState("");
  const [error, setError] = useState(null);
  const [creating, setCreating] = useState(false);

  const handleCreate = async (e) => {
    e.preventDefault();
    // Enter in the read-only key field would submit the form again.
    if (creating || apiKey) return;
    setError(null);
    setCreating(true);
    const user = userFromStorage();
    const Model = !!user ? Admin : System;

    const { apiKey: newApiKey, error } = await Model.generateApiKey({
      name,
    });
    setCreating(false);
    if (!!newApiKey) {
      setApiKey(newApiKey);
      onSuccess();
      return;
    }
    setError(serverErrorParts(error, t, "api.messages.error"));
  };

  return (
    <form onSubmit={handleCreate} className="flex flex-col gap-y-5">
      <ModalHeader
        title={
          apiKey
            ? t("tools-pages.api-keys.created-title")
            : t("api.modal.title")
        }
        onClose={closeModal}
      />
      <ModalBody>
        {error && (
          <p role="alert" className="text-sm text-red-400 light:text-red-700">
            {error.message}
            <ServerErrorDetail detail={error.detail} />
          </p>
        )}
        {apiKey ? (
          <NewKeyField
            value={apiKey.secret}
            label={t("tools-pages.api-keys.new-key")}
            hint={t("tools-pages.api-keys.new-key-hint")}
            copyLabel={t("tools-pages.api-keys.copy-new")}
          />
        ) : (
          <ModalInput
            label={t("api.modal.name.label")}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t("api.modal.name.placeholder")}
            hint={t("api.modal.name.helper")}
          />
        )}
        <p className="text-xs text-zinc-400 light:text-slate-600">
          {t("api.modal.helper")}
        </p>
        <ExternalLink
          href={paths.apiDocs()}
          className="w-fit text-sm text-sky-300 light:text-sky-700 underline hover:no-underline"
        >
          {t("api.link")} <span aria-hidden="true">&rarr;</span>
        </ExternalLink>
      </ModalBody>
      <ModalFooter className={apiKey ? "justify-end" : undefined}>
        {!apiKey ? (
          <>
            <ModalSecondaryButton onClick={closeModal} type="button">
              {t("settings-pages.cancel")}
            </ModalSecondaryButton>
            <ModalPrimaryButton type="submit" busy={creating}>
              {creating
                ? t("tools-pages.api-keys.creating")
                : t("api.modal.create")}
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

/**
 * Read-only field that shows a freshly created key once, with a copy button.
 * It takes the focus when it appears (the Create button it replaces is gone)
 * and selects its text, so the key can also be copied by hand.
 */
export function NewKeyField({ value, label, hint, copyLabel }) {
  const id = useId();
  const hintId = `${id}-hint`;
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="flex flex-col gap-y-1.5 w-full">
      <ModalLabel htmlFor={id}>{label}</ModalLabel>
      <div className="flex items-center gap-x-2">
        <input
          ref={inputRef}
          id={id}
          type="text"
          readOnly
          value={value}
          onFocus={(e) => e.target.select()}
          aria-describedby={hintId}
          spellCheck={false}
          className={`${FIELD_INPUT} font-mono`}
        />
        <CopyButton text={value} label={copyLabel} className="shrink-0" />
      </div>
      <ModalHint id={hintId}>{hint}</ModalHint>
    </div>
  );
}
