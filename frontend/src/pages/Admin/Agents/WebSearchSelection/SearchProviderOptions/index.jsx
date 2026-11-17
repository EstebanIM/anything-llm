import { useId } from "react";
import { Trans, useTranslation } from "react-i18next";
import {
  ExternalLink,
  FIELD_COL,
  FIELD_HELP,
  FIELD_INPUT,
  FIELD_ROW,
  FIELD_SELECT,
  FieldLabel,
  SECRET_MASK,
  SecretInput,
} from "@/components/ProviderFields";
import { LINK_CLASS } from "../../IntegrationParts/PanelParts";

const SERPAPI_ENGINES = [
  { name: "Google Search", value: "google" },
  { name: "Google Images", value: "google_images_light" },
  { name: "Google Jobs", value: "google_jobs" },
  { name: "Google Maps", value: "google_maps" },
  { name: "Google News", value: "google_news_light" },
  { name: "Google Patents", value: "google_patents" },
  { name: "Google Scholar", value: "google_scholar" },
  { name: "Google Shopping", value: "google_shopping_light" },
  { name: "Amazon", value: "amazon" },
  { name: "Baidu", value: "baidu" },
];

const SEARCHAPI_ENGINES = [
  { name: "Google Search", value: "google" },
  { name: "Google Maps", value: "google_maps" },
  { name: "Google Shopping", value: "google_shopping" },
  { name: "Google News", value: "google_news" },
  { name: "Google Jobs", value: "google_jobs" },
  { name: "Google Scholar", value: "google_scholar" },
  { name: "Google Finance", value: "google_finance" },
  { name: "Google Patents", value: "google_patents" },
  { name: "YouTube", value: "youtube" },
  { name: "Bing", value: "bing" },
  { name: "Bing News", value: "bing_news" },
  { name: "Amazon Product Search", value: "amazon_search" },
  { name: "Baidu", value: "baidu" },
];

const key = (setting, extra = {}) => ({
  kind: "secret",
  setting,
  required: true,
  ...extra,
});
const url = (setting, placeholder, extra = {}) => ({
  kind: "url",
  setting,
  placeholder,
  ...extra,
});

/**
 * Settings of each web-search provider. `intro` is an i18n key with an
 * <anchor> to the provider's console (`href`, `provider` fills {{provider}});
 * fields keep the `env::` names the server stores.
 */
const PROVIDER_CONFIG = {
  "you-search": {
    intro: "agent-integrations.web-search.intro.you",
    href: "https://you.com/platform",
    provider: "You.com",
    fields: [key("AgentYouApiKey", { required: false, optional: true })],
  },
  "duckduckgo-engine": {
    intro: "agent-integrations.web-search.intro.duckduckgo",
    fields: [],
  },
  "brave-search": {
    intro: "agent-integrations.web-search.intro.get-key",
    href: "https://brave.com/search/api",
    provider: "Brave",
    fields: [key("AgentBraveApiKey")],
  },
  serpapi: {
    intro: "agent-integrations.web-search.intro.get-key",
    href: "https://serpapi.com/",
    provider: "SerpApi",
    fields: [
      key("AgentSerpApiKey"),
      {
        kind: "select",
        setting: "AgentSerpApiEngine",
        defaultValue: "google",
        options: SERPAPI_ENGINES,
      },
    ],
  },
  searchapi: {
    intro: "agent-integrations.web-search.intro.get-key",
    href: "https://www.searchapi.io/",
    provider: "SearchApi",
    fields: [
      key("AgentSearchApiKey"),
      {
        kind: "select",
        setting: "AgentSearchApiEngine",
        defaultValue: "google",
        options: SEARCHAPI_ENGINES,
      },
    ],
  },
  "serper-dot-dev": {
    intro: "agent-integrations.web-search.intro.get-key",
    href: "https://serper.dev",
    provider: "Serper.dev",
    fields: [key("AgentSerperApiKey")],
  },
  "bing-search": {
    intro: "agent-integrations.web-search.intro.bing",
    href: "https://portal.azure.com/",
    fields: [key("AgentBingSearchApiKey")],
    steps: [
      "agent-integrations.web-search.bing-steps.portal",
      "agent-integrations.web-search.bing-steps.account",
      "agent-integrations.web-search.bing-steps.resource",
      "agent-integrations.web-search.bing-steps.subscription",
      "agent-integrations.web-search.bing-steps.tier",
      "agent-integrations.web-search.bing-steps.key",
    ],
  },
  "baidu-search": {
    intro: "agent-integrations.web-search.intro.get-key",
    href: "https://cloud.baidu.com/doc/qianfan-api/s/Wmbq4z7e5",
    provider: "Baidu AI Cloud Qianfan",
    fields: [key("AgentBaiduSearchApiKey")],
  },
  "serply-engine": {
    intro: "agent-integrations.web-search.intro.get-key",
    href: "https://serply.io",
    provider: "Serply.io",
    fields: [key("AgentSerplyApiKey")],
  },
  "searxng-engine": {
    fields: [
      url("AgentSearXNGApiUrl", "https://searxng.example.com", {
        required: true,
        label: "agent-integrations.web-search.searxng-url",
        help: "agent-integrations.web-search.searxng-help",
      }),
    ],
  },
  "tavily-search": {
    intro: "agent-integrations.web-search.intro.get-key",
    href: "https://tavily.com/",
    provider: "Tavily",
    fields: [key("AgentTavilyApiKey")],
  },
  "exa-search": {
    intro: "agent-integrations.web-search.intro.get-key",
    href: "https://exa.ai",
    provider: "Exa",
    fields: [key("AgentExaApiKey")],
  },
  "perplexity-search": {
    intro: "agent-integrations.web-search.intro.get-key",
    href: "https://console.perplexity.ai",
    provider: "Perplexity",
    fields: [key("AgentPerplexityApiKey")],
  },
  "crw-search": {
    intro: "agent-integrations.web-search.intro.crw",
    href: "https://fastcrw.com/",
    href2: "https://github.com/us/crw",
    fields: [
      key("AgentCrwApiKey"),
      url("AgentCrwApiUrl", "https://fastcrw.com/api", { optional: true }),
    ],
  },
  "keenable-search": {
    intro: "agent-integrations.web-search.intro.keenable",
    href: "https://keenable.ai/console",
    fields: [
      key("AgentKeenableApiKey", { required: false, optional: true }),
      url("AgentKeenableApiUrl", "https://api.keenable.ai", { optional: true }),
    ],
  },
  "anysearch-search": {
    intro: "agent-integrations.web-search.intro.needs-key",
    href: "https://anysearch.com/console/api-keys",
    provider: "AnySearch",
    fields: [key("AgentAnySearchApiKey")],
  },
  "firecrawl-search": {
    intro: "agent-integrations.web-search.intro.needs-key",
    href: "https://www.firecrawl.dev/app/api-keys",
    provider: "Firecrawl",
    fields: [key("AgentFirecrawlApiKey")],
  },
  "deepseek-search": {
    intro: "agent-integrations.web-search.intro.deepseek",
    href: "https://platform.deepseek.com/api_keys",
    fields: [key("AgentDeepSeekApiKey")],
  },
};

/**
 * Settings fields of the chosen web-search provider. Only mounted while the
 * skill is on, so hidden `required` fields never block the page save.
 * @param {{provider: string, settings: object}} props
 */
export default function SearchProviderOptions({ provider, settings }) {
  const { t } = useTranslation();
  const id = useId();
  const config = PROVIDER_CONFIG[provider];
  if (!config) return null;
  const introId = config.intro ? `${id}-intro` : undefined;

  return (
    <div className="flex flex-col gap-y-4">
      {config.intro && (
        <p id={introId} className="text-sm text-theme-text-secondary">
          <Trans
            i18nKey={config.intro}
            values={{ provider: config.provider }}
            components={{
              anchor: (
                <ExternalLink href={config.href} className={LINK_CLASS} />
              ),
              anchor2: (
                <ExternalLink href={config.href2} className={LINK_CLASS} />
              ),
            }}
          />
        </p>
      )}
      {config.fields.length > 0 && (
        <div className={FIELD_ROW}>
          {config.fields.map((field, index) => (
            <ProviderField
              key={field.setting}
              id={`${id}-${field.setting}`}
              field={field}
              settings={settings}
              describedBy={index === 0 ? introId : undefined}
            />
          ))}
        </div>
      )}
      {config.steps && (
        <div className="flex flex-col gap-y-2 text-sm text-theme-text-secondary">
          <p>{t("agent-integrations.web-search.bing-steps.title")}</p>
          <ol className="list-decimal ml-6 flex flex-col gap-y-1">
            {config.steps.map((step) => (
              <li key={step}>
                <Trans
                  i18nKey={step}
                  components={{
                    anchor: (
                      <ExternalLink href={config.href} className={LINK_CLASS} />
                    ),
                  }}
                />
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}

function ProviderField({ id, field, settings, describedBy }) {
  const { t } = useTranslation();
  const name = `env::${field.setting}`;

  if (field.kind === "secret")
    return (
      <div className={FIELD_COL}>
        <FieldLabel
          htmlFor={id}
          label={t("provider-fields.api-key")}
          optional={!!field.optional}
        />
        <SecretInput
          id={id}
          name={name}
          defaultValue={settings?.[field.setting] ? SECRET_MASK : ""}
          required={!!field.required}
          aria-describedby={describedBy}
        />
      </div>
    );

  if (field.kind === "select")
    return (
      <div className={FIELD_COL}>
        <FieldLabel
          htmlFor={id}
          label={t("agent-integrations.web-search.engine")}
        />
        <select
          id={id}
          name={name}
          required={true}
          defaultValue={settings?.[field.setting] || field.defaultValue}
          aria-describedby={describedBy}
          className={FIELD_SELECT}
        >
          {field.options.map(({ name: optionName, value }) => (
            <option key={value} value={value}>
              {optionName}
            </option>
          ))}
        </select>
      </div>
    );

  const helpId = field.help ? `${id}-help` : undefined;
  return (
    <div className={FIELD_COL}>
      <FieldLabel
        htmlFor={id}
        label={t(field.label ?? "provider-fields.base-url")}
        optional={!!field.optional}
      />
      <input
        id={id}
        type="url"
        name={name}
        placeholder={field.placeholder}
        defaultValue={settings?.[field.setting]}
        required={!!field.required}
        autoComplete="off"
        spellCheck={false}
        aria-describedby={
          [describedBy, helpId].filter(Boolean).join(" ") || undefined
        }
        className={FIELD_INPUT}
      />
      {helpId && (
        <p id={helpId} className={FIELD_HELP}>
          {t(field.help)}
        </p>
      )}
    </div>
  );
}
