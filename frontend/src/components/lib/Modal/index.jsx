import {
  Children,
  createContext,
  forwardRef,
  useContext,
  useEffect,
  useId,
  useRef,
} from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useModalEscape } from "@/hooks/useModalEscape";
import PasswordInput from "@/components/lib/PasswordInput";

const NOT_SKIPPED = ':not([tabindex="-1"])';
const FOCUSABLE = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled]):not([type=hidden])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "summary",
  '[contenteditable="true"]',
  "[tabindex]",
]
  .map((selector) => `${selector}${NOT_SKIPPED}`)
  .join(", ");

/** Lets `ModalHeader` give its title the id the dialog is labelled by. */
const ModalTitleContext = createContext(null);

/**
 * Recently focused elements, newest last. A child with autoFocus takes focus
 * while the dialog mounts, before any effect could read
 * document.activeElement, so the opener is looked up here instead.
 */
const focusHistory = [];
if (typeof document !== "undefined") {
  document.addEventListener(
    "focusin",
    (e) => {
      focusHistory.push(e.target);
      if (focusHistory.length > 10) focusHistory.shift();
    },
    true
  );
}

/** Newest focused element that is still on the page and outside `node`. */
function findOpener(node) {
  for (let i = focusHistory.length - 1; i >= 0; i--) {
    const el = focusHistory[i];
    if (el && document.contains(el) && !node?.contains(el)) return el;
  }
  return null;
}

/**
 * Dialog focus handling: focus moves inside on open (unless a child already
 * took it, e.g. with autoFocus), Tab stays inside the top-most dialog, and
 * focus returns to the element that opened it on close.
 * Exported for custom surfaces (bottom sheets, side panels): give the node
 * role="dialog", aria-modal, a name, tabIndex={-1} and data-app-dialog="" so
 * the Tab trap knows it is the top-most layer.
 */
export function useDialogFocus(isOpen, dialogRef, initialFocusRef = null) {
  useEffect(() => {
    if (!isOpen) return;
    const opener = findOpener(dialogRef.current);
    const timer = setTimeout(() => {
      const node = dialogRef.current;
      if (!node || node.contains(document.activeElement)) return;
      const preferred = initialFocusRef?.current;
      if (preferred && node.contains(preferred)) return preferred.focus();
      (node.querySelector(FOCUSABLE) || node).focus();
    }, 0);

    const onKeyDown = (e) => {
      const node = dialogRef.current;
      if (e.key !== "Tab" || !node) return;
      const dialogs = document.querySelectorAll("[data-app-dialog]");
      if (dialogs[dialogs.length - 1] !== node) return;
      const focusable = [...node.querySelectorAll(FOCUSABLE)].filter(
        (el) => el.offsetParent !== null
      );
      if (focusable.length === 0) {
        e.preventDefault();
        return node.focus();
      }
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!node.contains(document.activeElement)) {
        e.preventDefault();
        return first.focus();
      }
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("keydown", onKeyDown);
      const node = dialogRef.current;
      if (opener && document.contains(opener) && !node?.contains(opener))
        opener.focus?.();
    };
  }, [isOpen]);
}

/** @type {Record<string, string>} max-width per size, matched to the Figma modal frames */
const SIZE_CLASSES = {
  sm: "max-w-[400px]",
  md: "max-w-[500px]",
  lg: "max-w-[640px]",
  xl: "max-w-[868px]",
};

/**
 * Single, reusable modal shell for the app. Renders a centered, blurred
 * backdrop and the uniform modal card, then portals to the app root. Compose
 * the inner layout with the exported `ModalHeader`, `ModalBody`, and
 * `ModalFooter` pieces - the body stays unopinionated and accepts whatever JSX
 * you need.
 *
 * For modals that are not card-shaped (lightboxes, citations, etc.) pass
 * `variant="bare"` to skip the card chrome and just center the children.
 *
 * @param {Object} props - Component props
 * @param {import("react").ReactNode} props.children - The DOM/JSX to render inside the modal
 * @param {boolean} props.isOpen - Renders the modal when true
 * @param {() => void} [props.onClose] - Called when the modal requests to close (e.g. Escape key)
 * @param {"sm"|"md"|"lg"|"xl"} [props.size="md"] - Card max-width preset (400/500/640/868px)
 * @param {"default"|"bare"} [props.variant="default"] - `default` renders the uniform card; `bare` centers raw children
 * @param {string} [props.className] - Extra classes appended to the backdrop container (e.g. a higher `z-` to clear a page's fixed top bar)
 * @param {boolean} [props.closeOnEsc=true] - Whether pressing Escape calls `onClose`. Some modals require a forced choice and should opt out.
 * @param {boolean} [props.noPortal=false] - Render inline instead of portaling to #root. Used for sub-DOM modals that must render as a child element.
 *   Note: this can impact the backdrop presentation due to conflicting DOM positions, so double check it renders as desired.
 * @param {string} [props.ariaLabel] - Accessible name when the modal has no `ModalHeader` title. Required with `variant="bare"` unless the children render a `ModalHeader`.
 * @param {string} [props.describedBy] - id(s) of the text that explains the dialog (consequences of a confirmation)
 * @param {"dialog"|"alertdialog"} [props.role="dialog"] - `alertdialog` for confirmations that need an answer
 * @param {import("react").RefObject<HTMLElement>} [props.initialFocusRef] - element focused on open (e.g. Cancel in a destructive confirmation)
 */
export default function Modal({
  children,
  isOpen,
  onClose,
  size = "md",
  variant = "default",
  className = "",
  closeOnEsc = true,
  noPortal = false,
  ariaLabel,
  describedBy,
  role = "dialog",
  initialFocusRef = null,
}) {
  const titleId = useId();
  const dialogRef = useRef(null);
  useModalEscape(isOpen && closeOnEsc, onClose);
  useDialogFocus(isOpen, dialogRef, initialFocusRef);

  if (!isOpen) return null;

  if (import.meta.env.DEV && variant === "bare" && !ariaLabel)
    console.warn(
      'Modal: variant="bare" needs `ariaLabel` (or a ModalHeader inside) to name the dialog.'
    );

  const backdrop =
    `bg-black/60 backdrop-blur-sm fixed top-0 left-0 outline-none w-screen h-dvh flex items-center justify-center z-99 animate-in fade-in-0 [animation-duration:var(--dur-quick)] ${className}`.trim();

  const dialogProps = {
    ref: dialogRef,
    role,
    "aria-modal": "true",
    tabIndex: -1,
    "data-app-dialog": "",
    ...(ariaLabel
      ? { "aria-label": ariaLabel }
      : { "aria-labelledby": titleId }),
    ...(describedBy ? { "aria-describedby": describedBy } : {}),
  };

  if (variant === "bare") {
    const bare = (
      <div {...dialogProps} className={`${backdrop} focus:outline-none`}>
        <ModalTitleContext.Provider value={titleId}>
          {children}
        </ModalTitleContext.Provider>
      </div>
    );
    if (noPortal) return bare;
    return createPortal(bare, document.getElementById("root"));
  }

  const content = (
    <div className={backdrop}>
      <div
        {...dialogProps}
        className={`relative w-full ${SIZE_CLASSES[size] || SIZE_CLASSES.md} mx-4 flex flex-col gap-y-5 p-6 rounded-lg shadow-xs max-h-[90dvh] overflow-y-auto overscroll-contain bg-zinc-900 light:bg-white border border-zinc-700 light:border-slate-300 focus:outline-none animate-in fade-in-0 [--tw-enter-translate-y:6px] [animation-duration:var(--dur-base)] [animation-timing-function:var(--ease-smooth)]`}
      >
        <ModalTitleContext.Provider value={titleId}>
          {children}
        </ModalTitleContext.Provider>
      </div>
    </div>
  );

  if (noPortal) return content;
  return createPortal(content, document.getElementById("root"));
}

/**
 * Modal header: title (required), optional muted subtitle, and a close button.
 *
 * @param {Object} props - Component props
 * @param {import("react").ReactNode} props.title - The header title
 * @param {import("react").ReactNode} [props.subtitle] - Muted helper line under the title
 * @param {() => void} [props.onClose] - Renders the close button when provided
 * @param {import("react").ReactNode} [props.children] - Extra header content rendered below the subtitle
 */
export function ModalHeader({ title, subtitle, onClose, children }) {
  const { t } = useTranslation();
  const titleId = useContext(ModalTitleContext);
  return (
    <div className="flex flex-col gap-y-1 w-full">
      <div className="flex items-start justify-between gap-x-2 w-full">
        <h2
          id={titleId || undefined}
          className="min-w-0 text-base font-semibold text-slate-50 light:text-slate-900 break-words"
        >
          {title}
        </h2>
        {onClose && (
          <button
            onClick={onClose}
            type="button"
            aria-label={t("api.modal.close")}
            className="border-none bg-transparent inline-flex items-center justify-center w-11 h-11 -my-3 -mr-3 md:w-8 md:h-8 md:-my-1.5 md:-mr-1.5 rounded-lg shrink-0 text-slate-50 light:text-slate-900 hover:bg-zinc-800 light:hover:bg-slate-100 transition-colors duration-quick"
          >
            <X strokeWidth={1.5} size={16} aria-hidden="true" />
          </button>
        )}
      </div>
      {subtitle && (
        <p className="text-xs text-zinc-400 light:text-slate-600">{subtitle}</p>
      )}
      {children}
    </div>
  );
}

/**
 * Modal body: the unopinionated content region. Stacks children with the
 * standard field spacing; pass `className` to override the layout.
 *
 * @param {Object} props - Component props
 * @param {import("react").ReactNode} props.children - Body content
 * @param {string} [props.className] - Extra classes appended to the body container
 */
export function ModalBody({ children, className = "" }) {
  return (
    <div className={`flex flex-col gap-y-4 w-full ${className}`}>
      {children}
    </div>
  );
}

/**
 * Modal footer: the action row. With multiple actions it defaults to
 * `justify-between` (Cancel left, primary right) to match the design; with a
 * single action it right-aligns. Override with `className` when needed.
 *
 * @param {Object} props - Component props
 * @param {import("react").ReactNode} props.children - Footer actions
 * @param {string} [props.className] - Extra classes appended to the footer container
 */
export function ModalFooter({ children, className = "" }) {
  const align =
    Children.count(children) > 1 ? "justify-between" : "justify-end";
  return (
    <div className={`flex items-center ${align} gap-x-2 w-full ${className}`}>
      {children}
    </div>
  );
}

const FIELD_BASE =
  "w-full text-base md:text-sm rounded-lg bg-zinc-800 border border-zinc-500 text-zinc-100 placeholder:text-zinc-400 light:bg-white light:border-slate-500 light:text-slate-900 light:placeholder:text-slate-500 focus:border-sky-500 light:focus:border-sky-500 disabled:opacity-50 disabled:cursor-not-allowed";

/**
 * Field label matching the Figma input label (Medium 14).
 *
 * @param {Object} props - Component props (forwarded to the label element)
 * @param {boolean} [props.optional] - Appends a muted "(Optional)" suffix
 * @param {string} [props.className] - Extra classes appended to the label
 */
export function ModalLabel({ children, optional, className = "", ...props }) {
  const { t } = useTranslation();
  return (
    <label
      {...props}
      className={`text-sm font-medium text-zinc-50 light:text-slate-700 ${className}`}
    >
      {children}
      {optional && (
        <span className="font-normal text-zinc-400 light:text-slate-500">
          {" "}
          ({t("common.optional")})
        </span>
      )}
    </label>
  );
}

/**
 * Muted helper/hint line shown under a label or field (Regular 12).
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Extra classes appended to the hint
 */
export function ModalHint({ children, className = "", id }) {
  return (
    <p
      id={id}
      className={`text-xs text-zinc-400 light:text-slate-600 ${className}`}
    >
      {children}
    </p>
  );
}

/**
 * Labeled text input - the most-reused modal field. Renders label, input, and
 * optional hint with the uniform field styling. Extra props pass to `<input>`.
 * `type="password"` renders a `PasswordInput` with a hold-to-reveal eye icon.
 *
 * @param {Object} props - Component props (forwarded to the input element)
 * @param {import("react").ReactNode} [props.label] - Field label
 * @param {import("react").ReactNode} [props.hint] - Helper line under the input
 * @param {boolean} [props.optional] - Marks the label "(Optional)"
 * @param {import("react").ReactNode} [props.leading] - Inline content rendered before the input (e.g. a "/" prefix)
 * @param {import("react").ReactNode} [props.error] - Error shown under the field (role="alert", aria-invalid)
 * @param {string} [props.className] - Extra classes appended to the input
 */
export function ModalInput({
  label,
  hint,
  error,
  optional,
  leading,
  className = "",
  id,
  name,
  ...props
}) {
  // A generated id by default: `name` repeats across forms on the same page.
  const autoId = useId();
  const inputId = id || autoId;
  const hintId = hint ? `${inputId}-hint` : null;
  const errorId = error ? `${inputId}-error` : null;
  const describedBy =
    [props["aria-describedby"], hintId, errorId].filter(Boolean).join(" ") ||
    undefined;
  const a11y = {
    "aria-describedby": describedBy,
    "aria-invalid": error ? true : props["aria-invalid"],
  };
  return (
    <div className="flex flex-col gap-y-1.5 w-full">
      {label && (
        <ModalLabel htmlFor={inputId} optional={optional}>
          {label}
        </ModalLabel>
      )}
      <div className="relative flex items-center w-full">
        {leading && (
          <span className="absolute left-3.5 text-sm text-zinc-400 light:text-slate-500 pointer-events-none">
            {leading}
          </span>
        )}
        {props.type === "password" ? (
          <PasswordInput
            id={inputId}
            name={name}
            className={`${FIELD_BASE} h-11 md:h-[34px] px-3.5 ${leading ? "pl-7" : ""} ${className}`}
            {...props}
            {...a11y}
          />
        ) : (
          <input
            id={inputId}
            name={name}
            className={`${FIELD_BASE} h-11 md:h-[34px] px-3.5 ${leading ? "pl-7" : ""} ${className}`}
            {...props}
            {...a11y}
          />
        )}
      </div>
      {hint && <ModalHint id={hintId}>{hint}</ModalHint>}
      {error && <FieldErrorText id={errorId}>{error}</FieldErrorText>}
    </div>
  );
}

/**
 * Labeled textarea matching `ModalInput`. Extra props pass to `<textarea>`.
 *
 * @param {Object} props - Component props (forwarded to the textarea element)
 * @param {import("react").ReactNode} [props.label] - Field label
 * @param {import("react").ReactNode} [props.hint] - Helper line under the textarea
 * @param {boolean} [props.optional] - Marks the label "(Optional)"
 * @param {number} [props.rows=4] - Visible text rows
 * @param {string} [props.className] - Extra classes appended to the textarea
 */
export function ModalTextarea({
  label,
  hint,
  error,
  optional,
  rows = 4,
  className = "",
  id,
  name,
  ...props
}) {
  const autoId = useId();
  const inputId = id || autoId;
  const hintId = hint ? `${inputId}-hint` : null;
  const errorId = error ? `${inputId}-error` : null;
  return (
    <div className="flex flex-col gap-y-1.5 w-full">
      {label && (
        <ModalLabel htmlFor={inputId} optional={optional}>
          {label}
        </ModalLabel>
      )}
      <textarea
        id={inputId}
        name={name}
        rows={rows}
        className={`${FIELD_BASE} px-3.5 py-2.5 resize-none ${className}`}
        {...props}
        aria-describedby={
          [props["aria-describedby"], hintId, errorId]
            .filter(Boolean)
            .join(" ") || undefined
        }
        aria-invalid={error ? true : props["aria-invalid"]}
      />
      {hint && <ModalHint id={hintId}>{hint}</ModalHint>}
      {error && <FieldErrorText id={errorId}>{error}</FieldErrorText>}
    </div>
  );
}

function FieldErrorText({ id, children }) {
  return (
    <p id={id} role="alert" className="text-xs text-red-400 light:text-red-700">
      {children}
    </p>
  );
}

/**
 * Labeled <select> matching `ModalInput`: generated id, hint and error linked
 * to the control. Pass the <option>s as children; extra props go to <select>.
 *
 * @param {Object} props
 * @param {import("react").ReactNode} [props.label]
 * @param {import("react").ReactNode} [props.hint]
 * @param {import("react").ReactNode} [props.error]
 * @param {boolean} [props.optional]
 */
export function ModalSelect({
  label,
  hint,
  error,
  optional,
  className = "",
  id,
  children,
  ...props
}) {
  const autoId = useId();
  const selectId = id || autoId;
  const hintId = hint ? `${selectId}-hint` : null;
  const errorId = error ? `${selectId}-error` : null;
  return (
    <div className="flex flex-col gap-y-1.5 w-full">
      {label && (
        <ModalLabel htmlFor={selectId} optional={optional}>
          {label}
        </ModalLabel>
      )}
      <select
        id={selectId}
        className={`${FIELD_BASE} h-11 md:h-[34px] px-3 ${className}`}
        {...props}
        aria-describedby={
          [props["aria-describedby"], hintId, errorId]
            .filter(Boolean)
            .join(" ") || undefined
        }
        aria-invalid={error ? true : props["aria-invalid"]}
      >
        {children}
      </select>
      {hint && <ModalHint id={hintId}>{hint}</ModalHint>}
      {error && <FieldErrorText id={errorId}>{error}</FieldErrorText>}
    </div>
  );
}

const BUTTON_BASE =
  "flex items-center justify-center h-11 md:h-[34px] px-4 rounded-lg text-sm font-medium transition-colors duration-quick ease-smooth disabled:opacity-50 disabled:cursor-not-allowed";

/**
 * While `busy` a modal button stays focusable (a disabled button drops focus to
 * <body>) but blocks clicks and implicit form submits, and says so to
 * assistive technology.
 */
function busyHandlers(busy, onClick) {
  if (!busy) return { onClick };
  return {
    "aria-disabled": true,
    "aria-busy": true,
    onClick: (e) => e.preventDefault(),
  };
}

/**
 * Filled primary action button (Save/Create). Dark: light fill on dark text;
 * Light: dark fill on white text.
 *
 * @param {Object} props - Component props (forwarded to the button element)
 * @param {boolean} [props.busy] - Action running: blocks repeat submits
 * @param {string} [props.className] - Extra classes appended to the button
 */
export const ModalPrimaryButton = forwardRef(function ModalPrimaryButton(
  { children, className = "", busy = false, onClick, ...props },
  ref
) {
  return (
    <button
      ref={ref}
      {...props}
      {...busyHandlers(busy, onClick)}
      className={`${BUTTON_BASE} border-none bg-zinc-50 light:bg-slate-900 text-zinc-950 light:text-white hover:opacity-80 aria-disabled:opacity-60 aria-disabled:cursor-wait ${className}`}
    >
      {children}
    </button>
  );
});

/**
 * Outlined secondary action button (Cancel).
 *
 * @param {Object} props - Component props (forwarded to the button element)
 * @param {string} [props.className] - Extra classes appended to the button
 */
export const ModalSecondaryButton = forwardRef(function ModalSecondaryButton(
  { children, className = "", ...props },
  ref
) {
  return (
    <button
      ref={ref}
      {...props}
      className={`${BUTTON_BASE} bg-transparent border border-zinc-700 light:border-slate-600 text-slate-50 light:text-slate-700 hover:bg-zinc-800 light:hover:bg-slate-100 ${className}`}
    >
      {children}
    </button>
  );
});

/**
 * Destructive action button (Delete). Filled red-600 with white text (4.8:1 in
 * both themes; `text-white` would be remapped to dark text in light mode).
 *
 * @param {Object} props - Component props (forwarded to the button element)
 * @param {boolean} [props.busy] - Action running: blocks repeat clicks
 * @param {string} [props.className] - Extra classes appended to the button
 */
export const ModalDangerButton = forwardRef(function ModalDangerButton(
  { children, className = "", busy = false, onClick, ...props },
  ref
) {
  return (
    <button
      ref={ref}
      {...props}
      {...busyHandlers(busy, onClick)}
      className={`${BUTTON_BASE} border-none bg-red-600 hover:bg-red-700 text-[#ffffff] aria-disabled:opacity-60 aria-disabled:cursor-wait ${className}`}
    >
      {children}
    </button>
  );
});
