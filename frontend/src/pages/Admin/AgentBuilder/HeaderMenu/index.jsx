import { useId, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ChevronLeft, ChevronsUpDown, LoaderCircle, Plus } from "lucide-react";
import useMenu from "@/hooks/useMenu";
import paths from "@/utils/paths";

const SECONDARY_BUTTON =
  "min-h-[44px] md:min-h-[36px] flex items-center justify-center gap-x-2 px-3 rounded-lg border border-zinc-600 light:border-slate-400 bg-theme-settings-input-bg text-sm font-medium text-white hover:bg-theme-action-menu-bg transition-colors duration-quick ease-smooth disabled:opacity-60 disabled:cursor-not-allowed";

/**
 * Builder header, in the page flow above the scrolling steps: back link, flow
 * name (the page h1), flow switcher, unsaved-changes note and the actions.
 */
export default function HeaderMenu({
  flowName,
  currentFlowUuid,
  availableFlows = [],
  isDirty,
  saving,
  canSave,
  onNewFlow,
  onSaveFlow,
  onPublishFlow,
}) {
  const { t } = useTranslation();
  const title = flowName?.trim() || t("agent-builder.untitled");
  const otherFlows = availableFlows.filter(
    (flow) => flow?.uuid && flow.uuid !== currentFlowUuid
  );

  return (
    <header className="shrink-0 sticky top-0 z-20 border-b border-zinc-700 light:border-slate-300 bg-theme-bg-primary">
      <div className="max-w-[1700px] mx-auto px-4 py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div className="flex items-center gap-x-2 min-w-0">
          <Link
            to={paths.settings.agentSkills()}
            aria-label={t("agent-builder.header.back")}
            title={t("agent-builder.header.back")}
            className="w-11 h-11 md:w-9 md:h-9 shrink-0 flex items-center justify-center rounded-full border border-zinc-600 light:border-slate-400 bg-theme-settings-input-bg text-white hover:bg-theme-action-menu-bg transition-colors duration-quick ease-smooth"
          >
            <ChevronLeft
              strokeWidth={1.5}
              aria-hidden="true"
              className="w-5 h-5"
            />
          </Link>
          <div className="min-w-0 flex flex-col">
            <span className="text-xs uppercase tracking-widest text-theme-text-secondary">
              {t("agent-builder.header.eyebrow")}
            </span>
            <h1
              title={title}
              className={`text-base font-semibold truncate ${
                flowName?.trim() ? "text-white" : "text-theme-text-secondary"
              }`}
            >
              {title}
            </h1>
          </div>
          {otherFlows.length > 0 && (
            <FlowSwitcher currentName={title} flows={otherFlows} />
          )}
        </div>

        <div className="flex flex-wrap items-center justify-end gap-2">
          <p
            role="status"
            className="flex items-center gap-x-2 text-sm text-theme-text-secondary mr-auto md:mr-2"
          >
            {isDirty && (
              <>
                <span
                  aria-hidden="true"
                  className="w-2 h-2 rounded-full bg-amber-400 light:bg-amber-600"
                />
                {t("agent-builder.header.unsaved")}
              </>
            )}
          </p>
          <button
            type="button"
            onClick={onNewFlow}
            className={SECONDARY_BUTTON}
          >
            <Plus strokeWidth={1.5} aria-hidden="true" className="w-4 h-4" />
            {t("agent-builder.header.new-flow")}
          </button>
          <button
            type="button"
            onClick={onPublishFlow}
            disabled={!canSave}
            className={SECONDARY_BUTTON}
          >
            {t("agent-builder.header.publish")}
          </button>
          <button
            type="button"
            onClick={onSaveFlow}
            disabled={!canSave}
            aria-disabled={saving || undefined}
            aria-busy={saving || undefined}
            className="min-h-[44px] md:min-h-[36px] flex items-center justify-center gap-x-2 px-4 rounded-lg text-sm font-semibold bg-primary-button text-theme-button-primary-text hover:bg-primary-button-hover transition-colors duration-quick ease-smooth disabled:opacity-60 disabled:cursor-not-allowed aria-disabled:cursor-wait aria-disabled:opacity-60"
          >
            {saving && (
              <LoaderCircle
                strokeWidth={1.5}
                aria-hidden="true"
                className="w-4 h-4 animate-spin"
              />
            )}
            {saving ? t("common.saving") : t("agent-builder.header.save")}
          </button>
        </div>
      </div>
    </header>
  );
}

function FlowSwitcher({ currentName, flows }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const triggerRef = useRef(null);
  const menuRef = useRef(null);
  const menuId = useId();

  useMenu({ open, onClose: () => setOpen(false), menuRef, triggerRef });

  return (
    <div className="relative shrink-0">
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={open ? menuId : undefined}
        aria-label={t("agent-builder.header.switch-flow", {
          name: currentName,
        })}
        title={t("agent-builder.header.switch-flow", { name: currentName })}
        onClick={() => setOpen((value) => !value)}
        className="w-11 h-11 md:w-9 md:h-9 flex items-center justify-center rounded-lg border border-zinc-600 light:border-slate-400 bg-theme-settings-input-bg text-white hover:bg-theme-action-menu-bg transition-colors duration-quick ease-smooth"
      >
        <ChevronsUpDown
          strokeWidth={1.5}
          aria-hidden="true"
          className="w-4 h-4"
        />
      </button>
      {open && (
        <div
          ref={menuRef}
          id={menuId}
          role="menu"
          aria-label={t("agent-builder.header.flows-menu")}
          className="absolute left-0 top-full mt-2 z-30 w-[min(20rem,calc(100vw-2rem))] max-h-[60vh] overflow-y-auto p-1 rounded-lg bg-zinc-900 light:bg-white border border-zinc-700 light:border-slate-300 shadow-lg animate-in fade-in-0 slide-in-from-top-2"
        >
          {flows.map((flow) => {
            const name = flow.name || t("agent-builder.untitled");
            return (
              <button
                key={flow.uuid}
                type="button"
                role="menuitem"
                title={name}
                onClick={() => {
                  setOpen(false);
                  triggerRef.current?.focus();
                  navigate(paths.agents.editAgent(flow.uuid));
                }}
                className="w-full text-left px-3 min-h-[44px] md:min-h-[36px] rounded-md text-sm text-zinc-100 light:text-slate-900 hover:bg-zinc-800 light:hover:bg-slate-100 transition-colors duration-quick ease-smooth"
              >
                <span className="block truncate">{name}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
