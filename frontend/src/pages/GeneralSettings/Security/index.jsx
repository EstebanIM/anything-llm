import { useEffect, useId, useRef, useState } from "react";
import Sidebar from "@/components/SettingsSidebar";
import showToast from "@/utils/toast";
import System from "@/models/system";
import paths from "@/utils/paths";
import { AUTH_TIMESTAMP, AUTH_TOKEN, AUTH_USER } from "@/utils/constants";
import PreLoader from "@/components/Preloader";
import CTAButton from "@/components/lib/CTAButton";
import { useTranslation } from "react-i18next";
import { TriangleAlert } from "lucide-react";
import Toggle from "@/components/lib/Toggle";
import PasswordInput from "@/components/lib/PasswordInput";
import {
  FIELD_HELP,
  FIELD_INPUT,
  FIELD_LABEL,
} from "@/components/ProviderFields";
import ConfirmModal from "@/components/lib/ConfirmModal";
import {
  USERNAME_MIN_LENGTH,
  USERNAME_MAX_LENGTH,
  USERNAME_PATTERN,
} from "@/utils/username";

export default function GeneralSecurity() {
  const { t } = useTranslation();
  return (
    <div className="w-screen h-screen overflow-hidden bg-zinc-950 light:bg-slate-50 flex">
      <Sidebar />
      <main className="relative md:ml-[2px] md:mr-[16px] md:my-[16px] md:rounded-[16px] bg-zinc-900 light:bg-white w-full h-full md:h-[calc(100%-32px)] overflow-y-scroll p-4 md:p-0">
        <div className="flex flex-col w-full px-1 md:pl-6 md:pr-[50px] pt-16 md:pt-6">
          <h1 className="text-lg leading-6 font-bold text-theme-text-primary border-white light:border-theme-sidebar-border border-b-2 border-opacity-10 py-4">
            {t("security.title")}
          </h1>
        </div>
        <MultiUserMode />
        <PasswordProtection />
      </main>
    </div>
  );
}

function SectionLoader() {
  return (
    <div className="flex justify-center items-center py-10">
      <PreLoader />
    </div>
  );
}

function MultiUserMode() {
  const id = useId();
  const formRef = useRef(null);
  const [saving, setSaving] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const [useMultiUserMode, setUseMultiUserMode] = useState(false);
  const [multiUserModeEnabled, setMultiUserModeEnabled] = useState(false);
  const [confirming, setConfirming] = useState(false);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  // The form only validates the fields; enabling waits for the confirmation.
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!useMultiUserMode) return;
    setConfirming(true);
  };

  const enableMultiUser = async () => {
    const form = new FormData(formRef.current);
    const data = {
      username: form.get("username"),
      password: form.get("password"),
    };

    setSaving(true);
    const { success, error } = await System.setupMultiUser(data);
    if (success) {
      showToast(t("settings-pages.multiuser-enabled"), "success");
      setTimeout(() => {
        window.localStorage.removeItem(AUTH_USER);
        window.localStorage.removeItem(AUTH_TOKEN);
        window.localStorage.removeItem(AUTH_TIMESTAMP);
        window.location = paths.settings.users();
      }, 2_000);
      return;
    }

    setSaving(false);
    setConfirming(false);
    showToast(t("settings-pages.multiuser-failed", { error }), "error");
  };

  useEffect(() => {
    async function fetchIsMultiUserMode() {
      setLoading(true);
      const multiUserModeEnabled = await System.isMultiUserMode();
      setMultiUserModeEnabled(multiUserModeEnabled);
      setLoading(false);
    }
    fetchIsMultiUserMode();
  }, []);

  if (loading) return <SectionLoader />;

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      onChange={() => setHasChanges(true)}
      className="flex flex-col w-full px-1 md:pl-6 md:pr-[50px]"
    >
      <div className="w-full flex flex-col gap-y-4 pb-6 border-white light:border-theme-sidebar-border border-b-2 border-opacity-10">
        <div className="w-full flex flex-col md:flex-row md:items-end md:justify-between gap-4 mt-6">
          <div className="flex flex-col gap-y-1">
            <h2 className="text-base font-bold text-white">
              {t("security.multiuser.title")}
            </h2>
            <p className="text-xs leading-[18px] text-white text-opacity-60">
              {t("security.multiuser.description")}
            </p>
          </div>
          {hasChanges && useMultiUserMode && (
            <CTAButton busy={saving} className="!mr-0 shrink-0">
              {saving ? t("common.saving") : t("common.save")}
            </CTAButton>
          )}
        </div>

        {multiUserModeEnabled ? (
          <p className="text-white text-sm font-semibold">
            {t("security.multiuser.enable.is-enable")}
          </p>
        ) : (
          <>
            <p
              id={`${id}-multiuser-warning`}
              className="flex items-start gap-x-2 max-w-[600px] rounded-lg border border-orange-400/40 light:border-orange-700/40 bg-orange-400/10 light:bg-orange-50 px-3 py-2 text-xs leading-[18px] text-orange-200 light:text-orange-800"
            >
              <TriangleAlert
                strokeWidth={1.5}
                size={16}
                aria-hidden="true"
                className="shrink-0 mt-px"
              />
              {t("settings-pages.multiuser-warning")}
            </p>
            <Toggle
              size="lg"
              label={t("security.multiuser.enable.enable")}
              enabled={useMultiUserMode}
              onChange={(checked) => setUseMultiUserMode(checked)}
              describedBy={`${id}-multiuser-warning ${id}-multiuser-description`}
            />
            <p
              id={`${id}-multiuser-description`}
              className="text-white text-opacity-80 light:text-theme-text-secondary text-xs max-w-[600px]"
            >
              {t("security.multiuser.enable.description")}
            </p>
          </>
        )}

        {useMultiUserMode && !multiUserModeEnabled && (
          <div className="w-full flex flex-col gap-y-6 mt-2">
            <div className="w-full md:w-80">
              <label htmlFor={`${id}-username`} className={FIELD_LABEL}>
                {t("security.multiuser.enable.username")}
              </label>
              <input
                id={`${id}-username`}
                name="username"
                type="text"
                className={FIELD_INPUT}
                minLength={USERNAME_MIN_LENGTH}
                maxLength={USERNAME_MAX_LENGTH}
                pattern={USERNAME_PATTERN}
                required={true}
                autoComplete="username"
                autoCapitalize="none"
                spellCheck={false}
                aria-describedby={`${id}-username-help`}
              />
              <p id={`${id}-username-help`} className={FIELD_HELP}>
                {t("common.username_requirements")}
              </p>
            </div>
            <div className="w-full md:w-80">
              <label htmlFor={`${id}-password`} className={FIELD_LABEL}>
                {t("security.multiuser.enable.password")}
              </label>
              <PasswordInput
                id={`${id}-password`}
                name="password"
                className={FIELD_INPUT}
                minLength={8}
                required={true}
                autoComplete="new-password"
                aria-describedby={`${id}-password-help`}
              />
              <p id={`${id}-password-help`} className={FIELD_HELP}>
                {t("settings-pages.password-min-length")}
              </p>
            </div>
          </div>
        )}
      </div>

      <ConfirmModal
        isOpen={confirming}
        title={t("settings-pages.multiuser-confirm-title")}
        confirmLabel={t("settings-pages.multiuser-confirm")}
        busy={saving}
        onConfirm={enableMultiUser}
        onCancel={() => setConfirming(false)}
      >
        <p>{t("settings-pages.multiuser-confirm-body")}</p>
      </ConfirmModal>
    </form>
  );
}

export const PW_REGEX = new RegExp(/^[a-zA-Z0-9_\-!@$%^&*();]+$/);
function PasswordProtection() {
  const id = useId();
  const [saving, setSaving] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const [multiUserModeEnabled, setMultiUserModeEnabled] = useState(false);
  const [usePassword, setUsePassword] = useState(false);
  const [passwordError, setPasswordError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (multiUserModeEnabled) return false;
    const form = new FormData(e.target);

    if (usePassword && !PW_REGEX.test(form.get("password"))) {
      setPasswordError(t("settings-pages.password-invalid-chars"));
      document.getElementById(`${id}-password`)?.focus();
      return;
    }

    setPasswordError(null);
    setSaving(true);
    const data = {
      usePassword,
      newPassword: form.get("password"),
    };

    const { success, error } = await System.updateSystemPassword(data);
    if (success) {
      setHasChanges(false);
      showToast(t("settings-pages.password-saved"), "success");
      setTimeout(() => {
        window.localStorage.removeItem(AUTH_USER);
        window.localStorage.removeItem(AUTH_TOKEN);
        window.localStorage.removeItem(AUTH_TIMESTAMP);
        window.location.reload();
      }, 3_000);
      return;
    }
    showToast(t("settings-pages.password-failed", { error }), "error");
    setSaving(false);
  };

  useEffect(() => {
    async function fetchIsMultiUserMode() {
      setLoading(true);
      const multiUserModeEnabled = await System.isMultiUserMode();
      const settings = await System.keys();
      setMultiUserModeEnabled(multiUserModeEnabled);
      setUsePassword(settings?.RequiresAuth);
      setLoading(false);
    }
    fetchIsMultiUserMode();
  }, []);

  if (loading) return <SectionLoader />;

  if (multiUserModeEnabled) return null;
  return (
    <form
      onSubmit={handleSubmit}
      onChange={() => setHasChanges(true)}
      className="flex flex-col w-full px-1 md:pl-6 md:pr-[50px]"
    >
      <div className="w-full flex flex-col gap-y-4 pb-6 border-white light:border-theme-sidebar-border border-b-2 border-opacity-10">
        <div className="w-full flex flex-col md:flex-row md:items-end md:justify-between gap-4 mt-6">
          <div className="flex flex-col gap-y-1">
            <h2 className="text-base font-bold text-white">
              {t("security.password.title")}
            </h2>
            <p className="text-xs leading-[18px] text-white text-opacity-60">
              {t("security.password.description")}
            </p>
          </div>
          {hasChanges && (
            <CTAButton busy={saving} className="!mr-0 shrink-0">
              {saving ? t("common.saving") : t("common.save")}
            </CTAButton>
          )}
        </div>
        <Toggle
          size="lg"
          label={t("security.password.title")}
          enabled={usePassword}
          onChange={(checked) => setUsePassword(checked)}
        />
        {usePassword && (
          <div className="w-full md:w-80 mt-2">
            <label htmlFor={`${id}-password`} className={FIELD_LABEL}>
              {t("security.password.password-label")}
            </label>
            <PasswordInput
              id={`${id}-password`}
              name="password"
              className={FIELD_INPUT}
              minLength={8}
              required={true}
              autoComplete="new-password"
              aria-invalid={passwordError ? true : undefined}
              aria-describedby={`${id}-password-help${passwordError ? ` ${id}-password-error` : ""}`}
              onChange={() => passwordError && setPasswordError(null)}
            />
            <p id={`${id}-password-help`} className={FIELD_HELP}>
              {t("settings-pages.password-requirements")}
            </p>
            {passwordError && (
              <p
                id={`${id}-password-error`}
                role="alert"
                className="mt-2 text-xs text-red-400 light:text-red-700"
              >
                {passwordError}
              </p>
            )}
          </div>
        )}
      </div>
    </form>
  );
}
