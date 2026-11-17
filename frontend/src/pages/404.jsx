import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { House, Search } from "lucide-react";
import usePageTitle from "@/hooks/usePageTitle";
import paths from "@/utils/paths";

export default function NotFound() {
  const { t } = useTranslation();
  usePageTitle(t("auth-pages.not-found.page-title"));

  return (
    <main className="flex min-h-dvh w-full flex-col items-center justify-center gap-4 bg-theme-bg-primary p-4 text-theme-text-primary md:p-8">
      <Search
        strokeWidth={1.5}
        aria-hidden="true"
        className="h-16 w-16 text-theme-text-secondary"
      />
      <h1 className="text-center text-xl font-bold md:text-2xl">
        {t("auth-pages.not-found.title")}
      </h1>
      <p className="max-w-md px-4 text-center text-theme-text-secondary">
        {t("auth-pages.not-found.description")}
      </p>
      <Link
        to={paths.home()}
        className="mt-4 flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg border border-zinc-500 px-4 text-theme-text-primary transition-colors duration-quick ease-smooth hover:bg-zinc-800 light:border-slate-500 light:hover:bg-slate-100 md:w-auto"
      >
        <House strokeWidth={1.5} aria-hidden="true" className="h-4 w-4" />
        {t("auth-pages.not-found.home")}
      </Link>
    </main>
  );
}
