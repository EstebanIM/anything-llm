import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FIELD_SELECT } from "@/components/ProviderFields";
import SettingsField from "../../components/SettingsField";

// We dont support all vectorDBs yet for reranking due to complexities of how each provider
// returns information. We need to normalize the response data so Reranker can be used for each provider.
const supportedVectorDBs = ["lancedb"];
const SEARCH_MODES = ["default", "rerank"];

export default function VectorSearchMode({ workspace }) {
  const { t } = useTranslation();
  const [selection, setSelection] = useState(
    workspace?.vectorSearchMode ?? "default"
  );
  if (!workspace?.vectorDB || !supportedVectorDBs.includes(workspace?.vectorDB))
    return null;

  return (
    <SettingsField
      name="vectorSearchMode"
      label={t("workspace-settings.search-mode.title")}
      help={t(`workspace-settings.search-mode.${selection}-description`)}
    >
      {(control) => (
        <select
          {...control}
          name="vectorSearchMode"
          value={selection}
          className={FIELD_SELECT}
          onChange={(e) => setSelection(e.target.value)}
          required={true}
        >
          {SEARCH_MODES.map((mode) => (
            <option key={mode} value={mode}>
              {t(`workspace-settings.search-mode.${mode}`)}
            </option>
          ))}
        </select>
      )}
    </SettingsField>
  );
}
