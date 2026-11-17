import { useCallback, useEffect, useState } from "react";
import { titleCase } from "text-case";
import {
  CircleAlert,
  CircleCheck,
  CircleStop,
  RefreshCw,
  TriangleAlert,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import MCPLogo from "@/media/agents/mcp-logo.svg";
import MCPServers from "@/models/mcpServers";
import showToast from "@/utils/toast";
import { serverErrorMessage, serverErrorParts } from "@/utils/serverErrors";
import ConfirmModal from "@/components/lib/ConfirmModal";
import ServerErrorDetail from "@/components/lib/ServerErrorDetail";
import {
  RowList,
  RowButton,
  SectionEmpty,
  SectionHeading,
} from "../components/SkillRows";
import { LoadError } from "../components/SubSkills";

/** Readable server name ("brave_search" -> "Brave Search"). */
export function serverTitle(server) {
  return titleCase(String(server?.name ?? "").replace(/[_-]/g, " "));
}

/** "running" | "stopped" | "error" (stopped because it failed to start). */
export function serverState(server) {
  if (server?.running) return "running";
  if (server?.error) return "error";
  return "stopped";
}

export function enabledToolCount(server) {
  const suppressed = server?.config?.anythingllm?.suppressedTools || [];
  return (server?.tools || []).filter((tool) => !suppressed.includes(tool.name))
    .length;
}

const STATES = {
  running: {
    Icon: CircleCheck,
    className: "text-green-400 light:text-green-700",
    key: "agent-pages.mcp.state-running",
  },
  stopped: {
    Icon: CircleStop,
    className: "text-theme-text-secondary",
    key: "agent-pages.mcp.state-stopped",
  },
  error: {
    Icon: CircleAlert,
    className: "text-red-400 light:text-red-700",
    key: "agent-pages.mcp.state-error",
  },
};

/** Server state as icon + text (never color alone). */
export function ServerState({ server, className = "" }) {
  const { t } = useTranslation();
  const { Icon, className: tone, key } = STATES[serverState(server)];
  return (
    <span className={`inline-flex items-center gap-x-1 ${tone} ${className}`}>
      <Icon strokeWidth={1.5} size={14} aria-hidden="true" />
      {t(key)}
    </span>
  );
}

/**
 * MCP server list state. `status` is "loading" | "ready" | "error": a list
 * that fails to load is not shown as "no servers".
 */
export function useMcpServers() {
  const [servers, setServers] = useState([]);
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState(null);

  const load = useCallback(async ({ silent = false } = {}) => {
    if (!silent) setStatus("loading");
    const res = await MCPServers.listServers();
    if (res?.success === false || !Array.isArray(res?.servers)) {
      if (!silent) {
        setError(res?.error || null);
        setStatus("error");
      }
      return false;
    }
    setServers(res.servers);
    setError(null);
    setStatus("ready");
    return true;
  }, []);

  const forceReload = useCallback(async () => {
    const res = await MCPServers.forceReload();
    if (res?.success === false || !Array.isArray(res?.servers))
      return { ok: false, error: res?.error || null };
    setServers(res.servers);
    setError(null);
    setStatus("ready");
    return { ok: true };
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  return { servers, setServers, status, error, load, forceReload };
}

export function MCPServersSection({
  headingId,
  mcp,
  isSelected = () => false,
  handleClick,
}) {
  const { t } = useTranslation();
  const [confirming, setConfirming] = useState(false);
  const [reloading, setReloading] = useState(false);
  const busy = reloading || mcp.status === "loading";

  async function reloadAll() {
    setReloading(true);
    const { ok, error } = await mcp.forceReload();
    setReloading(false);
    setConfirming(false);
    if (ok) {
      showToast(t("agent-pages.mcp.reloaded"), "success", { clear: true });
    } else {
      showToast(
        serverErrorMessage(error, t, "agent-pages.mcp.reload-failed"),
        "error",
        { clear: true }
      );
    }
  }

  return (
    <section aria-labelledby={headingId} className="flex flex-col gap-y-3">
      <SectionHeading
        id={headingId}
        icon={
          <img
            src={MCPLogo}
            className="w-6 h-6 light:invert"
            alt=""
            aria-hidden="true"
          />
        }
        action={
          <button
            type="button"
            onClick={() => {
              if (busy) return;
              setConfirming(true);
            }}
            aria-busy={busy || undefined}
            className="inline-flex items-center gap-x-1 min-h-[44px] md:min-h-[32px] px-2 rounded-lg text-sm text-theme-text-secondary hover:text-theme-text-primary hover:bg-white/5 light:hover:bg-slate-100 aria-busy:cursor-wait transition-colors duration-quick ease-smooth"
          >
            <RefreshCw
              strokeWidth={1.5}
              size={16}
              aria-hidden="true"
              className={busy ? "motion-safe:animate-spin" : ""}
            />
            {t("common.refresh")}
          </button>
        }
      >
        {t("agent.mcp.title")}
      </SectionHeading>
      <MCPServersList
        headingId={headingId}
        mcp={mcp}
        isSelected={isSelected}
        handleClick={handleClick}
      />
      <ConfirmModal
        isOpen={confirming}
        title={t("agent-pages.mcp.reload-title")}
        confirmLabel={t("agent-pages.mcp.reload-confirm")}
        busy={reloading}
        danger={false}
        onConfirm={reloadAll}
        onCancel={() => setConfirming(false)}
      >
        <p>{t("agent-pages.mcp.reload-body")}</p>
      </ConfirmModal>
    </section>
  );
}

function MCPServersList({ headingId, mcp, isSelected, handleClick }) {
  const { t } = useTranslation();
  if (mcp.status === "loading") {
    return (
      <SectionEmpty>
        <p role="status">{t("agent.mcp.loading-from-config")}</p>
      </SectionEmpty>
    );
  }

  if (mcp.status === "error") {
    const { message, detail } = mcp.error
      ? serverErrorParts(mcp.error, t, "agent-pages.mcp.load-error-detail")
      : { message: t("agent-pages.mcp.load-error"), detail: null };
    return (
      <LoadError
        message={
          <>
            {message}
            <ServerErrorDetail detail={detail} />
          </>
        }
        onRetry={() => mcp.load()}
      />
    );
  }

  if (mcp.servers.length === 0) {
    return (
      <SectionEmpty>
        <p>{t("agent.mcp.no-servers-found")}</p>
        <p>{t("agent-pages.mcp.empty-hint")}</p>
      </SectionEmpty>
    );
  }

  return (
    <RowList labelledBy={headingId}>
      {mcp.servers.map((server) => (
        <MCPServerItem
          key={server.name}
          server={server}
          isSelected={isSelected(server.name)}
          handleClick={() => handleClick?.(server)}
        />
      ))}
    </RowList>
  );
}

function MCPServerItem({ server, isSelected, handleClick }) {
  const { t } = useTranslation();
  const showWarning = enabledToolCount(server) > 10;
  return (
    <RowButton
      rowKey={`mcp:${server.name}`}
      selected={isSelected}
      onClick={handleClick}
      title={serverTitle(server)}
      status={
        <>
          {showWarning && (
            <span
              className="inline-flex"
              title={t("agent-pages.mcp.many-tools")}
            >
              <TriangleAlert
                strokeWidth={1.5}
                aria-hidden="true"
                className="h-4 w-4 shrink-0 text-amber-400 light:text-amber-700"
              />
              <span className="sr-only">
                {t("agent-pages.mcp.many-tools")},{" "}
              </span>
            </span>
          )}
          <ServerState server={server} />
        </>
      }
    />
  );
}
