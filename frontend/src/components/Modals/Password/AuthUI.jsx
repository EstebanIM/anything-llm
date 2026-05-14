import React from "react";
import { Lightning } from "@phosphor-icons/react";
import useCustomAppName from "@/hooks/useCustomAppName";
import useLoginPoweredBy from "@/hooks/useLoginPoweredBy";
import useLogo from "@/hooks/useLogo";
import loginBackground from "../../../../../images/LoginBackground.jpg";

const panelWidth = "w-[min(398px,calc(100vw-32px))]";

export function LoginScreen({ children }) {
  const { loginLogo, isCustomLogo } = useLogo();
  const { brandName } = useCustomAppName();
  const { loginPoweredBy } = useLoginPoweredBy();
  const showLoginFooter = loginPoweredBy.trim();

  return (
    <main className="fixed inset-0 overflow-hidden bg-[#0b2a35] font-sans text-white">
      <img
        src={loginBackground}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(255,255,255,0.08),transparent_32%),linear-gradient(180deg,rgba(10,35,43,0.06)_0%,rgba(7,31,39,0.16)_56%,rgba(3,20,28,0.38)_100%)]" />
      <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-[0.5px]" />

      <div className="relative flex min-h-[100dvh] w-full flex-col items-center justify-center px-4 py-8 sm:py-10">
        <section
          aria-label="Login"
          className={`${panelWidth} max-h-[calc(100dvh-104px)] overflow-y-auto rounded-[26px] border border-white/20 bg-white/[0.16] px-8 py-10 shadow-[0_32px_90px_rgba(1,25,36,0.45),inset_0_1px_0_rgba(255,255,255,0.32)] backdrop-blur-[18px] sm:px-[50px]`}
        >
          <AuthBrand
            brandName={brandName}
            isCustomLogo={isCustomLogo}
            loginLogo={loginLogo}
          />
          {children}
        </section>

        {showLoginFooter && (
          <footer className={`${panelWidth} mt-4 flex flex-col items-center`}>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/[0.35] to-transparent" />
            <p className="mt-4 flex items-center gap-2 text-[13px] font-medium text-white drop-shadow-[0_1px_10px_rgba(0,20,28,0.55)]">
              <Lightning size={15} weight="regular" />
              {showLoginFooter}
            </p>
          </footer>
        )}
      </div>
    </main>
  );
}

function AuthBrand({ brandName, isCustomLogo, loginLogo }) {
  if (isCustomLogo && loginLogo) {
    return (
      <div className="mb-7 flex justify-center">
        <img
          src={loginLogo}
          alt={brandName}
          className="max-h-10 max-w-[180px] object-contain"
        />
      </div>
    );
  }

  return null;
}

export function AuthHeader({ title, description }) {
  return (
    <div className="mb-5 flex flex-col items-center gap-3 text-center">
      <h3 className="text-[30px] font-medium leading-none tracking-normal text-white md:text-[32px]">
        {title}
      </h3>
      {description && (
        <p className="text-[15px] font-medium leading-5 text-white/[0.82]">
          {description}
        </p>
      )}
    </div>
  );
}

export function AuthInput({ icon: Icon, label, className = "", ...props }) {
  return (
    <label className="block w-full">
      <span className="sr-only">{label}</span>
      <span className="flex h-[42px] w-full items-center rounded-full border border-white/[0.15] bg-white/[0.22] shadow-[inset_0_1px_0_rgba(255,255,255,0.20),0_10px_30px_rgba(3,31,43,0.16)] transition duration-300 focus-within:border-white/[0.45] focus-within:bg-white/[0.28]">
        {Icon && (
          <Icon
            size={17}
            weight="regular"
            className="ml-[18px] shrink-0 text-white/[0.88]"
          />
        )}
        <input
          aria-label={label}
          placeholder={label}
          className={`auth-glass-input h-full min-w-0 flex-1 border-none bg-transparent px-4 text-[13px] font-semibold text-white placeholder:text-white/[0.78] focus:outline-none disabled:cursor-not-allowed ${className}`}
          {...props}
        />
      </span>
    </label>
  );
}

export function AuthSubmitButton({
  children,
  loading,
  loadingText,
  className = "",
  ...props
}) {
  const disabled = loading || props.disabled;

  return (
    <button
      {...props}
      disabled={disabled}
      className={`h-[42px] w-full rounded-full bg-[#3f7bf4] text-[13px] font-bold text-white shadow-[0_14px_30px_rgba(40,103,220,0.26)] transition duration-300 hover:bg-[#3471ee] active:translate-y-px disabled:cursor-not-allowed disabled:opacity-70 ${className}`}
    >
      {loading ? loadingText : children}
    </button>
  );
}

export function AuthGhostButton({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={`text-[12px] font-medium text-white/[0.76] transition hover:text-white focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2 focus:ring-offset-transparent ${className}`}
    >
      {children}
    </button>
  );
}

export function AuthError({ message }) {
  if (!message) return null;

  return (
    <p className="rounded-2xl border border-red-200/30 bg-red-500/[0.18] px-4 py-2 text-center text-[12px] font-semibold text-white">
      Error: {message}
    </p>
  );
}
