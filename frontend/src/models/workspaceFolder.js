import { API_BASE } from "@/utils/constants";
import { baseHeaders } from "@/utils/request";

const WorkspaceFolder = {
  /**
   * Fetch the full nested folder + workspace tree for the sidebar.
   * @returns {Promise<{folders: Array, workspaces: Array}>}
   */
  tree: async function () {
    return fetch(`${API_BASE}/workspace-folders/tree`, {
      method: "GET",
      headers: baseHeaders(),
    })
      .then((res) => res.json())
      .catch(() => ({ folders: [], workspaces: [] }));
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
 * Flatten a folder tree into `{ folder, depth }` rows for select inputs.
 * @param {Array} folders - nested folders from `WorkspaceFolder.tree()`
 * @returns {Array<{folder: Object, depth: number}>}
 */
export function flattenFolderTree(folders = [], depth = 0) {
  const result = [];
  for (const folder of folders) {
    result.push({ folder, depth });
    if (folder.children?.length > 0)
      result.push(...flattenFolderTree(folder.children, depth + 1));
  }
  return result;
}

export default WorkspaceFolder;
