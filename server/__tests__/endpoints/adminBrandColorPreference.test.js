/* eslint-env jest */
const http = require("http");
const os = require("os");
const express = require("express");

process.env.STORAGE_DIR = process.env.STORAGE_DIR || os.tmpdir();

const mockSession = { user: { id: 1, role: "admin" } };

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

const { SystemSettings } = require("../../models/systemSettings");
const { adminEndpoints } = require("../../endpoints/admin");

let server;
let baseUrl;

beforeAll(async () => {
  const app = express();
  app.use(express.json());
  const router = express.Router();
  adminEndpoints(router);
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
    .spyOn(SystemSettings, "get")
    .mockImplementation(async ({ label }) =>
      label === "brand_color" ? { label, value: "#007bff" } : null
    );
});

async function read(labels) {
  const res = await fetch(
    `${baseUrl}/admin/system-preferences-for?labels=${labels}`
  );
  return res.json();
}

describe("GET /admin/system-preferences-for brand_color", () => {
  it("returns the saved brand color to admins", async () => {
    mockSession.user = { id: 1, role: "admin" };
    const { settings } = await read("brand_color");
    expect(settings.brand_color).toBe("#007bff");
  });

  it("returns the saved brand color to managers", async () => {
    mockSession.user = { id: 2, role: "manager" };
    const { settings } = await read("brand_color");
    expect(settings.brand_color).toBe("#007bff");
  });
});
