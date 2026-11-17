import { useTranslation } from "react-i18next";

const PAGE_BUTTON =
  "min-h-[44px] md:min-h-[36px] px-4 rounded-lg text-sm border border-zinc-500 light:border-slate-500 text-zinc-100 light:text-slate-900 hover:bg-zinc-800 light:hover:bg-slate-100 transition-colors duration-quick ease-smooth aria-disabled:opacity-50 aria-disabled:cursor-not-allowed aria-disabled:hover:bg-transparent";

/**
 * Previous / next page controls with the current page announced politely.
 * Buttons use aria-disabled (not disabled) so focus stays on them when they
 * reach the first or last page.
 *
 * @param {object} props
 * @param {number} props.page - 1-based
 * @param {boolean} props.canNext
 * @param {boolean} [props.busy] - a page is loading
 * @param {(page: number) => void} props.onChange - receives the 1-based page
 * @param {string} props.label - names the navigation landmark
 */
export default function Pagination({ page, canNext, busy, onChange, label }) {
  const { t } = useTranslation();
  const prevDisabled = page <= 1 || busy;
  const nextDisabled = !canNext || busy;

  return (
    <nav
      aria-label={label}
      className="flex items-center justify-between gap-4 mt-4 pb-2"
    >
      <button
        type="button"
        aria-disabled={prevDisabled || undefined}
        onClick={() => !prevDisabled && onChange(page - 1)}
        className={PAGE_BUTTON}
      >
        {t("common.previous")}
      </button>
      <p aria-live="polite" className="text-sm text-theme-text-secondary">
        {t("embed-pages.pagination.page", { page })}
      </p>
      <button
        type="button"
        aria-disabled={nextDisabled || undefined}
        onClick={() => !nextDisabled && onChange(page + 1)}
        className={PAGE_BUTTON}
      >
        {t("common.next")}
      </button>
    </nav>
  );
}
