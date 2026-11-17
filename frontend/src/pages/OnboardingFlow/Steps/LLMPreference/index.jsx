import { useEffect, useId, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import System from "@/models/system";
import paths from "@/utils/paths";
import PreLoader from "@/components/Preloader";
import CTAButton from "@/components/lib/CTAButton";
import StatusNote from "@/components/lib/StatusNote";
import ProviderSearchMenu from "@/components/lib/ProviderSearchMenu";
import ProviderOption from "@/components/lib/ProviderSearchMenu/ProviderOption";
import { withEmbeddedLemonade } from "@/components/LLMSelection/EmbeddedLemonadeOptions";
import { AVAILABLE_LLM_PROVIDERS } from "@/pages/GeneralSettings/LLMPreference";
import OnboardingLayout, { useOnboarding } from "../OnboardingLayout";

export default function LLMPreference() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { llmProvider, setLlmProvider } = useOnboarding();
  const formId = useId();
  const providerHeadingId = useId();
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState(null);

  async function fetchKeys() {
    setLoading(true);
    setSettings(await System.keys());
    setLoading(false);
  }

  useEffect(() => {
    fetchKeys();
  }, []);

  const providers = withEmbeddedLemonade(AVAILABLE_LLM_PROVIDERS, settings, {
    onboarding: true,
  });
  const selectedLLM =
    llmProvider ??
    settings?.LLMProvider ??
    (settings?.EmbeddedLemonadeEnabled ? "embedded_lemonade" : "openai");
  const selectedLLMObject = providers.find((llm) => llm.value === selectedLLM);

  async function handleSubmit(e) {
    e.preventDefault();
    if (saving) return;
    setSaveError(null);
    setSaving(true);

    const data = { LLMProvider: selectedLLM };
    // Only fill in the defaults: never replace an embedder or vector
    // database that is already configured.
    if (!settings?.EmbeddingEngine) data.EmbeddingEngine = "native";
    if (!settings?.VectorDB) data.VectorDB = "lancedb";
    for (const [key, value] of new FormData(e.target).entries())
      data[key] = value;

    const { error } = await System.updateSystem(data);
    if (error) {
      setSaving(false);
      setSaveError(t("provider-pages.toast.failed", { error }));
      return;
    }
    navigate(paths.onboarding.userSetup());
  }

  return (
    <OnboardingLayout
      step="llm-preference"
      title={t("onboarding.llm.title")}
      description={t("onboarding.llm.description")}
      onBack={() => navigate(paths.onboarding.home())}
      next={{
        label: t("onboarding-flow.next"),
        busyLabel: t("common.saving"),
        busy: saving,
        disabled: loading || !settings,
        form: formId,
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
        <form id={formId} onSubmit={handleSubmit} className="w-full">
          <h2
            id={providerHeadingId}
            className="text-base font-bold text-white mb-4"
          >
            {t("llm.provider")}
          </h2>
          <div className="relative">
            <ProviderSearchMenu
              items={providers}
              labelledBy={providerHeadingId}
              selected={
                selectedLLMObject ?? {
                  name: t("provider-pages.menu.none-selected"),
                  description: t("provider-pages.none.llm"),
                }
              }
              placeholder={t("chat.llm.search")}
              renderItem={(llm, close) => (
                <ProviderOption
                  name={llm.name}
                  value={llm.value}
                  image={llm.logo}
                  description={llm.description}
                  descriptionKey={llm.descriptionKey}
                  checked={selectedLLM === llm.value}
                  onClick={() => {
                    setLlmProvider(llm.value);
                    close();
                  }}
                />
              )}
            />
          </div>
          <div className="mt-4 flex flex-col gap-y-1">
            {selectedLLMObject?.options?.(settings)}
          </div>
          {saveError && (
            <StatusNote tone="error" announce className="mt-6">
              {saveError}
            </StatusNote>
          )}
        </form>
      )}
    </OnboardingLayout>
  );
}
