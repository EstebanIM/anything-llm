import { useId } from "react";
import { useTranslation } from "react-i18next";
import Toggle from "@/components/lib/Toggle";
import {
  FIELD_HELP,
  FIELD_LABEL,
  FIELD_SELECT,
} from "@/components/ProviderFields";
import VariableInput from "../../VariableInput";
import VariableSelect from "../../VariableSelect";

const CAPTURE_OPTIONS = [
  { value: "text", labelKey: "agent-builder.scraping.capture-text" },
  { value: "html", labelKey: "agent-builder.scraping.capture-html" },
  {
    value: "querySelector",
    labelKey: "agent-builder.scraping.capture-selector",
  },
];

export default function WebScrapingNode({ config, onConfigChange }) {
  const { t } = useTranslation();
  const urlId = useId();
  const captureId = useId();
  const selectorId = useId();
  const selectorHelpId = useId();
  const summarizeHelpId = useId();
  const urlLabel = t("agent-builder.scraping.url");
  const selectorLabel = t("agent-builder.scraping.selector");

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor={urlId} className={FIELD_LABEL}>
          {urlLabel}
        </label>
        <VariableInput
          id={urlId}
          label={urlLabel}
          value={config?.url || ""}
          onChange={(e) => onConfigChange({ ...config, url: e.target.value })}
          placeholder="https://example.com"
        />
      </div>

      <div>
        <label htmlFor={captureId} className={FIELD_LABEL}>
          {t("agent-builder.scraping.capture")}
        </label>
        <select
          id={captureId}
          value={config.captureAs}
          onChange={(e) =>
            onConfigChange({ ...config, captureAs: e.target.value })
          }
          className={FIELD_SELECT}
        >
          {CAPTURE_OPTIONS.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className="bg-theme-bg-primary"
            >
              {t(option.labelKey)}
            </option>
          ))}
        </select>
      </div>

      {config.captureAs === "querySelector" && (
        <div>
          <label htmlFor={selectorId} className={FIELD_LABEL}>
            {selectorLabel}
          </label>
          <VariableInput
            id={selectorId}
            label={selectorLabel}
            describedBy={selectorHelpId}
            value={config.querySelector}
            onChange={(e) =>
              onConfigChange({ ...config, querySelector: e.target.value })
            }
            placeholder=".article-content"
          />
          <p id={selectorHelpId} className={FIELD_HELP}>
            {t("agent-builder.scraping.selector-help")}
          </p>
        </div>
      )}

      <div>
        <Toggle
          size="md"
          variant="horizontal"
          label={t("agent-builder.scraping.summarize")}
          describedBy={summarizeHelpId}
          enabled={config.enableSummarization ?? true}
          onChange={(checked) =>
            onConfigChange({ ...config, enableSummarization: checked })
          }
        />
        <p id={summarizeHelpId} className={FIELD_HELP}>
          {t("agent-builder.scraping.summarize-help")}
        </p>
      </div>

      <VariableSelect
        label={t("agent-builder.result-variable")}
        value={config.resultVariable}
        onChange={(value) =>
          onConfigChange({ ...config, resultVariable: value })
        }
      />
    </div>
  );
}
