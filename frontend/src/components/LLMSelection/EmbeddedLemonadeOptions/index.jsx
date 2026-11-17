import { useState, useEffect, useId } from "react";
import { useTranslation } from "react-i18next";
import { CircleCheck, LoaderCircle, Zap, Plus } from "lucide-react";
import { Tooltip } from "react-tooltip";
import strDistance from "js-levenshtein";
import System from "@/models/system";
import ModelTable, {
  DOWNLOADED_GROUP,
  ModelDownloadConfirm,
  knownModelSize,
} from "@/components/lib/ModelTable";
import MonoProviderIcon from "@/components/lib/MonoProviderIcon";
import ModelTableLayout from "@/components/lib/ModelTable/layout";
import ModelTableLoadingSkeleton from "@/components/lib/ModelTable/loading";
import showToast from "@/utils/toast";
import { serverErrorMessage, serverErrorParts } from "@/utils/serverErrors";
import ServerErrorDetail from "@/components/lib/ServerErrorDetail";
import { BUILT_IN_LOGO } from "@/utils/builtInLogos";
import { LLM_PREFERENCE_CHANGED_EVENT } from "@/pages/GeneralSettings/LLMPreference";
import {
  AdvancedSection,
  FIELD_COL,
  FIELD_ERROR,
  FIELD_HELP,
  FIELD_INPUT,
  FIELD_ROW,
} from "@/components/ProviderFields";
import {
  ExternalLink,
  FieldLabel,
  blurOnWheel,
} from "@/components/LLMSelection/FormParts";
import EmbeddedLemonadeUtils from "./utils";

/**
 * The embedded Lemonade engine (`embedded_lemonade`) - a lemond server this instance runs itself. Only offered when
 * the server has it enabled (ENABLE_BUILT_IN_LLM), so it never shows up anywhere else.
 * @param {{onboarding?: boolean}} options - onboarding shows recommended models before the full model table.
 */
function embeddedLemonadeLLM({ onboarding = false } = {}) {
  return {
    name: "Built-in",
    value: "embedded_lemonade",
    logo: BUILT_IN_LOGO,
    options: (settings) => (
      <EmbeddedLemonadeOptions settings={settings} onboarding={onboarding} />
    ),
    description:
      "Run local LLMs on this server's CPU or GPU with no extra setup.",
    descriptionKey: "llm-fields.embedded-lemonade.description",
    requiredConfig: ["EmbeddedLemonadeEnabled"],
  };
}

/**
 * Adds the embedded engine to a provider list when the server has it enabled - first, or right after the
 * `after` entry (eg: a "System default" entry that should stay on top).
 * @param {Array<object>} providers
 * @param {object|null} settings - System.keys()
 * @param {{onboarding?: boolean, after?: string}} options
 * @returns {Array<object>}
 */
export function withEmbeddedLemonade(
  providers = [],
  settings = null,
  { after = null, ...options } = {}
) {
  if (!settings?.EmbeddedLemonadeEnabled) return providers;
  const index = providers.findIndex((llm) => llm.value === after) + 1;
  return [
    ...providers.slice(0, index),
    embeddedLemonadeLLM(options),
    ...providers.slice(index),
  ];
}

const DOWNLOAD_CANCELLED = "Download cancelled.";

/** Text link styled button, readable in both themes. */
const LINK_BUTTON =
  "border-none w-fit min-h-[44px] md:min-h-0 text-sm text-sky-400 light:text-sky-700 hover:underline";

export default function EmbeddedLemonadeOptions({
  settings,
  onboarding = false,
}) {
  const { t } = useTranslation();
  const [selectedModelId, setSelectedModelId] = useState(
    settings?.EmbeddedLemonadeModelPref
  );
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);
  // The one download in flight: { label, percentage }. The server runs one download at a time.
  const [download, setDownload] = useState(null);
  // Onboarding starts on the recommended models; the full table is one click away.
  const [showAllModels, setShowAllModels] = useState(!onboarding);

  async function fetchModels() {
    setLoading(true);
    const { models } = await System.customModels("embedded_lemonade-all");
    setModels(models || []);
    setLoading(false);
  }

  useEffect(() => {
    fetchModels();
  }, []);

  function selectModel(modelId) {
    if (!modelId || modelId === selectedModelId) return;
    setSelectedModelId(modelId);
    window.dispatchEvent(new Event(LLM_PREFERENCE_CHANGED_EVENT));
  }

  /**
   * Downloads a model id or Hugging Face checkpoint, then selects it.
   * @param {string} modelName
   * @param {string} label - shown in the download status
   * @param {(percentage: number) => void} onProgress
   * @returns {Promise<boolean>} whether the model was downloaded
   */
  async function downloadModel(modelName, label, onProgress = () => {}) {
    if (download) {
      showToast(t("llm-fields.embedded-lemonade.download-busy"), "info", {
        clear: true,
      });
      return false;
    }

    setDownload({ label, percentage: 0 });
    const { success, error, modelId } =
      await EmbeddedLemonadeUtils.downloadModel(modelName, (percentage) => {
        setDownload({ label, percentage });
        onProgress(percentage);
      });
    setDownload(null);

    if (!success) {
      const cancelled = error === DOWNLOAD_CANCELLED;
      showToast(
        cancelled
          ? t("llm-fields.embedded-lemonade.download-cancelled", { label })
          : serverErrorMessage(
              error,
              t,
              "llm-fields.embedded-lemonade.download-failed",
              { values: { label } }
            ),
        cancelled ? "info" : "error",
        { clear: true }
      );
      return false;
    }
    await fetchModels();
    selectModel(modelId || modelName);
    return true;
  }

  // ModelTable asks for confirmation before calling this.
  async function uninstallModel(modelId) {
    const { success, error } = await EmbeddedLemonadeUtils.removeModel(modelId);
    if (!success) {
      showToast(
        serverErrorMessage(error, t, "llm-fields.common.uninstall-error"),
        "error",
        { clear: true }
      );
      return;
    }
    await fetchModels();
  }

  return (
    <div className="w-full flex flex-col gap-y-4">
      <input
        type="hidden"
        name="EmbeddedLemonadeModelPref"
        value={selectedModelId || ""}
      />
      <EngineStatus />
      <AdvancedSection>
        <AdvancedSettings settings={settings} />
      </AdvancedSection>

      {download ? (
        <DownloadStatus download={download} />
      ) : (
        <PullFromHuggingFace
          onPull={(checkpoint) => downloadModel(checkpoint, checkpoint)}
        />
      )}

      {showAllModels ? (
        <>
          {onboarding && (
            <button
              type="button"
              onClick={() => setShowAllModels(false)}
              className={LINK_BUTTON}
            >
              {t("llm-fields.embedded-lemonade.show-recommended")}
            </button>
          )}
          <ModelSelection
            models={models}
            loading={loading}
            fetchModels={fetchModels}
            selectedModelId={selectedModelId}
            selectModel={selectModel}
            downloadModel={downloadModel}
            uninstallModel={uninstallModel}
          />
        </>
      ) : (
        <RecommendedModels
          selectedModelId={selectedModelId}
          selectModel={selectModel}
          downloadModel={downloadModel}
          downloading={!!download}
          downloadedIds={
            new Set(models.filter((m) => m.downloaded).map((m) => m.id))
          }
          showAllModels={() => setShowAllModels(true)}
        />
      )}
    </div>
  );
}

function AdvancedSettings({ settings }) {
  const { t } = useTranslation();
  const id = useId();
  const [maxTokens, setMaxTokens] = useState(
    settings?.EmbeddedLemonadeTokenLimit ?? ""
  );

  return (
    <div className={`${FIELD_ROW} mt-4`}>
      <div className={FIELD_COL}>
        <FieldLabel
          htmlFor={`${id}-context`}
          label={t("provider-fields.context-window")}
          tip={t("llm-fields.embedded-lemonade.context-window-tip")}
        />
        <input
          id={`${id}-context`}
          type="number"
          name="EmbeddedLemonadeTokenLimit"
          className={FIELD_INPUT}
          placeholder={t("provider-fields.context-window-auto")}
          // No native min/step: the server validates it and the save shows the error.
          step="any"
          value={maxTokens}
          onChange={(e) => setMaxTokens(e.target.value)}
          onWheel={blurOnWheel}
          required={false}
          autoComplete="off"
        />
      </div>
    </div>
  );
}

/** Shows the engine download/startup while it is not ready yet. */
function EngineStatus() {
  const { t } = useTranslation();
  const [status, setStatus] = useState(null);

  useEffect(() => {
    let timer = null;
    // A status request can still be in flight on unmount - it must not schedule another poll.
    let active = true;
    async function poll() {
      const next = await EmbeddedLemonadeUtils.status();
      if (!active) return;
      setStatus(next);
      if (next && !["ready", "error"].includes(next.state))
        timer = setTimeout(poll, 2000);
    }
    poll();
    return () => {
      active = false;
      clearTimeout(timer);
    };
  }, []);

  if (!status || status.state === "ready" || status.state === "idle")
    return null;
  if (status.state === "error") {
    const { message, detail } = serverErrorParts(
      status.message,
      t,
      "llm-fields.embedded-lemonade.engine-failed"
    );
    return (
      <p role="alert" className="text-red-400 light:text-red-700 text-sm">
        {message}
        <ServerErrorDetail detail={detail} />
      </p>
    );
  }
  return (
    <div className="flex items-center gap-x-2 text-theme-text-secondary text-sm">
      <LoaderCircle
        strokeWidth={1.5}
        aria-hidden="true"
        className="w-4 h-4 animate-spin"
      />
      <p>
        {status.message}
        {status.progress !== null ? ` ${status.progress}%` : ""}
      </p>
    </div>
  );
}

/** The download in flight, with a way to cancel it. */
function DownloadStatus({ download }) {
  const { t } = useTranslation();
  return (
    <div className="flex min-h-[40px] items-center gap-x-2">
      <div className="border-none bg-theme-bg-secondary p-2 rounded-lg h-[24px] w-[24px] flex items-center justify-center">
        <LoaderCircle
          strokeWidth={1.5}
          size={14}
          aria-hidden="true"
          className="shrink-0 animate-spin text-theme-text-secondary"
        />
      </div>
      <p className="text-left text-theme-text-secondary text-sm">
        {t("llm-fields.embedded-lemonade.downloading", {
          label: download.label,
          percentage: download.percentage,
        })}
      </p>
      <button
        type="button"
        onClick={async () => {
          if (!(await EmbeddedLemonadeUtils.cancelDownload()))
            showToast(
              t("llm-fields.embedded-lemonade.cancel-failed"),
              "error",
              { clear: true }
            );
        }}
        className="border-none transition-colors duration-quick ease-smooth min-h-[44px] md:min-h-0 px-2 py-1 rounded-lg text-white text-sm hover:bg-red-500"
      >
        {t("settings-pages.cancel")}
      </button>
    </div>
  );
}

/**
 * Onboarding only: three models picked for this server's hardware, as cards. Clicking a card downloads (if needed)
 * and selects the model.
 */
function RecommendedModels({
  selectedModelId,
  selectModel,
  downloadModel,
  downloading,
  downloadedIds,
  showAllModels,
}) {
  const { t } = useTranslation();
  const [result, setResult] = useState(null);
  // The model waiting for the download confirmation.
  const [pending, setPending] = useState(null);

  useEffect(() => {
    EmbeddedLemonadeUtils.recommendations().then(setResult);
  }, []);

  if (!result)
    return (
      <div
        role="status"
        className="flex items-center gap-x-2 text-theme-text-secondary text-sm"
      >
        <LoaderCircle
          strokeWidth={1.5}
          aria-hidden="true"
          className="w-4 h-4 animate-spin"
        />
        <p>{t("llm-fields.embedded-lemonade.finding-models")}</p>
      </div>
    );

  const hardware = result.vramGb
    ? t("llm-fields.embedded-lemonade.hardware-gpu", { gb: result.vramGb })
    : result.ramGb
      ? t("llm-fields.embedded-lemonade.hardware-ram", { gb: result.ramGb })
      : null;

  function choose(model) {
    if (downloadedIds.has(model.id)) return selectModel(model.id);
    if (downloading) return;
    setPending(model);
  }

  function confirmDownload() {
    const model = pending;
    setPending(null);
    // The download shows its own progress, so the dialog closes right away.
    downloadModel(model.id, model.name);
  }

  return (
    <div className="flex flex-col gap-y-3">
      <div className="flex flex-col gap-y-1">
        <p className="text-white text-sm font-semibold">
          {t("llm-fields.embedded-lemonade.recommended")}
        </p>
        {hardware && (
          <p className="text-theme-text-secondary text-xs">
            {t("llm-fields.embedded-lemonade.recommended-hint", { hardware })}
          </p>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {result.recommendations.map(
          ({ category, label, description, model }) => {
            const selected = model.id === selectedModelId;
            const downloaded = downloadedIds.has(model.id);
            return (
              <button
                key={category}
                type="button"
                aria-pressed={selected}
                // aria-disabled, not disabled: the card that started the
                // download keeps focus when the confirmation closes.
                aria-disabled={(downloading && !downloaded) || undefined}
                onClick={() => choose(model)}
                className={`text-left flex flex-col gap-y-2 p-4 rounded-lg border transition-colors duration-quick ease-smooth bg-theme-bg-secondary hover:bg-theme-bg-primary aria-disabled:opacity-50 aria-disabled:cursor-not-allowed ${selected ? "border-primary-button" : "border-theme-modal-border"}`}
              >
                <span className="flex items-center justify-between gap-x-2">
                  <span className="text-xs uppercase font-semibold text-theme-text-secondary">
                    {label}
                  </span>
                  {selected && (
                    <CircleCheck
                      strokeWidth={1.5}
                      size={18}
                      aria-hidden="true"
                      className="text-primary-button shrink-0"
                    />
                  )}
                </span>
                <span className="flex items-center gap-x-2">
                  <MonoProviderIcon
                    provider={model.name}
                    match="pattern"
                    fallbackIconKey={model.organization?.toLowerCase()}
                    size={20}
                    className="text-theme-text-primary shrink-0"
                  />
                  <span className="text-white text-base font-semibold">
                    {model.name}
                  </span>
                </span>
                <span className="text-theme-text-secondary text-xs">
                  {description}
                </span>
                <span className="text-theme-text-secondary text-xs mt-auto">
                  {[
                    knownModelSize(model.size),
                    model.capabilities?.vision
                      ? t("llm-fields.embedded-lemonade.vision")
                      : null,
                    model.capabilities?.reasoning
                      ? t("llm-fields.embedded-lemonade.thinking")
                      : null,
                  ]
                    .filter(Boolean)
                    .join(" · ")}
                </span>
                <span className="text-sm text-sky-400 light:text-sky-700">
                  {selected
                    ? t("llm-fields.embedded-lemonade.selected")
                    : downloaded
                      ? t("llm-fields.embedded-lemonade.use-model")
                      : t("llm-fields.embedded-lemonade.download")}
                </span>
              </button>
            );
          }
        )}
      </div>
      <button type="button" onClick={showAllModels} className={LINK_BUTTON}>
        {t("llm-fields.embedded-lemonade.show-all")}
      </button>
      {pending && (
        <ModelDownloadConfirm
          name={pending.name}
          size={pending.size}
          onConfirm={confirmDownload}
          onCancel={() => setPending(null)}
        />
      )}
    </div>
  );
}

function ModelSelection({
  models,
  loading,
  fetchModels,
  selectedModelId,
  selectModel,
  downloadModel,
  uninstallModel,
}) {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");

  // ModelTable asks for confirmation before calling this.
  async function downloadFromTable(modelId, _fileSize, progressCallback) {
    const model = models.find((m) => m.id === modelId);
    if (await downloadModel(modelId, model?.name ?? modelId, progressCallback))
      progressCallback(100);
  }

  const query = searchQuery.toLowerCase().trim();
  const filteredModels = !query
    ? models
    : models.filter((model) =>
        [model.name, model.family, model.organization].some((value) => {
          const normalized = (value || "").toLowerCase();
          return (
            normalized.includes(query) || strDistance(normalized, query) <= 2
          );
        })
      );

  // Downloaded models first, then each family in registry order.
  const groups = new Map();
  const downloaded = filteredModels.filter((model) => model.downloaded);
  if (downloaded.length) groups.set(DOWNLOADED_GROUP, downloaded);
  for (const model of filteredModels) {
    const family = model.family || model.organization || "Other";
    groups.set(family, [...(groups.get(family) || []), model]);
  }

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
      <Tooltip
        id="embedded-lemonade-model-badge"
        place="top"
        className="tooltip !text-xs !opacity-100 z-99"
      />
      {loading ? (
        <ModelTableLoadingSkeleton />
      ) : filteredModels.length === 0 ? (
        <div className="flex flex-col w-full gap-y-2 mt-4">
          <p className="text-theme-text-secondary text-sm">
            {t("llm-fields.embedded-lemonade.no-models")}
          </p>
        </div>
      ) : (
        Array.from(groups.entries()).map(([alias, groupModels]) => (
          <ModelTable
            key={alias}
            alias={alias}
            models={groupModels}
            setActiveModel={selectModel}
            downloadModel={downloadFromTable}
            selectedModelId={selectedModelId}
            uninstallModel={uninstallModel}
            ui={{ rawTitle: true, badges: ModelBadges }}
          />
        ))
      )}
    </ModelTableLayout>
  );
}

/**
 * Pull any GGUF repository from Hugging Face (or ModelScope, per EMBEDDED_LEMONADE_REGISTRY) as
 * owner/repo[:QUANT] or its URL.
 */
function PullFromHuggingFace({ onPull }) {
  const { t } = useTranslation();
  const id = useId();
  const [showInput, setShowInput] = useState(false);
  const [repo, setRepo] = useState("");
  const [invalid, setInvalid] = useState(false);

  function handlePull() {
    const checkpoint = normalizeCheckpoint(repo);
    if (!checkpoint) {
      setInvalid(true);
      document.getElementById(`${id}-repo`)?.focus();
      return;
    }
    setShowInput(false);
    setRepo("");
    setInvalid(false);
    onPull(checkpoint);
  }

  if (!showInput)
    return (
      <button
        type="button"
        onClick={() => setShowInput(true)}
        className="w-fit relative flex min-h-[44px] md:min-h-[40px] items-center border-none hover:bg-theme-bg-sidebar rounded-lg transition-colors duration-quick ease-smooth"
      >
        <span className="flex w-full gap-x-2 items-center">
          <span className="border-none bg-theme-bg-secondary p-2 rounded-lg h-[24px] w-[24px] flex items-center justify-center">
            <Plus
              strokeWidth={1.5}
              size={14}
              aria-hidden="true"
              className="shrink-0 text-theme-text-secondary"
            />
          </span>
          <span className="text-left text-theme-text-secondary text-sm">
            {t("llm-fields.embedded-lemonade.pull-title")}
          </span>
        </span>
      </button>
    );

  return (
    <div className="flex flex-col gap-y-2">
      <label htmlFor={`${id}-repo`} className="sr-only">
        {t("llm-fields.embedded-lemonade.pull-label")}
      </label>
      <div className="flex flex-col md:flex-row w-full md:w-fit md:items-center gap-2">
        <input
          id={`${id}-repo`}
          value={repo}
          onChange={(e) => {
            setRepo(e.target.value);
            setInvalid(false);
          }}
          onKeyDown={(e) => {
            if (e.key !== "Enter") return;
            e.preventDefault();
            handlePull();
          }}
          aria-describedby={
            invalid ? `${id}-repo-error ${id}-repo-help` : `${id}-repo-help`
          }
          aria-invalid={invalid || undefined}
          className={`${FIELD_INPUT} md:w-[360px]`}
          type="text"
          placeholder="unsloth/Qwen3-4B-GGUF:Q4_K_M"
          autoComplete="off"
          spellCheck={false}
          autoFocus
        />
        <div className="flex items-center gap-x-2">
          <button
            type="button"
            onClick={handlePull}
            className="transition-colors duration-quick ease-smooth min-h-[44px] md:min-h-0 border border-slate-200 light:border-slate-500 p-2 rounded-lg text-white text-sm items-center flex gap-x-2 hover:bg-slate-200 hover:text-slate-800"
          >
            {t("llm-fields.embedded-lemonade.pull")}
          </button>
          <button
            type="button"
            onClick={() => {
              setShowInput(false);
              setRepo("");
              setInvalid(false);
            }}
            className="border-none transition-colors duration-quick ease-smooth min-h-[44px] md:min-h-0 p-2 rounded-lg text-white text-sm items-center flex gap-x-2 hover:bg-red-500"
          >
            {t("settings-pages.cancel")}
          </button>
        </div>
      </div>
      {invalid && (
        <p
          id={`${id}-repo-error`}
          role="alert"
          className={`${FIELD_ERROR} !mt-0 max-w-[600px]`}
        >
          {t("llm-fields.embedded-lemonade.pull-invalid")}
        </p>
      )}
      <p id={`${id}-repo-help`} className={`${FIELD_HELP} max-w-[600px]`}>
        {t("llm-fields.embedded-lemonade.pull-help-before")}{" "}
        <ExternalLink
          href="https://huggingface.co/models?library=gguf&sort=trending"
          className="text-sky-400 light:text-sky-700 hover:underline"
        >
          Hugging Face
        </ExternalLink>
        {t("llm-fields.embedded-lemonade.pull-help-after")}
      </p>
    </div>
  );
}

/**
 * Turns user input into an owner/repo[:quant] checkpoint. Accepts a bare checkpoint, a Hugging Face or
 * ModelScope URL, `hf.co/owner/repo:quant`, or an `ollama run hf.co/...` command.
 * @param {string} input
 * @returns {string|null}
 */
function normalizeCheckpoint(input = "") {
  const value = input
    .trim()
    .replace(/^ollama run\s+/i, "")
    .replace(/^https?:\/\//i, "")
    .replace(/^(www\.)?(huggingface\.co|hf\.co|modelscope\.cn\/models)\//i, "");
  const [path, quant = null] = value.split(":");
  const [owner, name] = path.split("/").filter(Boolean);
  if (!owner || !name) return null;
  return `${owner}/${name}${quant ? `:${quant}` : ""}`;
}

/** Badges shown before a model's name - the runtime is always llama.cpp, so only what sets a model apart. */
function ModelBadges(model) {
  return <MtpBadge model={model} />;
}

function MtpBadge({ model }) {
  const { t } = useTranslation();
  const mtp = model.tags?.includes("mtp") || /\bmtp\b/i.test(model.name);
  if (!mtp) return null;
  const label = t("llm-fields.embedded-lemonade.mtp-tip");
  // Rendered inside the model row button, so it cannot be its own control:
  // the text joins the button name and the tooltip is a pointer extra.
  return (
    <span className="flex items-center gap-x-1">
      <Zap
        strokeWidth={1.5}
        size={16}
        role="img"
        aria-label={label}
        className="text-amber-400 light:text-amber-600"
        data-tooltip-id="embedded-lemonade-model-badge"
        data-tooltip-content={label}
      />
    </span>
  );
}
