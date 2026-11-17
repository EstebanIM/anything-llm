import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { FullScreenLoader } from "../Preloader";
import ServerUnavailable from "../ServerUnavailable";
import { safeRedirectPath } from "@/utils/safeRedirect";
import validateSessionTokenForUser from "@/utils/session";
import paths from "@/utils/paths";
import { AUTH_TIMESTAMP, AUTH_TOKEN, AUTH_USER } from "@/utils/constants";
import { userFromStorage } from "@/utils/request";
import System from "@/models/system";
import UserMenu from "../UserMenu";
import { KeyboardShortcutWrapper } from "@/utils/keyboardShortcuts";
import { MultiUserModeContext } from "@/hooks/useMultiUserMode";

// Used only for Multi-user mode only as we permission specific pages based on auth role.
// When in single user mode we just bypass any authchecks.
function useIsAuthenticated() {
  const [isAuthd, setIsAuthed] = useState(null);
  const [shouldRedirectToOnboarding, setShouldRedirectToOnboarding] =
    useState(false);
  const [multiUserMode, setMultiUserMode] = useState(false);
  // The server could not be reached: show a retry state, never spin forever.
  const [failed, setFailed] = useState(false);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const validateSession = async () => {
      setFailed(false);
      const onboardingComplete = await System.isOnboardingComplete();
      const settings = await System.keys();
      if (!settings) {
        setFailed(true);
        return;
      }
      const { MultiUserMode, RequiresAuth } = settings;
      setMultiUserMode(!!MultiUserMode);

      // Check for the onboarding redirect condition
      if (onboardingComplete === false) {
        setShouldRedirectToOnboarding(true);
        setIsAuthed(true);
        return;
      }

      // Single User mode without password - no auth required
      if (!MultiUserMode && !RequiresAuth) {
        setIsAuthed(true);
        return;
      }

      // Single User password mode check
      if (!MultiUserMode && RequiresAuth) {
        const localAuthToken = localStorage.getItem(AUTH_TOKEN);
        if (!localAuthToken) {
          setIsAuthed(false);
          return;
        }

        const isValid = await validateSessionTokenForUser();
        if (isValid === null) {
          setFailed(true);
          return;
        }
        setIsAuthed(isValid);
        return;
      }

      // Multi-user mode checks
      const localUser = localStorage.getItem(AUTH_USER);
      const localAuthToken = localStorage.getItem(AUTH_TOKEN);
      if (!localUser || !localAuthToken) {
        setIsAuthed(false);
        return;
      }

      const isValid = await validateSessionTokenForUser();
      if (isValid === null) {
        setFailed(true);
        return;
      }
      if (!isValid) {
        localStorage.removeItem(AUTH_USER);
        localStorage.removeItem(AUTH_TOKEN);
        localStorage.removeItem(AUTH_TIMESTAMP);
        setIsAuthed(false);
        return;
      }

      setIsAuthed(true);
    };
    validateSession();
  }, [attempt]);

  return {
    isAuthd,
    shouldRedirectToOnboarding,
    multiUserMode,
    failed,
    retry: () => setAttempt((n) => n + 1),
  };
}

/**
 * Not signed in → the login page, remembering where the person was going;
 * signed in but not allowed here → home.
 */
function Denied({ isAuthd }) {
  const location = useLocation();
  if (isAuthd) return <Navigate to={paths.home()} replace />;
  return (
    <Navigate
      to={paths.login(
        true,
        safeRedirectPath(`${location.pathname}${location.search}`)
      )}
      replace
    />
  );
}

// Allows only admin to access the route and if in single user mode,
// allows all users to access the route
export function AdminRoute({ Component, hideUserMenu = false }) {
  const { isAuthd, shouldRedirectToOnboarding, multiUserMode, failed, retry } =
    useIsAuthenticated();
  if (failed) return <ServerUnavailable onRetry={retry} />;
  if (isAuthd === null) return <FullScreenLoader />;

  if (shouldRedirectToOnboarding) {
    return <Navigate to={paths.onboarding.home()} replace />;
  }

  const user = userFromStorage();
  return isAuthd &&
    (["admin", "superadmin"].includes(user?.role) || !multiUserMode) ? (
    hideUserMenu ? (
      <MultiUserModeContext.Provider value={multiUserMode}>
        <KeyboardShortcutWrapper>
          <Component />
        </KeyboardShortcutWrapper>
      </MultiUserModeContext.Provider>
    ) : (
      <MultiUserModeContext.Provider value={multiUserMode}>
        <KeyboardShortcutWrapper>
          <UserMenu>
            <Component />
          </UserMenu>
        </KeyboardShortcutWrapper>
      </MultiUserModeContext.Provider>
    )
  ) : (
    <Denied isAuthd={isAuthd} />
  );
}

// Allows manager and admin to access the route and if in single user mode,
// allows all users to access the route
export function ManagerRoute({ Component }) {
  const { isAuthd, shouldRedirectToOnboarding, multiUserMode, failed, retry } =
    useIsAuthenticated();
  if (failed) return <ServerUnavailable onRetry={retry} />;
  if (isAuthd === null) return <FullScreenLoader />;

  if (shouldRedirectToOnboarding) {
    return <Navigate to={paths.onboarding.home()} replace />;
  }

  const user = userFromStorage();
  return isAuthd && (user?.role !== "default" || !multiUserMode) ? (
    <MultiUserModeContext.Provider value={multiUserMode}>
      <KeyboardShortcutWrapper>
        <UserMenu>
          <Component />
        </UserMenu>
      </KeyboardShortcutWrapper>
    </MultiUserModeContext.Provider>
  ) : (
    <Denied isAuthd={isAuthd} />
  );
}

// Allows access only in single user mode — redirects to home in multi-user mode
export function SingleUserRoute({ Component }) {
  const { isAuthd, shouldRedirectToOnboarding, multiUserMode, failed, retry } =
    useIsAuthenticated();
  if (failed) return <ServerUnavailable onRetry={retry} />;
  if (isAuthd === null) return <FullScreenLoader />;

  if (shouldRedirectToOnboarding) {
    return <Navigate to={paths.onboarding.home()} replace />;
  }

  return isAuthd && !multiUserMode ? (
    <MultiUserModeContext.Provider value={multiUserMode}>
      <KeyboardShortcutWrapper>
        <Component />
      </KeyboardShortcutWrapper>
    </MultiUserModeContext.Provider>
  ) : (
    <Denied isAuthd={isAuthd} />
  );
}

export default function PrivateRoute({ Component }) {
  const location = useLocation();
  const { isAuthd, shouldRedirectToOnboarding, multiUserMode, failed, retry } =
    useIsAuthenticated();
  if (failed) return <ServerUnavailable onRetry={retry} />;
  if (isAuthd === null) return <FullScreenLoader />;

  if (shouldRedirectToOnboarding) {
    return <Navigate to={paths.onboarding.home()} replace />;
  }

  return isAuthd ? (
    <MultiUserModeContext.Provider value={multiUserMode}>
      <KeyboardShortcutWrapper>
        <UserMenu>
          <Component />
        </UserMenu>
      </KeyboardShortcutWrapper>
    </MultiUserModeContext.Provider>
  ) : (
    <Navigate
      to={paths.login(
        true,
        safeRedirectPath(`${location.pathname}${location.search}`)
      )}
      replace
    />
  );
}
