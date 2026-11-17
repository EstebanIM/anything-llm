import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import paths from "@/utils/paths";
import ModelRouter from "@/models/modelRouter";
import { useAutosaveForm } from "@/components/AutosaveForm";
import { FIELD_SELECT } from "@/components/ProviderFields";
import PreLoader from "@/components/Preloader";
import SettingsField, {
  HELP_TEXT,
  TEXT_LINK,
} from "../../../components/SettingsField";

export default function RouterSelection({ workspace }) {
  const { t } = useTranslation();
  const [routers, setRouters] = useState([]);
  const [loading, setLoading] = useState(true);
  const { save } = useAutosaveForm();

  useEffect(() => {
    async function fetchRouters() {
      const results = await ModelRouter.getAll();
      setRouters(results);
      setLoading(false);
    }
    fetchRouters();
  }, []);

  // Save only after list is ready
  useEffect(() => {
    if (!loading) save();
  }, [loading]);

  if (loading) {
    return (
      <div className="flex items-center gap-x-3">
        <PreLoader size="4" />
        <p className={HELP_TEXT} aria-hidden="true">
          {t("model-router.router-selection.loading-routers")}
        </p>
      </div>
    );
  }

  if (routers.length === 0) {
    return (
      <p className="text-sm text-theme-text-secondary">
        {t("model-router.router-selection.no-routers-prefix-workspace")}{" "}
        <Link to={paths.settings.modelRouters()} className={TEXT_LINK}>
          {t("model-router.router-selection.no-routers-link")}
        </Link>
      </p>
    );
  }

  return (
    <SettingsField
      name="router_id"
      label={t("model-router.router-selection.model-router-label")}
      help={t("model-router.router-selection.select-description")}
    >
      {(control) => (
        <select
          {...control}
          name="router_id"
          defaultValue={workspace?.router_id || ""}
          className={`${FIELD_SELECT} max-w-[640px]`}
          required
        >
          <option value="">
            {t("model-router.router-selection.select-router")}
          </option>
          {routers.map((router) => (
            <option key={router.id} value={router.id}>
              {router.description
                ? `${router.name}: ${router.description}`
                : router.name}
            </option>
          ))}
        </select>
      )}
    </SettingsField>
  );
}
