import { forwardRef, useEffect, useId, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Eye, EyeOff, File, Pin, PinOff, Undo2 } from "lucide-react";
import { getFileExtension } from "@/utils/directories";
import SelectionCheckbox from "../../SelectionCheckbox";
import usePinDocument from "../../hooks/usePinDocument";
import useWatchDocument from "../../hooks/useWatchDocument";
import {
  ROW_ACCENT,
  ROW_BASE,
  ROW_IDLE,
  displayDate,
  rowChip,
  rowSecondaryText,
} from "../../listStyles";

/** Tooltip id rendered once by WorkspaceDirectory. */
export const ROW_ACTION_TOOLTIP = "ws-row-action";

/**
 * A document embedded in (or staged for) the workspace.
 *
 * Pin and watch are toggle buttons (`aria-pressed`) with a stable name; their
 * state is also written out in the row's detail line. Removing asks for
 * confirmation in place: Escape or Cancel returns focus to the remove button.
 *
 * @param {Object} props
 * @param {boolean} props.staged - moved in but not embedded yet
 * @param {boolean} props.selectable - false while staged changes are unsaved
 * @param {(ids: string[]) => Promise<boolean>} props.onRemove
 */
export default function WorkspaceFileRow({
  item,
  folderName,
  workspace,
  staged,
  selected,
  selectable,
  onToggle,
  onRemove,
}) {
  const { t } = useTranslation();
  const docPath = `${folderName}/${item.name}`;
  const { pinned, pinBusy, togglePin } = usePinDocument({
    workspace,
    docPath,
    item,
  });
  const { watched, watchBusy, toggleWatch } = useWatchDocument({
    workspace,
    docPath,
    item,
  });
  const [confirming, setConfirming] = useState(false);
  const [removing, setRemoving] = useState(false);
  const removeRef = useRef(null);
  const cancelRef = useRef(null);
  const returnFocus = useRef(false);
  const questionId = useId();
  const accent = selected || staged;
  const secondary = rowSecondaryText(accent);

  useEffect(() => {
    if (confirming) {
      cancelRef.current?.focus();
      return;
    }
    if (returnFocus.current) {
      returnFocus.current = false;
      removeRef.current?.focus();
    }
  }, [confirming]);

  const cancelRemove = () => {
    returnFocus.current = true;
    setConfirming(false);
  };

  const confirmRemove = async () => {
    setRemoving(true);
    const removed = await onRemove([item.id]);
    // On success the row unmounts; on failure the error shows above the list.
    if (!removed) {
      setRemoving(false);
      cancelRemove();
    }
  };

  const meta = [
    folderName,
    getFileExtension(item.url),
    displayDate(item.published),
  ]
    .filter(Boolean)
    .join(" · ");

  return (
    <li
      onClick={selectable ? onToggle : undefined}
      className={`flex items-center gap-x-1.5 pl-1.5 pr-2 min-h-[44px] text-xs ${ROW_BASE} ${
        accent ? ROW_ACCENT : ROW_IDLE
      } ${selectable ? "cursor-pointer" : ""}`}
    >
      {selectable ? (
        <SelectionCheckbox
          state={selected ? "all" : "none"}
          label={t("workspace-docs.select-item", { name: item.title })}
          onToggle={onToggle}
          onAccent={accent}
        />
      ) : (
        <span className="w-7 shrink-0" aria-hidden="true" />
      )}
      <File strokeWidth={1.5} aria-hidden="true" className="shrink-0 w-4 h-4" />
      <div className="flex-1 min-w-0 py-1">
        <p className="truncate" title={item.title}>
          {item.title}
        </p>
        <p
          className={`flex items-center gap-x-1.5 min-w-0 text-[11px] ${secondary}`}
        >
          <span className="truncate">{meta}</span>
          {!staged && pinned && (
            <span className="shrink-0 flex items-center gap-x-0.5">
              <Pin strokeWidth={1.5} size={11} aria-hidden="true" />
              {t("connectors.directory.pinned")}
            </span>
          )}
          {!staged && watched && (
            <span className="shrink-0 flex items-center gap-x-0.5">
              <Eye strokeWidth={1.5} size={11} aria-hidden="true" />
              {t("connectors.directory.watching")}
            </span>
          )}
        </p>
      </div>

      {staged ? (
        <span className={rowChip(accent)}>
          {t("connectors.directory.staged")}
        </span>
      ) : !selectable ? null : confirming ? (
        <div
          role="group"
          aria-labelledby={questionId}
          onClick={(e) => e.stopPropagation()}
          onKeyDown={(e) => {
            if (e.key !== "Escape") return;
            // Only this confirmation closes, not the selection or the dialog.
            e.preventDefault();
            cancelRemove();
          }}
          className="shrink-0 flex items-center gap-x-1"
        >
          <span id={questionId} className="font-medium">
            {t("workspace-docs.remove-confirm-inline")}
          </span>
          <button
            ref={cancelRef}
            type="button"
            onClick={cancelRemove}
            disabled={removing}
            className="border-none bg-transparent h-7 px-2 rounded-md text-xs text-inherit hover:bg-zinc-700 light:hover:bg-slate-200 transition-colors duration-quick ease-smooth"
          >
            {t("settings-pages.cancel")}
          </button>
          <button
            type="button"
            onClick={confirmRemove}
            aria-busy={removing || undefined}
            aria-disabled={removing || undefined}
            className="border-none h-7 px-2 rounded-md text-xs font-semibold bg-red-600 text-white hover:bg-red-500 light:bg-red-700 light:hover:bg-red-800 transition-colors duration-quick ease-smooth aria-disabled:opacity-60 aria-disabled:cursor-wait"
          >
            {t("workspace-docs.remove")}
          </button>
        </div>
      ) : (
        <div
          className="shrink-0 flex items-center gap-x-0.5"
          onClick={(e) => e.stopPropagation()}
        >
          {item?.canWatch && (
            <RowIconButton
              pressed={watched}
              busy={watchBusy}
              accent={accent}
              label={t("workspace-docs.watch-item", { name: item.title })}
              tooltip={
                watched
                  ? t("connectors.directory.unwatch")
                  : t("connectors.directory.watch")
              }
              onClick={toggleWatch}
            >
              {watched ? (
                <Eye strokeWidth={1.5} size={16} aria-hidden="true" />
              ) : (
                <EyeOff strokeWidth={1.5} size={16} aria-hidden="true" />
              )}
            </RowIconButton>
          )}
          <RowIconButton
            pressed={pinned}
            busy={pinBusy}
            accent={accent}
            label={t("workspace-docs.pin-item", { name: item.title })}
            tooltip={
              pinned
                ? t("connectors.directory.unpin")
                : t("connectors.directory.pin")
            }
            onClick={togglePin}
          >
            {pinned ? (
              <Pin strokeWidth={1.5} size={16} aria-hidden="true" />
            ) : (
              <PinOff strokeWidth={1.5} size={16} aria-hidden="true" />
            )}
          </RowIconButton>
          <RowIconButton
            ref={removeRef}
            accent={accent}
            label={t("workspace-docs.remove-item", { name: item.title })}
            tooltip={t("connectors.directory.remove-from-workspace")}
            onClick={() => setConfirming(true)}
          >
            <Undo2 strokeWidth={1.5} size={16} aria-hidden="true" />
          </RowIconButton>
        </div>
      )}
    </li>
  );
}

/**
 * Small icon button for a row action. With `pressed` it is a toggle button;
 * the pressed state also gets the accent color so it is visible at a glance.
 */
const RowIconButton = forwardRef(function RowIconButton(
  { pressed, busy = false, accent, label, tooltip, onClick, children },
  ref
) {
  const isToggle = typeof pressed === "boolean";
  const tone =
    isToggle && pressed
      ? accent
        ? "text-white bg-white/20"
        : "text-sky-400 bg-sky-500/15 light:text-sky-700 light:bg-sky-100"
      : accent
        ? "text-slate-200 light:text-sky-100 hover:bg-white/15"
        : "text-zinc-400 light:text-slate-600 hover:bg-zinc-700 hover:text-slate-50 light:hover:bg-slate-200 light:hover:text-slate-900";
  return (
    <button
      ref={ref}
      type="button"
      aria-label={label}
      aria-pressed={isToggle ? pressed : undefined}
      aria-busy={busy || undefined}
      data-tooltip-id={ROW_ACTION_TOOLTIP}
      data-tooltip-content={tooltip}
      onClick={onClick}
      className={`border-none w-7 h-7 rounded-md flex items-center justify-center transition-colors duration-quick ease-smooth aria-busy:opacity-60 aria-busy:cursor-wait ${tone}`}
    >
      {children}
    </button>
  );
});
