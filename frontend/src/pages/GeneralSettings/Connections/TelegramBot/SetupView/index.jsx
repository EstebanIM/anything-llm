import { useId, useRef, useState } from "react";
import { LoaderCircle } from "lucide-react";
import { TelegramLogo } from "@phosphor-icons/react";
import Telegram from "@/models/telegram";
import CTAButton from "@/components/lib/CTAButton";
import ServerErrorDetail from "@/components/lib/ServerErrorDetail";
import { serverErrorParts } from "@/utils/serverErrors";
import {
  SecretInput,
  FIELD_ERROR,
  FIELD_HELP,
  FIELD_LABEL,
} from "@/components/ProviderFields";
import CreateBotSection from "./CreateBotSection";
import { useTranslation } from "react-i18next";

export default function SetupView({ onConnected }) {
  const { t } = useTranslation();
  const tokenRef = useRef(null);
  const [botToken, setBotToken] = useState("");
  const [connecting, setConnecting] = useState(false);
  const [error, setError] = useState(null);

  async function handleConnect(e) {
    e.preventDefault();
    if (connecting) return;
    if (!botToken.trim()) {
      setError({
        message: t("telegram.setup.toast-enter-token"),
        detail: null,
      });
      return tokenRef.current?.focus();
    }

    setError(null);
    setConnecting(true);
    const res = await Telegram.connect(botToken.trim());
    setConnecting(false);

    if (!res.success) {
      setError(
        res.error
          ? serverErrorParts(res.error, t, "tools-pages.telegram.connect-error")
          : { message: t("telegram.setup.toast-connect-failed"), detail: null }
      );
      return tokenRef.current?.focus();
    }

    const configRes = await Telegram.getConfig();
    onConnected(configRes?.config);
  }

  return (
    <div className="flex flex-col gap-y-8 mt-8">
      <CreateBotSection />
      <form onSubmit={handleConnect} className="flex flex-col gap-y-[18px]">
        <div className="flex flex-col gap-y-2">
          <h2 className="text-sm light:text-base font-semibold text-white light:text-slate-900">
            {t("telegram.setup.step2.title")}
          </h2>
          <p className="text-xs text-zinc-400 light:text-slate-600 max-w-[700px]">
            {t("telegram.setup.step2.description")}
          </p>
        </div>
        <BotTokenField
          inputRef={tokenRef}
          label={t("telegram.setup.step2.bot-token")}
          value={botToken}
          onChange={(value) => {
            setBotToken(value);
            if (error) setError(null);
          }}
          error={error}
        />
        <CTAButton busy={connecting} className="mr-0 text-sm">
          {connecting ? (
            <>
              <LoaderCircle
                strokeWidth={1.5}
                className="h-4 w-4 animate-spin"
                aria-hidden="true"
              />
              {t("telegram.setup.step2.connecting")}
            </>
          ) : (
            <>
              <TelegramLogo
                className="h-5 w-5"
                weight="fill"
                aria-hidden="true"
              />
              {t("telegram.setup.step2.connect-bot")}
            </>
          )}
        </CTAButton>
      </form>
    </div>
  );
}

/**
 * Bot token field: SecretInput with a real label, the example format as help
 * and an inline error. Shared with the reconnect form.
 * @param {{message: string, detail: string|null}|null} props.error
 */
export function BotTokenField({
  inputRef,
  label,
  value,
  onChange,
  error,
  className = "w-full max-w-[420px]",
}) {
  const { t } = useTranslation();
  const id = useId();
  const helpId = `${id}-help`;
  const errorId = `${id}-error`;

  return (
    <div className={`flex flex-col ${className}`}>
      <label htmlFor={id} className={FIELD_LABEL}>
        {label}
      </label>
      <SecretInput
        ref={inputRef}
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="123456:ABC-DEF123ghlkl-zyx57W2v"
        revealLabel={t("tools-pages.telegram.show-token")}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${errorId} ${helpId}` : helpId}
      />
      <p id={helpId} className={FIELD_HELP}>
        {t("tools-pages.telegram.token-help")}
      </p>
      {error && (
        <p id={errorId} role="alert" className={FIELD_ERROR}>
          {error.message}
          <ServerErrorDetail detail={error.detail} />
        </p>
      )}
    </div>
  );
}
