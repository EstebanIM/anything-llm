import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import System from "@/models/system";
import BranchSelect, { useBranches } from "./BranchSelect";
import ConnectorForm from "./ConnectorForm";
import useConnectorSubmit from "./useConnectorSubmit";
import {
  IgnorePathsInput,
  Notice,
  TextField,
  TokenField,
  folderName,
  parseIgnorePaths,
} from "./fields";

/**
 * Shared form for the GitHub, GitLab and Gitea connectors. Field names and
 * the payload are the ones each connector sent before.
 * @param {"github"|"gitlab"|"gitea"} provider - key in System.dataConnectors and in connectors.* locales
 * @param {React.ReactNode} tokenTip - content of the InfoTip next to the token label
 * @param {React.ReactNode} tokenNotice - shown above the submit button while no token is typed
 * @param {React.ReactNode} [extraFields] - provider-only fields, rendered before the branch
 * @param {(form: FormData) => object} [extraPayload] - provider-only values for collect()
 */
export default function GitRepoForm({
  provider,
  repoPlaceholder,
  tokenPlaceholder,
  tokenHelp,
  tokenTip,
  tokenNotice,
  extraFields = null,
  extraPayload = () => ({}),
}) {
  const { t } = useTranslation();
  const [token, setToken] = useState("");
  // Branches are looked up with the values committed on blur, not on every keystroke.
  const [source, setSource] = useState({ repo: null, accessToken: null });
  const [branchBlocked, setBranchBlocked] = useState(false);
  const branchState = useBranches(provider, source.repo, source.accessToken);
  const { busy, outcome, collect } = useConnectorSubmit({
    pending: t("data-connectors.git.fetching"),
  });

  useEffect(() => {
    if (branchState.status === "ready" || branchState.status === "idle")
      setBranchBlocked(false);
  }, [branchState.status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formEl = e.currentTarget;
    if (!new FormData(formEl).get("branch")) {
      setBranchBlocked(true);
      return;
    }

    collect(formEl, async (form) => {
      const { data, error } = await System.dataConnectors[provider].collect({
        repo: form.get("repo"),
        accessToken: form.get("accessToken"),
        branch: form.get("branch"),
        ignorePaths: parseIgnorePaths(form.get("ignores")),
        ...extraPayload(form),
      });
      if (error) return { error };
      return {
        message: t("data-connectors.git.success", {
          count: data.files,
          repo: `${data.author}/${data.repo}`,
          branch: data.branch,
          folder: folderName(data.destination),
        }),
      };
    });
  };

  const handleReset = () => {
    setToken("");
    setSource({ repo: null, accessToken: null });
    setBranchBlocked(false);
  };

  return (
    <ConnectorForm
      onSubmit={handleSubmit}
      onReset={handleReset}
      busy={busy}
      outcome={outcome}
      submitLabel={t("data-connectors.submit.files")}
      busyLabel={t("data-connectors.submit.files-busy")}
      taskExplained={t(`connectors.${provider}.task_explained`)}
      notice={!token && tokenNotice ? <Notice>{tokenNotice}</Notice> : null}
    >
      <TextField
        type="url"
        name="repo"
        label={t(`connectors.${provider}.URL`)}
        help={t(`connectors.${provider}.URL_explained`)}
        placeholder={repoPlaceholder}
        required={true}
        onBlur={(e) => {
          const repo = e.target.value.trim() || null;
          setSource((prev) => ({ ...prev, repo }));
        }}
      />
      <TokenField
        name="accessToken"
        label={t(`connectors.${provider}.token`)}
        help={tokenHelp}
        optional={true}
        tip={tokenTip}
        placeholder={tokenPlaceholder}
        required={false}
        onChange={(e) => setToken(e.target.value)}
        onBlur={(e) => {
          const accessToken = e.target.value || null;
          setSource((prev) => ({ ...prev, accessToken }));
        }}
      />
      {extraFields}
      <BranchSelect
        state={branchState}
        help={t(`connectors.${provider}.branch_explained`)}
        blocked={branchBlocked}
      />
      <IgnorePathsInput label={t(`connectors.${provider}.ignores`)} />
    </ConnectorForm>
  );
}
