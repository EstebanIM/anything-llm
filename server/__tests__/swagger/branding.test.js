jest.mock("../../models/systemSettings", () => ({
  SystemSettings: {
    getValueOrFallback: jest.fn(),
  },
}));

const { SystemSettings } = require("../../models/systemSettings");
const {
  getBrandedOpenApiDocument,
  getSwaggerBrandName,
} = require("../../swagger/utils");

describe("Swagger API docs branding", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("getSwaggerBrandName resolves the configured custom app name", async () => {
    SystemSettings.getValueOrFallback.mockResolvedValue("IASMAR");

    await expect(getSwaggerBrandName()).resolves.toBe("IASMAR");
    expect(SystemSettings.getValueOrFallback).toHaveBeenCalledWith(
      { label: "custom_app_name" },
      "IASMAR"
    );
  });

  test("getSwaggerBrandName falls back to IASMAR when no name is set", async () => {
    SystemSettings.getValueOrFallback.mockImplementation(async (_, fallback) => fallback);

    await expect(getSwaggerBrandName()).resolves.toBe("IASMAR");
  });

  test("getBrandedOpenApiDocument replaces visible AnythingLLM samples and official links", () => {
    const source = {
      info: {
        title: "AnythingLLM Developer API",
        description:
          "API endpoints that enable programmatic reading, writing, and updating of your AnythingLLM instance.",
      },
      paths: {
        "/document/upload-link": {
          post: {
            requestBody: {
              content: {
                "application/json": {
                  example: {
                    link: "https://anythingllm.com",
                    pageContent: "AnythingLLM is the best....",
                    name: "anythingllm.txt",
                  },
                },
              },
            },
          },
        },
      },
    };

    const branded = getBrandedOpenApiDocument(source, "IASMAR");
    const serialized = JSON.stringify(branded);

    expect(branded.info.title).toBe("IASMAR Developer API");
    expect(branded.info.description).toContain("your IASMAR instance");
    expect(serialized).not.toContain("AnythingLLM");
    expect(serialized).not.toContain("anythingllm.com");
    expect(serialized).not.toContain("anythingllm.txt");
    expect(serialized).toContain("https://example.com");
    expect(JSON.stringify(source)).toContain("AnythingLLM");
  });

  test("getBrandedOpenApiDocument brands regenerated generic API metadata", () => {
    const branded = getBrandedOpenApiDocument(
      {
        info: {
          title: "Developer API",
          description:
            "API endpoints that enable programmatic reading, writing, and updating of your application instance.",
        },
      },
      "IASMAR"
    );

    expect(branded.info.title).toBe("IASMAR Developer API");
    expect(branded.info.description).toContain("your IASMAR instance");
  });
});
