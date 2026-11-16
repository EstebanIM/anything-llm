const fs = require("fs");
const os = require("os");
const path = require("path");

const originalStorageDir = process.env.STORAGE_DIR;
const importStorageDir = fs.mkdtempSync(
  path.join(os.tmpdir(), "anything-favicon-import-")
);
process.env.STORAGE_DIR = importStorageDir;

const {
  determineFaviconFilepath,
  extractInternalFaviconFilename,
  faviconResponseHeaders,
  faviconUploadFilename,
  internalFaviconUrl,
  isAllowedFaviconUpload,
  removeCustomFavicon,
  renameFaviconFile,
} = require("../../../utils/files/favicon");

describe("favicon file helpers", () => {
  let tempStorageDir;
  let assetsDir;

  afterAll(() => {
    if (originalStorageDir === undefined) delete process.env.STORAGE_DIR;
    else process.env.STORAGE_DIR = originalStorageDir;
    fs.rmSync(importStorageDir, { recursive: true, force: true });
  });

  beforeEach(() => {
    tempStorageDir = fs.mkdtempSync(path.join(os.tmpdir(), "anything-favicon-"));
    process.env.STORAGE_DIR = tempStorageDir;
    assetsDir = path.join(tempStorageDir, "assets");
    fs.mkdirSync(assetsDir, { recursive: true });
  });

  afterEach(() => {
    if (originalStorageDir === undefined) delete process.env.STORAGE_DIR;
    else process.env.STORAGE_DIR = originalStorageDir;
    fs.rmSync(tempStorageDir, { recursive: true, force: true });
  });

  it("builds and parses internal favicon URLs", () => {
    const filename = "favicon-123.png";

    expect(internalFaviconUrl(filename)).toBe(
      "/api/system/favicon?filename=favicon-123.png"
    );
    expect(extractInternalFaviconFilename(internalFaviconUrl(filename))).toBe(
      filename
    );
  });

  it("resolves uploaded favicons only inside the assets directory", () => {
    fs.writeFileSync(path.join(assetsDir, "favicon-safe.ico"), "icon");

    const safePath = determineFaviconFilepath("favicon-safe.ico");
    const traversalPath = determineFaviconFilepath("../favicon-safe.ico");

    expect(safePath).toBe(path.join(assetsDir, "favicon-safe.ico"));
    expect(traversalPath).toBeNull();
  });

  it("renames uploaded files with the favicon prefix and keeps the extension", async () => {
    fs.writeFileSync(path.join(assetsDir, "brand.ico"), "icon");

    const newFilename = await renameFaviconFile("brand.ico");

    expect(newFilename).toMatch(/^favicon-[\w-]+\.ico$/);
    expect(fs.existsSync(path.join(assetsDir, newFilename))).toBe(true);
    expect(fs.existsSync(path.join(assetsDir, "brand.ico"))).toBe(false);
  });

  it("removes only internal favicon files", async () => {
    const filename = "favicon-old.png";
    const faviconPath = path.join(assetsDir, filename);
    fs.writeFileSync(faviconPath, "icon");

    await removeCustomFavicon(internalFaviconUrl(filename));
    await removeCustomFavicon("https://cdn.example.com/icon.png");

    expect(fs.existsSync(faviconPath)).toBe(false);
  });

  it.each([
    [{ originalname: "logo.png", mimetype: "image/png" }, true],
    [{ originalname: "icon.ico", mimetype: "application/octet-stream" }, true],
    [{ originalname: "mark.svg", mimetype: "image/svg+xml" }, true],
    [{ originalname: "page.html", mimetype: "image/png" }, false],
    [{ originalname: "script.js", mimetype: "image/png" }, false],
    [{ originalname: "logo.png", mimetype: "text/html" }, false],
  ])("decides whether %p is an allowed favicon upload", (file, allowed) => {
    expect(isAllowedFaviconUpload(file)).toBe(allowed);
  });

  it("never stores an upload under its original name", () => {
    const name = faviconUploadFilename("anything-llm.png");
    expect(name).not.toBe("anything-llm.png");
    expect(name).toMatch(/^favicon-upload-[\w-]+\.png$/);
    expect(faviconUploadFilename("Evil.HTML")).toMatch(/\.invalid$/);
  });

  it("does not resolve favicons with a disallowed extension", () => {
    fs.writeFileSync(path.join(assetsDir, "favicon-1.html"), "<script></script>");
    expect(determineFaviconFilepath("favicon-1.html")).toBeNull();
  });

  it("serves favicons sandboxed so scripts never run", () => {
    const headers = faviconResponseHeaders("favicon-1.svg", 10);
    expect(headers["Content-Type"]).toBe("image/svg+xml");
    expect(headers["Content-Security-Policy"]).toMatch(/sandbox/);
    expect(headers["Content-Security-Policy"]).toMatch(/default-src 'none'/);
    expect(headers["X-Content-Type-Options"]).toBe("nosniff");
  });
});
