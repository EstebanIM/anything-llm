import { useId, useState } from "react";
import { useTranslation } from "react-i18next";
import { RefreshCw, LoaderCircle, Search } from "lucide-react";
import { FIELD_INPUT } from "@/components/ProviderFields";

export default function ModelTableLayout({
  children,
  fetchModels = null,
  searchQuery = "",
  setSearchQuery = () => {},
  loading = false,
}) {
  const { t } = useTranslation();
  const id = useId();
  const [isRefreshing, setIsRefreshing] = useState(false);
  const busy = isRefreshing || loading;

  async function refreshModels() {
    if (busy) return;
    setIsRefreshing(true);
    try {
      await fetchModels?.();
    } catch {
    } finally {
      setIsRefreshing(false);
    }
  }

  return (
    <div
      role="group"
      aria-labelledby={`${id}-title`}
      className="flex flex-col w-full"
    >
      <div className="flex gap-x-2 items-center pb-[8px]">
        <p
          id={`${id}-title`}
          className="text-theme-text-primary text-base font-semibold"
        >
          {t("llm-fields.common.available-models")}
        </p>
      </div>
      <div className="flex w-full items-center gap-x-[16px]">
        <div className="relative flex-1 flex-grow">
          <label htmlFor={`${id}-search`} className="sr-only">
            {t("model-table.search")}
          </label>
          <Search
            strokeWidth={1.5}
            size={16}
            color="var(--theme-text-primary)"
            aria-hidden="true"
            className="absolute left-[10px] top-1/2 -translate-y-1/2 pointer-events-none"
          />
          <input
            id={`${id}-search`}
            type="search"
            placeholder={t("model-table.search")}
            value={searchQuery}
            disabled={loading}
            autoComplete="off"
            spellCheck={false}
            className={`${FIELD_INPUT} pl-[32px] search-input`}
            onChange={(e) => {
              // Keep the search out of the settings form's change tracking.
              e.preventDefault();
              e.stopPropagation();
              setSearchQuery(e.target.value);
            }}
            onKeyDown={(e) => {
              // Enter in a search box must not submit the settings form.
              if (e.key === "Enter") e.preventDefault();
            }}
          />
        </div>
        {!!fetchModels && (
          <button
            type="button"
            onClick={refreshModels}
            // aria-disabled keeps focus on the button while the list reloads.
            aria-disabled={busy || undefined}
            aria-busy={isRefreshing || undefined}
            className="border-none shrink-0 self-stretch min-h-[44px] md:min-h-0 text-theme-text-secondary text-sm font-medium hover:bg-white/10 light:hover:bg-black/5 rounded-lg px-2 flex items-center gap-x-1 transition-colors duration-quick ease-smooth aria-disabled:opacity-60 aria-disabled:cursor-not-allowed"
          >
            {isRefreshing ? (
              <LoaderCircle
                strokeWidth={1.5}
                aria-hidden="true"
                className="w-4 h-4 text-theme-text-secondary animate-spin"
              />
            ) : (
              <RefreshCw
                strokeWidth={1.5}
                aria-hidden="true"
                className="w-4 h-4 text-theme-text-secondary"
              />
            )}
            <span>{t("model-table.refresh")}</span>
          </button>
        )}
      </div>
      {children}
    </div>
  );
}
