import React, { forwardRef, useEffect, useId, useState } from "react";
import {
  CircleAlert,
  CircleCheck,
  Info,
  LoaderCircle,
  TriangleAlert,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import useLoginPoweredBy from "@/hooks/useLoginPoweredBy";
import useLogo from "@/hooks/useLogo";
import PasswordInput from "@/components/lib/PasswordInput";
import { takeAuthNotice } from "@/utils/authErrors";
import LoginBackground from "@/media/illustrations/LoginBackground.jpg";

const panelWidth = "w-[min(398px,calc(100vw-32px))]";

/*
 * The sign-in panel is a light card over a photo in both themes, so everything
 * inside uses fixed colors measured against its worst (#cacccd) and best
 * (#f7f8f7) points, never the theme tokens. The global focus ring (sky-400 in
 * the dark theme) fails on this card: the panel redefines it (3.82:1 worst).
 */
export function LoginScreen({ children }) {
  const { loginLogo, isCustomLogo } = useLogo();
  const { loginPoweredBy } = useLoginPoweredBy();
  const showLoginFooter = loginPoweredBy.trim();

  return (
    <main className="relative min-h-dvh overflow-x-hidden bg-[#03060e] font-sans">
      <img
        src={LoginBackground}
        alt=""
        aria-hidden="true"
        width={3840}
        height={2560}
        // React 18 only forwards the lowercase attribute; fetchPriority arrives in React 19.
        // eslint-disable-next-line react/no-unknown-property
        fetchpriority="high"
        decoding="async"
        className="fixed inset-0 h-full w-full object-cover object-center"
      />

      <div className="relative flex min-h-dvh w-full flex-col items-center justify-center px-4 py-8 sm:py-10">
        <section
          className={`${panelWidth} rounded-[26px] border border-white/40 bg-white/[0.78] px-6 py-8 shadow-[0_32px_90px_rgba(1,25,36,0.45),inset_0_1px_0_rgba(255,255,255,0.32)] backdrop-blur-[18px] [--theme-focus-ring:#075ec4] sm:px-[50px] sm:py-10`}
        >
          {isCustomLogo && loginLogo && (
            <div className="mb-7 flex justify-center">
              {/* The heading and the tab title already name the instance. */}
              <img
                src={loginLogo}
                alt=""
                className="max-h-10 max-w-[180px] object-contain"
              />
            </div>
          )}
          {children}
        </section>

        {showLoginFooter && (
          <footer className={`${panelWidth} mt-4 flex flex-col items-center`}>
            <div
              aria-hidden="true"
              className="h-px w-full bg-gradient-to-r from-transparent via-white/[0.35] to-transparent"
            />
            <p className="mt-4 rounded-full bg-[#03060e]/[0.6] px-3 py-1 text-center text-[13px] font-medium text-[#fff]">
              {showLoginFooter}
            </p>
          </footer>
        )}
      </div>
    </main>
  );
}

/**
 * Title of the current sign-in view. The h1 takes programmatic focus
 * (tabIndex -1) when the view changes, so pass a ref to move focus there.
 */
export const AuthHeader = forwardRef(function AuthHeader(
  { title, description },
  ref
) {
  return (
    <div className="mb-5 flex w-full flex-col items-center gap-3 text-center">
      <h1
        ref={ref}
        tabIndex={-1}
        className="text-balance text-[26px] font-medium leading-[1.15] tracking-normal text-[#0d1117] md:text-[28px]"
      >
        {title}
      </h1>
      {description && (
        <p className="text-[15px] font-medium leading-5 text-[#374151]">
          {description}
        </p>
      )}
    </div>
  );
});

/**
 * Labelled field of the sign-in panel. The label is visible and is the only
 * accessible name; `hint` and `error` are linked with aria-describedby.
 * Password fields get the show/hide toggle. Focus moves by `id`
 * (PasswordInput does not forward refs).
 *
 * @param {object} props
 * @param {string} props.label
 * @param {string} [props.hint]
 * @param {string} [props.error] - message for this field (role="alert")
 * @param {boolean} [props.invalid] - mark invalid when the message lives elsewhere
 * @param {string} [props.describedBy] - extra ids, such as a form-level error
 */
export function AuthInput({
  icon: Icon,
  label,
  hint,
  error,
  invalid = false,
  describedBy,
  id: idProp,
  className = "",
  ...props
}) {
  const autoId = useId();
  const id = idProp || autoId;
  const hintId = hint ? `${id}-hint` : null;
  const errorId = error ? `${id}-error` : null;
  const isInvalid = !!error || invalid;
  const inputProps = {
    ...props,
    id,
    "aria-invalid": isInvalid || undefined,
    "aria-describedby":
      [describedBy, hintId, errorId].filter(Boolean).join(" ") || undefined,
    // The wrapper draws the focus ring around the whole pill instead.
    className: `auth-glass-input h-full w-full min-w-0 flex-1 border-none bg-transparent px-4 text-base font-semibold text-[#0d1117] focus-visible:outline-none md:text-[13px] ${className}`,
  };

  return (
    <div className="w-full">
      <label
        htmlFor={id}
        className="mb-1.5 block px-4 text-[13px] font-semibold text-[#1f2937]"
      >
        {label}
      </label>
      <div
        className={`flex h-[44px] w-full items-center rounded-full border bg-white/[0.55] shadow-[inset_0_1px_0_rgba(255,255,255,0.20),0_10px_30px_rgba(3,31,43,0.16)] transition-colors duration-quick ease-smooth focus-within:bg-white/[0.7] has-[input:focus-visible]:outline has-[input:focus-visible]:outline-2 has-[input:focus-visible]:outline-offset-2 has-[input:focus-visible]:outline-[var(--theme-focus-ring)] ${
          isInvalid ? "border-[#b91c1c]" : "border-[#646b78]"
        }`}
      >
        {Icon && (
          <Icon
            size={17}
            strokeWidth={1.5}
            aria-hidden="true"
            className="ml-[18px] shrink-0 text-[#374151]"
          />
        )}
        {props.type === "password" ? (
          <PasswordInput
            {...inputProps}
            containerClassName="h-full min-w-0 flex-1 [&_button]:!text-[#374151]"
          />
        ) : (
          <input {...inputProps} />
        )}
      </div>
      {hint && (
        <p
          id={hintId}
          className="mt-1.5 px-4 text-[12px] leading-4 text-[#374151]"
        >
          {hint}
        </p>
      )}
      {error && (
        <p
          id={errorId}
          role="alert"
          className="mt-1.5 flex items-start gap-1.5 px-4 text-[12px] font-semibold leading-4 text-[#991b1b]"
        >
          <CircleAlert
            size={14}
            strokeWidth={1.5}
            aria-hidden="true"
            className="shrink-0"
          />
          <span>{error}</span>
        </p>
      )}
    </div>
  );
}

const PRIMARY_CLASS =
  "flex h-[44px] w-full items-center justify-center gap-2 rounded-full bg-[#2563eb] px-4 text-[13px] font-bold text-[#fff] shadow-[0_14px_30px_rgba(40,103,220,0.26)] transition-colors duration-quick ease-smooth hover:bg-[#1d4ed8] active:translate-y-px";

/** Primary action styles, for a router Link that acts as the panel's main action. */
export const AUTH_PRIMARY_LINK = PRIMARY_CLASS;

/**
 * Main action of a sign-in view. While `busy` it stays focusable (a disabled
 * button drops focus to <body>), ignores clicks and implicit submits, keeps
 * its full contrast and says so with aria-busy.
 */
export const AuthSubmitButton = forwardRef(function AuthSubmitButton(
  {
    children,
    busy = false,
    busyText,
    className = "",
    type = "submit",
    onClick,
    ...props
  },
  ref
) {
  return (
    <button
      ref={ref}
      type={type}
      {...props}
      aria-disabled={busy || undefined}
      aria-busy={busy || undefined}
      onClick={busy ? (e) => e.preventDefault() : onClick}
      className={`${PRIMARY_CLASS} aria-busy:cursor-wait aria-busy:hover:bg-[#2563eb] ${className}`}
    >
      {busy && (
        <LoaderCircle
          size={16}
          strokeWidth={1.5}
          aria-hidden="true"
          className="animate-spin"
        />
      )}
      {busy && busyText ? busyText : children}
    </button>
  );
});

const GHOST_CLASS =
  "inline-flex min-h-[44px] items-center justify-center gap-x-1 rounded-md px-2 text-center text-[12px] font-medium text-[#1f2937] transition-colors duration-quick ease-smooth hover:text-[#0d1117] hover:underline md:min-h-[28px]";

/** Secondary action styles, for a router Link ("Ir a iniciar sesión"). */
export const AUTH_GHOST_LINK = GHOST_CLASS;

export const AuthGhostButton = forwardRef(function AuthGhostButton(
  { children, className = "", type = "button", ...props },
  ref
) {
  return (
    <button
      ref={ref}
      type={type}
      {...props}
      className={`${GHOST_CLASS} ${className}`}
    >
      {children}
    </button>
  );
});

/** Form-level error (wrong credentials, server unreachable…). */
export function AuthError({ id, message }) {
  if (!message) return null;

  return (
    <p
      id={id}
      role="alert"
      className="flex items-start gap-2 rounded-2xl border border-red-300 bg-red-100/[0.85] px-4 py-2 text-left text-[12px] font-semibold leading-4 text-[#7f1d1d]"
    >
      <CircleAlert
        size={16}
        strokeWidth={1.5}
        aria-hidden="true"
        className="shrink-0"
      />
      <span>{message}</span>
    </p>
  );
}

const NOTICES = {
  "session-expired": {
    key: "auth-errors.session-expired",
    icon: Info,
    className: "border-[#93c5fd] bg-[#eff6ff] text-[#1e3a8a]",
  },
  suspended: {
    key: "auth-errors.suspended",
    icon: TriangleAlert,
    className: "border-[#fcd34d] bg-[#fffbeb] text-[#78350f]",
  },
  "password-changed": {
    key: "auth-pages.notice.password-changed",
    icon: CircleCheck,
    className: "border-[#86efac] bg-[#f0fdf4] text-[#14532d]",
  },
};

/**
 * Why the person landed on the sign-in page ("session-expired", "suspended")
 * or what just happened ("password-changed"). Taken from sessionStorage on
 * mount and on every navigation to the page: the session check can expel
 * the person after the form is already showing. A missing value never clears
 * one already shown.
 * @returns {[string|null, (reason: string|null) => void]}
 */
export function useAuthNotice() {
  const { key } = useLocation();
  const [notice, setNotice] = useState(null);
  useEffect(() => {
    const reason = takeAuthNotice();
    if (reason) setNotice(reason);
  }, [key]);
  return [notice, setNotice];
}

/** Persistent notice in the panel. Focusable so it can be read after a step. */
export const AuthNotice = forwardRef(function AuthNotice({ reason }, ref) {
  const { t } = useTranslation();
  const notice = NOTICES[reason];
  if (!notice) return null;
  const Icon = notice.icon;

  return (
    <div
      ref={ref}
      tabIndex={-1}
      className={`mb-4 flex w-full items-start gap-2 rounded-2xl border px-4 py-2 text-left text-[12px] font-semibold leading-4 ${notice.className}`}
    >
      <Icon
        size={16}
        strokeWidth={1.5}
        aria-hidden="true"
        className="shrink-0"
      />
      <p>{t(notice.key)}</p>
    </div>
  );
});
