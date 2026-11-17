import { API_BASE } from "./constants";
import { baseHeaders } from "./request";

/**
 * Validates the stored session token.
 * @returns {Promise<boolean|null>} true valid, false rejected by the server
 * (401/403: expired, invalid or suspended), null when the server could not be
 * reached or failed — never treat that as "logged out", or a network blip
 * would wipe the session.
 */
export default async function validateSessionTokenForUser() {
  return await fetch(`${API_BASE}/system/check-token`, {
    method: "GET",
    cache: "default",
    headers: baseHeaders(),
  })
    .then((res) => {
      if (res.status === 200) return true;
      if (res.status === 401 || res.status === 403) return false;
      return null;
    })
    .catch(() => null);
}
