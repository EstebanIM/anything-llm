import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import PasswordModal, { usePasswordModal } from "@/components/Modals/Password";
import { afterSignInPath } from "@/components/Modals/Password/session";
import { FullScreenLoader } from "@/components/Preloader";
import paths from "@/utils/paths";
import useQuery from "@/hooks/useQuery";
import useSimpleSSO from "@/hooks/useSimpleSSO";

/**
 * Login page that handles both single and multi-user login.
 *
 * If Simple SSO is enabled and no login is allowed, the user will be redirected to the SSO login page
 * which may not have a token so the login will fail.
 *
 * @returns {JSX.Element}
 */
export default function Login() {
  const query = useQuery();
  const navigate = useNavigate();
  const noTry = query.has("nt");
  const { loading: ssoLoading, ssoConfig } = useSimpleSSO();
  const { loading, requiresAuth, mode } = usePasswordModal(noTry);
  const ssoOnly = ssoConfig.enabled && ssoConfig.noLogin;
  const leaveForSsoPortal =
    ssoOnly && !!ssoConfig.noLoginRedirect && !query.has("token");

  // `nt` only matters to the first session check (already captured above):
  // drop it so a reload or a bookmark of this URL starts clean.
  useEffect(() => {
    if (!noTry) return;
    const params = new URLSearchParams(window.location.search);
    params.delete("nt");
    const search = params.toString();
    navigate(`${paths.login()}${search ? `?${search}` : ""}`, {
      replace: true,
    });
  }, []);

  useEffect(() => {
    if (leaveForSsoPortal) window.location.replace(ssoConfig.noLoginRedirect);
  }, [leaveForSsoPortal]);

  if (loading || ssoLoading || leaveForSsoPortal) return <FullScreenLoader />;

  // Simple SSO without password sign-in: hand the token (and where to go
  // next) to the SSO page.
  if (ssoOnly) {
    const params = new URLSearchParams();
    for (const key of ["token", "redirectTo"]) {
      if (query.get(key)) params.set(key, query.get(key));
    }
    const search = params.toString();
    return (
      <Navigate
        to={`${paths.sso.login()}${search ? `?${search}` : ""}`}
        replace
      />
    );
  }

  if (requiresAuth === false)
    return <Navigate to={afterSignInPath()} replace />;

  return <PasswordModal mode={mode} />;
}
