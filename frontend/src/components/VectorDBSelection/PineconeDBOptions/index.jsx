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

export default function PineconeDBOptions({ settings }) {
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
            name="PineConeKey"
            defaultValue={settings?.PineConeKey ? SECRET_MASK : ""}
            required={true}
          />
        </div>
        <div className={FIELD_COL}>
          <label htmlFor={`${id}-index`} className={FIELD_LABEL}>
            {t("provider-forms.vector-db.pinecone.index")}
          </label>
          <input
            id={`${id}-index`}
            type="text"
            name="PineConeIndex"
            className={FIELD_INPUT}
            placeholder="my-index"
            defaultValue={settings?.PineConeIndex}
            required={true}
            autoComplete="off"
            spellCheck={false}
          />
        </div>
      </div>
    </div>
  );
}
