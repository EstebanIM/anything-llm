/**
 * Primary call-to-action button used in settings headers.
 * Defaults to `type="submit"` because most callers sit inside a <form> and
 * rely on the native submit. Pass `busy` while saving: it blocks further
 * submits and exposes the state to assistive technology.
 */
export default function CTAButton({
  children,
  disabled = false,
  busy = false,
  type = "submit",
  onClick,
  className = "",
  ...props
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      // While busy the button stays focusable (a disabled button drops focus
      // to <body>), so clicks and implicit form submits are blocked here.
      aria-disabled={busy || undefined}
      aria-busy={busy || undefined}
      onClick={(e) => {
        if (busy) return e.preventDefault();
        onClick?.();
      }}
      className={`border-none text-xs px-4 py-1 font-semibold rounded-lg bg-primary-button text-theme-button-primary-text hover:bg-primary-button-hover transition-colors duration-quick ease-smooth min-h-[44px] md:min-h-0 md:h-[34px] -mr-8 whitespace-nowrap w-fit disabled:cursor-not-allowed disabled:opacity-60 aria-disabled:cursor-wait aria-disabled:opacity-60 ${className}`}
      {...props}
    >
      <div className="flex items-center justify-center gap-2">{children}</div>
    </button>
  );
}
