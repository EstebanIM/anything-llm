const { v4: uuidv4 } = require("uuid");
const { reqBody, multiUserMode } = require("../../utils/http");
const { Telemetry } = require("../../models/telemetry");
const { streamChatWithForEmbed } = require("../../utils/chats/embed");
const { EmbedChats } = require("../../models/embedChats");
const {
  validEmbedConfig,
  canRespond,
  canAccessHistory,
  setConnectionMeta,
} = require("../../utils/middleware/embedMiddleware");
const {
  convertToChatHistory,
  writeResponseChunk,
} = require("../../utils/helpers/chat/responses");

function embeddedEndpoints(app) {
  if (!app) return;

  app.post(
    "/embed/:embedId/stream-chat",
    [validEmbedConfig, setConnectionMeta, canRespond],
    async (request, response) => {
      try {
        const embed = response.locals.embedConfig;
        const {
          sessionId,
          message,
          // optional keys for override of defaults if enabled.
          prompt = null,
          model = null,
          temperature = null,
          username = null,
        } = reqBody(request);

        response.setHeader("Cache-Control", "no-cache");
        response.setHeader("Content-Type", "text/event-stream");
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Connection", "keep-alive");
        response.flushHeaders();

        await streamChatWithForEmbed(response, embed, message, sessionId, {
          promptOverride: prompt,
          modelOverride: model,
          temperatureOverride: temperature,
          username,
        });
        await Telemetry.sendTelemetry("embed_sent_chat", {
          multiUserMode: multiUserMode(response),
          LLMSelection: process.env.LLM_PROVIDER || "openai",
          Embedder: process.env.EMBEDDING_ENGINE || "inherit",
          VectorDbSelection: process.env.VECTOR_DB || "lancedb",
        });
        response.end();
      } catch (e) {
        console.error(e);
        writeResponseChunk(response, {
          id: uuidv4(),
          type: "abort",
          sources: [],
          textResponse: null,
          close: true,
          error: e.message,
        });
        response.end();
      }
    }
  );

  // Public branding read by the embed widget on load, so it shows the same
  // name, logo and brand color as the platform. Must be declared before
  // "/embed/:embedId/:sessionId" or "branding" would be taken as a session id.
  app.get(
    "/embed/:embedId/branding",
    [validEmbedConfig],
    async (request, response) => {
      try {
        const { SystemSettings } = require("../../models/systemSettings");
        const {
          currentLogoFilenameForTheme,
        } = require("../../utils/files/logo");
        const readSetting = async (label) =>
          (await SystemSettings.get({ label }))?.value || null;

        const { DEFAULT_APP_NAME } = require("../../utils/brand");
        const assistantName =
          (await readSetting("custom_app_name")) || DEFAULT_APP_NAME;
        const brandColor = await readSetting("brand_color");
        const loginPoweredBy = await readSetting("login_powered_by");

        // The widget renders on a white background, so it uses the light-theme
        // logo; null unless a custom logo was uploaded.
        const hasCustomLogo = !!(await currentLogoFilenameForTheme("light"));

        // Built from the request itself; forwarded headers are not trusted here.
        const host = request.get("host");
        const origin = host ? `${request.protocol}://${host}` : "";
        const brandImageUrl =
          hasCustomLogo && origin
            ? `${origin}/api/system/logo?theme=light`
            : null;

        const hasSponsor = !!loginPoweredBy;
        response.status(200).json({
          assistantName,
          brandImageUrl,
          buttonColor: brandColor,
          userBgColor: brandColor,
          sponsorText: hasSponsor ? loginPoweredBy : null,
          sponsorLink: hasSponsor && origin ? origin : null,
          noSponsor: !hasSponsor,
        });
      } catch (e) {
        console.error(e.message, e);
        // The widget falls back to its neutral defaults.
        response.status(200).json({});
      }
    }
  );

  app.get(
    "/embed/:embedId/:sessionId",
    [validEmbedConfig, canAccessHistory],
    async (request, response) => {
      try {
        const { sessionId } = request.params;
        const embed = response.locals.embedConfig;
        const history = await EmbedChats.forEmbedByUser(
          embed.id,
          sessionId,
          null,
          null,
          true
        );

        response.status(200).json({ history: convertToChatHistory(history) });
      } catch (e) {
        console.error(e.message, e);
        response.sendStatus(500).end();
      }
    }
  );

  app.delete(
    "/embed/:embedId/:sessionId",
    [validEmbedConfig, canAccessHistory],
    async (request, response) => {
      try {
        const { sessionId } = request.params;
        const embed = response.locals.embedConfig;

        await EmbedChats.markHistoryInvalid(embed.id, sessionId);
        response.status(200).end();
      } catch (e) {
        console.error(e.message, e);
        response.sendStatus(500).end();
      }
    }
  );
}

module.exports = { embeddedEndpoints };
