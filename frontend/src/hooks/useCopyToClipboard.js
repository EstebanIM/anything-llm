import { useEffect, useRef, useState } from "react";
import { copyPlainText } from "@/utils/clipboard";

/**
 * Copy plain text and expose the result for a moment ("copied" | "failed").
 * Pair with <CopyButton> or announce `status` in an aria-live region.
 * @param {number} [resetMs=2500]
 */
export default function useCopyToClipboard(resetMs = 2500) {
  const [status, setStatus] = useState("idle");
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  async function copy(text) {
    const ok = await copyPlainText(text);
    setStatus(ok ? "copied" : "failed");
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setStatus("idle"), resetMs);
    return ok;
  }

  return { copy, status, copied: status === "copied" };
}
