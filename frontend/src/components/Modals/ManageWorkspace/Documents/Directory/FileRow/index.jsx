import { memo } from "react";
import { useTranslation } from "react-i18next";
import { File } from "lucide-react";
import { getFileExtension } from "@/utils/directories";
import SelectionCheckbox from "../../SelectionCheckbox";
import {
  ROW_ACCENT,
  ROW_BASE,
  ROW_IDLE,
  displayDate,
  rowChip,
  rowSecondaryText,
} from "../../listStyles";

/**
 * A file in the document picker. The checkbox is the keyboard path; a click
 * anywhere else on the row toggles it too (and shift-click selects a range).
 */
function FileRow({ item, selected, folderName, toggleSelection }) {
  const { t } = useTranslation();
  const secondary = rowSecondaryText(selected);
  const toggle = (event) => toggleSelection(item, folderName, event);

  return (
    <li
      onClick={toggle}
      className={`flex items-center gap-x-2 pl-7 pr-3 min-h-[36px] text-xs cursor-pointer ${ROW_BASE} ${
        selected ? ROW_ACCENT : ROW_IDLE
      }`}
    >
      <SelectionCheckbox
        state={selected ? "all" : "none"}
        label={t("workspace-docs.select-item", { name: item.title })}
        onToggle={toggle}
        onAccent={selected}
      />
      <File strokeWidth={1.5} aria-hidden="true" className="shrink-0 w-4 h-4" />
      <span className="flex-1 min-w-0 truncate" title={item.title}>
        {item.title}
      </span>
      {item?.cached && (
        <span className={rowChip(selected)}>{t("workspace-docs.cached")}</span>
      )}
      <span className={`shrink-0 w-12 text-right ${secondary}`}>
        {getFileExtension(item.url)}
      </span>
      <span className={`shrink-0 w-24 text-right tabular-nums ${secondary}`}>
        {displayDate(item.published)}
      </span>
    </li>
  );
}

export default memo(FileRow, (prev, next) => {
  return (
    prev.item.id === next.item.id &&
    prev.selected === next.selected &&
    prev.toggleSelection === next.toggleSelection
  );
});
