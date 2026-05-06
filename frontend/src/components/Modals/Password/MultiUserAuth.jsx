import React, { useEffect, useState } from "react";
import System from "../../../models/system";
import { AUTH_TOKEN, AUTH_USER } from "../../../utils/constants";
import paths from "../../../utils/paths";
import showToast from "@/utils/toast";
import ModalWrapper from "@/components/ModalWrapper";
import { useModal } from "@/hooks/useModal";
import RecoveryCodeModal from "@/components/Modals/DisplayRecoveryCodeModal";
import { useTranslation } from "react-i18next";
import { t } from "i18next";
import useCustomAppName from "@/hooks/useCustomAppName";
import { Key, User } from "@phosphor-icons/react";
import {
  AuthError,
  AuthGhostButton,
  AuthHeader,
  AuthInput,
  AuthSubmitButton,
} from "./AuthUI";

const RecoveryForm = ({ onSubmit, setShowRecoveryForm }) => {
  const [username, setUsername] = useState("");
  const [recoveryCodeInputs, setRecoveryCodeInputs] = useState(
    Array(2).fill("")
  );

  const handleRecoveryCodeChange = (index, value) => {
    const updatedCodes = [...recoveryCodeInputs];
    updatedCodes[index] = value;
    setRecoveryCodeInputs(updatedCodes);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const recoveryCodes = recoveryCodeInputs.filter(
      (code) => code.trim() !== ""
    );
    onSubmit(username, recoveryCodes);
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col items-center">
      <AuthHeader
        title={t("login.password-reset.title")}
        description={t("login.password-reset.description")}
      />
      <div className="flex w-full flex-col gap-3">
        <AuthInput
          icon={User}
          label={t("login.multi-user.placeholder-username")}
          name="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          autoComplete="off"
        />
        {recoveryCodeInputs.map((code, index) => (
          <AuthInput
            key={index}
            icon={Key}
            label={`${t("login.password-reset.recovery-codes")} ${index + 1}`}
            type="text"
            name={`recoveryCode${index + 1}`}
            value={code}
            onChange={(e) => handleRecoveryCodeChange(index, e.target.value)}
            required
            autoComplete="off"
          />
        ))}
      </div>
      <div className="mt-4 flex w-full flex-col items-center gap-4">
        <AuthSubmitButton type="submit">
          {t("login.password-reset.title")}
        </AuthSubmitButton>
        <AuthGhostButton
          type="button"
          onClick={() => setShowRecoveryForm(false)}
        >
          {t("login.password-reset.back-to-login")}
        </AuthGhostButton>
      </div>
    </form>
  );
};

const ResetPasswordForm = ({ onSubmit }) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(newPassword, confirmPassword);
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col items-center">
      <AuthHeader
        title="Reset Password"
        description="Enter your new password."
      />
      <div className="flex w-full flex-col gap-3">
        <AuthInput
          icon={Key}
          label="New Password"
          type="password"
          name="newPassword"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <AuthInput
          icon={Key}
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>
      <div className="mt-4 w-full">
        <AuthSubmitButton type="submit">Reset Password</AuthSubmitButton>
      </div>
    </form>
  );
};

export default function MultiUserAuth() {
  const { t } = useTranslation();
  const { brandName } = useCustomAppName();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [recoveryCodes, setRecoveryCodes] = useState([]);
  const [downloadComplete, setDownloadComplete] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [showRecoveryForm, setShowRecoveryForm] = useState(false);
  const [showResetPasswordForm, setShowResetPasswordForm] = useState(false);

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
    const { valid, user, token, message, recoveryCodes } =
      await System.requestToken(data);
    if (valid && !!token && !!user) {
      setUser(user);
      setToken(token);

      if (recoveryCodes) {
        setRecoveryCodes(recoveryCodes);
        openRecoveryCodeModal();
      } else {
        window.localStorage.setItem(AUTH_USER, JSON.stringify(user));
        window.localStorage.setItem(AUTH_TOKEN, token);
        window.location = paths.home();
      }
    } else {
      setError(message);
      setLoading(false);
    }
    setLoading(false);
  };

  const handleDownloadComplete = () => setDownloadComplete(true);
  const handleResetPassword = () => setShowRecoveryForm(true);
  const handleRecoverySubmit = async (username, recoveryCodes) => {
    const { success, resetToken, error } = await System.recoverAccount(
      username,
      recoveryCodes
    );

    if (success && resetToken) {
      window.localStorage.setItem("resetToken", resetToken);
      setShowRecoveryForm(false);
      setShowResetPasswordForm(true);
    } else {
      showToast(error, "error", { clear: true });
    }
  };

  const handleResetSubmit = async (newPassword, confirmPassword) => {
    const resetToken = window.localStorage.getItem("resetToken");

    if (resetToken) {
      const { success, error } = await System.resetPassword(
        resetToken,
        newPassword,
        confirmPassword
      );

      if (success) {
        window.localStorage.removeItem("resetToken");
        setShowResetPasswordForm(false);
        showToast("Password reset successful", "success", { clear: true });
      } else {
        showToast(error, "error", { clear: true });
      }
    } else {
      showToast("Invalid reset token", "error", { clear: true });
    }
  };

  useEffect(() => {
    if (downloadComplete && user && token) {
      window.localStorage.setItem(AUTH_USER, JSON.stringify(user));
      window.localStorage.setItem(AUTH_TOKEN, token);
      window.location = paths.home();
    }
  }, [downloadComplete, user, token]);

  if (showRecoveryForm) {
    return (
      <RecoveryForm
        onSubmit={handleRecoverySubmit}
        setShowRecoveryForm={setShowRecoveryForm}
      />
    );
  }

  if (showResetPasswordForm)
    return <ResetPasswordForm onSubmit={handleResetSubmit} />;
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
            icon={User}
            label={t("login.multi-user.placeholder-username")}
            name="username"
            type="text"
            required={true}
            autoComplete="off"
          />
          <AuthInput
            icon={Key}
            label={t("login.multi-user.placeholder-password")}
            name="password"
            type="password"
            required={true}
            autoComplete="off"
          />
          <AuthError message={error} />
        </div>
        <div className="mt-4 flex w-full flex-col items-center gap-4">
          <AuthSubmitButton
            loading={loading}
            loadingText={t("login.multi-user.validating")}
            type="submit"
          >
            {t("login.multi-user.login")}
          </AuthSubmitButton>
          <AuthGhostButton
            type="button"
            className="flex gap-x-1"
            onClick={handleResetPassword}
          >
            {t("login.multi-user.forgot-pass")}?
            <b className="font-bold text-white">
              {t("login.multi-user.reset")}
            </b>
          </AuthGhostButton>
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
