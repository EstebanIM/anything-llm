import { useEffect, useId, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Sidebar from "@/components/SettingsSidebar";
import Admin from "@/models/admin";
import PreLoader from "@/components/Preloader";
import { ChevronRight, FlaskConical } from "lucide-react";
import { configurableFeatures } from "./features";
import Modal, {
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalPrimaryButton,
} from "@/components/lib/Modal";
import paths from "@/utils/paths";
import showToast from "@/utils/toast";

const TOS_STORAGE_KEY = "anythingllm_tos_experimental_feature_set";

const TOS_RISKS = [
  "tos-risk-data-loss",
  "tos-risk-quality",
  "tos-risk-storage",
  "tos-risk-resources",
  "tos-risk-cost",
  "tos-risk-bugs",
];

const TOS_CONDITIONS = [
  "tos-condition-removed",
  "tos-condition-unstable",
  "tos-condition-availability",
  "tos-condition-privacy",
  "tos-condition-changes",
];

export default function ExperimentalFeatures() {
  const { t } = useTranslation();
  const [featureFlags, setFeatureFlags] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedFeature, setSelectedFeature] = useState(
    "experimental_live_file_sync"
  );
  const headingId = useId();
  const features = Object.values(configurableFeatures);

  useEffect(() => {
    async function fetchSettings() {
      setLoading(true);
      const { settings } = await Admin.systemPreferencesByFields([
        "feature_flags",
      ]);
      setFeatureFlags(settings?.feature_flags ?? {});
      setLoading(false);
    }
    fetchSettings();
  }, []);

  const refresh = async () => {
    const { settings } = await Admin.systemPreferencesByFields([
      "feature_flags",
    ]);
    setFeatureFlags(settings?.feature_flags ?? {});
  };

  return (
    <div className="w-screen h-screen overflow-hidden bg-zinc-950 light:bg-slate-50 flex">
      <Sidebar />
      <main className="relative md:ml-[2px] md:mr-[16px] md:my-[16px] md:rounded-[16px] bg-zinc-900 light:bg-white w-full h-full md:h-[calc(100%-32px)] overflow-y-auto p-4 md:p-0">
        <div className="flex flex-col w-full px-1 md:pl-6 md:pr-[50px] md:py-6 py-16">
          <div className="w-full flex flex-col gap-y-1 pb-6 border-white/10 border-b-2">
            <h1
              id={headingId}
              tabIndex={-1}
              className="flex items-center gap-x-2 text-lg leading-6 font-bold text-theme-text-primary"
            >
              <FlaskConical
                strokeWidth={1.5}
                className="h-5 w-5 shrink-0"
                aria-hidden="true"
              />
              {t("admin-pages.experimental.title")}
            </h1>
            <p className="text-xs leading-[18px] text-theme-text-secondary">
              {t("admin-pages.experimental.description")}
            </p>
          </div>
          {loading ? (
            <div className="flex justify-center py-16">
              <PreLoader />
            </div>
          ) : (
            <div className="flex flex-col md:flex-row gap-6 mt-6">
              <nav
                aria-labelledby={headingId}
                className="w-full md:w-auto md:min-w-[320px] md:max-w-[400px] shrink-0"
              >
                <ul className="bg-theme-bg-secondary rounded-xl overflow-hidden">
                  {features.map((feature) => (
                    <li
                      key={feature.key}
                      className="border-b border-white/10 last:border-b-0"
                    >
                      <FeatureItem
                        feature={feature}
                        isSelected={selectedFeature === feature.key}
                        isActive={!!featureFlags[feature.key]}
                        handleClick={setSelectedFeature}
                      />
                    </li>
                  ))}
                </ul>
              </nav>

              <FeatureVerification>
                <section className="flex-1 min-w-0 bg-theme-bg-secondary rounded-xl p-4">
                  {selectedFeature ? (
                    <SelectedFeatureComponent
                      feature={configurableFeatures[selectedFeature]}
                      settings={featureFlags}
                      refresh={refresh}
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full gap-y-2 py-8 text-theme-text-secondary">
                      <FlaskConical
                        strokeWidth={1.5}
                        size={40}
                        aria-hidden="true"
                      />
                      <p className="font-medium">
                        {t("admin-pages.experimental.select")}
                      </p>
                    </div>
                  )}
                </section>
              </FeatureVerification>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

function FeatureItem({
  feature = {},
  isSelected = false,
  isActive = false,
  handleClick = () => {},
}) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const status =
    feature.autoEnabled || isActive
      ? t("admin-pages.experimental.on")
      : t("admin-pages.experimental.off");

  return (
    <button
      type="button"
      aria-current={isSelected ? "true" : undefined}
      onClick={() => {
        if (feature?.href) navigate(feature.href);
        else handleClick?.(feature.key);
      }}
      className={`w-full min-h-[44px] py-3 px-4 flex items-center justify-between gap-x-3 text-left transition-colors duration-quick ease-smooth ${
        isSelected
          ? "bg-white/10 light:bg-slate-200 font-semibold"
          : "hover:bg-white/5 light:hover:bg-slate-100"
      }`}
    >
      <span className="text-sm text-theme-text-primary">
        {t(feature.titleKey)}
      </span>
      <span className="flex items-center gap-x-2 text-sm font-medium text-theme-text-secondary">
        {status}
        {!feature.autoEnabled && (
          <ChevronRight strokeWidth={1.5} size={14} aria-hidden="true" />
        )}
      </span>
    </button>
  );
}

function SelectedFeatureComponent({ feature, settings, refresh }) {
  const Component = feature?.component;
  return Component ? (
    <Component
      enabled={settings[feature.key]}
      feature={feature.key}
      onToggle={refresh}
    />
  ) : null;
}

function readTosAccepted() {
  try {
    return !!window.localStorage.getItem(TOS_STORAGE_KEY);
  } catch {
    return false;
  }
}

function FeatureVerification({ children }) {
  const { t } = useTranslation();
  const [accepted, setAccepted] = useState(readTosAccepted);
  if (accepted) return <>{children}</>;

  function acceptTos(e) {
    e.preventDefault();
    try {
      window.localStorage.setItem(TOS_STORAGE_KEY, "accepted");
    } catch {
      // Storage blocked: the terms are shown again on the next visit.
    }
    setAccepted(true);
    showToast(t("admin-pages.experimental.tos-accepted"), "success");
  }

  return (
    <>
      <Modal isOpen={true} size="lg" closeOnEsc={false}>
        <form onSubmit={acceptTos} className="flex flex-col gap-y-5">
          <ModalHeader
            title={
              <span className="flex items-center gap-2">
                <FlaskConical
                  strokeWidth={1.5}
                  size={20}
                  className="shrink-0"
                  aria-hidden="true"
                />
                {t("admin-pages.experimental.tos-title")}
              </span>
            }
          />
          <ModalBody>
            <div className="w-full text-zinc-300 light:text-slate-700 text-sm flex flex-col gap-y-4">
              <p>{t("admin-pages.experimental.tos-intro")}</p>
              <div>
                <p>{t("admin-pages.experimental.tos-risks-intro")}</p>
                <ul className="list-disc ml-6 mt-2 flex flex-col gap-y-1">
                  {TOS_RISKS.map((key) => (
                    <li key={key}>{t(`admin-pages.experimental.${key}`)}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p>{t("admin-pages.experimental.tos-conditions-intro")}</p>
                <ul className="list-disc ml-6 mt-2 flex flex-col gap-y-1">
                  {TOS_CONDITIONS.map((key) => (
                    <li key={key}>{t(`admin-pages.experimental.${key}`)}</li>
                  ))}
                </ul>
              </div>
              <p>{t("admin-pages.experimental.tos-required")}</p>
            </div>
          </ModalBody>
          <ModalFooter>
            <Link
              to={paths.home()}
              className="flex items-center justify-center h-11 md:h-[34px] px-4 rounded-lg text-sm font-medium bg-transparent border border-zinc-700 light:border-slate-600 text-slate-50 light:text-slate-700 hover:bg-zinc-800 light:hover:bg-slate-100 transition-colors duration-quick ease-smooth"
            >
              {t("admin-pages.experimental.tos-reject")}
            </Link>
            <ModalPrimaryButton type="submit">
              {t("admin-pages.experimental.tos-accept")}
            </ModalPrimaryButton>
          </ModalFooter>
        </form>
      </Modal>
      {children}
    </>
  );
}
