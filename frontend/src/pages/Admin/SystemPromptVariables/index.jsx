import React, { useState, useEffect, useId, useRef } from "react";
import { useTranslation } from "react-i18next";
import System from "@/models/system";
import { Plus } from "lucide-react";
import Sidebar from "@/components/SettingsSidebar";
import CTAButton from "@/components/lib/CTAButton";
import VariableRow from "./VariableRow";
import Modal from "@/components/lib/Modal";
import AddVariableModal from "./AddVariableModal";
import { useModal } from "@/hooks/useModal";
import TableState from "@/components/lib/TableState";
import { TABLE, TBODY, TH, THEAD } from "@/pages/Admin/Users/AdminTable";
import useFocusAfterRemoval from "@/hooks/useFocusAfterRemoval";

const COLUMNS = 5;

export default function SystemPromptVariables() {
  const { t } = useTranslation();
  const [variables, setVariables] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const { isOpen, openModal, closeModal } = useModal();
  const headingId = useId();
  const headingRef = useRef(null);
  const tbodyRef = useRef(null);
  const focusAfterRemoval = useFocusAfterRemoval(tbodyRef, headingRef);

  useEffect(() => {
    fetchVariables();
  }, []);

  // Refreshes keep the current rows on screen: only the first load shows
  // the loading row.
  const fetchVariables = async () => {
    const result = await System.promptVariables.getAll();
    setLoading(false);
    // On a server error the response has no `variables` list.
    if (!Array.isArray(result?.variables)) {
      setLoadError(true);
      return;
    }
    setLoadError(false);
    setVariables(result.variables);
  };

  const removeVariable = (id) => {
    focusAfterRemoval(variables.findIndex((variable) => variable.id === id));
    setVariables((prev) => prev.filter((variable) => variable.id !== id));
  };

  return (
    <div className="w-screen h-screen overflow-hidden bg-zinc-950 light:bg-slate-50 flex">
      <Sidebar />
      <main className="relative md:ml-[2px] md:mr-[16px] md:my-[16px] md:rounded-[16px] bg-zinc-900 light:bg-white w-full h-full md:h-[calc(100%-32px)] overflow-y-auto p-4 md:p-0">
        <div className="flex flex-col w-full px-1 md:pl-6 md:pr-[50px] md:py-6 py-16">
          <div className="w-full flex flex-col gap-y-1 pb-6 border-white/10 border-b-2">
            <h1
              id={headingId}
              ref={headingRef}
              tabIndex={-1}
              className="text-lg leading-6 font-bold text-theme-text-primary"
            >
              {t("admin-pages.variables.title")}
            </h1>
            <p className="text-xs leading-[18px] text-theme-text-secondary">
              {t("admin-pages.variables.description")}
            </p>
          </div>

          <div className="w-full justify-end flex">
            <CTAButton
              type="button"
              onClick={openModal}
              className="mt-3 mr-0 mb-4 md:-mb-6 z-10"
            >
              <Plus strokeWidth={1.5} className="h-4 w-4" aria-hidden="true" />
              {t("admin-pages.variables.add")}
            </CTAButton>
          </div>

          <table
            aria-labelledby={headingId}
            aria-busy={loading || undefined}
            className={TABLE}
          >
            <thead className={THEAD}>
              <tr>
                <th scope="col" className={TH}>
                  {t("admin-pages.variables.key")}
                </th>
                <th scope="col" className={TH}>
                  {t("admin-pages.variables.value")}
                </th>
                <th scope="col" className={TH}>
                  {t("admin-pages.variables.description-label")}
                </th>
                <th scope="col" className={TH}>
                  {t("admin-pages.variables.type")}
                </th>
                <th scope="col" className={TH}>
                  <span className="sr-only">{t("api.actions")}</span>
                </th>
              </tr>
            </thead>
            <tbody ref={tbodyRef} className={TBODY}>
              {loading ? (
                <TableState state="loading" colSpan={COLUMNS} />
              ) : loadError ? (
                <TableState
                  state="error"
                  colSpan={COLUMNS}
                  message={t("admin-pages.variables.load-failed")}
                  onRetry={fetchVariables}
                />
              ) : variables.length === 0 ? (
                <TableState
                  state="empty"
                  colSpan={COLUMNS}
                  message={t("admin-pages.variables.empty")}
                />
              ) : (
                variables.map((variable) => (
                  <VariableRow
                    key={variable.id ?? variable.key}
                    variable={variable}
                    onRefresh={fetchVariables}
                    onDeleted={() => removeVariable(variable.id)}
                  />
                ))
              )}
            </tbody>
          </table>
        </div>
      </main>

      <Modal isOpen={isOpen} onClose={closeModal}>
        <AddVariableModal closeModal={closeModal} onRefresh={fetchVariables} />
      </Modal>
    </div>
  );
}
