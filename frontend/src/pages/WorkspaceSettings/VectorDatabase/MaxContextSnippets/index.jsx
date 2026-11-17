import { useTranslation } from "react-i18next";
import { FIELD_INPUT, blurOnWheel } from "@/components/ProviderFields";
import SettingsField from "../../components/SettingsField";

export default function MaxContextSnippets({ workspace }) {
  const { t } = useTranslation();
  return (
    <SettingsField
      name="topN"
      label={t("vector-workspace.snippets.title")}
      help={
        <>
          {t("vector-workspace.snippets.description")}
          <br />
          <i>{t("vector-workspace.snippets.recommend")}</i>
        </>
      }
    >
      {(control) => (
        <input
          {...control}
          name="topN"
          type="number"
          inputMode="numeric"
          min={1}
          max={200}
          step={1}
          onWheel={blurOnWheel}
          defaultValue={workspace?.topN ?? 4}
          className={FIELD_INPUT}
          placeholder="4"
          required={true}
          autoComplete="off"
        />
      )}
    </SettingsField>
  );
}
