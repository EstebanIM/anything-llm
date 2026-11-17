/**
 * Errors from the server and from fetch come as English strings ("Internal
 * server error", "Failed to fetch", a provider's stack message…). The UI must
 * not paste them into Spanish sentences. `serverErrorMessage` returns:
 * - a translated message when it recognises the error (network, permissions,
 *   not found, too large, timeout, or one of the `known` pairs you pass), or
 * - the translated fallback (`fallbackKey`) otherwise, logging the raw detail
 *   to the console for whoever debugs it.
 *
 * Use it wherever a toast or inline error used to show `{{error}}`:
 *   showToast(serverErrorMessage(error, t, "settings-pages.form-error"), "error")
 */

const NETWORK =
  /failed to fetch|networkerror|load failed|network request failed|ECONNREFUSED|ETIMEDOUT|ENOTFOUND|^network$/i;

const GENERIC = [
  [
    /\b401\b|unauthori[sz]ed|invalid (api )?key|session expired/i,
    "server-errors.unauthorized",
  ],
  [/\b403\b|forbidden|not allowed|permission/i, "server-errors.forbidden"],
  [/\b404\b|not found/i, "server-errors.not-found"],
  [/\b413\b|too large|payload|file size/i, "server-errors.too-large"],
  [/\b429\b|rate limit|too many requests/i, "server-errors.rate-limited"],
  [/timed? ?out|timeout/i, "server-errors.timeout"],
];

/**
 * @param {unknown} error - string, Error, or `{ error | message }`
 * @param {import("i18next").TFunction} t
 * @param {string} fallbackKey - translated sentence for "it failed" in this place
 * @param {object} [options]
 * @param {Array<[RegExp|string, string]>} [options.known] - extra [pattern, key] pairs checked first
 * @param {object} [options.values] - interpolation values for the keys
 * @returns {string}
 */
export function serverErrorMessage(error, t, fallbackKey, options = {}) {
  const { known = [], values = {} } = options;
  const raw = rawMessage(error);
  const match = (pattern) =>
    pattern instanceof RegExp ? pattern.test(raw) : raw.includes(pattern);

  for (const [pattern, key] of known) {
    if (raw && match(pattern)) return t(key, values);
  }
  if (raw && NETWORK.test(raw)) return t("server-errors.network", values);
  for (const [pattern, key] of GENERIC) {
    if (raw && pattern.test(raw)) return t(key, values);
  }
  if (raw) console.error("[server error]", raw);
  return t(fallbackKey, values);
}

/** Plain text of whatever the callers pass as an error. */
export function rawMessage(error) {
  if (!error) return "";
  if (typeof error === "string") return error;
  if (error instanceof Error) return error.message || "";
  if (typeof error === "object")
    return String(error.error || error.message || "");
  return String(error);
}

/**
 * For inline errors next to a form, where the server's own words can say what
 * to fix ("Username already taken"): the translated sentence, plus that text as
 * a separate detail when it was not recognised. Show the detail apart (see
 * `components/lib/ServerErrorDetail`), never inside the translated sentence.
 *
 * @param {unknown} error
 * @param {import("i18next").TFunction} t
 * @param {string} fallbackKey - translated sentence without `{{error}}`
 * @param {object} [options] - same as `serverErrorMessage`
 * @returns {{ message: string, detail: string | null }}
 */
export function serverErrorParts(error, t, fallbackKey, options = {}) {
  const message = serverErrorMessage(error, t, fallbackKey, options);
  const raw = rawMessage(error).trim();
  const recognised = message !== t(fallbackKey, options.values || {});
  return { message, detail: !recognised && raw ? raw : null };
}
