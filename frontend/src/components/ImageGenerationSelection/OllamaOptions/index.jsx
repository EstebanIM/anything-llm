import { useId, useState } from "react";
import { useTranslation } from "react-i18next";
import { LoaderCircle } from "lucide-react";
import useProviderEndpointAutoDiscovery from "@/hooks/useProviderEndpointAutoDiscovery";
import { OLLAMA_COMMON_URLS } from "@/utils/constants";
import ImageModelSelection from "../ImageModelSelection";
import ImageDimensionSelection from "../ImageDimensionSelection";
import {
  AdvancedSection,
  FIELD_COL,
  FIELD_HELP,
  FIELD_INPUT,
  FIELD_ROW,
  InfoTip,
  SECRET_MASK,
  SecretInput,
} from "@/components/ProviderFields";

const PROVIDER_NAME = "Ollama";

export default function OllamaImageOptions({ settings }) {
  const { t } = useTranslation();
  const id = useId();
  const {
    autoDetecting: loading,
    autoDetectStatus,
    detectedEndpoint,
    basePath,
    basePathValue,
    authToken,
    authTokenValue,
    showAdvancedControls,
    setShowAdvancedControls,
    handleAutoDetectClick,
  } = useProviderEndpointAutoDiscovery({
    provider: "ollama-imggen",
    initialBasePath: settings?.ImageGenerationOllamaBasePath,
    initialAuthToken: settings?.ImageGenerationOllamaAuthToken
      ? SECRET_MASK
      : "",
    ENDPOINTS: OLLAMA_COMMON_URLS,
  });
  // A detection started by hand must not fold the section with the focused button inside.
  const [keepOpen, setKeepOpen] = useState(false);

  const detectMessage =
    autoDetectStatus === "found"
      ? t("provider-fields.detect-success", {
          provider: PROVIDER_NAME,
          url: detectedEndpoint,
        })
      : autoDetectStatus === "not-found"
        ? t("provider-fields.detect-failed", { provider: PROVIDER_NAME })
        : "";

  return (
    <div className="w-full flex flex-col gap-y-4">
      <div className={`${FIELD_ROW} mt-1.5`}>
        <ImageModelSelection
          provider="ollama-imggen"
          apiKey={authToken.value}
          basePath={basePath.value}
          settings={settings}
          endpointName="Ollama URL"
        />
        <ImageDimensionSelection provider="ollama-imggen" settings={settings} />
      </div>
      <p className="text-xs leading-[18px] text-theme-text-secondary">
        {t("provider-forms.image-generation.ollama.experimental")}{" "}
        {t("provider-forms.image-generation.capable-only")}
      </p>

      <div>
        <AdvancedSection
          open={showAdvancedControls || keepOpen}
          onOpenChange={(next) => {
            setKeepOpen(false);
            setShowAdvancedControls(next);
          }}
        >
          <div className={`${FIELD_ROW} mt-4`}>
            <div className={FIELD_COL}>
              <div className="flex items-center justify-between gap-x-2 mb-3">
                <label
                  htmlFor={`${id}-base-url`}
                  className="text-white text-sm font-semibold"
                >
                  {t("provider-fields.base-url")}
                </label>
                <button
                  type="button"
                  onClick={(e) => {
                    if (loading) return;
                    setKeepOpen(true);
                    handleAutoDetectClick(e);
                  }}
                  aria-disabled={loading}
                  aria-busy={loading}
                  className="inline-flex items-center justify-center gap-x-1 shrink-0 rounded-lg border-none bg-primary-button text-theme-button-primary-text hover:bg-primary-button-hover text-xs font-medium px-3 md:px-2 min-h-[44px] md:min-h-[28px] transition-colors duration-quick ease-smooth aria-disabled:cursor-wait aria-disabled:opacity-70"
                >
                  {loading && (
                    <LoaderCircle
                      strokeWidth={1.5}
                      size={14}
                      aria-hidden="true"
                      className="animate-spin"
                    />
                  )}
                  {loading
                    ? t("provider-fields.detecting")
                    : t("provider-fields.auto-detect")}
                </button>
              </div>
              <input
                id={`${id}-base-url`}
                type="url"
                name="ImageGenerationOllamaBasePath"
                className={FIELD_INPUT}
                placeholder="http://127.0.0.1:11434"
                value={basePathValue.value || ""}
                required={true}
                autoComplete="off"
                spellCheck={false}
                onChange={basePath.onChange}
                onBlur={basePath.onBlur}
                aria-describedby={`${id}-base-url-help`}
              />
              <p id={`${id}-base-url-help`} className={FIELD_HELP}>
                {t("provider-forms.shared.url-help", {
                  provider: PROVIDER_NAME,
                })}
              </p>
            </div>

            <div className={FIELD_COL}>
              <div className="flex items-center gap-x-1 mb-3">
                <label
                  htmlFor={`${id}-auth-token`}
                  className="text-white text-sm font-semibold"
                >
                  {t("provider-fields.auth-token")}
                </label>
                <InfoTip label={t("provider-fields.auth-token")}>
                  {t("provider-forms.shared.bearer-help", {
                    provider: PROVIDER_NAME,
                  })}
                </InfoTip>
              </div>
              <SecretInput
                id={`${id}-auth-token`}
                name="ImageGenerationOllamaAuthToken"
                value={authTokenValue.value || ""}
                onChange={authToken.onChange}
                onBlur={authToken.onBlur}
                required={false}
              />
            </div>
          </div>
        </AdvancedSection>
        <p
          aria-live="polite"
          className={detectMessage ? FIELD_HELP : "sr-only"}
        >
          {detectMessage}
        </p>
      </div>
    </div>
  );
}
