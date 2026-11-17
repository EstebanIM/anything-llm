import { useId, useRef, useState } from "react";
import { Search } from "lucide-react";
import { useTranslation } from "react-i18next";
import ConnectorImages from "@/components/DataConnectorOption/media";
import { FIELD_INPUT } from "@/components/ProviderFields";
import GithubOptions from "./Connectors/Github";
import GitlabOptions from "./Connectors/Gitlab";
import GiteaOptions from "./Connectors/Gitea";
import YoutubeOptions from "./Connectors/Youtube";
import ConfluenceOptions from "./Connectors/Confluence";
import DrupalWikiOptions from "./Connectors/DrupalWiki";
import WebsiteDepthOptions from "./Connectors/WebsiteDepth";
import ObsidianOptions from "./Connectors/Obsidian";
import PaperlessNgxOptions from "./Connectors/PaperlessNgx";
import ConnectorOption from "./ConnectorOption";
import { normalize } from "@/components/lib/ProviderSearchMenu";

export const getDataConnectors = (t) => ({
  github: {
    name: t("connectors.github.name"),
    image: ConnectorImages.github,
    description: t("connectors.github.description"),
    options: <GithubOptions />,
  },
  gitlab: {
    name: t("connectors.gitlab.name"),
    image: ConnectorImages.gitlab,
    description: t("connectors.gitlab.description"),
    options: <GitlabOptions />,
  },
  gitea: {
    name: t("connectors.gitea.name"),
    image: ConnectorImages.gitea,
    description: t("connectors.gitea.description"),
    options: <GiteaOptions />,
  },
  "youtube-transcript": {
    name: t("connectors.youtube.name"),
    image: ConnectorImages.youtube,
    description: t("connectors.youtube.description"),
    options: <YoutubeOptions />,
  },
  "website-depth": {
    name: t("connectors.website-depth.name"),
    image: ConnectorImages.websiteDepth,
    description: t("connectors.website-depth.description"),
    options: <WebsiteDepthOptions />,
  },
  confluence: {
    name: t("connectors.confluence.name"),
    image: ConnectorImages.confluence,
    description: t("connectors.confluence.description"),
    options: <ConfluenceOptions />,
  },
  drupalwiki: {
    name: "Drupal Wiki",
    image: ConnectorImages.drupalwiki,
    description: t("data-connectors.drupalwiki.description"),
    options: <DrupalWikiOptions />,
  },
  obsidian: {
    name: "Obsidian",
    image: ConnectorImages.obsidian,
    description: t("data-connectors.obsidian.description"),
    options: <ObsidianOptions />,
  },
  "paperless-ngx": {
    name: "Paperless-ngx",
    image: ConnectorImages.paperlessNgx,
    description: t("data-connectors.paperless-ngx.description"),
    options: <PaperlessNgxOptions />,
  },
});

/**
 * Data connectors as vertical tabs (APG: one Tab stop, arrows and Home/End
 * move and select). Every panel stays mounted and only the selected one is
 * shown, so a collection in progress survives switching connectors.
 */
export default function DataConnectors() {
  const { t } = useTranslation();
  const baseId = useId();
  const tabRefs = useRef({});
  const [selectedConnector, setSelectedConnector] = useState("github");
  const [searchQuery, setSearchQuery] = useState("");
  const DATA_CONNECTORS = getDataConnectors(t);
  const slugs = Object.keys(DATA_CONNECTORS);

  const tabId = (slug) => `${baseId}-tab-${slug}`;
  const panelId = (slug) => `${baseId}-panel-${slug}`;
  const headingId = (slug) => `${baseId}-heading-${slug}`;

  const needle = normalize(searchQuery.trim());
  const filteredConnectors = needle
    ? slugs.filter((slug) =>
        [DATA_CONNECTORS[slug].name, DATA_CONNECTORS[slug].description].some(
          (text) => normalize(text).includes(needle)
        )
      )
    : slugs;
  // The selected connector may be filtered out: then the first result takes the Tab stop.
  const tabStop = filteredConnectors.includes(selectedConnector)
    ? selectedConnector
    : filteredConnectors[0];

  // Arrows select as they move, so the focused tab is always the Tab stop.
  const handleTabKeyDown = (e) => {
    const current = filteredConnectors.indexOf(tabStop);
    if (current === -1) return;
    const last = filteredConnectors.length - 1;
    const next = {
      ArrowDown: current === last ? 0 : current + 1,
      ArrowUp: current === 0 ? last : current - 1,
      Home: 0,
      End: last,
    }[e.key];
    if (next === undefined) return;
    e.preventDefault();
    const slug = filteredConnectors[next];
    setSelectedConnector(slug);
    tabRefs.current[slug]?.focus();
  };

  return (
    <div className="relative w-[70vw] max-w-full h-[70vh] overflow-y-auto md:overflow-hidden grid grid-cols-1 md:grid-cols-[minmax(220px,280px)_1fr] md:grid-rows-1">
      <div className="p-4 md:h-full md:min-h-0 md:overflow-y-auto md:border-r border-white/10 light:border-slate-200">
        <div className="sticky top-0 z-10 pb-2 bg-zinc-900 light:bg-white">
          <label htmlFor={`${baseId}-search`} className="sr-only">
            {t("connectors.search-placeholder")}
          </label>
          <div className="relative">
            <Search
              strokeWidth={1.5}
              size={16}
              aria-hidden="true"
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-theme-text-secondary pointer-events-none"
            />
            <input
              id={`${baseId}-search`}
              type="search"
              placeholder={t("connectors.search-placeholder")}
              className={`${FIELD_INPUT} pl-10 rounded-full`}
              autoComplete="off"
              spellCheck={false}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <p role="status" className="sr-only">
            {needle
              ? t("data-connectors.search-results", {
                  count: filteredConnectors.length,
                })
              : ""}
          </p>
        </div>
        {filteredConnectors.length > 0 ? (
          <div
            role="tablist"
            aria-orientation="vertical"
            aria-label={t("connectors.manage.data-connectors")}
            onKeyDown={handleTabKeyDown}
            className="mt-2 flex flex-col gap-y-1"
          >
            {filteredConnectors.map((slug) => (
              <ConnectorOption
                key={slug}
                ref={(el) => {
                  tabRefs.current[slug] = el;
                }}
                id={tabId(slug)}
                panelId={panelId(slug)}
                selected={slug === selectedConnector}
                tabIndex={slug === tabStop ? 0 : -1}
                image={DATA_CONNECTORS[slug].image}
                name={DATA_CONNECTORS[slug].name}
                description={DATA_CONNECTORS[slug].description}
                onSelect={() => setSelectedConnector(slug)}
              />
            ))}
          </div>
        ) : (
          <p className="mt-4 text-sm text-center text-theme-text-secondary">
            {t("connectors.no-connectors")}
          </p>
        )}
      </div>
      <div className="p-4 md:px-6 md:h-full md:min-h-0 md:overflow-y-auto text-white">
        {slugs.map((slug) => (
          <div
            key={slug}
            role="tabpanel"
            id={panelId(slug)}
            aria-labelledby={headingId(slug)}
            hidden={slug !== selectedConnector}
            tabIndex={0}
            className="rounded-sm"
          >
            <h2
              id={headingId(slug)}
              className="text-base font-semibold text-white"
            >
              {DATA_CONNECTORS[slug].name}
            </h2>
            <p className="mt-1 text-xs text-theme-text-secondary">
              {DATA_CONNECTORS[slug].description}
            </p>
            <div className="mt-6">{DATA_CONNECTORS[slug].options}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
