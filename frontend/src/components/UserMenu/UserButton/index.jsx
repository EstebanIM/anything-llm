import useLoginMode from "@/hooks/useLoginMode";
import usePfp from "@/hooks/usePfp";
import useUser from "@/hooks/useUser";
import paths from "@/utils/paths";
import {
  Settings,
  House,
  User,
  LogOut,
  CircleUserRound,
  Keyboard,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import AccountModal from "../AccountModal";
import {
  AUTH_TIMESTAMP,
  AUTH_TOKEN,
  AUTH_USER,
  LAST_VISITED_WORKSPACE,
  USER_PROMPT_INPUT_MAP,
} from "@/utils/constants";
import { useTranslation } from "react-i18next";
import { Link, useMatch } from "react-router-dom";
import useIsMobile from "@/hooks/useIsMobile";
import {
  ariaKeyShortcuts,
  showKeyboardShortcutsHelp,
} from "@/utils/keyboardShortcuts";

const MENU_ITEM =
  "border-none text-white hover:bg-theme-action-menu-item-hover w-full text-left px-3 py-2 min-h-[44px] md:min-h-0 rounded-lg flex items-center gap-x-2";

export default function UserButton({ className = "" }) {
  const { t } = useTranslation();
  const mode = useLoginMode();
  const { user } = useUser();
  const isMobile = useIsMobile();
  const inSettingsIndex = useMatch("/settings");
  const inSettingsChild = useMatch("/settings/*");
  const isInSettings = !!inSettingsIndex || !!inSettingsChild;
  const canAccessSettings = !user || user?.role !== "default";
  const settingsPath = isInSettings ? paths.home() : paths.settings.interface();
  const settingsLabel = isInSettings
    ? t("profile_settings.back_to_workspaces")
    : t("profile_settings.settings");
  const menuRef = useRef();
  const buttonRef = useRef();
  const [showMenu, setShowMenu] = useState(false);
  const [showAccountSettings, setShowAccountSettings] = useState(false);

  const handleClose = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      !buttonRef.current?.contains(event.target)
    ) {
      setShowMenu(false);
    }
  };

  const handleOpenAccountModal = () => {
    setShowAccountSettings(true);
    setShowMenu(false);
  };

  const handleOpenShortcuts = () => {
    setShowMenu(false);
    showKeyboardShortcutsHelp(true);
  };

  useEffect(() => {
    if (!showMenu) return;
    const items = () => [
      ...(menuRef.current?.querySelectorAll('[role="menuitem"]') || []),
    ];
    items()[0]?.focus();

    // Menu keyboard model: arrows move, Home/End jump, Escape closes and
    // returns focus to the button, Tab leaves the menu and closes it.
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setShowMenu(false);
        buttonRef.current?.focus();
        return;
      }
      if (event.key === "Tab") return setShowMenu(false);
      const list = items();
      if (list.length === 0) return;
      const current = list.indexOf(document.activeElement);
      let next = null;
      if (event.key === "ArrowDown") next = (current + 1) % list.length;
      if (event.key === "ArrowUp")
        next = (current - 1 + list.length) % list.length;
      if (event.key === "Home") next = 0;
      if (event.key === "End") next = list.length - 1;
      if (next === null) return;
      event.preventDefault();
      list[next].focus();
    };
    document.addEventListener("mousedown", handleClose);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClose);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showMenu]);

  if (mode === null) return null;

  const isWideMode = mode === "multi" && !!user;
  const roleLabel =
    isWideMode && user?.role ? t(`profile_settings.roles.${user.role}`) : "";

  return (
    <div
      className={`relative ${isWideMode ? "w-full" : "w-fit"} h-fit z-40 ${className}`}
    >
      {isWideMode ? (
        <button
          ref={buttonRef}
          onClick={() => setShowMenu(!showMenu)}
          type="button"
          aria-haspopup="menu"
          aria-expanded={showMenu}
          className="w-full flex items-center gap-x-3 px-2.5 py-2 rounded-lg bg-theme-sidebar-item-default hover:bg-theme-sidebar-item-hover transition-colors duration-quick text-left"
        >
          <Avatar user={user} />
          <div className="flex flex-col items-start min-w-0 flex-1 leading-tight">
            <span className="text-theme-text-primary text-sm font-semibold truncate w-full">
              {user.username}
            </span>
            <span className="text-theme-text-secondary text-xs truncate w-full">
              {roleLabel}
            </span>
          </div>
        </button>
      ) : (
        <button
          ref={buttonRef}
          onClick={() => setShowMenu(!showMenu)}
          type="button"
          aria-label={t("profile_settings.account")}
          aria-haspopup="menu"
          aria-expanded={showMenu}
          className="uppercase transition-colors duration-quick ease-smooth w-11 h-11 md:w-[35px] md:h-[35px] text-base font-semibold rounded-full flex items-center bg-theme-action-menu-bg hover:bg-theme-action-menu-item-hover justify-center text-white p-2 hover:border-slate-100 hover:border-opacity-50 border-transparent border"
        >
          <User strokeWidth={1.5} size={14} aria-hidden="true" />
        </button>
      )}

      {showMenu && (
        <div
          ref={menuRef}
          role="menu"
          aria-label={t("profile_settings.account")}
          className={`absolute ${
            isWideMode
              ? "bottom-full mb-2 left-0 right-0"
              : "bottom-12 left-1/2 -translate-x-1/2"
          } min-w-[200px] rounded-xl bg-theme-action-menu-bg p-2 shadow-2xl flex flex-col gap-y-1 z-50 animate-in fade-in-0`}
        >
          {canAccessSettings && (
            <Link
              to={settingsPath}
              role="menuitem"
              onClick={() => setShowMenu(false)}
              aria-keyshortcuts={
                isInSettings ? undefined : ariaKeyShortcuts("settings")
              }
              className={MENU_ITEM}
            >
              {isInSettings ? (
                <House strokeWidth={1.5} size={16} aria-hidden="true" />
              ) : (
                <Settings strokeWidth={1.5} size={16} aria-hidden="true" />
              )}
              <span>{settingsLabel}</span>
            </Link>
          )}
          {mode === "multi" && !!user && (
            <button
              type="button"
              role="menuitem"
              aria-haspopup="dialog"
              onClick={handleOpenAccountModal}
              className={MENU_ITEM}
            >
              <CircleUserRound strokeWidth={1.5} size={16} aria-hidden="true" />
              <span>{t("profile_settings.account")}</span>
            </button>
          )}
          {/* Phones rarely have a keyboard: the entry stays on wider screens. */}
          {!isMobile && (
            <button
              type="button"
              role="menuitem"
              aria-haspopup="dialog"
              aria-keyshortcuts={ariaKeyShortcuts("help")}
              onClick={handleOpenShortcuts}
              className={MENU_ITEM}
            >
              <Keyboard strokeWidth={1.5} size={16} aria-hidden="true" />
              <span>{t("keyboard-shortcuts.title")}</span>
            </button>
          )}
          <button
            onClick={() => {
              window.localStorage.removeItem(AUTH_USER);
              window.localStorage.removeItem(AUTH_TOKEN);
              window.localStorage.removeItem(AUTH_TIMESTAMP);
              window.localStorage.removeItem(LAST_VISITED_WORKSPACE);
              window.localStorage.removeItem(USER_PROMPT_INPUT_MAP);
              window.location.replace(paths.home());
            }}
            type="button"
            role="menuitem"
            className={MENU_ITEM}
          >
            <LogOut strokeWidth={1.5} size={16} aria-hidden="true" />
            <span>{t("profile_settings.signout")}</span>
          </button>
        </div>
      )}
      {user && showAccountSettings && (
        <AccountModal
          user={user}
          hideModal={() => setShowAccountSettings(false)}
        />
      )}
    </div>
  );
}

function Avatar({ user }) {
  const { pfp } = usePfp();

  if (pfp) {
    return (
      <div className="w-[35px] h-[35px] rounded-full flex-shrink-0 overflow-hidden bg-gray-100 border border-transparent">
        <img src={pfp} alt="" className="w-full h-full object-cover" />
      </div>
    );
  }

  const initials = user?.username?.slice(0, 2).toUpperCase() || "AA";
  return (
    <div className="w-[35px] h-[35px] rounded-full flex-shrink-0 flex items-center justify-center bg-theme-action-menu-bg text-theme-text-primary text-base font-semibold uppercase">
      {initials}
    </div>
  );
}
