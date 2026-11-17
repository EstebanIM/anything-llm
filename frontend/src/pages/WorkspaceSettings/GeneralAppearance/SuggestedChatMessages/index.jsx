import PreLoader from "@/components/Preloader";
import CTAButton from "@/components/lib/CTAButton";
import Workspace from "@/models/workspace";
import showToast from "@/utils/toast";
import { serverErrorMessage } from "@/utils/serverErrors";
import { useEffect, useId, useRef, useState } from "react";
import { Plus, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import truncate from "truncate";
import { FIELD_INPUT } from "@/components/ProviderFields";
import { HELP_TEXT, SECTION_HEADING } from "../../components/SettingsField";

const MAX_MESSAGES = 4;

// Client-only keys: suggestions have no stable id until they are saved.
let nextKey = 0;
const withKey = (message) => ({ ...message, key: `suggestion-${nextKey++}` });
const withoutKey = ({ key: _key, ...message }) => message;

function suggestionText(suggestion) {
  return `${suggestion?.heading ? `${suggestion.heading} ` : ""}${
    suggestion?.message ?? ""
  }`;
}

export default function SuggestedChatMessages({ slug }) {
  const { t } = useTranslation();
  const headingId = useId();
  const helpId = useId();
  const editFieldId = useId();
  const [suggestedMessages, setSuggestedMessages] = useState([]);
  const [editingKey, setEditingKey] = useState(null);
  const [hasChanges, setHasChanges] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const headingRef = useRef(null);
  const listRef = useRef(null);
  const addButtonRef = useRef(null);
  const inputRef = useRef(null);
  const focusEditor = useRef(false);

  useEffect(() => {
    async function fetchWorkspace() {
      if (!slug) return;
      const suggestedMessages = await Workspace.getSuggestedMessages(slug);
      setSuggestedMessages((suggestedMessages ?? []).map(withKey));
      setLoading(false);
    }
    fetchWorkspace();
  }, [slug]);

  // Opening a message for editing moves the keyboard to its field.
  useEffect(() => {
    if (editingKey === null || !focusEditor.current) return;
    focusEditor.current = false;
    inputRef.current?.focus();
  }, [editingKey]);

  const handleSaveSuggestedMessages = async () => {
    if (saving) return;
    const validMessages = suggestedMessages.filter(
      (msg) => msg?.message?.trim()?.length > 0
    );
    setSaving(true);
    const { success, error } = await Workspace.setSuggestedMessages(
      slug,
      validMessages.map(withoutKey)
    );
    setSaving(false);
    if (!success) {
      showToast(
        serverErrorMessage(
          error,
          t,
          "workspace-settings.suggested.save-failed"
        ),
        "error"
      );
      return;
    }
    setSuggestedMessages(validMessages);
    setEditingKey(null);
    setHasChanges(false);
    showToast(t("workspace-settings.suggested.saved"), "success");
    // The save button goes away: keep the keyboard in this section.
    headingRef.current?.focus();
  };

  const addMessage = () => {
    if (suggestedMessages.length >= MAX_MESSAGES) {
      showToast(
        t("workspace-settings.suggested.max", { count: MAX_MESSAGES }),
        "warning"
      );
      return;
    }
    const message = withKey({
      heading: "",
      message: `${t("general.message.heading")} ${t("general.message.body")}`,
    });
    setSuggestedMessages([...suggestedMessages, message]);
    setHasChanges(true);
    focusEditor.current = true;
    setEditingKey(message.key);
  };

  const removeMessage = (key, index) => {
    const remaining = suggestedMessages.filter((msg) => msg.key !== key);
    setSuggestedMessages(remaining);
    setHasChanges(true);
    if (editingKey === key) setEditingKey(null);
    // The removed card took the focused button with it.
    setTimeout(() => {
      const cards =
        listRef.current?.querySelectorAll("[data-suggestion]") ?? [];
      (
        cards[index] ??
        cards[index - 1] ??
        addButtonRef.current ??
        headingRef.current
      )?.focus();
    }, 0);
  };

  const startEditing = (key) => {
    // Legacy messages may have a separate heading field. Merge it into the message
    // on edit so the user can manage everything in a single input going forward.
    setSuggestedMessages((messages) =>
      messages.map((msg) =>
        msg.key === key && msg.heading
          ? { ...msg, heading: "", message: suggestionText(msg) }
          : msg
      )
    );
    focusEditor.current = true;
    setEditingKey(key);
  };

  const onEditChange = (e) => {
    const { value } = e.target;
    setSuggestedMessages((messages) =>
      messages.map((msg) =>
        msg.key === editingKey ? { ...msg, message: value } : msg
      )
    );
    setHasChanges(true);
  };

  const editing = suggestedMessages.find((msg) => msg.key === editingKey);

  return (
    <section
      aria-labelledby={headingId}
      className="w-full flex flex-col gap-y-2"
    >
      <h2
        id={headingId}
        ref={headingRef}
        tabIndex={-1}
        className={`${SECTION_HEADING} w-fit`}
      >
        {t("general.message.title")}
      </h2>
      <p id={helpId} className={HELP_TEXT}>
        {t("general.message.description")}
      </p>

      {loading ? (
        <div className="py-1.5">
          <PreLoader size="4" />
        </div>
      ) : (
        <>
          {suggestedMessages.length > 0 && (
            <ul
              ref={listRef}
              className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[600px]"
            >
              {suggestedMessages.map((suggestion, index) => {
                const text = suggestionText(suggestion);
                const isEditing = suggestion.key === editingKey;
                return (
                  <li key={suggestion.key} className="relative">
                    <button
                      type="button"
                      data-suggestion=""
                      aria-expanded={isEditing}
                      aria-controls={isEditing ? editFieldId : undefined}
                      onClick={() => startEditing(suggestion.key)}
                      className={`w-full min-h-[44px] text-left p-2.5 pr-8 rounded-xl border bg-theme-settings-input-bg hover:bg-theme-sidebar-item-selected-gradient transition-colors duration-quick ease-smooth ${
                        isEditing
                          ? "border-sky-400 light:border-sky-700 ring-1 ring-sky-400 light:ring-sky-700"
                          : "border-zinc-500 light:border-slate-500"
                      }`}
                    >
                      <span className="sr-only">
                        {t("workspace-settings.suggested.edit")}{" "}
                      </span>
                      <span className="line-clamp-2 text-xs text-theme-text-primary">
                        {text.trim() || t("workspace-settings.suggested.empty")}
                      </span>
                    </button>
                    <button
                      type="button"
                      onClick={() => removeMessage(suggestion.key, index)}
                      aria-label={t("workspace-settings.suggested.remove", {
                        message: truncate(text.trim(), 40),
                      })}
                      className="group absolute -top-3 -right-3 z-10 w-11 h-11 md:w-8 md:h-8 flex items-center justify-center rounded-full"
                    >
                      <span
                        aria-hidden="true"
                        className="w-6 h-6 flex items-center justify-center rounded-full bg-white text-neutral-700 border border-zinc-300 shadow-lg group-hover:bg-zinc-600 group-hover:text-[#ffffff] transition-colors duration-quick ease-smooth"
                      >
                        <X strokeWidth={1.5} size={16} />
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          )}

          {editing && (
            <div className="mt-2 flex flex-col gap-y-2 w-full max-w-[600px]">
              <label htmlFor={editFieldId} className="input-label">
                {t("workspace-settings.suggested.message-label")}
              </label>
              <input
                ref={inputRef}
                id={editFieldId}
                name="message"
                value={editing.message}
                onChange={onEditChange}
                placeholder={t("workspace-settings.suggested.placeholder")}
                autoComplete="off"
                className={FIELD_INPUT}
              />
            </div>
          )}

          {suggestedMessages.length < MAX_MESSAGES && (
            <button
              ref={addButtonRef}
              type="button"
              onClick={addMessage}
              className="w-fit min-h-[44px] flex gap-x-2 items-center text-white text-sm hover:text-sky-400 light:hover:text-sky-700 transition-colors duration-quick ease-smooth"
            >
              {t("general.message.add")}
              <Plus strokeWidth={1.5} size={20} aria-hidden="true" />
            </button>
          )}

          {hasChanges && (
            <CTAButton
              type="button"
              busy={saving}
              onClick={handleSaveSuggestedMessages}
              className="mr-0 mt-2"
            >
              {saving ? t("common.saving") : t("general.message.save")}
            </CTAButton>
          )}
        </>
      )}
    </section>
  );
}
