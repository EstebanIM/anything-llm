import { useTranslation } from "react-i18next";
import useGetProviderModels, {
  DISABLED_PROVIDERS,
} from "@/hooks/useGetProvidersModels";

const SELECT_CLASSES =
  "bg-zinc-900 light:bg-white text-white light:text-slate-900 text-sm rounded-lg h-8 w-full px-2.5 border border-zinc-900 light:border-slate-400";

export default function ChatModelSelection({
  labelledBy,
  provider,
  setHasChanges,
  selectedLLMModel,
  setSelectedLLMModel,
}) {
  const { t } = useTranslation();
  const { defaultModels, customModels, loading, downloadedModels } =
    useGetProviderModels(provider);
  if (DISABLED_PROVIDERS.includes(provider)) return null;

  if (loading) {
    return (
      <select
        aria-labelledby={labelledBy}
        aria-busy="true"
        required={true}
        disabled={true}
        defaultValue=""
        className={`${SELECT_CLASSES} cursor-not-allowed`}
      >
        <option disabled={true} value="">
          {t("chat-input.models-loading")}
        </option>
      </select>
    );
  }

  const hasCustomModels = Array.isArray(customModels)
    ? customModels.length > 0
    : Object.keys(customModels ?? {}).length > 0;
  if (!defaultModels.length && !downloadedModels.length && !hasCustomModels) {
    // Keep the (empty) select in the DOM: validatedModelSelection() reads it
    // and then refuses to save a provider without a model.
    return (
      <div className="flex flex-col gap-1.5">
        <select
          id="workspace-llm-model-select"
          aria-labelledby={labelledBy}
          aria-describedby={`${labelledBy}-empty`}
          disabled={true}
          defaultValue=""
          className={`${SELECT_CLASSES} cursor-not-allowed`}
        >
          <option disabled={true} value="">
            {t("chat-input.models-none")}
          </option>
        </select>
        <p
          id={`${labelledBy}-empty`}
          role="status"
          className="text-xs text-zinc-400 light:text-slate-600 leading-5"
        >
          {t("chat-input.models-empty")}
        </p>
      </div>
    );
  }

  return (
    <select
      id="workspace-llm-model-select"
      aria-labelledby={labelledBy}
      required={true}
      value={selectedLLMModel}
      onChange={(e) => {
        setHasChanges(true);
        setSelectedLLMModel(e.target.value);
      }}
      className={`${SELECT_CLASSES} cursor-pointer`}
    >
      {defaultModels.length > 0 && (
        <optgroup label={t("chat-input.models-general")}>
          {defaultModels.map((model) => {
            return (
              <option key={model} value={model}>
                {model}
              </option>
            );
          })}
        </optgroup>
      )}
      {downloadedModels.length > 0 && (
        <optgroup label={t("chat-input.models-downloaded")}>
          {downloadedModels.map((model) => (
            <option key={model.id} value={model.id}>
              {model.name || model.id}
            </option>
          ))}
        </optgroup>
      )}
      {Array.isArray(customModels) && customModels.length > 0 && (
        <optgroup label={t("chat-input.models-discovered")}>
          {customModels.map((model) => {
            return (
              <option key={model.id} value={model.id}>
                {model.name || model.id}
              </option>
            );
          })}
        </optgroup>
      )}
      {/* For providers like TogetherAi where we partition model by creator entity. */}
      {!Array.isArray(customModels) && Object.keys(customModels).length > 0 && (
        <>
          {Object.entries(customModels).map(([organization, models]) => (
            <optgroup key={organization} label={organization}>
              {models.map((model) => (
                <option key={model.id} value={model.id}>
                  {model.name}
                </option>
              ))}
            </optgroup>
          ))}
        </>
      )}
    </select>
  );
}
