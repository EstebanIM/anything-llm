import { useRef, useState, useEffect, useId } from "react";
import { useTranslation } from "react-i18next";
import {
  ChevronDown,
  ChevronRight,
  Cpu,
  Circle,
  EllipsisVertical,
  CloudDownload,
  LoaderCircle,
  Trash2,
} from "lucide-react";
import { titleCase } from "text-case";
import { humanFileSize } from "@/utils/numbers";
import useMenu from "@/hooks/useMenu";
import ConfirmModal from "@/components/lib/ConfirmModal";
import MonoProviderIcon from "../MonoProviderIcon";

/**
 * Group key for the models already downloaded. ModelTable shows it with a
 * translated heading and the provider icon on each row; any other group name
 * (an organization or family from the server) is shown as-is.
 */
export const DOWNLOADED_GROUP = "model-table:downloaded";

// The Lemonade providers send this literal when the server reports no size.
const SERVER_UNKNOWN_SIZE = "Unknown size";

/**
 * Human-readable model size, or null when it is unknown.
 * @param {number|string|null|undefined} size - megabytes, or an already formatted size
 * @returns {string|null}
 */
export function knownModelSize(size) {
  if (typeof size === "number") return humanFileSize(size * 1e6, true, 2);
  if (!size || size === SERVER_UNKNOWN_SIZE) return null;
  return size;
}

const MENU_ITEM =
  "border-none w-full flex items-center gap-x-2 rounded-md px-2 min-h-[44px] md:min-h-0 md:py-1.5 text-sm text-left text-white hover:bg-theme-action-menu-item-hover transition-colors duration-quick ease-smooth";

/**
 * @typedef {Object} ModelDefinition
 * @property {string} id - The ID of the model.
 * @property {'CPU' | 'GPU' | 'NPU'} deviceType - The device type of the model.
 * @property {number} modelSize - The size of the model in megabytes.
 * @property {boolean} downloaded - Whether the model is downloaded.
 */

/**
 * Downloads and uninstalls are confirmed here, so the callbacks run only
 * after the user accepts.
 * @param {object} props - The props of the component.
 * @param {string} props.alias - The group name, or DOWNLOADED_GROUP.
 * @param {Array<ModelDefinition>} props.models - The models to display.
 * @param {(model: string, fileSize: string, progressCallback: (percentage: number) => void) => Promise<void>} props.downloadModel - The function to download the model.
 * @param {(model: string) => Promise<void>} props.uninstallModel - The function to uninstall the model.
 * @param {(model: string) => void} props.setActiveModel - The function to set the active model.
 * @param {string} props.selectedModelId - The ID of the selected model.
 * @param {object} props.ui - The UI configuration.
 * @param {boolean} props.ui.showRuntime - Whether to show the runtime.
 * @param {boolean} [props.ui.rawTitle] - Show the group name as-is instead of title-casing it (eg. "gpt-oss", "LFM2.5").
 * @param {(model: ModelDefinition) => React.ReactNode} [props.ui.badges] - Renders the badges before the model name.
 * When set, the row shows only these (no runtime tag or organization icon).
 * @returns {React.ReactNode}
 */
export default function ModelTable({
  alias = "",
  models = [],
  downloadModel = null,
  uninstallModel = null,
  setActiveModel = () => {},
  selectedModelId = "",
  ui = {
    showRuntime: true,
  },
}) {
  const { t } = useTranslation();
  const listId = useId();
  const [showAll, setShowAll] = useState(
    models.some((model) => model.downloaded)
  );
  const totalModels = models.length;
  const title =
    alias === DOWNLOADED_GROUP
      ? t("provider-forms.shared.models-downloaded")
      : ui.rawTitle
        ? alias
        : titleCase(alias);

  return (
    <div className="flex flex-col w-full border-b border-theme-modal-border py-[18px]">
      <button
        type="button"
        aria-expanded={showAll}
        aria-controls={listId}
        onClick={() => setShowAll(!showAll)}
        className="border-none w-full min-h-[44px] md:min-h-0 text-left text-theme-text-secondary text-sm font-medium hover:underline flex items-center gap-x-[8px]"
      >
        {showAll ? (
          <ChevronDown
            strokeWidth={1.5}
            size={16}
            aria-hidden="true"
            className="shrink-0 text-theme-text-secondary"
          />
        ) : (
          <ChevronRight
            strokeWidth={1.5}
            size={16}
            aria-hidden="true"
            className="shrink-0 text-theme-text-secondary"
          />
        )}
        <span className="flex items-center gap-x-[4px]">
          {/* Brand icons carry an SVG <title> that would join the button name. */}
          <span aria-hidden="true" className="flex">
            <MonoProviderIcon
              provider={alias}
              match="pattern"
              size={16}
              className="text-theme-text-primary"
            />
          </span>
          <span className="flex flex-wrap items-center gap-x-1 text-theme-text-primary text-base font-bold">
            {title}
            <span className="text-theme-text-secondary font-normal text-sm">
              ({t("model-table.model-count", { count: totalModels })})
            </span>
          </span>
        </span>
      </button>
      <div id={listId} hidden={!showAll} className="mt-[16px]">
        <ul className="w-full flex flex-col gap-y-[8px]">
          {models.map((model) => (
            <li key={model.id}>
              <ModelRow
                alias={alias}
                model={model}
                downloadModel={downloadModel}
                uninstallModel={uninstallModel}
                setActiveModel={setActiveModel}
                selectedModelId={selectedModelId}
                ui={ui}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function DeviceTypeTagWrapper({ text, bgClass, textClass }) {
  return (
    <span
      className={
        bgClass + " px-1.5 py-1 rounded-full flex items-center gap-x-1 w-fit"
      }
    >
      <Cpu
        strokeWidth={1.5}
        size={14}
        aria-hidden="true"
        className={textClass}
      />
      <span className={textClass + " text-xs"}>{text}</span>
    </span>
  );
}

/**
 * Colored by device class, labelled by runtime when the provider knows one —
 * "CUDA" or "WebGPU" tells you far more about whether a build will run on your
 * machine than a bare "GPU" does.
 * @param {{deviceType: ModelDefinition["deviceType"], runtime?: string}} props
 * @returns {React.ReactNode}
 */
function DeviceTypeTag({ deviceType, runtime = null }) {
  switch (deviceType?.toLowerCase()) {
    case "cpu":
      return (
        <DeviceTypeTagWrapper
          text={runtime || "CPU"}
          bgClass="bg-zinc-800 light:bg-zinc-200"
          textClass="text-theme-text-primary"
        />
      );
    case "gpu":
      return (
        <DeviceTypeTagWrapper
          text={runtime || "GPU"}
          bgClass="bg-green-800 light:bg-green-200"
          textClass="text-theme-text-primary"
        />
      );
    case "npu":
      return (
        <DeviceTypeTagWrapper
          text={runtime || "NPU"}
          bgClass="bg-indigo-800 light:bg-indigo-200"
          textClass="text-theme-text-primary"
        />
      );
    default:
      return null;
  }
}

/**
 * Asks before downloading a model. Shared with the cards that download a
 * model outside the table.
 * @param {{name: string, size: number|string|null, onConfirm: () => void, onCancel: () => void}} props
 */
export function ModelDownloadConfirm({ name, size, onConfirm, onCancel }) {
  const { t } = useTranslation();
  const known = knownModelSize(size);
  return (
    <ConfirmModal
      isOpen={true}
      title={t("model-table.download-title", { name })}
      confirmLabel={t("model-table.download")}
      danger={false}
      onConfirm={onConfirm}
      onCancel={onCancel}
    >
      <p>
        {known
          ? t("model-table.download-body", { size: known })
          : t("model-table.download-body-unknown")}
      </p>
    </ConfirmModal>
  );
}

/**
 * @param {object} props - The props of the component.
 * @param {ModelDefinition} props.model - The model to display.
 * @param {(model: string, fileSize: string, progressCallback: (percentage: number) => void) => Promise<void>} props.downloadModel - The function to download the model.
 * @param {(model: string) => Promise<void>} props.uninstallModel - The function to uninstall the model.
 * @param {(model: string) => void} props.setActiveModel - The function to set the active model.
 * @param {string} props.selectedModelId - The ID of the selected model.
 * @param {object} props.ui - The UI configuration.
 * @param {boolean} props.ui.showRuntime - Whether to show the runtime.
 * @returns {React.ReactNode}
 */
function ModelRow({
  alias,
  model,
  downloadModel = null,
  uninstallModel = null,
  setActiveModel,
  selectedModelId,
  ui = {
    showRuntime: true,
  },
}) {
  const { t } = useTranslation();
  const id = useId();
  const modelRowRef = useRef(null);
  const rowButtonRef = useRef(null);
  const menuTriggerRef = useRef(null);
  const menuRef = useRef(null);
  const rescueFocus = useRef(false);
  const [showOptions, setShowOptions] = useState(false);
  // "download" | "uninstall" | null
  const [confirm, setConfirm] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [downloadPercentage, setDownloadPercentage] = useState(0);
  const size = knownModelSize(model.size);
  const fileSize = size ?? t("model-table.unknown-size");
  const isActiveModel = selectedModelId === model.id;
  const canAct = model.downloaded || !!downloadModel;
  const statusId = `${id}-status`;

  useMenu({
    open: showOptions,
    onClose: () => setShowOptions(false),
    menuRef,
    triggerRef: menuTriggerRef,
  });

  function closeConfirm() {
    rescueFocus.current = true;
    setConfirm(null);
  }

  // The dialog returns focus to whatever opened it, but the download and
  // uninstall controls leave the row once the action starts or ends.
  useEffect(() => {
    if (confirm || !rescueFocus.current) return;
    rescueFocus.current = false;
    const active = document.activeElement;
    if (!active || active === document.body) rowButtonRef.current?.focus();
  }, [confirm]);

  function handleSelect() {
    if (processing) return;
    if (model.downloaded) return setActiveModel(model.id);
    if (downloadModel) setConfirm("download");
  }

  async function startDownload() {
    closeConfirm();
    setDownloadPercentage(0);
    setProcessing(true);
    try {
      await downloadModel(model.id, fileSize, (percentage) => {
        setDownloadPercentage(percentage);
      });
    } catch {
    } finally {
      setProcessing(false);
    }
  }

  async function handleUninstallModel() {
    if (!uninstallModel || processing) return;
    setProcessing(true);
    try {
      await uninstallModel(model.id);
    } catch {
    } finally {
      setProcessing(false);
      closeConfirm();
    }
  }

  useEffect(() => {
    const row = modelRowRef.current;
    if (selectedModelId !== model.id || !row) return;
    row.classList.add("!bg-gray-200/10");
    const timer = setTimeout(
      () => row.classList.remove("!bg-gray-200/10"),
      800
    );
    return () => {
      clearTimeout(timer);
      row.classList.remove("!bg-gray-200/10");
    };
  }, [selectedModelId]);

  const rowContent = (
    <>
      {ui.badges?.(model)}
      {!ui.badges && ui.showRuntime && (
        <DeviceTypeTag deviceType={model.deviceType} runtime={model.runtime} />
      )}
      {!ui.badges &&
        !ui.showRuntime &&
        model.downloaded &&
        alias === DOWNLOADED_GROUP && (
          <span aria-hidden="true" className="flex">
            <MonoProviderIcon
              provider={model.organization}
              match="pattern"
              size={16}
              className="text-theme-text-primary"
            />
          </span>
        )}
      <span className="text-theme-text-primary text-base">{model.name}</span>
      <span className="text-theme-text-secondary text-base">{fileSize}</span>
    </>
  );
  const rowClass =
    "border-none flex items-center gap-x-[8px] whitespace-nowrap py-[8px] px-0 text-left";

  return (
    <div
      ref={modelRowRef}
      className="w-full grid grid-cols-[1fr_auto_1fr] items-center gap-x-4 transition-colors duration-base ease-smooth rounded-lg"
    >
      {canAct ? (
        <button
          ref={rowButtonRef}
          type="button"
          className={`${rowClass} min-h-[44px] md:min-h-0 aria-disabled:cursor-not-allowed`}
          aria-pressed={model.downloaded ? isActiveModel : undefined}
          aria-describedby={statusId}
          aria-disabled={processing || undefined}
          onClick={handleSelect}
        >
          {rowContent}
        </button>
      ) : (
        <div className={rowClass}>{rowContent}</div>
      )}

      <div className="justify-self-start">
        <RenderStatus
          id={statusId}
          model={model}
          isActiveModel={isActiveModel}
        />
      </div>

      <div className="relative justify-self-end">
        {uninstallModel && model.downloaded ? (
          <>
            <button
              ref={menuTriggerRef}
              type="button"
              aria-label={t("model-table.actions", { name: model.name })}
              aria-haspopup="menu"
              aria-expanded={showOptions}
              className="border-none flex items-center justify-center w-11 h-11 md:w-auto md:h-auto md:p-1 rounded-lg hover:bg-white/20 light:hover:bg-black/5 transition-colors duration-quick ease-smooth"
              onClick={() => setShowOptions(!showOptions)}
            >
              <EllipsisVertical
                strokeWidth={1.5}
                size={22}
                aria-hidden="true"
                className="text-theme-text-primary"
              />
            </button>
            {showOptions && (
              <div
                ref={menuRef}
                role="menu"
                aria-label={t("model-table.actions", { name: model.name })}
                className="absolute top-full right-0 mt-1 z-10 w-max p-1 rounded-lg border border-white/20 light:border-slate-300 bg-theme-action-menu-bg shadow-lg flex flex-col"
              >
                <button
                  type="button"
                  role="menuitem"
                  className={MENU_ITEM}
                  onClick={() => {
                    setShowOptions(false);
                    setConfirm("uninstall");
                  }}
                >
                  <Trash2 strokeWidth={1.5} size={16} aria-hidden="true" />
                  {t("model-table.uninstall")}
                </button>
              </div>
            )}
          </>
        ) : null}
        {/* Only offer the install affordance when the caller can actually
        install — a provider may list a catalog it cannot download from. */}
        {!model.downloaded && !processing && !!downloadModel && (
          <button
            type="button"
            aria-label={t("model-table.download-model", { name: model.name })}
            data-tooltip-id="install-model-tooltip"
            data-tooltip-place="top"
            data-tooltip-delay-show={300}
            data-tooltip-content={t("model-table.download-model", {
              name: model.name,
            })}
            className="border-none hover:bg-white/20 light:hover:bg-black/5 rounded-lg w-11 h-11 md:w-auto md:h-auto md:p-2 flex items-center justify-center cursor-pointer transition-colors duration-quick ease-smooth"
            onClick={handleSelect}
          >
            <CloudDownload
              strokeWidth={1.5}
              size={20}
              aria-hidden="true"
              className="text-theme-text-primary"
            />
          </button>
        )}
        {!model.downloaded && processing && (
          <div
            role="progressbar"
            aria-label={t("model-table.downloading", { name: model.name })}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={downloadPercentage}
            className="flex items-center justify-center gap-x-[10px] whitespace-nowrap"
          >
            {!downloadPercentage && (
              <LoaderCircle
                strokeWidth={1.5}
                size={16}
                aria-hidden="true"
                className="text-theme-text-primary animate-spin"
              />
            )}
            <p className="text-theme-text-secondary text-sm">
              {downloadPercentage}%
            </p>
          </div>
        )}
      </div>

      {confirm === "download" && (
        <ModelDownloadConfirm
          name={model.name}
          size={model.size}
          onConfirm={startDownload}
          onCancel={closeConfirm}
        />
      )}
      {confirm === "uninstall" && (
        <ConfirmModal
          isOpen={true}
          title={t("model-table.uninstall-title", { name: model.name })}
          confirmLabel={
            processing
              ? t("model-table.uninstalling")
              : t("model-table.uninstall")
          }
          busy={processing}
          onConfirm={handleUninstallModel}
          onCancel={closeConfirm}
        >
          <p>
            {size
              ? t("model-table.uninstall-body", { size })
              : t("model-table.uninstall-body-unknown")}
          </p>
        </ConfirmModal>
      )}
    </div>
  );
}

function RenderStatus({ id, model, isActiveModel }) {
  const { t } = useTranslation();
  if (isActiveModel) {
    return (
      <div className="flex items-center justify-center gap-x-[10px] whitespace-nowrap">
        <Circle
          strokeWidth={1.5}
          fill="currentColor"
          size={8}
          aria-hidden="true"
          className="text-green-500 light:text-green-700"
        />
        <p id={id} className="text-theme-text-primary text-sm">
          {t("model-table.active")}
        </p>
      </div>
    );
  }

  if (model.downloaded) {
    return (
      <p
        id={id}
        className="text-theme-text-secondary text-sm italic whitespace-nowrap"
      >
        {t("model-table.installed")}
      </p>
    );
  }

  return (
    <p
      id={id}
      className="text-theme-text-secondary text-sm italic whitespace-nowrap"
    >
      {t("model-table.not-installed")}
    </p>
  );
}
