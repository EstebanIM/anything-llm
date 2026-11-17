import { useEffect, useState, useCallback, useRef } from "react";
import { useTranslation } from "react-i18next";
import Telegram from "@/models/telegram";
import usePolling from "@/hooks/usePolling";
import ConnectedBotCard from "./ConnectedBotCard";
import DetailsSection from "./DetailsSection";
import UsersSection from "./UsersSection";
import DisconnectedView from "./DisconnectedView";

export default function ConnectedView({
  config,
  onDisconnected,
  onReconnected,
}) {
  const { t } = useTranslation();
  const connected = config.connected;
  const [newToken, setNewToken] = useState("");
  const [pendingUsers, setPendingUsers] = useState([]);
  const [approvedUsers, setApprovedUsers] = useState([]);
  const [announcement, setAnnouncement] = useState("");
  const knownPending = useRef(null);

  const fetchUsers = useCallback(async () => {
    const [pending, approved] = await Promise.all([
      Telegram.getPendingUsers(),
      Telegram.getApprovedUsers(),
    ]);
    const nextPending = pending?.users || [];
    const ids = nextPending.map((user) => String(user.chatId ?? user));
    // Announce requests that arrive while the page is open, not the ones
    // already waiting on the first load.
    if (knownPending.current) {
      const fresh = ids.filter((id) => !knownPending.current.has(id));
      if (fresh.length > 0)
        setAnnouncement(
          t("tools-pages.telegram.new-requests", { count: fresh.length })
        );
    }
    knownPending.current = new Set(ids);
    setPendingUsers(nextPending);
    setApprovedUsers(approved?.users || []);
  }, [t]);

  useEffect(() => {
    if (connected) fetchUsers();
  }, [connected, fetchUsers]);
  usePolling(fetchUsers, 5_000, connected);

  if (!connected) {
    return (
      <DisconnectedView
        config={config}
        onReconnected={onReconnected}
        newToken={newToken}
        setNewToken={setNewToken}
      />
    );
  }

  return (
    <div className="flex flex-col gap-y-8 mt-8">
      <ConnectedBotCard config={config} />
      <DetailsSection config={config} onDisconnected={onDisconnected} />
      <UsersSection
        pendingUsers={pendingUsers}
        approvedUsers={approvedUsers}
        fetchUsers={fetchUsers}
      />
      <p role="status" className="sr-only">
        {announcement}
      </p>
    </div>
  );
}
