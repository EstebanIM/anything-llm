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

export default function QDrantDBOptions({ settings }) {
  const { t } = useTranslation();
  const id = useId();

  return (
    <div className="w-full flex flex-col gap-y-7">
      <div className={`${FIELD_ROW} mt-1.5`}>
        <div className={FIELD_COL}>
          <label htmlFor={`${id}-endpoint`} className={FIELD_LABEL}>
            {t("provider-forms.vector-db.qdrant.endpoint")}
          </label>
          <input
            id={`${id}-endpoint`}
            type="url"
            name="QdrantEndpoint"
            className={FIELD_INPUT}
            placeholder="http://localhost:6633"
            defaultValue={settings?.QdrantEndpoint}
            required={true}
            autoComplete="off"
            spellCheck={false}
          />
        </div>

        <div className={FIELD_COL}>
          <label htmlFor={`${id}-api-key`} className={FIELD_LABEL}>
            {t("provider-fields.api-key")}{" "}
            <span className="font-normal text-theme-text-secondary">
              ({t("provider-fields.optional")})
            </span>
          </label>
          <SecretInput
            id={`${id}-api-key`}
            name="QdrantApiKey"
            placeholder="wOeqxsYP4....1244sba"
            defaultValue={settings?.QdrantApiKey ? SECRET_MASK : ""}
          />
        </div>
      </div>
    </div>
  );
}
