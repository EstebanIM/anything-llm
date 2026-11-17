import { useId, useState } from "react";
import { ChevronDown, Play, Square, Trash2 } from "lucide-react";
import { useTranslation, Trans } from "react-i18next";
import MCPLogo from "@/media/agents/mcp-logo.svg";
import MCPServers from "@/models/mcpServers";
import showToast from "@/utils/toast";
import { serverErrorMessage } from "@/utils/serverErrors";
import { SimpleToggleSwitch } from "@/components/lib/Toggle";
import ConfirmModal from "@/components/lib/ConfirmModal";
import StatusNote from "@/components/lib/StatusNote";
import CopyButton from "@/components/lib/CopyButton";
import PanelHeader, {
  InstantNote,
  PANEL_ACTION,
  PANEL_DANGER_ACTION,
} from "../components/PanelHeader";
import {
  ServerState,
  enabledToolCount as countEnabledTools,
  serverTitle,
} from "./index";

/**
 * @param {object} props
 * @param {object} props.server
 * @param {(name: string) => Promise<void>} props.onServerToggled - after a start/stop succeeded
 * @param {(name: string) => void} props.onDelete - after the server was deleted
 * @param {(server: string, tool: string, enabled: boolean) => Promise<void>} props.onToggleTool
 */
export default function ServerPanel({
  server,
  onServerToggled,
  onDelete,
  onToggleTool,
}) {
  const { t } = useTranslation();
  const titleId = useId();
  const suppressedTools = server.config?.anythingllm?.suppressedTools || [];
  const enabledToolCount = countEnabledTools(server);
  const name = serverTitle(server);

  return (
    <div className="p-2">
      <div className="flex flex-col gap-y-[18px] max-w-[800px]">
        <ToolCountWarningBanner
          server={server}
          enabledToolCount={enabledToolCount}
        />
        <PanelHeader
          titleId={titleId}
          title={name}
          icon={
            <img
              src={MCPLogo}
              className="w-6 h-6 shrink-0 light:invert"
              alt=""
              aria-hidden="true"
            />
          }
        />
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
          <ServerState server={server} className="font-medium" />
          {server.tools.length > 0 && (
            <p className="text-theme-text-secondary">
              {t("agent-pages.mcp.tools-enabled", {
                enabled: enabledToolCount,
                count: server.tools.length,
              })}
            </p>
          )}
        </div>
        <ServerActions
          key={server.name}
          server={server}
          name={name}
          onServerToggled={onServerToggled}
          onDelete={onDelete}
        />
        <RenderServerStatus server={server} />
        <RenderServerConfig config={server.config} />
        <RenderServerTools
          serverName={server.name}
          tools={server.tools}
          suppressedTools={suppressedTools}
          onToggleTool={onToggleTool}
        />
      </div>
    </div>
  );
}

function ServerActions({ server, name, onServerToggled, onDelete }) {
  const { t } = useTranslation();
  const [toggling, setToggling] = useState(false);
  const [confirm, setConfirm] = useState(null); // "stop" | "delete" | null
  const [deleting, setDeleting] = useState(false);
  const running = !!server.running;

  async function toggleServer() {
    if (toggling) return;
    setToggling(true);
    const { success, error } = await MCPServers.toggleServer(server.name);
    if (success) await onServerToggled?.(server.name);
    setToggling(false);
    setConfirm(null);
    if (success) {
      showToast(
        running
          ? t("agent-pages.mcp.stopped", { name })
          : t("agent-pages.mcp.started", { name }),
        "success",
        { clear: true }
      );
    } else {
      showToast(
        serverErrorMessage(error, t, "agent-pages.mcp.toggle-failed", {
          values: { name },
        }),
        "error",
        { clear: true }
      );
    }
  }

  async function deleteServer() {
    setDeleting(true);
    const { success, error } = await MCPServers.deleteServer(server.name);
    setDeleting(false);
    if (!success) {
      showToast(
        serverErrorMessage(error, t, "agent-pages.mcp.delete-failed", {
          values: { name },
        }),
        "error",
        { clear: true }
      );
      return;
    }
    setConfirm(null);
    showToast(t("agent-pages.mcp.deleted", { name }), "success", {
      clear: true,
    });
    onDelete(server.name);
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      <button
        type="button"
        onClick={() => (running ? setConfirm("stop") : toggleServer())}
        aria-busy={(toggling && !running) || undefined}
        className={PANEL_ACTION}
      >
        {running ? (
          <Square strokeWidth={1.5} size={16} aria-hidden="true" />
        ) : (
          <Play strokeWidth={1.5} size={16} aria-hidden="true" />
        )}
        {running ? t("agent.mcp.stop-server") : t("agent.mcp.start-server")}
      </button>
      <button
        type="button"
        onClick={() => setConfirm("delete")}
        className={PANEL_DANGER_ACTION}
      >
        <Trash2 strokeWidth={1.5} size={16} aria-hidden="true" />
        {t("agent.mcp.delete-server")}
      </button>
      <ConfirmModal
        isOpen={confirm === "stop"}
        title={t("agent-pages.mcp.stop-title", { name })}
        confirmLabel={t("agent-pages.mcp.stop-confirm")}
        busy={toggling}
        onConfirm={toggleServer}
        onCancel={() => setConfirm(null)}
      >
        <p>{t("agent-pages.mcp.stop-body")}</p>
      </ConfirmModal>
      <ConfirmModal
        isOpen={confirm === "delete"}
        title={t("agent-pages.mcp.delete-title", { name })}
        confirmLabel={t("settings-pages.delete")}
        busy={deleting}
        onConfirm={deleteServer}
        onCancel={() => setConfirm(null)}
      >
        <p>{t("agent-pages.mcp.delete-body")}</p>
      </ConfirmModal>
    </div>
  );
}

function ToolCountWarningBanner({ server, enabledToolCount }) {
  if (server.tools.length <= 10) return null;
  if (enabledToolCount <= 10) return null;

  return (
    <StatusNote tone="warning">
      <Trans
        i18nKey={`agent.mcp.tool-count-warning`}
        values={{ count: enabledToolCount }}
        components={{ b: <b />, br: <br /> }}
      />
    </StatusNote>
  );
}

/** Text in a monospace block with a copy button. */
function CodeBlock({ text, copyLabel, tone = "default" }) {
  return (
    <div className="flex items-start gap-x-1 rounded-lg bg-theme-bg-primary light:bg-slate-100 p-2">
      <pre
        className={`flex-1 min-w-0 px-2 py-1.5 text-sm font-mono whitespace-pre-wrap break-all ${
          tone === "error"
            ? "text-red-300 light:text-red-800"
            : "text-theme-text-primary"
        }`}
      >
        {text}
      </pre>
      <CopyButton text={text} label={copyLabel} />
    </div>
  );
}

function RenderServerConfig({ config = null }) {
  const { t } = useTranslation();
  if (!config?.command) return null;
  const commandLine = [config.command, ...(config.args || [])].join(" ");
  return (
    <div className="flex flex-col gap-y-2">
      <h3 className="text-theme-text-primary text-sm font-semibold">
        {t("agent.mcp.startup-command")}
      </h3>
      <CodeBlock
        text={commandLine}
        copyLabel={t("agent-pages.mcp.copy-command")}
      />
    </div>
  );
}

function RenderServerStatus({ server }) {
  const { t } = useTranslation();
  if (server.running || !server.error) return null;
  return (
    <div className="flex flex-col gap-y-2">
      <StatusNote tone="error" title={t("agent-pages.mcp.error-title")}>
        {t("agent.mcp.not-running-warning")}
      </StatusNote>
      <CodeBlock
        text={String(server.error)}
        copyLabel={t("agent-pages.mcp.copy-error")}
        tone="error"
      />
    </div>
  );
}

function RenderServerTools({
  serverName,
  tools = [],
  suppressedTools = [],
  onToggleTool,
}) {
  const { t } = useTranslation();
  const headingId = useId();
  const noteId = useId();
  if (tools.length === 0) return null;
  return (
    <div className="flex flex-col gap-y-2">
      <h3
        id={headingId}
        className="text-theme-text-primary text-sm font-semibold"
      >
        {t("agent-pages.mcp.tools")}
      </h3>
      <InstantNote id={noteId} />
      <ul aria-labelledby={headingId} className="flex flex-col gap-y-2">
        {tools.map((tool) => (
          <ServerTool
            key={tool.name}
            serverName={serverName}
            tool={tool}
            enabled={!suppressedTools.includes(tool.name)}
            onToggle={onToggleTool}
          />
        ))}
      </ul>
    </div>
  );
}

function ServerTool({ serverName, tool, enabled, onToggle }) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const detailId = useId();
  const args = Object.entries(tool.inputSchema?.properties || {});

  async function toggle(next) {
    if (busy) return;
    setBusy(true);
    await onToggle?.(serverName, tool.name, next);
    setBusy(false);
  }

  return (
    <li className="rounded-lg border border-zinc-600 light:border-slate-300">
      <div className="flex items-center gap-x-3 px-3 py-2">
        <SimpleToggleSwitch
          size="md"
          enabled={enabled}
          ariaLabel={t("agent-pages.mcp.tool-toggle", { tool: tool.name })}
          onChange={toggle}
        />
        <div className="flex flex-col min-w-0 flex-1">
          <p className="flex flex-wrap items-center gap-x-2 text-sm">
            <span className="font-mono font-bold text-theme-text-primary break-all">
              {tool.name}
            </span>
            {!enabled && (
              <span className="text-xs text-theme-text-secondary">
                {t("agent-pages.skill-off")}
              </span>
            )}
          </p>
          {!open && tool.description && (
            <p className="text-theme-text-secondary text-sm truncate">
              {tool.description}
            </p>
          )}
        </div>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={detailId}
          onClick={() => setOpen((prev) => !prev)}
          className="shrink-0 w-11 h-11 md:w-8 md:h-8 flex items-center justify-center rounded-lg text-theme-text-secondary hover:text-theme-text-primary hover:bg-white/5 light:hover:bg-slate-100 transition-colors duration-quick ease-smooth"
        >
          <ChevronDown
            strokeWidth={1.5}
            size={16}
            aria-hidden="true"
            className={`transition-transform duration-quick ease-smooth ${
              open ? "rotate-180" : ""
            }`}
          />
          <span className="sr-only">
            {t("agent-pages.mcp.tool-details", { tool: tool.name })}
          </span>
        </button>
      </div>
      <div
        id={detailId}
        hidden={!open}
        className="px-3 pb-3 flex flex-col gap-y-2"
      >
        {tool.description && (
          <p className="text-theme-text-secondary text-sm">
            {tool.description}
          </p>
        )}
        {args.length > 0 && (
          <>
            <p className="text-theme-text-primary text-sm font-medium">
              {t("agent.mcp.tool-call-arguments")}
            </p>
            <dl className="flex flex-col gap-y-1 text-sm">
              {args.map(([key, value]) => (
                <div key={key} className="flex flex-wrap items-center gap-x-2">
                  <dt className="font-mono font-bold text-theme-text-secondary">
                    {key}
                    {tool.inputSchema?.required?.includes(key) && (
                      <>
                        <span
                          aria-hidden="true"
                          className="ml-0.5 text-red-400 light:text-red-700"
                        >
                          *
                        </span>
                        <span className="sr-only">
                          {" "}
                          ({t("agent-pages.required")})
                        </span>
                      </>
                    )}
                  </dt>
                  <dd className="text-theme-text-secondary">{value?.type}</dd>
                </div>
              ))}
            </dl>
          </>
        )}
      </div>
    </li>
  );
}
