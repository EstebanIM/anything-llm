import Admin from "@/models/admin";
import System from "@/models/system";
import showToast from "@/utils/toast";
import { useEffect, useId, useState } from "react";
import { useTranslation } from "react-i18next";
import { FIELD_INPUT } from "@/components/ProviderFields";
import { BRAND_SECONDARY_BUTTON, BRAND_TEXT_BUTTON } from "../brandButtons";

export default function CustomLoginPoweredBy() {
  const { t } = useTranslation();
  const id = useId();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const [loginPoweredBy, setLoginPoweredBy] = useState("");
  const [originalLoginPoweredBy, setOriginalLoginPoweredBy] = useState("");
  const [canCustomize, setCanCustomize] = useState(false);

  useEffect(() => {
    const fetchInitialParams = async () => {
      const systemSettings = await System.keys();
      // CustomAppName explains why these fields are missing without authentication.
      if (!systemSettings?.MultiUserMode && !systemSettings?.RequiresAuth) {
        setCanCustomize(false);
        return false;
      }

      const response = await Admin.systemPreferencesByFields([
        "login_powered_by",
      ]);
      const currentValue = response?.settings?.login_powered_by || "";
      setLoginPoweredBy(currentValue);
      setOriginalLoginPoweredBy(currentValue);
      setCanCustomize(true);
      setLoading(false);
    };
    fetchInitialParams();
  }, []);

  const updateLoginPoweredBy = async (e, newValue = null) => {
    e.preventDefault();
    let login_powered_by = newValue;
    if (newValue === null) {
      const form = new FormData(e.target);
      login_powered_by = form.get("loginPoweredBy");
    }

    setSaving(true);
    const { success, error } = await Admin.updateSystemPreferences({
      login_powered_by,
    });
    setSaving(false);

    if (!success) {
      showToast(t("settings-pages.login-footer-failed", { error }), "error");
      return;
    }

    showToast(t("settings-pages.login-footer-saved"), "success");
    window.localStorage.removeItem(System.cacheKeys.loginPoweredBy);
    setLoginPoweredBy(login_powered_by);
    setOriginalLoginPoweredBy(login_powered_by);
    setHasChanges(false);
  };

  const handleChange = (e) => {
    setLoginPoweredBy(e.target.value);
    setHasChanges(true);
  };

  if (!canCustomize || loading) return null;

  return (
    <form
      className="flex flex-col gap-y-0.5 mt-4"
      onSubmit={updateLoginPoweredBy}
    >
      <label
        id={`${id}-label`}
        htmlFor={`${id}-input`}
        className="text-sm leading-6 font-semibold text-white"
      >
        {t("customization.items.login-powered-by.title")}
      </label>
      <p id={`${id}-help`} className="text-xs text-white/60">
        {t("customization.items.login-powered-by.description")}
      </p>
      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-x-4 mt-2">
        <input
          id={`${id}-input`}
          name="loginPoweredBy"
          type="text"
          aria-describedby={`${id}-help`}
          className={`${FIELD_INPUT} md:w-80`}
          placeholder={t("customization.items.login-powered-by.placeholder")}
          autoComplete="off"
          onChange={handleChange}
          value={loginPoweredBy}
        />
        {originalLoginPoweredBy !== "" && (
          <button
            type="button"
            id={`${id}-clear`}
            aria-labelledby={`${id}-clear ${id}-label`}
            disabled={saving}
            onClick={(e) => updateLoginPoweredBy(e, "")}
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
