import { chatQueryRefusalResponse } from "@/utils/chat";
import { Trans, useTranslation } from "react-i18next";
import { FIELD_INPUT } from "@/components/ProviderFields";
import SettingsField from "../../components/SettingsField";

export default function ChatQueryRefusalResponse({ workspace }) {
  const { t } = useTranslation();
  return (
    <SettingsField
      name="queryRefusalResponse"
      label={t("chat.refusal.title")}
      help={
        <Trans
          i18nKey="workspace-settings.refusal.help"
          components={{
            code: (
              <code className="bg-theme-settings-input-bg px-1 py-0.5 rounded-sm" />
            ),
          }}
        />
      }
    >
      {(control) => (
        <textarea
          {...control}
          name="queryRefusalResponse"
          rows={2}
          defaultValue={chatQueryRefusalResponse(workspace)}
          className={FIELD_INPUT}
          placeholder={t("workspace-settings.refusal.placeholder")}
          required={true}
          wrap="soft"
          autoComplete="off"
        />
      )}
    </SettingsField>
  );
}
