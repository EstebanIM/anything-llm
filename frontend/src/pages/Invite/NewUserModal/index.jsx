import React, { useId, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Key, User } from "lucide-react";
import Invite from "@/models/invite";
import System from "@/models/system";
import paths from "@/utils/paths";
import useCustomAppName from "@/hooks/useCustomAppName";
import RecoveryCodesDialog from "@/components/Modals/DisplayRecoveryCodeModal";
import {
  AUTH_PRIMARY_LINK,
  AuthError,
  AuthHeader,
  AuthInput,
  AuthSubmitButton,
} from "@/components/Modals/Password/AuthUI";
import {
  PASSWORD_MIN_LENGTH,
  passwordErrorMessage,
  startSession,
} from "@/components/Modals/Password/session";
import {
  USERNAME_MIN_LENGTH,
  USERNAME_MAX_LENGTH,
  USERNAME_PATTERN,
  USERNAME_REGEX,
} from "@/utils/username";

function validUsername(value) {
  return (
    value.length >= USERNAME_MIN_LENGTH &&
    value.length <= USERNAME_MAX_LENGTH &&
    USERNAME_REGEX.test(value)
  );
}

/**
 * Account creation from an invitation, inside the sign-in panel. The new
 * account gets its recovery codes on its first sign-in: they are shown before
 * the session is stored, or the person could never recover the account.
 */
export default function NewUserForm({ code }) {
  const { t } = useTranslation();
  const { brandName } = useCustomAppName();
  const usernameId = useId();
  const passwordId = useId();
  const errorId = useId();
  const [busy, setBusy] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});
  const [error, setError] = useState(null);
  // The account exists but signing in failed: the invite is spent, so the
  // only way on is the sign-in page.
  const [created, setCreated] = useState(false);
  const [session, setSession] = useState(null);

  const clearFieldError = (field) =>
    fieldErrors[field] &&
    setFieldErrors((prev) => ({ ...prev, [field]: null }));

  const handleCreate = async (e) => {
    e.preventDefault();
    if (busy || created) return;
    const form = new FormData(e.target);
    const username = String(form.get("username") || "").trim();
    const password = String(form.get("password") || "");
    const errors = {};
    if (!validUsername(username))
      errors.username = t("auth-pages.errors.username-invalid");
    if (password.length < PASSWORD_MIN_LENGTH)
      errors.password = t("auth-pages.errors.password-short");
    setFieldErrors(errors);
    setError(null);
    if (errors.username || errors.password) {
      document
        .getElementById(errors.username ? usernameId : passwordId)
        ?.focus();
      return;
    }

    setBusy(true);
    const { success, error: acceptError } = await Invite.acceptInvite(code, {
      username,
      password,
    });
    if (!success) {
      setBusy(false);
      if (/already exists/i.test(String(acceptError || ""))) {
        setFieldErrors({ username: t("auth-pages.invite.username-taken") });
        document.getElementById(usernameId)?.focus();
        return;
      }
      setError(passwordErrorMessage(acceptError, t));
      return;
    }

    const { valid, user, token, recoveryCodes } = await System.requestToken({
      username,
      password,
    });
    if (valid && !!token && !!user) {
      if (recoveryCodes?.length) {
        setSession({ user, token, recoveryCodes });
        return;
      }
      startSession({ user, token, to: paths.home() });
      return;
    }
    setBusy(false);
    setCreated(true);
    setError(t("auth-pages.invite.created-login-failed"));
  };

  return (
    <>
      <form
        onSubmit={handleCreate}
        noValidate={true}
        className="flex w-full flex-col items-center"
      >
        <AuthHeader
          title={t("auth-pages.invite.title", { brandName })}
          description={t("auth-pages.invite.description")}
        />
        <div className="flex w-full flex-col gap-4">
          <AuthInput
            id={usernameId}
            icon={User}
            label={t("login.multi-user.placeholder-username")}
            name="username"
            type="text"
            minLength={USERNAME_MIN_LENGTH}
            maxLength={USERNAME_MAX_LENGTH}
            pattern={USERNAME_PATTERN}
            required={true}
            readOnly={created}
            autoComplete="username"
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck={false}
            hint={t("common.username_requirements")}
            error={fieldErrors.username}
            onChange={() => clearFieldError("username")}
          />
          <AuthInput
            id={passwordId}
            icon={Key}
            label={t("login.multi-user.placeholder-password")}
            name="password"
            type="password"
            minLength={PASSWORD_MIN_LENGTH}
            required={true}
            readOnly={created}
            autoComplete="new-password"
            hint={t("settings-pages.password-min-length")}
            error={fieldErrors.password}
            onChange={() => clearFieldError("password")}
          />
          <AuthError id={errorId} message={error} />
        </div>
        <div className="mt-5 w-full">
          {created ? (
            <Link to={paths.login()} className={AUTH_PRIMARY_LINK}>
              {t("auth-pages.go-to-login")}
            </Link>
          ) : (
            <AuthSubmitButton
              busy={busy}
              busyText={t("auth-pages.invite.busy")}
            >
              {t("auth-pages.invite.submit")}
            </AuthSubmitButton>
          )}
        </div>
      </form>

      <RecoveryCodesDialog
        isOpen={!!session}
        recoveryCodes={session?.recoveryCodes ?? []}
        username={session?.user?.username}
        onContinue={() => startSession({ ...session, to: paths.home() })}
      />
    </>
  );
}
