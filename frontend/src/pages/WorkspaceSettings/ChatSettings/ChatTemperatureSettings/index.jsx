import { useTranslation } from "react-i18next";
import { FIELD_INPUT, blurOnWheel } from "@/components/ProviderFields";
import SettingsField from "../../components/SettingsField";

export default function ChatTemperatureSettings({ workspace }) {
  const { t } = useTranslation();
  return (
    <SettingsField
      name="openAiTemp"
      label={t("chat.temperature.title")}
      help={t("chat.temperature.desc-end")}
    >
      {(control) => (
        <input
          {...control}
          name="openAiTemp"
          type="number"
          inputMode="decimal"
          min={0.0}
          step={0.1}
          onWheel={blurOnWheel}
          defaultValue={workspace?.openAiTemp ?? ""}
          className={FIELD_INPUT}
          placeholder={t("chat.temperature.placeholder")}
          autoComplete="off"
        />
      )}
    </SettingsField>
  );
}
