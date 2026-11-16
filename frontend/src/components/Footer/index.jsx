import { isMobile } from "react-device-detect";
import { Tooltip } from "react-tooltip";
import { AUTH_TOKEN } from "@/utils/constants";
import UserButton from "../UserMenu/UserButton";
import SettingsButton from "../SettingsButton";

export default function Footer({ allowMobile = false }) {
  if (isMobile && !allowMobile) return null;
  // Single-user mode without a password has no session and no user menu,
  // so settings stay reachable through the settings button.
  const hasSession = !!window.localStorage.getItem(AUTH_TOKEN);

  return (
    <div className="flex justify-center mb-2 px-2">
      {hasSession ? <UserButton /> : <SettingsButton />}
      <Tooltip
        id="footer-item"
        place="top"
        delayShow={300}
        className="tooltip !text-xs z-99"
      />
    </div>
  );
}
