import { useEffect, useId, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import paths from "@/utils/paths";
import ModelRouter from "@/models/modelRouter";
import {
  FIELD_COL,
  FIELD_ROW,
  FIELD_SELECT,
} from "@/components/ProviderFields";
import { FieldLabel } from "@/components/LLMSelection/FormParts";

export default function ModelRouterOptions({ settings }) {
  const { t } = useTranslation();
  const id = useId();
  const [routers, setRouters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRouters() {
      const results = await ModelRouter.getAll();
      setRouters(results);
      setLoading(false);
    }
    fetchRouters();
  }, []);

  if (loading) {
    return (
      <div className="w-full flex flex-col gap-y-4">
        <p role="status" className="text-sm text-theme-text-secondary">
          {t("model-router.router-selection.loading-routers")}
        </p>
      </div>
    );
  }

  if (routers.length === 0) {
    return (
      <div className="w-full flex flex-col gap-y-4">
        <p className="text-sm text-theme-text-secondary">
          {t("model-router.router-selection.no-routers-prefix-settings")}{" "}
          <Link
            to={paths.settings.modelRouters()}
            className="underline text-white"
          >
            {t("model-router.router-selection.no-routers-link")}
          </Link>
          .
        </p>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-y-4">
      <div className={FIELD_ROW}>
        <div className={FIELD_COL}>
          <FieldLabel
            htmlFor={`${id}-router`}
            label={t("model-router.router-selection.model-router-label")}
          />
          <select
            id={`${id}-router`}
            name="ModelRouterId"
            defaultValue={settings?.ModelRouterId || ""}
            className={FIELD_SELECT}
            required
          >
            <option value="">
              {t("model-router.router-selection.select-router")}
            </option>
            {routers.map((router) => (
              <option key={router.id} value={router.id}>
                {router.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
