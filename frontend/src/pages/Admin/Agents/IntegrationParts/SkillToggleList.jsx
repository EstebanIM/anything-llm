import { useEffect, useId, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Search } from "lucide-react";
import strDistance from "js-levenshtein";
import { SimpleToggleSwitch } from "@/components/lib/Toggle";
import { normalize } from "@/components/lib/ProviderSearchMenu";
import { FIELD_INPUT } from "@/components/ProviderFields";

const LEVENSHTEIN_THRESHOLD = 3;

function matches(skill, needle) {
  const title = normalize(skill.title);
  if (title.includes(needle)) return true;
  if (normalize(skill.description).includes(needle)) return true;
  return strDistance(title, needle) <= LEVENSHTEIN_THRESHOLD;
}

function filterCategories(categories, query) {
  const needle = normalize(query.trim());
  if (!needle) return categories;
  const filtered = {};
  for (const [key, category] of Object.entries(categories)) {
    const skills = category.skills.filter((skill) => matches(skill, needle));
    if (skills.length > 0) filtered[key] = { ...category, skills };
  }
  return filtered;
}

/**
 * Searchable list of an integration's sub-skills, grouped by category, each
 * with a switch named after the skill. The search field has no `name` and
 * stops its change event, so filtering never marks the page as modified.
 *
 * @param {object} props
 * @param {Record<string, {title: string, icon: any, skills: {name: string, title: string, description: string}[]}>} props.categories
 * @param {string[]} props.disabledSkills
 * @param {(skillName: string) => void} props.onToggle
 */
export default function SkillToggleList({
  categories,
  disabledSkills,
  onToggle,
}) {
  const { t } = useTranslation();
  const baseId = useId();
  const headingId = `${baseId}-heading`;
  const [query, setQuery] = useState("");
  const [announcement, setAnnouncement] = useState("");

  const filtered = useMemo(
    () => filterCategories(categories, query),
    [categories, query]
  );
  const resultCount = Object.values(filtered).reduce(
    (total, category) => total + category.skills.length,
    0
  );

  // Announce the result count once typing pauses, not on every keystroke.
  useEffect(() => {
    if (!query.trim()) {
      setAnnouncement("");
      return;
    }
    const timer = setTimeout(() => {
      setAnnouncement(
        resultCount > 0
          ? t("agent-integrations.skills.results", { count: resultCount })
          : t("agent-integrations.skills.no-results")
      );
    }, 500);
    return () => clearTimeout(timer);
  }, [query, resultCount]);

  return (
    <section aria-labelledby={headingId} className="flex flex-col gap-y-4">
      <h3
        id={headingId}
        className="text-theme-text-primary font-semibold text-sm"
      >
        {t("agent-integrations.skills.title")}
      </h3>
      <div className="relative">
        <Search
          strokeWidth={1.5}
          size={16}
          aria-hidden="true"
          className="absolute left-3 top-1/2 -translate-y-1/2 text-theme-text-secondary pointer-events-none"
        />
        <input
          type="search"
          aria-label={t("agent-integrations.skills.search-label")}
          placeholder={t("agent-integrations.skills.search-placeholder")}
          value={query}
          autoComplete="off"
          spellCheck={false}
          onChange={(e) => {
            e.stopPropagation();
            setQuery(e.target.value);
          }}
          onKeyDown={(e) => {
            // Enter must not submit the page form.
            if (e.key === "Enter") e.preventDefault();
          }}
          className={`${FIELD_INPUT} pl-9`}
        />
      </div>
      <p aria-live="polite" aria-atomic="true" className="sr-only">
        {announcement}
      </p>
      {resultCount > 0 ? (
        <div className="flex flex-col gap-y-4">
          {Object.entries(filtered).map(([key, category]) => (
            <CategoryGroup
              key={key}
              id={`${baseId}-${key}`}
              category={category}
              disabledSkills={disabledSkills}
              onToggle={onToggle}
            />
          ))}
        </div>
      ) : (
        <p className="text-theme-text-secondary text-sm text-center py-4">
          {t("agent-integrations.skills.no-results")}
        </p>
      )}
    </section>
  );
}

function CategoryGroup({ id, category, disabledSkills, onToggle }) {
  const Icon = category.icon;
  return (
    <div className="flex flex-col gap-y-2">
      <h4
        id={id}
        className="flex items-center gap-x-2 px-1 text-sm font-medium text-theme-text-primary"
      >
        {Icon && <Icon strokeWidth={1.5} size={18} aria-hidden="true" />}
        {category.title}
      </h4>
      <ul aria-labelledby={id} className="flex flex-col gap-y-2">
        {category.skills.map((skill) => (
          <SkillRow
            key={skill.name}
            id={`${id}-${skill.name}`}
            skill={skill}
            enabled={!disabledSkills.includes(skill.name)}
            onToggle={() => onToggle(skill.name)}
          />
        ))}
      </ul>
    </div>
  );
}

function SkillRow({ id, skill, enabled, onToggle }) {
  return (
    <li className="flex items-center justify-between gap-x-3 p-2 rounded-lg border border-zinc-700 light:border-slate-300">
      <div className="flex min-w-0 flex-col">
        <span
          id={id}
          className="text-sm font-medium text-theme-text-primary break-words"
        >
          {skill.title}
        </span>
        <span className="text-xs text-theme-text-secondary break-words">
          {skill.description}
        </span>
      </div>
      <SimpleToggleSwitch
        enabled={enabled}
        onChange={onToggle}
        size="md"
        ariaLabelledBy={id}
      />
    </li>
  );
}
