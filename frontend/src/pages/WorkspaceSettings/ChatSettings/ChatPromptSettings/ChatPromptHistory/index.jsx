import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";
import { X } from "lucide-react";
import PromptHistory from "@/models/promptHistory";
import { useDialogFocus } from "@/components/lib/Modal";
import ConfirmModal from "@/components/lib/ConfirmModal";
import { useModalEscape } from "@/hooks/useModalEscape";
import showToast from "@/utils/toast";
import PromptHistoryItem from "./PromptHistoryItem";
import * as Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

/**
 * Side panel (modal dialog) with the saved versions of the system prompt.
 * It stays mounted so it can slide out; while closed it is invisible and
 * leaves the accessibility tree. It sits below the app modals (z-99) so the
 * confirmation dialogs it opens appear on top.
 */
export default function ChatPromptHistory({
  show,
  workspaceSlug,
  onRestore,
  onClose,
  onPublishClick,
}) {
  const { t } = useTranslation();
  const titleId = useId();
  const panelRef = useRef(null);
  const listRef = useRef(null);
  const closeRef = useRef(null);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [confirmClear, setConfirmClear] = useState(false);
  const [clearing, setClearing] = useState(false);

  useDialogFocus(show, panelRef);
  useModalEscape(show, onClose);

  function loadHistory() {
    if (!workspaceSlug) return;
    setLoading(true);
    PromptHistory.forWorkspace(workspaceSlug)
      .then((historyData) => {
        setHistory(historyData);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    if (show && workspaceSlug) loadHistory();
  }, [show, workspaceSlug]);

  async function handleClearAll() {
    if (!workspaceSlug || clearing) return;
    setClearing(true);
    const { success } = await PromptHistory.clearAll(workspaceSlug);
    setClearing(false);
    setConfirmClear(false);
    if (!success) {
      showToast(t("workspace-settings.history.clear-failed"), "error");
      return;
    }
    setHistory([]);
    // "Clear all" is gone now; keep the keyboard inside the panel.
    setTimeout(() => closeRef.current?.focus(), 0);
  }

  async function deleteItem(id, index) {
    const { success } = await PromptHistory.delete(workspaceSlug, id);
    if (!success) {
      showToast(t("workspace-settings.history.delete-failed"), "error");
      return;
    }
    setHistory((prev) => prev.filter((item) => item.id !== id));
    // The deleted entry took its menu with it: move to its neighbour.
    setTimeout(() => {
      const restoreButtons =
        listRef.current?.querySelectorAll("[data-history-restore]") ?? [];
      (
        restoreButtons[index] ??
        restoreButtons[index - 1] ??
        closeRef.current
      )?.focus();
    }, 0);
  }

  return createPortal(
    <>
      {show && (
        <div
          aria-hidden="true"
          onClick={onClose}
          className="fixed inset-0 z-[97] bg-black/40"
        />
      )}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        {...(show ? { "data-app-dialog": "" } : {})}
        className={`fixed left-3 right-3 sm:left-auto top-3 bottom-3 w-auto sm:w-[375px] flex flex-col bg-theme-action-menu-bg light:bg-theme-home-update-card-bg border border-zinc-700 light:border-slate-300 rounded-xl py-4 px-4 z-[98] shadow-lg focus:outline-none duration-panel ease-drawer ${
          // Visible at once on open (so focus can move in), and only hidden
          // once the slide-out has finished.
          show
            ? "translate-x-0 opacity-100 visible transition-[transform,opacity]"
            : "translate-x-full opacity-0 invisible transition-[transform,opacity,visibility]"
        }`}
      >
        <div className="flex items-center justify-between gap-x-2">
          <h2
            id={titleId}
            className="text-theme-text-primary text-sm font-semibold"
          >
            {t("chat.prompt.history.title")}
          </h2>
          <div className="flex items-center gap-x-1">
            {history.length > 0 && (
              <button
                type="button"
                onClick={() => setConfirmClear(true)}
                className="min-h-[44px] md:min-h-[32px] px-2 rounded-md text-sm font-medium text-theme-text-secondary hover:text-white hover:bg-zinc-700 light:hover:text-slate-900 light:hover:bg-slate-200 transition-colors duration-quick ease-smooth"
              >
                {t("chat.prompt.history.clearAll")}
              </button>
            )}
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label={t("api.modal.close")}
              className="w-11 h-11 md:w-8 md:h-8 flex items-center justify-center rounded-md text-theme-text-secondary hover:text-white hover:bg-zinc-700 light:hover:text-slate-900 light:hover:bg-slate-200 transition-colors duration-quick ease-smooth"
            >
              <X strokeWidth={1.5} size={16} aria-hidden="true" />
            </button>
          </div>
        </div>
        <div className="mt-4 flex-1 min-h-0 overflow-y-auto">
          {loading ? (
            <LoaderSkeleton />
          ) : history.length === 0 ? (
            <p className="h-full flex items-center justify-center text-center text-sm text-theme-text-secondary">
              {t("chat.prompt.history.noHistory")}
            </p>
          ) : (
            <ul ref={listRef} className="flex flex-col gap-y-4 pb-4">
              {history.map((item, index) => (
                <li key={item.id} className="relative">
                  <PromptHistoryItem
                    {...item}
                    onRestore={() => onRestore(item.prompt)}
                    onPublishClick={onPublishClick}
                    onDelete={() => deleteItem(item.id, index)}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <ConfirmModal
        isOpen={confirmClear}
        title={t("workspace-settings.history.clear-title")}
        confirmLabel={t("chat.prompt.history.clearAll")}
        busy={clearing}
        onConfirm={handleClearAll}
        onCancel={() => setConfirmClear(false)}
      >
        <p>{t("workspace-settings.history.clear-body")}</p>
      </ConfirmModal>
    </>,
    document.getElementById("root")
  );
}

function LoaderSkeleton() {
  const { t } = useTranslation();
  return (
    <div role="status">
      <span className="sr-only">{t("common.loading")}</span>
      <Skeleton.default
        height="85px"
        width="100%"
        highlightColor="var(--theme-bg-primary)"
        baseColor="var(--theme-bg-secondary)"
        count={8}
      />
    </div>
  );
}
