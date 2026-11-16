/**
 * @typedef MetaTagDefinition
 * @property {('link'|'meta')} tag - the type of meta tag element
 * @property {{string:string}|null} props - the inner key/values of a meta tag
 * @property {string|null} content - Text content to be injected between tags. If null self-closing.
 */

const DEFAULT_APP_NAME = "IASMAR";

/**
 * This class serves the default index.html page that is not present when built in production.
 * and therefore this class should not be called when in development mode since it is unused.
 * All this class does is basically emulate SSR for the meta-tag generation of the root index page.
 * Since we are an SPA, we can just render the primary page and the known entrypoints for the index.{js,css}
 * we can always start at the right place and dynamically load in lazy-loaded as we typically normally would
 * and we dont have any of the overhead that would normally come with having the rewrite the whole app in next or something.
 * Lastly, this class is singleton, so once instantiate the same reference is shared for as long as the server is alive.
 * the main function is `.generate()` which will return the index HTML. These settings are stored in the #customConfig
 * static property and will not be reloaded until the page is loaded AND #customConfig is explicitly null. So anytime a setting
 * for meta-props is updated you should get this singleton class and call `.clearConfig` so the next page load will show the new props.
 */
const {
  extractInternalFaviconFilename,
  internalFaviconUrl,
} = require("../files/favicon");

class MetaGenerator {
  name = "MetaGenerator";

  /** @type {MetaGenerator|null} */
  static _instance = null;

  /** @type {{title:string,description:string,faviconUrl:string,socialImagePath:string|null}|null} */
  #customConfig = null;

  #defaultManifest = {
    name: DEFAULT_APP_NAME,
    short_name: DEFAULT_APP_NAME,
    display: "standalone",
    orientation: "portrait",
    start_url: "/",
    icons: [
      {
        src: "/favicon.png",
        sizes: "any",
      },
    ],
  };

  constructor() {
    if (MetaGenerator._instance) return MetaGenerator._instance;
    MetaGenerator._instance = this;
  }

  #log(text, ...args) {
    console.log(`\x1b[36m[${this.name}]\x1b[0m ${text}`, ...args);
  }

  #defaultMeta({
    title = DEFAULT_APP_NAME,
    description = title,
    faviconUrl = "/favicon.png",
    pageUrl = "/",
    socialImageUrl = null,
  } = {}) {
    const tags = [
      {
        tag: "link",
        props: { type: "image/svg+xml", href: faviconUrl },
        content: null,
      },
      {
        tag: "title",
        props: null,
        content: title,
      },

      {
        tag: "meta",
        props: {
          name: "title",
          content: title,
        },
      },
      {
        tag: "meta",
        props: {
          name: "description",
          content: description,
        },
      },

      // <!-- Facebook -->
      { tag: "meta", props: { property: "og:type", content: "website" } },
      {
        tag: "meta",
        props: { property: "og:url", content: pageUrl },
      },
      {
        tag: "meta",
        props: {
          property: "og:title",
          content: title,
        },
      },
      {
        tag: "meta",
        props: {
          property: "og:description",
          content: description,
        },
      },

      // <!-- Twitter -->
      {
        tag: "meta",
        props: {
          property: "twitter:card",
          content: socialImageUrl ? "summary_large_image" : "summary",
        },
      },
      {
        tag: "meta",
        props: { property: "twitter:url", content: pageUrl },
      },
      {
        tag: "meta",
        props: {
          property: "twitter:title",
          content: title,
        },
      },
      {
        tag: "meta",
        props: {
          property: "twitter:description",
          content: description,
        },
      },

      { tag: "link", props: { rel: "icon", href: faviconUrl } },
      { tag: "link", props: { rel: "apple-touch-icon", href: faviconUrl } },

      // PWA specific tags
      {
        tag: "meta",
        props: { name: "mobile-web-app-capable", content: "yes" },
      },
      {
        tag: "meta",
        props: { name: "apple-mobile-web-app-capable", content: "yes" },
      },
      {
        tag: "meta",
        props: {
          name: "apple-mobile-web-app-status-bar-style",
          content: "black-translucent",
        },
      },
      { tag: "link", props: { rel: "manifest", href: "/manifest.json" } },
    ];

    if (socialImageUrl) {
      tags.splice(
        9,
        0,
        {
          tag: "meta",
          props: {
            property: "og:image",
            content: socialImageUrl,
          },
        },
        {
          tag: "meta",
          props: {
            property: "twitter:image",
            content: socialImageUrl,
          },
        }
      );
    }

    return tags;
  }

  /**
   * HTML-escapes a value for safe insertion into attribute values or text content.
   * Meta values (e.g. meta_page_title/meta_page_favicon) are operator-controlled but
   * must never be able to break out of the attribute or element context they land in.
   * @param {any} value
   * @returns {string}
   */
  #escapeHtml(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  /**
   * Assembles Meta tags as one large string
   * @param {MetaTagDefinition[]} tagArray
   * @returns {string}
   */
  #assembleMeta(tags = []) {
    const output = [];
    for (const tag of tags) {
      let htmlString;
      htmlString = `<${tag.tag} `;

      if (tag.props !== null) {
        for (const [key, value] of Object.entries(tag.props))
          htmlString += `${this.#escapeHtml(key)}="${this.#escapeHtml(value)}" `;
      }

      if (tag.content) {
        htmlString += `>${this.#escapeHtml(tag.content)}</${tag.tag}>`;
      } else {
        htmlString += `>`;
      }
      output.push(htmlString);
    }
    return output.join("\n");
  }

  #validFaviconUrl(faviconUrl = null) {
    if (faviconUrl === null) return "/favicon.png";

    const internalFilename = extractInternalFaviconFilename(faviconUrl);
    if (internalFilename) return internalFaviconUrl(internalFilename);

    try {
      const url = new URL(faviconUrl);
      return url.toString();
    } catch {
      return "/favicon.png";
    }
  }

  #headerValue(request, headerName) {
    const value =
      request?.get?.(headerName) ||
      request?.headers?.[headerName] ||
      request?.headers?.[headerName.toLowerCase()];

    if (Array.isArray(value)) return value[0];
    if (typeof value === "string") return value.split(",")[0].trim();
    return null;
  }

  #requestOrigin(request) {
    const host =
      this.#headerValue(request, "x-forwarded-host") ||
      this.#headerValue(request, "host");
    if (!host) return "";

    const protocol =
      this.#headerValue(request, "x-forwarded-proto") ||
      request?.protocol ||
      "http";
    return `${protocol}://${host}`;
  }

  #requestUrl(request) {
    const origin = this.#requestOrigin(request);
    const path = request?.originalUrl || request?.url || "/";
    const normalizedPath = path.startsWith("/") ? path : `/${path}`;
    return origin ? `${origin}${normalizedPath}` : normalizedPath;
  }

  #absoluteUrl(request, url) {
    if (!url) return null;

    try {
      return new URL(url).toString();
    } catch {}

    const origin = this.#requestOrigin(request);
    if (!origin) return url;
    return new URL(url, origin).toString();
  }

  async #fetchConfg() {
    this.#log(`fetching custom meta tag settings...`);
    const { SystemSettings } = require("../../models/systemSettings");
    const logoFiles = require("../files/logo");

    const customTitle = await SystemSettings.getValueOrFallback(
      { label: "meta_page_title" },
      null
    );
    const faviconURL = await SystemSettings.getValueOrFallback(
      { label: "meta_page_favicon" },
      null
    );
    const customAppName = await SystemSettings.getValueOrFallback(
      { label: "custom_app_name" },
      null
    );
    const normalizedTitle =
      typeof customTitle === "string" ? customTitle.trim() : customTitle;
    const normalizedAppName =
      typeof customAppName === "string" ? customAppName.trim() : customAppName;
    const normalizedFaviconURL =
      typeof faviconURL === "string" && faviconURL.trim()
        ? faviconURL.trim()
        : null;
    const resolvedTitle =
      normalizedTitle || normalizedAppName || DEFAULT_APP_NAME;
    const lightLogoFilename = normalizedFaviconURL
      ? null
      : await logoFiles.currentLogoFilenameForTheme("light");

    this.#customConfig = {
      title: resolvedTitle,
      description: resolvedTitle,
      faviconUrl: this.#validFaviconUrl(normalizedFaviconURL),
      socialImagePath: normalizedFaviconURL
        ? this.#validFaviconUrl(normalizedFaviconURL)
        : lightLogoFilename
          ? "/api/system/logo?theme=light"
          : null,
    };

    return this.#customConfig;
  }

  /**
   * Clears the current config so it can be refetched on the server for next render.
   */
  clearConfig() {
    this.#customConfig = null;
  }

  /**
   *
   * @param {import('express').Response} response
   * @param {number} code
   * @param {import('express').Request|null} request
   */
  async generate(response, code = 200, request = null) {
    if (this.#customConfig === null) await this.#fetchConfg();
    const tags = this.#defaultMeta({
      title: this.#customConfig.title,
      description: this.#customConfig.description,
      faviconUrl: this.#customConfig.faviconUrl,
      pageUrl: this.#requestUrl(request),
      socialImageUrl: this.#absoluteUrl(
        request,
        this.#customConfig.socialImagePath
      ),
    });

    // Generated SPA pages bypass express.static's frame protection.
    response.setHeader("X-Frame-Options", "DENY");
    response.status(code).send(`
       <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            ${this.#assembleMeta(tags)}
            <script type="module" crossorigin src="/index.js"></script>
            <link rel="stylesheet" href="/index.css">
          </head>
          <body>
            <div id="root" class="h-screen"></div>
          </body>
        </html>`);
  }

  /**
   * Generates the manifest.json file for the PWA application on the fly.
   * @param {import('express').Response} response
   * @param {number} code
   */
  async generateManifest(response) {
    try {
      const { SystemSettings } = require("../../models/systemSettings");
      const metaTitle = await SystemSettings.getValueOrFallback(
        { label: "meta_page_title" },
        null
      );
      const customAppName = await SystemSettings.getValueOrFallback(
        { label: "custom_app_name" },
        null
      );
      const manifestName =
        (typeof metaTitle === "string" ? metaTitle.trim() : metaTitle) ||
        (typeof customAppName === "string"
          ? customAppName.trim()
          : customAppName) ||
        DEFAULT_APP_NAME;
      const faviconURL = await SystemSettings.getValueOrFallback(
        { label: "meta_page_favicon" },
        null
      );

      const iconUrl = this.#validFaviconUrl(faviconURL);

      const manifest = {
        name: manifestName,
        short_name: manifestName,
        display: "standalone",
        orientation: "portrait",
        start_url: "/",
        icons: [
          {
            src: iconUrl,
            sizes: "any",
          },
        ],
      };

      response.type("application/json").status(200).send(manifest).end();
    } catch (error) {
      this.#log(`error generating manifest: ${error.message}`, error);
      response
        .type("application/json")
        .status(200)
        .send(this.#defaultManifest)
        .end();
    }
  }
}

module.exports.MetaGenerator = MetaGenerator;
