import { useEffect, useId, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { X } from "lucide-react";
import Workspace from "@/models/workspace";
import Embed from "@/models/embed";
import Toggle from "@/components/lib/Toggle";
import SegmentedControl from "@/components/lib/SegmentedControl";
import ServerErrorDetail from "@/components/lib/ServerErrorDetail";
import { blurOnWheel } from "@/components/ProviderFields";
import { serverErrorParts } from "@/utils/serverErrors";
import {
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalPrimaryButton,
  ModalSecondaryButton,
  ModalLabel,
  ModalHint,
  ModalInput,
  ModalSelect,
} from "@/components/lib/Modal";

export function enforceSubmissionSchema(form) {
  const data = {};
  for (var [key, value] of form.entries()) {
    if (!value || value === null) continue;
    data[key] = value;
    if (value === "on") data[key] = true;
  }

  // Always set value on nullable keys since empty or off will not send anything from form element.
  if (!data.hasOwnProperty("allowlist_domains")) data.allowlist_domains = null;
  if (!data.hasOwnProperty("allow_model_override"))
    data.allow_model_override = false;
  if (!data.hasOwnProperty("allow_temperature_override"))
    data.allow_temperature_override = false;
  if (!data.hasOwnProperty("allow_prompt_override"))
    data.allow_prompt_override = false;
  if (!data.hasOwnProperty("message_limit")) data.message_limit = 20;
  return data;
}

/**
 * Focuses the first field marked invalid (e.g. a domain that could not be
 * added) and reports whether there was one, so the form is not sent.
 */
export function focusInvalidField(form) {
  const invalid = form.querySelector('[aria-invalid="true"]');
  invalid?.focus();
  return !!invalid;
}

export const FORM_ERROR = "text-sm text-red-400 light:text-red-700";

export default function NewEmbedModal({ closeModal, onCreated }) {
  const { t } = useTranslation();
  const [error, setError] = useState(null);
  const [saving, setSaving] = useState(false);

  const handleCreate = async (e) => {
    e.preventDefault();
    if (saving || focusInvalidField(e.currentTarget)) return;
    setError(null);
    setSaving(true);
    const data = enforceSubmissionSchema(new FormData(e.currentTarget));
    const { embed, error } = await Embed.newEmbed(data);
    setSaving(false);
    if (!embed) {
      setError(serverErrorParts(error, t, "settings-pages.form-error"));
      return;
    }
    onCreated(embed);
  };

  return (
    <form onSubmit={handleCreate} className="flex flex-col gap-y-5">
      <ModalHeader title={t("embed-pages.new.title")} onClose={closeModal} />
      <ModalBody>
        <WorkspaceSelection />
        <ChatModeSelection />
        <PermittedDomains />
        <NumberInput
          name="max_chats_per_day"
          title={t("embed-pages.form.max-chats-day")}
          hint={t("embed-pages.form.max-chats-day-hint")}
        />
        <NumberInput
          name="max_chats_per_session"
          title={t("embed-pages.form.max-chats-session")}
          hint={t("embed-pages.form.max-chats-session-hint")}
        />
        <NumberInput
          name="message_limit"
          title={t("embed-pages.form.message-limit")}
          hint={t("embed-pages.form.message-limit-hint")}
          defaultValue={20}
        />
        <OverrideToggles />
        <p className="text-xs text-zinc-400 light:text-slate-600">
          {t("embed-pages.new.after")}
        </p>
        {error && (
          <p role="alert" className={FORM_ERROR}>
            {error.message}
            <ServerErrorDetail detail={error.detail} />
          </p>
        )}
      </ModalBody>
      <ModalFooter>
        <ModalSecondaryButton onClick={closeModal} type="button">
          {t("settings-pages.cancel")}
        </ModalSecondaryButton>
        <ModalPrimaryButton type="submit" busy={saving}>
          {saving ? t("embed-pages.form.creating") : t("embeddable.create")}
        </ModalPrimaryButton>
      </ModalFooter>
    </form>
  );
}

/** The three "allow override" switches, shared by the create and edit forms. */
export function OverrideToggles({ embed = null }) {
  const { t } = useTranslation();
  return (
    <>
      <BooleanInput
        name="allow_model_override"
        title={t("embed-pages.form.model-override")}
        hint={t("embed-pages.form.model-override-hint")}
        defaultValue={embed?.allow_model_override}
      />
      <BooleanInput
        name="allow_temperature_override"
        title={t("embed-pages.form.temperature-override")}
        hint={t("embed-pages.form.temperature-override-hint")}
        defaultValue={embed?.allow_temperature_override}
      />
      <BooleanInput
        name="allow_prompt_override"
        title={t("embed-pages.form.prompt-override")}
        hint={t("embed-pages.form.prompt-override-hint")}
        defaultValue={embed?.allow_prompt_override}
      />
    </>
  );
}

export const WorkspaceSelection = ({ defaultValue = null }) => {
  const { t } = useTranslation();
  const [workspaces, setWorkspaces] = useState(null);
  const [value, setValue] = useState(
    defaultValue !== null && defaultValue !== undefined
      ? String(defaultValue)
      : ""
  );

  useEffect(() => {
    let active = true;
    Workspace.all().then((list) => {
      if (!active) return;
      setWorkspaces(list);
      // A controlled select: options arrive after mount, so a defaultValue
      // would not pick the right one.
      setValue((current) => current || (list[0] ? String(list[0].id) : ""));
    });
    return () => {
      active = false;
    };
  }, []);

  return (
    <ModalSelect
      label={t("embed-pages.form.workspace")}
      hint={t("embed-pages.form.workspace-hint")}
      error={
        workspaces?.length === 0 ? t("embed-pages.form.no-workspaces") : null
      }
      name="workspace_id"
      required
      value={value}
      onChange={(e) => setValue(e.target.value)}
    >
      {workspaces === null ? (
        <option value="">{t("common.loading")}</option>
      ) : (
        workspaces.map((workspace) => (
          <option key={workspace.id} value={String(workspace.id)}>
            {workspace.name}
          </option>
        ))
      )}
    </ModalSelect>
  );
};

export const ChatModeSelection = ({ defaultValue = null }) => {
  const { t } = useTranslation();
  const id = useId();
  const [chatMode, setChatMode] = useState(defaultValue ?? "query");

  return (
    <div className="flex flex-col gap-y-1.5">
      <p
        id={`${id}-label`}
        className="text-sm font-medium text-zinc-50 light:text-slate-700"
      >
        {t("embed-pages.form.chat-mode")}
      </p>
      <SegmentedControl
        name="chat_mode"
        value={chatMode}
        onChange={setChatMode}
        labelledBy={`${id}-label`}
        describedBy={`${id}-hint`}
        className="w-fit"
        options={[
          { value: "chat", label: t("chat.mode.chat.title") },
          { value: "query", label: t("chat.mode.query.title") },
        ]}
      />
      <ModalHint id={`${id}-hint`}>
        <span className="block">{t("embed-pages.form.chat-mode-chat")}</span>
        <span className="block">{t("embed-pages.form.chat-mode-query")}</span>
      </ModalHint>
    </div>
  );
};

/** Same check as the server: http(s) URL, "https://" added when missing. */
function normalizeDomain(input) {
  if (/\s/.test(input)) return null;
  const url = /^https?:\/\//i.test(input) ? input : `https://${input}`;
  // "https://https://..." parses as a host named after the inner scheme;
  // the server drops it, so it is rejected here too.
  if (/^https?:\/\/[a-z][a-z\d+.-]*:\/\//i.test(url)) return null;
  try {
    return new URL(url).hostname ? url : null;
  } catch {
    return null;
  }
}

export const PermittedDomains = ({ defaultValue = [] }) => {
  const { t } = useTranslation();
  const id = useId();
  const inputId = `${id}-input`;
  const hintId = `${id}-hint`;
  const errorId = `${id}-error`;
  const inputRef = useRef(null);
  const [domains, setDomains] = useState(defaultValue);
  const [draft, setDraft] = useState("");
  const [error, setError] = useState(null);
  const [announcement, setAnnouncement] = useState("");

  // Adds every comma-separated entry of `raw`; invalid ones stay in the
  // field with an error instead of being dropped silently.
  function commit(raw) {
    const entries = raw
      .split(",")
      .map((entry) => entry.trim())
      .filter(Boolean);
    if (entries.length === 0) {
      setDraft("");
      setError(null);
      return;
    }
    const next = [...domains];
    const added = [];
    const invalid = [];
    for (const entry of entries) {
      const url = normalizeDomain(entry);
      if (!url) invalid.push(entry);
      else if (!next.includes(url)) {
        next.push(url);
        added.push(url);
      }
    }
    setDomains(next);
    if (added.length > 0)
      setAnnouncement(
        t("embed-pages.domains.added", { domains: added.join(", ") })
      );
    if (invalid.length > 0) {
      setDraft(invalid.join(", "));
      setError(t("embed-pages.domains.invalid", { value: invalid.join(", ") }));
      return;
    }
    setDraft("");
    setError(null);
  }

  function remove(domain) {
    setDomains((prev) => prev.filter((item) => item !== domain));
    setAnnouncement(t("embed-pages.domains.removed", { domain }));
    // The remove button disappears with its domain.
    inputRef.current?.focus();
  }

  return (
    <div className="flex flex-col gap-y-1.5">
      <ModalLabel htmlFor={inputId}>
        {t("embed-pages.domains.label")}
      </ModalLabel>
      {domains.length > 0 && (
        <ul
          aria-label={t("embed-pages.domains.list")}
          className="flex flex-wrap gap-2"
        >
          {domains.map((domain) => (
            <li
              key={domain}
              className="inline-flex items-center gap-x-1 max-w-full rounded-md pl-2 bg-zinc-700 light:bg-slate-200 text-zinc-100 light:text-slate-800 text-sm"
            >
              <span className="font-mono break-all">{domain}</span>
              <button
                type="button"
                onClick={() => remove(domain)}
                aria-label={t("embed-pages.domains.remove", { domain })}
                title={t("embed-pages.domains.remove", { domain })}
                className="flex items-center justify-center shrink-0 w-11 h-11 md:w-7 md:h-7 rounded-md hover:bg-zinc-600 light:hover:bg-slate-300 transition-colors duration-quick ease-smooth"
              >
                <X strokeWidth={1.5} size={14} aria-hidden="true" />
              </button>
            </li>
          ))}
        </ul>
      )}
      <input
        ref={inputRef}
        id={inputId}
        type="text"
        inputMode="url"
        autoComplete="off"
        spellCheck={false}
        value={draft}
        placeholder="https://misitio.com"
        onChange={(e) => {
          setDraft(e.target.value);
          if (error) setError(null);
        }}
        onKeyDown={(e) => {
          if (e.key !== "Enter" && e.key !== ",") return;
          // Enter adds the domain instead of sending the form.
          e.preventDefault();
          commit(draft);
        }}
        onBlur={() => commit(draft)}
        aria-describedby={error ? `${hintId} ${errorId}` : hintId}
        aria-invalid={error ? true : undefined}
        className="w-full h-11 md:h-[34px] px-3.5 rounded-lg text-base md:text-sm bg-zinc-800 border border-zinc-500 text-zinc-100 placeholder:text-zinc-400 light:bg-white light:border-slate-500 light:text-slate-900 light:placeholder:text-slate-500 focus:border-sky-500"
      />
      <ModalHint id={hintId}>{t("embed-pages.domains.hint")}</ModalHint>
      {error && (
        <p
          id={errorId}
          role="alert"
          className="text-xs text-red-400 light:text-red-700"
        >
          {error}
        </p>
      )}
      <span role="status" className="sr-only">
        {announcement}
      </span>
      <input type="hidden" name="allowlist_domains" value={domains.join(",")} />
    </div>
  );
};

export const NumberInput = ({ name, title, hint, defaultValue = 0 }) => {
  return (
    <ModalInput
      type="number"
      name={name}
      label={title}
      hint={hint}
      min={0}
      step={1}
      inputMode="numeric"
      defaultValue={defaultValue ?? 0}
      onWheel={blurOnWheel}
      className="md:w-60"
    />
  );
};

export const BooleanInput = ({ name, title, hint, defaultValue = null }) => {
  const [status, setStatus] = useState(defaultValue ?? false);

  return (
    <Toggle
      name={name}
      size="md"
      variant="horizontal"
      label={title}
      description={hint}
      value="on"
      enabled={status}
      onChange={(checked) => setStatus(checked)}
    />
  );
};
