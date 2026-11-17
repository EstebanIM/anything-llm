/**
 * Sign-in, recovery and invitation errors come from the server in English
 * ("[001] Invalid login credentials."). This maps them to translated text.
 * "[001]" covers both an unknown user and a wrong password on purpose: the
 * message never reveals whether the account exists.
 */
const CODE_KEYS = {
  "[001]": "auth-errors.invalid-credentials",
  "[003]": "auth-errors.invalid-password",
  "[004]": "auth-errors.suspended",
  "[005]": "auth-errors.password-login-disabled",
};

const TEXT_KEYS = [
  ["Invalid recovery codes", "auth-errors.invalid-recovery-codes"],
  ["Invalid reset token", "auth-errors.invalid-reset-token"],
  ["Passwords do not match", "auth-errors.passwords-mismatch"],
  ["Invite not found", "auth-errors.invite-invalid"],
  ["Invite is no longer valid", "auth-errors.invite-invalid"],
  ["Session expired", "auth-errors.session-expired"],
  ["User is suspended", "auth-errors.suspended"],
  ["network", "auth-errors.network"],
  ["Failed to fetch", "auth-errors.network"],
  ["NetworkError", "auth-errors.network"],
];

/**
 * @param {string|null|undefined} message - raw server or fetch message
 * @param {import("i18next").TFunction} t
 * @returns {string} translated, human message
 */
export function authErrorMessage(message, t) {
  const raw = String(message || "");
  const code = raw.match(/^\[\d{3}\]/)?.[0];
  if (code && CODE_KEYS[code]) return t(CODE_KEYS[code]);
  const match = TEXT_KEYS.find(([needle]) => raw.includes(needle));
  if (match) return t(match[1]);
  if (/^status-5\d\d$/.test(raw)) return t("auth-errors.network");
  return t("auth-errors.generic");
}

const NOTICE_KEY = "iasmar_auth_notice";

/**
 * Remembers why the person was sent to the sign-in page ("session-expired",
 * "suspended", "password-changed") so the login can say it once.
 * @param {"session-expired"|"suspended"|"password-changed"} reason
 */
export function setAuthNotice(reason) {
  try {
    window.sessionStorage.setItem(NOTICE_KEY, reason);
  } catch {
    // sessionStorage can be unavailable (private mode): the notice is optional.
  }
}

/** Reads and clears the pending sign-in notice. @returns {string|null} */
export function takeAuthNotice() {
  try {
    const reason = window.sessionStorage.getItem(NOTICE_KEY);
    window.sessionStorage.removeItem(NOTICE_KEY);
    return reason;
  } catch {
    return null;
  }
}
