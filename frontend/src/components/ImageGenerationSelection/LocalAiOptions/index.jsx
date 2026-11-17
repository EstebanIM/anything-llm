import { useId } from "react";
import { useTranslation } from "react-i18next";
import { LoaderCircle } from "lucide-react";
import useProviderEndpointAutoDiscovery from "@/hooks/useProviderEndpointAutoDiscovery";
import { LOCALAI_COMMON_URLS } from "@/utils/constants";
import ImageModelSelection from "../ImageModelSelection";
import ImageDimensionSelection from "../ImageDimensionSelection";
import {
  FIELD_COL,
  FIELD_HELP,
  FIELD_INPUT,
  FIELD_LABEL,
  FIELD_ROW,
  SECRET_MASK,
  SecretInput,
} from "@/components/ProviderFields";

const PROVIDER_NAME = "LocalAI";

export default function LocalAiImageOptions({ settings }) {
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
    handleAutoDetectClick,
  } = useProviderEndpointAutoDiscovery({
    provider: "localai-imggen",
    initialBasePath: settings?.ImageGenerationLocalAiBasePath,
    initialAuthToken: settings?.ImageGenerationLocalAiApiKey ? SECRET_MASK : "",
    ENDPOINTS: LOCALAI_COMMON_URLS,
  });

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
            name="ImageGenerationLocalAiBasePath"
            className={FIELD_INPUT}
            placeholder="http://localhost:8080/v1"
            value={basePathValue.value || ""}
            required={true}
            autoComplete="off"
            spellCheck={false}
            onChange={basePath.onChange}
            onBlur={basePath.onBlur}
            aria-describedby={`${id}-base-url-help`}
          />
          <p id={`${id}-base-url-help`} className={FIELD_HELP}>
            {t("provider-forms.shared.url-help", { provider: PROVIDER_NAME })}{" "}
            <a
              href="https://localai.io/features/image-generation/"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-white"
            >
              {t("provider-forms.shared.learn-more")}
              <span className="sr-only">
                {" "}
                {t("provider-fields.opens-new-tab")}
              </span>
            </a>
          </p>
          <p
            aria-live="polite"
            className={detectMessage ? FIELD_HELP : "sr-only"}
          >
            {detectMessage}
          </p>
        </div>
        <div className={FIELD_COL}>
          <label htmlFor={`${id}-api-key`} className={FIELD_LABEL}>
            {t("provider-fields.api-key")}{" "}
            <span className="font-normal text-theme-text-secondary">
              ({t("provider-fields.optional")})
            </span>
          </label>
          <SecretInput
            id={`${id}-api-key`}
            name="ImageGenerationLocalAiApiKey"
            value={authTokenValue.value || ""}
            onChange={authToken.onChange}
            onBlur={authToken.onBlur}
          />
        </div>
        <ImageModelSelection
          provider="localai-imggen"
          apiKey={authToken.value}
          basePath={basePath.value}
          settings={settings}
          endpointName="LocalAI URL"
        />
        <ImageDimensionSelection
          provider="localai-imggen"
          settings={settings}
        />
      </div>
    </div>
  );
}
