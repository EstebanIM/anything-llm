import { SimpleToggleSwitch } from "@/components/lib/Toggle";
import { useTranslation } from "react-i18next";
import Admin from "@/models/admin";
import showToast from "@/utils/toast";
import { useMemoriesContext } from "../MemoriesContext";

export default function PersonalizationToggle() {
  const {
    canToggle,
    enabled,
    setEnabled,
    autoExtraction,
    setAutoExtraction,
    loadingEnabled,
    ids,
  } = useMemoriesContext();
  const { t } = useTranslation();

  async function savePreference(key, checked) {
    const { success } = await Admin.updateSystemPreferences({
      [key]: checked ? "true" : "false",
    });
    if (!success)
      showToast(t("chat-panels.memories.setting-failed"), "error", {
        clear: true,
      });
    return !!success;
  }

  async function handleToggle(checked) {
    if (await savePreference("memory_enabled", checked)) setEnabled(checked);
  }

  async function handleAutoExtractionToggle(checked) {
    if (await savePreference("memory_auto_extraction", checked))
      setAutoExtraction(checked);
  }

  if (!canToggle || loadingEnabled) return null;

  return (
    <div className="shrink-0 bg-zinc-900 light:bg-white light:border light:border-slate-300 rounded-2xl p-4 space-y-3">
      <div className="flex items-start gap-3">
        <div className="flex-1 min-w-0">
          <p
            id={ids.toggle}
            className="text-sm font-medium text-zinc-50 light:text-slate-900"
          >
            {t("chat_window.memories.toggle.label")}
          </p>
          <p className="text-xs leading-4 text-zinc-400 light:text-slate-600">
            {t("chat_window.memories.toggle.description")}
          </p>
        </div>
        <SimpleToggleSwitch
          size="md"
          enabled={enabled}
          onChange={handleToggle}
          ariaLabelledBy={ids.toggle}
        />
      </div>
      {enabled && (
        <div className="flex items-start gap-3 pt-2 border-t border-zinc-800 light:border-slate-200">
          <div className="flex-1 min-w-0">
            <p
              id={ids.autoExtraction}
              className="text-sm font-medium text-zinc-50 light:text-slate-900"
            >
              {t("chat_window.memories.auto_extraction.label")}
            </p>
            <p className="text-xs leading-4 text-zinc-400 light:text-slate-600">
              {t("chat_window.memories.auto_extraction.description")}
            </p>
          </div>
          <SimpleToggleSwitch
            size="md"
            enabled={autoExtraction}
            onChange={handleAutoExtractionToggle}
            ariaLabelledBy={ids.autoExtraction}
          />
        </div>
      )}
    </div>
  );
}
