/* eslint-env jest */
const http = require("http");
const os = require("os");
const express = require("express");

process.env.STORAGE_DIR = process.env.STORAGE_DIR || os.tmpdir();

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
jest.mock("../../models/telemetry", () => ({
  Telemetry: { sendTelemetry: jest.fn().mockResolvedValue() },
}));
jest.mock("../../models/eventLogs", () => ({
  EventLogs: { logEvent: jest.fn().mockResolvedValue() },
}));

const { Workspace } = require("../../models/workspace");
const { workspaceEndpoints } = require("../../endpoints/workspaces");

let server;
let baseUrl;

beforeAll(async () => {
  const app = express();
  app.use(express.json());
  const router = express.Router();
  workspaceEndpoints(router);
  app.use("/api", router);
  server = await new Promise((resolve) => {
    const s = http.createServer(app);
    s.listen(0, () => resolve(s));
  });
  baseUrl = `http://127.0.0.1:${server.address().port}/api`;
});

afterAll(() => new Promise((resolve) => server.close(resolve)));

describe("POST /workspace/new", () => {
  it("creates the workspace inside the selected folder", async () => {
    const spy = jest
      .spyOn(Workspace, "new")
      .mockResolvedValue({ workspace: { id: 1, name: "W" }, message: null });

    const res = await fetch(`${baseUrl}/workspace/new`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "W", folderId: 3 }),
    });

    expect(res.status).toBe(200);
    expect(spy).toHaveBeenCalledWith(
      "W",
      undefined,
      expect.objectContaining({ folderId: 3 })
    );
    spy.mockRestore();
  });
});
