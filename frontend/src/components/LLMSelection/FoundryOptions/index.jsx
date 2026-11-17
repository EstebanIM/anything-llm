import { useEffect, useId, useState } from "react";
import { useTranslation } from "react-i18next";
import { Tooltip } from "react-tooltip";
import strDistance from "js-levenshtein";
import System from "@/models/system";
import { LLM_PREFERENCE_CHANGED_EVENT } from "@/pages/GeneralSettings/LLMPreference";
import ModelTable, { DOWNLOADED_GROUP } from "@/components/lib/ModelTable";
import ModelTableLayout from "@/components/lib/ModelTable/layout";
import ModelTableLoadingSkeleton from "@/components/lib/ModelTable/loading";
import FoundryUtils from "@/models/utils/foundryUtils";
import {
  FIELD_COL,
  FIELD_ERROR,
  FIELD_INPUT,
  FIELD_ROW,
  ModelsErrorText,
} from "@/components/ProviderFields";
import { FieldLabel, blurOnWheel } from "@/components/LLMSelection/FormParts";

export default function FoundryOptions({ settings }) {
  const { t } = useTranslation();
  const id = useId();
  const [basePath, setBasePath] = useState(settings?.FoundryBasePath);
  const [tokenLimit, setTokenLimit] = useState(
    settings?.FoundryModelTokenLimit || ""
  );

  const handleTokenLimitChange = (e) => {
    setTokenLimit(e.target.value ? Number(e.target.value) : "");
  };
  const [selectedModelId, setSelectedModelId] = useState(
    settings?.FoundryModelPref || ""
  );

  useEffect(() => {
    setSelectedModelId(settings?.FoundryModelPref || "");
  }, [settings?.FoundryModelPref]);

  /**
   * The context window is deliberately left blank on selection. An empty field
   * means "let the server decide", which caps at a machine-friendly default
   * rather than handing a laptop the model's full window. A value typed here is
   * treated as an explicit override.
   */
  function handleModelSelected(modelId) {
    setSelectedModelId(modelId);
    window.dispatchEvent(new Event(LLM_PREFERENCE_CHANGED_EVENT));
  }

  return (
    <div className="w-full flex flex-col gap-y-7">
      <div className={`${FIELD_ROW} mt-1.5`}>
        <div className={FIELD_COL}>
          <FieldLabel
            htmlFor={`${id}-url`}
            label={t("provider-fields.base-url")}
            tip={
              <>
                {t("llm-fields.foundry.base-url-tip")}{" "}
                <code className="font-mono">foundry status</code>
              </>
            }
          />
          <input
            id={`${id}-url`}
            type="url"
            name="FoundryBasePath"
            className={FIELD_INPUT}
            placeholder="http://127.0.0.1:5272"
            defaultValue={settings?.FoundryBasePath}
            required={true}
            autoComplete="off"
            spellCheck={false}
            onChange={(e) => setBasePath(e.target.value)}
          />
        </div>
        <div className={FIELD_COL}>
          <FieldLabel
            htmlFor={`${id}-context`}
            label={t("provider-fields.context-window")}
            tip={t("llm-fields.foundry.context-window-tip")}
          />
          <input
            id={`${id}-context`}
            type="number"
            name="FoundryModelTokenLimit"
            className={FIELD_INPUT}
            placeholder={t("provider-fields.context-window-auto")}
            min={1}
            value={tokenLimit}
            onChange={handleTokenLimitChange}
            onWheel={blurOnWheel}
            required={false}
            autoComplete="off"
          />
        </div>
        <FoundryModelSelection
          selectedModelId={selectedModelId}
          onModelSelected={handleModelSelected}
          basePath={basePath}
        />
      </div>
    </div>
  );
}

function FoundryModelSelection({
  selectedModelId,
  onModelSelected,
  basePath = null,
}) {
  const { t } = useTranslation();
  const [customModels, setCustomModels] = useState([]);
  const [filteredModels, setFilteredModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [canManage, setCanManage] = useState(false);

  async function fetchModels() {
    if (!basePath) {
      setCustomModels([]);
      setFilteredModels([]);
      setSearchQuery("");
      setCanManage(false);
      setError(null);
      setLoading(false);
      return;
    }

    setLoading(true);
    const [{ models, error }, capabilities] = await Promise.all([
      System.customModels("foundry", null, basePath),
      FoundryUtils.capabilities(basePath),
    ]);
    setCustomModels(models || []);
    setFilteredModels(models || []);
    setCanManage(capabilities.canManage);
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
    const matches = new Map();

    customModels.forEach((model) => {
      const name = model.name.toLowerCase();
      if (name.includes(normalizedSearchQuery)) matches.set(model.id, model);
      if (strDistance(name, normalizedSearchQuery) <= 2)
        matches.set(model.id, model);
    });

    setFilteredModels(Array.from(matches.values()));
  }, [searchQuery, customModels]);

  /**
   * Pin everything already downloaded to the top, then group the rest by task.
   * The pinned group is skipped when every model is downloaded, since it would
   * just duplicate the whole list under a second heading.
   */
  function groupModels(models) {
    const downloaded = models.filter((model) => model.downloaded);
    const byType = models.reduce((acc, model) => {
      acc[model.organization] = acc[model.organization] || [];
      acc[model.organization].push(model);
      return acc;
    }, {});

    const grouped = {};
    if (downloaded.length && downloaded.length < models.length)
      grouped[DOWNLOADED_GROUP] = downloaded;
    Object.keys(byType)
      .sort((a, b) => a.localeCompare(b))
      .forEach((type) => (grouped[type] = byType[type]));
    return grouped;
  }

  function handleSetActiveModel(modelId) {
    if (modelId === selectedModelId) return;
    onModelSelected(modelId);
  }

  const groupedModels = groupModels(filteredModels);
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
      <input type="hidden" name="FoundryModelPref" value={selectedModelId} />
      {loading ? (
        <ModelTableLoadingSkeleton />
      ) : filteredModels.length === 0 ? (
        <div className="flex flex-col w-full gap-y-2 mt-4">
          {error ? (
            <p role="alert" className={FIELD_ERROR}>
              <ModelsErrorText error={error} />
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
        <>
          {!canManage && (
            <p className="text-theme-text-secondary text-xs italic mt-3">
              {t("llm-fields.foundry.read-only-before")}{" "}
              <code className="font-mono">foundry model download</code>
              {t("llm-fields.foundry.read-only-after")}
            </p>
          )}
          {Object.entries(groupedModels).map(([group, models]) => (
            <ModelTable
              key={group}
              alias={group}
              models={models}
              setActiveModel={handleSetActiveModel}
              downloadModel={null}
              uninstallModel={null}
              selectedModelId={selectedModelId}
              ui={{ showRuntime: true }}
            />
          ))}
        </>
      )}
    </ModelTableLayout>
  );
}
