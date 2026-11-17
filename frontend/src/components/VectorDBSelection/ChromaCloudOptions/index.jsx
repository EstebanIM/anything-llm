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

export default function ChromaCloudOptions({ settings }) {
  const { t } = useTranslation();
  const id = useId();

  return (
    <div className="w-full flex flex-col gap-y-7">
      <div className={`${FIELD_ROW} mt-1.5`}>
        <div className={FIELD_COL}>
          <label htmlFor={`${id}-api-key`} className={FIELD_LABEL}>
            {t("provider-fields.api-key")}
          </label>
          <SecretInput
            id={`${id}-api-key`}
            name="ChromaCloudApiKey"
            placeholder="ck-..."
            defaultValue={settings?.ChromaCloudApiKey ? SECRET_MASK : ""}
            required={true}
          />
        </div>

        <div className={FIELD_COL}>
          <label htmlFor={`${id}-tenant`} className={FIELD_LABEL}>
            {t("provider-forms.vector-db.chroma-cloud.tenant")}
          </label>
          <input
            id={`${id}-tenant`}
            name="ChromaCloudTenant"
            autoComplete="off"
            spellCheck={false}
            type="text"
            defaultValue={settings?.ChromaCloudTenant}
            className={FIELD_INPUT}
            required={true}
          />
        </div>

        <div className={FIELD_COL}>
          <label htmlFor={`${id}-database`} className={FIELD_LABEL}>
            {t("provider-forms.vector-db.database-name")}
          </label>
          <input
            id={`${id}-database`}
            name="ChromaCloudDatabase"
            autoComplete="off"
            spellCheck={false}
            type="text"
            defaultValue={settings?.ChromaCloudDatabase}
            className={FIELD_INPUT}
            required={true}
          />
        </div>
      </div>
    </div>
  );
}
