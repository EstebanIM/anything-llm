import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import System from "@/models/system";
import Workspace from "@/models/workspace";
import paths from "@/utils/paths";
import PreLoader from "@/components/Preloader";
import CTAButton from "@/components/lib/CTAButton";
import StatusNote from "@/components/lib/StatusNote";
import ProviderPrivacy from "@/components/ProviderPrivacy";
import { FIELD_HELP } from "@/components/ProviderFields";
import TelemetryToggle from "@/components/TelemetryToggle";
import OnboardingLayout from "../OnboardingLayout";

const TEXT_LINK =
  "inline-flex items-center w-fit min-h-[44px] md:min-h-0 text-sm font-semibold text-sky-400 light:text-sky-700 hover:underline";

/** Gives a fresh instance one workspace to start chatting in. */
async function createDefaultWorkspace(name) {
  const workspaces = await Workspace.all();
  if (workspaces.length > 0) return;
  // Not blocking: the home screen offers to create a workspace anyway.
  await Workspace.new({ name });
}

export default function DataHandling() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [finishing, setFinishing] = useState(false);
  const [failed, setFailed] = useState(false);

  async function fetchKeys() {
    setLoading(true);
    setSettings(await System.keys());
    setLoading(false);
  }

  useEffect(() => {
    fetchKeys();
  }, []);

  async function finish() {
    if (finishing) return;
    setFailed(false);
    setFinishing(true);
    await createDefaultWorkspace(t("new-workspace.placeholder"));
    const completed = await System.markOnboardingComplete();
    if (completed !== true) {
      setFinishing(false);
      setFailed(true);
      return;
    }
    // A full load so the session, user and settings saved during setup are
    // read fresh by the whole app.
    window.location.replace(paths.home());
  }

  return (
    <OnboardingLayout
      step="data-handling"
      title={t("onboarding.data.title")}
      description={t("onboarding.data.description")}
      onBack={() => navigate(paths.onboarding.userSetup())}
      next={{
        label: failed
          ? t("provider-fields.retry")
          : t("onboarding-flow.finish"),
        busyLabel: t("onboarding-flow.finishing"),
        busy: finishing,
        disabled: loading || !settings,
        onClick: finish,
      }}
    >
      {loading ? (
        <div className="flex justify-center py-16">
          <PreLoader />
        </div>
      ) : !settings ? (
        <div className="flex flex-col items-start gap-y-4 py-6">
          <p role="alert" className="text-sm text-white">
            {t("provider-pages.load-error")}
          </p>
          <CTAButton type="button" onClick={fetchKeys} className="!mr-0">
            {t("provider-fields.retry")}
          </CTAButton>
        </div>
      ) : (
        <div className="flex flex-col gap-y-8">
          <div className="flex flex-col gap-y-4">
            <ProviderPrivacy />
            <Link to={paths.onboarding.llmPreference()} className={TEXT_LINK}>
              {t("onboarding-flow.change-provider")}
            </Link>
          </div>
          <TelemetryToggle settings={settings} />
          <p className={FIELD_HELP}>{t("onboarding.data.settingsHint")}</p>
        </div>
      )}
      {failed && (
        <StatusNote tone="error" announce className="mt-8">
          {t("onboarding-flow.finish-failed")}
        </StatusNote>
      )}
    </OnboardingLayout>
  );
}
