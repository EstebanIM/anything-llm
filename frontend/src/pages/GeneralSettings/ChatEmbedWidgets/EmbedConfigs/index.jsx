import { useEffect, useId, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { SquareCode } from "lucide-react";
import EmbedRow from "./EmbedRow";
import NewEmbedModal from "./NewEmbedModal";
import CodeSnippetModal from "./EmbedRow/CodeSnippetModal";
import Modal from "@/components/lib/Modal";
import Embed from "@/models/embed";
import CTAButton from "@/components/lib/CTAButton";
import TableState from "@/components/lib/TableState";
import showToast from "@/utils/toast";
import useFocusAfterRemoval from "../components/useFocusAfterRemoval";

const COLUMNS = 6;

export default function EmbedConfigsView() {
  const { t } = useTranslation();
  const headingId = useId();
  const headingRef = useRef(null);
  const tbodyRef = useRef(null);
  const [status, setStatus] = useState("loading");
  const [embeds, setEmbeds] = useState([]);
  const [createOpen, setCreateOpen] = useState(false);
  const [snippetEmbed, setSnippetEmbed] = useState(null);
  const markRemoved = useFocusAfterRemoval(tbodyRef, headingRef);

  async function fetchEmbeds({ silent = false } = {}) {
    if (!silent) setStatus("loading");
    const list = await Embed.embeds();
    if (!Array.isArray(list)) {
      if (!silent) setStatus("error");
      return;
    }
    setEmbeds(list);
    setStatus("ready");
  }

  useEffect(() => {
    fetchEmbeds();
  }, []);

  async function handleCreated(embed) {
    setCreateOpen(false);
    // Show the code of the new widget right away: it is what the admin needs next.
    setSnippetEmbed(embed);
    showToast(t("embed-pages.toast.created"), "success", { clear: true });
    await fetchEmbeds({ silent: true });
  }

  function handleToggled(id, enabled) {
    setEmbeds((prev) =>
      prev.map((embed) => (embed.id === id ? { ...embed, enabled } : embed))
    );
  }

  function handleDeleted(id) {
    markRemoved(embeds.findIndex((embed) => embed.id === id));
    setEmbeds((prev) => prev.filter((embed) => embed.id !== id));
  }

  const createButton = (
    <CTAButton
      type="button"
      onClick={() => setCreateOpen(true)}
      className="mr-0"
    >
      <SquareCode strokeWidth={1.5} className="h-4 w-4" aria-hidden="true" />
      {t("embeddable.create")}
    </CTAButton>
  );

  return (
    <div className="flex flex-col w-full">
      <div className="w-full flex flex-col gap-y-1 pb-6">
        <h2
          id={headingId}
          ref={headingRef}
          tabIndex={-1}
          className="text-base leading-6 font-bold text-theme-text-primary"
        >
          {t("embeddable.title")}
        </h2>
        <div className="flex flex-col items-start gap-3 w-full">
          <p className="text-xs leading-[18px] text-theme-text-secondary mt-1 max-w-2xl">
            {t("embeddable.description")}
          </p>
          {createButton}
        </div>
      </div>
      <div
        role="region"
        aria-labelledby={headingId}
        tabIndex={0}
        className="overflow-x-auto rounded-sm"
      >
        <table className="w-full text-xs text-left min-w-[640px] border-spacing-0">
          <thead className="text-theme-text-secondary text-xs leading-[18px] uppercase border-theme-modal-border border-b">
            <tr>
              <th scope="col" className="px-6 py-3">
                {t("embeddable.table.workspace")}
              </th>
              <th scope="col" className="px-6 py-3">
                {t("embed-pages.table.status")}
              </th>
              <th scope="col" className="px-6 py-3">
                {t("embeddable.table.chats")}
              </th>
              <th scope="col" className="px-6 py-3">
                {t("embeddable.table.active")}
              </th>
              <th scope="col" className="px-6 py-3">
                {t("embeddable.table.created")}
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
              <TableState
                state="error"
                colSpan={COLUMNS}
                onRetry={() => fetchEmbeds()}
              />
            )}
            {status === "ready" && embeds.length === 0 && (
              <TableState
                state="empty"
                colSpan={COLUMNS}
                message={t("embed-pages.widgets.empty")}
                action={createButton}
              />
            )}
            {status === "ready" &&
              embeds.map((embed) => (
                <EmbedRow
                  key={embed.id}
                  embed={embed}
                  onToggled={handleToggled}
                  onDeleted={handleDeleted}
                  onUpdated={() => fetchEmbeds({ silent: true })}
                />
              ))}
          </tbody>
        </table>
      </div>
      <Modal isOpen={createOpen} onClose={() => setCreateOpen(false)}>
        <NewEmbedModal
          closeModal={() => setCreateOpen(false)}
          onCreated={handleCreated}
        />
      </Modal>
      <Modal
        isOpen={!!snippetEmbed}
        onClose={() => setSnippetEmbed(null)}
        size="lg"
      >
        {snippetEmbed && (
          <CodeSnippetModal
            embed={snippetEmbed}
            isNew
            closeModal={() => setSnippetEmbed(null)}
          />
        )}
      </Modal>
    </div>
  );
}
