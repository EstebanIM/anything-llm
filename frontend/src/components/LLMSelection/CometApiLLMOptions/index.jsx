import { useState, useEffect, useId } from "react";
import { useTranslation } from "react-i18next";
import System from "@/models/system";
import {
  AdvancedSection,
  FIELD_COL,
  FIELD_ERROR,
  FIELD_HELP,
  FIELD_INPUT,
  FIELD_ROW,
  ModelsErrorText,
  SECRET_MASK,
  SecretInput,
} from "@/components/ProviderFields";
import { FieldLabel, blurOnWheel } from "@/components/LLMSelection/FormParts";

export default function CometApiLLMOptions({ settings }) {
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
            name="CometApiLLMApiKey"
            defaultValue={settings?.CometApiLLMApiKey ? SECRET_MASK : ""}
            required={true}
          />
        </div>
        {!settings?.credentialsOnly && (
          <CometApiModelSelection settings={settings} />
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
          name="CometApiLLMTimeout"
          className={FIELD_INPUT}
          aria-describedby={`${id}-timeout-help`}
          defaultValue={settings?.CometApiLLMTimeout ?? 3_000}
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

function CometApiModelSelection({ settings }) {
  // TODO: For now, CometAPI models list is noisy; show a flat, deduped list without grouping.
  // Revisit after CometAPI model list API provides better categorization/metadata.
  const { t } = useTranslation();
  const id = useId();
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function findCustomModels() {
      setLoading(true);
      const { models: fetched = [], error } =
        await System.customModels("cometapi");
      if (fetched?.length > 0) {
        // De-duplicate by id (case-insensitive) and sort by name for readability
        const seen = new Set();
        const unique = [];
        for (const m of fetched) {
          const key = String(m.id || m.name || "").toLowerCase();
          if (!seen.has(key)) {
            seen.add(key);
            unique.push(m);
          }
        }
        unique.sort((a, b) =>
          String(a.name || a.id).localeCompare(String(b.name || b.id))
        );
        setModels(unique);
      } else {
        setModels([]);
      }
      setError(error || null);
      setLoading(false);
    }
    findCustomModels();
  }, []);

  // The field takes any model id, so it stays usable when the suggestion list
  // is empty or failed to load; only the initial load disables it.
  return (
    <div className={FIELD_COL}>
      <FieldLabel
        htmlFor={`${id}-model`}
        label={t("provider-fields.chat-model")}
      />
      <input
        id={`${id}-model`}
        type="text"
        name="CometApiLLMModelPref"
        list={`${id}-models-list`}
        required={true}
        disabled={loading}
        aria-busy={loading || undefined}
        aria-describedby={`${error ? `${id}-model-error ` : ""}${id}-model-help`}
        className={FIELD_INPUT}
        placeholder={
          loading
            ? t("provider-fields.models-loading")
            : t("llm-fields.cometapi.model-placeholder")
        }
        defaultValue={settings?.CometApiLLMModelPref || ""}
        autoComplete="off"
        spellCheck={false}
      />
      <datalist id={`${id}-models-list`}>
        {models.map((model) => (
          <option key={model.id} value={model.id}>
            {model.name}
          </option>
        ))}
      </datalist>
      {error && (
        <p id={`${id}-model-error`} role="alert" className={FIELD_ERROR}>
          <ModelsErrorText error={error} />
        </p>
      )}
      <p id={`${id}-model-help`} className={FIELD_HELP}>
        {t("llm-fields.cometapi.model-help")}
      </p>
    </div>
  );
}
