import i18n from "@/i18n";

// Numbers follow the UI language ("10.000" in Spanish, "10,000" in English).
const locale = () => i18n.resolvedLanguage || i18n.language || "en";

/** Thousands separators in the UI language (name kept for its callers). */
export function numberWithCommas(input) {
  const number = Number(input);
  if (!Number.isFinite(number)) return String(input ?? "");
  return new Intl.NumberFormat(locale()).format(number);
}

export function nFormatter(input) {
  return new Intl.NumberFormat(locale(), { notation: "compact" }).format(input);
}

export function humanFileSize(bytes, si = false, dp = 1) {
  const thresh = si ? 1000 : 1024;

  if (Math.abs(bytes) < thresh) {
    return bytes + " B";
  }

  const units = si
    ? ["kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
    : ["KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];
  let u = -1;
  const r = 10 ** dp;

  do {
    bytes /= thresh;
    ++u;
  } while (
    Math.round(Math.abs(bytes) * r) / r >= thresh &&
    u < units.length - 1
  );

  const value = new Intl.NumberFormat(locale(), {
    minimumFractionDigits: dp,
    maximumFractionDigits: dp,
  }).format(bytes);
  return value + " " + units[u];
}
