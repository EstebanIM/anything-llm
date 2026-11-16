jest.mock("../../../models/systemSettings", () => ({
  SystemSettings: { isMultiUserMode: jest.fn() },
}));
jest.mock("../../../models/user", () => ({
  User: { count: jest.fn(), _where: jest.fn(), _update: jest.fn() },
}));

const { SystemSettings } = require("../../../models/systemSettings");
const { User } = require("../../../models/user");
const { ensureSuperAdmin } = require("../../../utils/boot/ensureSuperAdmin");

describe("ensureSuperAdmin", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => jest.restoreAllMocks());

  it("promotes every admin when no superadmin exists", async () => {
    SystemSettings.isMultiUserMode.mockResolvedValue(true);
    User.count.mockResolvedValue(0);
    User._where.mockResolvedValue([{ id: 1 }, { id: 2 }]);

    await ensureSuperAdmin();

    expect(User._update).toHaveBeenCalledWith(1, { role: "superadmin" });
    expect(User._update).toHaveBeenCalledWith(2, { role: "superadmin" });
  });

  it("does nothing when a superadmin already exists", async () => {
    SystemSettings.isMultiUserMode.mockResolvedValue(true);
    User.count.mockResolvedValue(1);

    await ensureSuperAdmin();

    expect(User._update).not.toHaveBeenCalled();
  });

  it("does nothing in single-user mode", async () => {
    SystemSettings.isMultiUserMode.mockResolvedValue(false);

    await ensureSuperAdmin();

    expect(User.count).not.toHaveBeenCalled();
    expect(User._update).not.toHaveBeenCalled();
  });
});
