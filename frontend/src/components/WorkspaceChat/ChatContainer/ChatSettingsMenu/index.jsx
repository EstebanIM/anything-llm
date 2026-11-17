import { useState, useRef, useEffect, useId } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { SlidersHorizontal } from "lucide-react";
import useLoginMode from "@/hooks/useLoginMode";
import useMenu from "@/hooks/useMenu";
import { useModal } from "@/hooks/useModal";
import TextSizeRow from "./TextSize";
import MemoriesRow from "./Memories";
import CopyLinkToChatRow, { CopyLinkModal, getChatUrl } from "./CopyLinkToChat";
import ExportRow from "./Export";

export default function ChatSettingsMenu({
  history = [],
  workspace = null,
  threadSlug = null,
}) {
  const { t } = useTranslation();
  const mode = useLoginMode();
  const params = useParams();
  const [showMenu, setShowMenu] = useState(false);
  const [announcement, setAnnouncement] = useState("");
  const [linkCopyFailed, setLinkCopyFailed] = useState(false);
  const {
    isOpen: isLinkModalOpen,
    openModal: openLinkModal,
    closeModal: closeLinkModal,
  } = useModal();
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const menuId = useId();

  useMenu({
    open: showMenu,
    onClose: () => setShowMenu(false),
    menuRef,
    triggerRef: buttonRef,
  });

  useEffect(() => {
    if (!announcement) return;
    const timer = setTimeout(() => setAnnouncement(""), 3000);
    return () => clearTimeout(timer);
  }, [announcement]);

  function closeMenu({ returnFocus = false } = {}) {
    setShowMenu(false);
    if (returnFocus) buttonRef.current?.focus();
  }

  // The link modal lives outside the menu: rendered inside it, the first click
  // in the modal counted as a click outside the menu and unmounted both.
  function showLinkModal({ failed }) {
    setLinkCopyFailed(failed);
    closeMenu({ returnFocus: true });
    openLinkModal();
  }

  const hasUserIcon = mode !== null;

  return (
    <div
      className={`absolute top-3 md:top-5 z-30 ${hasUserIcon ? "right-[55px] md:right-[67px]" : "right-4 md:right-6"}`}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-label={t("chat-input.chat-settings")}
        aria-haspopup="menu"
        aria-expanded={showMenu}
        aria-controls={showMenu ? menuId : undefined}
        onClick={() => setShowMenu(!showMenu)}
        className={`group border-none cursor-pointer flex items-center justify-center w-11 h-11 md:w-[35px] md:h-[35px] rounded-full transition-colors duration-quick ${
          showMenu
            ? "bg-zinc-700 light:bg-slate-200"
            : "hover:bg-zinc-700 light:hover:bg-slate-200"
        }`}
      >
        <SlidersHorizontal
          strokeWidth={1.5}
          size={18}
          aria-hidden="true"
          className={
            showMenu
              ? "text-white light:text-slate-800"
              : "text-zinc-300 light:text-slate-600 group-hover:text-white light:group-hover:text-slate-800"
          }
        />
      </button>

      {showMenu && (
        <div
          ref={menuRef}
          id={menuId}
          role="menu"
          aria-label={t("chat-input.chat-settings")}
          className="absolute right-0 top-12 md:top-[42px] bg-zinc-800 light:bg-slate-50 border border-zinc-700 light:border-slate-300 rounded-lg p-3.5 w-[226px] flex flex-col gap-1.5 shadow-lg animate-in fade-in-0 [--tw-enter-translate-y:-4px] [animation-duration:var(--dur-base)] [animation-timing-function:var(--ease-smooth)]"
        >
          <TextSizeRow />
          <MemoriesRow onClose={closeMenu} />
          <ExportRow
            history={history}
            workspace={workspace}
            threadSlug={threadSlug}
            onClose={closeMenu}
          />
          <CopyLinkToChatRow
            onCopied={setAnnouncement}
            onShowLink={showLinkModal}
          />
        </div>
      )}

      <span className="sr-only" role="status">
        {announcement}
      </span>
      {params.slug && (
        <CopyLinkModal
          isOpen={isLinkModalOpen}
          closeModal={closeLinkModal}
          url={getChatUrl(params.slug, params.threadSlug)}
          failed={linkCopyFailed}
        />
      )}
    </div>
  );
}
