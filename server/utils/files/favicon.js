const fs = require("fs");
const path = require("path");
const { getType } = require("mime");
const { v4 } = require("uuid");

const FAVICON_API_PATH = "/api/system/favicon";

// Only image formats are accepted, stored and served. SVG is allowed because it
// is a common favicon format; the response headers sandbox it (see below).
const FAVICON_TYPES = {
  ".ico": "image/x-icon",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
};

function faviconExtension(filename = "") {
  return path.extname(String(filename || "")).toLowerCase();
}

function isAllowedFaviconUpload(file = null) {
  if (!file) return false;
  const ext = faviconExtension(file.originalname || file.filename);
  if (!FAVICON_TYPES[ext]) return false;
  return ext === ".ico" || !!file.mimetype?.startsWith("image/");
}

// Uploads are stored under a random name so they can never replace an
// existing asset (for example the current logo).
function faviconUploadFilename(originalname = "") {
  const ext = faviconExtension(originalname);
  return `favicon-upload-${v4()}${FAVICON_TYPES[ext] ? ext : ".invalid"}`;
}

function faviconResponseHeaders(faviconPath, size) {
  const ext = faviconExtension(faviconPath);
  return {
    "Content-Type": FAVICON_TYPES[ext] || "application/octet-stream",
    "Content-Disposition": `inline; filename=${path.basename(faviconPath)}`,
    "Content-Length": size,
    "Cache-Control": "public, max-age=300",
    "X-Content-Type-Options": "nosniff",
    // If the file is ever opened as a document, nothing in it can run.
    "Content-Security-Policy":
      "default-src 'none'; style-src 'unsafe-inline'; sandbox",
  };
}

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
  if (!FAVICON_TYPES[faviconExtension(filename)]) return false;
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

  const mime =
    FAVICON_TYPES[faviconExtension(faviconPath)] || getType(faviconPath);
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

  const extname = faviconExtension(originalFilename);
  if (!FAVICON_TYPES[extname]) throw new Error("Invalid favicon file type.");
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
  faviconResponseHeaders,
  faviconUploadFilename,
  fetchFavicon,
  internalFaviconUrl,
  isAllowedFaviconUpload,
  isInternalFaviconUrl,
  removeCustomFavicon,
  renameFaviconFile,
};
