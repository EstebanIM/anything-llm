import { useEffect, useRef } from "react";

/**
 * After a row is removed, moves focus to the same control in the row that
 * took its place (or the previous one), else to `fallbackRef` (a heading or
 * section with tabIndex={-1}). Rows mark that control with `data-row-focus`
 * (or pass another `selector`).
 *
 * @param {import("react").RefObject<HTMLElement>} containerRef - the list or <tbody>
 * @param {import("react").RefObject<HTMLElement>} fallbackRef
 * @param {string} [selector="[data-row-focus]"]
 * @returns {(index: number) => void} call with the index of the removed row before updating the list
 */
export default function useFocusAfterRemoval(
  containerRef,
  fallbackRef,
  selector = "[data-row-focus]"
) {
  const pending = useRef(null);

  // Runs after every commit: cheap, and it only acts once a removal is pending.
  useEffect(() => {
    if (pending.current === null) return;
    const index = pending.current;
    pending.current = null;
    const targets = [
      ...(containerRef.current?.querySelectorAll(selector) || []),
    ];
    (targets[index] ?? targets[index - 1] ?? fallbackRef?.current)?.focus();
  });

  return (index) => {
    pending.current = index;
  };
}
