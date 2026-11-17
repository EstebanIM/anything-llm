import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Sidebar from "@/components/SettingsSidebar";
import { ArrowLeft, LoaderCircle } from "lucide-react";
import ModelRouter from "@/models/modelRouter";
import showToast from "@/utils/toast";
import { serverErrorMessage } from "@/utils/serverErrors";
import paths from "@/utils/paths";
import RuleBuilder from "../RuleBuilder";

export default function RouterRulesPage() {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [router, setRouter] = useState(null);

  const fetchRouter = async () => {
    const { router: found, error } = await ModelRouter.get(id);
    if (!found) {
      showToast(
        serverErrorMessage(error, t, "settings-pages.router-not-found", {
          known: [[/not found/i, "settings-pages.router-not-found"]],
        }),
        "error"
      );
      navigate(paths.settings.modelRouters());
      return;
    }
    setRouter(found);
    setLoading(false);
  };

  useEffect(() => {
    fetchRouter();
  }, [id]);

  if (loading)
    return (
      <Layout t={t}>
        <div role="status" className="flex items-center justify-center py-20">
          <LoaderCircle
            strokeWidth={1.5}
            aria-hidden="true"
            className="h-8 w-8 text-zinc-400 light:text-slate-600 animate-spin"
          />
          <span className="sr-only">{t("common.loading")}</span>
        </div>
      </Layout>
    );

  return (
    <Layout t={t}>
      <RuleBuilder
        routerId={router.id}
        routerName={router.name}
        rules={router.rules || []}
        onRulesChanged={fetchRouter}
      />
    </Layout>
  );
}

function Layout({ t, children }) {
  return (
    <div className="w-screen h-screen overflow-hidden bg-zinc-950 light:bg-slate-50 flex md:mt-0 mt-6">
      <Sidebar />
      <main className="relative md:ml-[2px] md:mr-[16px] md:my-[16px] md:rounded-2xl bg-zinc-900 light:bg-white light:border light:border-slate-300 w-full h-full md:h-[calc(100%-32px)] overflow-y-scroll p-4 md:p-0">
        <div className="flex flex-col w-full px-1 md:pl-6 md:pr-[50px] md:py-6 py-16">
          <Link
            to={paths.settings.modelRouters()}
            className="self-start flex items-center gap-x-2 min-h-[44px] md:min-h-0 rounded-md text-zinc-400 light:text-slate-600 hover:text-white light:hover:text-slate-900 text-sm mb-4 transition-colors duration-quick ease-smooth"
          >
            <ArrowLeft
              strokeWidth={1.5}
              aria-hidden="true"
              className="h-4 w-4"
            />
            {t("model-router.edit-router.back-to-routers")}
          </Link>
          {children}
        </div>
      </main>
    </div>
  );
}
