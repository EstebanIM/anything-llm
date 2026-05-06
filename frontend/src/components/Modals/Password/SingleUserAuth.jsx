import React, { useEffect, useState } from "react";
import System from "../../../models/system";
import { AUTH_TOKEN } from "../../../utils/constants";
import paths from "../../../utils/paths";
import ModalWrapper from "@/components/ModalWrapper";
import { useModal } from "@/hooks/useModal";
import RecoveryCodeModal from "@/components/Modals/DisplayRecoveryCodeModal";
import { useTranslation } from "react-i18next";
import useCustomAppName from "@/hooks/useCustomAppName";
import { Key } from "@phosphor-icons/react";
import { AuthError, AuthHeader, AuthInput, AuthSubmitButton } from "./AuthUI";

export default function SingleUserAuth() {
  const { t } = useTranslation();
  const { brandName } = useCustomAppName();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [recoveryCodes, setRecoveryCodes] = useState([]);
  const [downloadComplete, setDownloadComplete] = useState(false);
  const [token, setToken] = useState(null);

  const {
    isOpen: isRecoveryCodeModalOpen,
    openModal: openRecoveryCodeModal,
    closeModal: closeRecoveryCodeModal,
  } = useModal();

  const handleLogin = async (e) => {
    setError(null);
    setLoading(true);
    e.preventDefault();
    const data = {};
    const form = new FormData(e.target);
    for (var [key, value] of form.entries()) data[key] = value;
    const { valid, token, message, recoveryCodes } =
      await System.requestToken(data);
    if (valid && !!token) {
      setToken(token);
      if (recoveryCodes) {
        setRecoveryCodes(recoveryCodes);
        openRecoveryCodeModal();
      } else {
        window.localStorage.setItem(AUTH_TOKEN, token);
        window.location = paths.home();
      }
    } else {
      setError(message);
      setLoading(false);
    }
    setLoading(false);
  };

  const handleDownloadComplete = () => {
    setDownloadComplete(true);
  };

  useEffect(() => {
    if (downloadComplete && token) {
      window.localStorage.setItem(AUTH_TOKEN, token);
      window.location = paths.home();
    }
  }, [downloadComplete, token]);

  return (
    <>
      <form
        onSubmit={handleLogin}
        className="flex w-full flex-col items-center"
      >
        <AuthHeader
          title={t("login.multi-user.welcome")}
          description={t("login.sign-in", { appName: brandName })}
        />
        <div className="flex w-full flex-col gap-4">
          <AuthInput
            icon={Key}
            label="Password"
            name="password"
            type="password"
            required={true}
            autoComplete="off"
          />
          <AuthError message={error} />
        </div>
        <div className="mt-4 w-full">
          <AuthSubmitButton
            loading={loading}
            loadingText={t("login.multi-user.validating")}
            type="submit"
          >
            {t("login.multi-user.login")}
          </AuthSubmitButton>
        </div>
      </form>

      <ModalWrapper isOpen={isRecoveryCodeModalOpen} noPortal={true}>
        <RecoveryCodeModal
          recoveryCodes={recoveryCodes}
          onDownloadComplete={handleDownloadComplete}
          onClose={closeRecoveryCodeModal}
        />
      </ModalWrapper>
    </>
  );
}
