/* eslint-env jest */
const fs = require("fs");
const http = require("http");
const os = require("os");
const path = require("path");
const express = require("express");

const storageDir = fs.mkdtempSync(path.join(os.tmpdir(), "favicon-upload-"));
const assetsDir = path.join(storageDir, "assets");
const originalEnv = { STORAGE_DIR: process.env.STORAGE_DIR, NODE_ENV: process.env.NODE_ENV };
process.env.STORAGE_DIR = storageDir;
process.env.NODE_ENV = "production";

jest.mock("../../utils/middleware/validatedRequest", () => ({
  validatedRequest: (_request, _response, next) => next(),
}));
jest.mock("../../utils/middleware/multiUserProtected", () => {
  const actual = jest.requireActual(
    "../../utils/middleware/multiUserProtected"
  );
  return {
    ...actual,
    flexUserRoleValid: () => (_request, _response, next) => next(),
    strictMultiUserRoleValid: () => (_request, _response, next) => next(),
  };
});

const { SystemSettings } = require("../../models/systemSettings");
const { systemEndpoints } = require("../../endpoints/system");

let server;
let baseUrl;

beforeAll(async () => {
  const app = express();
  const router = express.Router();
  systemEndpoints(router);
  app.use("/api", router);
  server = await new Promise((resolve) => {
    const s = http.createServer(app);
    s.listen(0, () => resolve(s));
  });
  baseUrl = `http://127.0.0.1:${server.address().port}/api`;
});

afterAll(async () => {
  await new Promise((resolve) => server.close(resolve));
  fs.rmSync(storageDir, { recursive: true, force: true });
  for (const [key, value] of Object.entries(originalEnv)) {
    if (value === undefined) delete process.env[key];
    else process.env[key] = value;
  }
});

beforeEach(() => {
  jest.restoreAllMocks();
  fs.rmSync(assetsDir, { recursive: true, force: true });
  fs.mkdirSync(assetsDir, { recursive: true });
  jest.spyOn(SystemSettings, "getValueOrFallback").mockResolvedValue(null);
  jest
    .spyOn(SystemSettings, "updateSettings")
    .mockResolvedValue({ success: true, error: null });
});

async function upload(filename, type, content) {
  const form = new FormData();
  form.append("favicon", new Blob([content], { type }), filename);
  const res = await fetch(`${baseUrl}/system/upload-favicon`, {
    method: "POST",
    body: form,
  });
  return { status: res.status, body: await res.json().catch(() => null) };
}

describe("POST /system/upload-favicon", () => {
  it("rejects an HTML file sent as an image and leaves nothing behind", async () => {
    const res = await upload("x.html", "image/png", "<script>alert(1)</script>");
    expect(res.status).toBe(400);
    expect(fs.readdirSync(assetsDir)).toEqual([]);
    expect(SystemSettings.updateSettings).not.toHaveBeenCalled();
  });

  it("does not overwrite an existing asset with the same name", async () => {
    fs.writeFileSync(path.join(assetsDir, "anything-llm.png"), "LOGO");
    const res = await upload("anything-llm.png", "image/png", "ICON");
    expect(res.status).toBe(200);
    expect(fs.readFileSync(path.join(assetsDir, "anything-llm.png"), "utf8")).toBe(
      "LOGO"
    );
  });
});
