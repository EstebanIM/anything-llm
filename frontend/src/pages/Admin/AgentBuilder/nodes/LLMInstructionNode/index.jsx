import { useId } from "react";
import { useTranslation } from "react-i18next";
import { FIELD_LABEL } from "@/components/ProviderFields";
import VariableInput from "../../VariableInput";
import VariableSelect from "../../VariableSelect";

export default function LLMInstructionNode({ config, onConfigChange }) {
  const { t } = useTranslation();
  const instructionId = useId();
  const instructionLabel = t("agent-builder.llm.instruction");

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor={instructionId} className={FIELD_LABEL}>
          {instructionLabel}
        </label>
        <VariableInput
          id={instructionId}
          label={instructionLabel}
          multiline
          rows={3}
          value={config?.instruction || ""}
          onChange={(e) =>
            onConfigChange({ ...config, instruction: e.target.value })
          }
          placeholder={t("agent-builder.llm.instruction-placeholder")}
        />
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
