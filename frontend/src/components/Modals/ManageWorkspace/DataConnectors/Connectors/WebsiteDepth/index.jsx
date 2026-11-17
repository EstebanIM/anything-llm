import { useTranslation } from "react-i18next";
import System from "@/models/system";
import { FIELD_COL, FIELD_ROW, blurOnWheel } from "@/components/ProviderFields";
import ConnectorForm from "../../components/ConnectorForm";
import useConnectorSubmit from "../../components/useConnectorSubmit";
import { TextField } from "../../components/fields";

export default function WebsiteDepthOptions() {
  const { t } = useTranslation();
  const { busy, outcome, collect } = useConnectorSubmit({
    pending: t("data-connectors.website-depth.fetching"),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    collect(e.currentTarget, async (form) => {
      const { data, error } = await System.dataConnectors.websiteDepth.scrape({
        url: form.get("url"),
        depth: parseInt(form.get("depth")),
        maxLinks: parseInt(form.get("maxLinks")),
      });
      if (error) return { error };
      return {
        message: t("data-connectors.website-depth.success", {
          count: data.length,
        }),
      };
    });
  };

  return (
    <ConnectorForm
      onSubmit={handleSubmit}
      busy={busy}
      outcome={outcome}
      submitLabel={t("data-connectors.submit.website")}
      busyLabel={t("data-connectors.submit.website-busy")}
      taskExplained={t("connectors.website-depth.task_explained")}
    >
      <TextField
        type="url"
        name="url"
        label={t("connectors.website-depth.URL")}
        help={t("connectors.website-depth.URL_explained")}
        placeholder="https://example.com"
        required={true}
      />
      <div className={FIELD_ROW}>
        <TextField
          type="number"
          name="depth"
          className={FIELD_COL}
          label={t("connectors.website-depth.depth")}
          help={t("connectors.website-depth.depth_explained")}
          min="1"
          max="5"
          step="1"
          inputMode="numeric"
          defaultValue="1"
          required={true}
          onWheel={blurOnWheel}
        />
        <TextField
          type="number"
          name="maxLinks"
          className={FIELD_COL}
          label={t("connectors.website-depth.max_pages")}
          help={t("connectors.website-depth.max_pages_explained")}
          min="1"
          step="1"
          inputMode="numeric"
          defaultValue="20"
          required={true}
          onWheel={blurOnWheel}
        />
      </div>
    </ConnectorForm>
  );
}
