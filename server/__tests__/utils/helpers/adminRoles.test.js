jest.mock("../../../models/user", () => ({ User: { count: jest.fn() } }));

const { User } = require("../../../models/user");
const {
  validRoleSelection,
  validCanModify,
  canModifyAdmin,
} = require("../../../utils/helpers/admin");

const superadmin = { role: "superadmin" };
const admin = { role: "admin" };
const manager = { role: "manager" };

describe("validRoleSelection", () => {
  it("lets a superadmin assign the superadmin role", () => {
    expect(validRoleSelection(superadmin, { role: "superadmin" }).valid).toBe(
      true
    );
  });

  it("does not let an admin assign the superadmin role", () => {
    expect(validRoleSelection(admin, { role: "superadmin" }).valid).toBe(false);
  });

  it("lets an admin assign admin, manager and default", () => {
    for (const role of ["admin", "manager", "default"])
      expect(validRoleSelection(admin, { role }).valid).toBe(true);
  });

  it("does not let a manager assign admin", () => {
    expect(validRoleSelection(manager, { role: "admin" }).valid).toBe(false);
  });
});

describe("validCanModify", () => {
  it("lets a superadmin modify another superadmin", () => {
    expect(validCanModify(superadmin, { role: "superadmin" }).valid).toBe(true);
  });

  it("does not let an admin modify a superadmin", () => {
    expect(validCanModify(admin, { role: "superadmin" }).valid).toBe(false);
  });

  it("lets an admin modify another admin", () => {
    expect(validCanModify(admin, { role: "admin" }).valid).toBe(true);
  });
});

describe("canModifyAdmin", () => {
  beforeEach(() => jest.clearAllMocks());

  it("refuses to demote the last superadmin", async () => {
    User.count.mockResolvedValue(1);
    const result = await canModifyAdmin(
      { role: "superadmin" },
      { role: "admin" }
    );
    expect(result.valid).toBe(false);
  });

  it("allows demoting a superadmin when another one remains", async () => {
    User.count.mockResolvedValue(2);
    const result = await canModifyAdmin(
      { role: "superadmin" },
      { role: "admin" }
    );
    expect(result.valid).toBe(true);
  });

  it("allows demoting the last admin when a superadmin exists", async () => {
    User.count.mockImplementation(async ({ role }) =>
      role === "admin" ? 1 : 1
    );
    const result = await canModifyAdmin({ role: "admin" }, { role: "default" });
    expect(result.valid).toBe(true);
  });
});
