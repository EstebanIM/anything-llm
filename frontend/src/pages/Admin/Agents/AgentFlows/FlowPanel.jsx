import { useId, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Pencil, Trash2, Workflow } from "lucide-react";
import AgentFlows from "@/models/agentFlows";
import showToast from "@/utils/toast";
import paths from "@/utils/paths";
import Toggle from "@/components/lib/Toggle";
import ConfirmModal from "@/components/lib/ConfirmModal";
import PanelHeader, {
  InstantNote,
  PANEL_ACTION,
  PANEL_DANGER_ACTION,
} from "../components/PanelHeader";

export default function FlowPanel({ flow, toggleFlow, enabled, onDelete }) {
  const { t } = useTranslation();
  const titleId = useId();
  const noteId = useId();
  const [toggling, setToggling] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const handleToggle = async () => {
    if (toggling) return;
    setToggling(true);
    const { success, error } = await AgentFlows.toggleFlow(flow.uuid, !enabled);
    setToggling(false);
    if (!success) {
      console.error("Failed to toggle flow:", error);
      showToast(t("agent-pages.flows.toggle-failed"), "error", {
        clear: true,
      });
      return;
    }
    toggleFlow(flow.uuid);
  };

  const deleteFlow = async () => {
    setDeleting(true);
    const { success, error } = await AgentFlows.deleteFlow(flow.uuid);
    setDeleting(false);
    if (!success) {
      showToast(
        t("agent-pages.flows.delete-failed", { error: error || "-" }),
        "error",
        { clear: true }
      );
      return;
    }
    setConfirmDelete(false);
    showToast(t("agent-pages.flows.deleted", { name: flow.name }), "success", {
      clear: true,
    });
    onDelete(flow.uuid);
  };

  return (
    <div className="p-2">
      <div className="flex flex-col gap-y-[18px] max-w-[500px]">
        <PanelHeader
          titleId={titleId}
          title={flow.name}
          icon={
            <Workflow
              strokeWidth={1.5}
              size={24}
              aria-hidden="true"
              className="shrink-0 text-theme-text-primary"
            />
          }
        >
          <Toggle
            size="lg"
            enabled={enabled}
            ariaLabelledBy={titleId}
            describedBy={noteId}
            onChange={handleToggle}
          />
        </PanelHeader>
        <InstantNote id={noteId} />
        <p className="whitespace-pre-wrap text-theme-text-secondary text-xs font-medium py-1.5">
          {flow.description || t("agent-pages.flows.no-description")}
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <Link to={paths.agents.editAgent(flow.uuid)} className={PANEL_ACTION}>
            <Pencil strokeWidth={1.5} size={16} aria-hidden="true" />
            {t("agent-pages.flows.edit")}
          </Link>
          <button
            type="button"
            onClick={() => setConfirmDelete(true)}
            className={PANEL_DANGER_ACTION}
          >
            <Trash2 strokeWidth={1.5} size={16} aria-hidden="true" />
            {t("agent-pages.flows.delete")}
          </button>
        </div>
      </div>
      <ConfirmModal
        isOpen={confirmDelete}
        title={t("agent-pages.flows.delete-title", { name: flow.name })}
        confirmLabel={t("settings-pages.delete")}
        busy={deleting}
        onConfirm={deleteFlow}
        onCancel={() => setConfirmDelete(false)}
      >
        <p>{t("agent-pages.flows.delete-body")}</p>
      </ConfirmModal>
    </div>
  );
}
