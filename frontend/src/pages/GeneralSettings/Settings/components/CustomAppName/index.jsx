import Admin from "@/models/admin";
import System from "@/models/system";
import showToast from "@/utils/toast";
import { serverErrorMessage } from "@/utils/serverErrors";
import { useEffect, useId, useState } from "react";
import { Link } from "react-router-dom";
import { Info } from "lucide-react";
import { Trans, useTranslation } from "react-i18next";
import { DEFAULT_APP_NAME } from "@/utils/constants/brand";
import { setBrandName } from "@/i18n";
import paths from "@/utils/paths";
import { FIELD_INPUT } from "@/components/ProviderFields";
import { BRAND_SECONDARY_BUTTON, BRAND_TEXT_BUTTON } from "../brandButtons";

export default function CustomAppName() {
  const { t } = useTranslation();
  const id = useId();
  // "loading" | "locked" (instance without authentication) | "ready"
  const [status, setStatus] = useState("loading");
  const [saving, setSaving] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const [customAppName, setCustomAppName] = useState("");
  const [originalAppName, setOriginalAppName] = useState("");

  useEffect(() => {
    const fetchInitialParams = async () => {
      const settings = await System.keys();
      if (!settings?.MultiUserMode && !settings?.RequiresAuth) {
        setStatus("locked");
        return false;
      }

      const { appName } = await System.fetchCustomAppName();
      setCustomAppName(appName || "");
      setOriginalAppName(appName || "");
      setStatus("ready");
    };
    fetchInitialParams();
  }, []);

  const updateCustomAppName = async (e, newValue = null) => {
    e.preventDefault();
    let custom_app_name = newValue;
    if (newValue === null) {
      const form = new FormData(e.target);
      custom_app_name = form.get("customAppName");
    }
    setSaving(true);
    const { success, error } = await Admin.updateSystemPreferences({
      custom_app_name,
    });
    setSaving(false);
    if (!success) {
      showToast(
        serverErrorMessage(error, t, "settings-pages.app-name-failed"),
        "error"
      );
      return;
    }
    showToast(t("settings-pages.app-name-saved"), "success");
    window.localStorage.removeItem(System.cacheKeys.customAppName);
    setCustomAppName(custom_app_name);
    setOriginalAppName(custom_app_name);
    setHasChanges(false);
    setBrandName(custom_app_name || DEFAULT_APP_NAME);
  };

  const handleChange = (e) => {
    setCustomAppName(e.target.value);
    setHasChanges(true);
  };

  if (status === "loading") return null;
  if (status === "locked") return <AuthRequiredNote />;

  return (
    <form
      className="flex flex-col gap-y-0.5 mt-4"
      onSubmit={updateCustomAppName}
    >
      <label
        id={`${id}-label`}
        htmlFor={`${id}-input`}
        className="text-sm leading-6 font-semibold text-white"
      >
        {t("customization.items.app-name.title")}
      </label>
      <p id={`${id}-help`} className="text-xs text-white/60">
        {t("customization.items.app-name.description")}
      </p>
      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-x-4 mt-2">
        <input
          id={`${id}-input`}
          name="customAppName"
          type="text"
          aria-describedby={`${id}-help`}
          className={`${FIELD_INPUT} md:w-80`}
          placeholder={DEFAULT_APP_NAME}
          required={true}
          autoComplete="off"
          onChange={handleChange}
          value={customAppName}
        />
        {originalAppName !== "" && (
          <button
            type="button"
            id={`${id}-clear`}
            aria-labelledby={`${id}-clear ${id}-label`}
            disabled={saving}
            onClick={(e) => updateCustomAppName(e, "")}
            className={BRAND_TEXT_BUTTON}
          >
            {t("settings-pages.clear")}
          </button>
        )}
      </div>
      {hasChanges && (
        <button
          type="submit"
          disabled={saving}
          aria-busy={saving || undefined}
          className={BRAND_SECONDARY_BUTTON}
        >
          {saving ? t("common.saving") : t("common.save")}
        </button>
      )}
    </form>
  );
}

/**
 * The app name and login footer only show on the login screen, so they can
 * only be set once the instance asks people to sign in.
 */
function AuthRequiredNote() {
  return (
    <p className="mt-4 flex items-start gap-x-2 max-w-[600px] text-xs leading-[18px] text-white/60">
      <Info
        strokeWidth={1.5}
        size={14}
        aria-hidden="true"
        className="shrink-0 mt-0.5"
      />
      <span>
        <Trans
          i18nKey="settings-pages.identity-needs-auth"
          components={{
            anchor: (
              <Link
                to={paths.settings.security()}
                className="underline text-white hover:opacity-80"
              />
            ),
          }}
        />
      </span>
    </p>
  );
}
