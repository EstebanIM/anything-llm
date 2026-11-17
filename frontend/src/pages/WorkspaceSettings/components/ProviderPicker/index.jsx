import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Settings } from "lucide-react";
import ProviderSearchMenu from "@/components/lib/ProviderSearchMenu";
import ProviderOption from "@/components/lib/ProviderSearchMenu/ProviderOption";
import System from "@/models/system";
import ProviderSetupModal from "../ProviderSetupModal";

/**
 * LLM provider picker of the workspace chat and agent settings. Choosing a
 * provider whose required settings are missing opens its setup dialog first;
 * the gear next to the trigger edits the settings of the chosen provider.
 * @param {object} props
 * @param {string} props.labelledBy - id of the visible heading of the picker
 * @param {string} [props.describedBy] - id of the help text under the heading
 * @param {object[]} props.items - providers ({value, name, logo, requiredConfig, options})
 * @param {string} props.value - chosen provider
 * @param {string[]} [props.noSettings] - providers without settings to edit
 * @param {object} props.settings - system settings (System.keys())
 * @param {"chat"|"agent"} props.purpose - wording of the setup dialog
 * @param {string} props.placeholder - search field placeholder
 * @param {(value: string) => void} props.onChange - a provider was chosen and is ready
 * @param {() => void} [props.onSettingsSaved] - the chosen provider's settings changed
 */
export default function ProviderPicker({
  labelledBy,
  describedBy,
  items,
  value,
  noSettings = [],
  settings,
  purpose,
  placeholder,
  onChange,
  onSettingsSaved,
}) {
  const { t } = useTranslation();
  const [currentSettings, setCurrentSettings] = useState(settings ?? {});
  // { provider, select }: `select` chooses the provider once it is set up.
  const [setup, setSetup] = useState(null);
  const selected = items.find((item) => item.value === value);

  function choose(item, close) {
    close();
    if (item.value === value) return;
    const needsSetup = (item.requiredConfig || []).some(
      (key) => !currentSettings[key]
    );
    if (needsSetup) {
      setSetup({ provider: item, select: true });
      return;
    }
    onChange(item.value);
  }

  async function handleSaved() {
    const { provider, select } = setup;
    setSetup(null);
    const keys = await System.keys();
    if (keys) setCurrentSettings(keys);
    if (select) onChange(provider.value);
    else onSettingsSaved?.();
  }

  const canEdit = !!selected && !noSettings.includes(selected.value);
  return (
    <div className="flex items-center gap-x-2 w-full max-w-[692px]">
      <div className="relative flex-1 min-w-0">
        <ProviderSearchMenu
          items={items}
          selected={selected}
          labelledBy={labelledBy}
          describedBy={describedBy}
          placeholder={placeholder}
          renderItem={(item, close) => (
            <ProviderOption
              name={item.name}
              value={item.value}
              image={item.logo}
              description={item.description}
              descriptionKey={item.descriptionKey}
              checked={item.value === value}
              onClick={() => choose(item, close)}
            />
          )}
        />
      </div>
      {canEdit && (
        <button
          type="button"
          onClick={() => setSetup({ provider: selected, select: false })}
          aria-label={t("workspace-settings.llm.edit-settings", {
            name: selected.name,
          })}
          className="shrink-0 w-11 h-11 flex items-center justify-center rounded-lg border border-zinc-500 light:border-slate-500 bg-transparent text-white hover:bg-zinc-800 light:hover:bg-slate-100 transition-colors duration-quick ease-smooth"
        >
          <Settings strokeWidth={1.5} size={20} aria-hidden="true" />
        </button>
      )}
      <ProviderSetupModal
        provider={setup?.provider ?? null}
        purpose={purpose}
        onClose={() => setSetup(null)}
        onSaved={handleSaved}
      />
    </div>
  );
}
