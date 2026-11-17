import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import paths from "@/utils/paths";
import useCustomAppName from "@/hooks/useCustomAppName";
import useLogo from "@/hooks/useLogo";
import usePageTitle from "@/hooks/usePageTitle";

/**
 * Welcome screen. The card is a light surface in both themes, like the
 * sign-in panel, because `loginLogo` is the light-theme variant of the logo.
 */
export default function OnboardingHome() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { brandName } = useCustomAppName();
  const { loginLogo, isCustomLogo } = useLogo();
  usePageTitle(t("onboarding-flow.page-title"));

  return (
    <div
      data-layout="onboarding"
      className="min-h-dvh flex bg-zinc-950 light:bg-slate-50"
    >
      <main className="flex-1 flex items-center justify-center px-4 py-10">
        {/* The global focus ring is too light on this card in the dark theme. */}
        <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white px-6 py-10 md:px-10 text-center shadow-sm [--theme-focus-ring:#075ec4]">
          {isCustomLogo && loginLogo ? (
            <img
              src={loginLogo}
              alt={brandName}
              className="mx-auto max-h-12 max-w-[200px] object-contain"
            />
          ) : (
            <p className="text-2xl font-semibold text-slate-900">{brandName}</p>
          )}
          <h1 className="mt-8 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
            {t("onboarding.home.welcome")}
          </h1>
          <p className="mt-3 text-base text-slate-600">
            {t("onboarding-flow.home-description")}
          </p>
          <button
            type="button"
            onClick={() => navigate(paths.onboarding.llmPreference())}
            className="mt-8 w-full min-h-[44px] px-5 rounded-lg border-none bg-primary-button hover:bg-primary-button-hover text-sm font-semibold text-theme-button-primary-text transition-colors duration-quick ease-smooth"
          >
            {t("onboarding.home.getStarted")}
          </button>
        </div>
      </main>
    </div>
  );
}
