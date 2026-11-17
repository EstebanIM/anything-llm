import { useEffect, useRef, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  ArrowLeft,
  ChevronRight,
  MessageSquareText,
  Brain,
  Wrench,
  File,
  Square,
} from "lucide-react";
import ScheduledJobs from "@/models/scheduledJobs";
import usePolling from "@/hooks/usePolling";
import showToast from "@/utils/toast";
import paths from "@/utils/paths";
import renderMarkdown from "@/utils/chat/markdown";
import PreLoader from "@/components/Preloader";
import CopyButton from "@/components/lib/CopyButton";
import { ModalDangerButton, ModalPrimaryButton } from "@/components/lib/Modal";
import CollapsibleSection, {
  SECTION,
  SECTION_TITLE,
} from "./components/CollapsibleSection";
import ToolCallCard from "./components/ToolCallCard";
import GeneratedFileCard from "./components/GeneratedFileCard";
import RunStatusBadge from "./components/StatusBadge";
import TimeText from "./components/TimeText";
import PageLayout, {
  HEADER_SECONDARY_BUTTON,
  PAGE_TITLE,
  StatusRegion,
  useStatusAnnouncer,
} from "./components/PageLayout";
import {
  formatElapsed,
  isInFlight,
  runDurationMs,
  translateJobError,
} from "./utils/format";
import { numberWithCommas } from "@/utils/numbers";
import DOMPurify from "@/utils/chat/purify";
import {
  THOUGHT_REGEX_COMPLETE,
  THOUGHT_REGEX_OPEN,
  THOUGHT_REGEX_CLOSE,
} from "@/components/WorkspaceChat/ChatContainer/ChatHistory/ThoughtContainer";

export default function RunDetailPage() {
  const { t } = useTranslation();
  const { id, runId } = useParams();
  const navigate = useNavigate();
  // "loading" | "ready" | "notFound" | "error"
  const [state, setState] = useState("loading");
  const [run, setRun] = useState(null);
  const [job, setJob] = useState(null);
  const [continuing, setContinuing] = useState(false);
  const [killing, setKilling] = useState(false);
  const headingRef = useRef(null);
  const loaded = useRef(false);

  const fetchRun = async () => {
    const data = await ScheduledJobs.getRun(runId);
    if (data?.run) {
      loaded.current = true;
      setRun(data.run);
      setJob(data.job);
      setState("ready");
      if (!data.run.readAt) ScheduledJobs.markRunRead(runId);
      return;
    }
    // A failed background refresh keeps the run on screen. The API answers a
    // missing run with an error message; a failed request has none.
    if (!loaded.current) setState(data?.error ? "notFound" : "error");
  };

  useEffect(() => {
    loaded.current = false;
    setState("loading");
    fetchRun();
  }, [runId]);

  const isNonTerminal = isInFlight(run?.status);
  // Poll every 3s while a run is in progress so the trace/status updates live.
  // Stops automatically once the run reaches a terminal state.
  usePolling(fetchRun, 3000, isNonTerminal);

  const statusMessage = useStatusAnnouncer(
    run
      ? [
          {
            key: run.id,
            status: run.status,
            describe: () =>
              t("scheduledJobs.runDetail.statusAnnounce", {
                status: t(`scheduledJobs.status.${run.status}`),
              }),
          },
        ]
      : []
  );

  const handleContinueInThread = async () => {
    if (continuing) return;
    setContinuing(true);
    const { workspaceSlug, threadSlug, error } =
      await ScheduledJobs.continueInThread(runId);

    if (error || !workspaceSlug || !threadSlug) {
      showToast(
        translateJobError(t, error, "scheduledJobs.runDetail.threadFailed"),
        "error"
      );
      setContinuing(false);
      return;
    }

    navigate(paths.workspace.thread(workspaceSlug, threadSlug));
  };

  const handleKillRun = async () => {
    if (killing) return;
    setKilling(true);
    const { success, error } = await ScheduledJobs.killRun(runId);
    setKilling(false);

    if (!success) {
      showToast(
        translateJobError(t, error, "scheduledJobs.toast.killFailed"),
        "error"
      );
      return;
    }

    showToast(t("scheduledJobs.toast.killed"), "success");
    // The Stop button goes away with the new status: keep focus on the page.
    headingRef.current?.focus();
    fetchRun();
  };

  if (state === "loading") {
    return (
      <PageLayout>
        <div className="w-full flex justify-center py-16">
          <PreLoader />
        </div>
      </PageLayout>
    );
  }

  if (state !== "ready") {
    return (
      <PageLayout>
        <Link
          to={paths.settings.scheduledJobRuns(id)}
          className="flex items-center gap-2 min-h-[44px] md:min-h-0 w-fit rounded-sm text-sm text-zinc-400 light:text-slate-600 hover:text-zinc-50 light:hover:text-slate-950 transition-colors duration-quick ease-smooth"
        >
          <ArrowLeft strokeWidth={1.5} className="h-4 w-4" aria-hidden="true" />
          {t("scheduledJobs.runDetail.back")}
        </Link>
        <div className="flex flex-col items-start gap-4 pt-6">
          <h1 className={PAGE_TITLE}>{t("scheduledJobs.title")}</h1>
          <p
            role="alert"
            className="text-sm text-zinc-300 light:text-slate-700"
          >
            {state === "notFound"
              ? t("scheduledJobs.runDetail.notFound")
              : t("scheduledJobs.runDetail.loadFailed")}
          </p>
          {state === "error" && (
            <button
              type="button"
              onClick={() => {
                setState("loading");
                fetchRun();
              }}
              className={HEADER_SECONDARY_BUTTON}
            >
              {t("provider-fields.retry")}
            </button>
          )}
        </div>
      </PageLayout>
    );
  }

  const result = run.result || {};
  return (
    <PageLayout>
      <RunHeader
        jobId={id}
        job={job}
        run={run}
        result={result}
        headingRef={headingRef}
        continuing={continuing}
        killing={killing}
        onContinueInThread={handleContinueInThread}
        onKillRun={handleKillRun}
      />

      <div className="mt-6 space-y-4">
        <PromptSection prompt={job?.prompt} />
        <ErrorSection error={run?.error} />
        <AgentThoughtsSection result={result} />
        <ToolCallsSection result={result} />
        <GeneratedFilesSection result={result} />
        <FinalResponseSection result={result} />
        <MetricsSection metrics={result?.metrics} />
      </div>
      <StatusRegion message={statusMessage} />
    </PageLayout>
  );
}

function Breadcrumbs({ jobId, jobName, runId }) {
  const { t } = useTranslation();
  const linkClass =
    "rounded-sm hover:text-zinc-50 light:hover:text-slate-950 hover:underline underline-offset-2 transition-colors duration-quick ease-smooth";
  const separator = (
    <ChevronRight
      strokeWidth={1.5}
      aria-hidden="true"
      className="h-3.5 w-3.5 shrink-0"
    />
  );
  return (
    <nav aria-label={t("scheduledJobs.runDetail.breadcrumb")}>
      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-sm text-zinc-400 light:text-slate-600">
        <li>
          <Link to={paths.settings.scheduledJobs()} className={linkClass}>
            {t("scheduledJobs.title")}
          </Link>
        </li>
        <li className="flex items-center gap-1.5 min-w-0">
          {separator}
          <Link
            to={paths.settings.scheduledJobRuns(jobId)}
            className={`${linkClass} break-words`}
          >
            {jobName}
          </Link>
        </li>
        <li className="flex items-center gap-1.5">
          {separator}
          <span aria-current="page">
            {t("scheduledJobs.runDetail.runLabel", { id: runId })}
          </span>
        </li>
      </ol>
    </nav>
  );
}

function RunHeader({
  jobId,
  job,
  run,
  result,
  headingRef,
  continuing,
  killing,
  onContinueInThread,
  onKillRun,
}) {
  const { t } = useTranslation();
  const jobName = job?.name || t("scheduledJobs.runDetail.unknownJob");
  const running = run.status === "running";
  // The agent's own measurement once finished; the clock while it runs.
  const durationMs =
    !running && Number.isFinite(result.duration) && result.duration > 0
      ? result.duration
      : runDurationMs(run);
  const duration = durationMs !== null ? formatElapsed(durationMs) : "";

  return (
    <div className="w-full flex flex-col gap-4 md:flex-row md:items-end md:justify-between pb-6 border-white/10 light:border-slate-300 border-b-2">
      <div className="flex flex-col gap-y-2 min-w-0">
        <Breadcrumbs jobId={jobId} jobName={jobName} runId={run.id} />
        <h1
          ref={headingRef}
          tabIndex={-1}
          className={`${PAGE_TITLE} break-words`}
        >
          {t("scheduledJobs.runDetail.runHeading", {
            name: jobName,
            id: run.id,
          })}
        </h1>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-zinc-400 light:text-slate-600">
          <RunStatusBadge status={run.status} />
          <span>
            {t("scheduledJobs.runDetail.startedLabel")}{" "}
            <TimeText value={run.startedAt} />
          </span>
          {duration && (
            <span className="tabular-nums">
              {running
                ? t("scheduledJobs.runDetail.elapsed", { value: duration })
                : t("scheduledJobs.runDetail.duration", { value: duration })}
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-2 shrink-0">
        {isInFlight(run.status) && (
          <ModalDangerButton
            type="button"
            onClick={onKillRun}
            busy={killing}
            className="gap-2"
          >
            <Square strokeWidth={1.5} className="h-4 w-4" aria-hidden="true" />
            {killing
              ? t("scheduledJobs.runDetail.killing")
              : t("scheduledJobs.runDetail.stopJob")}
          </ModalDangerButton>
        )}
        {run.status === "completed" && (
          <ModalPrimaryButton
            type="button"
            onClick={onContinueInThread}
            busy={continuing}
          >
            {continuing
              ? t("scheduledJobs.runDetail.creating")
              : t("scheduledJobs.runDetail.continueInThread")}
          </ModalPrimaryButton>
        )}
      </div>
    </div>
  );
}

function PromptSection({ prompt }) {
  const { t } = useTranslation();
  return (
    <section className={`${SECTION} p-[18px]`}>
      <h2 className={`${SECTION_TITLE} mb-1`}>
        {t("scheduledJobs.runDetail.sections.prompt")}
      </h2>
      <p className="text-sm text-zinc-300 light:text-slate-700 whitespace-pre-wrap break-words">
        {prompt || t("scheduledJobs.runDetail.noPrompt")}
      </p>
    </section>
  );
}

function ErrorSection({ error }) {
  const { t } = useTranslation();
  if (!error) return null;
  const message = translateJobError(t, error);
  return (
    <section className="border border-red-500/40 light:border-red-300 rounded-lg p-[18px] bg-red-500/5 light:bg-red-50">
      <div className="flex items-start justify-between gap-2 mb-1">
        <h2 className="text-sm font-medium text-red-400 light:text-red-700 uppercase tracking-[1.4px]">
          {t("scheduledJobs.runDetail.sections.error")}
        </h2>
        <CopyButton
          text={error}
          label={t("scheduledJobs.runDetail.copyError")}
          className="-mt-2 -mr-2"
        />
      </div>
      <p className="text-sm text-red-300 light:text-red-800 whitespace-pre-wrap break-words">
        {message}
      </p>
    </section>
  );
}

function AgentThoughtsSection({ result }) {
  const { t } = useTranslation();
  if (!result.thoughts || result.thoughts.length === 0) return null;

  return (
    <CollapsibleSection
      title={t("scheduledJobs.runDetail.sections.thinking", {
        count: result.thoughts.length,
      })}
      icon={Brain}
    >
      <ol className="list-decimal pl-6 space-y-2 text-sm text-zinc-300 light:text-slate-700 marker:text-zinc-400 light:marker:text-slate-600">
        {result.thoughts.map((thought, i) => (
          <li key={i} className="pl-1 break-words">
            {thought}
          </li>
        ))}
      </ol>
    </CollapsibleSection>
  );
}

function ToolCallsSection({ result }) {
  const { t } = useTranslation();
  if (!result.toolCalls || result.toolCalls.length === 0) return null;

  return (
    <CollapsibleSection
      title={t("scheduledJobs.runDetail.sections.toolCalls", {
        count: result.toolCalls.length,
      })}
      icon={Wrench}
    >
      <ul className="space-y-3">
        {result.toolCalls.map((toolCall, i) => (
          <li key={i}>
            <ToolCallCard toolCall={toolCall} />
          </li>
        ))}
      </ul>
    </CollapsibleSection>
  );
}

function GeneratedFilesSection({ result }) {
  const { t } = useTranslation();
  // outputs contains {type, payload} objects from agent plugins
  const outputs = result.outputs || [];
  if (outputs.length === 0) return null;

  return (
    <CollapsibleSection
      title={t("scheduledJobs.runDetail.sections.files", {
        count: outputs.length,
      })}
      icon={File}
      defaultOpen={true}
    >
      <ul className="space-y-2">
        {outputs.map((output, i) => (
          <li key={i}>
            <GeneratedFileCard file={output.payload || {}} />
          </li>
        ))}
      </ul>
    </CollapsibleSection>
  );
}

function FinalResponseSection({ result }) {
  const { t } = useTranslation();
  if (!result.text) return null;
  let reasoning = null;
  let msgToRender = result.text;

  if (result.text.match(THOUGHT_REGEX_COMPLETE)) {
    reasoning = result.text.match(THOUGHT_REGEX_COMPLETE)?.[0];
    if (reasoning)
      reasoning = reasoning
        .replace(THOUGHT_REGEX_OPEN, "")
        .replace(THOUGHT_REGEX_CLOSE, "")
        .trim();
    msgToRender = result.text.replace(THOUGHT_REGEX_COMPLETE, "");
  }

  return (
    <CollapsibleSection
      title={t("scheduledJobs.runDetail.sections.response")}
      icon={MessageSquareText}
      defaultOpen={true}
      copyText={msgToRender}
      copyLabel={t("scheduledJobs.runDetail.copyResponse")}
    >
      {reasoning && (
        <div className="text-sm text-zinc-400 light:text-slate-600 markdown border-l-2 border-zinc-700 light:border-slate-400 pl-2 mb-4">
          <span
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(renderMarkdown(reasoning)),
            }}
          />
        </div>
      )}
      <div
        className="text-sm text-zinc-50 light:text-slate-950 markdown"
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(renderMarkdown(msgToRender)),
        }}
      />
    </CollapsibleSection>
  );
}

function MetricsSection({ metrics }) {
  const { t } = useTranslation();
  if (!metrics || Object.keys(metrics).length === 0) return null;

  // Todo: there is a bug where if you create a job that has no tools, we wont get any metrics
  // To avoid confusion, we should not show the metrics section if there are no metrics.
  if (!metrics.prompt_tokens || !metrics.completion_tokens) return null;

  return (
    <section className={`${SECTION} p-[18px]`}>
      <h2 className={`${SECTION_TITLE} mb-1`}>
        {t("scheduledJobs.runDetail.sections.metrics")}{" "}
        {metrics.model && (
          <span className="font-mono text-xs font-normal normal-case tracking-normal text-zinc-400 light:text-slate-600">
            ({metrics.model})
          </span>
        )}
      </h2>
      <dl className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-zinc-400 light:text-slate-600">
        <div className="flex gap-1">
          <dt>{t("scheduledJobs.runDetail.metrics.promptTokens")}</dt>
          <dd className="text-zinc-50 light:text-slate-950 tabular-nums">
            {numberWithCommas(metrics.prompt_tokens)}
          </dd>
        </div>
        <div className="flex gap-1">
          <dt>{t("scheduledJobs.runDetail.metrics.completionTokens")}</dt>
          <dd className="text-zinc-50 light:text-slate-950 tabular-nums">
            {numberWithCommas(metrics.completion_tokens)}
          </dd>
        </div>
      </dl>
    </section>
  );
}
