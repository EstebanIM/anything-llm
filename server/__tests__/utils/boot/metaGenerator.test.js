const path = require("path");

process.env.STORAGE_DIR =
  process.env.STORAGE_DIR || path.resolve(__dirname, "../../../storage");

const { MetaGenerator } = require("../../../utils/boot/MetaGenerator");
const { SystemSettings } = require("../../../models/systemSettings");
const logoFiles = require("../../../utils/files/logo");

function mockResponse() {
  const response = {
    setHeader: jest.fn(),
    status: jest.fn(() => response),
    type: jest.fn(() => response),
    send: jest.fn(() => response),
    end: jest.fn(() => response),
  };
  return response;
}

function mockRequest(path = "/shared/page?x=1") {
  return {
    protocol: "http",
    originalUrl: path,
    get: jest.fn((header) => {
      if (header === "x-forwarded-proto") return "https";
      if (header === "x-forwarded-host") return "app.example.com";
      if (header === "host") return "localhost:3001";
      return undefined;
    }),
  };
}

async function renderMeta({
  settings = {},
  logoFilename = null,
  path = "/shared/page?x=1",
} = {}) {
  jest
    .spyOn(SystemSettings, "getValueOrFallback")
    .mockImplementation(async ({ label }, fallback = null) => {
      return Object.prototype.hasOwnProperty.call(settings, label)
        ? settings[label]
        : fallback;
    });
  jest
    .spyOn(logoFiles, "currentLogoFilenameForTheme")
    .mockResolvedValue(logoFilename);

  const generator = new MetaGenerator();
  generator.clearConfig();
  const response = mockResponse();
  await generator.generate(response, 200, mockRequest(path));
  expect(response.setHeader).toHaveBeenCalledWith("X-Frame-Options", "DENY");
  return response.send.mock.calls[0][0];
}

describe("MetaGenerator social previews", () => {
  afterEach(() => {
    jest.restoreAllMocks();
    new MetaGenerator().clearConfig();
  });

  it("renders generic fallback metadata without AnythingLLM social preview values", async () => {
    const html = await renderMeta({
      settings: {
        meta_page_title: null,
        meta_page_favicon: null,
        custom_app_name: null,
      },
    });

    expect(html).toContain("IASMAR");
    expect(html).toContain(
      'property="og:url" content="https://app.example.com/shared/page?x=1"'
    );
    expect(html).not.toMatch(/anythingllm\.com|promo\.png|AnythingLLM/);
    expect(html).not.toContain('property="og:image"');
    expect(html).not.toContain('property="twitter:image"');
  });

  it("uses escaped meta page title for title and social title tags", async () => {
    const html = await renderMeta({
      settings: {
        meta_page_title: 'Avatar "Expert" & Suite',
        meta_page_favicon: null,
        custom_app_name: "Ignored Name",
      },
    });

    expect(html).toContain("Avatar &quot;Expert&quot; &amp; Suite");
    expect(html).toContain(
      'property="og:title" content="Avatar &quot;Expert&quot; &amp; Suite"'
    );
    expect(html).toContain(
      'property="twitter:title" content="Avatar &quot;Expert&quot; &amp; Suite"'
    );
  });

  it("uses custom app name when no meta page title is configured", async () => {
    const html = await renderMeta({
      settings: {
        meta_page_title: null,
        meta_page_favicon: null,
        custom_app_name: "C-766 AI",
      },
    });

    expect(html).toContain("<title >C-766 AI</title>");
    expect(html).toContain('property="og:title" content="C-766 AI"');
    expect(html).toContain('property="twitter:title" content="C-766 AI"');
  });

  it("uses the configured favicon URL as social preview image", async () => {
    const html = await renderMeta({
      settings: {
        meta_page_title: "IASMAR",
        meta_page_favicon: "https://cdn.example.com/avatar.png",
      },
    });

    expect(html).toContain(
      'property="og:image" content="https://cdn.example.com/avatar.png"'
    );
    expect(html).toContain(
      'property="twitter:image" content="https://cdn.example.com/avatar.png"'
    );
  });

  it("uses an uploaded internal favicon path for favicon tags and absolute social preview image", async () => {
    const html = await renderMeta({
      settings: {
        meta_page_title: "IASMAR",
        meta_page_favicon: "/api/system/favicon?filename=favicon-avatar.png",
      },
    });

    expect(html).toContain(
      'rel="icon" href="/api/system/favicon?filename=favicon-avatar.png"'
    );
    expect(html).toContain(
      'rel="apple-touch-icon" href="/api/system/favicon?filename=favicon-avatar.png"'
    );
    expect(html).toContain(
      'property="og:image" content="https://app.example.com/api/system/favicon?filename=favicon-avatar.png"'
    );
    expect(html).toContain(
      'property="twitter:image" content="https://app.example.com/api/system/favicon?filename=favicon-avatar.png"'
    );
  });

  it("uses a custom light logo URL as social preview image when no favicon is configured", async () => {
    const html = await renderMeta({
      settings: {
        meta_page_title: "IASMAR",
        meta_page_favicon: null,
      },
      logoFilename: "custom-light-logo.png",
    });

    expect(html).toContain(
      'property="og:image" content="https://app.example.com/api/system/logo?theme=light"'
    );
    expect(html).toContain(
      'property="twitter:image" content="https://app.example.com/api/system/logo?theme=light"'
    );
  });

  it("uses an uploaded internal favicon path in manifest icons", async () => {
    jest
      .spyOn(SystemSettings, "getValueOrFallback")
      .mockImplementation(async ({ label }, fallback = null) => {
        const settings = {
          meta_page_title: "IASMAR",
          meta_page_favicon: "/api/system/favicon?filename=favicon-avatar.png",
          custom_app_name: null,
        };
        return Object.prototype.hasOwnProperty.call(settings, label)
          ? settings[label]
          : fallback;
      });

    const generator = new MetaGenerator();
    generator.clearConfig();
    const response = mockResponse();
    await generator.generateManifest(response);

    const manifest = response.send.mock.calls[0][0];
    expect(manifest.icons[0].src).toBe(
      "/api/system/favicon?filename=favicon-avatar.png"
    );
  });
});
