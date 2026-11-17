import { CircleAlert, CircleCheck, Info, TriangleAlert } from "lucide-react";

const TONES = {
  info: {
    Icon: Info,
    classes:
      "bg-sky-500/10 border-sky-400/40 text-sky-200 light:bg-sky-50 light:border-sky-700/40 light:text-sky-800",
  },
  warning: {
    Icon: TriangleAlert,
    classes:
      "bg-amber-400/10 border-amber-400/40 text-amber-200 light:bg-amber-50 light:border-amber-700/40 light:text-amber-800",
  },
  success: {
    Icon: CircleCheck,
    classes:
      "bg-green-400/10 border-green-400/40 text-green-200 light:bg-green-50 light:border-green-700/40 light:text-green-800",
  },
  error: {
    Icon: CircleAlert,
    classes:
      "bg-red-400/10 border-red-400/40 text-red-200 light:bg-red-50 light:border-red-700/40 light:text-red-800",
  },
};

/**
 * Inline notice with an icon and text (never color alone), in tones that keep
 * 4.5:1 in both themes. Errors are announced as alerts, the rest as status.
 *
 * @param {object} props
 * @param {"info" | "warning" | "success" | "error"} [props.tone="info"]
 * @param {import("react").ReactNode} [props.title]
 * @param {boolean} [props.announce=false] - live region (use for messages that appear after an action)
 * @param {string} [props.id] - for aria-describedby from a related control
 */
export default function StatusNote({
  tone = "info",
  title,
  announce = false,
  id,
  className = "",
  children,
}) {
  const { Icon, classes } = TONES[tone] || TONES.info;
  const role = announce ? (tone === "error" ? "alert" : "status") : undefined;
  return (
    <div
      id={id}
      role={role}
      className={`flex items-start gap-x-2 rounded-lg border px-3 py-2 text-sm ${classes} ${className}`}
    >
      <Icon
        strokeWidth={1.5}
        size={16}
        aria-hidden="true"
        className="shrink-0 mt-0.5"
      />
      <div className="flex flex-col gap-y-1 min-w-0">
        {title && <p className="font-semibold">{title}</p>}
        {children && <div>{children}</div>}
      </div>
    </div>
  );
}
