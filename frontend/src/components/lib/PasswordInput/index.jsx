import { forwardRef, useId, useRef, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Tooltip } from "react-tooltip";
import { useTranslation } from "react-i18next";

/**
 * A password input with a show / hide toggle pinned to the right edge.
 * Accepts all standard input props. Sizing/positioning of the input should be
 * passed via `containerClassName` when the input is not full-width.
 * Forwards `ref` to the <input> (to focus it after a validation error).
 */
const PasswordInput = forwardRef(function PasswordInput(
  { className = "", containerClassName = "w-full", ...props },
  forwardedRef
) {
  const { t } = useTranslation();
  const tooltipId = useId();
  const inputRef = useRef(null);
  const [revealed, setRevealed] = useState(false);
  const Icon = revealed ? EyeOff : Eye;

  // Swapping the input type between password/text resets the caret to the
  // start of the input, so capture the selection and restore it after the
  // swap has rendered.
  const setRevealedKeepCursor = (value) => {
    const input = inputRef.current;
    const start = input?.selectionStart;
    const end = input?.selectionEnd;
    setRevealed(value);
    setTimeout(() => {
      if (!input || start == null || document.activeElement !== input) return;
      input.setSelectionRange(start, end);
    }, 0);
  };
  const label = t("provider-fields.show-password");

  return (
    <div className={`relative ${containerClassName}`}>
      <input
        {...props}
        ref={(node) => {
          inputRef.current = node;
          if (typeof forwardedRef === "function") forwardedRef(node);
          else if (forwardedRef) forwardedRef.current = node;
        }}
        type={revealed ? "text" : "password"}
        className={`${className} pr-11`}
      />
      <button
        type="button"
        aria-pressed={revealed}
        aria-label={label}
        data-tooltip-id={tooltipId}
        data-tooltip-content={label}
        onClick={() => setRevealedKeepCursor(!revealed)}
        className="absolute right-0 top-1/2 -translate-y-1/2 h-11 md:h-full w-11 flex items-center justify-center rounded-r-lg border-none bg-transparent text-white text-opacity-60 light:text-theme-text-secondary hover:text-opacity-100 cursor-pointer transition-colors duration-quick"
      >
        <Icon strokeWidth={1.5} className="h-4 w-4" aria-hidden="true" />
      </button>
      <Tooltip
        id={tooltipId}
        place="top"
        delayShow={300}
        className="tooltip !text-xs z-99"
      />
    </div>
  );
});

export default PasswordInput;
