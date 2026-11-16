const fs = require("fs");
const path = require("path");
const swaggerUi = require("swagger-ui-express");
const { SystemSettings } = require("../models/systemSettings");

const {
  DEFAULT_APP_NAME: DEFAULT_SWAGGER_BRAND_NAME,
} = require("../utils/brand");

async function getSwaggerBrandName() {
  const brandName = await SystemSettings.getValueOrFallback(
    { label: "custom_app_name" },
    DEFAULT_SWAGGER_BRAND_NAME
  );
  return typeof brandName === "string" && brandName.trim()
    ? brandName.trim()
    : DEFAULT_SWAGGER_BRAND_NAME;
}

// The brand name is admin/manager input: escape it for the HTML title and keep
// it from closing the inline <script> that swagger-ui-express renders.
function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function inlineScriptJson(value) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

function getSwaggerCustomJs(brandName, environment) {
  return [
    `window.SWAGGER_DOCS_ENV = ${inlineScriptJson(environment)};`,
    `window.SWAGGER_BRAND_NAME = ${inlineScriptJson(brandName)};`,
    "",
    fs.readFileSync(path.resolve(__dirname, "index.js"), "utf8"),
  ].join("\n");
}

function getSwaggerOptions(brandName) {
  return {
    customCss: [
      fs.readFileSync(path.resolve(__dirname, "index.css")),
      fs.readFileSync(path.resolve(__dirname, "dark-swagger.css")),
    ].join("\n\n\n"),
    customSiteTitle: `${escapeHtml(brandName)} Developer API Documentation`,
    customfavIcon: faviconUrl(),
  };
}

function replaceBrandedText(value, brandName) {
  return value
    .replace(/AnythinglLM/g, brandName)
    .replace(/AnythingLLM/g, brandName)
    .replace(/anythingllm\.com/g, "example.com")
    .replace(/anythingllm\.txt/g, "example.txt")
    .replace(/anything-llm\/collector/g, "app/collector");
}

function replaceOpenApiValue(value, brandName) {
  if (typeof value === "string") {
    return replaceBrandedText(value, brandName);
  }

  if (Array.isArray(value)) {
    return value.map((item) => replaceOpenApiValue(item, brandName));
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [
        key,
        replaceOpenApiValue(item, brandName),
      ])
    );
  }

  return value;
}

function getBrandedOpenApiDocument(openApiDocument, brandName) {
  const brandedDocument = replaceOpenApiValue(openApiDocument, brandName);
  if (!brandedDocument?.info) return brandedDocument;

  return {
    ...brandedDocument,
    info: {
      ...brandedDocument.info,
      title: `${brandName} Developer API`,
      description: `API endpoints that enable programmatic reading, writing, and updating of your ${brandName} instance. UI supplied by Swagger.io.`,
    },
  };
}

function faviconUrl() {
  return process.env.NODE_ENV === "production"
    ? "/public/favicon.png"
    : "http://localhost:3000/public/favicon.png";
}

function useSwagger(app) {
  if (process.env.DISABLE_SWAGGER_DOCS === "true") {
    console.log(
      `\x1b[33m[SWAGGER DISABLED]\x1b[0m Swagger documentation is disabled via DISABLE_SWAGGER_DOCS environment variable.`
    );
    return;
  }
  app.use("/api/docs", swaggerUi.serve);
  app.get("/api/docs", async (_, response) => {
    // #swagger.ignore = true
    const swaggerDocument = require("./openapi.json");
    const brandName = await getSwaggerBrandName();
    const brandedDocument = getBrandedOpenApiDocument(
      swaggerDocument,
      brandName
    );
    const environment =
      process.env.NODE_ENV === "production" ? "production" : "development";

    return response.send(
      swaggerUi.generateHTML(brandedDocument, {
        ...getSwaggerOptions(brandName),
        customJsStr: getSwaggerCustomJs(brandName, environment),
      })
    );
  });
}

module.exports = {
  faviconUrl,
  getBrandedOpenApiDocument,
  getSwaggerBrandName,
  getSwaggerCustomJs,
  getSwaggerOptions,
  useSwagger,
};
