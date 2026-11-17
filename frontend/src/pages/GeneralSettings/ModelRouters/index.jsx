import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Sidebar from "@/components/SettingsSidebar";
import { LoaderCircle, Pencil, X } from "lucide-react";
import ModelRouter from "@/models/modelRouter";
import { useModal } from "@/hooks/useModal";
import showToast from "@/utils/toast";
import paths from "@/utils/paths";
import ConfirmModal from "@/components/lib/ConfirmModal";
import NewRouterModal from "./NewRouterModal";
import { ROUTER_ACTION_BUTTON, ROUTER_ICON_BUTTON } from "./fieldClasses";

export default function ModelRouters() {
  const { t } = useTranslation();
  const { isOpen, openModal, closeModal } = useModal();
  const [loading, setLoading] = useState(true);
  const [routers, setRouters] = useState([]);
  const [editingRouter, setEditingRouter] = useState(null);
  const [pendingDelete, setPendingDelete] = useState(null);
  const [deleting, setDeleting] = useState(false);
  const headingRef = useRef(null);

  const openCreateModal = () => {
    setEditingRouter(null);
    openModal();
  };

  const openEditModal = (router) => {
    setEditingRouter(router);
    openModal();
  };

  const handleModalClose = () => {
    closeModal();
    setEditingRouter(null);
  };

  const fetchRouters = async () => {
    const results = await ModelRouter.getAll();
    setRouters(results);
    setLoading(false);
  };

  useEffect(() => {
    fetchRouters();
  }, []);

  const confirmDelete = async () => {
    const router = pendingDelete;
    setDeleting(true);
    const { success, error } = await ModelRouter.delete(router.id);
    setDeleting(false);
    setPendingDelete(null);
    if (!success) {
      showToast(t("model-router.toast-delete-failed", { error }), "error");
      return;
    }
    setRouters((prev) => prev.filter((r) => r.id !== router.id));
    showToast(t("model-router.toast-deleted"), "success");
    // The row (and the button that opened the dialog) is gone: land on the heading.
    setTimeout(() => headingRef.current?.focus(), 0);
  };

  const hasRouters = !loading && routers.length > 0;

  return (
    <Layout
      t={t}
      headingRef={headingRef}
      showAction={hasRouters}
      showColumns={hasRouters}
      onAction={openCreateModal}
    >
      {loading ? (
        <LoadingState t={t} />
      ) : hasRouters ? (
        <RouterList
          routers={routers}
          onDelete={setPendingDelete}
          openEditModal={openEditModal}
        />
      ) : (
        <EmptyState onCreateClick={openCreateModal} t={t} />
      )}
      <NewRouterModal
        isOpen={isOpen}
        closeModal={handleModalClose}
        onSuccess={fetchRouters}
        router={editingRouter}
      />
      <ConfirmModal
        isOpen={!!pendingDelete}
        title={t("settings-pages.router-delete-title", {
          name: pendingDelete?.name,
        })}
        confirmLabel={t("settings-pages.delete")}
        busy={deleting}
        onConfirm={confirmDelete}
        onCancel={() => setPendingDelete(null)}
      >
        <p>{t("model-router.delete-confirm")}</p>
      </ConfirmModal>
    </Layout>
  );
}

function Layout({
  t,
  headingRef,
  showAction,
  showColumns,
  onAction,
  children,
}) {
  return (
    <div className="w-screen h-screen overflow-hidden bg-zinc-950 light:bg-slate-50 flex md:mt-0 mt-6">
      <Sidebar />
      <main className="relative md:ml-[2px] md:mr-[16px] md:my-[16px] md:rounded-2xl bg-zinc-900 light:bg-white light:border light:border-slate-300 w-full h-full md:h-[calc(100%-32px)] overflow-y-scroll p-4 md:p-0">
        <div className="flex flex-col w-full px-1 md:pl-6 md:pr-[50px] md:py-0 py-16">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:pr-8 py-6 border-b border-white/20 light:border-slate-300">
            <div className="flex flex-col gap-y-2">
              <h1
                ref={headingRef}
                tabIndex={-1}
                className="text-lg font-semibold leading-7 text-white light:text-slate-900"
              >
                {t("model-router.title")}
              </h1>
              <p className="text-xs leading-4 text-zinc-400 light:text-slate-600 max-w-[700px]">
                {t("model-router.description")}
              </p>
            </div>
            {showAction && (
              <button
                type="button"
                onClick={onAction}
                className={`${ROUTER_ACTION_BUTTON} self-start md:self-auto`}
              >
                {t("model-router.new-router-button")}
              </button>
            )}
          </div>

          <div className="mt-8 flex flex-col">
            {showColumns && (
              <>
                {/* Visual column headings only: each row carries its own labels for screen readers. */}
                <div
                  aria-hidden="true"
                  className="hidden md:grid grid-cols-[2fr_2fr_1fr_1fr_88px] gap-x-4 px-4 text-sm font-semibold uppercase tracking-[1.4px] text-zinc-400 light:text-slate-600 leading-5"
                >
                  <span>{t("model-router.table.name")}</span>
                  <span>{t("model-router.table.fallback")}</span>
                  <span>{t("model-router.table.rules")}</span>
                  <span>{t("model-router.table.workspaces")}</span>
                  <span />
                </div>
                <div className="hidden md:block mt-[18px] border-t border-white/20 light:border-slate-300" />
              </>
            )}
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}

function LoadingState({ t }) {
  return (
    <div role="status" className="flex items-center justify-center py-20">
      <LoaderCircle
        strokeWidth={1.5}
        aria-hidden="true"
        className="h-8 w-8 text-zinc-400 light:text-slate-600 animate-spin"
      />
      <span className="sr-only">{t("common.loading")}</span>
    </div>
  );
}

function RouterList({ routers, onDelete, openEditModal }) {
  const { t } = useTranslation();
  return (
    <ul
      aria-label={t("model-router.title")}
      className="flex flex-col gap-y-2 md:gap-y-0 md:divide-y divide-white/10 light:divide-slate-200"
    >
      {routers.map((router) => (
        <RouterRow
          key={router.id}
          router={router}
          onDelete={() => onDelete(router)}
          onEdit={() => openEditModal(router)}
        />
      ))}
    </ul>
  );
}

function EmptyState({ onCreateClick, t }) {
  return (
    <div className="flex flex-col items-center justify-center gap-8 py-28">
      <div className="flex flex-col items-center gap-1.5 text-center">
        <p className="text-base font-semibold leading-6 text-zinc-50 light:text-slate-900">
          {t("model-router.no-routers")}
        </p>
        <p className="text-sm font-medium leading-5 text-zinc-400 light:text-slate-600 max-w-[370px]">
          {t("model-router.empty-description")}
        </p>
      </div>
      <button
        type="button"
        onClick={onCreateClick}
        className={ROUTER_ACTION_BUTTON}
      >
        {t("model-router.new-router-button")}
      </button>
    </div>
  );
}

/**
 * Stacked card below md, five-column row from md. The name is the link to the
 * rules page; its ::after covers the row so the whole row stays clickable,
 * while the action buttons sit above it.
 */
function RouterRow({ router, onDelete, onEdit }) {
  const { t } = useTranslation();
  const valueClass =
    "text-sm font-normal leading-5 text-zinc-400 light:text-slate-600";

  return (
    <li className="group relative grid grid-cols-[minmax(0,1fr)_auto] md:grid-cols-[2fr_2fr_1fr_1fr_88px] gap-x-4 gap-y-1 items-center px-4 py-3 md:py-1 rounded-lg bg-white/5 md:bg-transparent light:bg-slate-50 light:md:bg-transparent hover:bg-white/5 light:hover:bg-slate-100 transition-colors duration-quick ease-smooth">
      <Link
        to={paths.settings.modelRouterRules(router.id)}
        className="min-w-0 truncate rounded-sm text-sm font-medium leading-5 text-white light:text-slate-900 after:absolute after:inset-0 after:rounded-lg after:content-['']"
      >
        {router.name}
      </Link>
      <div className="relative z-10 row-start-1 col-start-2 md:col-start-5 flex items-center justify-end gap-1">
        <button
          type="button"
          onClick={onEdit}
          aria-label={t("model-router.edit-router.title", {
            name: router.name,
          })}
          className={`${ROUTER_ICON_BUTTON} hover:text-white light:hover:text-slate-900`}
        >
          <Pencil strokeWidth={1.5} size={16} aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={onDelete}
          aria-label={t("settings-pages.router-delete", { name: router.name })}
          className={`${ROUTER_ICON_BUTTON} hover:text-red-400 light:hover:text-red-600`}
        >
          <X strokeWidth={1.5} size={16} aria-hidden="true" />
        </button>
      </div>
      <p
        className={`${valueClass} col-span-2 md:col-span-1 md:col-start-2 md:row-start-1 min-w-0 truncate`}
      >
        <span className="md:sr-only">{t("model-router.table.fallback")}: </span>
        {router.fallback_provider}/{router.fallback_model}
      </p>
      <p className={`${valueClass} md:col-start-3 md:row-start-1`}>
        <span className="md:sr-only">{t("model-router.table.rules")}: </span>
        {router.ruleCount || 0}
      </p>
      <p className={`${valueClass} md:col-start-4 md:row-start-1`}>
        <span className="md:sr-only">
          {t("model-router.table.workspaces")}:{" "}
        </span>
        {router.workspaceCount || 0}
      </p>
    </li>
  );
}
