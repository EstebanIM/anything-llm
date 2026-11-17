import { useEffect, useId, useRef, useState } from "react";
import Sidebar from "@/components/SettingsSidebar";
import { CirclePlus } from "lucide-react";
import BrowserExtensionApiKey from "@/models/browserExtensionApiKey";
import BrowserExtensionApiKeyRow from "./BrowserExtensionApiKeyRow";
import CTAButton from "@/components/lib/CTAButton";
import NewBrowserExtensionApiKeyModal from "./NewBrowserExtensionApiKeyModal";
import Modal from "@/components/lib/Modal";
import TableState from "@/components/lib/TableState";
import { useModal } from "@/hooks/useModal";
import useMultiUserMode from "@/hooks/useMultiUserMode";
import { fullApiUrl } from "@/utils/constants";
import { useTranslation } from "react-i18next";

export default function BrowserExtensionApiKeys() {
  const { t } = useTranslation();
  const titleId = useId();
  const rowIdPrefix = useId();
  const headingRef = useRef(null);
  const [status, setStatus] = useState("loading");
  const [apiKeys, setApiKeys] = useState([]);
  const [focusAfterRemove, setFocusAfterRemove] = useState(null);
  const { isOpen, openModal, closeModal } = useModal();
  const isMultiUser = useMultiUserMode();
  const columns = isMultiUser ? 4 : 3;

  const revokeButtonId = (id) => `${rowIdPrefix}-revoke-${id}`;

  const fetchExistingKeys = async () => {
    const result = await BrowserExtensionApiKey.getAll();
    if (!result.success || !Array.isArray(result.apiKeys))
      return setStatus("error");
    setApiKeys(result.apiKeys);
    setStatus("ready");
  };

  const retry = () => {
    setStatus("loading");
    fetchExistingKeys();
  };

  useEffect(() => {
    fetchExistingKeys();
  }, []);

  // After a revoke, focus moves to the next row's revoke button (or the
  // previous one), and to the page title when the list is empty.
  const removeApiKey = (id) => {
    const index = apiKeys.findIndex((apiKey) => apiKey.id === id);
    const next = apiKeys[index + 1] ?? apiKeys[index - 1] ?? null;
    setApiKeys((prevKeys) => prevKeys.filter((apiKey) => apiKey.id !== id));
    setFocusAfterRemove(next ? next.id : "heading");
  };

  useEffect(() => {
    if (focusAfterRemove === null) return;
    const target =
      focusAfterRemove === "heading"
        ? null
        : document.getElementById(revokeButtonId(focusAfterRemove));
    (target || headingRef.current)?.focus();
    setFocusAfterRemove(null);
  }, [focusAfterRemove]);

  return (
    <div className="w-screen h-screen overflow-hidden bg-zinc-950 light:bg-slate-50 flex">
      <Sidebar />
      <main className="relative md:ml-[2px] md:mr-[16px] md:my-[16px] md:rounded-[16px] bg-zinc-900 light:bg-white w-full h-full md:h-[calc(100%-32px)] overflow-y-auto p-4 md:p-0">
        <div className="flex flex-col w-full px-1 md:pl-6 md:pr-[50px] md:py-6 py-16">
          <div className="w-full flex flex-col gap-y-1 pb-6 border-white/10 light:border-slate-200 border-b-2">
            <h1
              id={titleId}
              ref={headingRef}
              tabIndex={-1}
              className="text-lg leading-6 font-bold text-theme-text-primary"
            >
              {t("tools-pages.extension.title")}
            </h1>
            <p className="text-xs leading-[18px] font-base text-theme-text-secondary mt-2">
              {t("tools-pages.extension.description")}
            </p>
          </div>
          <div className="w-full justify-end flex">
            <CTAButton
              type="button"
              onClick={openModal}
              className="mt-3 mr-0 mb-4 md:-mb-14 z-10"
            >
              <CirclePlus
                strokeWidth={1.5}
                className="h-4 w-4"
                aria-hidden="true"
              />
              {t("tools-pages.extension.generate")}
            </CTAButton>
          </div>
          {/* Below md the table scrolls sideways; actions come first so they
              never end up out of view. */}
          <div
            role="region"
            aria-labelledby={titleId}
            tabIndex={0}
            className="overflow-x-auto mt-6 rounded-lg"
          >
            <table className="w-full text-xs text-left border-spacing-0 md:mt-6 mt-0">
              <thead className="text-theme-text-secondary text-xs leading-[18px] font-bold uppercase border-white/10 light:border-slate-200 border-b">
                <tr>
                  <th scope="col" className="px-4 md:px-6 py-3">
                    <span className="sr-only">{t("api.actions")}</span>
                  </th>
                  <th scope="col" className="px-4 md:px-6 py-3">
                    {t("tools-pages.extension.connection-string")}
                  </th>
                  {isMultiUser && (
                    <th scope="col" className="px-4 md:px-6 py-3">
                      {t("tools-pages.extension.created-by")}
                    </th>
                  )}
                  <th scope="col" className="px-4 md:px-6 py-3">
                    {t("tools-pages.extension.created-at")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {status === "loading" ? (
                  <TableState state="loading" colSpan={columns} />
                ) : status === "error" ? (
                  <TableState
                    state="error"
                    colSpan={columns}
                    message={t("tools-pages.extension.load-error")}
                    onRetry={retry}
                  />
                ) : apiKeys.length === 0 ? (
                  <TableState
                    state="empty"
                    colSpan={columns}
                    message={t("tools-pages.extension.empty")}
                  />
                ) : (
                  apiKeys.map((apiKey) => (
                    <BrowserExtensionApiKeyRow
                      key={apiKey.id}
                      apiKey={apiKey}
                      revokeButtonId={revokeButtonId(apiKey.id)}
                      onRemoved={removeApiKey}
                      connectionString={`${fullApiUrl()}|${apiKey.key}`}
                      isMultiUser={isMultiUser}
                    />
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <NewBrowserExtensionApiKeyModal
          closeModal={closeModal}
          onSuccess={fetchExistingKeys}
          isMultiUser={isMultiUser}
        />
      </Modal>
    </div>
  );
}
