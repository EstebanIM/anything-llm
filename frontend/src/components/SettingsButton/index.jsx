import useUser from "@/hooks/useUser";
import paths from "@/utils/paths";
import { Undo2, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import { useMatch } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function SettingsButton() {
  const { t } = useTranslation();
  const isInSettings = !!useMatch("/settings/*");
  const { user } = useUser();

  if (user && user?.role === "default") return null;

  if (isInSettings)
    return (
      <div className="flex w-fit">
        <Link
          to={paths.home()}
          className="transition-all duration-300 p-2 rounded-full bg-theme-sidebar-footer-icon hover:bg-theme-sidebar-footer-icon-hover"
          aria-label={t("profile_settings.back_to_workspaces")}
          data-tooltip-id="footer-item"
          data-tooltip-content={t("profile_settings.back_to_workspaces")}
        >
          <Undo2
            strokeWidth={1.5}
            aria-hidden="true"
            className="h-5 w-5 text-white light:text-slate-800"
          />
        </Link>
      </div>
    );

  return (
    <div className="flex w-fit">
      <Link
        to={paths.settings.interface()}
        className="transition-all duration-300 p-2 rounded-full bg-theme-sidebar-footer-icon hover:bg-theme-sidebar-footer-icon-hover"
        aria-label={t("profile_settings.settings")}
        data-tooltip-id="footer-item"
        data-tooltip-content={t("profile_settings.settings")}
      >
        <Wrench
          strokeWidth={1.5}
          aria-hidden="true"
          className="h-5 w-5 text-white light:text-slate-800"
        />
      </Link>
    </div>
  );
}
