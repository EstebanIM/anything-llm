import { useId, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Braces } from "lucide-react";
import useMenu from "@/hooks/useMenu";

/**
 * "Insert variable" menu button that sits next to a VariableInput. Lists the
 * flow variables as menu items; with none defined it explains where to add
 * them instead of opening an empty menu.
 *
 * @param {object} props
 * @param {{name: string}[]} props.variables
 * @param {(name: string) => void} props.onInsert
 * @param {string} [props.fieldLabel] - Name of the field, for the button name
 */
export default function InsertVariableMenu({
  variables,
  onInsert,
  fieldLabel,
}) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const triggerRef = useRef(null);
  const menuRef = useRef(null);
  const menuId = useId();
  const isEmpty = variables.length === 0;

  useMenu({
    open,
    onClose: () => setOpen(false),
    menuRef,
    triggerRef,
    autoFocus: !isEmpty,
  });

  return (
    <div className="relative shrink-0">
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup={isEmpty ? undefined : "menu"}
        aria-expanded={open}
        aria-controls={open ? menuId : undefined}
        aria-label={
          fieldLabel
            ? t("agent-builder.variables.insert-in", { field: fieldLabel })
            : t("agent-builder.variables.insert")
        }
        title={t("agent-builder.variables.insert")}
        onClick={() => setOpen((value) => !value)}
        onBlur={() => isEmpty && setOpen(false)}
        className="w-11 h-11 md:w-10 md:h-10 flex items-center justify-center rounded-lg border border-zinc-500 light:border-slate-500 bg-theme-settings-input-bg text-white hover:bg-theme-action-menu-item-hover transition-colors duration-quick ease-smooth"
      >
        <Braces strokeWidth={1.5} aria-hidden="true" className="w-4 h-4" />
      </button>
      {isEmpty ? (
        // Kept mounted so the message is announced when it appears.
        <div
          ref={menuRef}
          id={menuId}
          role="status"
          className={
            open
              ? "absolute right-0 top-full mt-2 z-20 w-64 p-3 rounded-lg bg-zinc-900 light:bg-white border border-zinc-700 light:border-slate-300 shadow-lg text-sm text-zinc-100 light:text-slate-900 animate-in fade-in-0 slide-in-from-top-2"
              : "sr-only"
          }
        >
          {open ? t("agent-builder.variables.none-defined") : ""}
        </div>
      ) : (
        open && (
          <div
            ref={menuRef}
            id={menuId}
            role="menu"
            aria-label={t("agent-builder.blocks.start.label")}
            className="absolute right-0 top-full mt-2 z-20 w-64 max-h-64 overflow-y-auto p-1 rounded-lg bg-zinc-900 light:bg-white border border-zinc-700 light:border-slate-300 shadow-lg animate-in fade-in-0 slide-in-from-top-2"
          >
            {variables.map((variable) => (
              <button
                key={variable.name}
                type="button"
                role="menuitem"
                onClick={() => {
                  setOpen(false);
                  onInsert(variable.name);
                }}
                className="w-full text-left px-3 min-h-[44px] md:min-h-[36px] rounded-md text-sm font-mono text-zinc-100 light:text-slate-900 hover:bg-zinc-800 light:hover:bg-slate-100 transition-colors duration-quick ease-smooth break-all"
              >
                {"${" + variable.name + "}"}
              </button>
            ))}
          </div>
        )
      )}
    </div>
  );
}
