import React, { useEffect, useId, useRef, useState } from "react";
import { ChevronDown, Check, X, Hammer, Clock } from "lucide-react";
import AgentSkillWhitelist from "@/models/agentSkillWhitelist";
import { useTranslation } from "react-i18next";
import useTimeoutProgress from "@/hooks/useTimeoutProgress";

export default function ToolApprovalRequest({
  requestId,
  skillName,
  payload = {},
  description = null,
  timeoutMs = null,
  websocket,
  onResponse,
}) {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);
  const [responded, setResponded] = useState(false);
  // null while pending, then "approved" | "rejected" | "timeout".
  const [outcome, setOutcome] = useState(null);
  const [alwaysAllow, setAlwaysAllow] = useState(false);
  const [held, setHeld] = useState(false);
  const outcomeRef = useRef(null);
  const payloadId = useId();
  const hasPayload = payload && Object.keys(payload).length > 0;

  const progressPercent = useTimeoutProgress(timeoutMs, {
    active: !responded && !held,
    intervalMs: 50,
    onTimeout: handleTimeout,
  });

  // Focus follows the card when the user answers, since the buttons they
  // used are replaced by the outcome line.
  useEffect(() => {
    if (outcome && outcome !== "timeout") outcomeRef.current?.focus();
  }, [outcome]);

  // Once the user engages with the card the server stops racing them against
  // the approval clock (same hold the email card uses), so the countdown goes
  // away for the rest of the card.
  function hold() {
    if (held || responded) return;
    setHeld(true);
    if (websocket && websocket.readyState === WebSocket.OPEN) {
      websocket.send(JSON.stringify({ type: "toolApprovalHold", requestId }));
    }
  }

  function handleTimeout() {
    if (responded) return;
    setResponded(true);
    setOutcome("timeout");
    onResponse?.(false);
  }

  async function handleResponse(isApproved) {
    if (responded) return;

    setResponded(true);
    setOutcome(isApproved ? "approved" : "rejected");

    // If user approved and checked "Always allow", add to whitelist
    if (isApproved && alwaysAllow) {
      await AgentSkillWhitelist.addToWhitelist(skillName);
    }

    if (websocket && websocket.readyState === WebSocket.OPEN) {
      websocket.send(
        JSON.stringify({
          type: "toolApprovalResponse",
          requestId,
          approved: isApproved,
        })
      );
    }

    onResponse?.(isApproved);
  }

  return (
    <div className="flex justify-center w-full my-1 pr-4">
      <div className="w-full flex flex-col">
        <div className="w-full">
          <div
            role="group"
            aria-label={t("chat-history.approval.label", { skillName })}
            onPointerDownCapture={hold}
            onKeyDownCapture={hold}
            onFocusCapture={hold}
            className="relative rounded-xl bg-zinc-800 light:bg-slate-100 p-4 pb-2 flex flex-col gap-y-1 overflow-hidden"
          >
            {/* Announces the request once, when the card appears. */}
            {!responded && (
              <span className="sr-only" role="status">
                {t("chat-history.approval.announce", { skillName })}
              </span>
            )}
            <ToolApprovalHeader
              skillName={skillName}
              hasPayload={hasPayload}
              isExpanded={isExpanded}
              setIsExpanded={setIsExpanded}
              payloadId={payloadId}
            />
            <div className="flex flex-col gap-y-1">
              {description && (
                <span className="text-white/60 light:text-slate-700 font-medium font-mono text-xs">
                  {description}
                </span>
              )}
              <ToolApprovalPayload
                id={payloadId}
                payload={payload}
                isExpanded={isExpanded}
              />
              <ToolApprovalResponseOption
                responded={responded}
                skillName={skillName}
                alwaysAllow={alwaysAllow}
                setAlwaysAllow={setAlwaysAllow}
                onApprove={() => handleResponse(true)}
                onReject={() => handleResponse(false)}
              />
              <ToolApprovalResponseMessage ref={outcomeRef} outcome={outcome} />
            </div>
            {timeoutMs && !responded && !held && (
              <div
                aria-hidden="true"
                className="absolute bottom-0 left-0 right-0 h-1 bg-zinc-700 light:bg-slate-300"
              >
                <div
                  className="h-full bg-sky-500 light:bg-sky-600 transition-none"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ToolApprovalHeader({
  skillName,
  hasPayload,
  isExpanded,
  setIsExpanded,
  payloadId,
}) {
  const { t } = useTranslation();
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center gap-2">
        <Hammer strokeWidth={1.5} size={16} aria-hidden="true" />
        <div className="text-white/80 light:text-slate-900 font-medium text-sm flex gap-x-1">
          {t("chat_window.agent_invocation.model_wants_to_call")}
          <span className="font-semibold text-sky-400 light:text-sky-700">
            {skillName}
          </span>
        </div>
      </div>
      {hasPayload && (
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="absolute top-1 right-1 md:top-3 md:right-3 flex items-center justify-center w-11 h-11 md:w-7 md:h-7 rounded-md border-none"
          aria-label={t("chat-history.approval.details")}
          aria-expanded={isExpanded}
          aria-controls={isExpanded ? payloadId : undefined}
        >
          <ChevronDown
            strokeWidth={1.5}
            aria-hidden="true"
            className={`w-4 h-4 transform transition-transform duration-base ease-smooth ${isExpanded ? "rotate-180" : ""}`}
          />
        </button>
      )}
    </div>
  );
}

function ToolApprovalPayload({ id, payload, isExpanded }) {
  const hasPayload = payload && Object.keys(payload).length > 0;
  if (!hasPayload || !isExpanded) return null;

  function formatPayload(data) {
    if (typeof data === "string") return data;
    try {
      return JSON.stringify(data, null, 2);
    } catch {
      return String(data);
    }
  }

  return (
    <div
      id={id}
      className="p-3 bg-zinc-900/50 light:bg-slate-200/50 rounded-lg overflow-x-auto"
    >
      <pre className="text-xs text-zinc-300 light:text-slate-700 font-mono whitespace-pre-wrap break-words">
        {formatPayload(payload)}
      </pre>
    </div>
  );
}

function ToolApprovalResponseOption({
  responded,
  skillName,
  alwaysAllow,
  setAlwaysAllow,
  onApprove,
  onReject,
}) {
  const { t } = useTranslation();
  if (responded) return null;

  return (
    <div className="flex flex-col gap-2 mt-1 pb-2">
      <div className="flex gap-2">
        <button
          type="button"
          onClick={onApprove}
          className="border-none transition-opacity duration-quick bg-white text-black hover:opacity-80 px-4 min-h-[44px] md:min-h-0 md:py-2 rounded-lg text-sm"
        >
          {t("chat_window.agent_invocation.approve")}
        </button>
        <button
          type="button"
          onClick={onReject}
          className="border-none text-white light:text-slate-900 text-sm font-medium px-3 min-w-[70px] min-h-[44px] md:min-h-0 md:h-9 rounded-lg hover:bg-white/5 light:hover:bg-slate-300"
        >
          {t("chat_window.agent_invocation.reject")}
        </button>
      </div>
      <label className="flex items-center gap-2 min-h-[44px] md:min-h-0 cursor-pointer text-white/60 light:text-slate-600 text-xs hover:text-white/80 light:hover:text-slate-800 transition-colors">
        <input
          type="checkbox"
          checked={alwaysAllow}
          onChange={(e) => setAlwaysAllow(e.target.checked)}
          className="w-3.5 h-3.5 rounded border-white/20 bg-transparent cursor-pointer"
        />
        <span>
          {t("chat_window.agent_invocation.always_allow", { skillName })}
        </span>
      </label>
    </div>
  );
}

const ToolApprovalResponseMessage = React.forwardRef(
  function ToolApprovalResponseMessage({ outcome }, ref) {
    const { t } = useTranslation();
    if (!outcome) return null;

    const variants = {
      approved: {
        Icon: Check,
        text: t("chat_window.agent_invocation.tool_call_was_approved"),
        className: "text-green-400 light:text-green-700",
      },
      rejected: {
        Icon: X,
        text: t("chat_window.agent_invocation.tool_call_was_rejected"),
        className: "text-red-400 light:text-red-700",
      },
      timeout: {
        Icon: Clock,
        text: t("chat-history.approval.timeout"),
        className: "text-zinc-300 light:text-slate-600",
      },
    };
    const { Icon, text, className } = variants[outcome];

    return (
      <div
        ref={ref}
        tabIndex={-1}
        role="status"
        className={`flex items-center gap-1 pb-2 text-sm font-medium ${className}`}
      >
        <Icon strokeWidth={1.5} size={16} aria-hidden="true" />
        <span>{text}</span>
      </div>
    );
  }
);
