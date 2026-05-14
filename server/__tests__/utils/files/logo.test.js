const fs = require("fs");
const os = require("os");
const path = require("path");

const originalStorageDirForImport = process.env.STORAGE_DIR;
const importStorageDir = fs.mkdtempSync(
  path.join(os.tmpdir(), "anything-logo-import-")
);
process.env.STORAGE_DIR = importStorageDir;

jest.mock("../../../models/systemSettings", () => ({
  SystemSettings: {
    currentLogoFilename: jest.fn(),
  },
}));

const { SystemSettings } = require("../../../models/systemSettings");
const {
  LOGO_FILENAME,
  determineLogoFilepath,
  getDefaultFilename,
} = require("../../../utils/files/logo");

const LOGO_FILENAME_DARK = "anything-llm-dark.png";

describe("logo file resolution", () => {
  let originalStorageDir;
  let tempStorageDir;

  afterAll(() => {
    if (originalStorageDirForImport === undefined) delete process.env.STORAGE_DIR;
    else process.env.STORAGE_DIR = originalStorageDirForImport;
    fs.rmSync(importStorageDir, { recursive: true, force: true });
  });

  beforeEach(() => {
    jest.clearAllMocks();
    originalStorageDir = process.env.STORAGE_DIR;
    tempStorageDir = fs.mkdtempSync(path.join(os.tmpdir(), "anything-logo-"));
    process.env.STORAGE_DIR = tempStorageDir;

    const assetsDir = path.join(tempStorageDir, "assets");
    fs.mkdirSync(assetsDir, { recursive: true });
    fs.writeFileSync(path.join(assetsDir, LOGO_FILENAME), "dark default");
    fs.writeFileSync(path.join(assetsDir, LOGO_FILENAME_DARK), "light default");
    fs.writeFileSync(path.join(assetsDir, "custom-dark.png"), "dark custom");
    fs.writeFileSync(path.join(assetsDir, "custom-light.png"), "light custom");
    fs.writeFileSync(path.join(assetsDir, "legacy.png"), "legacy custom");
  });

  afterEach(() => {
    if (originalStorageDir === undefined) delete process.env.STORAGE_DIR;
    else process.env.STORAGE_DIR = originalStorageDir;
    fs.rmSync(tempStorageDir, { recursive: true, force: true });
  });

  it("uses the light-mode logo when resolving a light theme logo", async () => {
    SystemSettings.currentLogoFilename.mockImplementation(async (theme) => {
      if (theme === "light") return "custom-light.png";
      if (theme === "dark") return "custom-dark.png";
      return null;
    });

    const logoPath = await determineLogoFilepath(
      getDefaultFilename(false),
      "light"
    );

    expect(path.basename(logoPath)).toBe("custom-light.png");
  });

  it("uses the dark-mode logo when resolving a dark theme logo", async () => {
    SystemSettings.currentLogoFilename.mockImplementation(async (theme) => {
      if (theme === "light") return "custom-light.png";
      if (theme === "dark") return "custom-dark.png";
      return null;
    });

    const logoPath = await determineLogoFilepath(
      getDefaultFilename(true),
      "dark"
    );

    expect(path.basename(logoPath)).toBe("custom-dark.png");
  });

  it("falls back to the legacy single logo when a theme-specific logo is not set", async () => {
    SystemSettings.currentLogoFilename.mockImplementation(async (theme) => {
      if (theme === null || theme === undefined) return "legacy.png";
      return null;
    });

    const logoPath = await determineLogoFilepath(
      getDefaultFilename(false),
      "light"
    );

    expect(path.basename(logoPath)).toBe("legacy.png");
  });
});
