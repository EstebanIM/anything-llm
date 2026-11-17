/**
 * Copyright 2024
 *
 * Authors:
 *  - Eugen Mayer (KontextWork)
 */

import { Trans, useTranslation } from "react-i18next";
import System from "@/models/system";
import { ExternalLink } from "@/components/ProviderFields";
import ConnectorForm from "../../components/ConnectorForm";
import useConnectorSubmit from "../../components/useConnectorSubmit";
import { TextField, TokenField, folderName } from "../../components/fields";

const link = (href) => <ExternalLink href={href} className="underline" />;

export default function DrupalWikiOptions() {
  const { t } = useTranslation();
  const { busy, outcome, collect } = useConnectorSubmit({
    pending: t("data-connectors.drupalwiki.fetching"),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    collect(e.currentTarget, async (form) => {
      const { data, error } = await System.dataConnectors.drupalwiki.collect({
        baseUrl: form.get("baseUrl"),
        spaceIds: form.get("spaceIds"),
        accessToken: form.get("accessToken"),
      });
      if (error) return { error };
      return {
        message: t("data-connectors.drupalwiki.success", {
          spaces: data.spaceIds,
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
      submitLabel={t("data-connectors.submit.pages")}
      busyLabel={t("data-connectors.submit.pages-busy")}
      taskExplained={t("data-connectors.drupalwiki.task-explained")}
    >
      <TextField
        type="url"
        name="baseUrl"
        label={t("data-connectors.drupalwiki.base-url")}
        help={
          <Trans
            i18nKey="data-connectors.drupalwiki.base-url-help"
            components={{ anchor: link("https://drupal-wiki.com") }}
          />
        }
        placeholder="https://mywiki.drupal-wiki.net"
        required={true}
      />
      <TextField
        type="text"
        name="spaceIds"
        label={t("data-connectors.drupalwiki.space-ids")}
        help={
          <Trans
            i18nKey="data-connectors.drupalwiki.space-ids-help"
            components={{
              anchor: link("https://help.drupal-wiki.com/node/606"),
            }}
          />
        }
        placeholder="12,34,69"
        required={true}
      />
      <TokenField
        name="accessToken"
        label={t("data-connectors.drupalwiki.token")}
        help={t("data-connectors.drupalwiki.token-help")}
        tip={
          <p>
            <Trans
              i18nKey="data-connectors.drupalwiki.token-tip"
              components={{
                anchor: link(
                  "https://help.drupal-wiki.com/node/605#2-Zugriffs-Token-generieren"
                ),
              }}
            />
          </p>
        }
        placeholder="pat:123"
        required={true}
      />
    </ConnectorForm>
  );
}
