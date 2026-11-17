import { useId, useRef, useState } from "react";
import { Check, LoaderCircle, X } from "lucide-react";
import Telegram from "@/models/telegram";
import showToast from "@/utils/toast";
import InlineConfirm from "@/pages/GeneralSettings/ApiKeys/InlineConfirm";
import { useTranslation } from "react-i18next";

const ACTION_BUTTON =
  "inline-flex items-center justify-center gap-x-1.5 min-h-[44px] md:min-h-[32px] px-3 rounded-lg text-sm font-medium whitespace-nowrap transition-colors duration-quick ease-smooth";
const NEUTRAL_BUTTON = `${ACTION_BUTTON} border border-zinc-500 light:border-slate-500 text-white hover:bg-white/5 light:hover:bg-slate-100`;

export default function UsersSection({
  pendingUsers,
  approvedUsers,
  fetchUsers,
}) {
  const { t } = useTranslation();
  const headingRef = useRef(null);
  const pendingId = useId();
  const approvedId = useId();

  // The row that held the focus is gone after any of these actions: the
  // focus moves to the section title instead of falling to <body>.
  async function run(action, chatId, failedKey) {
    const res = await action(chatId);
    if (!res.success) {
      showToast(t(failedKey), "error", { clear: true });
      return false;
    }
    await fetchUsers();
    headingRef.current?.focus();
    return true;
  }

  const handleApprove = (chatId) =>
    run(
      Telegram.approveUser,
      chatId,
      "telegram.connected.toast-approve-failed"
    );
  const handleDeny = (chatId) =>
    run(Telegram.denyUser, chatId, "telegram.connected.toast-deny-failed");
  const handleRevoke = (chatId) =>
    run(Telegram.revokeUser, chatId, "telegram.connected.toast-revoke-failed");

  const hasPending = pendingUsers.length > 0;
  const hasApproved = approvedUsers.length > 0;
  if (!hasPending && !hasApproved) return null;

  return (
    <section className="flex flex-col gap-y-[18px] w-full max-w-[700px]">
      <h2
        ref={headingRef}
        tabIndex={-1}
        className="text-base font-semibold text-white light:text-slate-900"
      >
        {t("tools-pages.telegram.users")}
      </h2>
      {hasPending && (
        <div className="flex flex-col gap-y-2">
          <h3
            id={pendingId}
            className="text-sm font-semibold text-white light:text-slate-900"
          >
            {t("tools-pages.telegram.pending-title")}
          </h3>
          <p className="text-xs text-zinc-400 light:text-slate-600">
            {t("telegram.users.pending-description")}
          </p>
          <ul
            aria-labelledby={pendingId}
            className="flex flex-col border-t border-zinc-700 light:border-slate-200"
          >
            {pendingUsers.map((user) => (
              <UserRow
                key={user.chatId || user}
                user={user}
                isPending
                onApprove={handleApprove}
                onDeny={handleDeny}
              />
            ))}
          </ul>
        </div>
      )}
      {hasApproved && (
        <div className="flex flex-col gap-y-2">
          <h3
            id={approvedId}
            className="text-sm font-semibold text-white light:text-slate-900"
          >
            {t("tools-pages.telegram.approved-title")}
          </h3>
          <ul
            aria-labelledby={approvedId}
            className="flex flex-col border-t border-zinc-700 light:border-slate-200"
          >
            {approvedUsers.map((user) => (
              <UserRow
                key={user.chatId || user}
                user={user}
                onRevoke={handleRevoke}
              />
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

function UserRow({ user, isPending = false, onApprove, onDeny, onRevoke }) {
  const { t } = useTranslation();
  const [approving, setApproving] = useState(false);
  const [confirmingDeny, setConfirmingDeny] = useState(false);
  const chatId = typeof user === "string" ? user : user.chatId;
  const username = user.telegramUsername || user.username || null;
  const firstName = user.firstName || null;
  const displayName = username
    ? `@${username}`
    : firstName || t("telegram.users.unknown");
  const initial = (username || firstName || "?")[0].toUpperCase();
  const code = user.code;

  async function approve(e) {
    if (approving) return e.preventDefault();
    setApproving(true);
    const ok = await onApprove(chatId);
    // On success the row moves to the approved list and unmounts.
    if (!ok) setApproving(false);
  }

  return (
    <li className="flex flex-col sm:flex-row sm:items-center gap-3 py-3 border-b border-zinc-800 light:border-slate-200">
      <div className="flex items-center gap-x-3 flex-1 min-w-0">
        <div
          aria-hidden="true"
          className="bg-zinc-800 light:bg-slate-300 size-8 rounded-full flex items-center justify-center shrink-0"
        >
          <span className="text-sm font-semibold text-white light:text-slate-900">
            {initial}
          </span>
        </div>
        <div className="flex flex-col min-w-0">
          <span className="text-sm font-medium text-white light:text-slate-900 truncate">
            {displayName}
          </span>
          {isPending && code && (
            <span className="text-xs text-zinc-300 light:text-slate-700">
              {t("tools-pages.telegram.code")}{" "}
              <span className="font-mono font-semibold text-sm text-white light:text-slate-900 bg-zinc-950 light:bg-slate-200 rounded px-1.5 py-0.5">
                {code}
              </span>
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-2 sm:justify-end">
        {isPending ? (
          <>
            {!confirmingDeny && (
              <button
                type="button"
                onClick={approve}
                aria-label={t("tools-pages.telegram.approve-label", {
                  name: displayName,
                })}
                aria-busy={approving || undefined}
                aria-disabled={approving || undefined}
                className={`${NEUTRAL_BUTTON} aria-disabled:opacity-60 aria-disabled:cursor-wait`}
              >
                {approving ? (
                  <LoaderCircle
                    strokeWidth={1.5}
                    className="h-4 w-4 animate-spin"
                    aria-hidden="true"
                  />
                ) : (
                  <Check
                    strokeWidth={1.5}
                    className="h-4 w-4 text-green-400 light:text-green-700"
                    aria-hidden="true"
                  />
                )}
                {t("tools-pages.telegram.approve")}
              </button>
            )}
            <InlineConfirm
              label={t("tools-pages.telegram.deny-label", {
                name: displayName,
              })}
              icon={X}
              text={t("tools-pages.telegram.deny")}
              triggerClassName={NEUTRAL_BUTTON}
              consequence={t("tools-pages.telegram.deny-consequence")}
              confirmLabel={t("tools-pages.telegram.deny")}
              onConfirm={() => onDeny(chatId)}
              onOpenChange={setConfirmingDeny}
            />
          </>
        ) : (
          <InlineConfirm
            label={t("tools-pages.telegram.revoke-label", {
              name: displayName,
            })}
            text={t("tools-pages.telegram.revoke")}
            triggerClassName={NEUTRAL_BUTTON}
            consequence={t("tools-pages.telegram.revoke-consequence")}
            confirmLabel={t("tools-pages.telegram.revoke")}
            onConfirm={() => onRevoke(chatId)}
          />
        )}
      </div>
    </li>
  );
}
