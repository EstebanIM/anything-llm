import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import System from "@/models/system";
import showToast from "@/utils/toast";
import { serverErrorParts } from "@/utils/serverErrors";
import ServerErrorDetail from "@/components/lib/ServerErrorDetail";
import {
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalPrimaryButton,
  ModalSecondaryButton,
} from "@/components/lib/Modal";
import VariableFields, {
  focusFirstError,
  readVariableForm,
} from "../../VariableFields";

export default function EditVariableModal({ variable, closeModal, onRefresh }) {
  const { t } = useTranslation();
  const [error, setError] = useState(null);
  const [fieldErrors, setFieldErrors] = useState({});
  const [busy, setBusy] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!variable.id || busy) return;
    setError(null);
    const form = e.currentTarget;
    const { data, errors } = readVariableForm(form, t);
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) {
      focusFirstError(form, errors);
      return;
    }

    setBusy(true);
    const { success, error } = await System.promptVariables.update(
      variable.id,
      data
    );
    setBusy(false);
    if (!success) {
      setError(
        serverErrorParts(error, t, "admin-pages.variables.update-failed")
      );
      return;
    }
    showToast(
      t("admin-pages.variables.updated", { key: data.key }),
      "success",
      {
        clear: true,
      }
    );
    onRefresh?.();
    closeModal();
  };

  return (
    <form onSubmit={handleUpdate} className="flex flex-col gap-y-5">
      <ModalHeader
        title={t("admin-pages.variables.edit", { key: variable.key })}
        onClose={closeModal}
      />
      <ModalBody>
        <VariableFields variable={variable} errors={fieldErrors} />
        {error && (
          <p role="alert" className="text-sm text-red-400 light:text-red-700">
            {error.message}
            <ServerErrorDetail detail={error.detail} />
          </p>
        )}
      </ModalBody>
      <ModalFooter>
        <ModalSecondaryButton onClick={closeModal} type="button">
          {t("settings-pages.cancel")}
        </ModalSecondaryButton>
        <ModalPrimaryButton type="submit" busy={busy}>
          {t("common.save")}
        </ModalPrimaryButton>
      </ModalFooter>
    </form>
  );
}
