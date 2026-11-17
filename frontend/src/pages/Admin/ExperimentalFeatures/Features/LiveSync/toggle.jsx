import System from "@/models/system";
import paths from "@/utils/paths";
import showToast from "@/utils/toast";
import { useId, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import { SimpleToggleSwitch } from "@/components/lib/Toggle";

export default function LiveSyncToggle({ enabled = false, onToggle }) {
  const { t } = useTranslation();
  const [status, setStatus] = useState(!!enabled);
  const [busy, setBusy] = useState(false);
  const headingId = useId();

  async function toggleFeatureFlag() {
    if (busy) return;
    setBusy(true);
    const updated =
      await System.experimentalFeatures.liveSync.toggleFeature(!status);
    setBusy(false);
    if (!updated) {
      showToast(t("admin-pages.experimental.live-sync-failed"), "error", {
        clear: true,
      });
      return false;
    }

    setStatus(!status);
    showToast(
      t(
        !status
          ? "admin-pages.experimental.live-sync-enabled"
          : "admin-pages.experimental.live-sync-disabled"
      ),
      "success",
      { clear: true }
    );
    onToggle();
  }

  return (
    <div className="p-0 md:p-4">
      <div className="flex flex-col gap-y-6 max-w-[500px]">
        <div className="flex items-center justify-between gap-x-4">
          <h2
            id={headingId}
            className="text-theme-text-primary text-base font-bold"
          >
            {t("admin-pages.experimental.live-sync-heading")}
          </h2>
          <SimpleToggleSwitch
            size="lg"
            enabled={status}
            disabled={busy}
            onChange={toggleFeatureFlag}
            ariaLabelledBy={headingId}
          />
        </div>
        <div className="flex flex-col space-y-4">
          <p className="text-theme-text-secondary text-sm">
            {t("admin-pages.experimental.live-sync-description")}
          </p>
          <p className="text-theme-text-secondary text-sm">
            {t("admin-pages.experimental.live-sync-workspaces")}
          </p>
          <p className="text-theme-text-secondary text-xs italic">
            {t("admin-pages.experimental.live-sync-scope")}
          </p>
        </div>
      </div>
      <div className="mt-8">
        <Link
          to={paths.experimental.liveDocumentSync.manage()}
          className="inline-flex items-center gap-x-1.5 min-h-[44px] md:min-h-0 text-sm underline text-sky-400 light:text-sky-700 hover:text-sky-300 light:hover:text-sky-800 transition-colors duration-quick ease-smooth"
        >
          {t("admin-pages.experimental.manage-watched")}
          <ArrowRight strokeWidth={1.5} size={16} aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
