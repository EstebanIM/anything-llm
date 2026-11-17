import { useCallback, useEffect, useId, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { Trans, useTranslation } from "react-i18next";
import { CircleX, RefreshCw, SquareArrowOutUpRight } from "lucide-react";
import Admin from "@/models/admin";
import System from "@/models/system";
import OutlookAgent from "@/models/outlookAgent";
import StatusNote from "@/components/lib/StatusNote";
import CTAButton from "@/components/lib/CTAButton";
import ConfirmModal from "@/components/lib/ConfirmModal";
import CopyButton from "@/components/lib/CopyButton";
import ServerErrorDetail from "@/components/lib/ServerErrorDetail";
import {
  ExternalLink,
  FIELD_ERROR,
  FIELD_HELP,
  FIELD_INPUT,
  FIELD_LABEL,
  FIELD_SELECT,
  FieldLabel,
  SecretInput,
} from "@/components/ProviderFields";
import { API_BASE } from "@/utils/constants";
import paths from "@/utils/paths";
import { serverErrorParts } from "@/utils/serverErrors";
import {
  DANGER_OUTLINE_BUTTON,
  IntegrationConfigCard,
  LINK_CLASS,
  PANEL_TEXT,
  PanelHeader,
  PanelLoadError,
  PanelLoading,
  SECONDARY_BUTTON,
} from "../IntegrationParts/PanelParts";
import SkillToggleList from "../IntegrationParts/SkillToggleList";
import { getOutlookSkills } from "./utils";
import OutlookIcon from "./outlook.png";

const EMPTY_FORM = {
  clientId: "",
  tenantId: "",
  clientSecret: "",
  authType: "common",
};
const AZURE_PORTAL_URL = "https://portal.azure.com/";

/**
 * Redirect URI to register in Azure. The server builds it from the request
 * host (getOutlookRedirectUri in server/endpoints/utils/outlookAgentUtils.js);
 * the API origin seen from the browser gives the same value.
 */
function outlookRedirectUri() {
  const api = new URL(API_BASE, window.location.origin);
  const path = api.pathname.replace(/\/+$/, "");
  return `${api.origin}${path}/agent-skills/outlook/auth-callback`;
}

function formFromStatus(status) {
  const config = status?.config ?? {};
  return {
    clientId: config.clientId || "",
    tenantId: config.tenantId || "",
    clientSecret: config.clientSecret || "",
    authType: config.authType || "common",
  };
}

function sameForm(a, b) {
  return (
    a.clientId.trim() === b.clientId.trim() &&
    a.tenantId.trim() === b.tenantId.trim() &&
    a.clientSecret === b.clientSecret &&
    a.authType === b.authType
  );
}

function validateForm(form, t) {
  const errors = {};
  if (!form.clientId.trim())
    errors.clientId = t("agent-integrations.outlook.client-id-required");
  if (form.authType === "organization" && !form.tenantId.trim())
    errors.tenantId = t("agent-integrations.outlook.tenant-id-required");
  if (!form.clientSecret.trim())
    errors.clientSecret = t(
      "agent-integrations.outlook.client-secret-required"
    );
  return errors;
}

/** Drops the OAuth result from the address bar, keeping the router state. */
function clearAuthParams(params) {
  params.delete("outlook_auth");
  params.delete("message");
  const query = params.toString();
  window.history.replaceState(
    window.history.state,
    document.title,
    `${window.location.pathname}${query ? `?${query}` : ""}${window.location.hash}`
  );
}

export default function OutlookSkillPanel({
  title,
  skill,
  toggleSkill,
  enabled = false,
  disabled = false,
  setHasChanges,
  hasChanges = false,
}) {
  const { t } = useTranslation();
  const headingId = useId();
  const warningId = useId();
  const [disabledSkills, setDisabledSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const [isMultiUserMode, setIsMultiUserMode] = useState(false);
  const [status, setStatus] = useState({
    isAuthenticated: false,
    hasCredentials: false,
  });
  // `saved` mirrors the server (secret masked); `draft` is what the fields show.
  const [credentials, setCredentials] = useState({
    saved: EMPTY_FORM,
    draft: EMPTY_FORM,
  });
  const [configExpanded, setConfigExpanded] = useState(true);
  const [notice, setNotice] = useState(null);
  const prevHasChanges = useRef(hasChanges);

  /**
   * Stores a status response. The fields follow the server unless the user is
   * editing them (or `resetForm` asks to discard the edits).
   */
  const applyStatus = useCallback((res, { resetForm = false } = {}) => {
    const next = formFromStatus(res);
    setStatus({
      isAuthenticated: !!res?.isAuthenticated,
      hasCredentials: !!res?.hasCredentials,
    });
    setCredentials((prev) => ({
      saved: next,
      draft: resetForm || sameForm(prev.draft, prev.saved) ? next : prev.draft,
    }));
  }, []);

  const load = useCallback(async () => {
    setLoading(true);
    setLoadError(false);
    const [prefsRes, settingsRes, statusRes] = await Promise.all([
      Admin.systemPreferencesByFields(["disabled_outlook_skills"]),
      System.keys(),
      OutlookAgent.getStatus(),
    ]);
    const multiUser = settingsRes?.MultiUserMode ?? false;
    setIsMultiUserMode(multiUser);
    if (multiUser) {
      setLoading(false);
      return;
    }
    if (!prefsRes?.settings || !statusRes?.success) {
      setLoadError(true);
      setLoading(false);
      return;
    }
    setDisabledSkills(prefsRes.settings.disabled_outlook_skills ?? []);
    applyStatus(statusRes, { resetForm: true });
    setConfigExpanded(!(statusRes.isAuthenticated && statusRes.hasCredentials));
    setLoading(false);
  }, [applyStatus]);

  useEffect(() => {
    load();
  }, [load]);

  // Result of the Microsoft sign-in when the callback brought us back here.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const result = params.get("outlook_auth");
    if (!result) return;
    if (result === "success") {
      setNotice({
        tone: "success",
        text: t("agent-integrations.outlook.auth-success"),
      });
    } else {
      const { message, detail } = serverErrorParts(
        params.get("message"),
        t,
        "agent-integrations.outlook.auth-error"
      );
      setNotice({ tone: "error", text: message, detail });
    }
    clearAuthParams(params);
  }, []);

  // The page saved or discarded its changes: reload the sub-skills.
  useEffect(() => {
    if (prevHasChanges.current === true && hasChanges === false) {
      Promise.all([
        Admin.systemPreferencesByFields(["disabled_outlook_skills"]),
        OutlookAgent.getStatus(),
      ]).then(([prefsRes, statusRes]) => {
        if (prefsRes?.settings)
          setDisabledSkills(prefsRes.settings.disabled_outlook_skills ?? []);
        if (statusRes?.success) applyStatus(statusRes);
      });
    }
    prevHasChanges.current = hasChanges;
  }, [hasChanges]);

  function toggleOutlookSkill(skillName) {
    setHasChanges(true);
    setDisabledSkills((prev) =>
      prev.includes(skillName)
        ? prev.filter((s) => s !== skillName)
        : [...prev, skillName]
    );
  }

  const connected = status.isAuthenticated && status.hasCredentials;
  const ready = !loading && !loadError;

  return (
    <div className="p-2">
      <div className="flex flex-col gap-y-[18px] max-w-[500px]">
        <PanelHeader
          headingId={headingId}
          title={title}
          icon={<img src={OutlookIcon} alt="" className="w-6 h-6 shrink-0" />}
          enabled={enabled}
          disabled={disabled || isMultiUserMode}
          onToggle={() => toggleSkill(skill)}
          describedBy={isMultiUserMode ? warningId : undefined}
        />

        {isMultiUserMode && (
          <StatusNote tone="warning" id={warningId}>
            {t("agent.skill.outlook.multiUserWarning")}
          </StatusNote>
        )}

        <p className={PANEL_TEXT}>
          <Trans
            i18nKey="agent.skill.outlook.description"
            components={{
              a: (
                <ExternalLink
                  href={paths.docs("/agent/usage/outlook-agent")}
                  className={LINK_CLASS}
                />
              ),
            }}
          />
        </p>

        {/* The Microsoft callback can land here with the skill still off (it
            was enabled but not saved in the other tab): show its result anyway. */}
        {notice && !(enabled && !isMultiUserMode && ready) && (
          <StatusNote tone={notice.tone} announce>
            {notice.text}
            <ServerErrorDetail detail={notice.detail} />
          </StatusNote>
        )}

        {enabled && !isMultiUserMode && (
          <>
            {loading && <PanelLoading />}
            {!loading && loadError && (
              <PanelLoadError
                message={t("agent-integrations.load-error", { name: title })}
                onRetry={load}
              />
            )}
            {ready && (
              <>
                <input
                  name="system::disabled_outlook_skills"
                  type="hidden"
                  value={disabledSkills.join(",")}
                />
                <IntegrationConfigCard
                  title={t("agent.skill.outlook.configuration")}
                  configuredLabel={
                    connected ? t("agent.skill.outlook.configured") : null
                  }
                  expanded={configExpanded}
                  onExpandedChange={setConfigExpanded}
                >
                  <OutlookConnection
                    status={status}
                    credentials={credentials}
                    setCredentials={setCredentials}
                    applyStatus={applyStatus}
                    notice={notice}
                    setNotice={setNotice}
                    onRevoked={() => setConfigExpanded(true)}
                  />
                </IntegrationConfigCard>

                {connected && (
                  <SkillToggleList
                    categories={getOutlookSkills(t)}
                    disabledSkills={disabledSkills}
                    onToggle={toggleOutlookSkill}
                  />
                )}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

/**
 * Azure setup steps, credentials and the Microsoft connection. The
 * credentials are saved by "Save and connect" (they have no `name` and never
 * mark the page as modified), because a new app or secret needs a new sign-in.
 */
function OutlookConnection({
  status,
  credentials,
  setCredentials,
  applyStatus,
  notice,
  setNotice,
  onRevoked,
}) {
  const { t } = useTranslation();
  const id = useId();
  const fieldIds = {
    authType: `${id}-auth-type`,
    clientId: `${id}-client-id`,
    tenantId: `${id}-tenant-id`,
    clientSecret: `${id}-client-secret`,
    redirect: `${id}-redirect`,
  };
  const saveNoteId = `${id}-save-note`;
  const [fieldErrors, setFieldErrors] = useState({});
  const [authBusy, setAuthBusy] = useState(false);
  const [checking, setChecking] = useState(false);
  const [awaitingAuth, setAwaitingAuth] = useState(false);
  const [popupUrl, setPopupUrl] = useState(null);
  const [revokeOpen, setRevokeOpen] = useState(false);
  const [revokeBusy, setRevokeBusy] = useState(false);
  const checkingRef = useRef(false);
  const revokeButtonRef = useRef(null);
  const focusRevokeAfterConnect = useRef(false);

  const { draft, saved } = credentials;
  const connected = status.isAuthenticated && status.hasCredentials;
  const credentialsChanged = !sameForm(draft, saved);
  const redirectUri = outlookRedirectUri();

  function updateField(key, value) {
    setCredentials((prev) => ({
      ...prev,
      draft: { ...prev.draft, [key]: value },
    }));
    if (fieldErrors[key])
      setFieldErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  // Credential inputs are saved by "Save and connect", not by the page form.
  const fieldChange = (key) => (e) => {
    e.stopPropagation();
    updateField(key, e.target.value);
  };

  const checkStatus = useCallback(
    async ({ announce = false, afterSignIn = false } = {}) => {
      if (checkingRef.current) return;
      checkingRef.current = true;
      setChecking(true);
      const res = await OutlookAgent.getStatus();
      checkingRef.current = false;
      setChecking(false);
      if (!res?.success) {
        if (announce)
          setNotice({
            tone: "error",
            text: t("agent-integrations.outlook.status-error"),
          });
        return;
      }
      applyStatus(res);
      if (res.isAuthenticated && res.hasCredentials) {
        if (announce || afterSignIn) {
          focusRevokeAfterConnect.current = true;
          setNotice({
            tone: "success",
            text: t("agent-integrations.outlook.auth-success"),
          });
        }
        setAwaitingAuth(false);
        setPopupUrl(null);
      } else if (announce) {
        setNotice({
          tone: "info",
          text: t("agent-integrations.outlook.not-connected-yet"),
        });
      }
    },
    [applyStatus]
  );

  // Back from the Microsoft tab: this tab does not get the callback, so ask.
  useEffect(() => {
    if (!awaitingAuth) return;
    const onReturn = () => {
      if (document.visibilityState === "visible")
        checkStatus({ afterSignIn: true });
    };
    document.addEventListener("visibilitychange", onReturn);
    window.addEventListener("focus", onReturn);
    return () => {
      document.removeEventListener("visibilitychange", onReturn);
      window.removeEventListener("focus", onReturn);
    };
  }, [awaitingAuth, checkStatus]);

  // The connect button is replaced by the revoke button: keep the keyboard there.
  useEffect(() => {
    if (!focusRevokeAfterConnect.current || !connected) return;
    focusRevokeAfterConnect.current = false;
    const active = document.activeElement;
    if (!active || active === document.body) revokeButtonRef.current?.focus();
  }, [connected]);

  async function handleConnect() {
    const errors = validateForm(draft, t);
    setFieldErrors(errors);
    const firstInvalid = ["clientId", "tenantId", "clientSecret"].find(
      (key) => errors[key]
    );
    if (firstInvalid) {
      document.getElementById(fieldIds[firstInvalid])?.focus();
      return;
    }

    setAuthBusy(true);
    setNotice(null);
    setPopupUrl(null);
    const data = await OutlookAgent.saveCredentialsAndGetAuthUrl({
      clientId: draft.clientId.trim(),
      tenantId: draft.tenantId.trim(),
      clientSecret: draft.clientSecret,
      authType: draft.authType,
    });
    if (!data?.success || !data.url) {
      setAuthBusy(false);
      const { message, detail } = serverErrorParts(
        data?.error,
        t,
        "agent-integrations.outlook.connect-error"
      );
      setNotice({ tone: "error", text: message, detail });
      return;
    }

    // Open the tab first: browsers only allow it shortly after the click.
    const authWindow = window.open(data.url, "_blank");
    if (authWindow) {
      try {
        authWindow.opener = null;
      } catch {}
      setNotice({
        tone: "info",
        text: t("agent-integrations.outlook.auth-pending"),
      });
    } else {
      setPopupUrl(data.url);
    }
    setAwaitingAuth(true);

    // The credentials are saved now; show them as the server keeps them.
    const res = await OutlookAgent.getStatus();
    if (res?.success) applyStatus(res, { resetForm: true });
    setAuthBusy(false);
  }

  async function handleRevoke() {
    setRevokeBusy(true);
    const res = await OutlookAgent.revokeAccess();
    if (!res?.success) {
      setRevokeBusy(false);
      setRevokeOpen(false);
      const { message, detail } = serverErrorParts(
        res?.error,
        t,
        "agent-integrations.outlook.revoke-error"
      );
      setNotice({ tone: "error", text: message, detail });
      return;
    }
    const statusRes = await OutlookAgent.getStatus();
    flushSync(() => {
      applyStatus(statusRes?.success ? statusRes : {}, { resetForm: true });
      setRevokeBusy(false);
      setRevokeOpen(false);
      setAwaitingAuth(false);
      setPopupUrl(null);
      setFieldErrors({});
      setNotice({
        tone: "success",
        text: t("agent-integrations.outlook.revoked"),
      });
      onRevoked?.();
    });
    // The revoke button is gone: continue at the first credential.
    document.getElementById(fieldIds.clientId)?.focus();
  }

  const connectLabel = connected
    ? t("agent-integrations.outlook.save-reconnect")
    : t("agent-integrations.outlook.save-connect");
  const showConnect = !connected || credentialsChanged;

  return (
    <>
      <div className="flex flex-col gap-y-2">
        <h4 className="text-sm font-semibold text-theme-text-primary">
          {t("agent-integrations.outlook.steps-title")}
        </h4>
        <ol className="list-decimal ml-5 flex flex-col gap-y-1 text-xs text-theme-text-secondary">
          <li>
            <Trans
              i18nKey="agent-integrations.outlook.step-register"
              components={{
                anchor: (
                  <ExternalLink
                    href={AZURE_PORTAL_URL}
                    className={LINK_CLASS}
                  />
                ),
              }}
            />
          </li>
          <li>{t("agent-integrations.outlook.step-redirect")}</li>
          <li>{t("agent-integrations.outlook.step-permissions")}</li>
          <li>{t("agent-integrations.outlook.step-secret")}</li>
          <li>{t("agent-integrations.outlook.step-copy")}</li>
        </ol>
      </div>

      <div className="flex flex-col">
        <label htmlFor={fieldIds.redirect} className={FIELD_LABEL}>
          {t("agent-integrations.outlook.redirect-uri")}
        </label>
        <div className="flex items-center gap-x-2">
          <input
            id={fieldIds.redirect}
            type="text"
            readOnly
            value={redirectUri}
            onFocus={(e) => e.target.select()}
            aria-describedby={`${fieldIds.redirect}-help`}
            className={`${FIELD_INPUT} font-mono`}
          />
          <CopyButton
            text={redirectUri}
            label={t("agent-integrations.outlook.copy-redirect-uri")}
          />
        </div>
        <p id={`${fieldIds.redirect}-help`} className={FIELD_HELP}>
          {t("agent-integrations.outlook.redirect-uri-help")}
        </p>
      </div>

      <div className="flex flex-col">
        <FieldLabel
          htmlFor={fieldIds.authType}
          label={t("agent.skill.outlook.authType")}
          tip={t("agent.skill.outlook.authTypeHelp")}
        />
        <select
          id={fieldIds.authType}
          value={draft.authType}
          onChange={fieldChange("authType")}
          className={FIELD_SELECT}
        >
          <option value="common">
            {t("agent.skill.outlook.authTypeCommon")}
          </option>
          <option value="consumers">
            {t("agent.skill.outlook.authTypeConsumers")}
          </option>
          <option value="organization">
            {t("agent.skill.outlook.authTypeOrganization")}
          </option>
        </select>
      </div>

      <CredentialField
        id={fieldIds.clientId}
        label={t("agent.skill.outlook.clientId")}
        help={t("agent.skill.outlook.clientIdHelp")}
        error={fieldErrors.clientId}
      >
        {(a11y) => (
          <input
            {...a11y}
            type="text"
            value={draft.clientId}
            onChange={fieldChange("clientId")}
            placeholder="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
            autoComplete="off"
            spellCheck={false}
            className={FIELD_INPUT}
          />
        )}
      </CredentialField>

      {draft.authType === "organization" && (
        <CredentialField
          id={fieldIds.tenantId}
          label={t("agent.skill.outlook.tenantId")}
          help={t("agent.skill.outlook.tenantIdHelp")}
          error={fieldErrors.tenantId}
        >
          {(a11y) => (
            <input
              {...a11y}
              type="text"
              value={draft.tenantId}
              onChange={fieldChange("tenantId")}
              placeholder="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
              autoComplete="off"
              spellCheck={false}
              className={FIELD_INPUT}
            />
          )}
        </CredentialField>
      )}

      <CredentialField
        id={fieldIds.clientSecret}
        label={t("agent.skill.outlook.clientSecret")}
        help={t("agent.skill.outlook.clientSecretHelp")}
        error={fieldErrors.clientSecret}
      >
        {(a11y) => (
          <SecretInput
            {...a11y}
            value={draft.clientSecret}
            onChange={fieldChange("clientSecret")}
          />
        )}
      </CredentialField>

      {connected && credentialsChanged && (
        <StatusNote tone="warning">
          {t("agent-integrations.outlook.reconnect-needed")}
        </StatusNote>
      )}
      {connected && !credentialsChanged && notice?.tone !== "success" && (
        <StatusNote tone="success">
          {t("agent.skill.outlook.authenticated")}
        </StatusNote>
      )}
      {!connected && !status.hasCredentials && (
        <StatusNote tone="warning">
          {t("agent.skill.outlook.configurationRequired")}
        </StatusNote>
      )}

      {notice && (
        <StatusNote tone={notice.tone} announce>
          {notice.text}
          <ServerErrorDetail detail={notice.detail} />
        </StatusNote>
      )}
      {popupUrl && (
        <StatusNote tone="warning" announce>
          <p>{t("agent-integrations.outlook.popup-blocked")}</p>
          <ExternalLink href={popupUrl} className={LINK_CLASS}>
            {t("agent-integrations.outlook.open-sign-in")}
          </ExternalLink>
        </StatusNote>
      )}

      <div className="flex flex-col gap-y-3">
        {showConnect && (
          <>
            <p id={saveNoteId} className="text-xs text-theme-text-secondary">
              {t("agent-integrations.outlook.save-note")}
            </p>
            <CTAButton
              type="button"
              busy={authBusy}
              onClick={handleConnect}
              aria-describedby={saveNoteId}
              className="!mr-0"
            >
              <SquareArrowOutUpRight
                strokeWidth={1.5}
                size={16}
                aria-hidden="true"
              />
              {authBusy
                ? t("agent-integrations.outlook.connecting")
                : connectLabel}
            </CTAButton>
          </>
        )}
        <div className="flex flex-wrap gap-2">
          {(awaitingAuth || (!connected && status.hasCredentials)) && (
            <button
              type="button"
              aria-busy={checking || undefined}
              aria-disabled={checking || undefined}
              onClick={() => !checking && checkStatus({ announce: true })}
              className={SECONDARY_BUTTON}
            >
              <RefreshCw
                strokeWidth={1.5}
                size={16}
                aria-hidden="true"
                className={checking ? "animate-spin" : ""}
              />
              {checking
                ? t("agent-integrations.outlook.checking")
                : t("agent-integrations.outlook.check-status")}
            </button>
          )}
          {connected && (
            <button
              ref={revokeButtonRef}
              type="button"
              onClick={() => setRevokeOpen(true)}
              className={DANGER_OUTLINE_BUTTON}
            >
              <CircleX strokeWidth={1.5} size={16} aria-hidden="true" />
              {t("agent.skill.outlook.revokeAccess")}
            </button>
          )}
        </div>
      </div>

      <ConfirmModal
        isOpen={revokeOpen}
        title={t("agent-integrations.outlook.revoke-title")}
        confirmLabel={t("agent.skill.outlook.revokeAccess")}
        busy={revokeBusy}
        danger
        onConfirm={handleRevoke}
        onCancel={() => setRevokeOpen(false)}
      >
        <p>{t("agent-integrations.outlook.revoke-consequences")}</p>
        <p>{t("agent-integrations.outlook.revoke-after")}</p>
      </ConfirmModal>
    </>
  );
}

/** Labelled credential field with visible help and an inline error. */
function CredentialField({ id, label, help, error, children }) {
  const helpId = `${id}-help`;
  const errorId = `${id}-error`;
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className={FIELD_LABEL}>
        {label}
      </label>
      {children({
        id,
        "aria-describedby": error ? `${errorId} ${helpId}` : helpId,
        "aria-invalid": error ? true : undefined,
      })}
      {error && (
        <p id={errorId} role="alert" className={FIELD_ERROR}>
          {error}
        </p>
      )}
      <p id={helpId} className={FIELD_HELP}>
        {help}
      </p>
    </div>
  );
}
