import { CircleAlert, CircleCheck, LoaderCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import CTAButton from "@/components/lib/CTAButton";
import { FIELD_ERROR } from "@/components/ProviderFields";

/**
 * Form shell for a data connector: fields, an optional notice above the
 * submit button, the submit button and the collection status.
 * The status region is always mounted so screen readers announce progress
 * and the result; collection errors are shown as an alert under the button.
 */
export default function ConnectorForm({
  onSubmit,
  onReset,
  busy,
  outcome,
  submitLabel,
  busyLabel,
  taskExplained,
  notice = null,
  children,
}) {
  const { t } = useTranslation();

  return (
    <form
      className="w-full flex flex-col gap-y-6 pb-6"
      onSubmit={onSubmit}
      onReset={onReset}
    >
      {children}
      <div className="flex flex-col gap-y-3">
        {notice}
        <CTAButton
          busy={busy}
          className="!w-full !mr-0 md:!h-auto py-2 text-sm"
        >
          {busy && (
            <LoaderCircle
              strokeWidth={1.5}
              aria-hidden="true"
              className="w-4 h-4 animate-spin motion-reduce:animate-none"
            />
          )}
          {busy ? busyLabel : submitLabel}
        </CTAButton>
        <div role="status" className="text-xs">
          {busy && (
            <div className="flex flex-col gap-y-1 text-theme-text-secondary">
              <p>{t("data-connectors.status.busy")}</p>
              {taskExplained && <p>{taskExplained}</p>}
            </div>
          )}
          {!busy && outcome?.type === "success" && (
            <p className="flex items-start gap-x-2 text-green-400 light:text-green-700">
              <CircleCheck
                strokeWidth={1.5}
                size={16}
                aria-hidden="true"
                className="shrink-0"
              />
              <span>{outcome.message}</span>
            </p>
          )}
          {!busy && outcome?.type === "warning" && (
            <p className="flex items-start gap-x-2 text-amber-300 light:text-amber-800">
              <CircleAlert
                strokeWidth={1.5}
                size={16}
                aria-hidden="true"
                className="shrink-0"
              />
              <span>{outcome.message}</span>
            </p>
          )}
        </div>
        {!busy && outcome?.type === "error" && (
          <p role="alert" className={`${FIELD_ERROR} !mt-0`}>
            {t("data-connectors.error", { error: outcome.message })}
          </p>
        )}
      </div>
    </form>
  );
}
