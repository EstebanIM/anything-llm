import useLoginMode from "@/hooks/useLoginMode";
import usePfp from "@/hooks/usePfp";
import useUser from "@/hooks/useUser";
import paths from "@/utils/paths";
import { userFromStorage } from "@/utils/request";
import { Gear, House, Person } from "@phosphor-icons/react";
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

export default function UserButton({ className = "" }) {
  const { t } = useTranslation();
  const mode = useLoginMode();
  const { user } = useUser();
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

  useEffect(() => {
    if (showMenu) {
      document.addEventListener("mousedown", handleClose);
    }
    return () => document.removeEventListener("mousedown", handleClose);
  }, [showMenu]);

  if (mode === null) return null;
  return (
    <div className={`relative w-fit h-fit z-40 ${className}`}>
      <button
        ref={buttonRef}
        onClick={() => setShowMenu(!showMenu)}
        type="button"
        className="uppercase transition-all duration-300 w-[35px] h-[35px] text-base font-semibold rounded-full flex items-center bg-theme-action-menu-bg hover:bg-theme-action-menu-item-hover justify-center text-white p-2 hover:border-slate-100 hover:border-opacity-50 border-transparent border"
      >
        {mode === "multi" ? <UserDisplay /> : <Person size={14} />}
      </button>

      {showMenu && (
        <div
          ref={menuRef}
          className="min-w-[190px] rounded-lg absolute bottom-12 left-1/2 -translate-x-1/2 bg-theme-action-menu-bg p-2 flex items-center-justify-center shadow-2xl"
        >
          <div className="flex flex-col gap-y-2">
            {canAccessSettings && (
              <Link
                to={settingsPath}
                onClick={() => setShowMenu(false)}
                className="text-white hover:bg-theme-action-menu-item-hover w-full text-left px-4 py-1.5 rounded-md flex items-center gap-x-2"
              >
                {isInSettings ? <House size={16} /> : <Gear size={16} />}
                <span>{settingsLabel}</span>
              </Link>
            )}
            {mode === "multi" && !!user && (
              <button
                onClick={handleOpenAccountModal}
                className="border-none text-white hover:bg-theme-action-menu-item-hover w-full text-left px-4 py-1.5 rounded-md"
              >
                {t("profile_settings.account")}
              </button>
            )}
            <a
              href={paths.mailToMintplex()}
              className="text-white hover:bg-theme-action-menu-item-hover w-full text-left px-4 py-1.5 rounded-md"
            >
              {t("profile_settings.support")}
            </a>
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
              className="text-white hover:bg-theme-action-menu-item-hover w-full text-left px-4 py-1.5 rounded-md"
            >
              {t("profile_settings.signout")}
            </button>
          </div>
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

function UserDisplay() {
  const { pfp } = usePfp();
  const user = userFromStorage();

  if (pfp) {
    return (
      <div className="w-[35px] h-[35px] rounded-full flex-shrink-0 overflow-hidden transition-all duration-300 bg-gray-100 hover:border-slate-100 hover:border-opacity-50 border-transparent border hover:opacity-60">
        <img
          src={pfp}
          alt="User profile picture"
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  return user?.username?.slice(0, 2) || "AA";
}
