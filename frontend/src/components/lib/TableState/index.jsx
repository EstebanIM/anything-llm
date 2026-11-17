import { LoaderCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

/**
 * One full-width table row for the loading, empty and error states of a
 * settings table. Render it inside <tbody> instead of the data rows.
 *
 * @param {object} props
 * @param {"loading" | "empty" | "error"} props.state
 * @param {number} props.colSpan - number of columns in the table
 * @param {import("react").ReactNode} [props.message] - overrides the default text
 * @param {import("react").ReactNode} [props.action] - eg: a "Create" button for the empty state
 * @param {() => void} [props.onRetry] - shows "Retry" in the error state
 */
export default function TableState({
  state,
  colSpan,
  message,
  action = null,
  onRetry,
}) {
  const { t } = useTranslation();
  const text =
    message ??
    {
      loading: t("common.loading"),
      empty: t("table-state.empty"),
      error: t("table-state.error"),
    }[state];

  return (
    <tr>
      <td colSpan={colSpan} className="px-6 py-8 text-center">
        <div
          role={state === "error" ? "alert" : "status"}
          className={`flex flex-col items-center gap-3 text-sm ${
            state === "error"
              ? "text-red-400 light:text-red-700"
              : "text-theme-text-secondary"
          }`}
        >
          <span className="inline-flex items-center gap-2">
            {state === "loading" && (
              <LoaderCircle
                strokeWidth={1.5}
                size={16}
                className="animate-spin"
                aria-hidden="true"
              />
            )}
            {text}
          </span>
          {state === "error" && onRetry && (
            <button
              type="button"
              onClick={onRetry}
              className="min-h-[44px] md:min-h-[32px] px-3 rounded-lg border border-zinc-500 light:border-slate-500 text-white light:text-slate-900 hover:bg-zinc-800 light:hover:bg-slate-100 transition-colors duration-quick ease-smooth"
            >
              {t("provider-fields.retry")}
            </button>
          )}
          {state !== "loading" && action}
        </div>
      </td>
    </tr>
  );
}
