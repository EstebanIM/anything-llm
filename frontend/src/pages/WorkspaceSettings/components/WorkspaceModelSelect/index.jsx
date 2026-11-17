import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import useGetProviderModels, {
  DISABLED_PROVIDERS,
} from "@/hooks/useGetProvidersModels";
import { ModelSelectField, modelStatus } from "@/components/ProviderFields";
import { SavedIndicator, useAutosaveForm } from "@/components/AutosaveForm";

/**
 * Model picker for the provider chosen in the workspace chat or agent settings.
 * A provider change is saved once the list is ready, so provider and model are
 * stored together. With no model to pick (none listed, or a provider without
 * per-workspace models) an empty value is sent: the workspace then uses the
 * provider's default model instead of keeping the previous provider's model.
 * @param {object} props
 * @param {string} props.provider
 * @param {string} props.name - form field name ("chatModel" | "agentModel")
 * @param {string} props.label
 * @param {string} props.help
 * @param {string} [props.defaultValue] - saved model
 * @param {(model: string) => boolean} [props.isSupported] - hides models that cannot be used
 * @param {import("react").ReactNode} [props.unsupportedNotice] - shown for providers without model choice
 */
export default function WorkspaceModelSelect({ provider, ...props }) {
  if (DISABLED_PROVIDERS.includes(provider))
    return <NoModelChoice name={props.name} notice={props.unsupportedNotice} />;
  return <ModelList provider={provider} {...props} />;
}

function NoModelChoice({ name, notice = null }) {
  const { save } = useAutosaveForm();
  useEffect(() => {
    save();
  }, []);
  return (
    <>
      <input type="hidden" name={name} value="" />
      {notice}
    </>
  );
}

function ModelList({
  provider,
  name,
  label,
  help,
  defaultValue,
  isSupported = () => true,
}) {
  const { t } = useTranslation();
  const {
    defaultModels,
    customModels,
    loading,
    downloadedModels,
    error,
    refetch,
  } = useGetProviderModels(provider);
  const { save } = useAutosaveForm();

  // A list that failed to load must not save: it would store an empty model.
  useEffect(() => {
    if (!loading && !error) save();
  }, [loading, error]);

  const general = defaultModels.filter((model) => isSupported(model));
  const downloaded = downloadedModels.filter((model) => isSupported(model.id));
  const discovered = Array.isArray(customModels)
    ? customModels.filter((model) => isSupported(model.id))
    : [];
  // Providers with long lists (eg: TogetherAI) group their models by creator.
  const byOrganization = Array.isArray(customModels)
    ? []
    : Object.entries(customModels)
        .map(([organization, models]) => [
          organization,
          models.filter((model) => isSupported(model.id)),
        ])
        .filter(([, models]) => models.length > 0);
  const count =
    general.length +
    discovered.length +
    byOrganization.reduce((total, [, models]) => total + models.length, 0);
  const status = modelStatus({ loading, error, count });

  return (
    <div className="relative">
      <ModelSelectField
        name={name}
        label={label}
        help={help}
        status={status}
        error={error}
        onRetry={refetch}
        defaultValue={defaultValue ?? undefined}
        className="flex flex-col w-full max-w-[640px]"
      >
        {general.length > 0 && (
          <optgroup label={t("chat-input.models-general")}>
            {general.map((model) => (
              <option key={model} value={model}>
                {model}
              </option>
            ))}
          </optgroup>
        )}
        {downloaded.length > 0 && (
          <optgroup label={t("chat-input.models-downloaded")}>
            {downloaded.map((model) => (
              <option key={model.id} value={model.id}>
                {model.name || model.id}
              </option>
            ))}
          </optgroup>
        )}
        {discovered.length > 0 && (
          <optgroup label={t("chat-input.models-discovered")}>
            {discovered.map((model) => (
              <option key={model.id} value={model.id}>
                {model.name || model.id}
              </option>
            ))}
          </optgroup>
        )}
        {byOrganization.map(([organization, models]) => (
          <optgroup key={organization} label={organization}>
            {models.map((model) => (
              <option key={model.id} value={model.id}>
                {model.name || model.id}
              </option>
            ))}
          </optgroup>
        ))}
      </ModelSelectField>
      {/* Below the field, in the gap, so it never covers the label. */}
      <span className="absolute right-0 top-full mt-1">
        <SavedIndicator name={name} />
      </span>
      {(status === "empty" || status === "error") && (
        <input type="hidden" name={name} value="" />
      )}
    </div>
  );
}
