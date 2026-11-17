import { useTranslation } from "react-i18next";
import { FIELD_INPUT } from "@/components/ProviderFields";
import SettingsField from "../../components/SettingsField";

export default function WorkspaceName({ workspace }) {
  const { t } = useTranslation();
  return (
    <SettingsField
      name="name"
      label={t("common.workspaces-name")}
      help={t("general.names.description")}
    >
      {(control) => (
        <input
          {...control}
          name="name"
          type="text"
          minLength={2}
          maxLength={80}
          defaultValue={workspace?.name}
          className={FIELD_INPUT}
          required={true}
          autoComplete="off"
        />
      )}
    </SettingsField>
  );
}
