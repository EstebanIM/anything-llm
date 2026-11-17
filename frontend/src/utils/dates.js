import i18n from "@/i18n";

/**
 * Locale-aware date and number formatting in the UI language.
 * Prefer these helpers over moment's format() / fromNow(): moment is never
 * given a locale in this app, so it always prints English.
 */

function currentLocale() {
  return i18n.resolvedLanguage || i18n.language || "en";
}

function toDate(value) {
  if (value === null || value === undefined || value === "") return null;
  const date = value instanceof Date ? value : new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
}

/** "16 nov 2026, 13:04" (Spanish) / "Nov 16, 2026, 1:04 PM" (English). */
export function formatDateTime(
  value,
  options = { dateStyle: "medium", timeStyle: "short" }
) {
  const date = toDate(value);
  if (!date) return "";
  return new Intl.DateTimeFormat(currentLocale(), options).format(date);
}

/** "16 nov 2026" (Spanish). */
export function formatDate(value, options = { dateStyle: "medium" }) {
  return formatDateTime(value, options);
}

const RELATIVE_UNITS = [
  ["year", 60 * 60 * 24 * 365],
  ["month", 60 * 60 * 24 * 30],
  ["week", 60 * 60 * 24 * 7],
  ["day", 60 * 60 * 24],
  ["hour", 60 * 60],
  ["minute", 60],
  ["second", 1],
];

/** "hace 5 minutos", "ayer", "dentro de 2 días" (Spanish). */
export function formatRelative(value, now = Date.now()) {
  const date = toDate(value);
  if (!date) return "";
  const seconds = Math.round((date.getTime() - now) / 1000);
  const [unit, size] =
    RELATIVE_UNITS.find(
      ([, unitSeconds]) => Math.abs(seconds) >= unitSeconds
    ) ?? RELATIVE_UNITS[RELATIVE_UNITS.length - 1];
  return new Intl.RelativeTimeFormat(currentLocale(), {
    numeric: "auto",
  }).format(Math.round(seconds / size), unit);
}

/** "10.000" (Spanish) / "10,000" (English). */
export function formatNumber(value, options) {
  const number = Number(value);
  if (!Number.isFinite(number)) return String(value ?? "");
  return new Intl.NumberFormat(currentLocale(), options).format(number);
}

function unit(value, name, fractionDigits = 0) {
  return new Intl.NumberFormat(currentLocale(), {
    style: "unit",
    unit: name,
    unitDisplay: "short",
    maximumFractionDigits: fractionDigits,
  }).format(value);
}

/**
 * Elapsed time in the UI language: "850 ms", "5,2 s", "3 min 4 s", "1 h 5 min".
 * @param {number} ms
 * @returns {string} "" when the value is not a usable duration
 */
export function formatElapsed(ms) {
  if (!Number.isFinite(ms) || ms < 0) return "";
  if (ms < 1000) return unit(Math.round(ms), "millisecond");
  const seconds = ms / 1000;
  if (seconds < 60) return unit(seconds, "second", 1);
  const totalSeconds = Math.floor(seconds);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const rest = totalSeconds % 60;
  if (hours > 0)
    return minutes
      ? `${unit(hours, "hour")} ${unit(minutes, "minute")}`
      : unit(hours, "hour");
  return rest
    ? `${unit(minutes, "minute")} ${unit(rest, "second")}`
    : unit(minutes, "minute");
}

/**
 * A ratio as a percentage in the UI language: 0.426 → "43 %" (Spanish).
 * @param {number} ratio - 0..1
 * @param {number} [fractionDigits=0]
 */
export function formatPercent(ratio, fractionDigits = 0) {
  return formatNumber(ratio, {
    style: "percent",
    maximumFractionDigits: fractionDigits,
  });
}
