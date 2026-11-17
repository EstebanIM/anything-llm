import Workspace from "@/models/workspace";
import WorkspaceFolderModel from "@/models/workspaceFolder";
import { castToType } from "@/utils/types";
import showToast from "@/utils/toast";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import AutosaveForm from "@/components/AutosaveForm";
import WorkspaceName from "./WorkspaceName";
import WorkspaceFolder from "./WorkspaceFolder";
import SuggestedChatMessages from "./SuggestedChatMessages";
import DeleteWorkspace from "./DeleteWorkspace";

export default function GeneralInfo({
  slug,
  deletionProtected = false,
  onWorkspaceUpdated,
}) {
  const { t } = useTranslation();
  const [workspace, setWorkspace] = useState(null);
  const [folders, setFolders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchWorkspace() {
      const [workspace, tree] = await Promise.all([
        Workspace.bySlug(slug),
        WorkspaceFolderModel.tree(),
      ]);
      setWorkspace(workspace);
      setFolders(tree?.folders || []);
      setLoading(false);
    }
    fetchWorkspace();
  }, [slug]);

  const handleUpdate = async (formEl) => {
    const data = {};
    const form = new FormData(formEl);
    for (var [key, value] of form.entries()) data[key] = castToType(key, value);
    const { workspace: updatedWorkspace, message } = await Workspace.update(
      workspace.slug,
      data
    );
    if (!updatedWorkspace) {
      showToast(t("provider-pages.toast.failed", { error: message }), "error", {
        clear: true,
      });
      return false;
    }
    // Keeps the page title in step with a renamed workspace.
    onWorkspaceUpdated?.(updatedWorkspace);
    return true;
  };

  if (!workspace || loading) return null;
  return (
    <div className="w-full relative flex flex-col gap-y-[32px]">
      <AutosaveForm
        onSave={handleUpdate}
        className="w-full xl:w-1/2 flex flex-col gap-y-6"
      >
        <WorkspaceName key={workspace.slug} workspace={workspace} />
        <WorkspaceFolder workspace={workspace} folders={folders} />
      </AutosaveForm>
      <SuggestedChatMessages slug={workspace.slug} />
      <DeleteWorkspace workspace={workspace} visible={!deletionProtected} />
    </div>
  );
}
