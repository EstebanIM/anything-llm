import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FullScreenLoader } from "@/components/Preloader";
import {
  AUTH_GHOST_LINK,
  AuthHeader,
  AuthSubmitButton,
  LoginScreen,
} from "@/components/Modals/Password/AuthUI";
import paths from "@/utils/paths";
import { safeRedirectPath } from "@/utils/safeRedirect";
import useQuery from "@/hooks/useQuery";
import usePageTitle from "@/hooks/usePageTitle";
import useSimpleSSO from "@/hooks/useSimpleSSO";
import System from "@/models/system";
import { AUTH_TIMESTAMP, AUTH_TOKEN, AUTH_USER } from "@/utils/constants";

const NETWORK_ERROR = /Failed to fetch|NetworkError|Load failed/i;

export default function SimpleSSOPassthrough() {
  const { t } = useTranslation();
  const query = useQuery();
  const { ssoConfig } = useSimpleSSO();
  // null while signing in; "no-token" | "invalid" | "network" on failure.
  const [failure, setFailure] = useState(null);
  const [busy, setBusy] = useState(true);
  const [attempt, setAttempt] = useState(0);
  usePageTitle(t("auth-pages.sso.page-title"));

  useEffect(() => {
    const token = query.get("token");
    if (!token) {
      setFailure("no-token");
      setBusy(false);
      return;
    }

    // Clear any existing auth data
    window.localStorage.removeItem(AUTH_USER);
    window.localStorage.removeItem(AUTH_TOKEN);
    window.localStorage.removeItem(AUTH_TIMESTAMP);

    setBusy(true);
    System.simpleSSOLogin(token).then((res) => {
      if (!res?.valid) {
        setFailure(
          NETWORK_ERROR.test(String(res?.message || "")) ? "network" : "invalid"
        );
        setBusy(false);
        return;
      }
      window.localStorage.setItem(AUTH_USER, JSON.stringify(res.user));
      window.localStorage.setItem(AUTH_TOKEN, res.token);
      window.localStorage.setItem(AUTH_TIMESTAMP, Number(new Date()));
      // Full load so the app starts with the new session. Only same-site
      // paths: `redirectTo` comes from the URL.
      window.location.replace(
        safeRedirectPath(query.get("redirectTo")) || paths.home()
      );
    });
  }, [attempt]);

  if (!failure) return <FullScreenLoader />;

  const description = {
    "no-token": t("auth-pages.sso.no-token"),
    invalid: t("auth-pages.sso.invalid"),
    network: t("auth-errors.network"),
  }[failure];

  return (
    <LoginScreen>
      <AuthHeader
        title={t("auth-pages.sso.error-title")}
        description={description}
      />
      {failure !== "network" && (
        <p className="text-center text-[13px] font-medium leading-5 text-[#374151]">
          {t("auth-pages.sso.contact")}
        </p>
      )}
      <div className="mt-5 flex w-full flex-col items-center gap-2">
        {failure === "network" && (
          <AuthSubmitButton
            type="button"
            busy={busy}
            onClick={() => setAttempt((n) => n + 1)}
          >
            {t("server-unavailable.retry")}
          </AuthSubmitButton>
        )}
        {/* Without password sign-in, the login page would bring the person back here. */}
        {!ssoConfig.noLogin && (
          <Link to={paths.login()} className={AUTH_GHOST_LINK}>
            {t("auth-pages.go-to-login")}
          </Link>
        )}
      </div>
    </LoginScreen>
  );
}
