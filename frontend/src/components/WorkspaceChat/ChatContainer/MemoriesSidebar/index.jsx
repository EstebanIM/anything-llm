import { useEffect, useRef } from "react";
import { LoaderCircle, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import Modal, { ModalBody, ModalHeader } from "@/components/lib/Modal";
import ChatSidebar, { useMediaQuery, PHONE_SCREEN_QUERY } from "../ChatSidebar";
import { MemoriesProvider, useMemoriesContext } from "./MemoriesContext";
import PersonalizationToggle from "./PersonalizationToggle";
import MemoryTabs from "./MemoryTabs";
import MemoryCard from "./MemoryCard";
import MemoryModal from "./MemoryModal";

export { useMemoriesSidebar } from "../ChatSidebar";

export default function MemoriesSidebar({ workspace }) {
  return (
    <MemoriesProvider workspace={workspace}>
      <MemoriesSidebarContent />
    </MemoriesProvider>
  );
}

function MemoriesSidebarContent() {
  const { t } = useTranslation();
  const { sidebarOpen, closeSidebar, ids } = useMemoriesContext();
  const isPhone = useMediaQuery(PHONE_SCREEN_QUERY);

  // On phones the panel would squeeze the chat, so it opens as a dialog.
  if (isPhone) {
    return (
      <>
        <Modal isOpen={sidebarOpen} onClose={closeSidebar} size="md">
          <ModalHeader
            title={t("chat_window.memories.title")}
            onClose={closeSidebar}
          />
          <ModalBody>
            <PanelBody />
          </ModalBody>
        </Modal>
        <MemoryModalWrapper />
      </>
    );
  }

  return (
    <>
      <ChatSidebar
        isOpen={sidebarOpen}
        onClose={closeSidebar}
        labelledBy={ids.heading}
      >
        <SidebarPanel>
          <SidebarHeader />
          <PanelBody />
        </SidebarPanel>
      </ChatSidebar>
      <MemoryModalWrapper />
    </>
  );
}

function PanelBody() {
  const { loadingEnabled } = useMemoriesContext();
  if (loadingEnabled) return <LoadingState />;
  return (
    <>
      <PersonalizationToggle />
      <MemoryList />
    </>
  );
}

function SidebarPanel({ children }) {
  return (
    <div
      className="w-[366px] max-w-full flex-shrink-0 flex flex-col gap-5 mt-[72px] px-5 overflow-y-auto thin-scroll"
      style={{ maxHeight: "calc(100% - 88px)" }}
    >
      {children}
    </div>
  );
}

function MemoryList() {
  const {
    enabled,
    activeTab,
    activeMemories,
    memoriesLoaded,
    loadingMemories,
    memoriesError,
    fetchMemories,
    pendingFocusIndex,
    setPendingFocusIndex,
    createButtonRef,
    ids,
  } = useMemoriesContext();
  const listRef = useRef(null);

  // A deleted or moved card takes the focused menu button with it: move
  // focus to the card now in its place, or to "create" if the list is empty.
  useEffect(() => {
    if (pendingFocusIndex === null || loadingMemories) return;
    const buttons = listRef.current?.querySelectorAll("[data-memory-menu]");
    const target = buttons?.length
      ? buttons[Math.min(pendingFocusIndex, buttons.length - 1)]
      : createButtonRef.current;
    target?.focus({ preventScroll: true });
    setPendingFocusIndex(null);
  }, [activeMemories, pendingFocusIndex, loadingMemories]);

  if (!enabled) return null;
  return (
    <>
      <MemoryTabs />
      <div
        role="tabpanel"
        id={ids.panel}
        aria-labelledby={ids.tab(activeTab)}
        aria-busy={loadingMemories}
        className="pb-4"
      >
        {!memoriesLoaded ? (
          <LoadingState />
        ) : memoriesError ? (
          <ErrorState onRetry={fetchMemories} busy={loadingMemories} />
        ) : activeMemories.length === 0 ? (
          <EmptyState />
        ) : (
          <ul ref={listRef} className="flex flex-col gap-1.5">
            {activeMemories.map((memory, index) => (
              <li key={memory.id}>
                <MemoryCard memory={memory} index={index} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

function MemoryModalWrapper() {
  const {
    enabled,
    modalState,
    editingMemory,
    closeModal,
    handleCreate,
    handleUpdate,
  } = useMemoriesContext();

  if (!enabled) return null;
  return (
    <MemoryModal
      isOpen={modalState.open}
      mode={modalState.mode}
      initialContent={editingMemory?.content || ""}
      onClose={closeModal}
      onSubmit={(content) =>
        modalState.mode === "edit" && editingMemory
          ? handleUpdate(editingMemory.id, content)
          : handleCreate(content)
      }
    />
  );
}

function SidebarHeader() {
  const { t } = useTranslation();
  const { closeSidebar, ids } = useMemoriesContext();

  return (
    <div className="flex items-start justify-between gap-2 shrink-0">
      <h2
        id={ids.heading}
        tabIndex={-1}
        data-panel-title=""
        className="font-medium text-base leading-6 text-zinc-50 light:text-slate-900"
      >
        {t("chat_window.memories.title")}
      </h2>
      <button
        onClick={closeSidebar}
        type="button"
        aria-label={t("chat-panels.memories.close")}
        className="-m-1.5 p-1.5 rounded-md text-zinc-300 light:text-slate-600 hover:text-white light:hover:text-slate-900 transition-colors duration-quick border-none bg-transparent cursor-pointer"
      >
        <X strokeWidth={1.5} size={16} aria-hidden="true" />
      </button>
    </div>
  );
}

function ErrorState({ onRetry, busy }) {
  const { t } = useTranslation();
  return (
    <div
      role="alert"
      className="flex flex-col items-center gap-2 py-4 text-center text-sm text-zinc-300 light:text-slate-700"
    >
      <p>{t("chat-panels.memories.load-failed")}</p>
      <button
        type="button"
        onClick={onRetry}
        aria-busy={busy || undefined}
        className="min-h-[44px] md:min-h-[32px] px-3 rounded-lg border border-zinc-500 light:border-slate-500 text-white light:text-slate-900 hover:bg-zinc-800 light:hover:bg-slate-100 transition-colors duration-quick ease-smooth"
      >
        {t("provider-fields.retry")}
      </button>
    </div>
  );
}

function LoadingState() {
  const { t } = useTranslation();
  return (
    <p
      role="status"
      className="flex items-center justify-center gap-2 py-4 text-sm text-zinc-400 light:text-slate-600"
    >
      <LoaderCircle
        strokeWidth={1.5}
        size={16}
        className="animate-spin"
        aria-hidden="true"
      />
      {t("chat-panels.memories.loading")}
    </p>
  );
}

function EmptyState() {
  const { t } = useTranslation();
  const { openCreateModal } = useMemoriesContext();
  return (
    <p className="text-sm leading-5 text-zinc-400 light:text-slate-600 text-center">
      {t("chat_window.memories.empty")}{" "}
      <button
        type="button"
        onClick={openCreateModal}
        className="text-zinc-50 light:text-slate-900 underline border-none bg-transparent cursor-pointer p-0 text-sm leading-5 font-normal"
      >
        {t("chat_window.memories.empty_cta")}
      </button>
    </p>
  );
}
