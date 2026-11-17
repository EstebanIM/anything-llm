/**
 * Returns `value` only when it is a same-site path ("/workspace/x?y"), so a
 * `redirectTo` taken from the URL can never send the person to another site
 * or run `javascript:`. Anything else gives null.
 * @param {string|null|undefined} value
 * @returns {string|null}
 */
export function safeRedirectPath(value) {
  if (typeof value !== "string" || !value.startsWith("/")) return null;
  if (value.startsWith("//") || value.includes("\\")) return null;
  try {
    const url = new URL(value, window.location.origin);
    if (url.origin !== window.location.origin) return null;
    return `${url.pathname}${url.search}${url.hash}`;
  } catch {
    return null;
  }
}
