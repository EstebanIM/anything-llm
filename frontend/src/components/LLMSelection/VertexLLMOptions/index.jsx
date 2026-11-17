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
import { VERTEX_REGIONS } from "./regions";

const MANUAL_REGION_ENTRY = "-- Enter region manually --";

export default function VertexLLMOptions({ settings }) {
  const { t } = useTranslation();
  const id = useId();
  const [region, setRegion] = useState(settings?.VertexAiLLMRegion || "global");
  // A saved region outside the known list can only render via manual entry -
  // a select with no matching option would silently fall back to the first
  // region.
  const [manualRegion, setManualRegion] = useState(
    !!settings?.VertexAiLLMRegion &&
      !VERTEX_REGIONS.some((r) => r.code === settings.VertexAiLLMRegion)
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
              {t("llm-fields.vertex.intro")}
              <br />
              <ExternalLink
                href="https://docs.anythingllm.com/setup/llm-configuration/cloud/google-vertex"
                className="underline inline-flex gap-x-1 items-center"
              >
                {t("llm-fields.vertex.read-more")}
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
            name="VertexAiLLMApiKey"
            defaultValue={settings?.VertexAiLLMApiKey ? SECRET_MASK : ""}
            required={true}
          />
        </div>
        <div className={FIELD_COL}>
          <FieldLabel
            htmlFor={`${id}-project`}
            label={t("llm-fields.vertex.project-id")}
          />
          <input
            id={`${id}-project`}
            type="text"
            name="VertexAiLLMProjectId"
            className={FIELD_INPUT}
            placeholder="my-gcp-project"
            defaultValue={settings?.VertexAiLLMProjectId}
            required={true}
            autoComplete="off"
            spellCheck={false}
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
                name="VertexAiLLMRegion"
                className={FIELD_INPUT}
                placeholder="us-central1"
                defaultValue={region}
                required={true}
                autoComplete="off"
                spellCheck={false}
                onChange={(e) => setRegion(e.target.value)}
              />
              <button
                type="button"
                onClick={() => {
                  if (!VERTEX_REGIONS.some((r) => r.code === region))
                    setRegion(VERTEX_REGIONS[0].code);
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
              name="VertexAiLLMRegion"
              value={region}
              required={true}
              className={FIELD_SELECT}
              onChange={(e) => {
                if (e.target.value === MANUAL_REGION_ENTRY)
                  return setManualRegion(true);
                setRegion(e.target.value);
              }}
            >
              {VERTEX_REGIONS.map((region) => {
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

      {!settings?.credentialsOnly && (
        <div className={`${FIELD_ROW} my-1.5`}>
          <VertexModelSelection settings={settings} />
          <div className={FIELD_COL}>
            <FieldLabel
              htmlFor={`${id}-context`}
              label={t("provider-fields.context-window")}
              tip={t("llm-fields.vertex.context-window-tip")}
            />
            <input
              id={`${id}-context`}
              type="number"
              name="VertexAiLLMTokenLimit"
              className={FIELD_INPUT}
              placeholder={t("llm-fields.common.context-window-placeholder", {
                example: 128000,
              })}
              min={1}
              onWheel={blurOnWheel}
              defaultValue={settings?.VertexAiLLMTokenLimit}
              required={false}
              autoComplete="off"
            />
          </div>
        </div>
      )}
    </div>
  );
}

const MANUAL_MODEL_ENTRY = "-- Enter model ID manually --";

function VertexModelSelection({ settings }) {
  const { t } = useTranslation();
  const id = useId();
  const [groupedModels, setGroupedModels] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [manualEntry, setManualEntry] = useState(false);

  useEffect(() => {
    async function findCustomModels() {
      setLoading(true);
      const { models = [], error } = await System.customModels("vertex");
      const modelsByOrganization = models.reduce((acc, model) => {
        const org = model.organization || "Google";
        acc[org] = acc[org] || [];
        acc[org].push(model);
        return acc;
      }, {});
      setGroupedModels(modelsByOrganization);
      setError(error || null);

      // Saved models not present in the fetched list (eg: Model Garden
      // partner models like `meta/llama-...`) can only render via manual
      // entry - same for an empty list.
      const savedModel = settings?.VertexAiLLMModelPref;
      const savedModelInList = models.some((model) => model.id === savedModel);
      setManualEntry(
        models.length === 0 || (!!savedModel && !savedModelInList)
      );
      setLoading(false);
    }
    findCustomModels();
  }, []);

  if (loading) {
    return (
      <ModelSelectField
        name="VertexAiLLMModelPref"
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
          name="VertexAiLLMModelPref"
          className={FIELD_INPUT}
          placeholder="gemini-2.5-flash"
          defaultValue={settings?.VertexAiLLMModelPref}
          required={true}
          autoComplete="off"
          spellCheck={false}
          aria-describedby={error ? `${id}-model-error` : undefined}
        />
        {error && (
          <p id={`${id}-model-error`} role="alert" className={FIELD_ERROR}>
            {t("provider-fields.models-error", { error })}
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
      name="VertexAiLLMModelPref"
      label={t("provider-fields.chat-model")}
      status="ready"
      defaultValue={settings?.VertexAiLLMModelPref}
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
