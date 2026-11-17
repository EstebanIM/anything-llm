import { useRef, useState } from "react";
import { LoaderCircle } from "lucide-react";
import { TelegramLogo } from "@phosphor-icons/react";
import Telegram from "@/models/telegram";
import CTAButton from "@/components/lib/CTAButton";
import { BotTokenField } from "../../SetupView";
import { useTranslation } from "react-i18next";

export default function DisconnectedView({
  config,
  onReconnected,
  newToken,
  setNewToken,
}) {
  const { t } = useTranslation();
  const tokenRef = useRef(null);
  const [reconnecting, setReconnecting] = useState(false);
  const [error, setError] = useState(null);

  async function handleReconnect(e) {
    e.preventDefault();
    if (reconnecting) return;
    if (!newToken.trim()) {
      setError(t("telegram.setup.toast-enter-token"));
      return tokenRef.current?.focus();
    }
    setError(null);
    setReconnecting(true);
    const res = await Telegram.connect(
      newToken.trim(),
      config.default_workspace
    );
    setReconnecting(false);
    if (!res.success) {
      setError(
        res.error
          ? t("tools-pages.telegram.connect-error", { error: res.error })
          : t("telegram.connected.toast-reconnect-failed")
      );
      return tokenRef.current?.focus();
    }

    setNewToken("");
    const configRes = await Telegram.getConfig();
    onReconnected(configRes?.config);
  }

  return (
    <div className="flex flex-col gap-y-8 mt-8">
      <section className="flex flex-col gap-y-[18px]">
        <h2 className="text-base font-semibold text-white light:text-slate-900">
          {t("tools-pages.telegram.connected-bot")}
        </h2>
        <div className="flex items-start gap-x-1 border border-red-500/30 light:border-red-300 rounded-xl p-3 w-full max-w-[700px]">
          <div
            aria-hidden="true"
            className="flex items-center justify-center w-9 h-9 rounded-full bg-red-500/20 shrink-0"
          >
            <TelegramLogo
              className="h-5 w-5 text-red-400 light:text-red-700"
              weight="fill"
            />
          </div>
          <div className="flex flex-col gap-y-1 ml-1 min-w-0">
            <p className="text-sm font-semibold text-white light:text-slate-900 break-all">
              @{config.bot_username}
            </p>
            <p className="text-xs text-red-300 light:text-red-700">
              {t("telegram.connected.status-disconnected")}
            </p>
          </div>
        </div>
        <form
          onSubmit={handleReconnect}
          className="flex flex-col sm:flex-row sm:items-start gap-3 w-full max-w-[700px]"
        >
          <BotTokenField
            inputRef={tokenRef}
            label={t("tools-pages.telegram.new-token")}
            value={newToken}
            onChange={(value) => {
              setNewToken(value);
              if (error) setError(null);
            }}
            error={error}
            className="w-full sm:flex-1 min-w-0"
          />
          {/* Lines the button up with the input, below the label. */}
          <CTAButton
            busy={reconnecting}
            className="mr-0 text-sm sm:mt-8 shrink-0"
          >
            {reconnecting && (
              <LoaderCircle
                strokeWidth={1.5}
                className="h-4 w-4 animate-spin"
                aria-hidden="true"
              />
            )}
            {t("telegram.connected.reconnect")}
          </CTAButton>
        </form>
      </section>
    </div>
  );
}
