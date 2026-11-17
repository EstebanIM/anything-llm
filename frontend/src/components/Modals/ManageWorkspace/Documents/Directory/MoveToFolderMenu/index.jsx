import { useId, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown, Folder, FolderInput } from "lucide-react";
import useMenu from "@/hooks/useMenu";

/**
 * "Move to folder" menu button for the picker's action bar: arrow keys move
 * between folders, Escape closes and returns focus to the button.
 *
 * @param {Object} props
 * @param {Array<{name: string}>} props.folders
 * @param {(folder: {name: string}) => void} props.onSelect
 * @param {boolean} [props.disabled]
 * @param {string} props.className - trigger button classes
 */
export default function MoveToFolderMenu({
  folders,
  onSelect,
  disabled = false,
  className = "",
}) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const triggerRef = useRef(null);
  const menuRef = useRef(null);
  const menuId = useId();
  useMenu({ open, onClose: () => setOpen(false), menuRef, triggerRef });

  return (
    <div className="relative">
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={open ? menuId : undefined}
        disabled={disabled}
        onClick={() => setOpen((value) => !value)}
        className={className}
      >
        <FolderInput strokeWidth={1.5} size={16} aria-hidden="true" />
        {t("connectors.directory.move-to-folder")}
        <ChevronDown
          strokeWidth={1.5}
          size={14}
          aria-hidden="true"
          className={`transition-transform duration-quick ease-smooth ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div
          ref={menuRef}
          id={menuId}
          role="menu"
          aria-label={t("connectors.directory.move-to-folder")}
          className="absolute bottom-full left-0 mb-2 z-30 min-w-[200px] max-w-[280px] max-h-48 overflow-y-auto p-1 rounded-lg border border-zinc-700 light:border-slate-300 bg-zinc-900 light:bg-white shadow-lg animate-in fade-in-0"
        >
          {folders.map((folder) => (
            <button
              key={folder.name}
              type="button"
              role="menuitem"
              title={folder.name}
              onClick={() => {
                setOpen(false);
                onSelect(folder);
              }}
              className="border-none bg-transparent w-full flex items-center gap-x-2 px-3 py-2 rounded-md text-left text-sm text-slate-50 light:text-slate-900 hover:bg-zinc-800 light:hover:bg-slate-100 focus-visible:bg-zinc-800 light:focus-visible:bg-slate-100 transition-colors duration-quick ease-smooth"
            >
              <Folder
                strokeWidth={1.5}
                size={16}
                aria-hidden="true"
                className="shrink-0"
              />
              <span className="truncate">{folder.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
