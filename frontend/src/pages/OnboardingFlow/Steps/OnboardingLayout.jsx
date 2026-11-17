import {
  createContext,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { useTranslation } from "react-i18next";
import { ArrowLeft, ArrowRight } from "lucide-react";
import CTAButton from "@/components/lib/CTAButton";
import usePageTitle from "@/hooks/usePageTitle";

/** The steps that share the shell, in order. The welcome screen is not one. */
export const ONBOARDING_STEPS = [
  "llm-preference",
  "user-setup",
  "data-handling",
];

const STEP_TITLE_KEYS = {
  "llm-preference": "onboarding.llm.title",
  "user-setup": "onboarding.userSetup.title",
  "data-handling": "onboarding.data.title",
};

const EMPTY_USER_SETUP = {
  audience: null,
  usePassword: null,
  username: "",
  password: "",
  confirm: "",
};

const OnboardingContext = createContext(null);

/**
 * Keeps what the person chose or typed while they move between steps, so
 * going back never loses it. Saved settings live on the server; this only
 * holds what has not been saved yet.
 */
export function OnboardingProvider({ children }) {
  const [llmProvider, setLlmProvider] = useState(null);
  const [userSetup, setUserSetup] = useState(EMPTY_USER_SETUP);

  function updateUserSetup(patch) {
    setUserSetup((prev) => ({ ...prev, ...patch }));
  }

  return (
    <OnboardingContext.Provider
      value={{ llmProvider, setLlmProvider, userSetup, updateUserSetup }}
    >
      {children}
    </OnboardingContext.Provider>
  );
}

export function useOnboarding() {
  return useContext(OnboardingContext);
}

const BACK_BUTTON =
  "inline-flex items-center justify-center gap-x-2 min-h-[44px] md:min-h-0 md:h-10 px-4 rounded-lg border border-zinc-500 light:border-slate-500 bg-transparent text-sm font-semibold text-white hover:bg-zinc-800 light:hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-60 transition-colors duration-quick ease-smooth";

/**
 * Shell of one setup step: progress, heading (focused on arrival), content
 * and the action bar at the end of the content.
 *
 * @param {object} props
 * @param {string} props.step - one of ONBOARDING_STEPS
 * @param {string} props.title
 * @param {string} [props.description]
 * @param {() => void} props.onBack
 * @param {object} props.next
 * @param {string} props.next.label
 * @param {string} [props.next.busyLabel]
 * @param {boolean} [props.next.busy]
 * @param {boolean} [props.next.disabled]
 * @param {string} [props.next.form] - id of the step form the button submits
 * @param {() => void} [props.next.onClick] - when there is no form
 */
export default function OnboardingLayout({
  step,
  title,
  description,
  onBack,
  next,
  children,
}) {
  const { t } = useTranslation();
  const headingRef = useRef(null);
  const progressId = useId();
  const index = ONBOARDING_STEPS.indexOf(step);
  usePageTitle(title);

  // Each step mounts its own shell: start at the top and land on the heading.
  useEffect(() => {
    window.scrollTo(0, 0);
    headingRef.current?.focus({ preventScroll: true });
  }, []);

  return (
    <div
      data-layout="onboarding"
      className="min-h-dvh flex flex-col bg-zinc-950 light:bg-slate-50"
    >
      <main className="flex-1 flex flex-col w-full max-w-3xl mx-auto md:px-6 md:py-12">
        <div className="flex-1 md:flex-none flex flex-col bg-zinc-900 light:bg-white px-4 py-6 md:p-8 md:rounded-2xl md:border border-zinc-800 light:border-slate-200">
          <div className="mb-8">
            <p id={progressId} className="text-sm text-theme-text-secondary">
              {t("onboarding-flow.step-of", {
                current: index + 1,
                total: ONBOARDING_STEPS.length,
              })}
            </p>
            <ol
              aria-labelledby={progressId}
              className="mt-2 grid grid-cols-3 gap-2"
            >
              {ONBOARDING_STEPS.map((key, i) => {
                const state =
                  i < index ? "done" : i === index ? "current" : "upcoming";
                return (
                  <li
                    key={key}
                    aria-current={state === "current" ? "step" : undefined}
                    className="flex flex-col gap-y-2 min-w-0"
                  >
                    <span
                      aria-hidden="true"
                      className={`h-1 rounded-full ${
                        state === "upcoming"
                          ? "bg-zinc-700 light:bg-slate-300"
                          : "bg-sky-500 light:bg-sky-700"
                      }`}
                    />
                    <span
                      className={`sr-only md:not-sr-only text-xs ${
                        state === "current"
                          ? "font-semibold text-white"
                          : "text-theme-text-secondary"
                      }`}
                    >
                      {t(STEP_TITLE_KEYS[key])}
                      {state === "done" && (
                        <span className="sr-only">
                          {" "}
                          {t("onboarding-flow.step-done")}
                        </span>
                      )}
                    </span>
                  </li>
                );
              })}
            </ol>
          </div>

          <div className="flex flex-col gap-y-2 mb-8">
            <h1
              ref={headingRef}
              tabIndex={-1}
              aria-describedby={progressId}
              // Focus only marks where the step starts; the heading is not a control.
              className="text-2xl font-semibold text-white focus:outline-none"
            >
              {title}
            </h1>
            {description && (
              <p className="text-sm text-theme-text-secondary">{description}</p>
            )}
          </div>

          <div className="flex-1">{children}</div>

          <div className="mt-10 pt-6 border-t border-zinc-700 light:border-slate-300 flex items-center justify-between gap-3">
            {/* Leaving mid-save could drop the session the save is creating. */}
            <button
              type="button"
              onClick={onBack}
              disabled={next.busy}
              className={BACK_BUTTON}
            >
              <ArrowLeft strokeWidth={1.5} size={16} aria-hidden="true" />
              {t("onboarding-flow.back")}
            </button>
            <CTAButton
              type={next.form ? "submit" : "button"}
              form={next.form}
              busy={next.busy}
              disabled={next.disabled}
              onClick={next.onClick}
              className="!mr-0 !px-5 !text-sm md:!h-10"
            >
              {next.busy && next.busyLabel ? next.busyLabel : next.label}
              {!next.busy && (
                <ArrowRight strokeWidth={1.5} size={16} aria-hidden="true" />
              )}
            </CTAButton>
          </div>
        </div>
      </main>
    </div>
  );
}
