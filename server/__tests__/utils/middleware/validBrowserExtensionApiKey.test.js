jest.mock("../../../models/browserExtensionApiKey", () => ({
  BrowserExtensionApiKey: { validate: jest.fn() },
}));
jest.mock("../../../models/systemSettings", () => ({
  SystemSettings: { isMultiUserMode: jest.fn() },
}));
jest.mock("../../../models/user", () => ({ User: { get: jest.fn() } }));

const {
  BrowserExtensionApiKey,
} = require("../../../models/browserExtensionApiKey");
const { SystemSettings } = require("../../../models/systemSettings");
const { User } = require("../../../models/user");
const {
  validBrowserExtensionApiKey,
} = require("../../../utils/middleware/validBrowserExtensionApiKey");

describe("browser extension API key roles", () => {
  it.each(["superadmin", "admin", "manager"])(
    "accepts a valid key owned by %s",
    async (role) => {
      SystemSettings.isMultiUserMode.mockResolvedValue(true);
      const apiKey = { user_id: 7 };
      const user = { id: 7, role, suspended: false };
      BrowserExtensionApiKey.validate.mockResolvedValue(apiKey);
      User.get.mockResolvedValue(user);
      const request = { header: () => "Bearer test-key" };
      const response = {
        locals: {},
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const next = jest.fn();

      await validBrowserExtensionApiKey(request, response, next);

      expect(next).toHaveBeenCalledTimes(1);
      expect(response.locals.user).toBe(user);
      expect(response.locals.apiKey).toBe(apiKey);
      expect(response.status).not.toHaveBeenCalled();
    }
  );

  it("rejects a default user's key", async () => {
    SystemSettings.isMultiUserMode.mockResolvedValue(true);
    BrowserExtensionApiKey.validate.mockResolvedValue({ user_id: 7 });
    User.get.mockResolvedValue({ id: 7, role: "default", suspended: false });
    const response = {
      locals: {},
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const next = jest.fn();

    await validBrowserExtensionApiKey(
      { header: () => "Bearer test-key" },
      response,
      next
    );

    expect(response.status).toHaveBeenCalledWith(403);
    expect(next).not.toHaveBeenCalled();
  });
});
