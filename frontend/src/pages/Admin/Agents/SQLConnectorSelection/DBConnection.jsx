import { useEffect, useId, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Pencil, Trash2, Undo2 } from "lucide-react";
import { useModal } from "@/hooks/useModal";
import EditSQLConnection from "./SQLConnectionModal";
import { DB_LOGOS, ENGINE_LABELS } from "./engines";

const ICON_BUTTON =
  "inline-flex items-center justify-center w-11 h-11 md:w-8 md:h-8 rounded-lg border-none bg-transparent text-theme-text-secondary hover:bg-zinc-800 light:hover:bg-slate-100 transition-colors duration-quick ease-smooth";

/**
 * One saved (or pending) SQL connection. Removing only marks it: the row stays
 * with "Will be removed when you save" and an undo button, because the page
 * applies the removal on save.
 */
export default function DBConnection({
  connection,
  onRemove,
  onUndoRemove,
  onUpdate,
  setHasChanges,
  connections = [],
}) {
  const { t } = useTranslation();
  const { database_id, engine } = connection;
  const pendingRemoval = connection.action === "remove";
  const { isOpen, openModal, closeModal } = useModal();
  const statusId = useId();
  const undoRef = useRef(null);
  const removeRef = useRef(null);
  const focusAfterToggle = useRef(null);

  // Swapping remove <-> undo unmounts the focused button: move focus to its replacement.
  useEffect(() => {
    if (focusAfterToggle.current === "undo" && pendingRemoval)
      undoRef.current?.focus();
    if (focusAfterToggle.current === "remove" && !pendingRemoval)
      removeRef.current?.focus();
    focusAfterToggle.current = null;
  }, [pendingRemoval]);

  return (
    <li className="flex gap-x-3 items-center">
      <img
        src={DB_LOGOS[engine]}
        alt=""
        className={`w-10 h-10 rounded-md shrink-0 transition-opacity duration-quick ease-smooth ${
          pendingRemoval ? "opacity-50" : ""
        }`}
      />
      <div className="flex min-w-0 flex-1 items-center justify-between gap-x-2">
        <div className="flex min-w-0 flex-col">
          <span
            className={`text-sm font-semibold text-theme-text-primary break-words ${
              pendingRemoval ? "line-through" : ""
            }`}
          >
            {database_id}
          </span>
          <span className="mt-1 text-xs text-theme-text-secondary">
            {ENGINE_LABELS[engine] ?? engine}
          </span>
          {pendingRemoval && (
            <span
              id={statusId}
              className="mt-1 text-xs font-medium text-amber-300 light:text-amber-800"
            >
              {t("agent-integrations.sql.remove-pending")}
            </span>
          )}
        </div>
        <div className="flex shrink-0 items-center gap-x-1">
          {pendingRemoval ? (
            <button
              ref={undoRef}
              type="button"
              onClick={() => {
                focusAfterToggle.current = "remove";
                onUndoRemove(connection._uid);
              }}
              aria-label={t("agent-integrations.sql.undo-remove", {
                name: database_id,
              })}
              aria-describedby={statusId}
              className="inline-flex items-center gap-x-1.5 min-h-[44px] md:min-h-[32px] px-3 rounded-lg border border-zinc-500 light:border-slate-500 bg-transparent text-sm font-medium text-white hover:bg-zinc-800 light:hover:bg-slate-100 transition-colors duration-quick ease-smooth"
            >
              <Undo2 strokeWidth={1.5} size={16} aria-hidden="true" />
              {t("agent-integrations.sql.undo")}
            </button>
          ) : (
            <>
              <button
                type="button"
                onClick={openModal}
                aria-label={t("agent-integrations.sql.edit", {
                  name: database_id,
                })}
                title={t("agent-integrations.sql.edit", { name: database_id })}
                className={`${ICON_BUTTON} hover:text-white light:hover:text-slate-900`}
              >
                <Pencil strokeWidth={1.5} size={18} aria-hidden="true" />
              </button>
              <button
                ref={removeRef}
                type="button"
                onClick={() => {
                  focusAfterToggle.current = "undo";
                  onRemove(connection._uid);
                }}
                aria-label={t("agent-integrations.sql.remove", {
                  name: database_id,
                })}
                title={t("agent-integrations.sql.remove", {
                  name: database_id,
                })}
                className={`${ICON_BUTTON} hover:text-red-300 light:hover:text-red-700`}
              >
                <Trash2 strokeWidth={1.5} size={18} aria-hidden="true" />
              </button>
            </>
          )}
        </div>
      </div>
      <EditSQLConnection
        isOpen={isOpen}
        closeModal={closeModal}
        existingConnection={connection}
        onSubmit={onUpdate}
        setHasChanges={setHasChanges}
        connections={connections}
      />
    </li>
  );
}
