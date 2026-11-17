import React, { useEffect, useId, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Key, User } from "lucide-react";
import System from "@/models/system";
import { authErrorMessage } from "@/utils/authErrors";
import useCustomAppName from "@/hooks/useCustomAppName";
import usePageTitle from "@/hooks/usePageTitle";
import RecoveryCodesDialog from "@/components/Modals/DisplayRecoveryCodeModal";
import {
  AuthError,
  AuthGhostButton,
  AuthHeader,
  AuthInput,
  AuthNotice,
  AuthSubmitButton,
  useAuthNotice,
} from "./AuthUI";
import {
  PASSWORD_MIN_LENGTH,
  passwordErrorMessage,
  startSession,
} from "./session";

// "[001]" wrong username or password, "[003]" wrong password: the fields are
// at fault. Other codes (suspended, password sign-in off, network) are not.
const CREDENTIALS_ERROR = /^\[00[13]\]/;

// Username and recovery codes are typed exactly: no capitals or corrections.
const LITERAL_INPUT = {
  autoCapitalize: "none",
  autoCorrect: "off",
  spellCheck: false,
};

function LoginForm({
  headingRef,
  forgotRef,
  noticeRef,
  notice,
  clearNotice,
  username,
  setUsername,
  onForgot,
}) {
  const { t } = useTranslation();
  const { brandName } = useCustomAppName();
  const usernameId = useId();
  const errorId = useId();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const [session, setSession] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (busy) return;
    setError(null);
    clearNotice();
    setBusy(true);
    const form = new FormData(e.target);
    const { valid, user, token, message, recoveryCodes } =
      await System.requestToken({
        username: String(form.get("username") || "").trim(),
        password: form.get("password"),
      });
    if (valid && !!token && !!user) {
      // First sign-in (or after a reset): the codes are shown once and the
      // session is stored only when the person confirms they kept them. The
      // button stays busy behind the dialog.
      if (recoveryCodes?.length) {
        setSession({ user, token, recoveryCodes });
        return;
      }
      startSession({ user, token });
      return;
    }
    setBusy(false);
    const credentials = CREDENTIALS_ERROR.test(String(message || ""));
    setError({ message: authErrorMessage(message, t), credentials });
    if (credentials) document.getElementById(usernameId)?.focus();
  };

  const fieldError = error?.credentials
    ? { invalid: true, describedBy: errorId }
    : {};

  return (
    <>
      <form
        onSubmit={handleLogin}
        className="flex w-full flex-col items-center"
      >
        <AuthHeader
          ref={headingRef}
          title={t("auth-pages.login.title", { brandName })}
          description={t("login.sign-in", { appName: brandName })}
        />
        <AuthNotice ref={noticeRef} reason={notice} />
        <div className="flex w-full flex-col gap-4">
          <AuthInput
            id={usernameId}
            icon={User}
            label={t("login.multi-user.placeholder-username")}
            name="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required={true}
            autoComplete="username"
            {...LITERAL_INPUT}
            {...fieldError}
          />
          <AuthInput
            icon={Key}
            label={t("login.multi-user.placeholder-password")}
            name="password"
            type="password"
            required={true}
            autoComplete="current-password"
            {...fieldError}
          />
          <AuthError id={errorId} message={error?.message} />
        </div>
        <div className="mt-5 flex w-full flex-col items-center gap-2">
          <AuthSubmitButton
            busy={busy}
            busyText={t("login.multi-user.validating")}
          >
            {t("login.multi-user.login")}
          </AuthSubmitButton>
          <AuthGhostButton ref={forgotRef} onClick={onForgot}>
            {t("auth-pages.login.forgot")}{" "}
            <strong className="font-bold text-[#0d1117]">
              {t("auth-pages.login.reset-link")}
            </strong>
          </AuthGhostButton>
        </div>
      </form>

      <RecoveryCodesDialog
        isOpen={!!session}
        recoveryCodes={session?.recoveryCodes ?? []}
        username={session?.user?.username}
        onContinue={() => startSession(session)}
      />
    </>
  );
}

function RecoveryForm({
  headingRef,
  username,
  setUsername,
  onBack,
  onVerified,
}) {
  const { t } = useTranslation();
  const usernameId = useId();
  const errorId = useId();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (busy) return;
    setError(null);
    setBusy(true);
    const form = new FormData(e.target);
    // Codes are lowercase UUIDs compared with bcrypt: a capital or a stray
    // space from copying would make a valid code fail.
    const recoveryCodes = ["recoveryCode1", "recoveryCode2"]
      .map((name) =>
        String(form.get(name) || "")
          .trim()
          .toLowerCase()
      )
      .filter(Boolean);
    const { success, resetToken, error } = await System.recoverAccount(
      username.trim(),
      recoveryCodes
    );
    if (success && resetToken) {
      onVerified(resetToken);
      return;
    }
    setBusy(false);
    setError(authErrorMessage(error, t));
    document.getElementById(usernameId)?.focus();
  };

  const fieldError = error ? { invalid: true, describedBy: errorId } : {};

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col items-center">
      <AuthHeader
        ref={headingRef}
        title={t("login.password-reset.title")}
        description={t("login.password-reset.description")}
      />
      <div className="flex w-full flex-col gap-4">
        <AuthInput
          id={usernameId}
          icon={User}
          label={t("login.multi-user.placeholder-username")}
          name="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required={true}
          autoComplete="username"
          {...LITERAL_INPUT}
          {...fieldError}
        />
        {[1, 2].map((number) => (
          <AuthInput
            key={number}
            icon={Key}
            label={t("auth-pages.recovery.code", { number })}
            type="text"
            name={`recoveryCode${number}`}
            required={true}
            autoComplete="off"
            {...LITERAL_INPUT}
            {...fieldError}
          />
        ))}
        <AuthError id={errorId} message={error} />
      </div>
      <div className="mt-5 flex w-full flex-col items-center gap-2">
        <AuthSubmitButton busy={busy} busyText={t("auth-pages.recovery.busy")}>
          {t("auth-pages.recovery.submit")}
        </AuthSubmitButton>
        <AuthGhostButton onClick={onBack}>
          {t("login.password-reset.back-to-login")}
        </AuthGhostButton>
      </div>
    </form>
  );
}

function ResetPasswordForm({
  headingRef,
  username,
  resetToken,
  onBack,
  onDone,
}) {
  const { t } = useTranslation();
  const passwordId = useId();
  const confirmId = useId();
  const errorId = useId();
  const [busy, setBusy] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});
  const [error, setError] = useState(null);

  const clearFieldError = (field) =>
    fieldErrors[field] &&
    setFieldErrors((prev) => ({ ...prev, [field]: null }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (busy) return;
    const form = new FormData(e.target);
    const password = String(form.get("newPassword") || "");
    const confirm = String(form.get("confirmPassword") || "");
    const errors = {};
    if (password.length < PASSWORD_MIN_LENGTH)
      errors.password = t("auth-pages.errors.password-short");
    else if (confirm !== password)
      errors.confirm = t("auth-errors.passwords-mismatch");
    setFieldErrors(errors);
    setError(null);
    if (errors.password || errors.confirm) {
      document
        .getElementById(errors.password ? passwordId : confirmId)
        ?.focus();
      return;
    }

    setBusy(true);
    const { success, error } = await System.resetPassword(
      resetToken,
      password,
      confirm
    );
    if (success) {
      onDone();
      return;
    }
    setBusy(false);
    setError(passwordErrorMessage(error, t));
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate={true}
      className="flex w-full flex-col items-center"
    >
      <AuthHeader
        ref={headingRef}
        title={t("auth-pages.reset.title")}
        description={t("auth-pages.reset.description")}
      />
      {/* Lets password managers file the new password under this account. */}
      <input
        type="text"
        name="username"
        autoComplete="username"
        value={username}
        readOnly={true}
        hidden={true}
      />
      <div className="flex w-full flex-col gap-4">
        <AuthInput
          id={passwordId}
          icon={Key}
          label={t("auth-pages.reset.new-password")}
          type="password"
          name="newPassword"
          required={true}
          minLength={PASSWORD_MIN_LENGTH}
          autoComplete="new-password"
          hint={t("settings-pages.password-min-length")}
          error={fieldErrors.password}
          onChange={() => clearFieldError("password")}
        />
        <AuthInput
          id={confirmId}
          icon={Key}
          label={t("auth-pages.reset.confirm-password")}
          type="password"
          name="confirmPassword"
          required={true}
          autoComplete="new-password"
          error={fieldErrors.confirm}
          onChange={() => clearFieldError("confirm")}
        />
        <AuthError id={errorId} message={error} />
      </div>
      <div className="mt-5 flex w-full flex-col items-center gap-2">
        <AuthSubmitButton busy={busy} busyText={t("auth-pages.reset.busy")}>
          {t("auth-pages.reset.submit")}
        </AuthSubmitButton>
        <AuthGhostButton onClick={onBack}>
          {t("login.password-reset.back-to-login")}
        </AuthGhostButton>
      </div>
    </form>
  );
}

const VIEW_TITLES = {
  login: "login.multi-user.login",
  recovery: "login.password-reset.title",
  reset: "auth-pages.reset.title",
};

export default function MultiUserAuth() {
  const { t } = useTranslation();
  const [view, setView] = useState("login");
  // Shared by the three views: what was typed to sign in fills the recovery
  // form, and the reset form names the account for password managers.
  const [username, setUsername] = useState("");
  // Kept in memory only: it is a one-time credential for this reset.
  const [resetToken, setResetToken] = useState(null);
  const [notice, setNotice] = useAuthNotice();
  const headingRef = useRef(null);
  const forgotRef = useRef(null);
  const noticeRef = useRef(null);
  const focusNext = useRef(null);
  usePageTitle(t(VIEW_TITLES[view]));

  // Each view replaces the previous one: move focus to where it makes sense
  // instead of letting it fall back to <body>.
  useEffect(() => {
    const targets = {
      heading: headingRef,
      forgot: forgotRef,
      notice: noticeRef,
    };
    const target = targets[focusNext.current]?.current;
    focusNext.current = null;
    target?.focus();
  }, [view]);

  const go = (next, focus) => {
    focusNext.current = focus;
    setView(next);
  };

  if (view === "recovery") {
    return (
      <RecoveryForm
        headingRef={headingRef}
        username={username}
        setUsername={setUsername}
        onBack={() => go("login", "forgot")}
        onVerified={(token) => {
          setResetToken(token);
          go("reset", "heading");
        }}
      />
    );
  }

  if (view === "reset") {
    return (
      <ResetPasswordForm
        headingRef={headingRef}
        username={username}
        resetToken={resetToken}
        onBack={() => {
          setResetToken(null);
          go("login", "forgot");
        }}
        onDone={() => {
          setResetToken(null);
          setNotice("password-changed");
          go("login", "notice");
        }}
      />
    );
  }

  return (
    <LoginForm
      headingRef={headingRef}
      forgotRef={forgotRef}
      noticeRef={noticeRef}
      notice={notice}
      clearNotice={() => setNotice(null)}
      username={username}
      setUsername={setUsername}
      onForgot={() => go("recovery", "heading")}
    />
  );
}
