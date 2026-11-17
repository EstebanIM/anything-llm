import React, { useId, useState } from "react";
import { useTranslation } from "react-i18next";
import { Key } from "lucide-react";
import System from "@/models/system";
import { authErrorMessage } from "@/utils/authErrors";
import useCustomAppName from "@/hooks/useCustomAppName";
import usePageTitle from "@/hooks/usePageTitle";
import {
  AuthError,
  AuthHeader,
  AuthInput,
  AuthNotice,
  AuthSubmitButton,
  useAuthNotice,
} from "./AuthUI";
import { startSession } from "./session";

// The server never sends recovery codes in single-user mode: there is no
// account to recover, only the instance password.
export default function SingleUserAuth() {
  const { t } = useTranslation();
  const { brandName } = useCustomAppName();
  const passwordId = useId();
  const errorId = useId();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const [notice, setNotice] = useAuthNotice();
  usePageTitle(t("login.multi-user.login"));

  const handleLogin = async (e) => {
    e.preventDefault();
    if (busy) return;
    setError(null);
    setNotice(null);
    setBusy(true);
    const form = new FormData(e.target);
    const { valid, token, message } = await System.requestToken({
      password: form.get("password"),
    });
    if (valid && !!token) {
      startSession({ token });
      return;
    }
    setBusy(false);
    const wrongPassword = /^\[003\]/.test(String(message || ""));
    setError({ message: authErrorMessage(message, t), wrongPassword });
    if (wrongPassword) {
      const field = document.getElementById(passwordId);
      field?.focus();
      field?.select();
    }
  };

  return (
    <form onSubmit={handleLogin} className="flex w-full flex-col items-center">
      <AuthHeader
        title={t("auth-pages.login.title", { brandName })}
        description={t("auth-pages.single.description")}
      />
      <AuthNotice reason={notice} />
      {/* Password managers need a username to file the password under. */}
      <input
        type="text"
        autoComplete="username"
        value={brandName}
        readOnly={true}
        hidden={true}
      />
      <div className="flex w-full flex-col gap-4">
        <AuthInput
          id={passwordId}
          icon={Key}
          label={t("login.multi-user.placeholder-password")}
          name="password"
          type="password"
          required={true}
          autoComplete="current-password"
          invalid={!!error?.wrongPassword}
          describedBy={error?.wrongPassword ? errorId : undefined}
        />
        <AuthError id={errorId} message={error?.message} />
      </div>
      <div className="mt-5 flex w-full flex-col items-center gap-3">
        <AuthSubmitButton
          busy={busy}
          busyText={t("login.multi-user.validating")}
        >
          {t("login.multi-user.login")}
        </AuthSubmitButton>
        <p className="text-center text-[12px] leading-4 text-[#374151]">
          {t("auth-pages.single.forgot")}
        </p>
      </div>
    </form>
  );
}
