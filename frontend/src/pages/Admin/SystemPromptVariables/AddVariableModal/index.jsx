import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import System from "@/models/system";
import showToast from "@/utils/toast";
import {
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalPrimaryButton,
  ModalSecondaryButton,
} from "@/components/lib/Modal";
import VariableFields, {
  errorMessage,
  focusFirstError,
  readVariableForm,
} from "../VariableFields";

export default function AddVariableModal({ closeModal, onRefresh }) {
  const { t } = useTranslation();
  const [error, setError] = useState(null);
  const [fieldErrors, setFieldErrors] = useState({});
  const [busy, setBusy] = useState(false);

  const handleCreate = async (e) => {
    e.preventDefault();
    if (busy) return;
    setError(null);
    const form = e.currentTarget;
    const { data, errors } = readVariableForm(form, t);
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) {
      focusFirstError(form, errors);
      return;
    }

    setBusy(true);
    const { success, error } = await System.promptVariables.create(data);
    setBusy(false);
    if (!success) {
      setError(
        t("admin-pages.variables.create-failed", {
          error: errorMessage(error, t("admin-pages.unknown-error")),
        })
      );
      return;
    }
    showToast(
      t("admin-pages.variables.created", { key: data.key }),
      "success",
      {
        clear: true,
      }
    );
    onRefresh?.();
    closeModal();
  };

  return (
    <form onSubmit={handleCreate} className="flex flex-col gap-y-5">
      <ModalHeader
        title={t("admin-pages.variables.new-title")}
        onClose={closeModal}
      />
      <ModalBody>
        <VariableFields errors={fieldErrors} />
        {error && (
          <p role="alert" className="text-sm text-red-400 light:text-red-700">
            {error}
          </p>
        )}
      </ModalBody>
      <ModalFooter>
        <ModalSecondaryButton onClick={closeModal} type="button">
          {t("settings-pages.cancel")}
        </ModalSecondaryButton>
        <ModalPrimaryButton type="submit" busy={busy}>
          {t("admin-pages.variables.create")}
        </ModalPrimaryButton>
      </ModalFooter>
    </form>
  );
}
