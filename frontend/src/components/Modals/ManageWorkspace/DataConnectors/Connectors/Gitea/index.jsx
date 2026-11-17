import { Trans, useTranslation } from "react-i18next";
import { ExternalLink } from "@/components/ProviderFields";
import GitRepoForm from "../../components/GitRepoForm";

const TOKEN_DOCS_URL = "https://docs.gitea.com/development/api-usage/";

export default function GiteaOptions() {
  const { t } = useTranslation();

  return (
    <GitRepoForm
      provider="gitea"
      repoPlaceholder="https://git.example.com/owner/repo"
      tokenPlaceholder="65eaa9c8ef52460d22a93307fe0aee76289dc675"
      tokenHelp={t("connectors.gitea.token_explained")}
      tokenTip={
        <p>
          {t("connectors.gitea.token_explained_start")}
          <ExternalLink href={TOKEN_DOCS_URL} className="underline">
            {t("connectors.gitea.token_explained_link1")}
          </ExternalLink>
          {t("connectors.gitea.token_explained_end")}
        </p>
      }
      tokenNotice={
        <p>
          <Trans
            i18nKey="connectors.gitea.token_information"
            components={{ b: <strong /> }}
          />
        </p>
      }
    />
  );
}
