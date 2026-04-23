const { reqBody, userFromSession, multiUserMode } = require("../utils/http");
const { validatedRequest } = require("../utils/middleware/validatedRequest");
const {
  flexUserRoleValid,
  ROLES,
} = require("../utils/middleware/multiUserProtected");
const { WorkspaceFolder } = require("../models/workspaceFolder");
const { Telemetry } = require("../models/telemetry");
const { EventLogs } = require("../models/eventLogs");
const prisma = require("../utils/prisma");

function workspaceFolderEndpoints(app) {
  if (!app) return;

  // GET /api/workspace-folders/tree
  // Returns the full nested folder + workspace tree for the sidebar.
  app.get(
    "/workspace-folders/tree",
    [validatedRequest],
    async (request, response) => {
      try {
        const user = await userFromSession(request, response);
        const tree = await WorkspaceFolder.tree(user);
        response.status(200).json(tree);
      } catch (e) {
        console.error(e.message, e);
        response.sendStatus(500).end();
      }
    }
  );

  // GET /api/workspace-folders
  // Returns a flat list of all folders (for dropdowns).
  app.get(
    "/workspace-folders",
    [validatedRequest],
    async (_request, response) => {
      try {
        const folders = await WorkspaceFolder.all();
        response.status(200).json({ folders });
      } catch (e) {
        console.error(e.message, e);
        response.sendStatus(500).end();
      }
    }
  );

  // POST /api/workspace-folder/new
  app.post(
    "/workspace-folder/new",
    [validatedRequest, flexUserRoleValid([ROLES.admin, ROLES.manager])],
    async (request, response) => {
      try {
        const user = await userFromSession(request, response);
        const { name, parent_id = null } = reqBody(request);
        const { folder, message } = await WorkspaceFolder.new(
          name,
          parent_id ? parseInt(parent_id) : null
        );

        if (folder) {
          await Telemetry.sendTelemetry(
            "workspace_folder_created",
            {
              multiUserMode: multiUserMode(response),
              depth: parent_id ? "nested" : "root",
            },
            user?.id
          );
          await EventLogs.logEvent(
            "workspace_folder_created",
            { folderName: folder.name },
            user?.id
          );
        }

        response.status(200).json({ folder, message });
      } catch (e) {
        console.error(e.message, e);
        response.sendStatus(500).end();
      }
    }
  );

  // POST /api/workspace-folder/:id/update
  app.post(
    "/workspace-folder/:id/update",
    [validatedRequest, flexUserRoleValid([ROLES.admin, ROLES.manager])],
    async (request, response) => {
      try {
        const user = await userFromSession(request, response);
        const id = parseInt(request.params.id);
        const updates = reqBody(request);

        const { folder, message } = await WorkspaceFolder.update(id, updates);

        if (folder) {
          const isRename = !!updates.name;
          const isMove = Object.prototype.hasOwnProperty.call(
            updates,
            "parent_id"
          );
          if (isRename) {
            await EventLogs.logEvent(
              "workspace_folder_renamed",
              { folderId: id, newName: folder.name },
              user?.id
            );
          }
          if (isMove) {
            await EventLogs.logEvent(
              "workspace_folder_moved",
              { folderId: id, newParentId: updates.parent_id },
              user?.id
            );
          }
        }

        response.status(200).json({ folder, message });
      } catch (e) {
        console.error(e.message, e);
        response.sendStatus(500).end();
      }
    }
  );

  // DELETE /api/workspace-folder/:id
  app.delete(
    "/workspace-folder/:id",
    [validatedRequest, flexUserRoleValid([ROLES.admin, ROLES.manager])],
    async (request, response) => {
      try {
        const user = await userFromSession(request, response);
        const id = parseInt(request.params.id);

        // Collect stats before deletion for telemetry
        const childCount = await WorkspaceFolder.where({ parent_id: id });
        const wsCount = await prisma.workspaces.count({
          where: { folderId: id },
        });

        const { success, message } = await WorkspaceFolder.delete(id);

        if (success) {
          await Telemetry.sendTelemetry(
            "workspace_folder_deleted",
            {
              multiUserMode: multiUserMode(response),
              hadChildren: childCount.length > 0,
              workspaceCount: wsCount,
            },
            user?.id
          );
          await EventLogs.logEvent(
            "workspace_folder_deleted",
            { folderId: id },
            user?.id
          );
        }

        response.status(200).json({ success, message });
      } catch (e) {
        console.error(e.message, e);
        response.sendStatus(500).end();
      }
    }
  );

  // POST /api/workspace-folder/move-workspace
  app.post(
    "/workspace-folder/move-workspace",
    [validatedRequest, flexUserRoleValid([ROLES.admin, ROLES.manager])],
    async (request, response) => {
      try {
        const user = await userFromSession(request, response);
        const { workspaceId, folderId } = reqBody(request);

        const { success, message } = await WorkspaceFolder.moveWorkspace(
          parseInt(workspaceId),
          folderId !== null && folderId !== undefined && folderId !== ""
            ? parseInt(folderId)
            : null
        );

        if (success) {
          await EventLogs.logEvent(
            "workspace_moved_to_folder",
            { workspaceId, folderId: folderId ?? null },
            user?.id
          );
        }

        response.status(200).json({ success, message });
      } catch (e) {
        console.error(e.message, e);
        response.sendStatus(500).end();
      }
    }
  );

  // POST /api/workspace-folder/reorder
  // Bulk update order/parent for multiple folders (used after DnD).
  app.post(
    "/workspace-folder/reorder",
    [validatedRequest, flexUserRoleValid([ROLES.admin, ROLES.manager])],
    async (request, response) => {
      try {
        const { items = [] } = reqBody(request);
        const { success, message } = await WorkspaceFolder.reorder(items);
        response.status(200).json({ success, message });
      } catch (e) {
        console.error(e.message, e);
        response.sendStatus(500).end();
      }
    }
  );
}

module.exports = { workspaceFolderEndpoints };
