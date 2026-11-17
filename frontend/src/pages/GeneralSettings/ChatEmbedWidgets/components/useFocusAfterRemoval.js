import { useEffect, useRef } from "react";

/**
 * After a row is removed, moves focus to the same control in the row that
 * took its place (or the previous one), else to `fallbackRef` (a heading
 * with tabIndex={-1}). Rows mark that control with `data-row-focus`.
 *
 * @param {import("react").RefObject<HTMLElement>} containerRef - the <tbody>
 * @param {import("react").RefObject<HTMLElement>} fallbackRef
 * @returns {(index: number) => void} call with the removed row index before updating the list
 */
export default function useFocusAfterRemoval(containerRef, fallbackRef) {
  const pending = useRef(null);

  // Runs after every commit: cheap, and it only acts once a removal is pending.
  useEffect(() => {
    if (pending.current === null) return;
    const index = pending.current;
    pending.current = null;
    const targets = [
      ...(containerRef.current?.querySelectorAll("[data-row-focus]") || []),
    ];
    (targets[index] ?? targets[index - 1] ?? fallbackRef.current)?.focus();
  });

  return (index) => {
    pending.current = index;
  };
}
