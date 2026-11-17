import { useState, useEffect, useId } from "react";
import { Trans, useTranslation } from "react-i18next";
import System from "@/models/system";
import { getProviderPrivacyMap } from "./constants";
import {
  CircleHelp,
  CircleOff,
  Server,
  SquareArrowOutUpRight,
} from "lucide-react";
import { titleCase, sentenceCase } from "text-case";
import useCustomAppName from "@/hooks/useCustomAppName";

/** The three providers that can see instance data, in display order. */
const PROVIDER_KINDS = [
  {
    id: "llm",
    setting: "LLMProvider",
    map: "llm",
    titleKey: "settings-pages.privacy-title-llm",
    emptyKey: "settings-pages.privacy-not-configured-llm",
  },
  {
    id: "embedder",
    setting: "EmbeddingEngine",
    map: "embeddingEngine",
    titleKey: "settings-pages.privacy-title-embedder",
    emptyKey: "settings-pages.privacy-not-configured-embedder",
  },
  {
    id: "vectordb",
    setting: "VectorDB",
    map: "vectorDb",
    titleKey: "settings-pages.privacy-title-vectordb",
    emptyKey: "settings-pages.privacy-not-configured-vectordb",
  },
];

/** Entry for a provider value with no privacy definition, or no value at all. */
function fallbackProvider(kind, providerString) {
  if (!providerString)
    return { nameKey: kind.emptyKey, icon: "none", description: [] };
  return {
    name: titleCase(sentenceCase(String(providerString))),
    icon: "unknown",
    description: [
      {
        key: "settings-pages.privacy-unknown-policy",
        values: { provider: String(providerString) },
      },
    ],
  };
}

export default function ProviderPrivacy() {
  const { brandName } = useCustomAppName();
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    async function fetchProviders() {
      const _settings = await System.keys();
      const privacyMap = getProviderPrivacyMap(brandName);
      setProviders(
        PROVIDER_KINDS.map((kind) => {
          const value = _settings?.[kind.setting];
          return {
            kind,
            provider:
              (value && privacyMap[kind.map][value]) ||
              fallbackProvider(kind, value),
          };
        })
      );
    }
    fetchProviders();
  }, [brandName]);

  if (!providers) return null;
  return (
    <div className="flex flex-col gap-8 w-full max-w-2xl">
      {providers.map(({ kind, provider }) => (
        <ProviderPrivacyItem
          key={kind.id}
          titleKey={kind.titleKey}
          provider={provider}
        />
      ))}
    </div>
  );
}

function ProviderPrivacyItem({ titleKey, provider }) {
  const { t } = useTranslation();
  const titleId = useId();
  const name = provider.nameKey
    ? t(provider.nameKey, provider.nameValues)
    : provider.name;

  return (
    <section
      aria-labelledby={titleId}
      className="flex flex-col items-start gap-y-3 pb-4 border-b border-theme-sidebar-border"
    >
      <h2 id={titleId} className="text-theme-text-primary text-base font-bold">
        {t(titleKey)}
      </h2>
      <div className="flex items-start gap-3">
        <ProviderLogo provider={provider} />
        <div className="flex flex-col gap-2 flex-1">
          <p className="text-theme-text-primary text-sm font-semibold">
            {name}
          </p>
          {provider.policyUrl ? (
            <p className="text-theme-text-secondary text-sm">
              <Trans
                i18nKey="settings-pages.privacy-policy"
                components={{
                  anchor: <PolicyLink href={provider.policyUrl} />,
                }}
              />
            </p>
          ) : (
            provider.description?.length > 0 && (
              <ul className="flex flex-col list-none gap-1">
                {provider.description.map(({ key, values }) => (
                  <li key={key} className="text-theme-text-secondary text-sm">
                    {t(key, values)}
                  </li>
                ))}
              </ul>
            )
          )}
        </div>
      </div>
    </section>
  );
}

const PLACEHOLDER_ICONS = {
  local: Server,
  unknown: CircleHelp,
  none: CircleOff,
};

/** The provider's logo; providers without one get a neutral icon. Decorative: the name is next to it. */
function ProviderLogo({ provider }) {
  if (provider.logo)
    return (
      <img
        src={provider.logo}
        alt=""
        className="w-8 h-8 rounded flex-shrink-0 mt-0.5"
      />
    );
  const Icon = PLACEHOLDER_ICONS[provider.icon] ?? CircleHelp;
  return (
    <span
      aria-hidden="true"
      className="w-8 h-8 rounded flex-shrink-0 mt-0.5 flex items-center justify-center bg-theme-settings-input-bg text-theme-text-secondary"
    >
      <Icon strokeWidth={1.5} size={18} />
    </span>
  );
}

function PolicyLink({ href, children }) {
  const { t } = useTranslation();
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-theme-text-secondary hover:text-theme-text-primary text-sm font-medium underline transition-colors duration-quick ease-smooth inline-flex items-center gap-1"
    >
      {children}
      <SquareArrowOutUpRight strokeWidth={1.5} size={12} aria-hidden="true" />
      <span className="sr-only">{t("provider-fields.opens-new-tab")}</span>
    </a>
  );
}
