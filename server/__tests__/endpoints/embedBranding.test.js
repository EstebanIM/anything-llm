/* eslint-env jest */
const http = require("http");
const os = require("os");
const express = require("express");

process.env.STORAGE_DIR = process.env.STORAGE_DIR || os.tmpdir();

const mockSettings = {};
let mockHasLogo = true;

jest.mock("../../models/embedConfig", () => ({
  EmbedConfig: {
    getWithWorkspace: jest.fn(async ({ uuid }) =>
      uuid === "valid-embed" ? { id: 1, uuid, workspace: { id: 1 } } : null
    ),
  },
}));
jest.mock("../../models/systemSettings", () => ({
  SystemSettings: {
    get: jest.fn(async ({ label }) =>
      label in mockSettings ? { label, value: mockSettings[label] } : null
    ),
  },
}));
jest.mock("../../utils/files/logo", () => ({
  currentLogoFilenameForTheme: jest.fn(async () =>
    mockHasLogo ? "logo-light.png" : null
  ),
}));

const { embeddedEndpoints } = require("../../endpoints/embed");

let server;
let port;

beforeAll(async () => {
  const app = express();
  app.use(express.json());
  const router = express.Router();
  embeddedEndpoints(router);
  app.use("/api", router);
  server = await new Promise((resolve) => {
    const s = http.createServer(app);
    s.listen(0, () => resolve(s));
  });
  port = server.address().port;
});

afterAll(() => new Promise((resolve) => server.close(resolve)));

beforeEach(() => {
  for (const key of Object.keys(mockSettings)) delete mockSettings[key];
  Object.assign(mockSettings, {
    custom_app_name: "IASMAR",
    brand_color: "#007bff",
    login_powered_by: "Plataforma interna de IASMAR",
  });
  mockHasLogo = true;
});

async function branding(embedId = "valid-embed", headers = {}) {
  const res = await fetch(
    `http://127.0.0.1:${port}/api/embed/${embedId}/branding`,
    { headers }
  );
  const body = res.status === 200 ? await res.json() : null;
  return { status: res.status, body };
}

describe("GET /api/embed/:embedId/branding", () => {
  it("returns the platform branding", async () => {
    const { status, body } = await branding();
    expect(status).toBe(200);
    expect(body.assistantName).toBe("IASMAR");
    expect(body.buttonColor).toBe("#007bff");
    expect(body.userBgColor).toBe("#007bff");
    expect(body.sponsorText).toBe("Plataforma interna de IASMAR");
    expect(body.brandImageUrl).toMatch(/\/api\/system\/logo\?theme=light$/);
  });

  it("falls back to IASMAR when no app name is configured", async () => {
    delete mockSettings.custom_app_name;
    const { body } = await branding();
    expect(body.assistantName).toBe("IASMAR");
  });

  it("sends no image without a custom logo", async () => {
    mockHasLogo = false;
    const { body } = await branding();
    expect(body.brandImageUrl).toBeNull();
  });

  it("ignores x-forwarded-host when building the logo URL", async () => {
    const { body } = await branding("valid-embed", {
      "X-Forwarded-Host": "evil.example",
    });
    expect(body.brandImageUrl).not.toContain("evil.example");
    expect(body.sponsorLink || "").not.toContain("evil.example");
  });

  it("does not send the unused assistantIcon field", async () => {
    const { body } = await branding();
    expect(body).not.toHaveProperty("assistantIcon");
  });

  it("answers 404 for an unknown embed", async () => {
    const { status } = await branding("missing-embed");
    expect(status).toBe(404);
  });
});
