import renderMarkdown from "./chat/markdown";

/**
 * Copies the given markdown string as rich text to the clipboard.
 * @param {string} markdownString - The markdown string to copy.
 * @returns {Promise<void>}
 */
export async function copyMarkdownAsRichText(markdownString) {
  try {
    const htmlContent = renderMarkdown(markdownString);
    const blobHTML = new Blob([htmlContent], { type: "text/html" });
    const blobText = new Blob([markdownString], { type: "text/plain" });

    const data = [
      new ClipboardItem({
        "text/html": blobHTML,
        "text/plain": blobText,
      }),
    ];

    await navigator.clipboard.write(data);
  } catch (error) {
    console.error("Failed to copy markdown as rich text: ", error);
  }
}

/**
 * Copy plain text. Uses the async Clipboard API when the page is a secure
 * context, and falls back to a hidden textarea + execCommand("copy") on plain
 * HTTP (intranet deployments), where navigator.clipboard does not exist.
 * @param {string} text
 * @returns {Promise<boolean>} whether the text reached the clipboard
 */
export async function copyPlainText(text) {
  if (typeof text !== "string") text = String(text ?? "");
  try {
    if (navigator.clipboard?.writeText && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    // Permission denied or not focused: try the fallback below.
  }
  const active = document.activeElement;
  const area = document.createElement("textarea");
  area.value = text;
  area.setAttribute("readonly", "");
  area.style.position = "fixed";
  area.style.opacity = "0";
  area.style.pointerEvents = "none";
  document.body.appendChild(area);
  area.select();
  let ok = false;
  try {
    ok = document.execCommand("copy");
  } catch {
    ok = false;
  }
  document.body.removeChild(area);
  // Selecting the textarea moved focus: give it back to the copy button.
  active?.focus?.({ preventScroll: true });
  return ok;
}
