import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import paths from "@/utils/paths";
import { formatDateTime } from "@/utils/dates";
import { safeJsonParse } from "@/utils/request";
import MarkdownRenderer from "../../components/MarkdownRenderer";
import ChatTextModal from "../../components/ChatTextModal";
import ChatCellButton from "../../components/ChatCellButton";
import { Trash2 } from "lucide-react";
import {
  InlineConfirmButton,
  ROW_ICON_BUTTON,
} from "@/components/lib/InlineConfirm";

export default function ChatRow({ chat, onDelete }) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(null); // "session" | "prompt" | "response"
  const close = () => setOpen(null);
  const response = safeJsonParse(chat.response, {})?.text ?? "";
  const ids = { id: chat.id };

  return (
    <>
      <tr className="text-theme-text-primary text-xs font-medium border-b border-white/10 light:border-slate-200">
        <th scope="row" className="px-6 py-3 font-medium whitespace-nowrap">
          {/* Same page, Widgets tab: no new tab needed. */}
          <Link
            to={paths.settings.embedChatWidgets()}
            className="text-theme-text-primary underline-offset-2 hover:underline"
          >
            {chat.embed_config?.workspace?.name}
            <span className="sr-only">
              {" "}
              {t("embed-pages.chat.go-to-widgets")}
            </span>
          </Link>
        </th>
        <td className="px-6 py-3">
          <ChatCellButton
            text={chat.session_id}
            length={20}
            label={t("embed-pages.chat.view-session", ids)}
            onClick={() => setOpen("session")}
          />
        </td>
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
          <InlineConfirmButton
            id={`embed-chat-delete-${chat.id}`}
            label={t("embed-pages.chat.delete", ids)}
            icon={Trash2}
            triggerClassName={ROW_ICON_BUTTON}
            question={t("notices.delete-chat-question", ids)}
            consequences={t("notices.cannot-undo")}
            confirmLabel={t("settings-pages.delete")}
            align="end"
            onConfirm={() => onDelete(chat.id)}
          />
        </td>
      </tr>
      <ChatTextModal
        isOpen={open === "session"}
        onClose={close}
        title={t("embed-pages.chat.session-title", ids)}
      >
        <ConnectionDetails
          sessionId={chat.session_id}
          connectionInformation={chat.connection_information}
        />
      </ChatTextModal>
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

/** Session id and whatever the widget recorded about the visitor. */
function ConnectionDetails({ sessionId, connectionInformation }) {
  const { t } = useTranslation();
  const details = safeJsonParse(connectionInformation, {}) || {};
  const rows = [
    [t("embed-pages.session.id"), sessionId],
    [t("embed-pages.session.username"), details.username],
    [t("embed-pages.session.ip"), details.ip],
    [t("embed-pages.session.host"), details.host],
  ].filter(([, value]) => !!value);

  return (
    <div className="whitespace-normal flex flex-col gap-y-3">
      <dl className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-x-4 gap-y-1">
        {rows.map(([label, value]) => (
          <div key={label} className="contents">
            <dt className="text-zinc-400 light:text-slate-600">{label}</dt>
            <dd className="font-mono break-all mb-2 sm:mb-0">{value}</dd>
          </div>
        ))}
      </dl>
      {rows.length <= 1 && (
        <p className="text-zinc-400 light:text-slate-600">
          {t("embed-pages.session.no-details")}
        </p>
      )}
    </div>
  );
}
