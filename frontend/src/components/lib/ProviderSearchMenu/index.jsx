import { useEffect, useId, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Check, ChevronsUpDown, CircleDashed, Search, X } from "lucide-react";
import { ProviderMenuContext, providerDescription } from "./ProviderOption";

const TABBABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

/** Focuses the tabbable element right before (-1) or after (1) `from` in document order. */
function focusNeighbour(from, direction) {
  const tabbables = [...document.querySelectorAll(TABBABLE)].filter(
    (el) => el.tabIndex >= 0 && el.getClientRects().length > 0
  );
  const index = tabbables.indexOf(from);
  const target = index === -1 ? null : tabbables[index + direction];
  (target || from)?.focus();
}

/** Lowercase and accent-free, so "busqueda" finds "búsqueda". */
export function normalize(text) {
  return String(text ?? "")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();
}

/**
 * Provider selection combobox shared by every provider settings page.
 * Renders the trigger button for the selected provider and, once opened,
 * a searchable listbox of providers - the caller renders each row.
 * @param {object} props
 * @param {Array<{name: string, value: string, description?: string, descriptionKey?: string}>} props.items - options to list, filtered by name and description
 * @param {{name: string, logo?: string, description?: string, descriptionKey?: string, value?: string}} [props.selected] - provider shown on the trigger button; a neutral placeholder is shown when missing
 * @param {string} props.placeholder - search field placeholder
 * @param {(item: object, close: () => void) => React.ReactNode} props.renderItem - row renderer for a single item
 * @param {string} [props.labelledBy] - id of the visible heading that names this picker
 * @param {string} [props.describedBy] - id of help text for the picker
 */
export default function ProviderSearchMenu({
  items,
  selected,
  placeholder,
  renderItem,
  labelledBy,
  describedBy,
}) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const triggerRef = useRef(null);
  const wasOpen = useRef(false);
  // 0 returns focus to the trigger; -1 / 1 moves it past the picker (Tab).
  const focusAfterClose = useRef(0);
  const contentId = useId();

  // Keep the keyboard on the page instead of stranding it on document.body.
  useEffect(() => {
    if (wasOpen.current && !open) {
      if (focusAfterClose.current === 0) triggerRef.current?.focus();
      else focusNeighbour(triggerRef.current, focusAfterClose.current);
    }
    wasOpen.current = open;
  }, [open]);

  function close(direction = 0) {
    focusAfterClose.current = direction;
    setOpen(false);
  }

  if (open) {
    return (
      <SearchPanel
        items={items}
        selectedValue={selected?.value}
        placeholder={placeholder}
        labelledBy={labelledBy}
        describedBy={describedBy}
        renderItem={renderItem}
        onClose={() => close(0)}
        onLeave={(direction) => close(direction)}
      />
    );
  }

  const shown = selected ?? {
    name: t("provider-pages.menu.none-selected"),
    description: t("provider-pages.menu.none-description"),
  };

  return (
    <button
      ref={triggerRef}
      type="button"
      aria-haspopup="listbox"
      aria-expanded={false}
      aria-labelledby={labelledBy ? `${labelledBy} ${contentId}` : undefined}
      aria-describedby={describedBy}
      onClick={() => setOpen(true)}
      className="w-full max-w-[640px] min-h-[64px] h-auto min-w-0 bg-theme-settings-input-bg rounded-lg flex items-center p-[14px] justify-between cursor-pointer border border-zinc-500 light:border-slate-500 hover:border-primary-button transition-colors duration-quick ease-smooth"
    >
      <span id={contentId} className="flex min-w-0 flex-1 gap-x-4 items-center">
        <ProviderLogo src={shown.logo} />
        <span className="min-w-0 flex-1 flex flex-col text-left">
          <span className="text-sm font-semibold text-white break-words">
            {shown.name}
          </span>
          <span className="mt-1 text-xs text-description break-words">
            {providerDescription(t, shown)}
          </span>
        </span>
      </span>
      <ChevronsUpDown
        strokeWidth={1.5}
        size={24}
        aria-hidden="true"
        className="text-white shrink-0 ml-3"
      />
    </button>
  );
}

function ProviderLogo({ src }) {
  if (src)
    return <img src={src} alt="" className="w-10 h-10 rounded-md shrink-0" />;
  return (
    <span
      aria-hidden="true"
      className="w-10 h-10 rounded-md shrink-0 flex items-center justify-center bg-theme-bg-secondary"
    >
      <CircleDashed
        strokeWidth={1.5}
        size={20}
        className="text-theme-text-secondary"
      />
    </span>
  );
}

function SearchPanel({
  items,
  selectedValue,
  placeholder,
  labelledBy,
  describedBy,
  renderItem,
  onClose,
  onLeave,
}) {
  const { t } = useTranslation();
  const baseId = useId();
  const listboxId = `${baseId}-listbox`;
  const optionId = (index) => `${baseId}-option-${index}`;
  const inputRef = useRef(null);
  const [query, setQuery] = useState("");
  const [highlightedIndex, setHighlightedIndex] = useState(() =>
    Math.max(
      items.findIndex((item) => item.value === selectedValue),
      0
    )
  );
  // Only keyboard moves scroll the list; scrolling under a resting pointer would fight it.
  const scrollToHighlight = useRef(true);

  const needle = normalize(query.trim());
  const results = needle
    ? items.filter((item) =>
        [item.name, item.description, providerDescription(t, item)].some(
          (text) => normalize(text).includes(needle)
        )
      )
    : items;
  const activeIndex =
    results.length > 0 ? Math.min(highlightedIndex, results.length - 1) : -1;

  useEffect(() => {
    if (!scrollToHighlight.current || activeIndex < 0) return;
    document
      .getElementById(optionId(activeIndex))
      ?.scrollIntoView({ block: "nearest" });
  }, [activeIndex, query]);

  function search(value) {
    scrollToHighlight.current = true;
    setQuery(value);
    setHighlightedIndex(0);
  }

  function handleClearButton() {
    if (query.length === 0) return onClose();
    search("");
    inputRef.current?.focus();
  }

  function selectHighlighted() {
    // Rows own what selecting them does (some open a setup modal first),
    // so the highlighted row is clicked rather than selected from here.
    document
      .getElementById(optionId(activeIndex))
      ?.querySelector("[data-option-content]")
      ?.firstElementChild?.click();
  }

  function handleKeyDown(e) {
    switch (e.key) {
      case "Escape":
        e.preventDefault();
        return onClose();
      case "Tab":
        e.preventDefault();
        return onLeave(e.shiftKey ? -1 : 1);
      case "Enter":
        e.preventDefault();
        return selectHighlighted();
      case "ArrowDown":
      case "ArrowUp": {
        e.preventDefault();
        if (results.length === 0) return;
        const step = e.key === "ArrowDown" ? 1 : -1;
        scrollToHighlight.current = true;
        setHighlightedIndex(
          (activeIndex + step + results.length) % results.length
        );
        return;
      }
      default:
        return;
    }
  }

  return (
    <>
      <div
        aria-hidden="true"
        className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 backdrop-blur-sm z-10"
        onClick={onClose}
      />
      {/* The panel border is the focus indicator: the search input keeps focus while it is open. */}
      <div className="absolute top-0 left-0 w-full max-w-[640px] max-h-[310px] min-h-[64px] bg-theme-settings-input-bg rounded-lg flex flex-col border-2 border-primary-button focus-within:border-[color:var(--theme-focus-ring)] z-20">
        <div className="flex items-center gap-x-2 mx-4 border-b border-[#9CA3AF]">
          <Search
            strokeWidth={1.5}
            size={20}
            aria-hidden="true"
            className="shrink-0 text-theme-text-primary"
          />
          <input
            ref={inputRef}
            type="search"
            role="combobox"
            aria-expanded={true}
            aria-controls={listboxId}
            aria-activedescendant={
              activeIndex >= 0 ? optionId(activeIndex) : undefined
            }
            aria-autocomplete="list"
            aria-labelledby={labelledBy}
            aria-describedby={describedBy}
            aria-label={
              labelledBy
                ? undefined
                : placeholder || t("provider-pages.menu.search")
            }
            autoFocus
            autoComplete="off"
            data-1p-ignore
            data-lpignore="true"
            data-form-type="other"
            placeholder={placeholder}
            value={query}
            onChange={(e) => search(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 min-w-0 h-11 md:h-[38px] my-1 bg-transparent border-none outline-none text-base md:text-sm text-theme-text-primary placeholder:text-theme-settings-input-placeholder [&::-webkit-search-cancel-button]:appearance-none"
          />
          <button
            type="button"
            aria-label={
              query.length > 0
                ? t("provider-pages.menu.clear")
                : t("provider-pages.menu.close")
            }
            onMouseDown={(e) => e.preventDefault()}
            onClick={handleClearButton}
            className="shrink-0 -mr-2 w-11 h-11 md:w-8 md:h-8 flex items-center justify-center rounded-md border-none bg-transparent text-theme-text-primary hover:text-x-button transition-colors duration-quick ease-smooth"
          >
            <X strokeWidth={1.5} size={20} aria-hidden="true" />
          </button>
        </div>
        <p aria-live="polite" aria-atomic="true" className="sr-only">
          {results.length > 0
            ? t("provider-pages.menu.results", { count: results.length })
            : t("common.noResults")}
        </p>
        {results.length === 0 && (
          <p className="text-center text-sm text-theme-text-secondary py-6">
            {t("common.noResults")}
          </p>
        )}
        <div
          id={listboxId}
          role="listbox"
          aria-labelledby={labelledBy}
          aria-label={labelledBy ? undefined : t("provider-pages.menu.list")}
          className="flex-1 min-h-0 pl-4 pr-2 pt-1 pb-4 flex flex-col gap-y-1 overflow-y-auto white-scrollbar"
        >
          <ProviderMenuContext.Provider value={true}>
            {results.map((item, index) => (
              <MenuOption
                key={item.value ?? item.name}
                id={optionId(index)}
                highlighted={index === activeIndex}
                selected={
                  selectedValue !== undefined && item.value === selectedValue
                }
                onHover={() => {
                  if (index === activeIndex) return;
                  scrollToHighlight.current = false;
                  setHighlightedIndex(index);
                }}
              >
                {renderItem(item, onClose)}
              </MenuOption>
            ))}
          </ProviderMenuContext.Provider>
        </div>
      </div>
    </>
  );
}

function MenuOption({ id, highlighted, selected, onHover, children }) {
  // A click on the check (outside the caller's row) still picks the row.
  function handleClick(e) {
    const content = e.currentTarget.querySelector("[data-option-content]");
    if (content && !content.contains(e.target))
      content.firstElementChild?.click();
  }

  return (
    <div
      id={id}
      role="option"
      aria-selected={selected}
      // mousemove, not mouseenter: rows sliding under a resting pointer while the
      // keyboard scrolls the list must not steal the highlight.
      onMouseMove={onHover}
      onMouseDown={(e) => e.preventDefault()}
      onClick={handleClick}
      className={`flex items-center gap-x-2 rounded-md cursor-pointer ${
        highlighted
          ? "bg-zinc-700/50 light:bg-white ring-2 ring-inset ring-[color:var(--theme-nav-active)]"
          : ""
      }`}
    >
      <div data-option-content className="min-w-0 flex-1">
        {children}
      </div>
      {selected && (
        <Check
          strokeWidth={1.5}
          size={20}
          aria-hidden="true"
          className="shrink-0 mr-3 text-theme-text-primary"
        />
      )}
    </div>
  );
}
