const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "../../..");

function readFrontendFile(relativePath) {
  return fs.readFileSync(path.join(root, "frontend", "src", relativePath), "utf8");
}

describe("frontend branding fallbacks", () => {
  test("useLoginPoweredBy resolves empty values without a default label", () => {
    const source = readFrontendFile("hooks/useLoginPoweredBy.js");

    expect(source).not.toContain("DEFAULT_LOGIN_POWERED_BY");
    expect(source).not.toContain("Desarrollado por C-766");
    expect(source).toContain('useState("")');
    expect(source).toContain('setLoginPoweredBy(customLoginPoweredBy || "")');
  });

  test("brand constants do not define a login powered-by fallback", () => {
    const source = readFrontendFile("utils/constants/brand.js");

    expect(source).not.toContain("DEFAULT_LOGIN_POWERED_BY");
    expect(source).not.toContain("Desarrollado por C-766");
  });

  test("LogoContext does not fallback to bundled AnythingLLM or login logos", () => {
    const source = readFrontendFile("LogoContext.jsx");

    expect(source).not.toContain("anything-llm.png");
    expect(source).not.toContain("anything-llm-dark.png");
    expect(source).not.toContain("login-logo.svg");
    expect(source).not.toContain("login-logo-light.svg");
    expect(source).not.toContain("DefaultLoginLogo");
    expect(source).not.toContain("AnythingLLM");
  });

  test("System.fetchLogo treats non-custom logo responses as no logo", () => {
    const source = readFrontendFile("models/system.js");

    expect(source).toContain("if (!isCustomLogo)");
    expect(source).toContain("logoURL: null");
  });

  test("AuthUI renders login powered-by footer only when text is configured", () => {
    const source = readFrontendFile("components/Modals/Password/AuthUI.jsx");

    expect(source).toContain("showLoginFooter");
    expect(source).toContain("showLoginFooter &&");
  });
});
