import { useEffect, useId, useMemo, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { v4 } from "uuid";

import BlockList, {
  BLOCK_TYPES,
  BLOCK_INFO,
  blockActionId,
  blockHeaderId,
} from "./BlockList";
import AddBlockMenu from "./AddBlockMenu";
import showToast from "@/utils/toast";
import AgentFlows from "@/models/agentFlows";
import { useTheme } from "@/hooks/useTheme";
import HeaderMenu from "./HeaderMenu";
import paths from "@/utils/paths";
import PublishEntityModal from "@/components/CommunityHub/PublishEntityModal";
import ConfirmModal from "@/components/lib/ConfirmModal";
import StatusNote from "@/components/lib/StatusNote";
import UnsavedChangesGuard from "@/components/UnsavedChangesGuard";
import PreLoader from "@/components/Preloader";
import { AvailableVariablesProvider } from "./useAvailableVariables";
import variableIssues from "./nodes/StartNode/variableIssues";

const DEFAULT_BLOCKS = [
  {
    id: "flow_info",
    type: BLOCK_TYPES.FLOW_INFO,
    config: {
      name: "",
      description: "",
    },
    isExpanded: true,
  },
  {
    id: "start",
    type: BLOCK_TYPES.START,
    config: {
      variables: [{ name: "", value: "", type: "optional", description: "" }],
    },
    isExpanded: true,
  },
  {
    id: "finish",
    type: BLOCK_TYPES.FINISH,
    config: {},
    isExpanded: false,
  },
];

/**
 * What a save would store: block types and settings, without ids or the
 * expanded / collapsed state. Comparing it with the last saved (or loaded)
 * value tells whether there are unsaved changes.
 * @param {Array} blocks
 */
function snapshotOf(blocks) {
  return JSON.stringify(
    blocks.map(({ type, config }) => ({ type, config: config || {} }))
  );
}

/**
 * Builder blocks for a stored flow, with the flow info first and the finish
 * block always last.
 * @param {{config: {name: string, description: string, steps: Array}}} flow
 */
function blocksFromFlow(flow) {
  const blocks = [
    {
      id: "flow_info",
      type: BLOCK_TYPES.FLOW_INFO,
      config: {
        name: flow.config.name,
        description: flow.config.description,
      },
      isExpanded: true,
    },
    ...(flow.config.steps || []).map((step, index) => ({
      id: index === 0 ? "start" : `block_${index}`,
      type: step.type,
      config: step.config,
      isExpanded: true,
    })),
  ];
  if (blocks[blocks.length - 1]?.type !== BLOCK_TYPES.FINISH) {
    blocks.push({
      id: "finish",
      type: BLOCK_TYPES.FINISH,
      config: {},
      isExpanded: false,
    });
  }
  return blocks;
}

/** The steps a save sends: everything except the flow info and finish blocks. */
function stepsOf(blocks) {
  return blocks
    .filter(
      (block) =>
        block.type !== BLOCK_TYPES.FINISH &&
        block.type !== BLOCK_TYPES.FLOW_INFO
    )
    .map((block) => ({ type: block.type, config: block.config }));
}

/** Own message for a failed save; the server text is logged, not shown. */
function saveErrorKey(error = "") {
  return /unsupported blocks/i.test(error)
    ? "agent-builder.save.unsupported"
    : "agent-builder.save.failed";
}

export default function AgentBuilder() {
  const { t } = useTranslation();
  const { flowId } = useParams();
  const { theme } = useTheme();
  const navigate = useNavigate();
  const idPrefix = useId();
  const mainId = `${idPrefix}-main`;
  const [blocks, setBlocks] = useState(DEFAULT_BLOCKS);
  const [savedSnapshot, setSavedSnapshot] = useState(() =>
    snapshotOf(DEFAULT_BLOCKS)
  );
  const [currentFlowUuid, setCurrentFlowUuid] = useState(null);
  const [active, setActive] = useState(true);
  const [loadState, setLoadState] = useState(flowId ? "loading" : "ready");
  const [saving, setSaving] = useState(false);
  const [showErrors, setShowErrors] = useState(false);
  const [availableFlows, setAvailableFlows] = useState([]);
  const [showPublishModal, setShowPublishModal] = useState(false);
  const [confirmNewFlow, setConfirmNewFlow] = useState(false);
  const [pendingNavigation, setPendingNavigation] = useState(null);
  const [announcement, setAnnouncement] = useState("");
  // uuid of the flow currently in the editor, so a URL change to that same
  // flow (after the first save) does not load it again.
  const loadedUuidRef = useRef(null);
  const loadRequestRef = useRef(0);
  const savingRef = useRef(false);

  const isDirty = useMemo(
    () => loadState === "ready" && snapshotOf(blocks) !== savedSnapshot,
    [blocks, savedSnapshot, loadState]
  );

  useEffect(() => {
    loadAvailableFlows();
  }, []);

  useEffect(() => {
    if (!flowId) {
      if (loadedUuidRef.current) resetToNewFlow();
      return;
    }
    if (flowId === loadedUuidRef.current) return;
    loadFlow(flowId);
  }, [flowId]);

  // Navigate once the page is clean: the unsaved-changes guard reads the
  // dirty flag from the last render, so navigating in the same handler that
  // saved (or discarded) would still be blocked.
  useEffect(() => {
    if (!pendingNavigation || isDirty) return;
    navigate(pendingNavigation.to, { replace: pendingNavigation.replace });
    setPendingNavigation(null);
  }, [pendingNavigation, isDirty]);

  const loadAvailableFlows = async () => {
    const { success, error, flows } = await AgentFlows.listFlows();
    if (!success) {
      console.error(error);
      showToast(t("agent-builder.load.flows-failed"), "error", {
        clear: true,
      });
      return;
    }
    setAvailableFlows(flows || []);
  };

  const loadFlow = async (uuid) => {
    const request = ++loadRequestRef.current;
    setLoadState("loading");
    const { success, error, flow } = await AgentFlows.getFlow(uuid);
    if (request !== loadRequestRef.current) return;
    if (!success || !flow) {
      console.error(error);
      setLoadState("error");
      return;
    }
    const flowBlocks = blocksFromFlow(flow);
    loadedUuidRef.current = flow.uuid;
    setBlocks(flowBlocks);
    setSavedSnapshot(snapshotOf(flowBlocks));
    setActive(flow.config.active ?? true);
    setCurrentFlowUuid(flow.uuid);
    setShowErrors(false);
    setLoadState("ready");
  };

  const resetToNewFlow = () => {
    loadRequestRef.current++;
    loadedUuidRef.current = null;
    setBlocks(DEFAULT_BLOCKS);
    setSavedSnapshot(snapshotOf(DEFAULT_BLOCKS));
    setCurrentFlowUuid(null);
    setActive(true);
    setShowErrors(false);
    setLoadState("ready");
  };

  const startNewFlow = () => {
    resetToNewFlow();
    setConfirmNewFlow(false);
    setAnnouncement(t("agent-builder.new-flow.started"));
    if (flowId) setPendingNavigation({ to: paths.agents.builder() });
  };

  const focusById = (id) => document.getElementById(id)?.focus();

  const addBlock = (type) => {
    const newBlock = {
      id: `block_${v4()}`,
      type,
      config: { ...BLOCK_INFO[type].defaultConfig },
      isExpanded: true,
    };
    // Insert the new block before the finish block
    flushSync(() =>
      setBlocks((prev) => {
        const next = [...prev];
        next.splice(next.length - 1, 0, newBlock);
        return next;
      })
    );
    focusById(blockHeaderId(idPrefix, newBlock.id));
  };

  const updateBlockConfig = (blockId, config) => {
    setBlocks((prev) =>
      prev.map((block) =>
        block.id === blockId
          ? { ...block, config: { ...block.config, ...config } }
          : block
      )
    );
  };

  const removeBlock = (blockId) => {
    if (blockId === "start") return;
    const index = blocks.findIndex((block) => block.id === blockId);
    if (index === -1) return;
    const name = t(BLOCK_INFO[blocks[index].type].labelKey);
    flushSync(() =>
      setBlocks((prev) => prev.filter((block) => block.id !== blockId))
    );
    // The finish block always follows, so there is a next header to land on.
    const next = blocks[index + 1];
    if (next) focusById(blockHeaderId(idPrefix, next.id));
    setAnnouncement(t("agent-builder.block.deleted", { name }));
  };

  const moveBlock = (fromIndex, toIndex) => {
    const moved = blocks[fromIndex];
    if (!moved) return;
    flushSync(() =>
      setBlocks((prev) => {
        const next = [...prev];
        const [block] = next.splice(fromIndex, 1);
        next.splice(toIndex, 0, block);
        return next;
      })
    );
    // Reordering can detach the focused button: keep focus on the same control.
    focusById(
      blockActionId(idPrefix, moved.id, toIndex < fromIndex ? "up" : "down")
    );
    setAnnouncement(
      t("agent-builder.block.moved", {
        name: t(BLOCK_INFO[moved.type].labelKey),
        position: toIndex + 1,
        total: blocks.length,
      })
    );
  };

  const toggleBlockExpansion = (blockId) => {
    setBlocks((prev) =>
      prev.map((block) =>
        block.id === blockId
          ? { ...block, isExpanded: !block.isExpanded }
          : block
      )
    );
  };

  // Clear result/response references to a deleted flow variable.
  const deleteVariable = (variableName) => {
    setBlocks((prev) =>
      prev.map((block) => {
        if (block.type === BLOCK_TYPES.START) return block;
        const config = { ...block.config };
        let changed = false;
        if (config.responseVariable === variableName) {
          config.responseVariable = "";
          changed = true;
        }
        if (config.resultVariable === variableName) {
          config.resultVariable = "";
          changed = true;
        }
        return changed ? { ...block, config } : block;
      })
    );
  };

  /** Blocks with a field that stops the save, in page order. */
  const invalidBlockIds = () => {
    const ids = [];
    for (const block of blocks) {
      if (
        block.type === BLOCK_TYPES.FLOW_INFO &&
        (!block.config?.name?.trim() || !block.config?.description?.trim())
      )
        ids.push(block.id);
      if (
        block.type === BLOCK_TYPES.START &&
        variableIssues(block.config?.variables).some(Boolean)
      )
        ids.push(block.id);
    }
    return ids;
  };

  const saveFlow = async () => {
    if (savingRef.current || loadState !== "ready") return;

    const invalid = invalidBlockIds();
    if (invalid.length > 0) {
      // Open the blocks with errors and render the messages, then move focus
      // to the first invalid field (its error is linked to it).
      flushSync(() => {
        setShowErrors(true);
        setBlocks((prev) =>
          prev.map((block) =>
            invalid.includes(block.id) ? { ...block, isExpanded: true } : block
          )
        );
      });
      document
        .getElementById(mainId)
        ?.querySelector('[aria-invalid="true"]')
        ?.focus();
      return;
    }

    const flowInfo = blocks.find(
      (block) => block.type === BLOCK_TYPES.FLOW_INFO
    );
    const { name, description } = flowInfo.config;
    const sentBlocks = blocks;
    savingRef.current = true;
    setSaving(true);
    const { success, error, flow } = await AgentFlows.saveFlow(
      name,
      { name, description, active, steps: stepsOf(sentBlocks) },
      currentFlowUuid
    );
    savingRef.current = false;
    setSaving(false);

    if (!success || !flow?.uuid) {
      console.error("Failed to save agent flow:", error);
      showToast(t(saveErrorKey(error)), "error", { clear: true });
      return;
    }

    loadedUuidRef.current = flow.uuid;
    setCurrentFlowUuid(flow.uuid);
    setSavedSnapshot(snapshotOf(sentBlocks));
    setShowErrors(false);
    showToast(t("agent-builder.save.success"), "success", { clear: true });
    if (flowId !== flow.uuid) {
      setPendingNavigation({
        to: paths.agents.editAgent(flow.uuid),
        replace: true,
      });
    }
    loadAvailableFlows();
  };

  const flowInfoBlock = blocks.find(
    (block) => block.type === BLOCK_TYPES.FLOW_INFO
  );
  const flowEntity = {
    name: flowInfoBlock?.config?.name || "",
    description: flowInfoBlock?.config?.description || "",
    steps: stepsOf(blocks),
  };

  return (
    <AvailableVariablesProvider blocks={blocks}>
      <UnsavedChangesGuard when={isDirty} />
      <div
        style={{
          backgroundImage:
            theme === "light"
              ? "radial-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 0)"
              : "radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 0)",
          backgroundSize: "15px 15px",
          backgroundPosition: "-7.5px -7.5px",
        }}
        className="w-full h-dvh flex flex-col bg-theme-bg-primary overflow-clip"
      >
        <PublishEntityModal
          show={showPublishModal}
          onClose={() => setShowPublishModal(false)}
          entityType="agent-flow"
          entity={flowEntity}
        />
        <ConfirmModal
          isOpen={confirmNewFlow}
          title={t("agent-builder.new-flow.title")}
          confirmLabel={t("agent-builder.new-flow.confirm")}
          onConfirm={startNewFlow}
          onCancel={() => setConfirmNewFlow(false)}
        >
          <p>{t("agent-builder.new-flow.description")}</p>
        </ConfirmModal>
        <HeaderMenu
          flowName={flowInfoBlock?.config?.name}
          currentFlowUuid={currentFlowUuid}
          availableFlows={availableFlows}
          isDirty={isDirty}
          saving={saving}
          canSave={loadState === "ready"}
          onNewFlow={() => (isDirty ? setConfirmNewFlow(true) : startNewFlow())}
          onSaveFlow={saveFlow}
          onPublishFlow={() => setShowPublishModal(true)}
        />
        <main
          id={mainId}
          className="flex-1 min-h-0 overflow-y-auto px-4 py-6 md:p-6"
        >
          <p role="status" className="sr-only">
            {announcement}
          </p>
          <div className="max-w-xl mx-auto">
            {loadState === "loading" && (
              <div className="flex justify-center py-16">
                <PreLoader />
              </div>
            )}
            {loadState === "error" && (
              <StatusNote
                tone="error"
                announce
                title={t("agent-builder.load.error-title")}
              >
                <p>{t("agent-builder.load.error-description")}</p>
                <button
                  type="button"
                  onClick={() => loadFlow(flowId)}
                  className="mt-2 min-h-[44px] md:min-h-[32px] px-3 rounded-md border border-current text-sm font-medium hover:bg-red-500/10 transition-colors duration-quick ease-smooth"
                >
                  {t("provider-fields.retry")}
                </button>
              </StatusNote>
            )}
            {loadState === "ready" && (
              <>
                <BlockList
                  blocks={blocks}
                  idPrefix={idPrefix}
                  showErrors={showErrors}
                  updateBlockConfig={updateBlockConfig}
                  onRemoveBlock={removeBlock}
                  onToggleBlock={toggleBlockExpansion}
                  onMoveBlock={moveBlock}
                  onDeleteVariable={deleteVariable}
                />
                <AddBlockMenu blocks={blocks} onAddBlock={addBlock} />
              </>
            )}
          </div>
        </main>
      </div>
    </AvailableVariablesProvider>
  );
}
