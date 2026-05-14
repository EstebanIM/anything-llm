const { SystemSettings } = require("../../models/systemSettings");

describe("SystemSettings branding fields", () => {
  it("allows login powered-by text to be read and updated through system preferences", () => {
    expect(SystemSettings.publicFields).toContain("login_powered_by");
    expect(SystemSettings.supportedFields).toContain("login_powered_by");
  });

  it("allows light and dark logo filenames to be stored independently", () => {
    expect(SystemSettings.supportedFields).toContain("logo_filename_light");
    expect(SystemSettings.supportedFields).toContain("logo_filename_dark");
  });

  it("normalizes login powered-by text and allows clearing it", () => {
    expect(SystemSettings.validations.login_powered_by("  Built by ACME  ")).toBe(
      "Built by ACME"
    );
    expect(SystemSettings.validations.login_powered_by("   ")).toBeNull();
    expect(SystemSettings.validations.login_powered_by(null)).toBeNull();
  });

  it("does not expose sidebar footer or support email as editable branding preferences", () => {
    expect(SystemSettings.publicFields).not.toContain("footer_data");
    expect(SystemSettings.publicFields).not.toContain("support_email");
    expect(SystemSettings.supportedFields).not.toContain("footer_data");
    expect(SystemSettings.supportedFields).not.toContain("support_email");
  });
});
