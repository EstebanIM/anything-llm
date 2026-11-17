import { Info, Pencil } from "lucide-react";
import { useRef, useEffect } from "react";
import Appearance from "@/models/appearance";
import { useTranslation } from "react-i18next";
import {
  useMessageActionsContext,
  EDIT_EVENT,
} from "@/components/WorkspaceChat/ChatContainer/ChatHistory/MessageActionsContext";
import { ACTION_BUTTON_CLASS } from "../constants";

// The edit button unmounts while its message is being edited. When the edit
// ends (cancel or save) the button that remounts for that message takes the
// focus back, so keyboard users do not land on <body>. The request expires
// quickly so a resent prompt cannot steal focus later.
const REFOCUS_WINDOW_MS = 1000;
let refocusEditButton = null;
const editKey = (chatId, role) => `${role}-${chatId}`;

export function useEditMessage({ chatId, role }) {
  const context = useMessageActionsContext();
  const isEditing = context?.isEditing(chatId, role) ?? false;
  return { isEditing };
}

export function EditMessageAction({ chatId = null, role, isEditing }) {
  const { t } = useTranslation();
  const buttonRef = useRef(null);
  const label =
    role === "user"
      ? t("chat_window.edit_prompt")
      : t("chat_window.edit_response");

  useEffect(() => {
    if (!chatId || isEditing || !refocusEditButton) return;
    const { key, at } = refocusEditButton;
    if (key !== editKey(chatId, role)) return;
    refocusEditButton = null;
    if (Date.now() - at < REFOCUS_WINDOW_MS) buttonRef.current?.focus();
  }, [chatId, role, isEditing]);

  function handleEditClick() {
    window.dispatchEvent(
      new CustomEvent(EDIT_EVENT, { detail: { chatId, role } })
    );
  }

  if (!chatId || isEditing) return null;
  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={handleEditClick}
      data-tooltip-id="edit-input-text"
      data-tooltip-content={label}
      className={ACTION_BUTTON_CLASS}
      aria-label={label}
    >
      <Pencil strokeWidth={1.5} size={20} aria-hidden="true" />
    </button>
  );
}

export function EditMessageForm({
  role,
  chatId,
  message,
  attachments = [],
  adjustTextArea,
  saveChanges,
}) {
  const { t } = useTranslation();
  const formRef = useRef(null);

  function endEditing() {
    refocusEditButton = { key: editKey(chatId, role), at: Date.now() };
    window.dispatchEvent(
      new CustomEvent(EDIT_EVENT, { detail: { chatId, role, attachments } })
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    const editedMessage = formRef.current.value;
    saveChanges({ editedMessage, chatId, role, attachments });
    endEditing();
  }

  function handleSave() {
    const editedMessage = formRef.current.value;
    saveChanges({
      editedMessage,
      chatId,
      role,
      attachments,
      saveOnly: true,
    });
    endEditing();
  }

  function cancelEdits() {
    endEditing();
    return false;
  }

  function handleKeyDown(e) {
    if (e.key !== "Escape") return;
    // Handled here so an outer layer (drawer, modal) does not close as well.
    e.preventDefault();
    cancelEdits();
  }

  useEffect(() => {
    if (!formRef?.current) return;
    formRef.current.focus();
    adjustTextArea({ target: formRef.current });
  }, []);

  const textareaClass =
    "text-white light:text-slate-900 w-full rounded-2xl bg-zinc-800 light:bg-slate-100 border border-sky-300 light:border-sky-700 focus:ring-0 px-4 py-3 resize-none overflow-hidden";
  const label =
    role === "user"
      ? t("chat_window.edit_prompt")
      : t("chat_window.edit_response");

  return (
    <form
      onSubmit={handleSubmit}
      onKeyDown={handleKeyDown}
      className="flex flex-col w-full max-w-[650px]"
    >
      <textarea
        ref={formRef}
        name="editedMessage"
        aria-label={label}
        spellCheck={Appearance.get("enableSpellCheck")}
        className={textareaClass}
        defaultValue={message}
        onChange={adjustTextArea}
      />
      {role === "user" ? (
        <EditActionBar
          onCancel={cancelEdits}
          onSave={handleSave}
          isUserMessage
        />
      ) : (
        <EditActionBar onCancel={cancelEdits} />
      )}
    </form>
  );
}

function EditActionBar({ onCancel, onSave, isUserMessage = false }) {
  const { t } = useTranslation();
  return (
    <div className="mt-2 flex flex-col md:flex-row md:items-center justify-between gap-2 bg-zinc-800 light:bg-slate-200 rounded-lg p-2">
      <div className="flex items-start gap-2">
        <Info
          strokeWidth={1.5}
          size={12}
          aria-hidden="true"
          className="shrink-0 mt-0.5 text-zinc-200 light:text-slate-800"
        />
        <span className="text-zinc-200 light:text-slate-800 text-xs leading-4">
          {isUserMessage
            ? t("chat_window.edit_info_user")
            : t("chat_window.edit_info_assistant")}
        </span>
      </div>
      <div className="flex items-center gap-2 self-end shrink-0">
        <button
          type="button"
          onClick={onCancel}
          className="border-none text-white light:text-slate-900 text-sm font-medium px-3 min-w-[70px] h-11 md:h-9 rounded-lg hover:bg-white/5 light:hover:bg-slate-300"
        >
          {t("settings-pages.cancel")}
        </button>
        {isUserMessage && (
          <button
            type="button"
            onClick={onSave}
            className="border border-zinc-600 light:border-slate-600 text-white light:text-slate-900 text-sm font-medium px-3 min-w-[70px] h-11 md:h-9 rounded-lg hover:bg-white/5 light:hover:bg-slate-300"
          >
            {t("chat_window.save")}
          </button>
        )}
        <button
          type="submit"
          className="border-none bg-zinc-50 light:bg-slate-800 text-zinc-800 light:text-white text-sm font-medium px-3 min-w-[70px] h-11 md:h-9 rounded-lg hover:bg-zinc-200 light:hover:bg-slate-700"
        >
          {isUserMessage ? t("chat_window.submit") : t("chat_window.save")}
        </button>
      </div>
    </div>
  );
}
