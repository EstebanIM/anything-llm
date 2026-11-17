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

export default function ChromaDBOptions({ settings }) {
  const { t } = useTranslation();
  const id = useId();
  const optional = (
    <span className="font-normal text-theme-text-secondary">
      ({t("provider-fields.optional")})
    </span>
  );

  return (
    <div className="w-full flex flex-col gap-y-7">
      <div className={`${FIELD_ROW} mt-1.5`}>
        <div className={FIELD_COL}>
          <label htmlFor={`${id}-endpoint`} className={FIELD_LABEL}>
            {t("provider-forms.vector-db.chroma.endpoint")}
          </label>
          <input
            id={`${id}-endpoint`}
            type="url"
            name="ChromaEndpoint"
            className={FIELD_INPUT}
            placeholder="http://localhost:8000"
            defaultValue={settings?.ChromaEndpoint}
            required={true}
            autoComplete="off"
            spellCheck={false}
          />
        </div>

        <div className={FIELD_COL}>
          <label htmlFor={`${id}-header`} className={FIELD_LABEL}>
            {t("provider-forms.vector-db.chroma.api-header")} {optional}
          </label>
          <input
            id={`${id}-header`}
            name="ChromaApiHeader"
            autoComplete="off"
            spellCheck={false}
            type="text"
            defaultValue={settings?.ChromaApiHeader}
            className={FIELD_INPUT}
            placeholder="X-Api-Key"
          />
        </div>

        <div className={FIELD_COL}>
          <label htmlFor={`${id}-api-key`} className={FIELD_LABEL}>
            {t("provider-fields.api-key")} {optional}
          </label>
          <SecretInput
            id={`${id}-api-key`}
            name="ChromaApiKey"
            defaultValue={settings?.ChromaApiKey ? SECRET_MASK : ""}
            placeholder="sk-..."
          />
        </div>
      </div>
    </div>
  );
}
