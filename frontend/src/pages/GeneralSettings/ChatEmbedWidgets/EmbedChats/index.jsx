import { useId, useRef } from "react";
import { useTranslation } from "react-i18next";
import ChatRow from "./ChatRow";
import Embed from "@/models/embed";
import showToast from "@/utils/toast";
import TableState from "@/components/lib/TableState";
import ExportChatsMenu from "../components/ExportChatsMenu";
import Pagination from "../components/Pagination";
import usePagedChats from "../components/usePagedChats";
import useFocusAfterRemoval from "@/hooks/useFocusAfterRemoval";

const COLUMNS = 6;

export default function EmbedChatsView() {
  const { t } = useTranslation();
  const headingId = useId();
  const headingRef = useRef(null);
  const tbodyRef = useRef(null);
  const { status, chats, canNext, offset, setOffset, retry, removeChat } =
    usePagedChats(Embed.chats);
  const markRemoved = useFocusAfterRemoval(
    tbodyRef,
    headingRef,
    '[id^="embed-chat-delete-"]'
  );

  async function handleDeleteChat(chatId) {
    const { success } = await Embed.deleteChat(chatId);
    if (!success) {
      showToast(t("embed-pages.toast.chat-delete-failed"), "error", {
        clear: true,
      });
      return false;
    }
    markRemoved(chats.findIndex((chat) => chat.id === chatId));
    removeChat(chatId);
    showToast(t("embed-pages.toast.chat-deleted"), "success", { clear: true });
    return true;
  }

  return (
    <div className="flex flex-col w-full">
      <div className="w-full flex flex-col gap-y-1">
        <div className="flex flex-wrap gap-4 items-center">
          <h2
            id={headingId}
            ref={headingRef}
            tabIndex={-1}
            className="text-base leading-6 font-bold text-theme-text-primary"
          >
            {t("embed-chats.title")}
          </h2>
          <ExportChatsMenu chatType="embed" filePrefix="iasmar-embed-chats" />
        </div>
        <p className="text-xs leading-[18px] text-theme-text-secondary mt-2">
          {t("embed-chats.description")}
        </p>
      </div>
      <div
        role="region"
        aria-labelledby={headingId}
        tabIndex={0}
        className="overflow-x-auto mt-6 rounded-sm"
      >
        <table className="w-full text-xs text-left min-w-[640px] border-spacing-0">
          <thead className="text-theme-text-secondary text-xs leading-[18px] font-bold uppercase border-white/10 light:border-slate-200 border-b">
            <tr>
              <th scope="col" className="px-6 py-3">
                {t("embed-chats.table.embed")}
              </th>
              <th scope="col" className="px-6 py-3">
                {t("embed-chats.table.sender")}
              </th>
              <th scope="col" className="px-6 py-3">
                {t("embed-chats.table.message")}
              </th>
              <th scope="col" className="px-6 py-3">
                {t("embed-chats.table.response")}
              </th>
              <th scope="col" className="px-6 py-3">
                {t("embed-chats.table.at")}
              </th>
              <th
                scope="col"
                className="px-6 py-3 sticky right-0 md:static bg-zinc-900 light:bg-white"
              >
                <span className="sr-only">{t("api.actions")}</span>
              </th>
            </tr>
          </thead>
          <tbody ref={tbodyRef} aria-busy={status === "loading" || undefined}>
            {status === "loading" && (
              <TableState state="loading" colSpan={COLUMNS} />
            )}
            {status === "error" && (
              <TableState state="error" colSpan={COLUMNS} onRetry={retry} />
            )}
            {status === "ready" && chats.length === 0 && (
              <TableState
                state="empty"
                colSpan={COLUMNS}
                message={
                  offset > 0
                    ? t("embed-pages.history.empty-page")
                    : t("embed-pages.history.empty-embed")
                }
              />
            )}
            {status === "ready" &&
              chats.map((chat) => (
                <ChatRow
                  key={chat.id}
                  chat={chat}
                  onDelete={handleDeleteChat}
                />
              ))}
          </tbody>
        </table>
      </div>
      {(offset > 0 || canNext) && (
        <Pagination
          page={offset + 1}
          canNext={canNext}
          busy={status === "loading"}
          onChange={(page) => setOffset(page - 1)}
          label={t("embed-pages.pagination.label", {
            name: t("embed-chats.title"),
          })}
        />
      )}
    </div>
  );
}
