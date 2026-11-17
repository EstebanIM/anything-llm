import { useState, useEffect, useId } from "react";
import { useTranslation } from "react-i18next";
import System from "@/models/system";
import {
  AdvancedSection,
  FIELD_COL,
  FIELD_HELP,
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

export default function NovitaLLMOptions({ settings }) {
  const { t } = useTranslation();
  const id = useId();

  return (
    <div className="w-full flex flex-col gap-y-7">
      <div className={`${FIELD_ROW} mt-1.5`}>
        <div className={FIELD_COL}>
          <FieldLabel
            htmlFor={`${id}-key`}
            label={t("provider-fields.api-key")}
          />
          <SecretInput
            id={`${id}-key`}
            name="NovitaLLMApiKey"
            defaultValue={settings?.NovitaLLMApiKey ? SECRET_MASK : ""}
            required={true}
          />
        </div>
        {!settings?.credentialsOnly && (
          <NovitaModelSelection settings={settings} />
        )}
      </div>
      <AdvancedControls settings={settings} />
    </div>
  );
}

function AdvancedControls({ settings }) {
  const { t } = useTranslation();
  const id = useId();

  return (
    <AdvancedSection>
      <div className={`${FIELD_COL} mt-4`}>
        <FieldLabel
          htmlFor={`${id}-timeout`}
          label={t("provider-fields.timeout-ms")}
        />
        <input
          id={`${id}-timeout`}
          type="number"
          name="NovitaLLMTimeout"
          className={FIELD_INPUT}
          aria-describedby={`${id}-timeout-help`}
          defaultValue={settings?.NovitaLLMTimeout ?? 3_000}
          autoComplete="off"
          onWheel={blurOnWheel}
          min={500}
          max={600_000}
          step={1}
        />
        <p id={`${id}-timeout-help`} className={FIELD_HELP}>
          {t("llm-fields.common.stream-timeout-help")}
        </p>
      </div>
    </AdvancedSection>
  );
}

function NovitaModelSelection({ settings }) {
  const { t } = useTranslation();
  const [groupedModels, setGroupedModels] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    async function findCustomModels() {
      setLoading(true);
      const { models, error } = await System.customModels("novita");
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
      name="NovitaLLMModelPref"
      label={t("provider-fields.chat-model")}
      status={modelStatus({
        loading,
        error,
        count: Object.keys(groupedModels).length,
      })}
      error={error}
      onRetry={() => setAttempt((n) => n + 1)}
      defaultValue={settings?.NovitaLLMModelPref}
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
