import { useState, useEffect, useId } from "react";
import { useTranslation } from "react-i18next";
import { SquareArrowOutUpRight, Info } from "lucide-react";
import System from "@/models/system";
import {
  FIELD_COL,
  FIELD_ERROR,
  FIELD_INPUT,
  FIELD_ROW,
  FIELD_SELECT,
  ModelsErrorText,
  SECRET_MASK,
  SecretInput,
} from "@/components/ProviderFields";
import {
  ExternalLink,
  FieldLabel,
  ModelSelectField,
  TEXT_BUTTON,
  blurOnWheel,
} from "@/components/LLMSelection/FormParts";
import { AWS_REGIONS } from "./regions";

const MANUAL_REGION_ENTRY = "-- Enter region manually --";

export default function AwsBedrockLLMOptions({ settings }) {
  const { t } = useTranslation();
  const id = useId();
  const [inputValue, setInputValue] = useState(settings?.AwsBedrockLLMApiKey);
  const [apiKey, setApiKey] = useState(settings?.AwsBedrockLLMApiKey);
  const [region, setRegion] = useState(settings?.AwsBedrockLLMRegion);
  // A saved region outside the known list (eg: GovCloud or other specialized
  // regions set via ENV/Helm) can only render via manual entry - a select
  // with no matching option would silently fall back to the first region.
  const [manualRegion, setManualRegion] = useState(
    !!settings?.AwsBedrockLLMRegion &&
      !AWS_REGIONS.some((r) => r.code === settings.AwsBedrockLLMRegion)
  );

  return (
    <div className="w-full flex flex-col">
      {!settings?.credentialsOnly && (
        <div className="flex flex-col md:flex-row md:items-center gap-x-2 text-white mb-4 bg-blue-800/30 light:bg-sky-100 w-fit rounded-lg px-4 py-2">
          <div className="gap-x-2 flex items-center">
            <Info
              strokeWidth={1.5}
              size={40}
              aria-hidden="true"
              className="shrink-0"
            />
            <p className="text-base">
              {t("llm-fields.bedrock.intro")}
              <br />
              <ExternalLink
                href="https://docs.anythingllm.com/setup/llm-configuration/cloud/aws-bedrock"
                className="underline inline-flex gap-x-1 items-center"
              >
                {t("llm-fields.bedrock.read-more")}
                <SquareArrowOutUpRight
                  strokeWidth={1.5}
                  size={14}
                  aria-hidden="true"
                />
              </ExternalLink>
            </p>
          </div>
        </div>
      )}

      <div className={`${FIELD_ROW} my-1.5`}>
        <div className={FIELD_COL}>
          <FieldLabel
            htmlFor={`${id}-key`}
            label={t("provider-fields.api-key")}
          />
          <SecretInput
            id={`${id}-key`}
            name="AwsBedrockLLMApiKey"
            defaultValue={settings?.AwsBedrockLLMApiKey ? SECRET_MASK : ""}
            required={true}
            onChange={(e) => setInputValue(e.target.value)}
            onBlur={() => setApiKey(inputValue)}
          />
        </div>
        <div className={FIELD_COL}>
          <FieldLabel
            htmlFor={`${id}-region`}
            label={t("provider-fields.region")}
          />
          {manualRegion ? (
            <>
              <input
                id={`${id}-region`}
                type="text"
                name="AwsBedrockLLMRegion"
                className={FIELD_INPUT}
                placeholder="us-gov-west-1"
                defaultValue={region}
                required={true}
                autoComplete="off"
                spellCheck={false}
                onChange={(e) => setRegion(e.target.value)}
              />
              <button
                type="button"
                onClick={() => {
                  if (!AWS_REGIONS.some((r) => r.code === region))
                    setRegion(AWS_REGIONS[0].code);
                  setManualRegion(false);
                }}
                className={TEXT_BUTTON}
              >
                {t("llm-fields.common.select-from-regions")}
              </button>
            </>
          ) : (
            <select
              id={`${id}-region`}
              name="AwsBedrockLLMRegion"
              value={region}
              required={true}
              className={FIELD_SELECT}
              onChange={(e) => {
                if (e.target.value === MANUAL_REGION_ENTRY)
                  return setManualRegion(true);
                setRegion(e.target.value);
              }}
            >
              {AWS_REGIONS.map((region) => {
                return (
                  <option key={region.code} value={region.code}>
                    {region.name} ({region.code})
                  </option>
                );
              })}
              <option disabled={true}>──────────</option>
              <option value={MANUAL_REGION_ENTRY}>
                {t("llm-fields.common.enter-region-manually")}
              </option>
            </select>
          )}
        </div>
      </div>

      <div className={`${FIELD_ROW} my-1.5`}>
        {!settings?.credentialsOnly && (
          <>
            <BedrockModelSelection
              settings={settings}
              apiKey={apiKey}
              region={region}
            />
            <div className={FIELD_COL}>
              <FieldLabel
                htmlFor={`${id}-context`}
                label={t("provider-fields.context-window")}
              />
              <input
                id={`${id}-context`}
                type="number"
                name="AwsBedrockLLMTokenLimit"
                className={FIELD_INPUT}
                placeholder={t("llm-fields.common.context-window-placeholder", {
                  example: 8192,
                })}
                min={1}
                onWheel={blurOnWheel}
                defaultValue={settings?.AwsBedrockLLMTokenLimit}
                required={true}
                autoComplete="off"
              />
            </div>
            <div className={FIELD_COL}>
              <FieldLabel
                htmlFor={`${id}-max-tokens`}
                label={t("provider-fields.max-tokens")}
                tip={t("llm-fields.bedrock.max-tokens-tip")}
              />
              <input
                id={`${id}-max-tokens`}
                type="number"
                name="AwsBedrockLLMMaxTokens"
                className={FIELD_INPUT}
                placeholder="4096"
                min={1}
                onWheel={blurOnWheel}
                defaultValue={settings?.AwsBedrockLLMMaxTokens}
                required={false}
                autoComplete="off"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

const MANUAL_MODEL_ENTRY = "-- Enter model ID manually --";

function BedrockModelSelection({ settings, apiKey, region }) {
  const { t } = useTranslation();
  const id = useId();
  const [groupedModels, setGroupedModels] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [manualEntry, setManualEntry] = useState(false);

  useEffect(() => {
    async function findCustomModels() {
      setLoading(true);
      const { models = [], error } = await System.customModels(
        "bedrock",
        apiKey,
        null,
        null,
        { region }
      );
      const modelsByOrganization = models.reduce((acc, model) => {
        const org = model.organization || "AWS Bedrock";
        acc[org] = acc[org] || [];
        acc[org].push(model);
        return acc;
      }, {});
      setGroupedModels(modelsByOrganization);
      setError(error || null);

      // Saved models not present in the fetched list (eg: cross-region
      // inference profile IDs the Mantle listing omits) can only render
      // via manual entry - same for an empty list.
      const savedModel = settings?.AwsBedrockLLMModel;
      const savedModelInList = models.some((model) => model.id === savedModel);
      setManualEntry(
        models.length === 0 || (!!savedModel && !savedModelInList)
      );
      setLoading(false);
    }
    findCustomModels();
  }, [apiKey, region]);

  if (loading) {
    return (
      <ModelSelectField
        name="AwsBedrockLLMModel"
        label={t("provider-fields.chat-model")}
        status="loading"
      />
    );
  }

  if (manualEntry) {
    return (
      <div className={FIELD_COL}>
        <FieldLabel
          htmlFor={`${id}-model`}
          label={t("provider-fields.chat-model")}
        />
        <input
          id={`${id}-model`}
          type="text"
          name="AwsBedrockLLMModel"
          className={FIELD_INPUT}
          placeholder="eu.anthropic.claude-sonnet-4-5-20250929-v1:0"
          defaultValue={settings?.AwsBedrockLLMModel}
          required={true}
          autoComplete="off"
          spellCheck={false}
          aria-describedby={error ? `${id}-model-error` : undefined}
        />
        {error && (
          <p id={`${id}-model-error`} role="alert" className={FIELD_ERROR}>
            <ModelsErrorText error={error} />
          </p>
        )}
        {Object.keys(groupedModels).length > 0 && (
          <button
            type="button"
            onClick={() => setManualEntry(false)}
            className={TEXT_BUTTON}
          >
            {t("llm-fields.common.select-from-models")}
          </button>
        )}
      </div>
    );
  }

  return (
    <ModelSelectField
      name="AwsBedrockLLMModel"
      label={t("provider-fields.chat-model")}
      status="ready"
      defaultValue={settings?.AwsBedrockLLMModel}
      onChange={(e) => {
        if (e.target.value === MANUAL_MODEL_ENTRY) setManualEntry(true);
      }}
    >
      {Object.keys(groupedModels)
        .sort()
        .map((organization) => (
          <optgroup key={organization} label={organization}>
            {groupedModels[organization].map((model) => (
              <option key={model.id} value={model.id}>
                {model.name}
              </option>
            ))}
          </optgroup>
        ))}
      <option disabled={true}>──────────</option>
      <option value={MANUAL_MODEL_ENTRY}>
        {t("llm-fields.common.enter-model-manually")}
      </option>
    </ModelSelectField>
  );
}
