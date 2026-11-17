import { useState, useEffect, useId } from "react";
import { useTranslation } from "react-i18next";
import System from "@/models/system";
import {
  FIELD_COL,
  FIELD_ROW,
  SECRET_MASK,
  SecretInput,
} from "@/components/ProviderFields";
import {
  FieldLabel,
  ModelSelectField,
  modelStatus,
} from "@/components/LLMSelection/FormParts";

export default function FireworksAiOptions({ settings }) {
  const { t } = useTranslation();
  const id = useId();
  const [inputValue, setInputValue] = useState(settings?.FireworksAiLLMApiKey);
  const [fireworksAiApiKey, setFireworksAiApiKey] = useState(
    settings?.FireworksAiLLMApiKey
  );

  return (
    <div className={`${FIELD_ROW} mt-1.5`}>
      <div className={FIELD_COL}>
        <FieldLabel
          htmlFor={`${id}-key`}
          label={t("provider-fields.api-key")}
        />
        <SecretInput
          id={`${id}-key`}
          name="FireworksAiLLMApiKey"
          defaultValue={settings?.FireworksAiLLMApiKey ? SECRET_MASK : ""}
          required={true}
          onChange={(e) => setInputValue(e.target.value)}
          onBlur={() => setFireworksAiApiKey(inputValue)}
        />
      </div>
      {!settings?.credentialsOnly && (
        <FireworksAiModelSelection
          apiKey={fireworksAiApiKey}
          settings={settings}
        />
      )}
    </div>
  );
}

function FireworksAiModelSelection({ apiKey, settings }) {
  const { t } = useTranslation();
  const [groupedModels, setGroupedModels] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    async function findCustomModels() {
      if (!apiKey) return;
      setLoading(true);
      const { models, error } = await System.customModels(
        "fireworksai",
        apiKey
      );

      if (models?.length > 0) {
        const modelsByOrganization = models.reduce((acc, model) => {
          acc[model.organization] = acc[model.organization] || [];
          acc[model.organization].push(model);
          return acc;
        }, {});

        setGroupedModels(modelsByOrganization);
      }

      setError(error || null);
      setLoading(false);
    }
    findCustomModels();
  }, [apiKey, attempt]);

  return (
    <ModelSelectField
      name="FireworksAiLLMModelPref"
      label={t("provider-fields.chat-model")}
      status={modelStatus({
        loading,
        error,
        count: Object.keys(groupedModels).length,
        needs: apiKey ? null : "need-key",
      })}
      error={error}
      onRetry={() => setAttempt((n) => n + 1)}
      defaultValue={settings?.FireworksAiLLMModelPref}
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
