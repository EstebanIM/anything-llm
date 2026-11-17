import { useTranslation } from "react-i18next";
import System from "@/models/system";
import ConnectorForm from "../../components/ConnectorForm";
import useConnectorSubmit from "../../components/useConnectorSubmit";
import {
  Notice,
  TextField,
  TokenField,
  folderName,
} from "../../components/fields";

export default function PaperlessNgxOptions() {
  const { t } = useTranslation();
  const { busy, outcome, collect } = useConnectorSubmit({
    pending: t("data-connectors.paperless-ngx.fetching"),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    collect(e.currentTarget, async (form) => {
      const { data, error } = await System.dataConnectors.paperlessNgx.collect({
        baseUrl: form.get("baseUrl"),
        apiToken: form.get("apiToken"),
      });
      if (error) return { error };
      return {
        message: t("data-connectors.paperless-ngx.success", {
          count: data.files,
          folder: folderName(data.destination),
        }),
      };
    });
  };

  return (
    <ConnectorForm
      onSubmit={handleSubmit}
      busy={busy}
      outcome={outcome}
      submitLabel={t("data-connectors.submit.documents")}
      busyLabel={t("data-connectors.submit.documents-busy")}
      taskExplained={t("data-connectors.paperless-ngx.task-explained")}
      notice={<Notice>{t("data-connectors.paperless-ngx.notice")}</Notice>}
    >
      <TextField
        type="url"
        name="baseUrl"
        label={t("data-connectors.paperless-ngx.base-url")}
        help={t("data-connectors.paperless-ngx.base-url-help")}
        placeholder="http://localhost:8000"
        required={true}
      />
      <TokenField
        name="apiToken"
        label={t("data-connectors.paperless-ngx.token")}
        help={t("data-connectors.paperless-ngx.token-help")}
        required={true}
      />
    </ConnectorForm>
  );
}
