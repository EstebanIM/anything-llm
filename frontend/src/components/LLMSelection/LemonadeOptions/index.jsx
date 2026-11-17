import { useState, useEffect, useId } from "react";
import { useTranslation } from "react-i18next";
import { Tooltip } from "react-tooltip";
import strDistance from "js-levenshtein";
import System from "@/models/system";
import useProviderEndpointAutoDiscovery from "@/hooks/useProviderEndpointAutoDiscovery";
import { LLM_PREFERENCE_CHANGED_EVENT } from "@/pages/GeneralSettings/LLMPreference";
import { LEMONADE_COMMON_URLS } from "@/utils/constants";
import { originOnly } from "@/utils/url";
import ModelTable, { DOWNLOADED_GROUP } from "@/components/lib/ModelTable";
import ModelTableLayout from "@/components/lib/ModelTable/layout";
import ModelTableLoadingSkeleton from "@/components/lib/ModelTable/loading";
import showToast from "@/utils/toast";
import LemonadeUtils from "@/models/utils/lemonadeUtils";
import {
  FIELD_COL,
  FIELD_ERROR,
  FIELD_INPUT,
  FIELD_ROW,
  SECRET_MASK,
  SecretInput,
} from "@/components/ProviderFields";
import {
  AutoDetectButton,
  AutoDetectStatus,
  ExternalLink,
  FieldLabel,
  blurOnWheel,
} from "@/components/LLMSelection/FormParts";

export default function LemonadeOptions({ settings }) {
  const { t } = useTranslation();
  const id = useId();
  const {
    autoDetecting: loading,
    autoDetectStatus,
    detectedEndpoint,
    basePath,
    basePathValue,
    handleAutoDetectClick,
  } = useProviderEndpointAutoDiscovery({
    provider: "lemonade",
    initialBasePath: settings?.LemonadeLLMBasePath,
    ENDPOINTS: LEMONADE_COMMON_URLS,
    normalizeBasePath: originOnly,
  });
  const [selectedModelId, setSelectedModelId] = useState(
    settings?.LemonadeLLMModelPref
  );
  const [maxTokens, setMaxTokens] = useState(
    settings?.LemonadeLLMModelTokenLimit || 4096
  );

  return (
    <div className="w-full flex flex-col gap-y-7">
      <div className={`${FIELD_ROW} mt-1.5`}>
        <div className={FIELD_COL}>
          <FieldLabel
            htmlFor={`${id}-url`}
            label={t("provider-fields.base-url")}
            tipClickable={true}
            tip={
              <>
                {t("llm-fields.common.base-url-tip", { provider: "Lemonade" })}
                <br />
                <br />
                {t("llm-fields.lemonade.tcp-required")}
                <br />
                <br />
                <ExternalLink
                  href="https://lemonade-server.ai/docs"
                  className="underline"
                >
                  {t("llm-fields.common.learn-more")}
                </ExternalLink>
              </>
            }
          >
            <AutoDetectButton busy={loading} onClick={handleAutoDetectClick} />
          </FieldLabel>
          <input
            id={`${id}-url`}
            type="url"
            name="LemonadeLLMBasePath"
            className={FIELD_INPUT}
            placeholder="http://localhost:13305"
            value={basePathValue.value}
            required={true}
            autoComplete="off"
            spellCheck={false}
            aria-describedby={`${id}-url-status`}
            onChange={basePath.onChange}
            onBlur={basePath.onBlur}
          />
          <div id={`${id}-url-status`} className="mt-1">
            <AutoDetectStatus
              status={autoDetectStatus}
              provider="Lemonade"
              endpoint={detectedEndpoint}
            />
          </div>
        </div>
        <div className={FIELD_COL}>
          <FieldLabel
            htmlFor={`${id}-context`}
            label={t("provider-fields.context-window")}
            tip={t("llm-fields.lemonade.context-window-tip")}
          />
          <input
            id={`${id}-context`}
            type="number"
            name="LemonadeLLMModelTokenLimit"
            className={FIELD_INPUT}
            placeholder="8192"
            min={1}
            value={maxTokens}
            onChange={(e) => setMaxTokens(Number(e.target.value))}
            onWheel={blurOnWheel}
            required={true}
            autoComplete="off"
          />
        </div>
        <div className={FIELD_COL}>
          <FieldLabel
            htmlFor={`${id}-key`}
            label={t("provider-fields.api-key")}
            optional={true}
            tip={t("llm-fields.lemonade.api-key-tip")}
          />
          <SecretInput
            id={`${id}-key`}
            name="LemonadeLLMApiKey"
            defaultValue={settings?.LemonadeLLMApiKey ? SECRET_MASK : ""}
          />
        </div>
        <LemonadeModelSelection
          selectedModelId={selectedModelId}
          setSelectedModelId={setSelectedModelId}
          basePath={basePathValue.value}
        />
      </div>
    </div>
  );
}

function LemonadeModelSelection({
  selectedModelId,
  setSelectedModelId,
  basePath = null,
}) {
  const { t } = useTranslation();
  const [customModels, setCustomModels] = useState([]);
  const [filteredModels, setFilteredModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  async function fetchModels() {
    if (!basePath) {
      setCustomModels([]);
      setFilteredModels([]);
      setError(null);
      setLoading(false);
      setSearchQuery("");
      return;
    }
    setLoading(true);
    const { models, error } = await System.customModels(
      "lemonade",
      null,
      basePath
    );
    setCustomModels(models || []);
    setFilteredModels(models || []);
    setError(error || null);
    setSearchQuery("");
    setLoading(false);
  }

  useEffect(() => {
    fetchModels();
  }, [basePath]);

  useEffect(() => {
    if (!searchQuery || !customModels.length) {
      setFilteredModels(customModels || []);
      return;
    }

    const normalizedSearchQuery = searchQuery.toLowerCase().trim();
    const filteredModels = new Map();

    customModels.forEach((model) => {
      const modelNameNormalized = model.name.toLowerCase();
      const modelOrganizationNormalized = model.organization.toLowerCase();

      if (modelNameNormalized.startsWith(normalizedSearchQuery))
        filteredModels.set(model.id, model);
      if (modelOrganizationNormalized.startsWith(normalizedSearchQuery))
        filteredModels.set(model.id, model);
      if (strDistance(modelNameNormalized, normalizedSearchQuery) <= 2)
        filteredModels.set(model.id, model);
      if (strDistance(modelOrganizationNormalized, normalizedSearchQuery) <= 2)
        filteredModels.set(model.id, model);
    });

    setFilteredModels(Array.from(filteredModels.values()));
  }, [searchQuery]);

  // ModelTable asks for confirmation before calling these.
  async function uninstallModel(modelId) {
    try {
      const { success, error } = await LemonadeUtils.deleteModel(
        modelId,
        basePath
      );

      if (!success)
        throw new Error(error || t("llm-fields.common.uninstall-error"));

      const updatedModels = customModels.map((model) =>
        model.id === modelId ? { ...model, downloaded: false } : model
      );
      setCustomModels(updatedModels);
      setFilteredModels(updatedModels);
      setSearchQuery("");
    } catch (e) {
      console.error("Error uninstalling model:", e);
      showToast(e.message || t("llm-fields.common.uninstall-error"), "error", {
        clear: true,
      });
    } finally {
      setLoading(false);
    }
  }

  async function downloadModel(modelId, _fileSize, progressCallback) {
    try {
      const { success, error } = await LemonadeUtils.downloadModel(
        modelId,
        basePath,
        progressCallback
      );
      if (!success)
        throw new Error(error || t("llm-fields.common.download-error"));
      progressCallback(100);
      handleSetActiveModel(modelId);

      const existingModels = [...customModels];
      const newModel = existingModels.find((model) => model.id === modelId);
      if (newModel) {
        newModel.downloaded = true;
        setCustomModels(existingModels);
        setFilteredModels(existingModels);
        setSearchQuery("");
      }
    } catch (e) {
      console.error("Error downloading model:", e);
      showToast(e.message || t("llm-fields.common.download-error"), "error", {
        clear: true,
      });
    } finally {
      setLoading(false);
    }
  }

  function groupModelsByAlias(models) {
    const mapping = new Map();
    mapping.set("installed", new Map());
    mapping.set("not installed", new Map());

    const groupedModels = models.reduce((acc, model) => {
      acc[model.organization] = acc[model.organization] || [];
      acc[model.organization].push(model);
      return acc;
    }, {});

    Object.entries(groupedModels).forEach(([organization, models]) => {
      const hasInstalled = models.some((model) => model.downloaded);
      if (hasInstalled) {
        const installedModels = models.filter((model) => model.downloaded);
        mapping
          .get("installed")
          .set(DOWNLOADED_GROUP, [
            ...(mapping.get("installed").get(DOWNLOADED_GROUP) || []),
            ...installedModels,
          ]);
      }
      const tags = models.map((model) => ({
        ...model,
        name: model.name.split(":")[1],
      }));
      mapping.get("not installed").set(organization, tags);
    });

    const orderedMap = new Map();
    const installedMap = new Map();
    mapping
      .get("installed")
      .entries()
      .forEach(([organization, models]) =>
        installedMap.set(organization, models)
      );
    mapping
      .get("not installed")
      .entries()
      .forEach(([organization, models]) =>
        orderedMap.set(organization, models)
      );

    // Sort the models by organization/creator name alphabetically but keep the installed models at the top
    return Object.fromEntries(
      Array.from(installedMap.entries())
        .sort((a, b) => a[0].localeCompare(b[0]))
        .concat(
          Array.from(orderedMap.entries()).sort((a, b) =>
            a[0].localeCompare(b[0])
          )
        )
    );
  }

  function handleSetActiveModel(modelId) {
    if (modelId === selectedModelId) return;
    setSelectedModelId(modelId);
    window.dispatchEvent(new Event(LLM_PREFERENCE_CHANGED_EVENT));
  }

  const groupedModels = groupModelsByAlias(filteredModels);
  return (
    <ModelTableLayout
      fetchModels={fetchModels}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      loading={loading}
    >
      <Tooltip
        id="install-model-tooltip"
        place="top"
        className="tooltip !text-xs !opacity-100 z-99"
      />
      <input
        type="hidden"
        name="LemonadeLLMModelPref"
        value={selectedModelId}
      />
      {loading ? (
        <ModelTableLoadingSkeleton />
      ) : filteredModels.length === 0 ? (
        <div className="flex flex-col w-full gap-y-2 mt-4">
          {error ? (
            <p role="alert" className={FIELD_ERROR}>
              {t("provider-fields.models-error", { error })}
            </p>
          ) : (
            <p className="text-theme-text-secondary text-sm">
              {basePath
                ? t("provider-fields.models-empty")
                : t("provider-fields.models-need-url")}
            </p>
          )}
        </div>
      ) : (
        Object.entries(groupedModels).map(([alias, models]) => (
          <ModelTable
            key={alias}
            alias={alias}
            models={models}
            setActiveModel={handleSetActiveModel}
            downloadModel={downloadModel}
            selectedModelId={selectedModelId}
            uninstallModel={uninstallModel}
            ui={{
              showRuntime: false,
            }}
          />
        ))
      )}
    </ModelTableLayout>
  );
}
