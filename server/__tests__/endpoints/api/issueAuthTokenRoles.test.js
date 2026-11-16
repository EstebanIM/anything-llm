/* eslint-env jest */
const http = require("http");
const express = require("express");

jest.mock("../../../utils/middleware/validApiKey", () => ({
  validApiKey: (_request, response, next) => {
    response.locals.multiUserMode = true;
    next();
  },
}));
jest.mock("../../../utils/middleware/simpleSSOEnabled", () => ({
  simpleSSOEnabled: (_request, _response, next) => next(),
}));
jest.mock("../../../models/user", () => ({ User: { get: jest.fn() } }));
jest.mock("../../../models/temporaryAuthToken", () => ({
  TemporaryAuthToken: {
    issue: jest.fn().mockResolvedValue({ token: "tmp-token", error: null }),
  },
}));

const { User } = require("../../../models/user");
const { TemporaryAuthToken } = require("../../../models/temporaryAuthToken");
const {
  apiUserManagementEndpoints,
} = require("../../../endpoints/api/userManagement");

let server;
let baseUrl;

beforeAll(async () => {
  const app = express();
  const router = express.Router();
  apiUserManagementEndpoints(router);
  app.use("/api", router);
  server = await new Promise((resolve) => {
    const s = http.createServer(app);
    s.listen(0, () => resolve(s));
  });
  baseUrl = `http://127.0.0.1:${server.address().port}/api`;
});

afterAll(() => new Promise((resolve) => server.close(resolve)));
beforeEach(() => jest.clearAllMocks());

describe("GET /v1/users/:id/issue-auth-token", () => {
  it("does not issue a login token for a superadmin", async () => {
    User.get.mockResolvedValue({ id: 1, role: "superadmin" });
    const res = await fetch(`${baseUrl}/v1/users/1/issue-auth-token`);
    expect(res.status).toBe(403);
    expect(TemporaryAuthToken.issue).not.toHaveBeenCalled();
  });

  it("still issues a token for a default user", async () => {
    User.get.mockResolvedValue({ id: 2, role: "default" });
    const res = await fetch(`${baseUrl}/v1/users/2/issue-auth-token`);
    expect(res.status).toBe(200);
    expect(TemporaryAuthToken.issue).toHaveBeenCalled();
  });
});
