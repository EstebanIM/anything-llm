import { useEffect, useId, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Search, TriangleAlert, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import paths from "@/utils/paths";
import { ModalLabel } from "@/components/lib/Modal";

const CHECKBOX =
  "size-4 shrink-0 cursor-pointer accent-sky-600 [color-scheme:dark] light:[color-scheme:light] disabled:cursor-not-allowed";

/**
 * Build a flat lookup map from categorized tools for quick label resolution.
 * @param {Array} categories - Categorized tools from backend
 * @returns {Map<string, { name: string, active: boolean, description?: string }>}
 */
function buildToolLookup(categories) {
  const lookup = new Map();
  for (const cat of categories) {
    for (const item of cat.items || []) {
      lookup.set(item.id, item);
    }
  }
  return lookup;
}

/** Link to the agent skills page for a tool that needs configuration first. */
function SetupLink({ name }) {
  const { t } = useTranslation();
  return (
    <Link
      to={paths.settings.agentSkills()}
      title={t("scheduledJobs.modal.needsSetup")}
      className="shrink-0 inline-flex items-center gap-1 px-1.5 min-h-[32px] md:min-h-[24px] rounded text-xs font-medium bg-amber-500/20 text-amber-300 light:bg-amber-100 light:text-amber-800 hover:underline underline-offset-2"
    >
      <TriangleAlert strokeWidth={1.5} size={12} aria-hidden="true" />
      {t("scheduledJobs.modal.needsSetupLabel")}
      <span className="sr-only">: {name}</span>
    </Link>
  );
}

function ToolItem({ item, categoryNeedsSetup, selected, onToggle }) {
  const { t } = useTranslation();
  const inputId = useId();
  const descriptionId = useId();
  const setupId = useId();
  const needsSetup = item.requiresSetup || categoryNeedsSetup;
  const describedBy =
    [item.description && descriptionId, needsSetup && setupId]
      .filter(Boolean)
      .join(" ") || undefined;

  return (
    <li
      className={`flex items-start gap-2 px-2 py-2 md:py-1.5 rounded-md ${
        needsSetup ? "" : "hover:bg-zinc-700/60 light:hover:bg-slate-100"
      }`}
    >
      <input
        id={inputId}
        type="checkbox"
        checked={selected}
        disabled={needsSetup}
        onChange={() => onToggle(item.id)}
        aria-describedby={describedBy}
        className={`${CHECKBOX} mt-0.5`}
      />
      <div className="flex-1 min-w-0">
        <label
          htmlFor={inputId}
          className={`block text-sm break-words ${
            needsSetup
              ? "text-zinc-400 light:text-slate-600 cursor-not-allowed"
              : "text-zinc-200 light:text-slate-800 cursor-pointer"
          }`}
        >
          {item.name}
        </label>
        {item.description && (
          <p
            id={descriptionId}
            title={item.description}
            className="text-xs text-zinc-400 light:text-slate-600 line-clamp-2"
          >
            {item.description}
          </p>
        )}
        {needsSetup && (
          <span id={setupId} className="sr-only">
            {t("scheduledJobs.modal.needsSetup")}
          </span>
        )}
      </div>
      {item.requiresSetup && !categoryNeedsSetup && (
        <SetupLink name={item.name} />
      )}
    </li>
  );
}

function ToolCategory({
  cat,
  expanded,
  selectedTools,
  onToggleExpanded,
  onToggleCategory,
  onToggleTool,
}) {
  const { t } = useTranslation();
  const listId = useId();
  const setupId = useId();
  const checkboxRef = useRef(null);
  const items = cat.items || [];
  const selectedCount = items.filter((i) =>
    selectedTools.includes(i.id)
  ).length;
  const state =
    selectedCount === 0
      ? "unchecked"
      : selectedCount === items.length
        ? "checked"
        : "indeterminate";

  useEffect(() => {
    if (checkboxRef.current)
      checkboxRef.current.indeterminate = state === "indeterminate";
  }, [state]);

  return (
    <div className="mb-0.5">
      <div className="flex items-center gap-1 rounded-md bg-zinc-700/50 light:bg-slate-100">
        <button
          type="button"
          onClick={onToggleExpanded}
          aria-expanded={expanded}
          aria-controls={listId}
          className="border-none flex-1 min-w-0 flex items-center gap-2 px-2 min-h-[44px] md:min-h-[32px] rounded-md text-left text-sm font-medium text-zinc-50 light:text-slate-800 hover:bg-zinc-700 light:hover:bg-slate-200 transition-colors duration-quick ease-smooth"
        >
          <ChevronRight
            strokeWidth={1.5}
            size={14}
            aria-hidden="true"
            className={`shrink-0 transition-transform duration-quick ease-smooth ${
              expanded ? "rotate-90" : ""
            }`}
          />
          <span className="truncate">{cat.name}</span>
          <span
            aria-hidden="true"
            className="ml-auto shrink-0 text-xs font-normal text-zinc-400 light:text-slate-600 tabular-nums"
          >
            {selectedCount}/{items.length}
          </span>
          <span className="sr-only">
            ,{" "}
            {t("scheduledJobs.modal.selectedCount", {
              count: selectedCount,
              total: items.length,
            })}
          </span>
        </button>
        {cat.requiresSetup && <SetupLink name={cat.name} />}
        <label className="flex items-center justify-center w-11 h-11 md:w-8 md:h-8 shrink-0 cursor-pointer">
          <input
            ref={checkboxRef}
            type="checkbox"
            checked={state === "checked"}
            disabled={cat.requiresSetup}
            onChange={() => onToggleCategory(cat, state)}
            aria-label={t("scheduledJobs.modal.selectCategory", {
              name: cat.name,
            })}
            aria-describedby={cat.requiresSetup ? setupId : undefined}
            className={CHECKBOX}
          />
        </label>
        {cat.requiresSetup && (
          <span id={setupId} className="sr-only">
            {t("scheduledJobs.modal.needsSetup")}
          </span>
        )}
      </div>

      <ul
        id={listId}
        hidden={!expanded}
        className="ml-2 border-l border-zinc-700 light:border-slate-300 pl-2 mt-0.5"
      >
        {items.map((item) => (
          <ToolItem
            key={item.id}
            item={item}
            categoryNeedsSetup={cat.requiresSetup}
            selected={selectedTools.includes(item.id)}
            onToggle={onToggleTool}
          />
        ))}
      </ul>
    </div>
  );
}

/**
 * Tool picker: a search field that opens a non-modal popup of categories with
 * real checkboxes. Escape closes only the popup (and returns to the search),
 * Tab out of it or a click outside closes it too.
 * @param {Object} props
 * @param {Array|null} props.availableTools - null while loading, [] when loading failed
 * @param {string[]} props.selectedTools
 * @param {(ids: string[]) => void} props.onChange
 * @param {() => void} props.onRetry
 */
export default function ToolsSelector({
  availableTools,
  selectedTools,
  onChange,
  onRetry,
}) {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("bottom");
  const [expandedCategories, setExpandedCategories] = useState({});
  const containerRef = useRef(null);
  const searchRef = useRef(null);
  const popupRef = useRef(null);
  const chipsRef = useRef(null);
  const pointerInside = useRef(false);
  const searchId = useId();
  const descriptionId = useId();
  const popupId = useId();
  const tools = availableTools || [];
  const ready = tools.length > 0;

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e) => {
      if (!containerRef.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const POPOVER_MAX_HEIGHT = 320;
    const updatePlacement = () => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const spaceBelow = window.innerHeight - rect.bottom;
      const spaceAbove = rect.top;
      setPlacement(
        spaceBelow < POPOVER_MAX_HEIGHT && spaceAbove > spaceBelow
          ? "top"
          : "bottom"
      );
    };
    updatePlacement();
    window.addEventListener("resize", updatePlacement);
    window.addEventListener("scroll", updatePlacement, true);
    return () => {
      window.removeEventListener("resize", updatePlacement);
      window.removeEventListener("scroll", updatePlacement, true);
    };
  }, [open]);

  const toolLookup = useMemo(() => buildToolLookup(tools), [tools]);

  const filteredCategories = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return tools;
    return tools
      .map((cat) => {
        if (cat.name.toLowerCase().includes(q)) return cat;
        const items = (cat.items || []).filter(
          (item) =>
            item.name.toLowerCase().includes(q) ||
            item.description?.toLowerCase().includes(q)
        );
        return items.length ? { ...cat, items } : null;
      })
      .filter(Boolean);
  }, [tools, search]);

  const isCategoryExpanded = (catId) =>
    !!(search.trim() || expandedCategories[catId]);

  const toggleCategory = (catId) => {
    setExpandedCategories((prev) => ({ ...prev, [catId]: !prev[catId] }));
  };

  const toggleCategorySelection = (cat, state) => {
    const ids = (cat.items || []).map((i) => i.id);
    if (state === "checked") {
      onChange(selectedTools.filter((id) => !ids.includes(id)));
    } else {
      onChange([...new Set([...selectedTools, ...ids])]);
    }
  };

  const toggleTool = (id) => {
    onChange(
      selectedTools.includes(id)
        ? selectedTools.filter((x) => x !== id)
        : [...selectedTools, id]
    );
  };

  const removeTool = (id, index) => {
    onChange(selectedTools.filter((x) => x !== id));
    // The pressed button is gone: move to the next chip, the previous one or the search.
    setTimeout(() => {
      const buttons = chipsRef.current?.querySelectorAll("[data-remove-tool]");
      const target =
        buttons?.[index] ?? buttons?.[index - 1] ?? searchRef.current;
      target?.focus();
    }, 0);
  };

  const labelFor = (id) => toolLookup.get(id)?.name || id;

  const handleKeyDown = (e) => {
    if (e.key !== "Escape" || !open) return;
    // Close only the popup: the dialog around it ignores a handled Escape.
    e.preventDefault();
    setOpen(false);
    searchRef.current?.focus();
  };

  const handleBlur = (e) => {
    // A press inside (Safari does not focus clicked checkboxes) keeps it open.
    if (pointerInside.current) return;
    if (containerRef.current?.contains(e.relatedTarget)) return;
    setOpen(false);
  };

  const handleSearchKeyDown = (e) => {
    if (e.key === "Enter") {
      // Enter in the search must not submit the job form.
      e.preventDefault();
      setOpen(true);
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setOpen(true);
      setTimeout(
        () =>
          popupRef.current
            ?.querySelector("button, input:not([disabled]), a[href]")
            ?.focus(),
        0
      );
    }
  };

  return (
    <div>
      <ModalLabel htmlFor={ready ? searchId : undefined}>
        {t("scheduledJobs.modal.toolsLabel")}
      </ModalLabel>
      <p
        id={descriptionId}
        className="text-xs text-zinc-400 light:text-slate-600 mt-1 mb-3"
      >
        {t("scheduledJobs.modal.toolsDescription")}
      </p>

      {availableTools === null ? (
        <p role="status" className="text-sm text-zinc-400 light:text-slate-600">
          {t("scheduledJobs.modal.toolsLoading")}
        </p>
      ) : !ready ? (
        <div className="flex flex-wrap items-center gap-3">
          <p role="alert" className="text-sm text-red-400 light:text-red-700">
            {t("scheduledJobs.modal.toolsLoadFailed")}
          </p>
          <button
            type="button"
            onClick={onRetry}
            className="min-h-[44px] md:min-h-[32px] px-3 rounded-lg border border-zinc-500 light:border-slate-500 text-sm text-zinc-50 light:text-slate-900 hover:bg-zinc-800 light:hover:bg-slate-100 transition-colors duration-quick ease-smooth"
          >
            {t("provider-fields.retry")}
          </button>
        </div>
      ) : (
        <div
          ref={containerRef}
          className="relative"
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          onPointerDown={() => {
            pointerInside.current = true;
            setTimeout(() => (pointerInside.current = false), 0);
          }}
        >
          <div className="relative">
            <input
              ref={searchRef}
              id={searchId}
              type="text"
              role="combobox"
              aria-haspopup="dialog"
              aria-expanded={open}
              aria-controls={open ? popupId : undefined}
              aria-describedby={descriptionId}
              autoComplete="off"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setOpen(true);
              }}
              onClick={() => setOpen(true)}
              onKeyDown={handleSearchKeyDown}
              placeholder={t("scheduledJobs.modal.toolsSearch")}
              className="w-full h-11 md:h-[34px] pl-3.5 pr-9 rounded-lg text-base md:text-sm bg-zinc-800 border border-zinc-500 text-zinc-100 placeholder:text-zinc-400 light:bg-white light:border-slate-500 light:text-slate-900 light:placeholder:text-slate-500 focus:border-sky-500"
            />
            <Search
              strokeWidth={1.5}
              size={16}
              aria-hidden="true"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 light:text-slate-500 pointer-events-none"
            />
          </div>

          {open && (
            <div
              ref={popupRef}
              id={popupId}
              role="dialog"
              aria-label={t("scheduledJobs.modal.toolsAvailable")}
              tabIndex={-1}
              className={`absolute left-0 right-0 z-20 max-h-80 overflow-y-auto p-1.5 bg-zinc-800 light:bg-white rounded-lg flex flex-col shadow-[0px_4px_12px_0px_rgba(0,0,0,0.35)] border border-zinc-600 light:border-slate-400 focus:outline-none ${
                placement === "top" ? "bottom-full mb-1" : "top-full mt-1"
              }`}
            >
              {filteredCategories.length === 0 ? (
                <p
                  role="status"
                  className="text-sm text-zinc-400 light:text-slate-600 px-2 py-3 text-center"
                >
                  {t("scheduledJobs.modal.toolsNoResults")}
                </p>
              ) : (
                filteredCategories.map((cat) => (
                  <ToolCategory
                    key={cat.category}
                    cat={cat}
                    expanded={isCategoryExpanded(cat.category)}
                    selectedTools={selectedTools}
                    onToggleExpanded={() => toggleCategory(cat.category)}
                    onToggleCategory={toggleCategorySelection}
                    onToggleTool={toggleTool}
                  />
                ))
              )}
            </div>
          )}
        </div>
      )}

      {selectedTools.length > 0 && (
        <ul
          ref={chipsRef}
          aria-label={t("scheduledJobs.modal.selectedTools")}
          className="flex flex-wrap gap-1 mt-2"
        >
          {selectedTools.map((id, index) => (
            <li
              key={id}
              className="bg-zinc-800 light:bg-slate-200 flex gap-1 h-[26px] items-center pl-3 pr-1 rounded-full text-sm text-zinc-200 light:text-slate-800"
            >
              <span className="whitespace-nowrap">{labelFor(id)}</span>
              <button
                type="button"
                data-remove-tool=""
                onClick={() => removeTool(id, index)}
                aria-label={t("scheduledJobs.modal.removeTool", {
                  name: labelFor(id),
                })}
                className="border-none relative inline-flex items-center justify-center w-5 h-5 rounded-full text-zinc-400 light:text-slate-600 hover:text-zinc-50 light:hover:text-slate-900 hover:bg-white/10 light:hover:bg-slate-300 transition-colors duration-quick ease-smooth before:absolute before:content-[''] before:-inset-3 md:before:hidden"
              >
                <X strokeWidth={1.5} size={12} aria-hidden="true" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
