import { useState } from "react";
import Telegram from "@/models/telegram";
import showToast from "@/utils/toast";
import ConfirmModal from "@/components/lib/ConfirmModal";
import { ExternalLink } from "@/components/ProviderFields";
import { useTranslation } from "react-i18next";

export default function DetailsSection({ config, onDisconnected }) {
  const { t } = useTranslation();
  return (
    <section className="flex flex-col gap-y-[18px]">
      <h2 className="text-base font-semibold text-white light:text-slate-900">
        {t("tools-pages.telegram.details")}
      </h2>
      <dl className="flex flex-col gap-y-4 text-sm border border-zinc-700 light:border-slate-200 rounded-xl p-4 w-full max-w-[700px]">
        <DetailRow
          label={t("telegram.connected.workspace")}
          value={config.default_workspace}
        />
        <DetailRow
          label={t("tools-pages.telegram.thread")}
          value={config.active_thread_name}
        />
        <DetailRow
          label={t("tools-pages.telegram.model")}
          value={config.chat_model}
        />
        <DetailRow
          label={t("telegram.connected.bot-link")}
          value={
            <ExternalLink
              href={`https://t.me/${config.bot_username}`}
              className="text-sky-300 light:text-sky-700 underline hover:no-underline break-all"
            >
              t.me/{config.bot_username}
            </ExternalLink>
          }
        />
      </dl>
      <DisconnectButton onDisconnected={onDisconnected} />
    </section>
  );
}

function DetailRow({ label, value }) {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-y-1 sm:flex-row sm:items-start sm:justify-between sm:gap-x-4">
      <dt className="font-medium text-white light:text-slate-900">{label}</dt>
      <dd className="text-zinc-300 light:text-slate-700 sm:text-right break-words min-w-0">
        {value || (
          <span className="text-zinc-400 light:text-slate-600">
            {t("tools-pages.telegram.not-set")}
          </span>
        )}
      </dd>
    </div>
  );
}

function DisconnectButton({ onDisconnected }) {
  const { t } = useTranslation();
  const [confirming, setConfirming] = useState(false);
  const [disconnecting, setDisconnecting] = useState(false);

  async function handleDisconnect() {
    setDisconnecting(true);
    const res = await Telegram.disconnect();
    setDisconnecting(false);

    if (!res.success) {
      setConfirming(false);
      showToast(t("telegram.connected.toast-disconnect-failed"), "error", {
        clear: true,
      });
      return;
    }
    setConfirming(false);
    onDisconnected();
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setConfirming(true)}
        className="flex items-center justify-center gap-x-2 text-sm font-medium border border-red-400/70 light:border-red-700 text-red-300 light:text-red-700 hover:bg-red-500/10 rounded-lg min-h-[44px] md:min-h-0 md:h-9 px-5 w-full sm:w-fit transition-colors duration-quick ease-smooth"
      >
        {t("telegram.connected.disconnect")}
      </button>
      <ConfirmModal
        isOpen={confirming}
        title={t("tools-pages.telegram.disconnect-title")}
        confirmLabel={
          disconnecting
            ? t("telegram.connected.disconnecting")
            : t("telegram.connected.disconnect")
        }
        busy={disconnecting}
        onConfirm={handleDisconnect}
        onCancel={() => setConfirming(false)}
      >
        <p>{t("tools-pages.telegram.disconnect-body")}</p>
      </ConfirmModal>
    </>
  );
}
