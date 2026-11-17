import { useId, useState } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";
import Modal, {
  ModalHeader,
  ModalHint,
  ModalInput,
  ModalPrimaryButton,
  ModalSecondaryButton,
} from "@/components/lib/Modal";
import SegmentedControl from "@/components/lib/SegmentedControl";
import StatusNote from "@/components/lib/StatusNote";
import Toggle from "@/components/lib/Toggle";
import System from "@/models/system";
import { DEFAULT_PORTS, ENGINE_LABELS, ENGINES } from "./engines";

const DEFAULT_ENGINE = "postgresql";
const PASSWORD_MASK = "••••••";

/**
 * Converts a string to a URL-friendly slug format.
 * Matches backend slugify behavior for consistent database_id generation.
 * @param {string} str - The string to slugify
 * @returns {string} - The slugified string (lowercase, hyphens, no special chars)
 */
function slugify(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") // Remove special characters
    .replace(/[\s_]+/g, "-") // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, ""); // Remove leading/trailing hyphens
}

/**
 * Assembles a database connection string based on the engine type and configuration.
 * An empty port falls back to the engine's default port.
 * @param {Object} params - Connection parameters
 * @param {string} params.engine - The database engine ('postgresql', 'mysql', or 'sql-server')
 * @param {string} [params.username=""] - Database username
 * @param {string} [params.password=""] - Database password
 * @param {string} [params.host=""] - Database host/endpoint
 * @param {string} [params.port=""] - Database port
 * @param {string} [params.database=""] - Database name
 * @param {boolean} [params.encrypt=false] - Enable encryption (SQL Server only)
 * @param {boolean} [params.ssl=false] - Connect over SSL/TLS without certificate verification
 * @returns {string|null} - The connection string, or null while a required field is empty or the engine is unknown
 */
function assembleConnectionString({
  engine,
  username = "",
  password = "",
  host = "",
  port = "",
  database = "",
  encrypt = false,
  ssl = false,
}) {
  if (![username, password, host, database].every((i) => !!i)) return null;
  const user = encodeURIComponent(username);
  const pass = encodeURIComponent(password);
  const db = encodeURIComponent(database);
  const finalPort = port || DEFAULT_PORTS[engine];
  // SSL is encrypt-without-verification to allow self-signed
  const pgSsl = ssl ? "?sslmode=no-verify" : "";
  switch (engine) {
    case "postgresql":
      return `postgres://${user}:${pass}@${host}:${finalPort}/${db}${pgSsl}`;
    case "mysql":
      return `mysql://${user}:${pass}@${host}:${finalPort}/${db}`;
    case "sql-server":
      return `mssql://${user}:${pass}@${host}:${finalPort}/${db}?encrypt=${encrypt}`;
    default:
      return null;
  }
}

/**
 * Hides the password of a connection string for display. The user and the
 * password are URI-encoded, so neither contains a raw ":" or "@".
 * @param {string} connectionString
 * @returns {string}
 */
function maskConnectionString(connectionString) {
  return connectionString.replace(
    /^([a-z]+:\/\/[^:@/]*):[^@]*@/i,
    `$1:${PASSWORD_MASK}@`
  );
}

function initialConfig(existing) {
  if (!existing)
    return {
      name: "",
      username: "",
      password: "",
      host: "",
      port: "",
      database: "",
      schema: null,
      encrypt: false,
      ssl: false,
    };
  const connectionString = existing.connectionString || "";
  return {
    name: existing.database_id ?? "",
    username: existing.username ?? "",
    password: existing.password ?? "",
    host: existing.host ?? "",
    port: existing.port ? String(existing.port) : "",
    database: existing.database ?? "",
    schema: existing.schema ?? null,
    encrypt: existing.encrypt ?? /[?&]encrypt=true\b/.test(connectionString),
    ssl: existing.ssl ?? /[?&]sslmode=no-verify\b/.test(connectionString),
  };
}

/**
 * Modal for creating or editing a SQL connection. It is portaled next to the
 * page form (nested forms are invalid) and only mounts while open, so every
 * opening starts from the connection being edited.
 *
 * @param {Object} props
 * @param {boolean} props.isOpen
 * @param {Function} props.closeModal
 * @param {Function} props.onSubmit - Receives the validated connection ("add" or "update" action)
 * @param {Function} props.setHasChanges
 * @param {Object|null} [props.existingConnection=null] - Connection being edited
 * @param {Array} [props.connections=[]] - All connections, for duplicate names
 */
export default function SQLConnectionModal({ isOpen, ...props }) {
  if (!isOpen) return null;
  const target =
    document.getElementById("workspace-agent-settings-container") ??
    document.body;
  return createPortal(<SQLConnectionDialog {...props} />, target);
}

function SQLConnectionDialog({
  closeModal,
  onSubmit,
  setHasChanges,
  existingConnection = null,
  connections = [],
}) {
  const { t } = useTranslation();
  const id = useId();
  const formId = `${id}-form`;
  const nameFieldId = `${id}-name`;
  const engineLabelId = `${id}-engine`;
  const previewLabelId = `${id}-preview`;
  const isEditMode = !!existingConnection;
  const [engine, setEngine] = useState(
    existingConnection?.engine ?? DEFAULT_ENGINE
  );
  const [config, setConfig] = useState(() => initialConfig(existingConnection));
  const [isValidating, setIsValidating] = useState(false);
  const [nameError, setNameError] = useState(null);
  const [connectionError, setConnectionError] = useState(null);

  const close = isValidating ? undefined : closeModal;

  function onFormChange(e) {
    // Typing here must not mark the agents page as modified.
    e.stopPropagation();
    const form = new FormData(e.currentTarget);
    setConfig({
      name: (form.get("name") ?? "").trim(),
      username: (form.get("username") ?? "").trim(),
      password: form.get("password") ?? "",
      host: (form.get("host") ?? "").trim(),
      port: (form.get("port") ?? "").trim(),
      database: (form.get("database") ?? "").trim(),
      schema: form.get("schema")?.trim() || null,
      encrypt: form.get("encrypt") === "true",
      ssl: form.get("ssl") === "true",
    });
    if (e.target.name === "name" && nameError) setNameError(null);
  }

  /** Same name as another connection still in the list (not the one being edited). */
  function isDuplicateConnectionName(slugifiedName) {
    return connections.some(
      (conn) =>
        conn.action !== "remove" &&
        conn._uid !== existingConnection?._uid &&
        conn.database_id === slugifiedName
    );
  }

  /**
   * Validates the name, tests the connection on the server and, if it works,
   * hands the connection to the panel ("add" or "update"). Nothing is stored
   * until the page is saved.
   */
  async function handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    if (isValidating) return;
    const form = new FormData(e.currentTarget);
    const slugifiedDatabaseId = slugify(form.get("name") ?? "");

    if (
      !slugifiedDatabaseId ||
      isDuplicateConnectionName(slugifiedDatabaseId)
    ) {
      setNameError(
        slugifiedDatabaseId
          ? t("agent-integrations.sql.duplicate-name", {
              name: slugifiedDatabaseId,
            })
          : t("agent-integrations.sql.invalid-name")
      );
      document.getElementById(nameFieldId)?.focus();
      return;
    }

    const connectionString = assembleConnectionString({ engine, ...config });
    if (!connectionString) return;

    setNameError(null);
    setConnectionError(null);
    setIsValidating(true);
    const { success, error } = await System.validateSQLConnection(
      engine,
      connectionString
    );
    if (!success) {
      setIsValidating(false);
      setConnectionError(error || t("agent-integrations.sql.unknown-error"));
      return;
    }

    const connectionData = {
      engine,
      database_id: slugifiedDatabaseId,
      connectionString,
      schema: engine === "postgresql" ? config.schema : null,
      // Kept in memory only, to prefill a later edit before the page is saved.
      username: config.username,
      password: config.password,
      host: config.host,
      port: config.port,
      database: config.database,
      encrypt: config.encrypt,
      ssl: config.ssl,
    };

    if (isEditMode) {
      onSubmit({
        ...connectionData,
        action: "update",
        originalDatabaseId:
          existingConnection.originalDatabaseId ??
          existingConnection.database_id,
        _uid: existingConnection._uid,
      });
    } else {
      onSubmit({ ...connectionData, action: "add" });
    }
    setHasChanges(true);
    setIsValidating(false);
    closeModal();
  }

  const preview = assembleConnectionString({ engine, ...config });
  const defaultPort = DEFAULT_PORTS[engine];

  return (
    <Modal
      isOpen={true}
      onClose={close}
      size="lg"
      noPortal
      className="!z-[1000]"
    >
      <ModalHeader
        title={
          isEditMode
            ? t("agent-integrations.sql.edit-title")
            : t("agent-integrations.sql.new-title")
        }
        subtitle={
          isEditMode
            ? t("agent-integrations.sql.edit-description")
            : t("agent-integrations.sql.new-description")
        }
        onClose={close}
      />
      <form
        id={formId}
        onChange={onFormChange}
        onSubmit={handleSubmit}
        className="flex flex-col gap-y-5 w-full"
      >
        <StatusNote
          tone="warning"
          title={t("agent-integrations.sql.read-only-title")}
        >
          {t("agent-integrations.sql.read-only-body")}
        </StatusNote>

        <div className="flex flex-col gap-y-1.5">
          <p
            id={engineLabelId}
            className="text-sm font-medium text-zinc-50 light:text-slate-700"
          >
            {t("agent-integrations.sql.engine")}
          </p>
          <SegmentedControl
            value={engine}
            onChange={setEngine}
            labelledBy={engineLabelId}
            options={ENGINES.map((value) => ({
              value,
              label: ENGINE_LABELS[value],
            }))}
          />
        </div>

        <ModalInput
          id={nameFieldId}
          label={t("agent-integrations.sql.name")}
          type="text"
          name="name"
          placeholder={t("agent-integrations.sql.name-placeholder")}
          hint={t("agent-integrations.sql.name-hint")}
          error={nameError}
          required={true}
          autoComplete="off"
          spellCheck={false}
          defaultValue={config.name}
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <ModalInput
            label={t("agent-integrations.sql.username")}
            type="text"
            name="username"
            required={true}
            autoComplete="off"
            spellCheck={false}
            defaultValue={config.username}
          />
          <ModalInput
            label={t("agent-integrations.sql.password")}
            type="password"
            name="password"
            required={true}
            autoComplete="new-password"
            spellCheck={false}
            data-1p-ignore=""
            data-lpignore="true"
            data-bwignore=""
            defaultValue={config.password}
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="sm:col-span-2">
            <ModalInput
              label={t("agent-integrations.sql.host")}
              type="text"
              name="host"
              placeholder={t("agent-integrations.sql.host-placeholder")}
              required={true}
              autoComplete="off"
              spellCheck={false}
              defaultValue={config.host}
            />
          </div>
          <ModalInput
            label={t("agent-integrations.sql.port")}
            optional={true}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            name="port"
            placeholder={defaultPort}
            hint={t("agent-integrations.sql.port-hint", { port: defaultPort })}
            autoComplete="off"
            spellCheck={false}
            defaultValue={config.port}
          />
        </div>

        <ModalInput
          label={t("agent-integrations.sql.database")}
          type="text"
          name="database"
          placeholder={t("agent-integrations.sql.database-placeholder")}
          required={true}
          autoComplete="off"
          spellCheck={false}
          defaultValue={config.database}
        />

        {engine === "postgresql" && (
          <ModalInput
            label={t("agent-integrations.sql.schema")}
            optional={true}
            type="text"
            name="schema"
            placeholder="public"
            hint={t("agent-integrations.sql.schema-hint")}
            autoComplete="off"
            spellCheck={false}
            defaultValue={config.schema || ""}
          />
        )}

        {engine === "sql-server" && (
          <Toggle
            name="encrypt"
            value="true"
            size="md"
            label={t("agent-integrations.sql.encrypt")}
            description={t("agent-integrations.sql.encrypt-help")}
            enabled={!!config.encrypt}
          />
        )}

        {engine === "postgresql" && (
          <Toggle
            name="ssl"
            value="true"
            size="md"
            label={t("agent-integrations.sql.ssl")}
            description={t("agent-integrations.sql.ssl-help")}
            enabled={!!config.ssl}
          />
        )}

        <div className="flex flex-col gap-y-1.5">
          <p
            id={previewLabelId}
            className="text-sm font-medium text-zinc-50 light:text-slate-700"
          >
            {t("agent-integrations.sql.preview")}
          </p>
          <code
            aria-labelledby={previewLabelId}
            className="block break-all rounded-lg bg-zinc-800 light:bg-slate-100 px-3 py-2 text-xs text-zinc-300 light:text-slate-700"
          >
            {preview
              ? maskConnectionString(preview)
              : t("agent-integrations.sql.preview-incomplete")}
          </code>
        </div>

        {connectionError && (
          <StatusNote
            tone="error"
            announce
            title={t("agent-integrations.sql.connection-failed")}
          >
            {connectionError}
          </StatusNote>
        )}

        <ModalHint>{t("agent-integrations.sql.save-page-hint")}</ModalHint>

        <div className="flex justify-between items-center gap-x-2 w-full">
          <ModalSecondaryButton
            type="button"
            onClick={closeModal}
            disabled={isValidating}
          >
            {t("settings-pages.cancel")}
          </ModalSecondaryButton>
          <ModalPrimaryButton type="submit" busy={isValidating}>
            {isValidating
              ? t("agent-integrations.sql.testing")
              : t("agent-integrations.sql.save-connection")}
          </ModalPrimaryButton>
        </div>
      </form>
    </Modal>
  );
}
