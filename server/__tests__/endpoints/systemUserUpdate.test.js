/* eslint-env jest */
const http = require("http");
const os = require("os");
const express = require("express");
const bcrypt = require("bcryptjs");

process.env.STORAGE_DIR = process.env.STORAGE_DIR || os.tmpdir();

const mockSession = { user: null };

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
jest.mock("../../utils/http", () => ({
  ...jest.requireActual("../../utils/http"),
  userFromSession: jest.fn(async () => mockSession.user),
}));
jest.mock("../../utils/files/multer", () => ({
  ...jest.requireActual("../../utils/files/multer"),
  handlePfpUpload: (request, _response, next) => {
    request.randomFileName = "pfp.png";
    next();
  },
}));

const { User } = require("../../models/user");
const { systemEndpoints } = require("../../endpoints/system");

const CURRENT_HASH = bcrypt.hashSync("actual123", 4);
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
    .spyOn(User, "_get")
    .mockResolvedValue({ id: 3, password: CURRENT_HASH });
  jest
    .spyOn(User, "update")
    .mockResolvedValue({ success: true, error: null });
});

function as(role) {
  mockSession.user = { id: 3, username: "ana", role };
}

async function post(route, body) {
  const res = await fetch(`${baseUrl}${route}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body || {}),
  });
  return { status: res.status, body: await res.json().catch(() => null) };
}

describe("POST /system/user", () => {
  it("does not let a default user change their username", async () => {
    as("default");
    const res = await post("/system/user", { username: "nuevo" });
    expect(res.status).toBe(403);
    expect(User.update).not.toHaveBeenCalled();
  });

  it("lets a default user change their password with the right current one", async () => {
    as("default");
    const res = await post("/system/user", {
      password: "nueva12345",
      currentPassword: "actual123",
    });
    expect(res.status).toBe(200);
    expect(User.update).toHaveBeenCalledWith(3, { password: "nueva12345" });
  });

  it.each(["default", "admin"])(
    "rejects a wrong current password for %s",
    async (role) => {
      as(role);
      const res = await post("/system/user", {
        password: "nueva12345",
        currentPassword: "mala",
      });
      expect(res.status).toBe(403);
      expect(User.update).not.toHaveBeenCalled();
    }
  );

  it("requires the current password to set a new one", async () => {
    as("admin");
    const res = await post("/system/user", { password: "nueva12345" });
    expect(res.status).toBe(403);
    expect(User.update).not.toHaveBeenCalled();
  });

  it("does not rename the user when no username is sent", async () => {
    as("admin");
    await post("/system/user", {
      password: "nueva12345",
      currentPassword: "actual123",
    });
    expect(User.update.mock.calls[0][1]).not.toHaveProperty("username");
  });
});

describe("profile picture", () => {
  it("does not let a default user upload a profile picture", async () => {
    as("default");
    const res = await post("/system/upload-pfp");
    expect(res.status).toBe(403);
  });

  it("does not let a default user remove their profile picture", async () => {
    as("default");
    const res = await fetch(`${baseUrl}/system/remove-pfp`, {
      method: "DELETE",
    });
    expect(res.status).toBe(403);
  });
});
