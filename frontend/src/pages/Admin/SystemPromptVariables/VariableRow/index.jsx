import { useState } from "react";
import { useTranslation } from "react-i18next";
import System from "@/models/system";
import showToast from "@/utils/toast";
import { serverErrorMessage } from "@/utils/serverErrors";
import { useModal } from "@/hooks/useModal";
import Modal from "@/components/lib/Modal";
import EditVariableModal from "./EditVariableModal";
import truncate from "truncate";
import { Pencil, Trash2 } from "lucide-react";
import { InlineConfirmButton } from "@/components/lib/InlineConfirm";
import {
  CELL,
  MOBILE_LABEL,
  ROW,
  ROW_ACTION,
  ROW_ACTION_DANGER,
  ROW_ACTIONS,
  ROW_HEADER,
} from "@/pages/Admin/Users/AdminTable";

const TYPE_STYLES = {
  system: "bg-blue-600/20 text-blue-300 light:text-blue-800",
  user: "bg-green-600/20 text-green-300 light:text-green-800",
  workspace: "bg-cyan-600/20 text-cyan-300 light:text-cyan-800",
  static: "bg-yellow-600/20 text-yellow-300 light:text-yellow-800",
};

/**
 * A row component for displaying a system prompt variable
 * @param {{id: number|null, key: string, value: string, description: string, type: string}} variable - The system prompt variable to display
 * @param {Function} onRefresh - Reloads the list after an edit
 * @param {Function} onDeleted - Removes the row once the server confirms
 * @returns {JSX.Element} A JSX element for displaying the variable
 */
export default function VariableRow({ variable, onRefresh, onDeleted }) {
  const { t } = useTranslation();
  const { isOpen, openModal, closeModal } = useModal();
  const [deleteOpen, setDeleteOpen] = useState(false);
  const type = variable?.type ?? "static";
  const key = variable.key;
  const value =
    typeof variable.value === "function" ? variable.value() : variable.value;

  const handleDelete = async () => {
    if (!variable.id) return false;
    const { success, error } = await System.promptVariables.delete(variable.id);
    if (!success) {
      showToast(
        serverErrorMessage(error, t, "admin-pages.variables.delete-failed", {
          values: { key },
        }),
        "error",
        { clear: true }
      );
      return false;
    }
    showToast(t("admin-pages.variables.deleted", { key }), "success", {
      clear: true,
    });
    onDeleted?.();
    return true;
  };

  return (
    <>
      <tr data-row="" className={ROW}>
        {/* Focus lands here when the previous row is deleted. */}
        <th
          scope="row"
          tabIndex={-1}
          data-row-focus=""
          className={`${ROW_HEADER} font-mono`}
        >
          {key}
        </th>
        <td className={CELL} title={value}>
          <span aria-hidden="true" className={MOBILE_LABEL}>
            {t("admin-pages.variables.value")}:{" "}
          </span>
          {truncate(String(value ?? ""), 50)}
        </td>
        <td className={CELL}>
          <span aria-hidden="true" className={MOBILE_LABEL}>
            {t("admin-pages.variables.description-label")}:{" "}
          </span>
          {variable.description ? (
            truncate(variable.description, 50)
          ) : (
            <span className="text-theme-text-secondary">
              {t("admin-pages.variables.no-description")}
            </span>
          )}
        </td>
        <td className={CELL}>
          <span aria-hidden="true" className={MOBILE_LABEL}>
            {t("admin-pages.variables.type")}:{" "}
          </span>
          <span
            className={`inline-block rounded-full px-2 py-0.5 text-xs leading-5 font-semibold ${
              TYPE_STYLES[type] ?? TYPE_STYLES.static
            }`}
          >
            {t(`admin-pages.variables.type-${type}`, { defaultValue: type })}
          </span>
        </td>
        <td className={`${CELL} pt-2`}>
          {type === "static" && (
            <div className={ROW_ACTIONS}>
              {!deleteOpen && (
                <button
                  type="button"
                  onClick={openModal}
                  aria-label={t("admin-pages.variables.edit", { key })}
                  title={t("admin-pages.variables.edit", { key })}
                  className={ROW_ACTION}
                >
                  <Pencil
                    strokeWidth={1.5}
                    className="h-4 w-4"
                    aria-hidden="true"
                  />
                </button>
              )}
              <InlineConfirmButton
                label={t("admin-pages.variables.delete", { key })}
                icon={Trash2}
                triggerClassName={ROW_ACTION_DANGER}
                question={t("admin-pages.variables.delete-question", { key })}
                consequences={t("admin-pages.variables.delete-consequences", {
                  token: `{${key}}`,
                })}
                confirmLabel={t("settings-pages.delete")}
                align="end"
                onConfirm={handleDelete}
                onOpenChange={setDeleteOpen}
              />
            </div>
          )}
        </td>
      </tr>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <EditVariableModal
          variable={variable}
          closeModal={closeModal}
          onRefresh={onRefresh}
        />
      </Modal>
    </>
  );
}
