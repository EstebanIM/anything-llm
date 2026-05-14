const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "../../..");

function readFrontendFile(relativePath) {
  return fs.readFileSync(path.join(root, "frontend", "src", relativePath), "utf8");
}

describe("sidebar user menu placement", () => {
  it("does not render the user button as a top-right global overlay", () => {
    const userMenu = readFrontendFile("components/UserMenu/index.jsx");
    const userButton = readFrontendFile("components/UserMenu/UserButton/index.jsx");

    expect(userMenu).not.toContain("UserButton");
    expect(userButton).not.toContain("absolute top-3 right-4");
  });

  it("renders the user button from the sidebar footer instead of the settings button", () => {
    const footer = readFrontendFile("components/Footer/index.jsx");

    expect(footer).toContain("UserButton");
    expect(footer).not.toContain("SettingsButton");
  });

  it("moves the settings action into the user menu", () => {
    const userButton = readFrontendFile("components/UserMenu/UserButton/index.jsx");

    expect(userButton).toContain("paths.settings.interface()");
    expect(userButton).toContain('user?.role !== "default"');
    expect(userButton).toContain("useMatch");
  });

  it("uses the sidebar footer in mobile drawers and removes loose settings buttons", () => {
    const sidebar = readFrontendFile("components/Sidebar/index.jsx");
    const settingsSidebar = readFrontendFile("components/SettingsSidebar/index.jsx");

    expect(sidebar).not.toContain("SettingsButton");
    expect(sidebar).toContain("<Footer allowMobile");
    expect(settingsSidebar).toContain("<Footer allowMobile");
  });
});
