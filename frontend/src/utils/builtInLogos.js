// Provider rows take an image URL, not an icon component: these are Lucide
// icons on a neutral tile for the built-in options, instead of a brand logo.
function lucideTile(shapes) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><rect width="40" height="40" rx="8" fill="#52525b"/><g transform="translate(8 8)" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${shapes}</g></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

const paths = (list) => list.map((d) => `<path d="${d}"/>`).join("");

/** Lucide "ServerCog": use the instance (system) settings. */
export const SYSTEM_DEFAULT_LOGO = lucideTile(
  '<circle cx="12" cy="12" r="3"/>' +
    paths([
      "M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5",
      "M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5",
      "M6 6h.01",
      "M6 18h.01",
      "m15.7 13.4-.9-.3",
      "m9.2 10.9-.9-.3",
      "m10.6 15.7.3-.9",
      "m13.6 15.7-.4-1",
      "m10.8 9.3-.4-1",
      "m8.3 13.6 1-.4",
      "m14.7 10.8 1-.4",
      "m13.4 8.3-.3.9",
    ])
);

/** Lucide "Route": the model router. */
export const MODEL_ROUTER_LOGO = lucideTile(
  '<circle cx="6" cy="19" r="3"/><circle cx="18" cy="5" r="3"/>' +
    paths(["M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"])
);

/** Lucide "Cpu": models that run on this instance (built-in embedder, Whisper). */
export const BUILT_IN_LOGO = lucideTile(
  '<rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/>' +
    paths([
      "M15 2v2",
      "M15 20v2",
      "M2 15h2",
      "M2 9h2",
      "M20 15h2",
      "M20 9h2",
      "M9 2v2",
      "M9 20v2",
    ])
);

/** Lucide "AppWindow": services provided by the user's browser. */
export const BROWSER_LOGO = lucideTile(
  '<rect x="2" y="4" width="20" height="16" rx="2"/>' +
    paths(["M10 4v4", "M2 8h20", "M6 4v4"])
);
