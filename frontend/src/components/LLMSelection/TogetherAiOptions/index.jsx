import { useState, useEffect, useId } from "react";
import { useTranslation } from "react-i18next";
import System from "@/models/system";
import {
  AdvancedSection,
  FIELD_COL,
  FIELD_INPUT,
  FIELD_ROW,
  SECRET_MASK,
  SecretInput,
} from "@/components/ProviderFields";
import {
  FieldLabel,
  ModelSelectField,
  blurOnWheel,
  modelStatus,
} from "@/components/LLMSelection/FormParts";

export default function TogetherAiOptions({ settings }) {
  const { t } = useTranslation();
  const id = useId();
  const [inputValue, setInputValue] = useState(settings?.TogetherAiApiKey);
  const [apiKey, setApiKey] = useState(settings?.TogetherAiApiKey);

  return (
    <div className="flex flex-col gap-y-4 mt-1.5">
      <div className={FIELD_ROW}>
        <div className={FIELD_COL}>
          <FieldLabel
            htmlFor={`${id}-key`}
            label={t("provider-fields.api-key")}
          />
          <SecretInput
            id={`${id}-key`}
            name="TogetherAiApiKey"
            defaultValue={settings?.TogetherAiApiKey ? SECRET_MASK : ""}
            required={true}
            onChange={(e) => setInputValue(e.target.value)}
            onBlur={() => setApiKey(inputValue)}
          />
        </div>
        {!settings?.credentialsOnly && (
          <TogetherAiModelSelection settings={settings} apiKey={apiKey} />
        )}
      </div>
      {!settings?.credentialsOnly && <AdvancedControls settings={settings} />}
    </div>
  );
}

function AdvancedControls({ settings }) {
  const { t } = useTranslation();
  const id = useId();

  return (
    <AdvancedSection>
      <div className={`${FIELD_ROW} mt-4`}>
        <div className={FIELD_COL}>
          <FieldLabel
            htmlFor={`${id}-max-tokens`}
            label={t("provider-fields.max-tokens")}
          />
          <input
            id={`${id}-max-tokens`}
            type="number"
            name="TogetherAiMaxTokens"
            className={FIELD_INPUT}
            placeholder={t("llm-fields.common.provider-default")}
            min={0}
            step={1}
            onWheel={blurOnWheel}
            defaultValue={settings?.TogetherAiMaxTokens}
            autoComplete="off"
          />
        </div>
      </div>
    </AdvancedSection>
  );
}

function TogetherAiModelSelection({ settings, apiKey }) {
  const { t } = useTranslation();
  const [groupedModels, setGroupedModels] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    async function findCustomModels() {
      if (!apiKey) return;
      setLoading(true);
      try {
        const key = apiKey === SECRET_MASK ? null : apiKey;
        const { models, error } = await System.customModels("togetherai", key);
        if (models?.length > 0) {
          const modelsByOrganization = models.reduce((acc, model) => {
            if (model.type !== "chat") return acc; // Only show chat models in dropdown
            const org = model.organization || "Unknown";
            acc[org] = acc[org] || [];
            acc[org].push({
              id: model.id,
              name: model.name || model.id,
              organization: org,
              maxLength: model.maxLength,
            });
            return acc;
          }, {});
          setGroupedModels(modelsByOrganization);
        }
        setError(error || null);
      } catch (error) {
        console.error("Error fetching Together AI models:", error);
        setError(error.message);
      }
      setLoading(false);
    }
    findCustomModels();
  }, [apiKey, attempt]);

  return (
    <ModelSelectField
      name="TogetherAiModelPref"
      label={t("provider-fields.chat-model")}
      status={modelStatus({
        loading,
        error,
        count: Object.keys(groupedModels).length,
        needs: apiKey ? null : "need-key",
      })}
      error={error}
      onRetry={() => setAttempt((n) => n + 1)}
      defaultValue={settings?.TogetherAiModelPref}
    >
      {Object.keys(groupedModels)
        .sort()
        .map((organization) => (
          <optgroup key={organization} label={organization}>
            {groupedModels[organization].map((model) => (
              <option key={model.id} value={model.id}>
                {model.name}
              </option>
            ))}
          </optgroup>
        ))}
    </ModelSelectField>
  );
}
