import paths from "@/utils/paths";
import { AUTH_TOKEN, AUTH_USER } from "@/utils/constants";
import { safeRedirectPath } from "@/utils/safeRedirect";
import { authErrorMessage } from "@/utils/authErrors";

// Server default (PASSWORDMINCHAR); a stricter server setting still answers
// with its own error, shown through passwordErrorMessage.
export const PASSWORD_MIN_LENGTH = 8;

/**
 * Where to go after signing in: the same-site `redirectTo` the login page was
 * opened with (set by PrivateRoute), or home.
 * @returns {string}
 */
export function afterSignInPath() {
  const redirectTo = safeRedirectPath(
    new URLSearchParams(window.location.search).get("redirectTo")
  );
  // Back to the login page itself would loop.
  if (!redirectTo || /^\/login(?:[/?#]|$)/.test(redirectTo))
    return paths.home();
  return redirectTo;
}

/**
 * Stores the session and loads the app at `to`. A full page load on purpose:
 * AuthProvider reads the token from localStorage only when it mounts. Replace
 * keeps the sign-in page out of the history.
 * @param {{user?: object|null, token: string, to?: string}} session
 */
export function startSession({ user = null, token, to }) {
  if (user) window.localStorage.setItem(AUTH_USER, JSON.stringify(user));
  window.localStorage.setItem(AUTH_TOKEN, token);
  window.location.replace(to || afterSignInPath());
}

/**
 * Errors when saving a new password. The server's complexity rules
 * (configurable) answer in English with the word "password": they become one
 * translated message instead of the generic one.
 * @param {string|null|undefined} message
 * @param {import("i18next").TFunction} t
 */
export function passwordErrorMessage(message, t) {
  const raw = String(message || "");
  if (/password/i.test(raw) && !/match|reset token/i.test(raw))
    return t("auth-pages.errors.password-rejected");
  return authErrorMessage(raw, t);
}
