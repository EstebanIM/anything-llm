import { useId } from "react";
import { useTranslation } from "react-i18next";
import {
  FIELD_COL,
  FIELD_INPUT,
  FIELD_ROW,
  InfoTip,
  SECRET_MASK,
  SecretInput,
} from "@/components/ProviderFields";

export default function PGVectorOptions({ settings }) {
  const { t } = useTranslation();
  const id = useId();

  return (
    <div className="w-full flex flex-col gap-y-7">
      <div className={`${FIELD_ROW} mt-1.5`}>
        <div className="flex flex-col w-full md:w-96">
          <div className="flex items-center gap-x-1 mb-3">
            <label
              htmlFor={`${id}-connection`}
              className="text-white text-sm font-semibold"
            >
              {t("provider-forms.vector-db.pgvector.connection")}
            </label>
            <InfoTip
              label={t("provider-forms.vector-db.pgvector.connection")}
              place="right"
            >
              <div className="flex flex-col gap-y-2 break-words">
                <p>
                  {t("provider-forms.vector-db.pgvector.connection-format")}
                  <br />
                  <code>postgresql://username:password@host:port/database</code>
                </p>
                <p>
                  {t("provider-forms.vector-db.pgvector.permissions-intro")}
                </p>
                <ul className="list-disc list-inside">
                  <li>
                    {t("provider-forms.vector-db.pgvector.permission-read")}
                  </li>
                  <li>
                    {t("provider-forms.vector-db.pgvector.permission-schema")}
                  </li>
                  <li>
                    {t("provider-forms.vector-db.pgvector.permission-create")}
                  </li>
                </ul>
                <p className="font-semibold">
                  {t("provider-forms.vector-db.pgvector.extension-required")}
                </p>
              </div>
            </InfoTip>
          </div>
          <SecretInput
            id={`${id}-connection`}
            name="PGVectorConnectionString"
            revealLabel={t("provider-fields.show-password")}
            placeholder="postgresql://username:password@host:port/database"
            defaultValue={settings?.PGVectorConnectionString ? SECRET_MASK : ""}
            required={true}
          />
        </div>

        <div className={FIELD_COL}>
          <div className="flex items-center gap-x-1 mb-3">
            <label
              htmlFor={`${id}-table`}
              className="text-white text-sm font-semibold"
            >
              {t("provider-forms.vector-db.pgvector.table")}
            </label>
            <InfoTip
              label={t("provider-forms.vector-db.pgvector.table")}
              place="right"
            >
              <div className="flex flex-col gap-y-2 break-words">
                <p>{t("provider-forms.vector-db.pgvector.table-help")}</p>
                <p>
                  {t("provider-forms.vector-db.pgvector.table-default")}{" "}
                  <code>anythingllm_vectors</code>
                </p>
                <p className="font-semibold">
                  {t("provider-forms.vector-db.pgvector.table-new")}
                </p>
              </div>
            </InfoTip>
          </div>
          <input
            id={`${id}-table`}
            type="text"
            name="PGVectorTableName"
            autoComplete="off"
            spellCheck={false}
            defaultValue={settings?.PGVectorTableName}
            className={FIELD_INPUT}
            placeholder="vector_table"
          />
        </div>
      </div>
    </div>
  );
}
