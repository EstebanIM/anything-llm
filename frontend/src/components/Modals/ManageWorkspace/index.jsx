import React, { useState, useEffect, useId, useRef, memo } from "react";
import { X, RotateCw } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import Workspace from "../../../models/workspace";
import System from "../../../models/system";
import useUser from "../../../hooks/useUser";
import useIsMobile from "@/hooks/useIsMobile";
import Modal from "@/components/lib/Modal";
import ConfirmModal from "@/components/lib/ConfirmModal";
import PreLoader from "@/components/Preloader";
import DocumentSettings from "./Documents";
import DataConnectors from "./DataConnectors";
import { EmbeddingProgressProvider } from "@/EmbeddingProgressContext";

const TABS = ["documents", "dataConnectors"];

const noop = () => {};
const ManageWorkspace = ({ hideModal = noop, providedSlug = null }) => {
  const { t } = useTranslation();
  const { slug } = useParams();
  const { user } = useUser();
  const isMobile = useIsMobile();
  const [workspace, setWorkspace] = useState(null);
  const [loadState, setLoadState] = useState("loading");
  const [settings, setSettings] = useState({});
  const [selectedTab, setSelectedTab] = useState("documents");
  // Connectors mount on first visit and then stay, so a running collection
  // survives a trip to the documents tab.
  const [connectorsVisited, setConnectorsVisited] = useState(false);
  const [pendingCount, setPendingCount] = useState(0);
  const [confirmClose, setConfirmClose] = useState(false);
  const titleId = useId();

  useEffect(() => {
    async function getSettings() {
      const _settings = await System.keys();
      setSettings(_settings ?? {});
    }
    getSettings();
  }, []);

  const fetchWorkspace = async () => {
    setLoadState("loading");
    const result = await Workspace.bySlug(providedSlug ?? slug);
    setWorkspace(result);
    setLoadState(result ? "ready" : "error");
  };
  useEffect(() => {
    fetchWorkspace();
  }, [providedSlug, slug]);

  const selectTab = (tab) => {
    setSelectedTab(tab);
    if (tab === "dataConnectors") setConnectorsVisited(true);
  };

  // Staged documents only live in this dialog: closing would drop them.
  const requestClose = () => {
    if (pendingCount > 0) return setConfirmClose(true);
    hideModal();
  };

  const title = workspace
    ? t("workspace-docs.title", { workspace: workspace.name })
    : t("workspace-docs.title-loading");
  const showTabs = !isMobile && user?.role !== "default";

  const closeButton = (
    <button
      onClick={requestClose}
      type="button"
      aria-label={t("api.modal.close")}
      className="border-none bg-transparent w-11 h-11 md:w-9 md:h-9 shrink-0 flex items-center justify-center rounded-xl text-slate-50 light:text-slate-900 hover:bg-zinc-800 light:hover:bg-slate-100 transition-colors duration-quick ease-smooth"
    >
      <X strokeWidth={1.5} size={20} aria-hidden="true" />
    </button>
  );

  let body;
  if (loadState !== "ready") {
    body = (
      <div className="flex flex-col items-center justify-center gap-y-3 min-h-[240px] px-6 pb-6 text-center">
        {loadState === "loading" ? (
          <PreLoader />
        ) : (
          <>
            <p
              role="alert"
              className="text-sm text-slate-50 light:text-slate-900"
            >
              {t("workspace-docs.load-error")}
            </p>
            <button
              type="button"
              onClick={fetchWorkspace}
              className="border-none bg-transparent flex items-center gap-x-1.5 min-h-[44px] md:min-h-0 px-2 py-1 rounded-md text-sm font-medium underline text-slate-50 light:text-slate-900"
            >
              <RotateCw strokeWidth={1.5} size={14} aria-hidden="true" />
              {t("provider-fields.retry")}
            </button>
          </>
        )}
      </div>
    );
  } else if (isMobile) {
    body = (
      <EmbeddingProgressProvider>
        <DocumentSettings
          workspace={workspace}
          variant="mobile"
          onPendingChange={setPendingCount}
        />
      </EmbeddingProgressProvider>
    );
  } else {
    body = (
      <>
        <TabPanel
          id={`${titleId}-panel-documents`}
          labelledBy={`${titleId}-tab-documents`}
          active={selectedTab === "documents"}
          tabs={showTabs}
        >
          <EmbeddingProgressProvider>
            <DocumentSettings
              workspace={workspace}
              active={selectedTab === "documents"}
              onPendingChange={setPendingCount}
            />
          </EmbeddingProgressProvider>
        </TabPanel>
        {showTabs && connectorsVisited && (
          <TabPanel
            id={`${titleId}-panel-dataConnectors`}
            labelledBy={`${titleId}-tab-dataConnectors`}
            active={selectedTab === "dataConnectors"}
            tabs={showTabs}
          >
            <DataConnectors workspace={workspace} systemSettings={settings} />
          </TabPanel>
        )}
      </>
    );
  }

  return (
    <>
      <Modal isOpen onClose={requestClose} variant="bare" ariaLabel={title}>
        {isMobile ? (
          <div className="fixed inset-0 flex flex-col bg-zinc-900 light:bg-white pt-[env(safe-area-inset-top)]">
            <div className="shrink-0 flex items-center justify-between gap-x-3 pl-5 pr-3 h-14">
              <h2
                id={titleId}
                className="text-base font-semibold truncate text-slate-50 light:text-slate-900"
              >
                {title}
              </h2>
              {closeButton}
            </div>
            {body}
          </div>
        ) : (
          <div
            className={`relative flex flex-col max-h-[calc(100dvh-2rem)] overflow-y-auto mx-4 bg-zinc-900 light:bg-white rounded-xl border border-zinc-700 light:border-slate-300 shadow-lg ${
              selectedTab === "documents" || loadState !== "ready"
                ? "w-full max-w-[640px] min-[1330px]:max-w-[1280px]"
                : "w-fit max-w-[calc(100vw-2rem)]"
            }`}
          >
            <div className="sticky top-0 z-30 bg-zinc-900 light:bg-white rounded-t-xl flex flex-col gap-y-3 px-6 pt-4 pb-4">
              <div className="flex items-center justify-between gap-x-3">
                <h2
                  id={titleId}
                  className="min-w-0 text-lg font-semibold truncate text-slate-50 light:text-slate-900"
                >
                  {title}
                </h2>
                {closeButton}
              </div>
              {showTabs && loadState === "ready" && (
                <ModalTabs
                  baseId={titleId}
                  selectedTab={selectedTab}
                  onSelect={selectTab}
                />
              )}
            </div>
            {body}
          </div>
        )}
      </Modal>
      <ConfirmModal
        isOpen={confirmClose}
        title={t("workspace-docs.close-confirm.title")}
        confirmLabel={t("workspace-docs.close-confirm.confirm")}
        onConfirm={() => {
          setConfirmClose(false);
          hideModal();
        }}
        onCancel={() => setConfirmClose(false)}
      >
        <p>{t("workspace-docs.close-confirm.body", { count: pendingCount })}</p>
      </ConfirmModal>
    </>
  );
};

export default memo(ManageWorkspace);

/**
 * Panel for one tab; inactive panels stay mounted and hidden. `isolate` keeps
 * the panel's own z-indexes below the sticky dialog header.
 */
function TabPanel({ id, labelledBy, active, tabs, children }) {
  if (!tabs) return <div className="isolate">{children}</div>;
  return (
    <div
      id={id}
      role="tabpanel"
      aria-labelledby={labelledBy}
      className={active ? "block isolate" : "hidden"}
    >
      {children}
    </div>
  );
}

/**
 * Documents / Data connectors switch: a tablist with roving focus (arrow keys,
 * Home, End) that activates on focus.
 */
function ModalTabs({ baseId, selectedTab, onSelect }) {
  const { t } = useTranslation();
  const tabRefs = useRef({});
  const labels = {
    documents: t("connectors.manage.documents"),
    dataConnectors: t("connectors.manage.data-connectors"),
  };

  const handleKeyDown = (event) => {
    const index = TABS.indexOf(selectedTab);
    let next = null;
    if (event.key === "ArrowRight") next = (index + 1) % TABS.length;
    if (event.key === "ArrowLeft")
      next = (index - 1 + TABS.length) % TABS.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = TABS.length - 1;
    if (next === null) return;
    event.preventDefault();
    onSelect(TABS[next]);
    tabRefs.current[TABS[next]]?.focus();
  };

  return (
    <div
      role="tablist"
      aria-label={t("workspace-docs.tabs-label")}
      onKeyDown={handleKeyDown}
      className="flex gap-x-1 w-fit p-1 rounded-xl bg-zinc-800 light:bg-slate-100"
    >
      {TABS.map((tab) => {
        const selected = selectedTab === tab;
        return (
          <button
            key={tab}
            ref={(node) => (tabRefs.current[tab] = node)}
            id={`${baseId}-tab-${tab}`}
            type="button"
            role="tab"
            aria-selected={selected}
            aria-controls={`${baseId}-panel-${tab}`}
            tabIndex={selected ? 0 : -1}
            onClick={() => onSelect(tab)}
            className={`border-none px-4 h-9 rounded-lg text-sm transition-colors duration-quick ease-smooth ${
              selected
                ? "bg-zinc-700 text-slate-50 font-semibold light:bg-white light:text-slate-900 light:shadow-sm"
                : "bg-transparent text-zinc-400 font-medium hover:text-slate-50 light:text-slate-600 light:hover:text-slate-900"
            }`}
          >
            {labels[tab]}
          </button>
        );
      })}
    </div>
  );
}

export function useManageWorkspaceModal() {
  const { user } = useUser();
  const [showing, setShowing] = useState(false);

  function showModal() {
    if (user?.role !== "default") {
      setShowing(true);
    }
  }

  function hideModal() {
    setShowing(false);
  }

  // Escape is handled by the dialog itself (lib/Modal), so it is not
  // registered here as well.
  return { showing, showModal, hideModal };
}
