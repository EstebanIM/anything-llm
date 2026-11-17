import { useTranslation } from "react-i18next";
import { EllipsisVertical, Eye, File, Pin } from "lucide-react";
import { getFileExtension } from "@/utils/directories";
import SelectionCheckbox from "../../../SelectionCheckbox";
import usePinDocument from "../../../hooks/usePinDocument";
import useWatchDocument from "../../../hooks/useWatchDocument";
import { displayDate } from "../../../listStyles";

/**
 * @param {Object} props
 * @param {boolean} props.staged - Moved in but not embedded yet
 * @param {boolean} props.selectable - False while staged changes are unsaved
 */
export default function MobileWorkspaceFileRow({
  item,
  folderName,
  workspace,
  staged,
  selected,
  selectable,
  onToggle,
  onOpenActions,
}) {
  const { t } = useTranslation();
  const docPath = `${folderName}/${item.name}`;
  const { pinned, togglePin } = usePinDocument({ workspace, docPath, item });
  const { watched, toggleWatch } = useWatchDocument({
    workspace,
    docPath,
    item,
  });

  const details = (
    <>
      <File
        strokeWidth={1.5}
        aria-hidden="true"
        className="w-5 h-5 shrink-0 text-zinc-400 light:text-slate-600"
      />
      <span className="flex-1 min-w-0 ml-3 py-1.5">
        <span className="block text-sm truncate text-slate-50 light:text-slate-900">
          {item.title}
        </span>
        <RowStatus
          item={item}
          staged={staged}
          folderName={folderName}
          pinned={pinned}
          watched={watched}
        />
      </span>
    </>
  );

  return (
    <li className="flex items-center">
      {selectable ? (
        <button
          type="button"
          role="checkbox"
          aria-checked={selected}
          onClick={() => onToggle(item)}
          className={`border-none flex-1 min-w-0 flex items-center min-h-14 rounded-xl text-left transition-colors duration-quick ease-smooth ${
            selected
              ? "bg-sky-500/15 light:bg-sky-50"
              : "bg-transparent active:bg-zinc-800 light:active:bg-slate-100"
          }`}
        >
          <SelectionCheckbox size="md" state={selected ? "all" : "none"} />
          {details}
        </button>
      ) : (
        <div className="flex-1 min-w-0 flex items-center min-h-14 pl-3">
          {details}
        </div>
      )}
      {selectable ? (
        <button
          type="button"
          aria-haspopup="dialog"
          aria-label={t("workspace-docs.more-actions", { name: item.title })}
          onClick={() =>
            onOpenActions({
              item,
              pinned,
              togglePin,
              watched,
              toggleWatch,
            })
          }
          className="border-none bg-transparent w-11 h-11 shrink-0 flex items-center justify-center rounded-xl text-zinc-400 light:text-slate-600 active:bg-zinc-700 light:active:bg-slate-200"
        >
          <EllipsisVertical strokeWidth={1.5} size={20} aria-hidden="true" />
        </button>
      ) : (
        <span className="w-3 shrink-0" aria-hidden="true" />
      )}
    </li>
  );
}

function RowStatus({ item, staged, folderName, pinned, watched }) {
  const { t } = useTranslation();

  if (staged)
    return (
      <span className="block text-xs font-medium text-sky-400 light:text-sky-700">
        {t("connectors.directory.staged")}
      </span>
    );

  return (
    <span className="flex items-center gap-x-1.5 text-xs text-zinc-400 light:text-slate-600 min-w-0">
      <span className="truncate">
        {[folderName, getFileExtension(item.url), displayDate(item.published)]
          .filter(Boolean)
          .join(" · ")}
      </span>
      {pinned && (
        <span className="flex items-center gap-x-0.5 shrink-0 text-sky-400 light:text-sky-700">
          <Pin strokeWidth={1.5} size={12} aria-hidden="true" />
          {t("connectors.directory.pinned")}
        </span>
      )}
      {watched && (
        <span className="flex items-center gap-x-0.5 shrink-0 text-sky-400 light:text-sky-700">
          <Eye strokeWidth={1.5} size={12} aria-hidden="true" />
          {t("connectors.directory.watching")}
        </span>
      )}
    </span>
  );
}
