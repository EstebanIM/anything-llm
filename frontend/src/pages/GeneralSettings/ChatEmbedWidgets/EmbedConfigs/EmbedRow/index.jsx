import { useState } from "react";
import { useTranslation } from "react-i18next";
import showToast from "@/utils/toast";
import { serverErrorMessage } from "@/utils/serverErrors";
import Modal from "@/components/lib/Modal";
import ConfirmModal from "@/components/lib/ConfirmModal";
import { ExternalLink } from "@/components/ProviderFields";
import Embed from "@/models/embed";
import paths from "@/utils/paths";
import { nFormatter } from "@/utils/numbers";
import { formatDate, formatDateTime, formatRelative } from "@/utils/dates";
import { safeJsonParse } from "@/utils/request";
import EditEmbedModal from "./EditEmbedModal";
import CodeSnippetModal from "./CodeSnippetModal";

const DAY_MS = 24 * 60 * 60 * 1000;

const ACTION_BUTTON =
  "group min-h-[44px] md:min-h-0 px-2 py-1 rounded-lg text-xs font-medium text-left text-theme-text-secondary whitespace-nowrap transition-colors duration-quick ease-smooth";

/** Widgets created in the last day show "hace 3 horas", older ones the date. */
function createdLabel(date) {
  return Date.now() - date.getTime() < DAY_MS
    ? formatRelative(date)
    : formatDate(date);
}

function CreatedAt({ value }) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  return (
    <time dateTime={date.toISOString()} title={formatDateTime(date)}>
      {createdLabel(date)}
    </time>
  );
}

export default function EmbedRow({ embed, onToggled, onDeleted, onUpdated }) {
  const { t } = useTranslation();
  const enabled = Number(embed.enabled) === 1;
  const names = { id: embed.id, workspace: embed.workspace?.name };
  const chatCount = Number(embed._count?.embed_chats ?? 0);
  const [dialog, setDialog] = useState(null); // "code" | "edit" | "disable" | "delete"
  const [busy, setBusy] = useState(false);
  const closeDialog = () => setDialog(null);

  async function setEnabled(next) {
    setBusy(true);
    const { success, error } = await Embed.updateEmbed(embed.id, {
      enabled: next,
    });
    setBusy(false);
    if (!success) {
      showToast(
        serverErrorMessage(error, t, "embed-pages.toast.toggle-failed"),
        "error",
        { clear: true }
      );
      return;
    }
    closeDialog();
    onToggled(embed.id, next);
    showToast(
      t(next ? "embed-pages.toast.enabled" : "embed-pages.toast.disabled"),
      "success",
      { clear: true }
    );
  }

  async function handleDelete() {
    setBusy(true);
    const { success, error } = await Embed.deleteEmbed(embed.id);
    // Embed.deleteEmbed reports success: true with an error on network
    // failures, so the error is checked as well.
    if (!success || error) {
      setBusy(false);
      showToast(
        serverErrorMessage(error, t, "embed-pages.toast.delete-failed"),
        "error",
        { clear: true }
      );
      return;
    }
    showToast(t("embed-pages.toast.deleted"), "success", { clear: true });
    onDeleted(embed.id);
  }

  return (
    <>
      <tr className="text-theme-text-primary text-xs font-medium border-b border-theme-modal-border">
        <th scope="row" className="px-6 py-3 font-medium whitespace-nowrap">
          <ExternalLink
            href={paths.workspace.chat(embed.workspace?.slug)}
            className="text-theme-text-primary underline-offset-2 hover:underline"
          >
            {embed.workspace?.name}
          </ExternalLink>
        </th>
        <td className="px-6 py-3 whitespace-nowrap">
          <span className="inline-flex items-center gap-x-1.5">
            <span
              aria-hidden="true"
              className={`h-2 w-2 rounded-full ${enabled ? "bg-green-500" : "bg-zinc-500 light:bg-slate-400"}`}
            />
            {enabled
              ? t("embed-pages.status.enabled")
              : t("embed-pages.status.disabled")}
          </span>
        </td>
        <td className="px-6 py-3 whitespace-nowrap">{nFormatter(chatCount)}</td>
        <td className="px-6 py-3 whitespace-nowrap">
          <ActiveDomains domainList={embed.allowlist_domains} />
        </td>
        <td className="px-6 py-3 whitespace-nowrap text-theme-text-secondary font-normal">
          <CreatedAt value={embed.createdAt} />
        </td>
        <td className="px-2 md:px-6 py-2 sticky right-0 md:static bg-zinc-900 light:bg-white">
          <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-x-2">
            <button
              type="button"
              onClick={() => setDialog("code")}
              aria-label={t("embed-pages.row.code", names)}
              className={`${ACTION_BUTTON} hover:bg-theme-button-code-hover-bg hover:text-theme-button-code-hover-text`}
            >
              {t("embed-pages.row.code-short")}
            </button>
            <button
              type="button"
              onClick={() => setDialog("edit")}
              aria-label={t("embed-pages.row.edit", names)}
              className={`${ACTION_BUTTON} hover:bg-theme-hover hover:text-theme-text-primary`}
            >
              {t("embed-pages.row.edit-short")}
            </button>
            <button
              type="button"
              onClick={() => {
                if (busy) return;
                // Enabling is harmless and reversible: no confirmation.
                if (enabled) setDialog("disable");
                else setEnabled(true);
              }}
              aria-disabled={busy || undefined}
              aria-busy={(busy && dialog === null) || undefined}
              aria-label={t(
                enabled ? "embed-pages.row.disable" : "embed-pages.row.enable",
                names
              )}
              className={`${ACTION_BUTTON} hover:bg-theme-button-disable-hover-bg hover:text-theme-button-disable-hover-text aria-disabled:cursor-wait aria-disabled:opacity-60`}
            >
              {enabled
                ? t("embed-pages.row.disable-short")
                : t("embed-pages.row.enable-short")}
            </button>
            <button
              type="button"
              data-row-focus=""
              onClick={() => setDialog("delete")}
              aria-label={t("embed-pages.row.delete", names)}
              className={`${ACTION_BUTTON} hover:bg-theme-button-delete-hover-bg hover:text-theme-button-delete-hover-text`}
            >
              {t("settings-pages.delete")}
            </button>
          </div>
        </td>
      </tr>
      <Modal isOpen={dialog === "edit"} onClose={closeDialog}>
        <EditEmbedModal
          embed={embed}
          closeModal={closeDialog}
          onSaved={() => {
            closeDialog();
            showToast(t("embed-pages.toast.updated"), "success", {
              clear: true,
            });
            onUpdated();
          }}
        />
      </Modal>
      <Modal isOpen={dialog === "code"} onClose={closeDialog} size="lg">
        <CodeSnippetModal embed={embed} closeModal={closeDialog} />
      </Modal>
      <ConfirmModal
        isOpen={dialog === "disable"}
        title={t("embed-pages.disable.title", names)}
        confirmLabel={t("embed-pages.row.disable-short")}
        danger={false}
        busy={busy}
        onConfirm={() => setEnabled(false)}
        onCancel={closeDialog}
      >
        <p>{t("embed-pages.disable.body")}</p>
      </ConfirmModal>
      <ConfirmModal
        isOpen={dialog === "delete"}
        title={t("embed-pages.delete.title", names)}
        confirmLabel={t("settings-pages.delete")}
        busy={busy}
        onConfirm={handleDelete}
        onCancel={closeDialog}
      >
        <p>
          {chatCount > 0
            ? t("embed-pages.delete.body", { count: chatCount })
            : t("embed-pages.delete.body-no-chats")}
        </p>
        <p>{t("embed-pages.irreversible")}</p>
      </ConfirmModal>
    </>
  );
}

function ActiveDomains({ domainList }) {
  const { t } = useTranslation();
  const domains = safeJsonParse(domainList, []);
  if (!Array.isArray(domains) || domains.length === 0)
    return <p>{t("embed-pages.domains.all")}</p>;
  return (
    <ul className="flex flex-col gap-y-2">
      {domains.map((domain, index) => (
        <li key={index} className="font-mono font-normal">
          {domain}
        </li>
      ))}
    </ul>
  );
}
