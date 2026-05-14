import Admin from "@/models/admin";
import System from "@/models/system";
import showToast from "@/utils/toast";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function CustomLoginPoweredBy() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [hasChanges, setHasChanges] = useState(false);
  const [loginPoweredBy, setLoginPoweredBy] = useState("");
  const [originalLoginPoweredBy, setOriginalLoginPoweredBy] = useState("");
  const [canCustomize, setCanCustomize] = useState(false);

  useEffect(() => {
    const fetchInitialParams = async () => {
      const systemSettings = await System.keys();
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

    const { success, error } = await Admin.updateSystemPreferences({
      login_powered_by,
    });

    if (!success) {
      showToast(`Failed to update login footer text: ${error}`, "error");
      return;
    }

    showToast("Successfully updated login footer text.", "success");
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
      <p className="text-sm leading-6 font-semibold text-white">
        {t("customization.items.login-powered-by.title")}
      </p>
      <p className="text-xs text-white/60">
        {t("customization.items.login-powered-by.description")}
      </p>
      <div className="flex items-center gap-x-4">
        <input
          name="loginPoweredBy"
          type="text"
          className="border-none bg-theme-settings-input-bg mt-2 text-white placeholder:text-theme-settings-input-placeholder text-sm rounded-lg focus:outline-primary-button active:outline-primary-button outline-none block w-fit py-2 px-4"
          placeholder={t("customization.items.login-powered-by.placeholder")}
          autoComplete="off"
          onChange={handleChange}
          value={loginPoweredBy}
        />
        {originalLoginPoweredBy !== "" && (
          <button
            type="button"
            onClick={(e) => updateLoginPoweredBy(e, "")}
            className="text-white text-base font-medium hover:text-opacity-60"
          >
            Clear
          </button>
        )}
      </div>
      {hasChanges && (
        <button
          type="submit"
          className="transition-all mt-2 w-fit duration-300 border border-slate-200 px-5 py-2.5 rounded-lg text-white text-sm items-center flex gap-x-2 hover:bg-slate-200 hover:text-slate-800 focus:ring-gray-800"
        >
          Save
        </button>
      )}
    </form>
  );
}
