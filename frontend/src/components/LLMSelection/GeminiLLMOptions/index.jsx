import { useEffect, useId, useState } from "react";
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

export default function GeminiLLMOptions({ settings }) {
  const { t } = useTranslation();
  const id = useId();
  const [inputValue, setInputValue] = useState(settings?.GeminiLLMApiKey);
  const [geminiApiKey, setGeminiApiKey] = useState(settings?.GeminiLLMApiKey);

  return (
    <div className="w-full flex flex-col">
      <div className={`${FIELD_ROW} mt-1.5`}>
        <div className={FIELD_COL}>
          <FieldLabel
            htmlFor={`${id}-key`}
            label={t("provider-fields.api-key")}
          />
          <SecretInput
            id={`${id}-key`}
            name="GeminiLLMApiKey"
            defaultValue={settings?.GeminiLLMApiKey ? SECRET_MASK : ""}
            required={true}
            onChange={(e) => setInputValue(e.target.value)}
            onBlur={() => setGeminiApiKey(inputValue)}
          />
        </div>

        {!settings?.credentialsOnly && (
          // Safety settings are not offered: the OpenAI-compatible Gemini API
          // used here cannot set the safety threshold.
          <GeminiModelSelection apiKey={geminiApiKey} settings={settings} />
        )}
      </div>
    </div>
  );
}

function GeminiModelSelection({ apiKey, settings }) {
  const { t } = useTranslation();
  const [groupedModels, setGroupedModels] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    async function findCustomModels() {
      if (!apiKey) return;
      setLoading(true);
      const { models, error } = await System.customModels("gemini", apiKey);

      if (models?.length > 0) {
        const modelsByOrganization = models.reduce((acc, model) => {
          acc[model.experimental ? "Experimental" : "Stable"] =
            acc[model.experimental ? "Experimental" : "Stable"] || [];
          acc[model.experimental ? "Experimental" : "Stable"].push(model);
          return acc;
        }, {});
        setGroupedModels(modelsByOrganization);
      }
      setError(error || null);
      setLoading(false);
    }
    findCustomModels();
  }, [apiKey, attempt]);

  const groupLabels = {
    Stable: t("llm-fields.gemini.stable"),
    Experimental: t("llm-fields.gemini.experimental"),
  };

  return (
    <ModelSelectField
      name="GeminiLLMModelPref"
      label={t("provider-fields.chat-model")}
      status={modelStatus({
        loading,
        error,
        count: Object.keys(groupedModels).length,
        needs: apiKey ? null : "need-key",
      })}
      error={error}
      onRetry={() => setAttempt((n) => n + 1)}
      defaultValue={settings?.GeminiLLMModelPref}
    >
      {Object.keys(groupedModels)
        .sort((a, b) => {
          if (a === "Stable") return -1;
          if (b === "Stable") return 1;
          return a.localeCompare(b);
        })
        .map((organization) => (
          <optgroup
            key={organization}
            label={groupLabels[organization] ?? organization}
          >
            {groupedModels[organization].map((model) => (
              <option key={model.id} value={model.id}>
                {model.id}
              </option>
            ))}
          </optgroup>
        ))}
    </ModelSelectField>
  );
}
