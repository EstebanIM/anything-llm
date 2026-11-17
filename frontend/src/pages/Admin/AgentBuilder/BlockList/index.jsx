import React, { useId, useRef, useState } from "react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import {
  X,
  ChevronUp,
  ChevronDown,
  ArrowDown,
  Globe,
  AppWindow,
  Brain,
  Flag,
  Info,
  Braces,
} from "lucide-react";
import { Tooltip } from "react-tooltip";
import Toggle from "@/components/lib/Toggle";
import { FIELD_HELP } from "@/components/ProviderFields";
import StartNode from "../nodes/StartNode";
import ApiCallNode from "../nodes/ApiCallNode";
import LLMInstructionNode from "../nodes/LLMInstructionNode";
import FinishNode from "../nodes/FinishNode";
import WebScrapingNode from "../nodes/WebScrapingNode";
import FlowInfoNode from "../nodes/FlowInfoNode";
import InlineConfirm from "@/components/lib/InlineConfirm";

const BLOCK_TYPES = {
  FLOW_INFO: "flowInfo",
  START: "start",
  API_CALL: "apiCall",
  LLM_INSTRUCTION: "llmInstruction",
  WEB_SCRAPING: "webScraping",
  FINISH: "finish",
};

// `t` is optional so callers outside this page (the Community Hub publish
// modal) keep working; it falls back to the global i18next instance.
const translate = (t) => t || i18next.t.bind(i18next);

/**
 * Block catalog. Text comes from `labelKey` / `descriptionKey`; the `label`
 * and `description` getters resolve them for callers that read plain strings.
 */
const BLOCK_INFO = {
  [BLOCK_TYPES.FLOW_INFO]: {
    labelKey: "agent-builder.blocks.flow-info.label",
    descriptionKey: "agent-builder.blocks.flow-info.description",
    icon: (
      <Info strokeWidth={1.5} className="w-5 h-5 text-theme-text-primary" />
    ),
    defaultConfig: {
      name: "",
      description: "",
    },
    getSummary: (config, t) =>
      config?.name || translate(t)("agent-builder.untitled"),
  },
  [BLOCK_TYPES.START]: {
    labelKey: "agent-builder.blocks.start.label",
    descriptionKey: "agent-builder.blocks.start.description",
    icon: (
      <Braces strokeWidth={1.5} className="w-5 h-5 text-theme-text-primary" />
    ),
    getSummary: (config, t) =>
      translate(t)("agent-builder.blocks.start.summary", {
        count: config?.variables?.filter((v) => v.name)?.length || 0,
      }),
  },
  [BLOCK_TYPES.API_CALL]: {
    labelKey: "agent-builder.blocks.api-call.label",
    descriptionKey: "agent-builder.blocks.api-call.description",
    icon: (
      <Globe strokeWidth={1.5} className="w-5 h-5 text-theme-text-primary" />
    ),
    defaultConfig: {
      url: "",
      method: "GET",
      headers: [],
      bodyType: "json",
      body: "",
      formData: [],
      responseVariable: "",
      directOutput: false,
    },
    getSummary: (config, t) =>
      `${config?.method || "GET"} ${config?.url || translate(t)("agent-builder.blocks.api-call.no-url")}`,
  },
  [BLOCK_TYPES.LLM_INSTRUCTION]: {
    labelKey: "agent-builder.blocks.llm-instruction.label",
    descriptionKey: "agent-builder.blocks.llm-instruction.description",
    icon: (
      <Brain strokeWidth={1.5} className="w-5 h-5 text-theme-text-primary" />
    ),
    defaultConfig: {
      instruction: "",
      resultVariable: "",
      directOutput: false,
    },
    getSummary: (config, t) =>
      config?.instruction ||
      translate(t)("agent-builder.blocks.llm-instruction.empty"),
  },
  [BLOCK_TYPES.WEB_SCRAPING]: {
    labelKey: "agent-builder.blocks.web-scraping.label",
    descriptionKey: "agent-builder.blocks.web-scraping.description",
    icon: (
      <AppWindow
        strokeWidth={1.5}
        className="w-5 h-5 text-theme-text-primary"
      />
    ),
    defaultConfig: {
      url: "",
      captureAs: "text",
      querySelector: "",
      resultVariable: "",
      directOutput: false,
    },
    getSummary: (config, t) =>
      config?.url || translate(t)("agent-builder.blocks.web-scraping.empty"),
  },
  [BLOCK_TYPES.FINISH]: {
    labelKey: "agent-builder.blocks.finish.label",
    descriptionKey: "agent-builder.blocks.finish.description",
    icon: <Flag strokeWidth={1.5} className="w-4 h-4" />,
    getSummary: (_config, t) =>
      translate(t)("agent-builder.blocks.finish.summary"),
    defaultConfig: {},
  },
};

for (const info of Object.values(BLOCK_INFO)) {
  Object.defineProperties(info, {
    label: { get: () => i18next.t(info.labelKey) },
    description: { get: () => i18next.t(info.descriptionKey) },
  });
}

/** DOM ids shared with the page so it can move focus after a change. */
const blockHeaderId = (prefix, blockId) => `${prefix}-block-${blockId}`;
const blockPanelId = (prefix, blockId) => `${prefix}-block-${blockId}-panel`;
const blockActionId = (prefix, blockId, action) =>
  `${prefix}-block-${blockId}-${action}`;

const ACTION_BUTTON =
  "w-11 h-11 md:w-8 md:h-8 shrink-0 flex items-center justify-center rounded-lg border border-zinc-600 light:border-slate-400 bg-theme-bg-primary transition-colors duration-quick ease-smooth aria-disabled:opacity-40 aria-disabled:cursor-not-allowed";

/** Blocks the user can reorder and delete (everything between Start and Finish). */
const isMovable = (block) =>
  block.type !== BLOCK_TYPES.START &&
  block.type !== BLOCK_TYPES.FINISH &&
  block.type !== BLOCK_TYPES.FLOW_INFO;

export default function BlockList({
  blocks,
  idPrefix,
  showErrors,
  updateBlockConfig,
  onRemoveBlock,
  onToggleBlock,
  onMoveBlock,
  onDeleteVariable,
}) {
  const { t } = useTranslation();
  const tooltipId = `${idPrefix}-block-action`;

  return (
    <>
      <ol aria-label={t("agent-builder.steps")} className="flex flex-col">
        {blocks.map((block, index) => (
          <BlockItem
            key={block.id}
            block={block}
            index={index}
            total={blocks.length}
            idPrefix={idPrefix}
            tooltipId={tooltipId}
            showErrors={showErrors}
            hasDirectOutputSwitch={
              index === blocks.length - 2 && isMovable(block)
            }
            updateBlockConfig={updateBlockConfig}
            onRemoveBlock={onRemoveBlock}
            onToggleBlock={onToggleBlock}
            onMoveBlock={onMoveBlock}
            onDeleteVariable={onDeleteVariable}
          />
        ))}
      </ol>
      <Tooltip
        id={tooltipId}
        place="bottom"
        delayShow={300}
        className="tooltip !text-xs"
      />
    </>
  );
}

function BlockItem({
  block,
  index,
  total,
  idPrefix,
  tooltipId,
  showErrors,
  hasDirectOutputSwitch,
  updateBlockConfig,
  onRemoveBlock,
  onToggleBlock,
  onMoveBlock,
  onDeleteVariable,
}) {
  const { t } = useTranslation();
  const [confirmingDelete, setConfirmingDelete] = useState(false);
  const deleteButtonRef = useRef(null);
  const directOutputHelpId = useId();
  const info = BLOCK_INFO[block.type];
  if (!info) return null;

  const name = t(info.labelKey);
  const position = index + 1;
  const headerId = blockHeaderId(idPrefix, block.id);
  const panelId = blockPanelId(idPrefix, block.id);
  const movable = isMovable(block);
  const canMoveUp = movable && index > 2;
  const canMoveDown = movable && index < total - 2;

  const cancelDelete = () => {
    setConfirmingDelete(false);
    deleteButtonRef.current?.focus();
  };

  const props = {
    config: block.config,
    onConfigChange: (config) => updateBlockConfig(block.id, config),
    onDeleteVariable,
    showErrors,
  };

  return (
    <li className="flex flex-col">
      <div
        className={`w-full mx-auto bg-theme-action-menu-bg border border-zinc-700 light:border-slate-300 rounded-lg ${
          block.isExpanded ? "" : "sm:max-w-[320px]"
        }`}
      >
        <div className="flex items-center gap-1 p-1.5">
          <h2 className="flex-1 min-w-0">
            <button
              id={headerId}
              type="button"
              aria-expanded={!!block.isExpanded}
              aria-controls={panelId}
              onClick={() => onToggleBlock(block.id)}
              className="w-full min-h-[44px] flex items-center gap-3 p-2 rounded-md text-left hover:bg-theme-action-menu-item-hover transition-colors duration-quick ease-smooth"
            >
              <span
                aria-hidden="true"
                className="w-7 h-7 shrink-0 rounded-lg bg-zinc-700 light:bg-slate-200 flex items-center justify-center"
              >
                {React.cloneElement(info.icon, {
                  className: "w-4 h-4 text-white",
                  "aria-hidden": true,
                })}
              </span>
              <span className="flex-1 min-w-0">
                <span className="block text-sm font-medium text-white truncate">
                  {name}
                </span>
                {!block.isExpanded && (
                  <span className="block text-xs text-theme-text-secondary truncate">
                    {info.getSummary(block.config, t)}
                  </span>
                )}
              </span>
              <ChevronDown
                strokeWidth={1.5}
                aria-hidden="true"
                className={`w-4 h-4 shrink-0 text-theme-text-secondary transition-transform duration-base ease-smooth ${
                  block.isExpanded ? "rotate-180" : ""
                }`}
              />
            </button>
          </h2>
          {movable && (
            <div className="flex items-center gap-1 pr-1">
              <button
                id={blockActionId(idPrefix, block.id, "up")}
                type="button"
                aria-disabled={!canMoveUp || undefined}
                aria-label={t("agent-builder.block.move-up", {
                  name,
                  position,
                })}
                data-tooltip-id={tooltipId}
                data-tooltip-content={t("agent-builder.block.move-up-short")}
                onClick={() => canMoveUp && onMoveBlock(index, index - 1)}
                className={`${ACTION_BUTTON} text-white hover:bg-theme-action-menu-item-hover`}
              >
                <ChevronUp
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className="w-4 h-4"
                />
              </button>
              <button
                id={blockActionId(idPrefix, block.id, "down")}
                type="button"
                aria-disabled={!canMoveDown || undefined}
                aria-label={t("agent-builder.block.move-down", {
                  name,
                  position,
                })}
                data-tooltip-id={tooltipId}
                data-tooltip-content={t("agent-builder.block.move-down-short")}
                onClick={() => canMoveDown && onMoveBlock(index, index + 1)}
                className={`${ACTION_BUTTON} text-white hover:bg-theme-action-menu-item-hover`}
              >
                <ChevronDown
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className="w-4 h-4"
                />
              </button>
              <button
                ref={deleteButtonRef}
                type="button"
                aria-label={t("agent-builder.block.delete", {
                  name,
                  position,
                })}
                data-tooltip-id={tooltipId}
                data-tooltip-content={t("agent-builder.block.delete-short")}
                onClick={() => setConfirmingDelete(true)}
                className={`${ACTION_BUTTON} text-red-400 light:text-red-600 hover:bg-red-500/10`}
              >
                <X strokeWidth={1.5} aria-hidden="true" className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {confirmingDelete && (
          <div className="px-3 pb-3">
            <InlineConfirm
              question={t("agent-builder.block.delete-confirm", { name })}
              confirmLabel={t("settings-pages.delete")}
              onConfirm={() => {
                setConfirmingDelete(false);
                onRemoveBlock(block.id);
              }}
              onCancel={cancelDelete}
            />
          </div>
        )}

        <div
          id={panelId}
          hidden={!block.isExpanded}
          className="border-t border-zinc-700 light:border-slate-300 p-4 bg-theme-bg-secondary rounded-b-lg"
        >
          <div className="space-y-4">
            <BlockConfig block={block} props={props} />
            {hasDirectOutputSwitch && (
              <div className="pt-4 border-t border-zinc-700 light:border-slate-300">
                <Toggle
                  size="md"
                  variant="horizontal"
                  label={t("agent-builder.block.direct-output")}
                  describedBy={directOutputHelpId}
                  enabled={block.config.directOutput || false}
                  onChange={(checked) =>
                    props.onConfigChange({ directOutput: checked })
                  }
                />
                <p id={directOutputHelpId} className={FIELD_HELP}>
                  {t("agent-builder.block.direct-output-help")}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      {index < total - 1 && (
        <div className="flex justify-center my-1" aria-hidden="true">
          <ArrowDown
            strokeWidth={1.5}
            className="w-5 h-5 text-zinc-500 light:text-slate-400"
          />
        </div>
      )}
    </li>
  );
}

function BlockConfig({ block, props }) {
  switch (block.type) {
    case BLOCK_TYPES.FLOW_INFO:
      return <FlowInfoNode {...props} />;
    case BLOCK_TYPES.START:
      return <StartNode {...props} />;
    case BLOCK_TYPES.API_CALL:
      return <ApiCallNode {...props} />;
    case BLOCK_TYPES.LLM_INSTRUCTION:
      return <LLMInstructionNode {...props} />;
    case BLOCK_TYPES.WEB_SCRAPING:
      return <WebScrapingNode {...props} />;
    case BLOCK_TYPES.FINISH:
      return <FinishNode />;
    default:
      return null;
  }
}

export {
  BLOCK_TYPES,
  BLOCK_INFO,
  blockHeaderId,
  blockPanelId,
  blockActionId,
  isMovable,
};
