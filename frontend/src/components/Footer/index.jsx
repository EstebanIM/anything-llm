import { isMobile } from "react-device-detect";
import { Tooltip } from "react-tooltip";
import UserButton from "../UserMenu/UserButton";

export default function Footer({ allowMobile = false }) {
  if (isMobile && !allowMobile) return null;

  return (
    <div className="flex justify-center mb-2">
      <UserButton />
      <Tooltip
        id="footer-item"
        place="top"
        delayShow={300}
        className="tooltip !text-xs z-99"
      />
    </div>
  );
}
