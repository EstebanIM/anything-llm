import { useCallback, useEffect, useId, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { ListFilter } from "lucide-react";
import Admin from "@/models/admin";
import SerpApiIcon from "./icons/serpapi.png";
import SearchApiIcon from "./icons/searchapi.png";
import SerperDotDevIcon from "./icons/serper.png";
import BingSearchIcon from "./icons/bing.png";
import BaiduSearchIcon from "./icons/baidu.png";
import SerplySearchIcon from "./icons/serply.png";
import SearXNGSearchIcon from "./icons/searxng.png";
import TavilySearchIcon from "./icons/tavily.svg";
import DuckDuckGoIcon from "./icons/duckduckgo.png";
import ExaIcon from "./icons/exa.png";
import PerplexitySearchIcon from "./icons/perplexity.png";
import BraveSearchIcon from "./icons/brave.png";
import CrwSearchIcon from "./icons/crw.png";
import YouSearchIcon from "./icons/you.png";
import KeenableSearchIcon from "./icons/keenable.png";
import AnySearchSearchIcon from "./icons/anysearch.png";
import FirecrawlSearchIcon from "./icons/firecrawl.png";
import DeepSeekSearchIcon from "@/media/llmprovider/deepseek.png";
import WebSearchImage from "@/media/agents/scrape-websites.png";
import ProviderSearchMenu from "@/components/lib/ProviderSearchMenu";
import ProviderOption from "@/components/lib/ProviderSearchMenu/ProviderOption";
import { DefaultBadge } from "../Badges/default";
import {
  PANEL_TEXT,
  PanelHeader,
  PanelLoadError,
  PanelLoading,
} from "../IntegrationParts/PanelParts";
import SearchProviderOptions from "./SearchProviderOptions";

const DEFAULT_PROVIDER = "you-search";

/** `description` is the English fallback for `descriptionKey`. */
const SEARCH_PROVIDERS = [
  {
    name: "You.com Search",
    value: "you-search",
    logo: YouSearchIcon,
    description: "LLM-ready web search that works without an API key.",
  },
  {
    name: "DuckDuckGo",
    value: "duckduckgo-engine",
    logo: DuckDuckGoIcon,
    description: "Web search with DuckDuckGo, with no API key or setup.",
  },
  {
    name: "Brave Search",
    value: "brave-search",
    logo: BraveSearchIcon,
    description: "Web search with the Brave Search API.",
  },
  {
    name: "SerpApi",
    value: "serpapi",
    logo: SerpApiIcon,
    description:
      "Results from Google and other search engines through SerpApi.",
  },
  {
    name: "SearchApi",
    value: "searchapi",
    logo: SearchApiIcon,
    description:
      "Structured data from several search engines through SearchApi.",
  },
  {
    name: "Serper.dev",
    value: "serper-dot-dev",
    logo: SerperDotDevIcon,
    description: "Google web search through Serper.dev.",
  },
  {
    name: "Bing Search",
    value: "bing-search",
    logo: BingSearchIcon,
    description: "Web search with the Bing Search API, through Azure.",
  },
  {
    name: "Baidu Search",
    value: "baidu-search",
    logo: BaiduSearchIcon,
    description: "Web search with Baidu Search, suited to Chinese content.",
  },
  {
    name: "Serply.io",
    value: "serply-engine",
    logo: SerplySearchIcon,
    description: "Web search through Serply.io.",
  },
  {
    name: "SearXNG",
    value: "searxng-engine",
    logo: SearXNGSearchIcon,
    description: "Open-source metasearch engine that you can host yourself.",
  },
  {
    name: "Tavily Search",
    value: "tavily-search",
    logo: TavilySearchIcon,
    description: "Web search with the Tavily API.",
  },
  {
    name: "Exa Search",
    value: "exa-search",
    logo: ExaIcon,
    description:
      "Web search API for AI agents that returns the full page contents.",
  },
  {
    name: "Perplexity Search",
    value: "perplexity-search",
    logo: PerplexitySearchIcon,
    description: "Web search with the Perplexity Search API.",
  },
  {
    name: "fastCRW Search",
    value: "crw-search",
    logo: CrwSearchIcon,
    description:
      "Open-source alternative to Firecrawl and Tavily that you can host yourself.",
  },
  {
    name: "Keenable",
    value: "keenable-search",
    logo: KeenableSearchIcon,
    description: "Web search for AI agents that works without an API key.",
  },
  {
    name: "AnySearch",
    value: "anysearch-search",
    logo: AnySearchSearchIcon,
    description: "Real-time web search for AI agents. Needs an API key.",
  },
  {
    name: "Firecrawl",
    value: "firecrawl-search",
    logo: FirecrawlSearchIcon,
    description: "Web search API for AI agents. Needs an API key.",
  },
  {
    name: "DeepSeek",
    value: "deepseek-search",
    logo: DeepSeekSearchIcon,
    description: "DeepSeek's web search tool. Needs a DeepSeek API key.",
  },
].map((provider) => ({
  ...provider,
  descriptionKey: `provider-pages.descriptions.web-search.${provider.value}`,
}));

export default function AgentWebSearchSelection({
  skill,
  title,
  description,
  settings,
  toggleSkill,
  enabled = true,
  setHasChanges,
  hasChanges,
}) {
  const { t } = useTranslation();
  const headingId = useId();
  const providerHeadingId = useId();
  // null until the stored provider is known: a failed load must never fall
  // back to a default that the next save would write over the real choice.
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [loadError, setLoadError] = useState(false);
  // Bumped on every load so the provider fields drop unsaved typing.
  const [revision, setRevision] = useState(0);

  const load = useCallback(async () => {
    setLoadError(false);
    const res = await Admin.systemPreferencesByFields([
      "agent_search_provider",
    ]);
    if (!res?.settings) {
      setLoadError(true);
      return;
    }
    setSelectedProvider(res.settings.agent_search_provider ?? DEFAULT_PROVIDER);
    setRevision((n) => n + 1);
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  // Saved or discarded (hasChanges: true -> false): show the stored provider.
  const prevHasChanges = useRef(hasChanges);
  useEffect(() => {
    if (prevHasChanges.current === true && hasChanges === false) load();
    prevHasChanges.current = hasChanges;
  }, [hasChanges]);

  function updateChoice(selection) {
    if (selection === selectedProvider) return;
    setSelectedProvider(selection);
    setHasChanges(true);
  }

  const selectedSearchProviderObject = SEARCH_PROVIDERS.find(
    (provider) => provider.value === selectedProvider
  );

  return (
    <div className="p-2">
      <div className="flex flex-col gap-y-[18px] max-w-[500px]">
        <PanelHeader
          headingId={headingId}
          title={title}
          icon={
            <ListFilter
              strokeWidth={1.5}
              size={24}
              aria-hidden="true"
              className="shrink-0 text-theme-text-primary"
            />
          }
          badge={<DefaultBadge title={title} />}
          enabled={enabled}
          onToggle={() => toggleSkill(skill)}
        />
        <img src={WebSearchImage} alt="" className="w-full rounded-md" />
        <p className={PANEL_TEXT}>{description}</p>
        {enabled && (
          <section
            aria-labelledby={providerHeadingId}
            className="flex flex-col gap-y-4"
          >
            <h3
              id={providerHeadingId}
              className="text-theme-text-primary font-semibold text-sm"
            >
              {t("agent-integrations.web-search.provider")}
            </h3>
            {loadError ? (
              <PanelLoadError
                message={t("agent-integrations.web-search.load-error")}
                onRetry={load}
              />
            ) : !selectedProvider ? (
              <PanelLoading />
            ) : (
              <>
                <input
                  type="hidden"
                  name="system::agent_search_provider"
                  value={selectedProvider}
                />
                <div className="relative">
                  <ProviderSearchMenu
                    items={SEARCH_PROVIDERS}
                    labelledBy={providerHeadingId}
                    selected={selectedSearchProviderObject}
                    placeholder={t(
                      "agent-integrations.web-search.search-providers"
                    )}
                    renderItem={(provider, close) => (
                      <ProviderOption
                        name={provider.name}
                        value={provider.value}
                        image={provider.logo}
                        description={provider.description}
                        descriptionKey={provider.descriptionKey}
                        checked={selectedProvider === provider.value}
                        onClick={() => {
                          updateChoice(provider.value);
                          close();
                        }}
                      />
                    )}
                  />
                </div>
                <SearchProviderOptions
                  key={`${selectedProvider}-${revision}`}
                  provider={selectedProvider}
                  settings={settings}
                />
              </>
            )}
          </section>
        )}
      </div>
    </div>
  );
}
