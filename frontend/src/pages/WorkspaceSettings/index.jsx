import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "@/components/Sidebar";
import Workspace from "@/models/workspace";
import PasswordModal, { usePasswordModal } from "@/components/Modals/Password";
import { isMobile } from "react-device-detect";
import { FullScreenLoader } from "@/components/Preloader";
import {
  Undo2,
  MessageSquareText,
  Database,
  Bot,
  User,
  Wrench,
} from "lucide-react";
import paths from "@/utils/paths";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import GeneralAppearance from "./GeneralAppearance";
import ChatSettings from "./ChatSettings";
import VectorDatabase from "./VectorDatabase";
import Members from "./Members";
import WorkspaceAgentConfiguration from "./AgentConfig";
import useUser from "@/hooks/useUser";
import { useTranslation } from "react-i18next";
import System from "@/models/system";

const TABS = {
  "general-appearance": GeneralAppearance,
  "chat-settings": ChatSettings,
  "vector-database": VectorDatabase,
  members: Members,
  "agent-config": WorkspaceAgentConfiguration,
};

export default function WorkspaceSettings() {
  const { loading, requiresAuth, mode } = usePasswordModal();

  if (loading) return <FullScreenLoader />;
  if (requiresAuth !== false) {
    return <>{requiresAuth !== null && <PasswordModal mode={mode} />}</>;
  }

  return <ShowWorkspaceChat />;
}

function ShowWorkspaceChat() {
  const { t } = useTranslation();
  const { slug, tab } = useParams();
  const { user } = useUser();
  const [workspace, setWorkspace] = useState(null);
  const [deletionProtected, setDeletionProtected] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getWorkspace() {
      if (!slug) return;
      const _workspace = await Workspace.bySlug(slug);
      if (!_workspace) {
        setLoading(false);
        return;
      }

      const _settings = await System.keys();
      const suggestedMessages = await Workspace.getSuggestedMessages(slug);
      setWorkspace({
        ..._workspace,
        vectorDB: _settings?.VectorDB,
        suggestedMessages,
      });
      setDeletionProtected(_settings?.WorkspaceDeletionProtection === true);
      setLoading(false);
    }
    getWorkspace();
  }, [slug, tab]);

  if (loading) return <FullScreenLoader />;

  const TabContent = TABS[tab];
  return (
    <div className="w-screen h-screen overflow-hidden bg-zinc-950 light:bg-slate-50 flex">
      {!isMobile && <Sidebar />}
      <div
        style={{ height: isMobile ? "100%" : "calc(100% - 32px)" }}
        className="transition-all duration-500 relative md:ml-[2px] md:mr-[16px] md:my-[16px] md:rounded-[16px] bg-zinc-900 light:bg-white w-full h-full overflow-y-scroll"
      >
        <div className="flex gap-x-6 md:gap-x-10 pt-4 md:pt-6 pb-4 pl-16 pr-4 md:pl-0 md:ml-16 md:mr-8 overflow-x-auto border-b-2 border-white light:border-theme-chat-input-border border-opacity-10">
          <Link
            to={paths.workspace.chat(slug)}
            className="absolute top-2 left-2 md:top-4 md:left-4 transition-all duration-300 p-2 rounded-full text-theme-text-secondary bg-transparent border border-theme-modal-border hover:bg-theme-bg-primary hover:text-theme-text-primary z-10"
          >
            <Undo2 strokeWidth={1.5} className="h-5 w-5" />
          </Link>
          <TabItem
            title={t("workspaces—settings.general")}
            icon={<Wrench strokeWidth={1.5} className="h-6 w-6" />}
            to={paths.workspace.settings.generalAppearance(slug)}
          />
          <TabItem
            title={t("workspaces—settings.chat")}
            icon={<MessageSquareText strokeWidth={1.5} className="h-6 w-6" />}
            to={paths.workspace.settings.chatSettings(slug)}
          />
          <TabItem
            title={t("workspaces—settings.vector")}
            icon={<Database strokeWidth={1.5} className="h-6 w-6" />}
            to={paths.workspace.settings.vectorDatabase(slug)}
          />
          <TabItem
            title={t("workspaces—settings.members")}
            icon={<User strokeWidth={1.5} className="h-6 w-6" />}
            to={paths.workspace.settings.members(slug)}
            visible={["superadmin", "admin", "manager"].includes(user?.role)}
          />
          <TabItem
            title={t("workspaces—settings.agent")}
            icon={<Bot strokeWidth={1.5} className="h-6 w-6" />}
            to={paths.workspace.settings.agentConfig(slug)}
          />
        </div>
        <div className="px-4 md:px-16 py-6">
          <TabContent
            slug={slug}
            workspace={workspace}
            deletionProtected={deletionProtected}
          />
        </div>
      </div>
    </div>
  );
}

function TabItem({ title, icon, to, visible = true }) {
  if (!visible) return null;
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${
          isActive
            ? "text-sky-400 pb-4 border-b-[4px] -mb-[19px] border-sky-400"
            : "text-white/60 hover:text-sky-400"
        } ` +
        " flex shrink-0 gap-x-2 items-center font-medium whitespace-nowrap"
      }
    >
      {icon}
      <div>{title}</div>
    </NavLink>
  );
}
