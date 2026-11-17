import { useId, useRef, useState } from "react";
import { Trash2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import Sidebar from "@/components/SettingsSidebar";
import useMultiUserMode from "@/hooks/useMultiUserMode";
import showToast from "@/utils/toast";
import System from "@/models/system";
import TableState from "@/components/lib/TableState";
import ConfirmModal from "@/components/lib/ConfirmModal";
import { CanViewChatHistory } from "@/components/CanViewChatHistory";
import ChatRow from "./ChatRow";
import ExportChatsMenu from "../ChatEmbedWidgets/components/ExportChatsMenu";
import Pagination from "../ChatEmbedWidgets/components/Pagination";
import usePagedChats from "../ChatEmbedWidgets/components/usePagedChats";
import useFocusAfterRemoval from "../ChatEmbedWidgets/components/useFocusAfterRemoval";

export default function WorkspaceChats() {
  const { t } = useTranslation();
  const multiUserMode = useMultiUserMode();
  const headingId = useId();
  const headingRef = useRef(null);
  const tbodyRef = useRef(null);
  const paged = usePagedChats(System.chats);
  const markRemoved = useFocusAfterRemoval(tbodyRef, headingRef);
  const [confirmClear, setConfirmClear] = useState(false);
  const [clearing, setClearing] = useState(false);
  const columns = multiUserMode ? 7 : 6;

  async function handleDeleteChat(chatId) {
    const { success } = await System.deleteChat(chatId);
    if (!success) {
      showToast(t("embed-pages.toast.chat-delete-failed"), "error", {
        clear: true,
      });
      return false;
    }
    markRemoved(paged.chats.findIndex((chat) => chat.id === chatId));
    paged.removeChat(chatId);
    showToast(t("embed-pages.toast.chat-deleted"), "success", { clear: true });
    return true;
  }

  // Deletes every chat of the instance (id -1), not only this page.
  async function handleClearAll() {
    setClearing(true);
    const { success } = await System.deleteChat(-1);
    setClearing(false);
    if (!success) {
      showToast(t("embed-pages.clear.failed"), "error", { clear: true });
      return;
    }
    setConfirmClear(false);
    // The clear button goes away with the chats: focus moves to the heading.
    markRemoved(0);
    paged.clearAll();
    if (paged.offset > 0) paged.setOffset(0);
    showToast(t("embed-pages.clear.done"), "success", { clear: true });
  }

  return (
    <CanViewChatHistory>
      <div className="w-screen h-screen overflow-hidden bg-zinc-950 light:bg-slate-50 flex">
        <Sidebar />
        <main className="relative md:ml-[2px] md:mr-[16px] md:my-[16px] md:rounded-[16px] bg-zinc-900 light:bg-white w-full h-full md:h-[calc(100%-32px)] overflow-y-auto p-4 md:p-0">
          <div className="flex flex-col w-full px-1 md:pl-6 md:pr-[50px] md:py-6 py-16">
            <div className="w-full flex flex-col gap-y-1 pb-6 border-white/10 light:border-theme-sidebar-border border-b-2">
              <div className="flex flex-wrap gap-4 items-center">
                <h1
                  id={headingId}
                  ref={headingRef}
                  tabIndex={-1}
                  className="text-lg leading-6 font-bold text-white"
                >
                  {t("recorded.title")}
                </h1>
                <ExportChatsMenu
                  chatType="workspace"
                  filePrefix="iasmar-chats"
                />
                {paged.total > 0 && (
                  <button
                    type="button"
                    onClick={() => setConfirmClear(true)}
                    className="flex items-center gap-x-2 px-4 rounded-lg text-xs font-semibold min-h-[44px] md:min-h-0 md:h-[34px] w-fit border border-zinc-500 light:border-slate-500 text-zinc-200 light:text-slate-700 hover:bg-red-600 hover:border-red-600 hover:text-[#ffffff] light:hover:text-[#ffffff] transition-colors duration-quick ease-smooth"
                  >
                    <Trash2 strokeWidth={1.5} size={18} aria-hidden="true" />
                    {t("embed-pages.clear.button")}
                  </button>
                )}
              </div>
              <p className="text-xs leading-[18px] text-theme-text-secondary mt-2">
                {t("recorded.description")}
              </p>
            </div>
            <div
              role="region"
              aria-labelledby={headingId}
              tabIndex={0}
              className="overflow-x-auto mt-2 rounded-sm"
            >
              <table className="w-full text-xs text-left min-w-[640px] border-spacing-0">
                <thead className="text-theme-text-secondary text-xs leading-[18px] font-bold uppercase border-white/10 light:border-slate-200 border-b">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      {t("recorded.table.id")}
                    </th>
                    {multiUserMode && (
                      <th scope="col" className="px-6 py-3">
                        {t("recorded.table.by")}
                      </th>
                    )}
                    <th scope="col" className="px-6 py-3">
                      {t("recorded.table.workspace")}
                    </th>
                    <th scope="col" className="px-6 py-3">
                      {t("recorded.table.prompt")}
                    </th>
                    <th scope="col" className="px-6 py-3">
                      {t("recorded.table.response")}
                    </th>
                    <th scope="col" className="px-6 py-3">
                      {t("recorded.table.at")}
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 sticky right-0 md:static bg-zinc-900 light:bg-white"
                    >
                      <span className="sr-only">{t("api.actions")}</span>
                    </th>
                  </tr>
                </thead>
                <tbody
                  ref={tbodyRef}
                  aria-busy={paged.status === "loading" || undefined}
                >
                  {paged.status === "loading" && (
                    <TableState state="loading" colSpan={columns} />
                  )}
                  {paged.status === "error" && (
                    <TableState
                      state="error"
                      colSpan={columns}
                      onRetry={paged.retry}
                    />
                  )}
                  {paged.status === "ready" && paged.chats.length === 0 && (
                    <TableState
                      state="empty"
                      colSpan={columns}
                      message={
                        paged.offset > 0
                          ? t("embed-pages.history.empty-page")
                          : t("embed-pages.history.empty-workspace")
                      }
                    />
                  )}
                  {paged.status === "ready" &&
                    paged.chats.map((chat) => (
                      <ChatRow
                        key={chat.id}
                        chat={chat}
                        onDelete={handleDeleteChat}
                      />
                    ))}
                </tbody>
              </table>
            </div>
            {(paged.offset > 0 || paged.canNext) && (
              <Pagination
                page={paged.offset + 1}
                canNext={paged.canNext}
                busy={paged.status === "loading"}
                onChange={(page) => paged.setOffset(page - 1)}
                label={t("embed-pages.pagination.label", {
                  name: t("recorded.title"),
                })}
              />
            )}
          </div>
        </main>
      </div>
      <ConfirmModal
        isOpen={confirmClear}
        title={t("embed-pages.clear.title")}
        confirmLabel={t("embed-pages.clear.button")}
        busy={clearing}
        onConfirm={handleClearAll}
        onCancel={() => setConfirmClear(false)}
      >
        <p>{t("embed-pages.clear.body", { count: paged.total })}</p>
        <p>{t("embed-pages.clear.export-first")}</p>
        <p>{t("embed-pages.irreversible")}</p>
      </ConfirmModal>
    </CanViewChatHistory>
  );
}
