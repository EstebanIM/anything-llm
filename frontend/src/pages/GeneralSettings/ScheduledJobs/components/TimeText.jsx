import { formatDateTime, formatRelative } from "@/utils/dates";

/**
 * A date in the UI language inside <time>. `relative` shows "dentro de 2
 * horas" and keeps the absolute date in the title and for screen readers.
 * @param {{value: string|Date, relative?: boolean, options?: Intl.DateTimeFormatOptions}} props
 */
export default function TimeText({ value, relative = false, options }) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  const absolute = formatDateTime(date, options);
  if (!relative) {
    return <time dateTime={date.toISOString()}>{absolute}</time>;
  }
  return (
    <time dateTime={date.toISOString()} title={absolute}>
      {formatRelative(date)}
      <span className="sr-only"> ({absolute})</span>
    </time>
  );
}
