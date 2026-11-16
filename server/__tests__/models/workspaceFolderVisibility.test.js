const prisma = require("../../utils/prisma");
const { WorkspaceFolder } = require("../../models/workspaceFolder");
const { ROLES } = require("../../utils/middleware/multiUserProtected");

const defaultUser = { id: 42, role: ROLES.default };
const adminUser = { id: 7, role: ROLES.admin };

const folders = [
  { id: 1, name: "Visible Parent", parent_id: null, order: 0 },
  { id: 2, name: "Visible Child", parent_id: 1, order: 0 },
  { id: 3, name: "Empty Root", parent_id: null, order: 0 },
  { id: 4, name: "Hidden Branch", parent_id: null, order: 0 },
  { id: 5, name: "Hidden Child", parent_id: 4, order: 0 },
];

const assignedWorkspaces = [
  { id: 10, name: "Assigned Nested", folderId: 2 },
  { id: 11, name: "Assigned Root", folderId: null },
];

describe("WorkspaceFolder visibility", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    prisma.workspace_folders.findMany = jest.fn().mockResolvedValue(folders);
    prisma.workspaces.findMany = jest.fn().mockResolvedValue(assignedWorkspaces);
  });

  it("prunes empty and unassigned folder branches for default users", async () => {
    const tree = await WorkspaceFolder.tree(defaultUser);

    expect(tree.workspaces.map((workspace) => workspace.id)).toEqual([11]);
    expect(tree.folders.map((folder) => folder.id)).toEqual([1]);
    expect(tree.folders[0].children.map((folder) => folder.id)).toEqual([2]);
    expect(tree.folders[0].children[0].workspaces.map((ws) => ws.id)).toEqual([
      10,
    ]);
  });

  it("keeps empty folders visible for admin users", async () => {
    const tree = await WorkspaceFolder.tree(adminUser);

    expect(tree.folders.map((folder) => folder.id)).toEqual([1, 3, 4]);
    expect(tree.folders.find((folder) => folder.id === 4).children[0].id).toBe(
      5
    );
  });

  it("shows a default user the path to a workspace three folders deep", async () => {
    prisma.workspace_folders.findMany = jest.fn().mockResolvedValue([
      { id: 21, name: "A", parent_id: null, order: 0 },
      { id: 22, name: "B", parent_id: 21, order: 0 },
      { id: 23, name: "C", parent_id: 22, order: 0 },
      { id: 24, name: "D", parent_id: null, order: 0 },
    ]);
    prisma.workspaces.findMany = jest
      .fn()
      .mockResolvedValue([{ id: 30, name: "Deep", folderId: 23 }]);

    const tree = await WorkspaceFolder.tree(defaultUser);

    expect(tree.folders.map((folder) => folder.id)).toEqual([21]);
    const b = tree.folders[0].children;
    expect(b.map((folder) => folder.id)).toEqual([22]);
    const c = b[0].children;
    expect(c.map((folder) => folder.id)).toEqual([23]);
    expect(c[0].workspaces.map((ws) => ws.id)).toEqual([30]);
  });
});
