import { useTranslation } from "react-i18next";
import WorkspaceModelSelect from "../../../components/WorkspaceModelSelect";

export default function ChatModelSelection({ provider, workspace }) {
  const { t } = useTranslation();
  return (
    <WorkspaceModelSelect
      provider={provider}
      name="chatModel"
      label={t("chat.model.title")}
      help={t("chat.model.description")}
      defaultValue={workspace?.chatModel}
    />
  );
}
