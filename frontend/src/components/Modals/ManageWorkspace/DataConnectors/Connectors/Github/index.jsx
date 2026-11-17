import { Trans, useTranslation } from "react-i18next";
import { ExternalLink } from "@/components/ProviderFields";
import GitRepoForm from "../../components/GitRepoForm";

const NEW_TOKEN_URL = "https://github.com/settings/personal-access-tokens/new";
const TOKEN_DOCS_URL =
  "https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens";

export default function GithubOptions() {
  const { t } = useTranslation();

  return (
    <GitRepoForm
      provider="github"
      repoPlaceholder="https://github.com/owner/repo"
      tokenPlaceholder="github_pat_1234_abcdefg"
      tokenHelp={t("connectors.github.token_explained")}
      tokenTip={
        <p>
          {t("connectors.github.token_explained_start")}
          <ExternalLink href={TOKEN_DOCS_URL} className="underline">
            {t("connectors.github.token_explained_link1")}
          </ExternalLink>
          {t("connectors.github.token_explained_middle")}
          <ExternalLink href={NEW_TOKEN_URL} className="underline">
            {t("connectors.github.token_explained_link2")}
          </ExternalLink>
          {t("connectors.github.token_explained_end")}
        </p>
      }
      tokenNotice={
        <>
          <p>
            <Trans
              i18nKey="connectors.github.token_information"
              components={{ b: <strong /> }}
            />
          </p>
          <p>
            <ExternalLink href={NEW_TOKEN_URL} className="underline">
              {t("connectors.github.token_personal")}
            </ExternalLink>
          </p>
        </>
      }
    />
  );
}
