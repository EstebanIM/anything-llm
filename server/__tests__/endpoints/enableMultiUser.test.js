/* eslint-env jest */
const http = require("http");
const os = require("os");
const express = require("express");

process.env.STORAGE_DIR = process.env.STORAGE_DIR || os.tmpdir();

jest.mock("../../utils/middleware/validatedRequest", () => ({
  validatedRequest: (_request, response, next) => {
    response.locals.multiUserMode = false;
    next();
  },
}));
jest.mock("../../utils/helpers/updateENV", () => ({
  ...jest.requireActual("../../utils/helpers/updateENV"),
  updateENV: jest.fn().mockResolvedValue({}),
}));

const { User } = require("../../models/user");
const { SystemSettings } = require("../../models/systemSettings");
const { BrowserExtensionApiKey } = require("../../models/browserExtensionApiKey");
const { Memory } = require("../../models/memory");
const { WorkspaceChats } = require("../../models/workspaceChats");
const { WorkspaceThread } = require("../../models/workspaceThread");
const { WorkspaceParsedFiles } = require("../../models/workspaceParsedFiles");
const { MobileDevice } = require("../../models/mobileDevice");
const { SlashCommandPresets } = require("../../models/slashCommandsPresets");
const { AgentSkillWhitelist } = require("../../models/agentSkillWhitelist");
const { Telemetry } = require("../../models/telemetry");
const { EventLogs } = require("../../models/eventLogs");
const { systemEndpoints } = require("../../endpoints/system");

let server;
let baseUrl;

beforeAll(async () => {
  const app = express();
  app.use(express.json());
  const router = express.Router();
  systemEndpoints(router);
  app.use("/api", router);
  server = await new Promise((resolve) => {
    const s = http.createServer(app);
    s.listen(0, () => resolve(s));
  });
  baseUrl = `http://127.0.0.1:${server.address().port}/api`;
});

afterAll(() => new Promise((resolve) => server.close(resolve)));

beforeEach(() => {
  jest.restoreAllMocks();
  jest
    .spyOn(User, "create")
    .mockResolvedValue({ user: { id: 1, username: "root" }, error: null });
  jest.spyOn(SystemSettings, "_updateSettings").mockResolvedValue({});
  for (const [model, fn] of [
    [BrowserExtensionApiKey, "migrateApiKeysToMultiUser"],
    [Memory, "migrateToMultiUser"],
    [WorkspaceChats, "migrateToMultiUser"],
    [WorkspaceThread, "migrateToMultiUser"],
    [WorkspaceParsedFiles, "migrateToMultiUser"],
    [MobileDevice, "migrateDevicesToMultiUser"],
    [SlashCommandPresets, "migrateToMultiUser"],
    [AgentSkillWhitelist, "clearSingleUserWhitelist"],
    [Telemetry, "sendTelemetry"],
    [EventLogs, "logEvent"],
  ])
    if (typeof model[fn] === "function")
      jest.spyOn(model, fn).mockResolvedValue();
});

describe("POST /system/enable-multi-user", () => {
  it("creates the first account as a superadmin", async () => {
    const res = await fetch(`${baseUrl}/system/enable-multi-user`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: "root", password: "clave-segura-1" }),
    });
    expect(res.status).toBe(200);
    expect(User.create).toHaveBeenCalledWith(
      expect.objectContaining({ role: "superadmin" })
    );
  });
});
