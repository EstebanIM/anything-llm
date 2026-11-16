const fs = require("fs");
const path = require("path");
const { getType } = require("mime");
const { v4 } = require("uuid");

const FAVICON_API_PATH = "/api/system/favicon";

function isWithin(outer, inner) {
  const resolvedOuter = path.resolve(outer);
  const resolvedInner = path.resolve(inner);
  const rel = path.relative(resolvedOuter, resolvedInner);

  if (rel === "") return false;
  return (
    !rel.startsWith(`..${path.sep}`) && rel !== ".." && !path.isAbsolute(rel)
  );
}

function normalizePath(filepath = "") {
  const result = path
    .normalize(filepath.trim())
    .replace(/^(\.\.(\/|\\|$))+/, "")
    .trim();
  if (["..", ".", "/"].includes(result)) throw new Error("Invalid path.");
  return result;
}

function assetsDirectory() {
  return process.env.STORAGE_DIR
    ? path.join(process.env.STORAGE_DIR, "assets")
    : path.join(__dirname, "../../storage/assets");
}

function isSafeFaviconFilename(filename = "") {
  if (!filename || typeof filename !== "string") return false;
  if (
    filename.includes("/") ||
    filename.includes("\\") ||
    filename.includes("..")
  )
    return false;
  if (path.basename(filename) !== filename) return false;
  return filename.startsWith("favicon-");
}

function internalFaviconUrl(filename = "") {
  return `${FAVICON_API_PATH}?filename=${encodeURIComponent(filename)}`;
}

function extractInternalFaviconFilename(faviconUrl = null) {
  if (!faviconUrl || typeof faviconUrl !== "string") return null;

  try {
    const url = new URL(faviconUrl, "http://anythingllm.local");
    if (url.pathname !== FAVICON_API_PATH) return null;
    const filename = url.searchParams.get("filename");
    if (!isSafeFaviconFilename(filename)) return null;
    return normalizePath(filename);
  } catch {
    return null;
  }
}

function isInternalFaviconUrl(faviconUrl = null) {
  return !!extractInternalFaviconFilename(faviconUrl);
}

function faviconFilepath(filename = "", { mustExist = true } = {}) {
  if (!isSafeFaviconFilename(filename)) return null;

  const basePath = assetsDirectory();
  const filepath = path.join(basePath, normalizePath(filename));
  if (!isWithin(path.resolve(basePath), path.resolve(filepath))) return null;
  if (mustExist && !fs.existsSync(filepath)) return null;
  return filepath;
}

function determineFaviconFilepath(filename = "") {
  return faviconFilepath(filename, { mustExist: true });
}

function fetchFavicon(faviconPath) {
  if (!faviconPath || !fs.existsSync(faviconPath)) {
    return {
      found: false,
      buffer: null,
      size: 0,
      mime: "none/none",
    };
  }

  const mime = getType(faviconPath);
  const buffer = fs.readFileSync(faviconPath);
  return {
    found: true,
    buffer,
    size: buffer.length,
    mime,
  };
}

async function renameFaviconFile(originalFilename = null) {
  if (!originalFilename) throw new Error("No favicon filename provided.");

  const extname = path.extname(originalFilename) || ".png";
  const newFilename = `favicon-${v4()}${extname}`;
  const basePath = assetsDirectory();
  const originalFilepath = path.join(basePath, normalizePath(originalFilename));
  if (!isWithin(path.resolve(basePath), path.resolve(originalFilepath)))
    throw new Error("Invalid file path.");

  const outputFilepath = faviconFilepath(newFilename, { mustExist: false });
  if (!outputFilepath) throw new Error("Invalid output file path.");

  fs.renameSync(originalFilepath, outputFilepath);
  return newFilename;
}

async function removeCustomFavicon(faviconUrl = null) {
  const filename =
    extractInternalFaviconFilename(faviconUrl) ||
    (isSafeFaviconFilename(faviconUrl) ? normalizePath(faviconUrl) : null);
  if (!filename) return false;

  const filepath = faviconFilepath(filename, { mustExist: true });
  if (!filepath) return false;

  fs.unlinkSync(filepath);
  return true;
}

module.exports = {
  FAVICON_API_PATH,
  determineFaviconFilepath,
  extractInternalFaviconFilename,
  fetchFavicon,
  internalFaviconUrl,
  isInternalFaviconUrl,
  removeCustomFavicon,
  renameFaviconFile,
};
