import { useId } from "react";
import { Trans, useTranslation } from "react-i18next";
import Toggle from "@/components/lib/Toggle";
import {
  ExternalLink,
  FIELD_HELP,
  FIELD_LABEL,
} from "@/components/ProviderFields";
import GitRepoForm from "../../components/GitRepoForm";

const NEW_TOKEN_URL =
  "https://gitlab.com/-/user_settings/personal_access_tokens";
const TOKEN_DOCS_URL =
  "https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html";

export default function GitlabOptions() {
  const { t } = useTranslation();

  return (
    <GitRepoForm
      provider="gitlab"
      repoPlaceholder="https://gitlab.com/group/project"
      tokenPlaceholder="glpat-XXXXXXXXXXXXXXXXXXXX"
      tokenHelp={t("data-connectors.gitlab.token-help")}
      tokenTip={
        <p>
          {t("connectors.gitlab.token_explained_start")}
          <ExternalLink href={TOKEN_DOCS_URL} className="underline">
            {t("connectors.gitlab.token_explained_link1")}
          </ExternalLink>
          {t("connectors.gitlab.token_explained_middle")}
          <ExternalLink href={NEW_TOKEN_URL} className="underline">
            {t("connectors.gitlab.token_explained_link2")}
          </ExternalLink>
          {t("connectors.gitlab.token_explained_end")}
        </p>
      }
      tokenNotice={
        <>
          <p>
            <Trans
              i18nKey="connectors.gitlab.token_information"
              components={{ b: <strong /> }}
            />
          </p>
          <p>
            <ExternalLink href={NEW_TOKEN_URL} className="underline">
              {t("connectors.gitlab.token_personal")}
            </ExternalLink>
          </p>
        </>
      }
      extraFields={<GitlabExtras />}
      extraPayload={(form) => ({
        fetchIssues: form.get("fetchIssues"),
        fetchWikis: form.get("fetchWikis"),
      })}
    />
  );
}

function GitlabExtras() {
  const { t } = useTranslation();
  const helpId = `${useId()}-help`;

  return (
    <fieldset aria-describedby={helpId} className="flex flex-col">
      <legend className={FIELD_LABEL}>
        {t("data-connectors.gitlab.extras")}
      </legend>
      <div className="flex flex-col gap-y-3">
        <Toggle
          name="fetchIssues"
          size="md"
          label={t("connectors.gitlab.fetch_issues")}
        />
        <Toggle
          name="fetchWikis"
          size="md"
          label={t("data-connectors.gitlab.fetch-wikis")}
        />
      </div>
      <p id={helpId} className={FIELD_HELP}>
        {t("connectors.gitlab.token_description")}
      </p>
    </fieldset>
  );
}
