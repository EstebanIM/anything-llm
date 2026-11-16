jest.mock("../../../models/workspaceChats", () => ({ WorkspaceChats: {} }));
jest.mock("../../../utils/ImageGenerators", () => ({}));
jest.mock("../../../utils/helpers/chat/responses", () => ({}));
jest.mock("../../../utils/helpers", () => ({
  getImageGeneratorProvider: () => {
    throw new Error("No image provider configured");
  },
}));

const { generateImage } = require("../../../utils/chats/commands/img");

describe("image command setup guidance", () => {
  it.each(["superadmin", "admin"])(
    "directs %s to image generation settings",
    async (role) => {
      const result = await generateImage({}, "/img a fox", "test-id", { role });

      expect(result.error).toContain("Choose a provider in Settings");
    }
  );

  it("directs default users to an administrator", async () => {
    const result = await generateImage({}, "/img a fox", "test-id", {
      role: "default",
    });

    expect(result.error).toContain("Contact an admin");
  });
});
