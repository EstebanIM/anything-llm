/* eslint-env jest */
const http = require("http");
const os = require("os");
const express = require("express");

process.env.STORAGE_DIR = process.env.STORAGE_DIR || os.tmpdir();

const mockState = { multiUser: true, user: null, item: null };

jest.mock("../../utils/middleware/validatedRequest", () => ({
  validatedRequest: (_request, response, next) => {
    response.locals.multiUserMode = mockState.multiUser;
    response.locals.user = mockState.user;
    next();
  },
}));
jest.mock("../../utils/middleware/multiUserProtected", () => {
  const actual = jest.requireActual(
    "../../utils/middleware/multiUserProtected"
  );
  return {
    ...actual,
    flexUserRoleValid: () => (_request, _response, next) => next(),
  };
});
jest.mock("../../utils/middleware/communityHubDownloadsEnabled", () => ({
  communityHubDownloadsEnabled: (_request, _response, next) => next(),
  communityHubItem: (_request, response, next) => {
    response.locals.bundleItem = mockState.item;
    next();
  },
}));
jest.mock("../../models/telemetry", () => ({
  Telemetry: { sendTelemetry: jest.fn().mockResolvedValue() },
}));
jest.mock("../../models/eventLogs", () => ({
  EventLogs: { logEvent: jest.fn().mockResolvedValue() },
}));

const { CommunityHub } = require("../../models/communityHub");
const { communityHubEndpoints } = require("../../endpoints/communityHub");

let server;
let baseUrl;

beforeAll(async () => {
  const app = express();
  app.use(express.json());
  const router = express.Router();
  communityHubEndpoints(router);
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
    .spyOn(CommunityHub, "applyItem")
    .mockResolvedValue({ success: true, error: null });
});

const promptItem = { id: "p1", itemType: "system-prompt", prompt: "evil" };
const slashItem = { id: "s1", itemType: "slash-command", command: "/x" };

const apply = () =>
  fetch(`${baseUrl}/community-hub/apply`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ options: { workspaceSlug: "w" } }),
  });

describe("POST /community-hub/apply honours the superadmin-only system prompt", () => {
  it("rejects a system prompt import from an admin in multi-user mode", async () => {
    Object.assign(mockState, {
      multiUser: true,
      user: { id: 2, role: "admin" },
      item: promptItem,
    });
    const res = await apply();
    expect(res.status).toBe(403);
    expect(CommunityHub.applyItem).not.toHaveBeenCalled();
  });

  it("allows a system prompt import from a superadmin", async () => {
    Object.assign(mockState, {
      multiUser: true,
      user: { id: 1, role: "superadmin" },
      item: promptItem,
    });
    const res = await apply();
    expect(res.status).toBe(200);
    expect(CommunityHub.applyItem).toHaveBeenCalled();
  });

  it("still lets an admin import a slash command", async () => {
    Object.assign(mockState, {
      multiUser: true,
      user: { id: 2, role: "admin" },
      item: slashItem,
    });
    const res = await apply();
    expect(res.status).toBe(200);
    expect(CommunityHub.applyItem).toHaveBeenCalled();
  });

  it("keeps system prompt imports open in single-user mode", async () => {
    Object.assign(mockState, {
      multiUser: false,
      user: null,
      item: promptItem,
    });
    const res = await apply();
    expect(res.status).toBe(200);
    expect(CommunityHub.applyItem).toHaveBeenCalled();
  });
});
