import React, { useEffect, useRef, useState } from "react";
import MobileDrawer from "../Sidebar/MobileDrawer";
import paths from "@/utils/paths";
import useLogo from "@/hooks/useLogo";
import {
  House,
  List,
  FlaskConical,
  Settings,
  UserRoundCog,
  SquarePen,
  Nut,
  Wrench,
  Cable,
} from "lucide-react";
import AgentIcon from "@/media/animations/agent-static.png";
import useUser from "@/hooks/useUser";
import useIsMobile from "@/hooks/useIsMobile";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import showToast from "@/utils/toast";
import Option from "./MenuOption";
import { CanViewChatHistoryProvider } from "../CanViewChatHistory";
import useAppVersion from "@/hooks/useAppVersion";
export default function SettingsSidebar() {
  const { t } = useTranslation();
  const { logo } = useLogo();
  const { user } = useUser();
  const sidebarRef = useRef(null);
  const menuButtonRef = useRef(null);
  const [showSidebar, setShowSidebar] = useState(false);
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <>
        <header className="fixed top-0 left-0 right-0 z-10 flex justify-between items-center px-4 py-2 bg-zinc-925 light:bg-white text-theme-text-secondary shadow-lg h-16">
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setShowSidebar(true)}
            aria-label={t("sidebar-nav.open-menu")}
            aria-expanded={showSidebar}
            className="rounded-md w-11 h-11 flex items-center justify-center text-theme-text-secondary"
          >
            <List strokeWidth={1.5} className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex items-center justify-center flex-grow">
            {logo && (
              <img
                src={logo}
                alt=""
                className="block mx-auto h-6 w-auto"
                style={{
                  maxHeight: "40px",
                  objectFit: "contain",
                }}
              />
            )}
          </div>
          <div className="w-11" aria-hidden="true"></div>
        </header>
        <MobileDrawer
          open={showSidebar}
          onClose={() => setShowSidebar(false)}
          returnFocusRef={menuButtonRef}
          label={t("settings.title")}
        >
          <div className="w-full h-full flex flex-col overflow-x-hidden items-between">
            {/* Header Information */}
            <div
              className={`flex w-full items-center gap-x-4 ${logo ? "justify-between" : "justify-end"}`}
            >
              {logo && (
                <div className="flex shrink-1 w-fit items-center justify-start">
                  <img
                    src={logo}
                    alt=""
                    className="rounded w-full max-h-[40px]"
                    style={{
                      objectFit: "contain",
                    }}
                  />
                </div>
              )}
              <div className="flex gap-x-2 items-center text-slate-500 shrink-0">
                <Link
                  to={paths.home()}
                  aria-label={t("profile_settings.back_to_workspaces")}
                  className="transition-colors duration-quick w-11 h-11 flex items-center justify-center rounded-lg text-white bg-theme-action-menu-bg hover:bg-theme-action-menu-item-hover"
                >
                  <House
                    strokeWidth={1.5}
                    className="h-4 w-4"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>
            {/* Primary Body */}
            <div className="h-full flex flex-col w-full justify-between pt-4 overflow-y-auto thin-scroll">
              <div className="h-auto md:sidebar-items">
                <div className="flex flex-col gap-y-4 pb-[60px]">
                  <SidebarOptions user={user} t={t} />
                  <div className="h-px bg-theme-sidebar-border mx-3 mt-[14px]" />
                  <Link
                    hidden={
                      user?.hasOwnProperty("role") &&
                      !["admin", "superadmin"].includes(user.role)
                    }
                    to={paths.settings.privacy()}
                    className="flex items-center min-h-[44px] text-theme-text-secondary hover:text-white light:hover:text-theme-text-primary text-sm leading-[18px] mx-3 rounded-sm"
                  >
                    {t("settings.privacy")}
                  </Link>
                  <AppVersion />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 pt-2 pb-6 rounded-br-[26px] bg-zinc-925/80 light:bg-slate-200/80 backdrop-filter backdrop-blur-md z-10">
                <Footer allowMobile />
              </div>
            </div>
          </div>
        </MobileDrawer>
      </>
    );
  }

  return (
    <>
      <div>
        {logo && (
          <Link
            to={paths.home()}
            aria-label={t("sidebar-nav.go-home")}
            className="flex shrink-0 max-w-[55%] items-center justify-start mx-[20.5px] my-[18px]"
          >
            <img
              src={logo}
              alt=""
              className="rounded max-h-[24px]"
              style={{
                objectFit: "contain",
              }}
            />
          </Link>
        )}
        <div
          ref={sidebarRef}
          className={`relative m-[16px] rounded-[16px] bg-theme-bg-sidebar border-[2px] border-theme-sidebar-border light:border-none min-w-[250px] p-[10px] ${logo ? "h-[calc(100%-76px)]" : "h-[calc(100%-32px)]"}`}
        >
          <div className="w-full h-full flex flex-col overflow-x-hidden items-between min-w-[235px]">
            <div className="text-theme-text-secondary text-sm font-medium uppercase mt-[4px] mb-0 ml-2">
              {t("settings.title")}
            </div>
            <div className="relative h-[calc(100%-60px)] flex flex-col w-full justify-between pt-[10px] pr-1 overflow-y-auto thin-scroll">
              <div className="h-auto sidebar-items">
                <div className="flex flex-col gap-y-2 pb-[60px]">
                  <SidebarOptions user={user} t={t} />
                  <div className="h-px bg-theme-sidebar-border mx-3 mt-[14px]" />
                  <Link
                    hidden={
                      user?.hasOwnProperty("role") &&
                      !["admin", "superadmin"].includes(user.role)
                    }
                    to={paths.settings.privacy()}
                    className="text-theme-text-secondary hover:text-white hover:light:text-theme-text-primary text-xs leading-[18px] mx-3 rounded-sm"
                  >
                    {t("settings.privacy")}
                  </Link>
                  <AppVersion />
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 pt-4 pb-3 rounded-b-[16px] bg-zinc-925/80 light:bg-slate-200/80 backdrop-filter backdrop-blur-md z-10">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
const SidebarOptions = ({ user = null, t }) => (
  <CanViewChatHistoryProvider>
    {({ viewable: canViewChatHistory }) => (
      <>
        <Option
          btnText={t("settings.ai-providers")}
          icon={
            <Settings strokeWidth={1.5} className="h-5 w-5 flex-shrink-0" />
          }
          user={user}
          childOptions={[
            {
              btnText: t("settings.llm"),
              href: paths.settings.llmPreference(),
              flex: true,
              roles: ["superadmin", "admin"],
            },
            {
              btnText: t("settings.vector-database"),
              href: paths.settings.vectorDatabase(),
              flex: true,
              roles: ["superadmin", "admin"],
            },
            {
              btnText: t("settings.embedder"),
              href: paths.settings.embedder.modelPreference(),
              flex: true,
              roles: ["superadmin", "admin"],
            },
            {
              btnText: t("settings.text-splitting"),
              href: paths.settings.embedder.chunkingPreference(),
              flex: true,
              roles: ["superadmin", "admin"],
            },
            {
              btnText: t("settings.image-generation"),
              href: paths.settings.imageGenerationPreference(),
              flex: true,
              roles: ["superadmin", "admin"],
            },
            {
              btnText: t("settings.voice-speech"),
              href: paths.settings.audioPreference(),
              flex: true,
              roles: ["superadmin", "admin"],
            },
            {
              btnText: t("settings.transcription"),
              href: paths.settings.transcriptionPreference(),
              flex: true,
              roles: ["superadmin", "admin"],
            },
            {
              btnText: t("settings.model-router"),
              href: paths.settings.modelRouters(),
              flex: true,
              roles: ["superadmin", "admin"],
            },
          ]}
        />
        <Option
          btnText={t("settings.admin")}
          icon={
            <UserRoundCog strokeWidth={1.5} className="h-5 w-5 flex-shrink-0" />
          }
          user={user}
          childOptions={[
            {
              btnText: t("settings.users"),
              href: paths.settings.users(),
              roles: ["superadmin", "admin", "manager"],
            },
            {
              btnText: t("settings.workspaces"),
              href: paths.settings.workspaces(),
              roles: ["superadmin", "admin", "manager"],
            },
            {
              hidden: !canViewChatHistory,
              btnText: t("settings.workspace-chats"),
              href: paths.settings.chats(),
              flex: true,
              roles: ["superadmin", "admin", "manager"],
            },
            {
              btnText: t("settings.invites"),
              href: paths.settings.invites(),
              roles: ["superadmin", "admin", "manager"],
            },
            {
              btnText: t("sidebar-nav.default-system-prompt"),
              href: paths.settings.defaultSystemPrompt(),
              flex: true,
              roles: ["superadmin", "admin"],
            },
          ]}
        />
        <Option
          btnText={t("settings.agent-skills")}
          icon={
            <img
              src={AgentIcon}
              alt="Agent"
              className="h-5 w-5 flex-shrink-0 light:invert"
            />
          }
          href={paths.settings.agentSkills()}
          user={user}
          flex={true}
          roles={["superadmin", "admin"]}
        />
        <Option
          btnText={t("settings.customization")}
          icon={
            <SquarePen strokeWidth={1.5} className="h-5 w-5 flex-shrink-0" />
          }
          user={user}
          childOptions={[
            {
              btnText: t("settings.interface"),
              href: paths.settings.interface(),
              flex: true,
              roles: ["superadmin", "admin", "manager"],
            },
            {
              btnText: t("settings.branding"),
              href: paths.settings.branding(),
              flex: true,
              roles: ["superadmin", "admin", "manager"],
            },
            {
              btnText: t("settings.chat"),
              href: paths.settings.chat(),
              flex: true,
              roles: ["superadmin", "admin", "manager"],
            },
          ]}
        />
        <Option
          btnText={t("settings.channels")}
          icon={<Cable strokeWidth={1.5} className="h-5 w-5 flex-shrink-0" />}
          user={user}
          childOptions={[
            {
              btnText: t("settings.available-channels.telegram"),
              href: paths.settings.telegram(),
              flex: true,
              hidden: !!user,
            },
          ]}
        />
        <Option
          btnText={t("settings.tools")}
          icon={<Wrench strokeWidth={1.5} className="h-5 w-5 flex-shrink-0" />}
          user={user}
          childOptions={[
            {
              hidden: !canViewChatHistory,
              btnText: t("settings.embeds"),
              href: paths.settings.embedChatWidgets(),
              flex: true,
              roles: ["superadmin", "admin"],
            },
            {
              btnText: t("settings.event-logs"),
              href: paths.settings.logs(),
              flex: true,
              roles: ["superadmin", "admin"],
            },
            {
              btnText: t("settings.scheduled-jobs"),
              href: paths.settings.scheduledJobs(),
              flex: true,
              hidden: !!user,
            },
            {
              btnText: t("settings.api-keys"),
              href: paths.settings.apiKeys(),
              flex: true,
              roles: ["superadmin", "admin"],
            },
            {
              btnText: t("settings.system-prompt-variables"),
              href: paths.settings.systemPromptVariables(),
              flex: true,
              roles: ["superadmin", "admin"],
            },
            {
              btnText: t("settings.browser-extension"),
              href: paths.settings.browserExtension(),
              flex: true,
              roles: ["superadmin", "admin", "manager"],
            },
          ]}
        />
        <Option
          btnText={t("settings.security")}
          icon={<Nut strokeWidth={1.5} className="h-5 w-5 flex-shrink-0" />}
          href={paths.settings.security()}
          user={user}
          flex={true}
          roles={["superadmin", "admin", "manager"]}
          hidden={user?.role}
        />
        <HoldToReveal key="exp_features">
          <Option
            btnText={t("settings.experimental-features")}
            icon={
              <FlaskConical
                strokeWidth={1.5}
                className="h-5 w-5 flex-shrink-0"
              />
            }
            href={paths.settings.experimental()}
            user={user}
            flex={true}
            roles={["superadmin", "admin"]}
          />
        </HoldToReveal>
      </>
    )}
  </CanViewChatHistoryProvider>
);
const EXPERIMENTAL_UNLOCKED =
  "anythingllm_experimental_feature_preview_unlocked";

/** Holding Ctrl (or Cmd) for `holdForMs` reveals the experimental features. */
function HoldToReveal({ children, holdForMs = 3_000 }) {
  const { t } = useTranslation();
  const timer = useRef(null);
  const [showing, setShowing] = useState(
    () => !!window.localStorage.getItem(EXPERIMENTAL_UNLOCKED)
  );

  useEffect(() => {
    if (showing) return;
    const cancel = () => {
      clearTimeout(timer.current);
      timer.current = null;
    };
    const onPress = (e) => {
      // Held keys repeat keydown: only the first press starts the timer.
      if (!["Control", "Meta"].includes(e.key) || timer.current !== null)
        return;
      timer.current = setTimeout(() => {
        timer.current = null;
        window.localStorage.setItem(EXPERIMENTAL_UNLOCKED, "enabled");
        setShowing(true);
        showToast(t("notices.experimental-unlocked"), "success");
      }, holdForMs);
    };
    const onRelease = (e) => {
      if (["Control", "Meta"].includes(e.key)) cancel();
    };
    window.addEventListener("keydown", onPress);
    window.addEventListener("keyup", onRelease);
    // Releasing the key in another window never fires keyup here.
    window.addEventListener("blur", cancel);
    return () => {
      cancel();
      window.removeEventListener("keydown", onPress);
      window.removeEventListener("keyup", onRelease);
      window.removeEventListener("blur", cancel);
    };
  }, [showing]);

  if (!showing) return null;
  return children;
}
function AppVersion() {
  const { version, isLoading } = useAppVersion();
  if (isLoading || !version) return null;
  return (
    <span className="text-theme-text-secondary text-xs mx-3">v{version}</span>
  );
}
