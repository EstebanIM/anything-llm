import { folderPathOptions } from "@/models/workspaceFolder";
import { useTranslation } from "react-i18next";
import { FIELD_SELECT } from "@/components/ProviderFields";
import SettingsField from "../../components/SettingsField";

export default function WorkspaceFolder({ workspace, folders = [] }) {
  const { t } = useTranslation();
  if (folders.length === 0) return null;

  return (
    <SettingsField name="folderId" label={t("workspace-folders.label")}>
      {(control) => (
        <select
          {...control}
          name="folderId"
          defaultValue={workspace.folderId ?? ""}
          className={`${FIELD_SELECT} cursor-pointer`}
        >
          <option value="">{t("workspace-folders.root")}</option>
          {folderPathOptions(folders).map(({ id, path }) => (
            <option key={id} value={id}>
              {path}
            </option>
          ))}
        </select>
      )}
    </SettingsField>
  );
}
