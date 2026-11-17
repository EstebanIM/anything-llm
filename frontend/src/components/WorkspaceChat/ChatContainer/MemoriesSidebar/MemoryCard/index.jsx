import { useId, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { EllipsisVertical } from "lucide-react";
import { useMemoriesContext, LIMITS } from "../MemoriesContext";
import CardMenu from "./CardMenu";
import { formatDate } from "@/utils/dates";

export default function MemoryCard({ memory, index }) {
  const { t } = useTranslation();
  const {
    activeTab,
    memories,
    handleDelete,
    handleMove,
    openEditModal,
    setPendingFocusIndex,
  } = useMemoriesContext();

  const [menuOpen, setMenuOpen] = useState(false);
  const buttonRef = useRef(null);
  const contentId = useId();

  const isWorkspace = activeTab === "workspace";
  const canMove = isWorkspace
    ? memories.global.length < LIMITS.global
    : memories.workspace.length < LIMITS.workspace;

  return (
    <div className="relative shrink-0 bg-zinc-900 light:bg-white light:border light:border-slate-300 rounded-lg p-3 flex gap-0.5 items-start">
      <div className="flex-1 min-w-0">
        <p
          id={contentId}
          className="text-sm leading-5 text-zinc-50 light:text-slate-900 break-words"
        >
          {memory.content}
        </p>
        <p className="text-xs leading-4 text-zinc-400 light:text-slate-600 mt-1.5">
          {formatDate(memory.createdAt)}
        </p>
      </div>
      <button
        ref={buttonRef}
        type="button"
        data-memory-menu=""
        aria-label={t("chat-panels.memories.options")}
        aria-describedby={contentId}
        aria-haspopup="menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
        className="shrink-0 -mr-2 -mt-2 w-11 h-11 md:-mr-1 md:-mt-1 md:w-7 md:h-7 flex items-center justify-center rounded-md border-none bg-transparent cursor-pointer text-zinc-400 light:text-slate-600 hover:text-zinc-50 light:hover:text-slate-900 transition-colors duration-quick"
      >
        <EllipsisVertical strokeWidth={1.5} size={20} aria-hidden="true" />
      </button>
      {menuOpen && (
        <CardMenu
          triggerRef={buttonRef}
          isWorkspace={isWorkspace}
          canMove={canMove}
          onClose={() => setMenuOpen(false)}
          onEdit={() => {
            setMenuOpen(false);
            // The modal hands focus back to whatever had it when it opened.
            buttonRef.current?.focus();
            openEditModal(memory);
          }}
          onMove={async () => {
            setMenuOpen(false);
            buttonRef.current?.focus();
            if (await handleMove(memory.id)) setPendingFocusIndex(index);
          }}
          onDelete={async () => {
            const deleted = await handleDelete(memory.id);
            if (deleted) {
              setPendingFocusIndex(index);
              return;
            }
            setMenuOpen(false);
            buttonRef.current?.focus();
          }}
        />
      )}
    </div>
  );
}
