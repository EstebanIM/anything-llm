import { ChevronDown } from "lucide-react";
import { useId, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { safeJsonParse } from "@/utils/request";
import { formatDateTime } from "@/utils/dates";
import useMultiUserMode from "@/hooks/useMultiUserMode";
import {
  CELL,
  MOBILE_LABEL,
  ROW,
  ROW_ACTION,
  ROW_HEADER,
} from "@/pages/Admin/Users/AdminTable";

/** Translated name of an event code; unknown codes are shown as they are. */
export function eventLabel(t, event) {
  return t(`admin-pages.events.${event}`, { defaultValue: event });
}

export default function LogRow({ log, columns }) {
  const { t } = useTranslation();
  const multiUserMode = useMultiUserMode();
  const [expanded, setExpanded] = useState(false);
  const detailsId = useId();
  const metadata = useMemo(
    () => safeJsonParse(log.metadata, {}),
    [log.metadata]
  );
  const hasMetadata =
    !!metadata &&
    typeof metadata === "object" &&
    Object.keys(metadata).length > 0;
  const label = eventLabel(t, log.event);

  return (
    <>
      <tr data-row="" className={ROW}>
        <th scope="row" className={ROW_HEADER}>
          <EventBadge event={log.event} label={label} />
        </th>
        {multiUserMode && (
          <td className={CELL}>
            <span aria-hidden="true" className={MOBILE_LABEL}>
              {t("event.table.user")}:{" "}
            </span>
            {log.user?.username || t("admin-pages.logs.unknown-user")}
          </td>
        )}
        <td className={CELL}>
          <span aria-hidden="true" className={MOBILE_LABEL}>
            {t("event.table.occurred")}:{" "}
          </span>
          {formatDateTime(log.occurredAt)}
        </td>
        <td className={`${CELL} md:text-right`}>
          {hasMetadata && (
            <button
              type="button"
              onClick={() => setExpanded((prev) => !prev)}
              aria-expanded={expanded}
              aria-controls={detailsId}
              aria-label={t("admin-pages.logs.show-details", { event: label })}
              className={ROW_ACTION}
            >
              <ChevronDown
                strokeWidth={1.5}
                className={`h-4 w-4 transition-transform duration-quick ease-smooth ${
                  expanded ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
              {t("admin-pages.logs.details")}
            </button>
          )}
        </td>
      </tr>
      {hasMetadata && (
        // data-row keeps the tbody's phone rule from forcing this row visible.
        <tr
          id={detailsId}
          data-row="details"
          className={
            expanded
              ? "block -mt-2 mb-3 md:mt-0 md:mb-0 md:table-row bg-theme-bg-primary"
              : "hidden"
          }
        >
          <td
            colSpan={columns}
            className="block md:table-cell p-3 md:px-6 md:py-4 rounded-b-lg md:rounded-none"
          >
            <p className="text-xs font-semibold text-theme-text-primary mb-2">
              {t("admin-pages.logs.metadata")}
            </p>
            <pre
              tabIndex={0}
              aria-label={t("admin-pages.logs.metadata-of", { event: label })}
              className="max-h-[320px] overflow-auto rounded-lg border border-white/10 bg-theme-bg-secondary p-2 text-xs text-white whitespace-pre"
            >
              {JSON.stringify(metadata, null, 2)}
            </pre>
          </td>
        </tr>
      )}
    </>
  );
}

const EventBadge = ({ event, label }) => {
  let colorTheme = "bg-sky-600/20 text-sky-300 light:text-sky-800";
  if (event.includes("update"))
    colorTheme = "bg-yellow-600/20 text-yellow-300 light:text-yellow-800";
  if (event.includes("failed_") || event.includes("deleted"))
    colorTheme = "bg-red-600/20 text-red-300 light:text-red-800";
  if (event === "login_event")
    colorTheme = "bg-green-600/20 text-green-300 light:text-green-800";

  return (
    <span
      title={label !== event ? event : undefined}
      className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${colorTheme}`}
    >
      {label}
    </span>
  );
};
