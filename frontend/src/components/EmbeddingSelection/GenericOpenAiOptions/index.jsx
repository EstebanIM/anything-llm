import { useId } from "react";
import { useTranslation } from "react-i18next";
import {
  AdvancedSection,
  FIELD_COL,
  FIELD_HELP,
  FIELD_INPUT,
  FIELD_LABEL,
  FIELD_ROW,
  InfoTip,
  SECRET_MASK,
  SecretInput,
} from "@/components/ProviderFields";

export default function GenericOpenAiEmbeddingOptions({ settings }) {
  const { t } = useTranslation();
  const id = useId();
  const optional = (
    <span className="font-normal text-theme-text-secondary">
      ({t("provider-fields.optional")})
    </span>
  );

  return (
    <div className="w-full flex flex-col gap-y-7">
      <div className={`${FIELD_ROW} mt-1.5`}>
        <div className={FIELD_COL}>
          <label htmlFor={`${id}-base-url`} className={FIELD_LABEL}>
            {t("provider-fields.base-url")}
          </label>
          <input
            id={`${id}-base-url`}
            type="url"
            name="EmbeddingBasePath"
            className={FIELD_INPUT}
            placeholder="https://api.openai.com/v1"
            defaultValue={settings?.EmbeddingBasePath}
            required={true}
            autoComplete="off"
            spellCheck={false}
          />
        </div>
        <div className={FIELD_COL}>
          <label htmlFor={`${id}-model`} className={FIELD_LABEL}>
            {t("provider-fields.embedding-model")}
          </label>
          <input
            id={`${id}-model`}
            type="text"
            name="EmbeddingModelPref"
            className={FIELD_INPUT}
            placeholder="text-embedding-ada-002"
            defaultValue={settings?.EmbeddingModelPref}
            required={true}
            autoComplete="off"
            spellCheck={false}
          />
        </div>
        <div className={FIELD_COL}>
          <label htmlFor={`${id}-chunk`} className={FIELD_LABEL}>
            {t("provider-fields.max-chunk-length")}
          </label>
          <input
            id={`${id}-chunk`}
            type="number"
            name="EmbeddingModelMaxChunkLength"
            className={FIELD_INPUT}
            placeholder="8192"
            min={1}
            step={1}
            onWheel={(e) => e.currentTarget.blur()}
            defaultValue={settings?.EmbeddingModelMaxChunkLength}
            required={false}
            autoComplete="off"
            aria-describedby={`${id}-chunk-help`}
          />
          <p id={`${id}-chunk-help`} className={FIELD_HELP}>
            {t("provider-forms.embedding.max-chunk-length-help")}
          </p>
        </div>
      </div>
      <div className={FIELD_ROW}>
        <div className={FIELD_COL}>
          <label htmlFor={`${id}-api-key`} className={FIELD_LABEL}>
            {t("provider-fields.api-key")} {optional}
          </label>
          <SecretInput
            id={`${id}-api-key`}
            name="GenericOpenAiEmbeddingApiKey"
            placeholder="sk-mysecretkey"
            defaultValue={
              settings?.GenericOpenAiEmbeddingApiKey ? SECRET_MASK : ""
            }
          />
        </div>
      </div>
      <AdvancedSection>
        <div className={`${FIELD_ROW} mt-4`}>
          <div className={FIELD_COL}>
            <label htmlFor={`${id}-concurrent`} className={FIELD_LABEL}>
              {t("provider-forms.embedding.generic-openai.max-concurrent")}{" "}
              {optional}
            </label>
            <input
              id={`${id}-concurrent`}
              type="number"
              name="GenericOpenAiEmbeddingMaxConcurrentChunks"
              className={FIELD_INPUT}
              placeholder="500"
              min={1}
              step={1}
              onWheel={(e) => e.currentTarget.blur()}
              defaultValue={settings?.GenericOpenAiEmbeddingMaxConcurrentChunks}
              required={false}
              autoComplete="off"
              spellCheck={false}
            />
          </div>
          <div className={FIELD_COL}>
            <div className="flex items-center gap-x-1 mb-3">
              <label
                htmlFor={`${id}-passage-prefix`}
                className="text-white text-sm font-semibold"
              >
                {t("provider-forms.embedding.generic-openai.passage-prefix")}
              </label>
              <InfoTip
                label={t(
                  "provider-forms.embedding.generic-openai.passage-prefix"
                )}
              >
                <p>
                  {t(
                    "provider-forms.embedding.generic-openai.passage-prefix-help"
                  )}
                </p>
                <p className="mt-2">
                  {t("provider-forms.embedding.generic-openai.prefix-note")}
                </p>
              </InfoTip>
            </div>
            <input
              id={`${id}-passage-prefix`}
              type="text"
              name="GenericOpenAiEmbeddingPassagePrefix"
              className={FIELD_INPUT}
              placeholder="passage: "
              defaultValue={settings?.GenericOpenAiEmbeddingPassagePrefix}
              required={false}
              autoComplete="off"
              spellCheck={false}
            />
          </div>
          <div className={FIELD_COL}>
            <div className="flex items-center gap-x-1 mb-3">
              <label
                htmlFor={`${id}-query-prefix`}
                className="text-white text-sm font-semibold"
              >
                {t("provider-forms.embedding.generic-openai.query-prefix")}
              </label>
              <InfoTip
                label={t(
                  "provider-forms.embedding.generic-openai.query-prefix"
                )}
              >
                <p>
                  {t(
                    "provider-forms.embedding.generic-openai.query-prefix-help"
                  )}
                </p>
                <p className="mt-2">
                  {t("provider-forms.embedding.generic-openai.prefix-note")}
                </p>
              </InfoTip>
            </div>
            <input
              id={`${id}-query-prefix`}
              type="text"
              name="GenericOpenAiEmbeddingQueryPrefix"
              className={FIELD_INPUT}
              placeholder="query: "
              defaultValue={settings?.GenericOpenAiEmbeddingQueryPrefix}
              required={false}
              autoComplete="off"
              spellCheck={false}
            />
          </div>
        </div>
      </AdvancedSection>
    </div>
  );
}
