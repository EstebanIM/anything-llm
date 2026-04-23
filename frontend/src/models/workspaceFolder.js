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
   * Fetch a flat list of all folders (for dropdowns).
   * @returns {Promise<Array>}
   */
  all: async function () {
    return fetch(`${API_BASE}/workspace-folders`, {
      method: "GET",
      headers: baseHeaders(),
    })
      .then((res) => res.json())
      .then((res) => res.folders || [])
      .catch(() => []);
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

  /**
   * Bulk update order and parent_id for a list of folder nodes.
   * @param {Array<{id: number, parent_id: number|null, order: number}>} items
   * @returns {Promise<{success: boolean}>}
   */
  reorder: async function (items = []) {
    return fetch(`${API_BASE}/workspace-folder/reorder`, {
      method: "POST",
      headers: baseHeaders(),
      body: JSON.stringify({ items }),
    })
      .then((res) => res.json())
      .catch((e) => ({ success: false, message: e.message }));
  },
};

export default WorkspaceFolder;
