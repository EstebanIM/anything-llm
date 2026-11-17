import { useCallback, useEffect, useId, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Database, Plus } from "lucide-react";
import Admin from "@/models/admin";
import { useModal } from "@/hooks/useModal";
import SQLAgentImage from "@/media/agents/sql-agent.png";
import StatusNote from "@/components/lib/StatusNote";
import {
  PANEL_TEXT,
  PanelHeader,
  PanelLoadError,
  PanelLoading,
  SECONDARY_BUTTON,
} from "../IntegrationParts/PanelParts";
import DBConnection from "./DBConnection";
import NewSQLConnection from "./SQLConnectionModal";

let uidCounter = 0;
/** Stable local key: a connection keeps its row (and focus) when renamed. */
const withUid = (connection) => ({
  ...connection,
  _uid: `sql-${++uidCounter}`,
});

/**
 * Pending changes in the shape the server merges (mergeConnections in
 * server/models/systemSettings.js). Untouched connections are left out, so
 * their passwords never sit in the page form.
 */
function serializeChanges(connections) {
  const changes = [];
  for (const conn of connections) {
    if (!conn.action) continue;
    if (conn.action === "remove") {
      // A connection added in this session was never stored: nothing to remove.
      if (conn._prevAction === "add") continue;
      changes.push({
        action: "remove",
        database_id:
          conn._prevAction === "update"
            ? conn.originalDatabaseId
            : conn.database_id,
      });
      continue;
    }
    changes.push({
      action: conn.action,
      engine: conn.engine,
      database_id: conn.database_id,
      connectionString: conn.connectionString,
      schema: conn.schema ?? null,
      ...(conn.action === "update"
        ? { originalDatabaseId: conn.originalDatabaseId }
        : {}),
    });
  }
  return JSON.stringify(changes);
}

export default function AgentSQLConnectorSelection({
  skill,
  title,
  description,
  toggleSkill,
  enabled = false,
  setHasChanges,
  hasChanges = false,
}) {
  const { t } = useTranslation();
  const headingId = useId();
  const listHeadingId = useId();
  const { isOpen, openModal, closeModal } = useModal();
  const [connections, setConnections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const prevHasChanges = useRef(hasChanges);

  const load = useCallback(async ({ quiet = false } = {}) => {
    if (!quiet) {
      setLoading(true);
      setLoadError(false);
    }
    const res = await Admin.systemPreferencesByFields([
      "agent_sql_connections",
    ]);
    if (!res?.settings) {
      if (!quiet) {
        setLoadError(true);
        setLoading(false);
      }
      return;
    }
    setConnections((res.settings.agent_sql_connections ?? []).map(withUid));
    setLoading(false);
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  // Saved or discarded (hasChanges: true -> false): reload the stored list,
  // which drops the pending actions.
  useEffect(() => {
    if (prevHasChanges.current === true && hasChanges === false)
      load({ quiet: true });
    prevHasChanges.current = hasChanges;
  }, [hasChanges]);

  /** Marks a connection for removal on save; the row offers undo until then. */
  function handleRemoveConnection(uid) {
    setHasChanges(true);
    setConnections((prev) =>
      prev.map((conn) =>
        conn._uid === uid
          ? { ...conn, action: "remove", _prevAction: conn.action ?? null }
          : conn
      )
    );
  }

  function handleUndoRemove(uid) {
    setConnections((prev) =>
      prev.map((conn) => {
        if (conn._uid !== uid) return conn;
        const { _prevAction, ...rest } = conn;
        return { ...rest, action: _prevAction ?? undefined };
      })
    );
  }

  /**
   * Replaces the edited connection in place. A connection added in this
   * session stays an "add"; a stored one becomes an "update" of its original id.
   */
  function handleUpdateConnection(updatedConnection) {
    setHasChanges(true);
    setConnections((prev) =>
      prev.map((conn) => {
        if (conn._uid !== updatedConnection._uid) return conn;
        if (conn.action === "add")
          return {
            ...updatedConnection,
            action: "add",
            originalDatabaseId: undefined,
          };
        return updatedConnection;
      })
    );
  }

  function handleAddConnection(newConnection) {
    setHasChanges(true);
    setConnections((prev) => [...prev, withUid(newConnection)]);
  }

  const hasPendingChanges = connections.some((conn) => !!conn.action);
  const ready = !loading && !loadError;

  return (
    <>
      <div className="p-2">
        <div className="flex flex-col gap-y-[18px] max-w-[500px]">
          <PanelHeader
            headingId={headingId}
            title={title}
            icon={
              <Database
                strokeWidth={1.5}
                size={24}
                aria-hidden="true"
                className="shrink-0 text-theme-text-primary"
              />
            }
            enabled={enabled}
            onToggle={() => toggleSkill(skill)}
          />
          <img src={SQLAgentImage} alt="" className="w-full rounded-md" />
          <p className={PANEL_TEXT}>{description}</p>
          {enabled && (
            <section
              aria-labelledby={listHeadingId}
              className="flex flex-col mt-2 gap-y-3"
            >
              <h3
                id={listHeadingId}
                className="text-theme-text-primary font-semibold text-sm"
              >
                {t("agent-integrations.sql.connections")}
              </h3>
              {loading && <PanelLoading />}
              {!loading && loadError && (
                <PanelLoadError
                  message={t("agent-integrations.sql.load-error")}
                  onRetry={() => load()}
                />
              )}
              {ready && (
                <>
                  <input
                    name="system::agent_sql_connections"
                    type="hidden"
                    value={serializeChanges(connections)}
                  />
                  {connections.length > 0 ? (
                    <ul className="flex flex-col gap-y-3">
                      {connections.map((connection) => (
                        <DBConnection
                          key={connection._uid}
                          connection={connection}
                          onRemove={handleRemoveConnection}
                          onUndoRemove={handleUndoRemove}
                          onUpdate={handleUpdateConnection}
                          setHasChanges={setHasChanges}
                          connections={connections}
                        />
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-theme-text-secondary">
                      {t("agent-integrations.sql.empty")}
                    </p>
                  )}
                  {hasPendingChanges && (
                    <StatusNote tone="info" announce>
                      {t("agent-integrations.sql.pending")}
                    </StatusNote>
                  )}
                  <button
                    type="button"
                    onClick={openModal}
                    className={SECONDARY_BUTTON}
                  >
                    <Plus strokeWidth={1.5} size={16} aria-hidden="true" />
                    {t("agent-integrations.sql.new")}
                  </button>
                </>
              )}
            </section>
          )}
        </div>
      </div>
      <NewSQLConnection
        isOpen={isOpen}
        closeModal={closeModal}
        setHasChanges={setHasChanges}
        onSubmit={handleAddConnection}
        connections={connections}
      />
    </>
  );
}
