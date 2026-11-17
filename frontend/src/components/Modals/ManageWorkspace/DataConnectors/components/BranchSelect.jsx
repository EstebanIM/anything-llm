import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import System from "@/models/system";
import {
  FIELD_COL,
  FIELD_ERROR,
  ModelSelectField,
} from "@/components/ProviderFields";

/** Offered until a repository URL is entered, as before. */
const DEFAULT_BRANCHES = ["main", "master"];

/**
 * Branches of a repository for the git connectors.
 * status: "idle" (no repo yet, default names) | "loading" | "ready" | "empty" | "error".
 * Stale answers are dropped when the repo or the token change mid-request.
 * @param {"github"|"gitlab"|"gitea"} provider - key in System.dataConnectors
 */
export function useBranches(provider, repo, accessToken) {
  const [state, setState] = useState({
    status: "idle",
    branches: DEFAULT_BRANCHES,
    error: null,
  });
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    if (!repo) {
      setState({ status: "idle", branches: DEFAULT_BRANCHES, error: null });
      return;
    }

    let current = true;
    setState({ status: "loading", branches: [], error: null });
    System.dataConnectors[provider]
      .branches({ repo, accessToken })
      .then(({ branches = [], error = null }) => {
        if (!current) return;
        if (error) setState({ status: "error", branches: [], error });
        else if (branches.length === 0)
          setState({ status: "empty", branches: [], error: null });
        else setState({ status: "ready", branches, error: null });
      });
    return () => {
      current = false;
    };
  }, [provider, repo, accessToken, attempt]);

  return { ...state, retry: () => setAttempt((n) => n + 1) };
}

/**
 * Branch <select> with loading, empty and error states and a retry button.
 * While it is not ready the select is disabled, so the form sends no branch:
 * the form must check it and pass `blocked` to explain why it did not submit.
 */
export default function BranchSelect({ state, help, blocked = false }) {
  const { t } = useTranslation();
  const { status, branches, error, retry } = state;

  return (
    <div className={FIELD_COL}>
      <ModelSelectField
        name="branch"
        className="flex flex-col w-full"
        label={t("data-connectors.branch.label")}
        status={status === "idle" ? "ready" : status}
        error={error}
        errorKey="data-connectors.branch.error"
        onRetry={retry}
        help={help}
        messages={{
          loading: t("data-connectors.branch.loading"),
          empty: t("data-connectors.branch.empty"),
          error: t("data-connectors.branch.unavailable"),
        }}
      >
        {branches.map((branch) => (
          <option key={branch} value={branch}>
            {branch}
          </option>
        ))}
      </ModelSelectField>
      {blocked && (
        <p role="alert" className={FIELD_ERROR}>
          {status === "loading"
            ? t("data-connectors.branch.wait")
            : t("data-connectors.branch.required")}
        </p>
      )}
    </div>
  );
}
