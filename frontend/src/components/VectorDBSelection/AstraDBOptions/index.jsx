import { useId } from "react";
import { useTranslation } from "react-i18next";
import {
  FIELD_COL,
  FIELD_INPUT,
  FIELD_LABEL,
  FIELD_ROW,
  SECRET_MASK,
  SecretInput,
} from "@/components/ProviderFields";

export default function AstraDBOptions({ settings }) {
  const { t } = useTranslation();
  const id = useId();

  return (
    <div className="w-full flex flex-col gap-y-7">
      <div className={`${FIELD_ROW} mt-1.5`}>
        <div className={FIELD_COL}>
          <label htmlFor={`${id}-endpoint`} className={FIELD_LABEL}>
            {t("provider-forms.vector-db.astra.endpoint")}
          </label>
          <input
            id={`${id}-endpoint`}
            type="url"
            name="AstraDBEndpoint"
            className={FIELD_INPUT}
            placeholder="https://<db-id>-<region>.apps.astra.datastax.com"
            defaultValue={settings?.AstraDBEndpoint}
            required={true}
            autoComplete="off"
            spellCheck={false}
          />
        </div>

        <div className={FIELD_COL}>
          <label htmlFor={`${id}-token`} className={FIELD_LABEL}>
            {t("provider-forms.vector-db.astra.token")}
          </label>
          <SecretInput
            id={`${id}-token`}
            name="AstraDBApplicationToken"
            placeholder="AstraCS:..."
            defaultValue={settings?.AstraDBApplicationToken ? SECRET_MASK : ""}
            required={true}
          />
        </div>
      </div>
    </div>
  );
}
