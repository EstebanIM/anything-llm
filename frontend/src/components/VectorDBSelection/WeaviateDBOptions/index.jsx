import { useId, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  AdvancedSection,
  FIELD_COL,
  FIELD_INPUT,
  FIELD_LABEL,
  FIELD_ROW,
  FIELD_SELECT,
  InfoTip,
  SECRET_MASK,
  SecretInput,
} from "@/components/ProviderFields";

export default function WeaviateDBOptions({ settings }) {
  const { t } = useTranslation();
  const id = useId();
  const [deployment, setDeployment] = useState(
    settings?.WeaviateDeployment ||
      defaultDeployment(settings?.WeaviateEndpoint)
  );
  return (
    <div className="w-full flex flex-col gap-y-7">
      <div className={`${FIELD_ROW} mt-1.5`}>
        <div className={FIELD_COL}>
          <label htmlFor={`${id}-deployment`} className={FIELD_LABEL}>
            {t("provider-forms.vector-db.weaviate.deployment")}
          </label>
          <select
            id={`${id}-deployment`}
            name="WeaviateDeployment"
            value={deployment}
            onChange={(e) => setDeployment(e.target.value)}
            className={FIELD_SELECT}
          >
            <option value="self-hosted">
              {t("provider-forms.vector-db.weaviate.self-hosted")}
            </option>
            <option value="cloud">Weaviate Cloud</option>
          </select>
        </div>

        <div className={FIELD_COL}>
          <label htmlFor={`${id}-endpoint`} className={FIELD_LABEL}>
            {t("provider-forms.vector-db.weaviate.endpoint")}
          </label>
          <input
            id={`${id}-endpoint`}
            type="url"
            name="WeaviateEndpoint"
            className={FIELD_INPUT}
            placeholder={
              deployment === "cloud"
                ? "https://xxxx.weaviate.cloud"
                : "http://localhost:8080"
            }
            defaultValue={settings?.WeaviateEndpoint}
            required={true}
            autoComplete="off"
            spellCheck={false}
          />
        </div>

        <div className={FIELD_COL}>
          <label htmlFor={`${id}-api-key`} className={FIELD_LABEL}>
            {t("provider-fields.api-key")}
          </label>
          <SecretInput
            id={`${id}-api-key`}
            name="WeaviateApiKey"
            placeholder="sk-..."
            defaultValue={settings?.WeaviateApiKey ? SECRET_MASK : ""}
          />
        </div>
      </div>
      {deployment === "self-hosted" && (
        <SelfHostedAdvancedSettings settings={settings} />
      )}
    </div>
  );
}

function SelfHostedAdvancedSettings({ settings }) {
  const { t } = useTranslation();
  const id = useId();

  return (
    <AdvancedSection>
      <div className={`${FIELD_ROW} mt-4`}>
        <div className={FIELD_COL}>
          <LabelWithTip
            htmlFor={`${id}-grpc-host`}
            label={t("provider-forms.vector-db.weaviate.grpc-host")}
          >
            <p>{t("provider-forms.vector-db.weaviate.grpc-host-help")}</p>
            <p className="mt-2">
              {t("provider-forms.vector-db.weaviate.grpc-host-blank")}
            </p>
          </LabelWithTip>
          <input
            id={`${id}-grpc-host`}
            type="text"
            name="WeaviateGrpcHost"
            className={FIELD_INPUT}
            placeholder={t(
              "provider-forms.vector-db.weaviate.grpc-host-placeholder"
            )}
            defaultValue={settings?.WeaviateGrpcHost}
            required={false}
            autoComplete="off"
            spellCheck={false}
          />
        </div>

        <div className={FIELD_COL}>
          <LabelWithTip
            htmlFor={`${id}-grpc-port`}
            label={t("provider-forms.vector-db.weaviate.grpc-port")}
          >
            <p>{t("provider-forms.vector-db.weaviate.grpc-port-help")}</p>
            <p className="mt-2">
              {t("provider-forms.vector-db.weaviate.grpc-port-blank")}
            </p>
          </LabelWithTip>
          <input
            id={`${id}-grpc-port`}
            type="number"
            name="WeaviateGrpcPort"
            className={FIELD_INPUT}
            placeholder="50051"
            min={1}
            max={65535}
            step={1}
            onWheel={(e) => e.currentTarget.blur()}
            defaultValue={settings?.WeaviateGrpcPort}
            required={false}
            autoComplete="off"
          />
        </div>
      </div>
    </AdvancedSection>
  );
}

function LabelWithTip({ htmlFor, label, children }) {
  return (
    <div className="flex items-center gap-x-1 mb-3">
      <label htmlFor={htmlFor} className="text-white text-sm font-semibold">
        {label}
      </label>
      <InfoTip label={label} place="right">
        {children}
      </InfoTip>
    </div>
  );
}

// Older installs don't have WEAVIATE_DEPLOYMENT set, so the server detects Weaviate Cloud
// from the endpoint. This mirrors that so saving the form doesn't switch Cloud users to self-hosted.
function defaultDeployment(endpoint) {
  try {
    const { hostname } = new URL(endpoint);
    return hostname.endsWith(".weaviate.cloud") ||
      hostname.endsWith(".weaviate.network")
      ? "cloud"
      : "self-hosted";
  } catch {
    return "self-hosted";
  }
}
