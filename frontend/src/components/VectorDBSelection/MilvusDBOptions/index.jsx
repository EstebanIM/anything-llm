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

export default function MilvusDBOptions({ settings }) {
  const { t } = useTranslation();
  const id = useId();

  return (
    <div className="w-full flex flex-col gap-y-7">
      <div className={`${FIELD_ROW} mt-1.5`}>
        <div className={FIELD_COL}>
          <label htmlFor={`${id}-address`} className={FIELD_LABEL}>
            {t("provider-forms.vector-db.milvus.address")}
          </label>
          <input
            id={`${id}-address`}
            type="text"
            name="MilvusAddress"
            className={FIELD_INPUT}
            placeholder="http://localhost:19530"
            defaultValue={settings?.MilvusAddress}
            required={true}
            autoComplete="off"
            spellCheck={false}
          />
        </div>

        <div className={FIELD_COL}>
          <label htmlFor={`${id}-username`} className={FIELD_LABEL}>
            {t("provider-forms.vector-db.milvus.username")}
          </label>
          <input
            id={`${id}-username`}
            type="text"
            name="MilvusUsername"
            className={FIELD_INPUT}
            defaultValue={settings?.MilvusUsername}
            autoComplete="off"
            spellCheck={false}
          />
        </div>
        <div className={FIELD_COL}>
          <label htmlFor={`${id}-password`} className={FIELD_LABEL}>
            {t("provider-forms.vector-db.milvus.password")}
          </label>
          <SecretInput
            id={`${id}-password`}
            name="MilvusPassword"
            revealLabel={t("provider-fields.show-password")}
            defaultValue={settings?.MilvusPassword ? SECRET_MASK : ""}
          />
        </div>
      </div>
    </div>
  );
}
