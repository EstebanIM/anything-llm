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

export default function ZillizCloudOptions({ settings }) {
  const { t } = useTranslation();
  const id = useId();

  return (
    <div className="w-full flex flex-col gap-y-4">
      <div className={`${FIELD_ROW} mt-1.5`}>
        <div className={FIELD_COL}>
          <label htmlFor={`${id}-endpoint`} className={FIELD_LABEL}>
            {t("provider-forms.vector-db.zilliz.endpoint")}
          </label>
          <input
            id={`${id}-endpoint`}
            type="text"
            name="ZillizEndpoint"
            className={FIELD_INPUT}
            placeholder="https://sample.api.gcp-us-west1.zillizcloud.com"
            defaultValue={settings?.ZillizEndpoint}
            required={true}
            autoComplete="off"
            spellCheck={false}
          />
        </div>

        <div className={FIELD_COL}>
          <label htmlFor={`${id}-token`} className={FIELD_LABEL}>
            {t("provider-forms.vector-db.zilliz.token")}
          </label>
          <SecretInput
            id={`${id}-token`}
            name="ZillizApiToken"
            defaultValue={settings?.ZillizApiToken ? SECRET_MASK : ""}
          />
        </div>
      </div>
    </div>
  );
}
