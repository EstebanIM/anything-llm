import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Undo2,
  MessageSquareText,
  Database,
  Bot,
  User,
  Wrench,
} from "lucide-react";
import Sidebar from "@/components/Sidebar";
import Workspace from "@/models/workspace";
import PasswordModal, { usePasswordModal } from "@/components/Modals/Password";
import { FullScreenLoader } from "@/components/Preloader";
import paths from "@/utils/paths";
import useUser from "@/hooks/useUser";
import useIsMobile from "@/hooks/useIsMobile";
import System from "@/models/system";
import GeneralAppearance from "./GeneralAppearance";
import ChatSettings from "./ChatSettings";
import VectorDatabase from "./VectorDatabase";
import Members from "./Members";
import WorkspaceAgentConfiguration from "./AgentConfig";

const MEMBER_MANAGERS = ["superadmin", "admin", "manager"];

const TABS = [
  {
    id: "general-appearance",
    Component: GeneralAppearance,
    titleKey: "workspaces—settings.general",
    Icon: Wrench,
    to: paths.workspace.settings.generalAppearance,
  },
  {
    id: "chat-settings",
    Component: ChatSettings,
    titleKey: "workspaces—settings.chat",
    Icon: MessageSquareText,
    to: paths.workspace.settings.chatSettings,
  },
  {
    id: "vector-database",
    Component: VectorDatabase,
    titleKey: "workspaces—settings.vector",
    Icon: Database,
    to: paths.workspace.settings.vectorDatabase,
  },
  {
    id: "members",
    Component: Members,
    titleKey: "workspaces—settings.members",
    Icon: User,
    to: paths.workspace.settings.members,
    managersOnly: true,
  },
  {
    id: "agent-config",
    Component: WorkspaceAgentConfiguration,
    titleKey: "workspaces—settings.agent",
    Icon: Bot,
    to: paths.workspace.settings.agentConfig,
  },
];

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
  const isMobile = useIsMobile();
  const [workspace, setWorkspace] = useState(null);
  const [deletionProtected, setDeletionProtected] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getWorkspace() {
      if (!slug) return;
      const _workspace = await Workspace.bySlug(slug);
      if (!_workspace) {
        setWorkspace(null);
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

  const canManageMembers = MEMBER_MANAGERS.includes(user?.role);
  const tabs = TABS.filter((item) => !item.managersOnly || canManageMembers);
  const activeTab = tabs.find((item) => item.id === tab);

  return (
    <div className="w-screen h-screen overflow-hidden bg-zinc-950 light:bg-slate-50 flex">
      {!isMobile && <Sidebar />}
      <main className="relative md:ml-[2px] md:mr-[16px] md:my-[16px] md:rounded-[16px] bg-zinc-900 light:bg-white w-full h-full md:h-[calc(100%-32px)] overflow-y-auto">
        {!workspace ? (
          <NotFound
            title={t("workspace-settings.not-found.workspace-title")}
            body={t("workspace-settings.not-found.workspace-body")}
            linkTo={paths.home()}
            linkLabel={t("workspace-settings.not-found.home")}
          />
        ) : (
          <>
            <header className="flex items-center gap-x-3 px-4 md:px-16 pt-4 md:pt-6">
              <Link
                to={paths.workspace.chat(slug)}
                aria-label={t("workspace-settings.back", {
                  name: workspace.name,
                })}
                className="shrink-0 w-11 h-11 md:-ml-14 flex items-center justify-center rounded-full text-theme-text-secondary bg-transparent border border-theme-modal-border hover:bg-theme-bg-primary hover:text-theme-text-primary transition-colors duration-quick ease-smooth"
              >
                <Undo2
                  strokeWidth={1.5}
                  className="h-5 w-5"
                  aria-hidden="true"
                />
              </Link>
              <h1 className="min-w-0 text-lg leading-6 font-bold text-white break-words">
                {t("workspace-settings.title", { name: workspace.name })}
              </h1>
            </header>
            <SettingsTabs tabs={tabs} slug={slug} activeId={activeTab?.id} />
            <div className="px-4 md:px-16 py-6">
              {activeTab ? (
                <activeTab.Component
                  slug={slug}
                  workspace={workspace}
                  deletionProtected={deletionProtected}
                  onWorkspaceUpdated={(updated) =>
                    setWorkspace((current) => ({ ...current, ...updated }))
                  }
                />
              ) : (
                <NotFound
                  headingLevel="h2"
                  title={t("workspace-settings.not-found.section-title")}
                  body={t("workspace-settings.not-found.section-body")}
                  linkTo={paths.workspace.settings.generalAppearance(slug)}
                  linkLabel={t("workspace-settings.not-found.general")}
                  className="px-0 py-4"
                />
              )}
            </div>
          </>
        )}
      </main>
    </div>
  );
}

/**
 * Section links. They stay links (each section is its own URL) with
 * aria-current, inside a named nav. On narrow screens the row scrolls
 * sideways and fades at the edge that has more links.
 */
function SettingsTabs({ tabs, slug, activeId }) {
  const { t } = useTranslation();
  const listRef = useRef(null);
  const [overflow, setOverflow] = useState({ start: false, end: false });

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const update = () =>
      setOverflow({
        start: list.scrollLeft > 1,
        end: list.scrollLeft + list.clientWidth < list.scrollWidth - 1,
      });
    update();
    list.addEventListener("scroll", update, { passive: true });
    const observer = new ResizeObserver(update);
    observer.observe(list);
    return () => {
      list.removeEventListener("scroll", update);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    listRef.current
      ?.querySelector('[aria-current="page"]')
      ?.scrollIntoView({ block: "nearest", inline: "nearest" });
  }, [activeId]);

  return (
    <nav
      aria-label={t("workspace-settings.sections")}
      className="relative mt-4 border-b-2 border-white/10 light:border-slate-200"
    >
      <ul
        ref={listRef}
        className="flex gap-x-6 md:gap-x-10 overflow-x-auto no-scroll px-4 md:px-16 -mb-[2px]"
      >
        {tabs.map((item) => (
          <li key={item.id} className="shrink-0">
            <TabItem
              title={t(item.titleKey)}
              icon={
                <item.Icon
                  strokeWidth={1.5}
                  className="h-6 w-6"
                  aria-hidden="true"
                />
              }
              to={item.to(slug)}
            />
          </li>
        ))}
      </ul>
      {overflow.start && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-zinc-900 light:from-white to-transparent"
        />
      )}
      {overflow.end && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-zinc-900 light:from-white to-transparent"
        />
      )}
    </nav>
  );
}

function TabItem({ title, icon, to }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-x-2 min-h-[44px] pb-3 pt-1 border-b-4 font-medium whitespace-nowrap transition-colors duration-quick ease-smooth ${
          isActive
            ? "text-sky-400 border-sky-400 light:text-sky-700 light:border-sky-700"
            : "text-white/60 border-transparent hover:text-sky-400 light:hover:text-sky-700"
        }`
      }
    >
      {icon}
      <span>{title}</span>
    </NavLink>
  );
}

function NotFound({
  title,
  body,
  linkTo,
  linkLabel,
  headingLevel = "h1",
  className = "px-4 md:px-16 py-10",
}) {
  const Heading = headingLevel;
  return (
    <div className={`flex flex-col items-start gap-y-3 ${className}`}>
      <Heading className="text-lg leading-6 font-bold text-white">
        {title}
      </Heading>
      <p className="text-sm text-theme-text-secondary">{body}</p>
      <Link
        to={linkTo}
        className="inline-flex items-center min-h-[44px] md:min-h-[38px] px-5 rounded-lg border border-zinc-500 light:border-slate-500 text-sm text-white hover:bg-zinc-800 light:hover:bg-slate-100 transition-colors duration-quick ease-smooth"
      >
        {linkLabel}
      </Link>
    </div>
  );
}
