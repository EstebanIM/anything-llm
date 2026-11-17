import React, { useRef, useState } from "react";
import { FolderPlus, List } from "lucide-react";
import { useTranslation } from "react-i18next";
import NewWorkspaceModal, {
  useNewWorkspaceModal,
} from "../Modals/NewWorkspace";
import NewFolderModal, { useNewFolderModal } from "../Modals/NewFolderModal";
import ActiveWorkspaces, { REFETCH_WORKSPACES_EVENT } from "./ActiveWorkspaces";
import useLogo from "@/hooks/useLogo";
import useUser from "@/hooks/useUser";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import paths from "@/utils/paths";
import { useSidebarToggle, ToggleSidebarButton } from "./SidebarToggle";
import SearchBox from "./SearchBox";
import { Tooltip } from "react-tooltip";
import { createPortal } from "react-dom";
import MobileDrawer from "./MobileDrawer";

export default function Sidebar() {
  const { t } = useTranslation();
  const { user } = useUser();
  const { logo } = useLogo();
  const sidebarRef = useRef(null);
  const { showSidebar, setShowSidebar, canToggleSidebar } = useSidebarToggle();
  const {
    showing: showingNewWsModal,
    showModal: showNewWsModal,
    hideModal: hideNewWsModal,
  } = useNewWorkspaceModal();
  const {
    showing: showingNewFolderModal,
    showModal: showNewFolderModal,
    hideModal: hideNewFolderModal,
  } = useNewFolderModal();

  return (
    <>
      <div
        style={{
          width: showSidebar ? "292px" : "0px",
          paddingLeft: showSidebar ? "0px" : "16px",
        }}
        className="relative transition-[width,padding] duration-base ease-smooth"
      >
        {canToggleSidebar && (
          <ToggleSidebarButton
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
          />
        )}
        {/* Collapsed: out of the tab order so the keyboard never lands on
            hidden links. */}
        <div
          className="overflow-hidden h-full"
          {...(!showSidebar && { inert: "" })}
        >
          {logo && (
            <div className="flex shrink-0 w-full justify-center my-[18px]">
              <div className="flex w-[250px] min-w-[250px]">
                <Link
                  to={paths.home()}
                  aria-label={t("sidebar-nav.go-home")}
                  className="block rounded-md"
                >
                  <img
                    src={logo}
                    alt=""
                    className={`rounded max-h-[24px] object-contain transition-opacity duration-base ease-smooth ${showSidebar ? "opacity-100" : "opacity-0"}`}
                  />
                </Link>
              </div>
            </div>
          )}
          <div
            ref={sidebarRef}
            className={`relative m-[16px] rounded-[16px] bg-zinc-925 light:bg-slate-200 border-[2px] border-theme-sidebar-border light:border-none min-w-[250px] p-[10px] ${logo ? "h-[calc(100%-76px)]" : "h-[calc(100%-32px)]"}`}
          >
            <div className="flex flex-col h-full overflow-hidden">
              <div className="flex-grow flex flex-col min-w-[235px] min-h-0">
                <div className="relative h-[calc(100%-60px)] flex flex-col w-full justify-between pt-[10px] pr-1 overflow-y-auto thin-scroll">
                  <div className="flex flex-col gap-y-[14px]">
                    <SearchBox user={user} showNewWsModal={showNewWsModal} />
                    {(!user || user?.role !== "default") && (
                      <button
                        type="button"
                        onClick={showNewFolderModal}
                        className="flex items-center gap-x-2 w-full px-3 py-[5px] rounded-lg text-theme-text-secondary hover:text-white light:hover:text-slate-900 hover:bg-theme-sidebar-subitem-hover transition-colors duration-quick text-sm"
                      >
                        <FolderPlus
                          strokeWidth={1.5}
                          size={16}
                          aria-hidden="true"
                        />
                        <span>{t("workspace-folders.new")}</span>
                      </button>
                    )}
                    <ActiveWorkspaces />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 pb-3 rounded-b-[16px] bg-zinc-925 light:bg-slate-200 bg-opacity-80 backdrop-filter backdrop-blur-md z-10">
                  <Footer />
                </div>
              </div>
            </div>
          </div>
        </div>
        {showingNewWsModal && <NewWorkspaceModal hideModal={hideNewWsModal} />}
        {showingNewFolderModal && (
          <NewFolderModal
            hideModal={hideNewFolderModal}
            onFolderCreated={() =>
              window.dispatchEvent(new CustomEvent(REFETCH_WORKSPACES_EVENT))
            }
          />
        )}
      </div>
      <WorkspaceAndThreadTooltips />
    </>
  );
}

export function SidebarMobileHeader() {
  const { t } = useTranslation();
  const { logo } = useLogo();
  const menuButtonRef = useRef(null);
  const [showSidebar, setShowSidebar] = useState(false);
  const {
    showing: showingNewWsModal,
    showModal: showNewWsModal,
    hideModal: hideNewWsModal,
  } = useNewWorkspaceModal();
  const { user } = useUser();

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-10 flex justify-between items-center px-4 py-2 bg-zinc-925 light:bg-white text-slate-200 shadow-lg h-16">
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
              style={{ maxHeight: "40px", objectFit: "contain" }}
            />
          )}
        </div>
        <div className="w-11" aria-hidden="true"></div>
      </header>
      <MobileDrawer
        open={showSidebar}
        onClose={() => setShowSidebar(false)}
        returnFocusRef={menuButtonRef}
        label={t("sidebar-nav.workspaces")}
      >
        <div className="w-full h-full flex flex-col overflow-x-hidden items-between">
          {logo && (
            <div className="flex w-full items-center justify-start gap-x-4">
              <div className="flex shrink-1 w-fit items-center justify-start">
                <img
                  src={logo}
                  alt=""
                  className="rounded w-full max-h-[40px]"
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          )}

          <div className="h-full min-h-0 flex flex-col w-full justify-between pt-4">
            <div className="relative h-[calc(100%-60px)] flex flex-col w-full overflow-y-auto thin-scroll">
              <div className="flex flex-col gap-y-4">
                <SearchBox user={user} showNewWsModal={showNewWsModal} />
                <ActiveWorkspaces />
              </div>
            </div>
            <div className="z-99 absolute bottom-0 left-0 right-0 pt-2 pb-6 rounded-br-[26px] bg-zinc-925/80 light:bg-slate-200/80 backdrop-filter backdrop-blur-md">
              <Footer allowMobile />
            </div>
          </div>
        </div>
      </MobileDrawer>
      {showingNewWsModal && <NewWorkspaceModal hideModal={hideNewWsModal} />}
    </>
  );
}

function WorkspaceAndThreadTooltips() {
  return createPortal(
    <React.Fragment>
      <Tooltip
        id="workspace-name"
        place="right"
        delayShow={120}
        className="tooltip !text-xs z-99"
      />
      <Tooltip
        id="workspace-thread-name"
        place="right"
        delayShow={120}
        className="tooltip !text-xs z-99"
      />
      <Tooltip
        id="upload-workspace"
        place="top"
        delayShow={120}
        className="tooltip !text-xs z-99"
      />
      <Tooltip
        id="gear-workspace"
        place="top"
        delayShow={120}
        className="tooltip !text-xs z-99"
      />
    </React.Fragment>,
    document.body
  );
}
