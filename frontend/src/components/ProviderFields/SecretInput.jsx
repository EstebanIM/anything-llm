import { forwardRef, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useTranslation } from "react-i18next";
import { FIELD_INPUT } from "./classes";

/** Value shown for a secret that is already saved on the server. */
export const SECRET_MASK = "*".repeat(20);
const MASK_PATTERN = /^\*+$/;

/**
 * Password-type field for API keys and tokens.
 * - Keeps the server mask: an all-asterisk value is ignored on save, so the
 *   mask is selected on focus and typing replaces it instead of appending.
 * - Asks password managers not to autofill it (the app password would end up
 *   sent to a third-party provider).
 * - Show / hide toggle with a fixed name and `aria-pressed`.
 * `revealLabel` names the toggle when the field is not a key ("Mostrar
 * contraseña"). All other props (name, id, defaultValue, value, onChange, onBlur, required,
 * placeholder, aria-*) go to the <input>, so FormData keeps working.
 */
const SecretInput = forwardRef(function SecretInput(
  {
    className = FIELD_INPUT,
    containerClassName = "w-full",
    revealLabel,
    onFocus,
    ...props
  },
  ref
) {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const Icon = visible ? EyeOff : Eye;

  return (
    <div className={`relative ${containerClassName}`}>
      <input
        autoComplete="new-password"
        spellCheck={false}
        autoCapitalize="off"
        autoCorrect="off"
        data-1p-ignore=""
        data-lpignore="true"
        data-bwignore=""
        {...props}
        ref={ref}
        type={visible ? "text" : "password"}
        onFocus={(e) => {
          if (MASK_PATTERN.test(e.target.value)) e.target.select();
          onFocus?.(e);
        }}
        className={`${className} pr-11`}
      />
      <button
        type="button"
        aria-pressed={visible}
        aria-label={revealLabel ?? t("provider-fields.show-secret")}
        onClick={() => setVisible((v) => !v)}
        className="absolute right-0 top-0 h-full w-11 flex items-center justify-center rounded-r-lg text-theme-text-secondary hover:text-white transition-colors duration-quick"
      >
        <Icon strokeWidth={1.5} className="h-4 w-4" aria-hidden="true" />
      </button>
    </div>
  );
});

export default SecretInput;
