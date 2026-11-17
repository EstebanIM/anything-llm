import { useId, useState } from "react";
import { useTranslation } from "react-i18next";
import { TriangleAlert } from "lucide-react";
import System from "@/models/system";
import Toggle from "@/components/lib/Toggle";
import { ExternalLink, FIELD_HELP } from "@/components/ProviderFields";
import ConnectorForm from "../../components/ConnectorForm";
import useConnectorSubmit from "../../components/useConnectorSubmit";
import {
  SelectField,
  TextField,
  TokenField,
  folderName,
} from "../../components/fields";

export default function ConfluenceOptions() {
  const { t } = useTranslation();
  const [accessType, setAccessType] = useState("username");
  const [isCloud, setIsCloud] = useState(true);
  const { busy, outcome, collect } = useConnectorSubmit({
    pending: t("data-connectors.confluence.fetching"),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    collect(e.currentTarget, async (form) => {
      const { data, error } = await System.dataConnectors.confluence.collect({
        baseUrl: form.get("baseUrl"),
        spaceKey: form.get("spaceKey"),
        username: form.get("username"),
        accessToken: form.get("accessToken"),
        cloud: form.get("isCloud") === "true",
        personalAccessToken: form.get("personalAccessToken"),
        bypassSSL: form.get("bypassSSL") === "true",
      });
      if (error) return { error };
      return {
        message: t("data-connectors.confluence.success", {
          space: data.spaceKey,
          folder: folderName(data.destination),
        }),
      };
    });
  };

  const handleReset = () => {
    setAccessType("username");
    setIsCloud(true);
  };

  return (
    <ConnectorForm
      onSubmit={handleSubmit}
      onReset={handleReset}
      busy={busy}
      outcome={outcome}
      submitLabel={t("data-connectors.submit.pages")}
      busyLabel={t("data-connectors.submit.pages-busy")}
      taskExplained={t("connectors.confluence.task_explained")}
    >
      <SelectField
        name="isCloud"
        label={t("connectors.confluence.deployment_type")}
        help={t("connectors.confluence.deployment_type_explained")}
        required={true}
        defaultValue="true"
        onChange={(e) => setIsCloud(e.target.value === "true")}
      >
        <option value="true">Atlassian Cloud</option>
        <option value="false">
          {t("data-connectors.confluence.self-hosted")}
        </option>
      </SelectField>
      <TextField
        type="url"
        name="baseUrl"
        label={t("connectors.confluence.base_url")}
        help={t("connectors.confluence.base_url_explained")}
        placeholder={
          isCloud ? "https://example.atlassian.net" : "http://localhost:8211"
        }
        required={true}
      />
      <TextField
        type="text"
        name="spaceKey"
        label={t("connectors.confluence.space_key")}
        help={t("connectors.confluence.space_key_explained")}
        placeholder="~7120208c08555d52224113949698b933a3bb56"
        required={true}
      />
      <SelectField
        name="accessType"
        label={t("connectors.confluence.auth_type")}
        help={t("connectors.confluence.auth_type_explained")}
        defaultValue="username"
        onChange={(e) => setAccessType(e.target.value)}
      >
        <option value="username">
          {t("connectors.confluence.auth_type_username")}
        </option>
        <option value="personalToken">
          {t("connectors.confluence.auth_type_personal")}
        </option>
      </SelectField>
      {accessType === "username" && (
        <>
          <TextField
            type="text"
            name="username"
            label={t("connectors.confluence.username")}
            help={t("connectors.confluence.username_explained")}
            placeholder="jdoe@example.com"
            required={true}
          />
          <TokenField
            name="accessToken"
            label={t("connectors.confluence.token")}
            help={t("connectors.confluence.token_desc")}
            tip={
              <p>
                {t("connectors.confluence.token_explained_start")}
                <ExternalLink
                  href="https://id.atlassian.com/manage-profile/security/api-tokens"
                  className="underline"
                >
                  {t("connectors.confluence.token_explained_link")}
                </ExternalLink>
                .
              </p>
            }
            placeholder="abcd1234"
            required={true}
          />
        </>
      )}
      {accessType === "personalToken" && (
        <TokenField
          name="personalAccessToken"
          label={t("connectors.confluence.pat_token")}
          help={t("connectors.confluence.pat_token_explained")}
          placeholder="abcd1234"
          required={true}
        />
      )}
      {!isCloud && <BypassSSLToggle />}
    </ConnectorForm>
  );
}

function BypassSSLToggle() {
  const { t } = useTranslation();
  const id = useId();
  const helpId = `${id}-help`;
  const warningId = `${id}-warning`;

  return (
    <div className="flex flex-col">
      <Toggle
        name="bypassSSL"
        value="true"
        size="md"
        label={t("connectors.confluence.bypass_ssl")}
        describedBy={`${helpId} ${warningId}`}
      />
      <p id={helpId} className={FIELD_HELP}>
        {t("connectors.confluence.bypass_ssl_explained")}
      </p>
      <p
        id={warningId}
        className="mt-2 flex items-start gap-x-2 text-xs text-amber-300 light:text-amber-800"
      >
        <TriangleAlert
          strokeWidth={1.5}
          size={16}
          aria-hidden="true"
          className="shrink-0"
        />
        <span>{t("data-connectors.confluence.bypass-ssl-warning")}</span>
      </p>
    </div>
  );
}
