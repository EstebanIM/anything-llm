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

  it("stores the brand color as a public, supported setting", () => {
    expect(SystemSettings.publicFields).toContain("brand_color");
    expect(SystemSettings.supportedFields).toContain("brand_color");
  });

  it.each([
    ["#007bff", "#007bff"],
    ["#0Af", "#0Af"],
  ])("accepts the hex brand color %p", (input, expected) => {
    expect(SystemSettings.validations.brand_color(input)).toBe(expected);
  });

  it.each(["rojo", "#12345", "url(x)", "", null])(
    "rejects the brand color %p",
    (input) => {
      expect(SystemSettings.validations.brand_color(input)).toBeNull();
    }
  );

  it("does not expose sidebar footer or support email as editable branding preferences", () => {
    expect(SystemSettings.publicFields).not.toContain("footer_data");
    expect(SystemSettings.publicFields).not.toContain("support_email");
    expect(SystemSettings.supportedFields).not.toContain("footer_data");
    expect(SystemSettings.supportedFields).not.toContain("support_email");
  });
});
