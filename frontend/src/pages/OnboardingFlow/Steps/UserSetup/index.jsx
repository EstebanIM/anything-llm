import { useEffect, useId, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import System from "@/models/system";
import paths from "@/utils/paths";
import { AUTH_TIMESTAMP, AUTH_TOKEN, AUTH_USER } from "@/utils/constants";
import { authErrorMessage } from "@/utils/authErrors";
import {
  USERNAME_MIN_LENGTH,
  USERNAME_MAX_LENGTH,
  USERNAME_PATTERN,
  USERNAME_REGEX,
} from "@/utils/username";
import { PW_REGEX } from "@/pages/GeneralSettings/Security";
import PreLoader from "@/components/Preloader";
import CTAButton from "@/components/lib/CTAButton";
import StatusNote from "@/components/lib/StatusNote";
import SegmentedControl from "@/components/lib/SegmentedControl";
import PasswordInput from "@/components/lib/PasswordInput";
import RecoveryCodesDialog from "@/components/Modals/DisplayRecoveryCodeModal";
import {
  FIELD_ERROR,
  FIELD_HELP,
  FIELD_INPUT,
  FIELD_LABEL,
} from "@/components/ProviderFields";
import OnboardingLayout, { useOnboarding } from "../OnboardingLayout";

const MIN_PASSWORD_LENGTH = 8;
// Order in which errors are checked and the first one receives focus.
const FIELD_ORDER = [
  "audience",
  "usePassword",
  "username",
  "password",
  "confirm",
];

// Inherits the note's color, which already has the contrast for its tone.
const NOTE_LINK = "font-semibold underline";

function storeSession(token, user = null) {
  if (user) window.localStorage.setItem(AUTH_USER, JSON.stringify(user));
  else window.localStorage.removeItem(AUTH_USER);
  window.localStorage.setItem(AUTH_TOKEN, token);
  window.localStorage.removeItem(AUTH_TIMESTAMP);
}

export default function UserSetup() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { userSetup, updateUserSetup } = useOnboarding();
  const { audience, usePassword, username, password, confirm } = userSetup;
  const id = useId();
  const formId = `${id}-form`;
  const fieldId = (name) => `${id}-${name}`;

  // What the server already has: { multiUser, requiresAuth }, or null if it failed to load.
  const [instance, setInstance] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [errors, setErrors] = useState({});
  // { message, signIn } - signIn when access was saved but the session was not.
  const [formError, setFormError] = useState(null);
  const [recovery, setRecovery] = useState(null);

  async function fetchInstance() {
    setLoading(true);
    const settings = await System.keys();
    setInstance(
      settings
        ? {
            multiUser: !!settings.MultiUserMode,
            requiresAuth: !!settings.RequiresAuth,
          }
        : null
    );
    setLoading(false);
  }

  useEffect(() => {
    fetchInstance();
  }, []);

  // Access set up earlier in this setup (or before a reload) is not offered again.
  const configured = instance?.multiUser
    ? "team"
    : instance?.requiresAuth
      ? "password"
      : null;
  const needsCredentials =
    audience === "my_team" || (audience === "just_me" && usePassword === "yes");

  function setField(name, value) {
    updateUserSetup({ [name]: value });
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }));
  }

  function validate() {
    const found = {};
    if (!audience) found.audience = t("onboarding-flow.choose-audience");
    if (audience === "just_me" && !usePassword)
      found.usePassword = t("onboarding-flow.choose-password");

    if (audience === "my_team") {
      const name = username.trim();
      if (!name) found.username = t("onboarding-flow.username-required");
      else if (
        name.length < USERNAME_MIN_LENGTH ||
        name.length > USERNAME_MAX_LENGTH ||
        !USERNAME_REGEX.test(name)
      )
        found.username = t("onboarding-flow.username-invalid");
    }

    if (needsCredentials) {
      if (!password) found.password = t("onboarding-flow.password-required");
      else if (password.length < MIN_PASSWORD_LENGTH)
        found.password = t("onboarding-flow.password-too-short");
      else if (audience === "just_me" && !PW_REGEX.test(password))
        found.password = t("settings-pages.password-invalid-chars");

      if (!confirm) found.confirm = t("onboarding-flow.confirm-required");
      else if (confirm !== password)
        found.confirm = t("auth-errors.passwords-mismatch");
    }
    return found;
  }

  function focusField(name) {
    const target = document.getElementById(fieldId(name));
    if (!target) return;
    // A radio group takes focus on its tabbable option.
    (target.querySelector('[role="radio"][tabindex="0"]') ?? target).focus();
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (saving) return;
    if (configured) {
      navigate(paths.onboarding.dataHandling());
      return;
    }

    const found = validate();
    setErrors(found);
    const firstError = FIELD_ORDER.find((name) => found[name]);
    if (firstError) {
      focusField(firstError);
      return;
    }

    setFormError(null);
    if (audience === "just_me" && usePassword === "no") {
      navigate(paths.onboarding.dataHandling());
      return;
    }

    setSaving(true);
    if (audience === "just_me") await setInstancePassword();
    else await createAdmin();
  }

  function signInFailed(message) {
    setSaving(false);
    setFormError({
      message: t("onboarding-flow.signin-failed", {
        error: authErrorMessage(message, t),
      }),
      signIn: true,
    });
  }

  async function setInstancePassword() {
    const { success, error } = await System.updateSystemPassword({
      usePassword: true,
      newPassword: password,
    });
    if (!success) {
      setSaving(false);
      setFormError({
        message: t("settings-pages.password-failed", {
          error: error || t("auth-errors.generic"),
        }),
      });
      return;
    }

    // Sign in with the password just set so the next steps (and the app)
    // do not stop at the login screen.
    const { valid, token, message } = await System.requestToken({ password });
    updateUserSetup({ password: "", confirm: "" });
    setInstance((prev) => ({ ...prev, requiresAuth: true }));
    if (!valid || !token) return signInFailed(message);

    storeSession(token);
    navigate(paths.onboarding.dataHandling());
  }

  async function createAdmin() {
    const name = username.trim();
    const { success, error } = await System.setupMultiUser({
      username: name,
      password,
    });
    if (!success) {
      setSaving(false);
      setFormError({
        message: t("settings-pages.multiuser-failed", {
          error: error || t("auth-errors.generic"),
        }),
      });
      return;
    }

    const { valid, token, user, message, recoveryCodes } =
      await System.requestToken({ username: name, password });
    updateUserSetup({ password: "", confirm: "" });
    setInstance((prev) => ({ ...prev, multiUser: true }));
    if (!valid || !token) return signInFailed(message);

    // The server shows the recovery codes only once, on this first sign-in:
    // keep the session until the person confirms they saved them.
    if (recoveryCodes?.length) {
      setRecovery({ codes: recoveryCodes, token, user, username: name });
      return;
    }
    storeSession(token, user);
    navigate(paths.onboarding.dataHandling());
  }

  function describedBy(name, ...help) {
    return [...help, errors[name] ? `${fieldId(name)}-error` : null]
      .filter(Boolean)
      .join(" ");
  }

  // A plain render helper, not a component: a component declared here would
  // remount (and re-announce) on every keystroke.
  function fieldError(name) {
    if (!errors[name]) return null;
    return (
      <p id={`${fieldId(name)}-error`} role="alert" className={FIELD_ERROR}>
        {errors[name]}
      </p>
    );
  }

  const passwordHelpId = `${fieldId("password")}-help`;
  const warnId = `${fieldId("password")}-warn`;

  return (
    <OnboardingLayout
      step="user-setup"
      title={t("onboarding.userSetup.title")}
      description={t("onboarding.userSetup.description")}
      onBack={() => navigate(paths.onboarding.llmPreference())}
      next={{
        label: t("onboarding-flow.next"),
        busyLabel: t("common.saving"),
        busy: saving,
        disabled: loading || !instance,
        form: formId,
      }}
    >
      {loading ? (
        <div className="flex justify-center py-16">
          <PreLoader />
        </div>
      ) : !instance ? (
        <div className="flex flex-col items-start gap-y-4 py-6">
          <p role="alert" className="text-sm text-white">
            {t("provider-pages.load-error")}
          </p>
          <CTAButton type="button" onClick={fetchInstance} className="!mr-0">
            {t("provider-fields.retry")}
          </CTAButton>
        </div>
      ) : (
        <form
          id={formId}
          onSubmit={handleSubmit}
          noValidate
          className="flex flex-col gap-y-8"
        >
          {configured ? (
            <StatusNote tone="success">
              {t(
                configured === "team"
                  ? "onboarding-flow.team-done"
                  : "onboarding-flow.password-done"
              )}
            </StatusNote>
          ) : (
            <>
              <div className="flex flex-col gap-y-3">
                <p
                  id={`${fieldId("audience")}-label`}
                  className="text-sm font-semibold text-white"
                >
                  {t("onboarding.userSetup.howManyUsers")}
                </p>
                <div id={fieldId("audience")}>
                  <SegmentedControl
                    value={audience}
                    onChange={(value) => {
                      setField("audience", value);
                      setErrors({});
                      setFormError(null);
                    }}
                    labelledBy={`${fieldId("audience")}-label`}
                    describedBy={
                      describedBy(
                        "audience",
                        audience === "my_team"
                          ? `${fieldId("audience")}-help`
                          : null
                      ) || undefined
                    }
                    options={[
                      {
                        value: "just_me",
                        label: t("onboarding.userSetup.justMe"),
                      },
                      {
                        value: "my_team",
                        label: t("onboarding.userSetup.myTeam"),
                      },
                    ]}
                  />
                </div>
                {fieldError("audience")}
                {audience === "my_team" && (
                  <p
                    id={`${fieldId("audience")}-help`}
                    className="text-xs text-theme-text-secondary max-w-[600px]"
                  >
                    {t("onboarding.userSetup.teamHint")}
                  </p>
                )}
              </div>

              {audience === "just_me" && (
                <div className="flex flex-col gap-y-3">
                  <p
                    id={`${fieldId("usePassword")}-label`}
                    className="text-sm font-semibold text-white"
                  >
                    {t("onboarding.userSetup.setPassword")}
                  </p>
                  <div id={fieldId("usePassword")}>
                    <SegmentedControl
                      value={usePassword}
                      onChange={(value) => {
                        setField("usePassword", value);
                        setErrors({});
                      }}
                      labelledBy={`${fieldId("usePassword")}-label`}
                      describedBy={
                        describedBy(
                          "usePassword",
                          usePassword === "no" ? warnId : null
                        ) || undefined
                      }
                      options={[
                        { value: "yes", label: t("common.yes") },
                        { value: "no", label: t("common.no") },
                      ]}
                    />
                  </div>
                  {fieldError("usePassword")}
                  {usePassword === "no" && (
                    <StatusNote
                      tone="warning"
                      id={warnId}
                      className="max-w-[600px]"
                    >
                      {t("onboarding-flow.no-password-warning")}
                    </StatusNote>
                  )}
                </div>
              )}

              {needsCredentials && (
                <div className="flex flex-col gap-y-6">
                  {audience === "my_team" && (
                    <div className="w-full md:w-80">
                      <label
                        htmlFor={fieldId("username")}
                        className={FIELD_LABEL}
                      >
                        {t("onboarding.userSetup.adminUsername")}
                      </label>
                      <input
                        id={fieldId("username")}
                        name="username"
                        type="text"
                        className={FIELD_INPUT}
                        value={username}
                        onChange={(e) => setField("username", e.target.value)}
                        minLength={USERNAME_MIN_LENGTH}
                        maxLength={USERNAME_MAX_LENGTH}
                        pattern={USERNAME_PATTERN}
                        required
                        autoComplete="username"
                        autoCapitalize="none"
                        autoCorrect="off"
                        spellCheck={false}
                        aria-invalid={errors.username ? true : undefined}
                        aria-describedby={describedBy(
                          "username",
                          `${fieldId("username")}-help`
                        )}
                      />
                      <p
                        id={`${fieldId("username")}-help`}
                        className={FIELD_HELP}
                      >
                        {t("common.username_requirements")}
                      </p>
                      {fieldError("username")}
                    </div>
                  )}

                  <div className="w-full md:w-80">
                    <label
                      htmlFor={fieldId("password")}
                      className={FIELD_LABEL}
                    >
                      {t(
                        audience === "my_team"
                          ? "onboarding.userSetup.adminPassword"
                          : "onboarding.userSetup.instancePassword"
                      )}
                    </label>
                    <PasswordInput
                      id={fieldId("password")}
                      name="password"
                      className={FIELD_INPUT}
                      value={password}
                      onChange={(e) => setField("password", e.target.value)}
                      minLength={MIN_PASSWORD_LENGTH}
                      required
                      autoComplete="new-password"
                      aria-invalid={errors.password ? true : undefined}
                      aria-describedby={describedBy(
                        "password",
                        passwordHelpId,
                        audience === "just_me" ? warnId : null
                      )}
                    />
                    <p id={passwordHelpId} className={FIELD_HELP}>
                      {t(
                        audience === "my_team"
                          ? "settings-pages.password-min-length"
                          : "settings-pages.password-requirements"
                      )}
                    </p>
                    {audience === "just_me" && (
                      <p id={warnId} className={FIELD_HELP}>
                        {t("onboarding.userSetup.passwordWarn")}
                      </p>
                    )}
                    {fieldError("password")}
                  </div>

                  <div className="w-full md:w-80">
                    <label htmlFor={fieldId("confirm")} className={FIELD_LABEL}>
                      {t("onboarding-flow.confirm-password")}
                    </label>
                    <PasswordInput
                      id={fieldId("confirm")}
                      name="confirm"
                      className={FIELD_INPUT}
                      value={confirm}
                      onChange={(e) => setField("confirm", e.target.value)}
                      minLength={MIN_PASSWORD_LENGTH}
                      required
                      autoComplete="new-password"
                      aria-invalid={errors.confirm ? true : undefined}
                      aria-describedby={describedBy("confirm") || undefined}
                    />
                    {fieldError("confirm")}
                  </div>
                </div>
              )}
            </>
          )}

          {formError && (
            <StatusNote tone="error" announce>
              {formError.message}
              {formError.signIn && (
                <>
                  {" "}
                  <Link to={paths.login()} className={NOTE_LINK}>
                    {t("onboarding-flow.signin-link")}
                  </Link>
                </>
              )}
            </StatusNote>
          )}
        </form>
      )}

      <RecoveryCodesDialog
        isOpen={!!recovery}
        recoveryCodes={recovery?.codes ?? []}
        username={recovery?.username}
        onContinue={() => {
          storeSession(recovery.token, recovery.user);
          navigate(paths.onboarding.dataHandling());
        }}
      />
    </OnboardingLayout>
  );
}
