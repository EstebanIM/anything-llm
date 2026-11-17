import { useState, useEffect, useId } from "react";
import { useTranslation } from "react-i18next";
import System from "@/models/system";
import {
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

export default function GiteeAIOptions({ settings }) {
  const { t } = useTranslation();
  const id = useId();

  return (
    <div className={`${FIELD_ROW} mt-1.5`}>
      <div className={FIELD_COL}>
        <FieldLabel
          htmlFor={`${id}-key`}
          label={t("provider-fields.api-key")}
        />
        <SecretInput
          id={`${id}-key`}
          name="GiteeAIApiKey"
          defaultValue={settings?.GiteeAIApiKey ? SECRET_MASK : ""}
          required={true}
        />
      </div>
      {!settings?.credentialsOnly && (
        <>
          <GiteeAIModelSelection settings={settings} />
          <div className={FIELD_COL}>
            <FieldLabel
              htmlFor={`${id}-context`}
              label={t("provider-fields.context-window")}
            />
            <input
              id={`${id}-context`}
              type="number"
              name="GiteeAITokenLimit"
              className={FIELD_INPUT}
              placeholder={t("llm-fields.common.context-window-placeholder", {
                example: 8192,
              })}
              min={1}
              onWheel={blurOnWheel}
              defaultValue={settings?.GiteeAITokenLimit}
              required={true}
              autoComplete="off"
            />
          </div>
        </>
      )}
    </div>
  );
}

function GiteeAIModelSelection({ settings }) {
  const { t } = useTranslation();
  const [groupedModels, setGroupedModels] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    async function findCustomModels() {
      setLoading(true);
      const { models = [], error } = await System.customModels("giteeai");
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
  }, [attempt]);

  return (
    <ModelSelectField
      name="GiteeAIModelPref"
      label={t("provider-fields.chat-model")}
      status={modelStatus({
        loading,
        error,
        count: Object.keys(groupedModels).length,
      })}
      error={error}
      onRetry={() => setAttempt((n) => n + 1)}
      defaultValue={settings?.GiteeAIModelPref}
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
