import Workspace from "@/models/workspace";
import WorkspaceFolder from "@/models/workspaceFolder";
import { castToType } from "@/utils/types";
import showToast from "@/utils/toast";
import { useEffect, useRef, useState } from "react";
import WorkspaceName from "./WorkspaceName";
import SuggestedChatMessages from "./SuggestedChatMessages";
import DeleteWorkspace from "./DeleteWorkspace";
import CTAButton from "@/components/lib/CTAButton";

function flattenFolders(folders, depth = 0) {
  const result = [];
  for (const folder of folders) {
    result.push({ folder, depth });
    if (folder.children?.length > 0)
      result.push(...flattenFolders(folder.children, depth + 1));
  }
  return result;
}

export default function GeneralInfo({ slug }) {
  const [workspace, setWorkspace] = useState(null);
  const [hasChanges, setHasChanges] = useState(false);
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);
  const [folders, setFolders] = useState([]);
  const formEl = useRef(null);

  useEffect(() => {
    async function fetchData() {
      const [ws, tree] = await Promise.all([
        Workspace.bySlug(slug),
        WorkspaceFolder.tree(),
      ]);
      setWorkspace(ws);
      setFolders(tree.folders || []);
      setLoading(false);
    }
    fetchData();
  }, [slug]);

  const handleUpdate = async (e) => {
    setSaving(true);
    e.preventDefault();
    const data = {};
    const form = new FormData(formEl.current);
    for (var [key, value] of form.entries()) data[key] = castToType(key, value);
    const { workspace: updatedWorkspace, message } = await Workspace.update(
      workspace.slug,
      data
    );
    if (!!updatedWorkspace) {
      showToast("Workspace updated!", "success", { clear: true });
    } else {
      showToast(`Error: ${message}`, "error", { clear: true });
    }
    setSaving(false);
    setHasChanges(false);
  };

  if (!workspace || loading) return null;
  return (
    <div className="w-full relative">
      <form
        ref={formEl}
        onSubmit={handleUpdate}
        className="w-1/2 flex flex-col gap-y-6"
      >
        {hasChanges && (
          <div className="absolute top-0 right-0">
            <CTAButton type="submit">
              {saving ? "Updating..." : "Update Workspace"}
            </CTAButton>
          </div>
        )}
        <WorkspaceName
          key={workspace.slug}
          workspace={workspace}
          setHasChanges={setHasChanges}
        />
        {folders.length > 0 && (
          <div>
            <label
              htmlFor="folderId"
              className="block mb-2 text-sm font-medium text-white"
            >
              Carpeta
            </label>
            <select
              name="folderId"
              id="folderId"
              defaultValue={workspace.folderId ?? ""}
              onChange={() => setHasChanges(true)}
              className="border-none bg-theme-settings-input-bg w-full text-white text-sm rounded-lg focus:outline-primary-button outline-none block p-2.5"
            >
              <option value="">Sin carpeta (raíz)</option>
              {flattenFolders(folders).map(({ folder, depth }) => (
                <option key={folder.id} value={folder.id}>
                  {"— ".repeat(depth) + folder.name}
                </option>
              ))}
            </select>
          </div>
        )}
      </form>
      <SuggestedChatMessages slug={workspace.slug} />
      <DeleteWorkspace workspace={workspace} />
    </div>
  );
}
