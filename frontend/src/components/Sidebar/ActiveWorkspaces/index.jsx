import React, { useState, useEffect, useCallback, useRef } from "react";
import * as Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Workspace from "@/models/workspace";
import WorkspaceFolder from "@/models/workspaceFolder";
import ManageWorkspace, {
  useManageWorkspaceModal,
} from "../../Modals/ManageWorkspace";
import paths from "@/utils/paths";
import { useParams, useNavigate, useMatch } from "react-router-dom";
import { GearSix, UploadSimple, DotsSixVertical } from "@phosphor-icons/react";
import useUser from "@/hooks/useUser";
import ThreadContainer from "./ThreadContainer";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import showToast from "@/utils/toast";
import { LAST_VISITED_WORKSPACE, WORKSPACE_FOLDERS_EXPANDED } from "@/utils/constants";
import { safeJsonParse } from "@/utils/request";
import FolderItem from "./FolderItem";

export default function ActiveWorkspaces() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const [loading, setLoading] = useState(true);
  const [tree, setTree] = useState({ folders: [], workspaces: [] });
  const [selectedWs, setSelectedWs] = useState(null);
  const { showing, showModal, hideModal } = useManageWorkspaceModal();
  const { user } = useUser();
  const isInWorkspaceSettings = !!useMatch("/workspace/:slug/settings/:tab");
  const isHomePage = !!useMatch("/");
  const dragOverFolderRef = useRef(null);
  const dragExpandTimerRef = useRef(null);

  // Expanded state: { [folderId]: boolean }, default true (expanded)
  const [expandedMap, setExpandedMap] = useState(() => {
    return (
      safeJsonParse(localStorage.getItem(WORKSPACE_FOLDERS_EXPANDED)) || {}
    );
  });

  const saveExpandedMap = (map) => {
    setExpandedMap(map);
    try {
      localStorage.setItem(WORKSPACE_FOLDERS_EXPANDED, JSON.stringify(map));
    } catch (_) {}
  };

  const toggleExpanded = useCallback(
    (folderId) => {
      const current = expandedMap[folderId] !== false;
      const updated = { ...expandedMap, [folderId]: !current };
      saveExpandedMap(updated);
    },
    [expandedMap]
  );

  const loadTree = useCallback(async () => {
    const data = await WorkspaceFolder.tree();
    // Apply saved workspace ordering per container
    const orderedFolders = applyOrderingRecursive(data.folders);
    setTree({
      folders: orderedFolders,
      workspaces: Workspace.orderWorkspaces(data.workspaces),
    });
    setLoading(false);
  }, []);

  useEffect(() => {
    loadTree();
  }, [loadTree]);

  // Apply localStorage ordering recursively to workspace lists inside folders
  function applyOrderingRecursive(folders) {
    return folders.map((folder) => ({
      ...folder,
      workspaces: Workspace.orderWorkspaces(folder.workspaces || []),
      children: applyOrderingRecursive(folder.children || []),
    }));
  }

  // Virtual "active" slug on home page (last visited)
  const allWorkspacesFlat = getAllWorkspacesFlat(tree);
  const virtualActiveSlug = (() => {
    if (!isHomePage || allWorkspacesFlat.length === 0) return null;
    const lastVisited = safeJsonParse(
      localStorage.getItem(LAST_VISITED_WORKSPACE)
    );
    if (
      lastVisited?.slug &&
      allWorkspacesFlat.some((ws) => ws.slug === lastVisited.slug)
    )
      return lastVisited.slug;
    return allWorkspacesFlat[0]?.slug ?? null;
  })();

  if (loading) {
    return (
      <Skeleton.default
        height={40}
        width="100%"
        count={5}
        baseColor="var(--theme-sidebar-item-default)"
        highlightColor="var(--theme-sidebar-item-hover)"
        enableAnimation={true}
        className="my-1"
      />
    );
  }

  // ─── Drag-and-drop handlers ───────────────────────────────────────────────

  const onDragUpdate = (update) => {
    const { destination } = update;
    if (!destination) {
      clearTimeout(dragExpandTimerRef.current);
      dragOverFolderRef.current = null;
      return;
    }
    const destId = destination.droppableId;
    if (destId !== dragOverFolderRef.current) {
      clearTimeout(dragExpandTimerRef.current);
      dragOverFolderRef.current = destId;
      if (destId.startsWith("folder-")) {
        const folderId = parseInt(destId.replace("folder-", ""));
        // Auto-expand collapsed folder after 400 ms of hovering
        if (expandedMap[folderId] === false) {
          dragExpandTimerRef.current = setTimeout(() => {
            saveExpandedMap({ ...expandedMap, [folderId]: true });
          }, 400);
        }
      }
    }
  };

  const onDragEnd = async (result) => {
    clearTimeout(dragExpandTimerRef.current);
    dragOverFolderRef.current = null;
    if (!result.destination) return;

    const { source, destination, draggableId } = result;
    const wsId = parseInt(draggableId.replace("ws-", ""));

    if (source.droppableId === destination.droppableId) {
      // Reorder within the same container
      const newTree = reorderInContainer(
        tree,
        source.droppableId,
        source.index,
        destination.index
      );
      setTree(newTree);
      const containerWorkspaces = getContainerWorkspaces(
        newTree,
        source.droppableId
      );
      Workspace.storeWorkspaceOrder(containerWorkspaces.map((w) => w.id));
    } else {
      // Move workspace to a different folder (or root)
      const folderId =
        destination.droppableId === "root"
          ? null
          : parseInt(destination.droppableId.replace("folder-", ""));

      // Optimistic update
      const prevTree = tree;
      setTree(moveWorkspaceInTree(tree, wsId, folderId, destination.index));

      const { success, message } = await WorkspaceFolder.moveWorkspace(
        wsId,
        folderId
      );
      if (!success) {
        showToast(message || "Failed to move workspace", "error");
        setTree(prevTree);
      }
    }
  };

  // ─── Workspace card renderer ──────────────────────────────────────────────

  const renderWorkspace = (workspace, index, droppableId) => {
    const isVirtuallyActive = workspace.slug === virtualActiveSlug;
    const isActive = workspace.slug === slug || isVirtuallyActive;
    return (
      <Draggable
        key={workspace.id}
        draggableId={`ws-${workspace.id}`}
        index={index}
      >
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            className={`flex flex-col w-full group ${
              snapshot.isDragging ? "opacity-50" : ""
            }`}
            role="listitem"
          >
            <div className="flex gap-x-2 items-center justify-between">
              <a
                href={
                  isActive ? null : paths.workspace.chat(workspace.slug)
                }
                data-tooltip-id="workspace-name"
                data-tooltip-content={workspace.name}
                aria-current={isActive ? "page" : ""}
                className={`
                  transition-all duration-[200ms]
                  flex flex-grow w-[75%] gap-x-2 py-[6px] pl-[4px] pr-[6px] rounded-[4px] text-white justify-start items-center
                  bg-theme-sidebar-item-default
                  ${isActive ? "light:bg-blue-200 font-bold" : "hover:bg-theme-sidebar-subitem-hover light:hover:bg-slate-300"}
                `}
              >
                <div className="flex flex-row justify-between w-full items-center">
                  <div
                    {...provided.dragHandleProps}
                    className="cursor-grab mr-[3px]"
                  >
                    <DotsSixVertical
                      size={20}
                      className={`${isActive ? "text-white light:text-blue-800" : ""}`}
                      weight="bold"
                    />
                  </div>
                  <div className="flex items-center space-x-2 overflow-hidden flex-grow">
                    <div className="w-[130px] overflow-hidden">
                      <p
                        className={`
                          text-[14px] leading-loose whitespace-nowrap overflow-hidden
                          ${isActive ? "font-bold text-white light:text-blue-900" : "font-medium "} truncate
                          w-full group-hover:w-[130px] group-hover:duration-200
                        `}
                      >
                        {workspace.name}
                      </p>
                    </div>
                  </div>
                  {user?.role !== "default" && (
                    <div
                      className={`flex items-center gap-x-[2px] transition-opacity duration-200 ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
                    >
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          setSelectedWs(workspace);
                          showModal();
                        }}
                        className={`group/upload border-none rounded-md flex items-center justify-center ml-auto p-[2px] ${isActive ? "hover:bg-zinc-500 light:hover:bg-sky-800/30" : "hover:bg-zinc-500 light:hover:bg-slate-400"}`}
                      >
                        <UploadSimple
                          className={`h-[20px] w-[20px] ${isActive ? "text-zinc-400 hover:text-white light:text-blue-700 light:group-hover/upload:text-blue-900" : "text-zinc-400 hover:text-white light:text-slate-600 light:group-hover/upload:text-slate-950"}`}
                        />
                      </button>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          navigate(
                            isInWorkspaceSettings
                              ? paths.workspace.chat(workspace.slug)
                              : paths.workspace.settings.generalAppearance(
                                  workspace.slug
                                )
                          );
                        }}
                        className={`group/gear rounded-md flex items-center justify-center ml-auto p-[2px] ${isActive ? "hover:bg-zinc-500 light:hover:bg-sky-800/30" : "hover:bg-zinc-500 light:hover:bg-slate-400"}`}
                        aria-label="General appearance settings"
                      >
                        <GearSix
                          color={
                            isInWorkspaceSettings && workspace.slug === slug
                              ? "#46C8FF"
                              : undefined
                          }
                          className={`h-[20px] w-[20px] ${isActive ? "text-zinc-400 hover:text-white light:text-blue-700 light:group-hover/gear:text-blue-900" : "text-zinc-400 hover:text-white light:text-slate-600 light:group-hover/gear:text-slate-950"}`}
                        />
                      </button>
                    </div>
                  )}
                </div>
              </a>
            </div>
            {isActive && (
              <ThreadContainer
                workspace={workspace}
                isActive={isActive}
                isVirtualThread={isVirtuallyActive}
              />
            )}
          </div>
        )}
      </Draggable>
    );
  };

  return (
    <DragDropContext onDragEnd={onDragEnd} onDragUpdate={onDragUpdate}>
      <div role="list" aria-label="Workspaces" className="flex flex-col gap-y-2">
        {/* Folders */}
        {tree.folders.map((folder) => (
          <FolderItem
            key={folder.id}
            folder={folder}
            depth={0}
            expandedMap={expandedMap}
            toggleExpanded={toggleExpanded}
            onFolderChange={loadTree}
            renderWorkspace={renderWorkspace}
            user={user}
            currentSlug={slug}
          />
        ))}

        {/* Root workspaces (no folder) */}
        <Droppable droppableId="root">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className={`flex flex-col gap-y-2 min-h-[4px] rounded-[4px] transition-colors duration-150 ${
                snapshot.isDraggingOver ? "bg-white/5" : ""
              }`}
            >
              {tree.workspaces.map((workspace, index) =>
                renderWorkspace(workspace, index, "root")
              )}
              {provided.placeholder}
            </div>
          )}
        </Droppable>

        {showing && (
          <ManageWorkspace
            hideModal={hideModal}
            providedSlug={selectedWs ? selectedWs.slug : null}
          />
        )}
      </div>
    </DragDropContext>
  );
}

// ─── Tree manipulation helpers ───────────────────────────────────────────────

function getAllWorkspacesFlat(tree) {
  const result = [...(tree.workspaces || [])];
  function collectFromFolders(folders) {
    for (const f of folders) {
      result.push(...(f.workspaces || []));
      collectFromFolders(f.children || []);
    }
  }
  collectFromFolders(tree.folders || []);
  return result;
}

function getContainerWorkspaces(tree, droppableId) {
  if (droppableId === "root") return tree.workspaces;
  const folderId = parseInt(droppableId.replace("folder-", ""));
  return findFolderNode(tree.folders, folderId)?.workspaces || [];
}

function findFolderNode(folders, id) {
  for (const f of folders) {
    if (f.id === id) return f;
    const found = findFolderNode(f.children || [], id);
    if (found) return found;
  }
  return null;
}

function reorderInContainer(tree, droppableId, startIndex, endIndex) {
  if (droppableId === "root") {
    const updated = Array.from(tree.workspaces);
    const [removed] = updated.splice(startIndex, 1);
    updated.splice(endIndex, 0, removed);
    return { ...tree, workspaces: updated };
  }
  const folderId = parseInt(droppableId.replace("folder-", ""));
  return {
    ...tree,
    folders: reorderInFolders(tree.folders, folderId, startIndex, endIndex),
  };
}

function reorderInFolders(folders, folderId, startIndex, endIndex) {
  return folders.map((f) => {
    if (f.id === folderId) {
      const updated = Array.from(f.workspaces);
      const [removed] = updated.splice(startIndex, 1);
      updated.splice(endIndex, 0, removed);
      return { ...f, workspaces: updated };
    }
    return { ...f, children: reorderInFolders(f.children || [], folderId, startIndex, endIndex) };
  });
}

function moveWorkspaceInTree(tree, wsId, targetFolderId, destIndex) {
  // Remove workspace from wherever it is
  let movedWs = null;
  const newRootWorkspaces = tree.workspaces.filter((w) => {
    if (w.id === wsId) { movedWs = w; return false; }
    return true;
  });
  const newFolders = removeFromFolders(tree.folders, wsId, (ws) => {
    movedWs = ws;
  });

  if (!movedWs) return tree;

  // Insert into target
  if (targetFolderId === null) {
    const updated = Array.from(newRootWorkspaces);
    updated.splice(destIndex, 0, movedWs);
    return { folders: newFolders, workspaces: updated };
  }
  return {
    workspaces: newRootWorkspaces,
    folders: insertIntoFolder(newFolders, targetFolderId, movedWs, destIndex),
  };
}

function removeFromFolders(folders, wsId, onFound) {
  return folders.map((f) => {
    const newWorkspaces = f.workspaces.filter((w) => {
      if (w.id === wsId) { onFound(w); return false; }
      return true;
    });
    return {
      ...f,
      workspaces: newWorkspaces,
      children: removeFromFolders(f.children || [], wsId, onFound),
    };
  });
}

function insertIntoFolder(folders, folderId, workspace, index) {
  return folders.map((f) => {
    if (f.id === folderId) {
      const updated = Array.from(f.workspaces);
      updated.splice(index, 0, workspace);
      return { ...f, workspaces: updated };
    }
    return { ...f, children: insertIntoFolder(f.children || [], folderId, workspace, index) };
  });
}
