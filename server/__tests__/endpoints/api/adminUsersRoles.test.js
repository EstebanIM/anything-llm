/* eslint-env jest */
const http = require("http");
const express = require("express");

jest.mock("../../../models/systemSettings", () => ({
  SystemSettings: { isMultiUserMode: jest.fn().mockResolvedValue(true) },
}));
jest.mock("../../../models/apiKeys", () => ({
  ApiKey: {
    get: jest.fn(async ({ secret }) =>
      secret === "valid-key" ? { id: 1, secret } : null
    ),
  },
}));
jest.mock("../../../models/eventLogs", () => ({
  EventLogs: { logEvent: jest.fn().mockResolvedValue() },
}));
jest.mock("../../../models/user", () => ({
  User: {
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
    count: jest.fn(),
  },
}));

const { User } = require("../../../models/user");
const { apiAdminEndpoints } = require("../../../endpoints/api/admin");

const AUTH = {
  Authorization: "Bearer valid-key",
  "Content-Type": "application/json",
};

let server;
let baseUrl;

beforeAll(async () => {
  const app = express();
  app.use(express.json());
  const router = express.Router();
  apiAdminEndpoints(router);
  app.use("/api", router);
  server = await new Promise((resolve) => {
    const s = http.createServer(app);
    s.listen(0, () => resolve(s));
  });
  baseUrl = `http://127.0.0.1:${server.address().port}/api`;
});

afterAll(() => new Promise((resolve) => server.close(resolve)));

beforeEach(() => {
  jest.clearAllMocks();
  jest.spyOn(console, "error").mockImplementation(() => {});
});

afterEach(() => console.error.mockRestore?.());

async function call(method, route, body) {
  const res = await fetch(`${baseUrl}${route}`, {
    method,
    headers: AUTH,
    body: body ? JSON.stringify(body) : undefined,
  });
  return { status: res.status, body: await res.json().catch(() => null) };
}

describe("API admin endpoints never touch superadmins", () => {
  it("refuses to create a superadmin", async () => {
    const res = await call("POST", "/v1/admin/users/new", {
      username: "x",
      password: "y12345678",
      role: "superadmin",
    });
    expect(res.status).toBe(400);
    expect(User.create).not.toHaveBeenCalled();
  });

  it("refuses to promote a user to superadmin", async () => {
    User.get.mockResolvedValue({ id: 5, role: "default" });
    const res = await call("POST", "/v1/admin/users/5", { role: "superadmin" });
    expect(res.status).toBe(400);
    expect(User.update).not.toHaveBeenCalled();
  });

  it("refuses to modify a superadmin", async () => {
    User.get.mockResolvedValue({ id: 6, role: "superadmin" });
    const res = await call("POST", "/v1/admin/users/6", { username: "z" });
    expect(res.status).toBe(400);
    expect(User.update).not.toHaveBeenCalled();
  });

  it("refuses to delete a superadmin", async () => {
    User.get.mockResolvedValue({ id: 6, role: "superadmin" });
    const res = await call("DELETE", "/v1/admin/users/6");
    expect(res.status).toBe(400);
    expect(User.delete).not.toHaveBeenCalled();
  });

  it("still creates a default user", async () => {
    User.create.mockResolvedValue({
      user: { id: 9, username: "x", role: "default" },
      error: null,
    });
    const res = await call("POST", "/v1/admin/users/new", {
      username: "x",
      password: "y12345678",
      role: "default",
    });
    expect(res.status).toBe(200);
    expect(User.create).toHaveBeenCalled();
  });
});
