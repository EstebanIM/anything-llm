import { QRCodeSVG } from "qrcode.react";
import { TelegramLogo } from "@phosphor-icons/react";
import { Trans, useTranslation } from "react-i18next";
import { ExternalLink } from "@/components/ProviderFields";

const BOTFATHER_URL = "https://t.me/BotFather";

export default function CreateBotSection() {
  const { t } = useTranslation();
  const qrSize = 137;

  return (
    <div className="flex flex-col gap-y-8">
      <div className="flex flex-col gap-y-1">
        <h2 className="text-sm light:text-base font-semibold text-white light:text-slate-900">
          {t("telegram.setup.step1.title")}
        </h2>
        <p className="text-xs text-zinc-400 light:text-slate-600 max-w-[600px]">
          <Trans
            i18nKey="telegram.setup.step1.description"
            components={{
              code: (
                <code className="bg-zinc-800 light:bg-slate-200 px-1 py-0.5 rounded text-white light:text-slate-900" />
              ),
            }}
          />
        </p>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-x-8">
        <div className="flex flex-col items-start gap-y-2">
          <div
            aria-hidden="true"
            className="bg-zinc-700 light:bg-slate-200 rounded-2xl p-[18px]"
          >
            <QRCodeSVG
              value={BOTFATHER_URL}
              size={qrSize}
              bgColor="transparent"
              fgColor="currentColor"
              className="text-white light:text-slate-900"
              level="L"
            />
          </div>
          <ExternalLink
            href={BOTFATHER_URL}
            className="flex items-center justify-center gap-x-1.5 text-sm font-medium bg-zinc-50 light:bg-slate-900 text-zinc-900 light:text-white rounded-lg min-h-[44px] md:min-h-0 md:h-9 px-4 w-full sm:w-[172px] hover:opacity-90 transition-opacity duration-quick ease-smooth"
          >
            <TelegramLogo
              className="h-5 w-5"
              weight="fill"
              aria-hidden="true"
            />
            {t("telegram.setup.step1.open-botfather")}
          </ExternalLink>
        </div>
        <ol className="flex flex-col text-sm text-white light:text-slate-900">
          <li className="leading-5">
            {t("telegram.setup.step1.instruction-1")}
          </li>
          <li className="leading-5">
            <Trans
              i18nKey="telegram.setup.step1.instruction-2"
              components={{
                code: (
                  <code className="bg-zinc-800 light:bg-slate-200 px-1 py-0.5 rounded" />
                ),
              }}
            />
          </li>
          <li className="leading-5">
            {t("telegram.setup.step1.instruction-3")}
          </li>
          <li className="leading-5">
            {t("telegram.setup.step1.instruction-4")}
          </li>
        </ol>
      </div>
      <SecurityTips />
    </div>
  );
}

function SecurityTips() {
  const { t } = useTranslation();

  return (
    <div className="border border-zinc-600 light:border-slate-400 rounded-xl p-[18px] max-w-[640px]">
      <h3 className="text-sm font-medium text-white light:text-slate-900 mb-1">
        {t("telegram.setup.security.title")}
      </h3>
      <p className="text-sm text-zinc-400 light:text-slate-600 mb-2">
        {t("telegram.setup.security.description")}
      </p>
      <ul className="text-sm text-zinc-400 light:text-slate-600 list-disc list-inside space-y-0.5">
        <li>{t("telegram.setup.security.disable-groups")}</li>
        <li>{t("telegram.setup.security.disable-inline")}</li>
        <li>{t("telegram.setup.security.obscure-username")}</li>
      </ul>
    </div>
  );
}
