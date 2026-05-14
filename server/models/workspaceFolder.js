const prisma = require("../utils/prisma");
const slugifyModule = require("slugify");
const { v4: uuidv4 } = require("uuid");
const { ROLES } = require("../utils/middleware/multiUserProtected");

const WorkspaceFolder = {
  MAX_DEPTH: 5,

  writable: ["name", "parent_id", "order"],

  validations: {
    name: (value) => {
      if (!value || typeof value !== "string" || !value.trim()) return null;
      return value.trim().slice(0, 120);
    },
    parent_id: (value) => {
      if (value === null || value === undefined || value === "") return null;
      const parsed = parseInt(value);
      return isNaN(parsed) ? null : parsed;
    },
    order: (value) => {
      const parsed = parseInt(value);
      return isNaN(parsed) ? 0 : parsed;
    },
  },

  slugify: function (...args) {
    slugifyModule.extend({
      "+": " plus ",
      "!": " bang ",
      "@": " at ",
      "*": " splat ",
      ".": " dot ",
      ":": "",
      "~": "",
      "(": "",
      ")": "",
      "'": "",
      '"': "",
      "|": "",
    });
    return slugifyModule(...args);
  },

  validateFields: function (updates = {}) {
    const validated = {};
    for (const [key, value] of Object.entries(updates)) {
      if (!this.writable.includes(key)) continue;
      validated[key] = this.validations[key]
        ? this.validations[key](value)
        : value;
    }
    return validated;
  },

  canSeeAllFolders: function (user = null) {
    return (
      !user ||
      [ROLES.superadmin, ROLES.admin, ROLES.manager].includes(user.role)
    );
  },

  pruneVisibleFolders: function (folders = []) {
    return folders.reduce((visibleFolders, folder) => {
      const children = this.pruneVisibleFolders(folder.children || []);
      const workspaces = folder.workspaces || [];

      if (workspaces.length > 0 || children.length > 0) {
        visibleFolders.push({ ...folder, children, workspaces });
      }

      return visibleFolders;
    }, []);
  },

  flattenFolders: function (folders = []) {
    return folders.reduce((flattened, folder) => {
      const folderRecord = { ...folder };
      delete folderRecord.children;
      delete folderRecord.workspaces;
      flattened.push(folderRecord);
      flattened.push(...this.flattenFolders(folder.children || []));
      return flattened;
    }, []);
  },

  get: async function (clause = {}) {
    return prisma.workspace_folders.findFirst({ where: clause });
  },

  where: async function (
    clause = {},
    limit = null,
    orderBy = { order: "asc" }
  ) {
    return prisma.workspace_folders.findMany({
      where: clause,
      ...(limit ? { take: limit } : {}),
      orderBy,
    });
  },

  /**
   * Walk the parent chain to determine the depth of a folder (root = 0).
   * Bounded by MAX_DEPTH + 1 to prevent runaway loops.
   */
  depthOf: async function (folderId) {
    if (!folderId) return 0;
    let depth = 0;
    let currentId = folderId;
    while (currentId && depth <= this.MAX_DEPTH + 1) {
      const folder = await prisma.workspace_folders.findFirst({
        where: { id: currentId },
        select: { parent_id: true },
      });
      if (!folder || !folder.parent_id) break;
      currentId = folder.parent_id;
      depth++;
    }
    return depth;
  },

  /**
   * Returns the maximum depth of any node in the subtree rooted at folderId.
   */
  subtreeMaxDepth: async function (folderId) {
    const children = await prisma.workspace_folders.findMany({
      where: { parent_id: folderId },
      select: { id: true },
    });
    if (children.length === 0) return 0;
    let max = 0;
    for (const child of children) {
      const childDepth = 1 + (await this.subtreeMaxDepth(child.id));
      if (childDepth > max) max = childDepth;
    }
    return max;
  },

  /**
   * Returns true if candidateId is a descendant of ancestorId.
   */
  isDescendantOf: async function (candidateId, ancestorId) {
    let currentId = candidateId;
    let hops = 0;
    while (currentId && hops <= this.MAX_DEPTH + 1) {
      const folder = await prisma.workspace_folders.findFirst({
        where: { id: currentId },
        select: { parent_id: true },
      });
      if (!folder || !folder.parent_id) return false;
      if (folder.parent_id === ancestorId) return true;
      currentId = folder.parent_id;
      hops++;
    }
    return false;
  },

  /**
   * Create a new folder.
   */
  new: async function (name, parentId = null) {
    const validName = this.validations.name(name);
    if (!validName) return { folder: null, message: "Invalid folder name." };

    if (parentId !== null) {
      const parentDepth = await this.depthOf(parentId);
      if (parentDepth + 1 >= this.MAX_DEPTH) {
        return {
          folder: null,
          message: `Maximum folder depth of ${this.MAX_DEPTH} reached.`,
        };
      }
    }

    let slug = this.slugify(validName, { lower: true });
    slug = slug || uuidv4();
    const existing = await this.get({ slug });
    if (existing) {
      const suffix = Math.floor(10000000 + Math.random() * 90000000);
      slug = this.slugify(`${validName}-${suffix}`, { lower: true });
    }

    try {
      const folder = await prisma.workspace_folders.create({
        data: {
          name: validName,
          slug,
          parent_id: parentId,
          order: 0,
        },
      });
      return { folder, message: null };
    } catch (e) {
      console.error("WorkspaceFolder.new:", e.message);
      return { folder: null, message: e.message };
    }
  },

  /**
   * Update a folder. Validates cycle and depth constraints when parent_id changes.
   */
  update: async function (id, updates = {}) {
    const validated = this.validateFields(updates);

    if (Object.prototype.hasOwnProperty.call(validated, "parent_id")) {
      const newParentId = validated.parent_id;

      if (newParentId === id) {
        return { folder: null, message: "A folder cannot be its own parent." };
      }

      if (newParentId !== null) {
        const isCycle = await this.isDescendantOf(newParentId, id);
        if (isCycle) {
          return {
            folder: null,
            message: "Cannot move a folder into its own descendant.",
          };
        }
        const targetDepth = await this.depthOf(newParentId);
        const subtree = await this.subtreeMaxDepth(id);
        if (targetDepth + 1 + subtree >= this.MAX_DEPTH) {
          return {
            folder: null,
            message: `Moving here would exceed the maximum folder depth of ${this.MAX_DEPTH}.`,
          };
        }
      }
    }

    // Update slug if name changed
    if (validated.name) {
      let slug = this.slugify(validated.name, { lower: true }) || uuidv4();
      const existing = await this.get({ slug, NOT: { id } });
      if (existing) {
        const suffix = Math.floor(10000000 + Math.random() * 90000000);
        slug = this.slugify(`${validated.name}-${suffix}`, { lower: true });
      }
      validated.slug = slug;
    }

    try {
      const folder = await prisma.workspace_folders.update({
        where: { id },
        data: { ...validated, lastUpdatedAt: new Date() },
      });
      return { folder, message: null };
    } catch (e) {
      console.error("WorkspaceFolder.update:", e.message);
      return { folder: null, message: e.message };
    }
  },

  /**
   * Delete a folder. Prisma SetNull reparents children and workspaces to root.
   */
  delete: async function (id) {
    try {
      await prisma.workspace_folders.delete({ where: { id } });
      return { success: true, message: null };
    } catch (e) {
      console.error("WorkspaceFolder.delete:", e.message);
      return { success: false, message: e.message };
    }
  },

  /**
   * Move a workspace into a folder (or to root if folderId is null).
   */
  moveWorkspace: async function (workspaceId, folderId) {
    if (folderId !== null) {
      const folder = await this.get({ id: folderId });
      if (!folder)
        return { success: false, message: "Target folder not found." };
    }
    try {
      await prisma.workspaces.update({
        where: { id: workspaceId },
        data: { folderId: folderId ?? null },
      });
      return { success: true, message: null };
    } catch (e) {
      console.error("WorkspaceFolder.moveWorkspace:", e.message);
      return { success: false, message: e.message };
    }
  },

  /**
   * Bulk reorder: update parent_id and order for a list of folder nodes.
   * Used by the frontend after drag-and-drop reordering.
   */
  reorder: async function (items = []) {
    try {
      for (const item of items) {
        await prisma.workspace_folders.update({
          where: { id: item.id },
          data: {
            parent_id: item.parent_id ?? null,
            order: item.order ?? 0,
            lastUpdatedAt: new Date(),
          },
        });
      }
      return { success: true };
    } catch (e) {
      console.error("WorkspaceFolder.reorder:", e.message);
      return { success: false, message: e.message };
    }
  },

  /**
   * Build a nested tree structure for the sidebar.
   * Returns { folders: [rootFolders...], workspaces: [rootWorkspaces...] }
   * Each folder node has { ...folder, children: [], workspaces: [] }
   *
   * If a user is provided, default-role users only see workspaces assigned
   * via workspace_users; admins and managers see all.
   */
  tree: async function (user = null) {
    const allFolders = await prisma.workspace_folders.findMany({
      orderBy: [{ parent_id: "asc" }, { order: "asc" }, { name: "asc" }],
    });

    // Determine workspace query based on role
    let allWorkspaces;
    if (this.canSeeAllFolders(user)) {
      allWorkspaces = await prisma.workspaces.findMany({
        orderBy: { name: "asc" },
      });
    } else {
      allWorkspaces = await prisma.workspaces.findMany({
        where: {
          workspace_users: { some: { user_id: user.id } },
        },
        orderBy: { name: "asc" },
      });
    }

    // Build folder map
    const folderMap = {};
    for (const folder of allFolders) {
      folderMap[folder.id] = { ...folder, children: [], workspaces: [] };
    }

    // Attach workspaces to their folder (or root list)
    const rootWorkspaces = [];
    for (const ws of allWorkspaces) {
      if (ws.folderId && folderMap[ws.folderId]) {
        folderMap[ws.folderId].workspaces.push(ws);
      } else {
        rootWorkspaces.push(ws);
      }
    }

    // Build tree: attach children to parents, collect roots
    const rootFolders = [];
    for (const folder of allFolders) {
      const node = folderMap[folder.id];
      if (folder.parent_id && folderMap[folder.parent_id]) {
        folderMap[folder.parent_id].children.push(node);
      } else {
        rootFolders.push(node);
      }
    }

    return {
      folders: this.canSeeAllFolders(user)
        ? rootFolders
        : this.pruneVisibleFolders(rootFolders),
      workspaces: rootWorkspaces,
    };
  },

  /**
   * Flat list of all folders for dropdowns.
   */
  all: async function (user = null) {
    if (this.canSeeAllFolders(user)) {
      return prisma.workspace_folders.findMany({
        orderBy: [{ parent_id: "asc" }, { order: "asc" }, { name: "asc" }],
      });
    }

    const tree = await this.tree(user);
    return this.flattenFolders(tree.folders);
  },
};

module.exports = { WorkspaceFolder };
