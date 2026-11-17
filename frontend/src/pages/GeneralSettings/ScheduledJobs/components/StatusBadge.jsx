import { useTranslation } from "react-i18next";
import {
  CircleCheck,
  CircleX,
  Clock,
  LoaderCircle,
  TimerOff,
} from "lucide-react";

// One look for a run's status everywhere: icon + text, never color alone.
// Light variants are -700 so the text keeps 4.5:1 on white.
const STATUSES = {
  completed: {
    Icon: CircleCheck,
    className: "text-green-400 light:text-green-700",
  },
  failed: { Icon: CircleX, className: "text-red-400 light:text-red-700" },
  timed_out: {
    Icon: TimerOff,
    className: "text-orange-400 light:text-orange-700",
  },
  running: {
    Icon: LoaderCircle,
    className: "text-sky-400 light:text-sky-700",
    spin: true,
  },
  queued: { Icon: Clock, className: "text-zinc-300 light:text-slate-700" },
};

/**
 * Status of a job run with an icon and translated text.
 * @param {{status: string, className?: string}} props
 */
export default function RunStatusBadge({ status, className = "" }) {
  const { t } = useTranslation();
  const config = STATUSES[status];
  if (!config) {
    return (
      <span
        className={`text-sm text-zinc-400 light:text-slate-600 ${className}`}
      >
        {status}
      </span>
    );
  }
  const { Icon, spin } = config;
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-sm font-medium ${config.className} ${className}`}
    >
      <Icon
        strokeWidth={1.5}
        size={16}
        aria-hidden="true"
        className={`shrink-0 ${spin ? "motion-safe:animate-spin" : ""}`}
      />
      {t(`scheduledJobs.status.${status}`)}
    </span>
  );
}
