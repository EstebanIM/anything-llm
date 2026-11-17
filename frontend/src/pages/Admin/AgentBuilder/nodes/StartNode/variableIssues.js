/**
 * Characters that break a ${name} reference at runtime: whitespace, the
 * reference delimiters, and the path separators the executor reads as
 * nested access (${a.b}, ${a[0]}).
 */
const INVALID_NAME = /[\s${}.[\]]/;

/**
 * Problem with each flow variable name, by position: "invalid", "duplicate"
 * (a later variable reusing an earlier name) or null. Empty names are allowed
 * (an unused row) and ignored everywhere else.
 * @param {{name?: string}[]} [variables]
 * @returns {(null | "invalid" | "duplicate")[]}
 */
export default function variableIssues(variables = []) {
  const seen = new Set();
  return variables.map(({ name = "" } = {}) => {
    if (!name) return null;
    if (INVALID_NAME.test(name)) return "invalid";
    if (seen.has(name)) return "duplicate";
    seen.add(name);
    return null;
  });
}
