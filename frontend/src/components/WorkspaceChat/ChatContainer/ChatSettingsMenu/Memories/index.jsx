import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import useUser from "@/hooks/useUser";
import System from "@/models/system";
import { useMemoriesSidebar, useSourcesSidebar } from "../../ChatSidebar";
import { MENU_ITEM_CLASSES } from "../Submenu";

export default function MemoriesRow({ onClose }) {
  const { t } = useTranslation();
  const { user } = useUser();
  const { toggleSidebar } = useMemoriesSidebar();
  const { closeSidebar } = useSourcesSidebar();
  const [memoryEnabled, setMemoryEnabled] = useState(null);

  const isAdmin = !user || ["admin", "superadmin"].includes(user?.role);

  useEffect(() => {
    System.keys().then((settings) => {
      setMemoryEnabled(!!settings?.MemoryEnabled);
    });
  }, []);

  function handleClick() {
    closeSidebar();
    toggleSidebar();
    onClose({ returnFocus: true });
  }

  if (memoryEnabled === null) return null;
  if (!isAdmin && !memoryEnabled) return null;

  return (
    <button
      type="button"
      role="menuitem"
      onClick={handleClick}
      className={MENU_ITEM_CLASSES}
    >
      {t("chat_window.memories.title")}
    </button>
  );
}
