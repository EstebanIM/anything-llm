import { API_BASE } from "@/utils/constants";
import { baseHeaders } from "@/utils/request";

const WorkspaceFolder = {
  /**
   * Fetch the full nested folder + workspace tree for the sidebar.
   * @returns {Promise<{folders: Array, workspaces: Array, error?: boolean}>}
   * `error: true` (with empty lists) when the tree could not be loaded, so
   * callers can tell a failure from a workspace without folders.
   */
  tree: async function () {
    return fetch(`${API_BASE}/workspace-folders/tree`, {
      method: "GET",
      headers: baseHeaders(),
    })
      .then((res) => {
        if (!res.ok) throw new Error(`status-${res.status}`);
        return res.json();
      })
      .catch(() => ({ folders: [], workspaces: [], error: true }));
  },

  /**
   * Create a new folder.
   * @param {{name: string, parent_id?: number|null}} data
   * @returns {Promise<{folder: Object|null, message: string|null}>}
   */
  new: async function (data = {}) {
    return fetch(`${API_BASE}/workspace-folder/new`, {
      method: "POST",
      headers: baseHeaders(),
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .catch((e) => ({ folder: null, message: e.message }));
  },

  /**
   * Update a folder (rename, move to a different parent).
   * @param {number} id
   * @param {{name?: string, parent_id?: number|null, order?: number}} data
   * @returns {Promise<{folder: Object|null, message: string|null}>}
   */
  update: async function (id, data = {}) {
    return fetch(`${API_BASE}/workspace-folder/${id}/update`, {
      method: "POST",
      headers: baseHeaders(),
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .catch((e) => ({ folder: null, message: e.message }));
  },

  /**
   * Delete a folder. Workspaces and subfolders move to root.
   * @param {number} id
   * @returns {Promise<{success: boolean, message: string|null}>}
   */
  delete: async function (id) {
    return fetch(`${API_BASE}/workspace-folder/${id}`, {
      method: "DELETE",
      headers: baseHeaders(),
    })
      .then((res) => res.json())
      .catch((e) => ({ success: false, message: e.message }));
  },

  /**
   * Move a workspace into a folder or to root (folderId = null).
   * @param {number} workspaceId
   * @param {number|null} folderId
   * @returns {Promise<{success: boolean, message: string|null}>}
   */
  moveWorkspace: async function (workspaceId, folderId) {
    return fetch(`${API_BASE}/workspace-folder/move-workspace`, {
      method: "POST",
      headers: baseHeaders(),
      body: JSON.stringify({ workspaceId, folderId }),
    })
      .then((res) => res.json())
      .catch((e) => ({ success: false, message: e.message }));
  },
};

/**
 * Folder options with their full path ("Proyectos / Clientes") for select
 * inputs: a select cannot show nesting, and leading spaces are not read out.
 * @param {Array} folders - nested folders from `WorkspaceFolder.tree()`
 * @returns {Array<{id: number, path: string}>}
 */
export function folderPathOptions(folders = [], parents = []) {
  const result = [];
  for (const folder of folders) {
    const path = [...parents, folder.name];
    result.push({ id: folder.id, path: path.join(" / ") });
    if (folder.children?.length > 0)
      result.push(...folderPathOptions(folder.children, path));
  }
  return result;
}

export default WorkspaceFolder;
