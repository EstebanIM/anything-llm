import { useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Modal, { ModalHeader, ModalBody } from "@/components/lib/Modal";
import { MENU_ITEM_CLASSES } from "../Submenu";

const SEEN_COPY_LINK_CHAT_ALERT = "anythingllm_seen_copy_link_chat_alert";

export function getChatUrl(slug, threadSlug) {
  let path = `/workspace/${slug}`;
  if (threadSlug) path += `/t/${threadSlug}`;
  return `${window.location.origin}${path}`;
}

/**
 * @param {Object} props
 * @param {(message: string) => void} props.onCopied - announces the copy to screen readers
 * @param {(opts: {failed: boolean}) => void} props.onShowLink - opens the link modal (owned by
 *   the parent so it survives the menu closing)
 */
export default function CopyLinkToChatRow({ onCopied, onShowLink }) {
  const { t } = useTranslation();
  const { slug, threadSlug } = useParams();
  const [copied, setCopied] = useState(false);

  if (!slug) return null;

  async function handleClick() {
    try {
      // navigator.clipboard is missing on plain HTTP; the modal then shows the
      // link so it can be copied by hand.
      await navigator.clipboard.writeText(getChatUrl(slug, threadSlug));
    } catch {
      onShowLink({ failed: true });
      return;
    }

    setCopied(true);
    onCopied(t("chat-input.link-copied"));
    setTimeout(() => setCopied(false), 2000);

    if (!window.localStorage.getItem(SEEN_COPY_LINK_CHAT_ALERT)) {
      window.localStorage.setItem(SEEN_COPY_LINK_CHAT_ALERT, "1");
      onShowLink({ failed: false });
    }
  }

  return (
    <button
      type="button"
      role="menuitem"
      onClick={handleClick}
      className={MENU_ITEM_CLASSES}
    >
      {copied ? t("chat-input.link-copied") : t("chat-input.copy-link")}
    </button>
  );
}

export function CopyLinkModal({ isOpen, closeModal, url, failed = false }) {
  const { t } = useTranslation();
  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <ModalHeader
        title={
          failed
            ? t("chat-input.copy-link-failed-title")
            : t("chat-input.copy-link-title")
        }
        onClose={closeModal}
      />
      <ModalBody>
        <p className="text-sm text-zinc-400 light:text-slate-600">
          {failed
            ? t("chat-input.copy-link-failed-body")
            : t("chat-input.copy-link-body")}
        </p>
        <p className="text-sm text-zinc-400 light:text-slate-600">
          {t("chat-input.copy-link-permissions")}
        </p>
        <input
          type="text"
          readOnly
          value={url}
          aria-label={t("chat-input.copy-link-field")}
          onFocus={(e) => e.target.select()}
          className="w-full px-3 py-2 rounded-md bg-zinc-800 light:bg-slate-100 border border-white/10 light:border-slate-300 text-base md:text-sm text-white light:text-slate-900"
        />
      </ModalBody>
    </Modal>
  );
}
