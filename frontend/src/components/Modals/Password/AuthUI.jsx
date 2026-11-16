import React from "react";
import { Zap } from "lucide-react";
import useCustomAppName from "@/hooks/useCustomAppName";
import useLoginPoweredBy from "@/hooks/useLoginPoweredBy";
import useLogo from "@/hooks/useLogo";
import PasswordInput from "@/components/lib/PasswordInput";
import LoginBackground from "@/media/illustrations/LoginBackground.jpg";

const panelWidth = "w-[min(398px,calc(100vw-32px))]";

export function LoginScreen({ children }) {
  const { loginLogo, isCustomLogo } = useLogo();
  const { brandName } = useCustomAppName();
  const { loginPoweredBy } = useLoginPoweredBy();
  const showLoginFooter = loginPoweredBy.trim();

  return (
    <main className="fixed inset-0 overflow-hidden bg-[#03060e] font-sans text-white">
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
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <div className="relative flex min-h-[100dvh] w-full flex-col items-center justify-center px-4 py-8 sm:py-10">
        <section
          aria-label="Login"
          className={`${panelWidth} max-h-[calc(100dvh-104px)] overflow-y-auto rounded-[26px] border border-white/40 bg-white/[0.78] px-8 py-10 shadow-[0_32px_90px_rgba(1,25,36,0.45),inset_0_1px_0_rgba(255,255,255,0.32)] backdrop-blur-[18px] sm:px-[50px]`}
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
            <p className="mt-4 flex items-center gap-2 rounded-full bg-[#03060e]/[0.6] px-3 py-1 text-[13px] font-medium text-[#fff]">
              <Zap size={15} strokeWidth={1.5} />
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
      <h3 className="text-[30px] font-medium leading-none tracking-normal text-[#0d1117] md:text-[32px]">
        {title}
      </h3>
      {description && (
        <p className="text-[15px] font-medium leading-5 text-[#374151]">
          {description}
        </p>
      )}
    </div>
  );
}

export function AuthInput({ icon: Icon, label, className = "", ...props }) {
  const inputProps = {
    "aria-label": label,
    placeholder: label,
    className: `auth-glass-input h-full w-full min-w-0 flex-1 border-none bg-transparent px-4 text-[13px] font-semibold text-[#0d1117] placeholder:text-[#4b5563] focus:outline-none disabled:cursor-not-allowed ${className}`,
    ...props,
  };
  return (
    <label className="block w-full">
      <span className="sr-only">{label}</span>
      <span className="flex h-[44px] w-full items-center rounded-full border border-white/[0.6] bg-white/[0.55] shadow-[inset_0_1px_0_rgba(255,255,255,0.20),0_10px_30px_rgba(3,31,43,0.16)] transition duration-300 focus-within:border-[#2563eb] focus-within:bg-white/[0.7]">
        {Icon && (
          <Icon
            size={17}
            strokeWidth={1.5}
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
      className={`h-[44px] w-full rounded-full bg-[#2563eb] text-[13px] font-bold text-[#fff] shadow-[0_14px_30px_rgba(40,103,220,0.26)] transition duration-300 hover:bg-[#1d4ed8] active:translate-y-px disabled:cursor-not-allowed disabled:opacity-70 ${className}`}
    >
      {loading ? loadingText : children}
    </button>
  );
}

export function AuthGhostButton({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={`text-[12px] font-medium text-[#1f2937] transition hover:text-[#0d1117] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/60 focus:ring-offset-2 focus:ring-offset-transparent ${className}`}
    >
      {children}
    </button>
  );
}

export function AuthError({ message }) {
  if (!message) return null;

  return (
    <p className="rounded-2xl border border-red-300 bg-red-100/[0.85] px-4 py-2 text-center text-[12px] font-semibold text-[#7f1d1d]">
      Error: {message}
    </p>
  );
}
