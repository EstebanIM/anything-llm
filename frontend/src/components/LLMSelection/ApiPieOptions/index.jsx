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

export default function ApiPieLLMOptions({ settings }) {
  const { t } = useTranslation();
  const id = useId();

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
            name="ApipieLLMApiKey"
            defaultValue={settings?.ApipieLLMApiKey ? SECRET_MASK : ""}
            required={true}
          />
        </div>
        {!settings?.credentialsOnly && (
          <APIPieModelSelection settings={settings} />
        )}
      </div>
    </div>
  );
}

function APIPieModelSelection({ settings }) {
  const { t } = useTranslation();
  const [groupedModels, setGroupedModels] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    async function findCustomModels() {
      setLoading(true);
      const { models, error } = await System.customModels("apipie");
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
      name="ApipieLLMModelPref"
      label={t("provider-fields.chat-model")}
      status={modelStatus({
        loading,
        error,
        count: Object.keys(groupedModels).length,
      })}
      error={error}
      onRetry={() => setAttempt((n) => n + 1)}
      defaultValue={settings?.ApipieLLMModelPref}
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
