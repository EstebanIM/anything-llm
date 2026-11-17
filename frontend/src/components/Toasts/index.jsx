import { ToastContainer, cssTransition } from "react-toastify";
import { useTranslation } from "react-i18next";
import { CircleAlert, CircleCheck, Info, TriangleAlert, X } from "lucide-react";

const ICONS = {
  success: {
    Icon: CircleCheck,
    className: "text-green-400 light:text-green-700",
  },
  error: { Icon: CircleAlert, className: "text-red-400 light:text-red-700" },
  warning: {
    Icon: TriangleAlert,
    className: "text-amber-400 light:text-amber-700",
  },
  info: { Icon: Info, className: "text-sky-400 light:text-sky-700" },
};

// Fade and a short lift; no bounce. Durations come from the motion tokens
// (see `.toast-in` / `.toast-out` in index.css).
const Fade = cssTransition({
  enter: "toast-in",
  exit: "toast-out",
  collapseDuration: 150,
});

function ToastIcon({ type }) {
  const entry = ICONS[type];
  if (!entry) return null;
  const { Icon, className } = entry;
  return (
    <Icon
      strokeWidth={1.5}
      size={20}
      aria-hidden="true"
      className={className}
    />
  );
}

function ToastCloseButton({ closeToast }) {
  const { t } = useTranslation();
  return (
    <button
      type="button"
      onClick={closeToast}
      aria-label={t("toast.close")}
      className="toast-close shrink-0 self-start -mr-1 inline-flex items-center justify-center w-11 h-11 md:w-8 md:h-8 rounded-md text-zinc-300 light:text-slate-600 hover:text-white light:hover:text-slate-900 hover:bg-white/10 light:hover:bg-slate-100 transition-colors duration-quick ease-smooth"
    >
      <X strokeWidth={1.5} size={16} aria-hidden="true" />
    </button>
  );
}

/**
 * The app's only toast container: top center at every width (below the
 * phone header), translated close button, icons in the StatusNote tones.
 * Per-toast behaviour (timing, role, theme) lives in `utils/toast.js`.
 */
export default function Toasts() {
  return (
    <ToastContainer
      position="top-center"
      newestOnTop
      transition={Fade}
      closeButton={ToastCloseButton}
      icon={ToastIcon}
    />
  );
}
