import { useTranslation } from "react-i18next";
import { FIELD_SELECT } from "@/components/ProviderFields";
import SettingsField from "../../components/SettingsField";

const THRESHOLDS = [
  { value: 0.0, key: "zero" },
  { value: 0.25, key: "low" },
  { value: 0.5, key: "medium" },
  { value: 0.75, key: "high" },
];

export default function DocumentSimilarityThreshold({ workspace }) {
  const { t } = useTranslation();
  return (
    <SettingsField
      name="similarityThreshold"
      label={t("vector-workspace.doc.title")}
      help={t("vector-workspace.doc.description")}
    >
      {(control) => (
        <select
          {...control}
          name="similarityThreshold"
          defaultValue={workspace?.similarityThreshold ?? 0.25}
          className={FIELD_SELECT}
          required={true}
        >
          {THRESHOLDS.map(({ value, key }) => (
            <option key={key} value={value}>
              {t(`vector-workspace.doc.${key}`)}
            </option>
          ))}
        </select>
      )}
    </SettingsField>
  );
}
