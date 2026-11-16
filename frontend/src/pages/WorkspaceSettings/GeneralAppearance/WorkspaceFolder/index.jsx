import { useTranslation } from "react-i18next";
import { SavedIndicator } from "@/components/AutosaveForm";
import { flattenFolderTree } from "@/models/workspaceFolder";

export default function WorkspaceFolder({ workspace, folders = [] }) {
  const { t } = useTranslation();
  if (folders.length === 0) return null;

  return (
    <div className="flex flex-col gap-y-[8px] mt-6">
      <label htmlFor="folderId" className="block input-label">
        {t("workspace-folders.label")}
        <SavedIndicator name="folderId" />
      </label>
      <select
        name="folderId"
        id="folderId"
        defaultValue={workspace.folderId ?? ""}
        className="border-none bg-theme-settings-input-bg text-white text-sm rounded-lg focus:outline-primary-button active:outline-primary-button outline-none block w-full p-2.5 cursor-pointer"
      >
        <option value="">{t("workspace-folders.root")}</option>
        {flattenFolderTree(folders).map(({ folder, depth }) => (
          <option key={folder.id} value={folder.id}>
            {"\u00A0\u00A0\u00A0".repeat(depth) + folder.name}
          </option>
        ))}
      </select>
    </div>
  );
}
