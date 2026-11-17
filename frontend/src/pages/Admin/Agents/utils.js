import strDistance from "js-levenshtein";
import { normalize } from "@/components/lib/ProviderSearchMenu";

const LEVENSHTEIN_THRESHOLD = 3;

/** Case- and accent-insensitive: "busqueda" finds "Búsqueda". */
function skillMatchesSearch(skill, searchTerm) {
  if (!searchTerm) return true;

  const normalizedSearch = normalize(searchTerm).trim();
  if (!normalizedSearch) return true;
  const title = normalize(skill.title);
  const description = normalize(skill.description);

  if (title.includes(normalizedSearch)) return true;
  if (description.includes(normalizedSearch)) return true;
  if (strDistance(title, normalizedSearch) <= LEVENSHTEIN_THRESHOLD)
    return true;

  return false;
}

export function filterSkillCategories(skillCategories, searchTerm) {
  if (!searchTerm) return skillCategories;

  const filtered = {};
  for (const [key, category] of Object.entries(skillCategories)) {
    const matchingSkills = category.skills.filter((skill) =>
      skillMatchesSearch(skill, searchTerm)
    );
    if (matchingSkills.length > 0) {
      filtered[key] = { ...category, skills: matchingSkills };
    }
  }
  return filtered;
}
