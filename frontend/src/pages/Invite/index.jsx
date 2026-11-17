import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FullScreenLoader } from "@/components/Preloader";
import {
  AUTH_PRIMARY_LINK,
  AuthHeader,
  AuthSubmitButton,
  LoginScreen,
} from "@/components/Modals/Password/AuthUI";
import Invite from "@/models/invite";
import paths from "@/utils/paths";
import usePageTitle from "@/hooks/usePageTitle";
import NewUserForm from "./NewUserModal";

// The server's answers for a used, revoked or unknown code. Anything else
// (network, server error) is a failed check worth retrying.
const INVALID_INVITE = /Invite (not found|is no longer valid)/i;

export default function InvitePage() {
  const { code } = useParams();
  const { t } = useTranslation();
  // "loading" | "valid" | "invalid" | "error"
  const [status, setStatus] = useState("loading");
  const [checking, setChecking] = useState(false);
  const [attempt, setAttempt] = useState(0);
  usePageTitle(
    status === "invalid"
      ? t("auth-pages.invite.invalid-title")
      : t("auth-pages.invite.page-title")
  );

  useEffect(() => {
    async function checkInvite() {
      if (!code) {
        setStatus("invalid");
        return;
      }
      setChecking(true);
      const { invite, error } = await Invite.checkInvite(code);
      setChecking(false);
      if (invite) setStatus("valid");
      else if (!error || INVALID_INVITE.test(String(error)))
        setStatus("invalid");
      else setStatus("error");
    }
    checkInvite();
  }, [code, attempt]);

  if (status === "loading") return <FullScreenLoader />;

  if (status === "valid") {
    return (
      <LoginScreen>
        <NewUserForm code={code} />
      </LoginScreen>
    );
  }

  if (status === "error") {
    return (
      <LoginScreen>
        <AuthHeader
          title={t("auth-pages.invite.error-title")}
          description={t("auth-errors.network")}
        />
        <div className="mt-5 w-full">
          {/* Stays on screen (busy) while checking so focus is not lost. */}
          <AuthSubmitButton
            type="button"
            busy={checking}
            onClick={() => setAttempt((n) => n + 1)}
          >
            {t("server-unavailable.retry")}
          </AuthSubmitButton>
        </div>
      </LoginScreen>
    );
  }

  return (
    <LoginScreen>
      <AuthHeader
        title={t("auth-pages.invite.invalid-title")}
        description={t("auth-pages.invite.invalid-description")}
      />
      <div className="mt-5 w-full">
        <Link to={paths.login()} className={AUTH_PRIMARY_LINK}>
          {t("auth-pages.go-to-login")}
        </Link>
      </div>
    </LoginScreen>
  );
}
