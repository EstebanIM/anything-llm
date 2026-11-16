/* eslint-env jest */
const http = require("http");
const os = require("os");
const express = require("express");

process.env.STORAGE_DIR = process.env.STORAGE_DIR || os.tmpdir();

const mockMode = { multiUser: true };

jest.mock("../../../utils/middleware/validApiKey", () => ({
  validApiKey: (_request, response, next) => {
    response.locals.multiUserMode = mockMode.multiUser;
    next();
  },
}));
jest.mock("../../../models/telemetry", () => ({
  Telemetry: { sendTelemetry: jest.fn().mockResolvedValue() },
}));
jest.mock("../../../models/eventLogs", () => ({
  EventLogs: { logEvent: jest.fn().mockResolvedValue() },
}));

const { Workspace } = require("../../../models/workspace");
const { apiWorkspaceEndpoints } = require("../../../endpoints/api/workspace");

let server;
let baseUrl;

beforeAll(async () => {
  const app = express();
  app.use(express.json());
  const router = express.Router();
  apiWorkspaceEndpoints(router);
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
    .spyOn(Workspace, "new")
    .mockResolvedValue({ workspace: { id: 1, slug: "w" }, message: null });
  jest.spyOn(Workspace, "get").mockResolvedValue({ id: 1, slug: "w" });
  jest
    .spyOn(Workspace, "update")
    .mockResolvedValue({ workspace: { id: 1, slug: "w" }, message: null });
});

const post = (route, body) =>
  fetch(`${baseUrl}${route}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

describe("API keys cannot set the workspace system prompt in multi-user mode", () => {
  it("drops openAiPrompt when creating a workspace", async () => {
    mockMode.multiUser = true;
    await post("/v1/workspace/new", { name: "W", openAiPrompt: "evil" });
    expect(Workspace.new.mock.calls[0][2]).not.toHaveProperty("openAiPrompt");
  });

  it("drops openAiPrompt when updating a workspace", async () => {
    mockMode.multiUser = true;
    await post("/v1/workspace/w/update", { openAiPrompt: "evil", name: "W2" });
    const data = Workspace.update.mock.calls[0][1];
    expect(data).not.toHaveProperty("openAiPrompt");
    expect(data.name).toBe("W2");
  });

  it("keeps openAiPrompt in single-user mode", async () => {
    mockMode.multiUser = false;
    await post("/v1/workspace/w/update", { openAiPrompt: "ok" });
    expect(Workspace.update.mock.calls[0][1].openAiPrompt).toBe("ok");
  });
});
