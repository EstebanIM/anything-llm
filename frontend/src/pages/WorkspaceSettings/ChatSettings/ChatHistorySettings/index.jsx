import { useTranslation } from "react-i18next";
import { FIELD_INPUT, blurOnWheel } from "@/components/ProviderFields";
import SettingsField from "../../components/SettingsField";

export default function ChatHistorySettings({ workspace }) {
  const { t } = useTranslation();
  return (
    <SettingsField
      name="openAiHistory"
      label={t("chat.history.title")}
      help={
        <>
          {t("chat.history.desc-start")} <i>{t("chat.history.recommend")}</i>
        </>
      }
    >
      {(control) => (
        <input
          {...control}
          name="openAiHistory"
          type="number"
          inputMode="numeric"
          min={0}
          step={1}
          onWheel={blurOnWheel}
          defaultValue={workspace?.openAiHistory ?? 20}
          className={FIELD_INPUT}
          placeholder="20"
          required={true}
          autoComplete="off"
        />
      )}
    </SettingsField>
  );
}
