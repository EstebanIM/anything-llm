import React, { useId, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Plus, ChevronDown } from "lucide-react";
import useMenu from "@/hooks/useMenu";
import { FIELD_HELP } from "@/components/ProviderFields";
import { BLOCK_TYPES, BLOCK_INFO } from "../BlockList";

const ADDABLE_TYPES = Object.keys(BLOCK_INFO).filter(
  (type) =>
    type !== BLOCK_TYPES.START &&
    type !== BLOCK_TYPES.FINISH &&
    type !== BLOCK_TYPES.FLOW_INFO
);

/**
 * Check if the last configurable block has direct output disabled or undefined
 * If this property is true then you cannot add a new block after it.
 * @param {Array} blocks - The blocks array
 * @returns {Boolean} True if the last configurable block has direct output disabled, false otherwise
 */
function checkIfCanAddBlock(blocks) {
  const lastConfigurableBlock = blocks[blocks.length - 2];
  if (!lastConfigurableBlock) return true;
  return (
    lastConfigurableBlock?.config?.directOutput === false ||
    lastConfigurableBlock?.config?.directOutput === undefined
  );
}

/**
 * "Add block" menu button. When direct output is on in the last block nothing
 * can run after it, so the button stays (focusable) with the reason below.
 */
export default function AddBlockMenu({ blocks, onAddBlock }) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const triggerRef = useRef(null);
  const menuRef = useRef(null);
  const menuId = useId();
  const reasonId = useId();
  const canAdd = checkIfCanAddBlock(blocks);

  useMenu({ open, onClose: () => setOpen(false), menuRef, triggerRef });

  return (
    <div className="mt-4 w-full sm:max-w-[320px] mx-auto pb-4">
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={open ? menuId : undefined}
        aria-disabled={!canAdd || undefined}
        aria-describedby={canAdd ? undefined : reasonId}
        onClick={() => canAdd && setOpen((value) => !value)}
        className="w-full min-h-[44px] md:min-h-[40px] px-3 bg-theme-action-menu-bg hover:bg-theme-action-menu-item-hover border border-zinc-600 light:border-slate-400 rounded-lg text-white flex items-center justify-center gap-2 text-sm font-medium transition-colors duration-quick ease-smooth aria-disabled:opacity-60 aria-disabled:cursor-not-allowed aria-disabled:hover:bg-theme-action-menu-bg"
      >
        <Plus strokeWidth={1.5} aria-hidden="true" className="w-4 h-4" />
        {t("agent-builder.add-block.button")}
        <ChevronDown
          strokeWidth={1.5}
          aria-hidden="true"
          className={`w-4 h-4 transition-transform duration-base ease-smooth ${open ? "rotate-180" : ""}`}
        />
      </button>
      {!canAdd && (
        <p id={reasonId} className={`${FIELD_HELP} text-center`}>
          {t("agent-builder.add-block.disabled")}
        </p>
      )}
      {open && (
        <div
          ref={menuRef}
          id={menuId}
          role="menu"
          aria-label={t("agent-builder.add-block.menu")}
          className="mt-2 p-1 rounded-lg bg-zinc-900 light:bg-white border border-zinc-700 light:border-slate-300 shadow-lg animate-in fade-in-0 slide-in-from-top-2"
        >
          {ADDABLE_TYPES.map((type) => {
            const info = BLOCK_INFO[type];
            return (
              <button
                key={type}
                type="button"
                role="menuitem"
                onClick={() => {
                  setOpen(false);
                  onAddBlock(type);
                }}
                className="w-full min-h-[44px] p-2 flex items-center gap-3 rounded-md text-left text-zinc-100 light:text-slate-900 hover:bg-zinc-800 light:hover:bg-slate-100 transition-colors duration-quick ease-smooth"
              >
                <span
                  aria-hidden="true"
                  className="w-7 h-7 shrink-0 rounded-lg bg-zinc-700 light:bg-slate-200 flex items-center justify-center"
                >
                  {React.cloneElement(info.icon, {
                    className: "w-4 h-4 text-zinc-100 light:text-slate-900",
                  })}
                </span>
                <span className="flex-1 min-w-0">
                  <span className="block text-sm font-medium">
                    {t(info.labelKey)}
                  </span>
                  <span className="block text-xs text-zinc-400 light:text-slate-600">
                    {t(info.descriptionKey)}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
