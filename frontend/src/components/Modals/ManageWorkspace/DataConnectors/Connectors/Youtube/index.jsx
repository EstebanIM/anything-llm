import { useTranslation } from "react-i18next";
import System from "@/models/system";
import { ExternalLink } from "@/components/ProviderFields";
import ConnectorForm from "../../components/ConnectorForm";
import useConnectorSubmit from "../../components/useConnectorSubmit";
import { TextField, folderName } from "../../components/fields";

export default function YoutubeOptions() {
  const { t } = useTranslation();
  const { busy, outcome, collect } = useConnectorSubmit({
    pending: t("data-connectors.youtube.fetching"),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    collect(e.currentTarget, async (form) => {
      const { data, error } = await System.dataConnectors.youtube.transcribe({
        url: form.get("url"),
      });
      if (error) return { error };
      return {
        message: t("data-connectors.youtube.success", {
          title: data.title,
          author: data.author,
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
      submitLabel={t("data-connectors.submit.transcript")}
      busyLabel={t("data-connectors.submit.transcript-busy")}
      taskExplained={t("connectors.youtube.task_explained")}
    >
      <TextField
        type="url"
        name="url"
        label={t("connectors.youtube.URL")}
        help={
          <>
            {t("connectors.youtube.URL_explained_start")}
            <ExternalLink
              href="https://support.google.com/youtube/answer/6373554"
              className="underline"
            >
              {t("connectors.youtube.URL_explained_link")}
            </ExternalLink>
            {t("connectors.youtube.URL_explained_end")}
          </>
        }
        placeholder="https://youtube.com/watch?v=abc123"
        required={true}
      />
    </ConnectorForm>
  );
}
