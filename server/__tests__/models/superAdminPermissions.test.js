const prisma = require("../../utils/prisma");
const { Workspace } = require("../../models/workspace");
const { WorkspaceFolder } = require("../../models/workspaceFolder");
const {
  BrowserExtensionApiKey,
} = require("../../models/browserExtensionApiKey");
const { ROLES } = require("../../utils/middleware/multiUserProtected");

const superadmin = { id: 1, role: ROLES.superadmin };
const defaultUser = { id: 2, role: ROLES.default };

describe("superadmin inherited data access", () => {
  let originalWorkspaceGet;
  let originalWorkspaceWhere;
  let originalBrowserExtensionApiKeyWhere;

  beforeEach(() => {
    jest.clearAllMocks();

    originalWorkspaceGet = Workspace.get;
    originalWorkspaceWhere = Workspace.where;
    originalBrowserExtensionApiKeyWhere = BrowserExtensionApiKey.where;

    Workspace.get = jest.fn().mockResolvedValue({ id: 10, slug: "global" });
    Workspace.where = jest.fn().mockResolvedValue([{ id: 10, slug: "global" }]);
    BrowserExtensionApiKey.where = jest
      .fn()
      .mockResolvedValue([{ id: 10, key: "brx-global" }]);

    prisma.workspaces.findFirst = jest
      .fn()
      .mockResolvedValue({ id: 20, slug: "assigned" });
    prisma.workspaces.findMany = jest
      .fn()
      .mockResolvedValue([{ id: 20, slug: "assigned" }]);
    prisma.workspace_folders.findMany = jest.fn().mockResolvedValue([]);
    prisma.browser_extension_api_keys.findMany = jest
      .fn()
      .mockResolvedValue([{ id: 20, key: "brx-assigned" }]);
  });

  afterEach(() => {
    Workspace.get = originalWorkspaceGet;
    Workspace.where = originalWorkspaceWhere;
    BrowserExtensionApiKey.where = originalBrowserExtensionApiKeyWhere;
  });

  it("lets superadmin get any workspace without a workspace_users filter", async () => {
    const workspace = await Workspace.getWithUser(superadmin, { id: 10 });

    expect(workspace).toEqual({ id: 10, slug: "global" });
    expect(Workspace.get).toHaveBeenCalledWith({ id: 10 });
    expect(prisma.workspaces.findFirst).not.toHaveBeenCalled();
  });

  it("keeps default users scoped to assigned workspaces when fetching one workspace", async () => {
    await Workspace.getWithUser(defaultUser, { id: 20 });

    expect(Workspace.get).not.toHaveBeenCalled();
    expect(prisma.workspaces.findFirst).toHaveBeenCalledWith({
      where: {
        id: 20,
        workspace_users: {
          some: {
            user_id: defaultUser.id,
          },
        },
      },
      include: {
        workspace_users: true,
        documents: true,
      },
    });
  });

  it("lets superadmin list all workspaces without a workspace_users filter", async () => {
    const workspaces = await Workspace.whereWithUser(superadmin, {
      archived: false,
    });

    expect(workspaces).toEqual([{ id: 10, slug: "global" }]);
    expect(Workspace.where).toHaveBeenCalledWith(
      { archived: false },
      null,
      null
    );
    expect(prisma.workspaces.findMany).not.toHaveBeenCalled();
  });

  it("keeps default users scoped to assigned workspaces when listing workspaces", async () => {
    await Workspace.whereWithUser(defaultUser, { archived: false });

    expect(Workspace.where).not.toHaveBeenCalled();
    expect(prisma.workspaces.findMany).toHaveBeenCalledWith({
      where: {
        archived: false,
        workspace_users: {
          some: {
            user_id: defaultUser.id,
          },
        },
      },
    });
  });

  it("lets superadmin see all workspaces in the folder tree", async () => {
    await WorkspaceFolder.tree(superadmin);

    expect(prisma.workspaces.findMany).toHaveBeenCalledWith({
      orderBy: { name: "asc" },
    });
  });

  it("keeps default users scoped in the folder tree", async () => {
    await WorkspaceFolder.tree(defaultUser);

    expect(prisma.workspaces.findMany).toHaveBeenCalledWith({
      where: {
        workspace_users: { some: { user_id: defaultUser.id } },
      },
      orderBy: { name: "asc" },
    });
  });

  it("lets superadmin list all browser extension API keys", async () => {
    const apiKeys = await BrowserExtensionApiKey.whereWithUser(superadmin);

    expect(apiKeys).toEqual([{ id: 10, key: "brx-global" }]);
    expect(BrowserExtensionApiKey.where).toHaveBeenCalledWith({}, null, null);
    expect(prisma.browser_extension_api_keys.findMany).not.toHaveBeenCalled();
  });
});
