import { useEffect, useId, useState } from "react";
import { useTranslation } from "react-i18next";
import System from "@/models/system";
import { FIELD_COL, FIELD_INPUT, FIELD_ROW } from "@/components/ProviderFields";
import {
  ExternalLink,
  FieldLabel,
  ModelSelectField,
  modelStatus,
} from "@/components/LLMSelection/FormParts";

export default function PrivateModeOptions({ settings }) {
  const { t } = useTranslation();
  const id = useId();
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(!!settings?.PrivateModeBasePath);
  const [error, setError] = useState(null);
  const [attempt, setAttempt] = useState(0);
  const [basePath, setBasePath] = useState(settings?.PrivateModeBasePath);
  const [model, setModel] = useState(settings?.PrivateModeModelPref || "");

  useEffect(() => {
    setModel(settings?.PrivateModeModelPref || "");
  }, [settings?.PrivateModeModelPref]);

  useEffect(() => {
    async function fetchModels() {
      if (!basePath) {
        setModels([]);
        setError(null);
        setLoading(false);
        return;
      }
      try {
        setLoading(true);
        const { models, error } = await System.customModels(
          "privatemode",
          null,
          basePath
        );
        if (error) throw new Error(error);
        setModels(models);
        setError(null);
      } catch (error) {
        console.error("Error fetching Private Mode models:", error);
        setModels([]);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchModels();
  }, [basePath, attempt]);

  return (
    <div className="flex flex-col gap-y-7">
      <div className={`${FIELD_ROW} mt-1.5`}>
        <div className={FIELD_COL}>
          <FieldLabel
            htmlFor={`${id}-url`}
            label={t("llm-fields.privatemode.proxy-url")}
            tipClickable={true}
            tip={
              <>
                {t("llm-fields.common.base-url-tip", {
                  provider: "Privatemode Proxy",
                })}
                <br />
                <br />
                <ExternalLink
                  href="https://docs.privatemode.ai/quickstart#2-run-the-proxy"
                  className="underline"
                >
                  {t("llm-fields.common.learn-more")}
                </ExternalLink>
              </>
            }
          />
          <input
            id={`${id}-url`}
            type="url"
            name="PrivateModeBasePath"
            className={FIELD_INPUT}
            placeholder="http://127.0.0.1:8080"
            defaultValue={settings?.PrivateModeBasePath}
            required={true}
            autoComplete="off"
            spellCheck={false}
            onChange={(e) => setBasePath(e.target.value)}
          />
        </div>
        <ModelSelectField
          name="PrivateModeModelPref"
          label={t("provider-fields.chat-model")}
          status={modelStatus({
            loading,
            error,
            count: models.length,
            needs: basePath ? null : "need-url",
          })}
          error={error}
          onRetry={() => setAttempt((n) => n + 1)}
          value={model}
          onChange={(e) => setModel(e.target.value)}
        >
          <option value="">{t("llm-fields.common.select-model")}</option>
          {models.map((model) => (
            <option key={model.id} value={model.id}>
              {model.name}
            </option>
          ))}
        </ModelSelectField>
      </div>
    </div>
  );
}
