import { useId } from "react";
import {
  FieldError,
  SavedIndicator,
  useFieldError,
} from "@/components/AutosaveForm";

/** Title of a group of controls inside a settings tab. */
export const SECTION_HEADING = "block input-label";

/** Help text under a title: link it with aria-describedby. */
export const HELP_TEXT = "text-xs font-medium text-theme-text-secondary";

/** Inline text link with enough contrast in both themes. */
export const TEXT_LINK =
  "text-sky-400 light:text-sky-700 underline hover:text-sky-300 light:hover:text-sky-800 transition-colors duration-quick ease-smooth";

/** Destructive action (delete, reset): opens a confirmation first. */
export const DANGER_BUTTON =
  "w-fit min-h-[44px] md:min-h-[38px] px-5 rounded-lg whitespace-nowrap text-sm border border-transparent bg-red-500/25 text-red-200 light:text-red-700 hover:bg-red-600 hover:text-[#ffffff] light:hover:text-[#ffffff] transition-colors duration-quick ease-smooth";

/**
 * Label, "Saved" mark, help, control and inline error of one autosaved field.
 * `children` is a render function that receives the props for the control
 * (`id`, `aria-describedby`, `aria-invalid`).
 * @param {object} props
 * @param {string} props.name - form field name
 * @param {import("react").ReactNode} props.label
 * @param {import("react").ReactNode} [props.help]
 * @param {string} [props.className]
 * @param {(control: object) => import("react").ReactNode} props.children
 */
export default function SettingsField({
  name,
  label,
  help = null,
  className = "",
  children,
}) {
  const id = useId();
  const error = useFieldError(name);
  const helpId = `${id}-help`;
  const errorId = `${id}-error`;
  const describedBy =
    [help ? helpId : null, error ? errorId : null].filter(Boolean).join(" ") ||
    undefined;

  return (
    <div className={`flex flex-col gap-y-2 ${className}`}>
      <div className="flex flex-wrap items-center">
        <label htmlFor={id} className="input-label">
          {label}
        </label>
        <SavedIndicator name={name} />
      </div>
      {help && (
        <p id={helpId} className={HELP_TEXT}>
          {help}
        </p>
      )}
      {children({
        id,
        "aria-describedby": describedBy,
        "aria-invalid": error ? true : undefined,
      })}
      <FieldError name={name} id={errorId} />
    </div>
  );
}
