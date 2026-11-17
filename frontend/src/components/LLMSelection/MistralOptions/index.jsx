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

export default function MistralOptions({ settings }) {
  const { t } = useTranslation();
  const id = useId();
  const [inputValue, setInputValue] = useState(settings?.MistralApiKey);
  const [mistralKey, setMistralKey] = useState(settings?.MistralApiKey);

  return (
    <div className={`${FIELD_ROW} mt-1.5`}>
      <div className={FIELD_COL}>
        <FieldLabel
          htmlFor={`${id}-key`}
          label={t("provider-fields.api-key")}
        />
        <SecretInput
          id={`${id}-key`}
          name="MistralApiKey"
          defaultValue={settings?.MistralApiKey ? SECRET_MASK : ""}
          required={true}
          onChange={(e) => setInputValue(e.target.value)}
          onBlur={() => setMistralKey(inputValue)}
        />
      </div>
      {!settings?.credentialsOnly && (
        <MistralModelSelection settings={settings} apiKey={mistralKey} />
      )}
    </div>
  );
}

function MistralModelSelection({ apiKey, settings }) {
  const { t } = useTranslation();
  const [customModels, setCustomModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    async function findCustomModels() {
      if (!apiKey) {
        setCustomModels([]);
        setLoading(false);
        return;
      }
      setLoading(true);
      const { models, error } = await System.customModels(
        "mistral",
        typeof apiKey === "boolean" ? null : apiKey
      );
      // Aliases are not listed, so a saved alias is kept as its own option.
      const savedModel = settings?.MistralModelPref;
      const listed = models || [];
      setCustomModels(
        savedModel &&
          listed.length > 0 &&
          !listed.some((model) => model.id === savedModel)
          ? [{ id: savedModel, name: savedModel }, ...listed]
          : listed
      );
      setError(error || null);
      setLoading(false);
    }
    findCustomModels();
  }, [apiKey, attempt]);

  return (
    <ModelSelectField
      name="MistralModelPref"
      label={t("provider-fields.chat-model")}
      status={modelStatus({
        loading,
        error,
        count: customModels.length,
        needs: apiKey ? null : "need-key",
      })}
      error={error}
      onRetry={() => setAttempt((n) => n + 1)}
      defaultValue={settings?.MistralModelPref}
    >
      <optgroup label={t("llm-fields.common.available-models")}>
        {customModels.map((model) => (
          <option key={model.id} value={model.id}>
            {model.id}
          </option>
        ))}
      </optgroup>
    </ModelSelectField>
  );
}
