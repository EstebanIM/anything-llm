import {
  createContext,
  useContext,
  useState,
  useEffect,
  useId,
  useRef,
} from "react";
import { useTranslation } from "react-i18next";
import { useMemoriesSidebar } from "../ChatSidebar";
import useUser from "@/hooks/useUser";
import System from "@/models/system";
import Memory from "@/models/memory";
import showToast from "@/utils/toast";

export const LIMITS = {
  workspace: 20,
  global: 5,
};

const MemoriesContext = createContext(null);

export function useMemoriesContext() {
  const ctx = useContext(MemoriesContext);
  if (!ctx) {
    throw new Error("useMemoriesContext must be used within MemoriesProvider");
  }
  return ctx;
}

export function MemoriesProvider({ workspace, children }) {
  const { t } = useTranslation();
  const { sidebarOpen, closeSidebar } = useMemoriesSidebar();
  const { user } = useUser();
  const canToggle = !user || ["admin", "superadmin"].includes(user?.role);
  const baseId = useId();
  const createButtonRef = useRef(null);

  const [memories, setMemories] = useState({ global: [], workspace: [] });
  const [memoriesLoaded, setMemoriesLoaded] = useState(false);
  const [loadingMemories, setLoadingMemories] = useState(false);
  const [memoriesError, setMemoriesError] = useState(null);
  const [activeTab, setActiveTab] = useState("workspace");
  const [modalState, setModalState] = useState({ open: false, mode: "create" });
  const [editingMemory, setEditingMemory] = useState(null);
  const [enabled, setEnabled] = useState(false);
  const [autoExtraction, setAutoExtraction] = useState(true);
  const [loadingEnabled, setLoadingEnabled] = useState(true);
  // Index of a card that just left the list, so focus can land next to it.
  const [pendingFocusIndex, setPendingFocusIndex] = useState(null);

  useEffect(() => {
    if (!sidebarOpen) return;
    System.keys().then((settings) => {
      setEnabled(!!settings?.MemoryEnabled);
      setAutoExtraction(settings?.MemoryAutoExtraction !== false);
      setLoadingEnabled(false);
    });
  }, [sidebarOpen]);

  async function fetchMemories() {
    if (!workspace?.slug) {
      setMemoriesLoaded(true);
      return;
    }
    setLoadingMemories(true);
    const { error = null, ...data } = await Memory.forWorkspace(workspace.slug);
    setMemoriesError(error);
    setMemories(data);
    setLoadingMemories(false);
    setMemoriesLoaded(true);
  }

  useEffect(() => {
    if (sidebarOpen && enabled) fetchMemories();
  }, [sidebarOpen, workspace?.slug, enabled]);

  /** @returns {Promise<boolean>} whether the memory was saved */
  async function handleCreate(content) {
    if (!workspace?.slug) return false;
    const { memory } = await Memory.create(workspace.slug, {
      content,
      scope: activeTab,
    });
    if (!memory) return false;
    await fetchMemories();
    return true;
  }

  /** @returns {Promise<boolean>} */
  async function handleDelete(memoryId) {
    const { success } = await Memory.delete(memoryId);
    if (!success) {
      showToast(t("chat-panels.memories.delete-failed"), "error", {
        clear: true,
      });
      return false;
    }
    await fetchMemories();
    return true;
  }

  /** @returns {Promise<boolean>} whether the memory was saved */
  async function handleUpdate(memoryId, content) {
    const { memory } = await Memory.update(memoryId, { content });
    if (!memory) return false;
    await fetchMemories();
    return true;
  }

  /** @returns {Promise<boolean>} */
  async function handleMove(memoryId) {
    const { memory } =
      activeTab === "workspace"
        ? await Memory.promoteToGlobal(memoryId)
        : workspace?.slug
          ? await Memory.demoteToWorkspace(memoryId, workspace.slug)
          : { memory: null };
    if (!memory) {
      showToast(t("chat-panels.memories.move-failed"), "error", {
        clear: true,
      });
      return false;
    }
    await fetchMemories();
    return true;
  }

  function openCreateModal() {
    setEditingMemory(null);
    setModalState({ open: true, mode: "create" });
  }

  function openEditModal(memory) {
    setEditingMemory(memory);
    setModalState({ open: true, mode: "edit" });
  }

  function closeModal() {
    setModalState({ open: false, mode: "create" });
    setEditingMemory(null);
  }

  const activeMemories =
    activeTab === "workspace" ? memories.workspace : memories.global;

  const ids = {
    heading: `${baseId}-heading`,
    panel: `${baseId}-panel`,
    tab: (tab) => `${baseId}-tab-${tab}`,
    toggle: `${baseId}-toggle`,
    autoExtraction: `${baseId}-auto-extraction`,
  };

  const value = {
    workspace,
    sidebarOpen,
    closeSidebar,
    canToggle,
    memories,
    memoriesLoaded,
    loadingMemories,
    memoriesError,
    fetchMemories,
    activeTab,
    setActiveTab,
    activeMemories,
    enabled,
    setEnabled,
    autoExtraction,
    setAutoExtraction,
    loadingEnabled,
    modalState,
    editingMemory,
    openCreateModal,
    openEditModal,
    closeModal,
    handleCreate,
    handleDelete,
    handleUpdate,
    handleMove,
    pendingFocusIndex,
    setPendingFocusIndex,
    createButtonRef,
    ids,
  };

  return (
    <MemoriesContext.Provider value={value}>
      {children}
    </MemoriesContext.Provider>
  );
}
