import { useEffect, useId, useState } from "react";
import { useTranslation } from "react-i18next";
import System from "@/models/system";
import showToast from "@/utils/toast";
import { serverErrorMessage } from "@/utils/serverErrors";
import Toggle from "@/components/lib/Toggle";

/**
 * Anonymous telemetry opt-out toggle, shared by Settings > Privacy and the
 * onboarding privacy step. The explanation is always visible and describes the
 * switch; saving failures are reported and the switch keeps its real state.
 *
 * @param {Object} props
 * @param {Object} [props.settings] - result of `System.keys()`; fetched here when omitted
 */
export default function TelemetryToggle({ settings = null }) {
  const detailsId = useId();
  const { t } = useTranslation();
  const [loading, setLoading] = useState(!settings);
  const [telemetry, setTelemetry] = useState(
    settings ? settings?.DisableTelemetry !== "true" : true
  );
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (settings) return;
    System.keys().then((keys) => {
      setTelemetry(keys?.DisableTelemetry !== "true");
      setLoading(false);
    });
  }, []);

  async function toggleTelemetry() {
    const next = !telemetry;
    setSaving(true);
    const { error } = await System.updateSystem({
      DisableTelemetry: next ? "false" : "true",
    });
    setSaving(false);
    if (error) {
      showToast(
        serverErrorMessage(error, t, "settings-pages.telemetry-failed"),
        "error",
        { clear: true }
      );
      return;
    }
    setTelemetry(next);
    showToast(
      t(
        next
          ? "settings-pages.telemetry-enabled"
          : "settings-pages.telemetry-disabled"
      ),
      "info",
      { clear: true }
    );
  }

  if (loading) return null;
  return (
    <div className="flex flex-col gap-y-3 w-full max-w-2xl">
      <Toggle
        size="lg"
        label={t("privacy.anonymous")}
        enabled={telemetry}
        disabled={saving}
        onChange={toggleTelemetry}
        describedBy={detailsId}
      />
      <div
        id={detailsId}
        className="flex flex-col gap-y-2 text-theme-text-secondary text-xs leading-[18px]"
      >
        <p>{t("settings-pages.telemetry-what")}</p>
        <p>{t("settings-pages.telemetry-not-included")}</p>
        <p>{t("settings-pages.telemetry-env")}</p>
      </div>
    </div>
  );
}
