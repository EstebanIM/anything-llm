import { useState } from "react";
import { useTranslation } from "react-i18next";
import { formatDateTime } from "@/utils/dates";
import { safeJsonParse } from "@/utils/request";
import useMultiUserMode from "@/hooks/useMultiUserMode";
import MarkdownRenderer from "../../ChatEmbedWidgets/components/MarkdownRenderer";
import ChatTextModal from "../../ChatEmbedWidgets/components/ChatTextModal";
import ChatCellButton from "../../ChatEmbedWidgets/components/ChatCellButton";
import RowDeleteButton from "../../ChatEmbedWidgets/components/RowDeleteButton";

export default function ChatRow({ chat, onDelete }) {
  const { t } = useTranslation();
  const multiUserMode = useMultiUserMode();
  const [open, setOpen] = useState(null); // "prompt" | "response"
  const close = () => setOpen(null);
  const response = safeJsonParse(chat.response, {})?.text ?? "";
  const ids = { id: chat.id };

  return (
    <>
      <tr className="text-theme-text-primary text-xs font-medium border-b border-white/10 light:border-slate-200">
        <th scope="row" className="px-6 py-3 font-medium whitespace-nowrap">
          {chat.id}
        </th>
        {multiUserMode && (
          <td className="px-6 py-3 font-medium whitespace-nowrap">
            {chat.user?.username}
          </td>
        )}
        <td className="px-6 py-3">{chat.workspace?.name}</td>
        <td className="px-6 py-3">
          <ChatCellButton
            text={chat.prompt}
            label={t("embed-pages.chat.view-prompt", ids)}
            onClick={() => setOpen("prompt")}
          />
        </td>
        <td className="px-6 py-3">
          <ChatCellButton
            text={response}
            label={t("embed-pages.chat.view-response", ids)}
            onClick={() => setOpen("response")}
          />
        </td>
        <td className="px-6 py-3 whitespace-nowrap text-theme-text-secondary font-normal">
          <time dateTime={chat.createdAt}>
            {formatDateTime(chat.createdAt)}
          </time>
        </td>
        <td className="px-2 md:px-6 py-2 sticky right-0 md:static bg-zinc-900 light:bg-white">
          <RowDeleteButton
            label={t("embed-pages.chat.delete", ids)}
            consequence={t("embed-pages.chat.delete-consequence", ids)}
            onConfirm={() => onDelete(chat.id)}
          />
        </td>
      </tr>
      <ChatTextModal
        isOpen={open === "prompt"}
        onClose={close}
        title={t("embed-pages.chat.prompt-title", ids)}
      >
        {chat.prompt}
      </ChatTextModal>
      <ChatTextModal
        isOpen={open === "response"}
        onClose={close}
        title={t("embed-pages.chat.response-title", ids)}
      >
        <MarkdownRenderer content={response} />
      </ChatTextModal>
    </>
  );
}
