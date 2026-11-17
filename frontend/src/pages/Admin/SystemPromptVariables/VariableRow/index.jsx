import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import System from "@/models/system";
import showToast from "@/utils/toast";
import { useModal } from "@/hooks/useModal";
import Modal from "@/components/lib/Modal";
import EditVariableModal from "./EditVariableModal";
import { errorMessage } from "../VariableFields";
import truncate from "truncate";
import { Pencil, Trash2 } from "lucide-react";
import InlineConfirm, {
  CELL,
  MOBILE_LABEL,
  ROW,
  ROW_ACTION,
  ROW_ACTION_DANGER,
  ROW_ACTIONS,
  ROW_HEADER,
  useConfirmFocusReturn,
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
  const [confirming, setConfirming] = useState(null);
  const [busy, setBusy] = useState(false);
  const deleteRef = useRef(null);
  useConfirmFocusReturn(confirming, { delete: deleteRef });
  const type = variable?.type ?? "static";
  const key = variable.key;
  const value =
    typeof variable.value === "function" ? variable.value() : variable.value;

  const handleDelete = async () => {
    if (!variable.id) return;
    setBusy(true);
    const { success, error } = await System.promptVariables.delete(variable.id);
    setBusy(false);
    if (!success) {
      setConfirming(null);
      showToast(
        t("admin-pages.variables.delete-failed", {
          key,
          error: errorMessage(error, t("admin-pages.unknown-error")),
        }),
        "error",
        { clear: true }
      );
      return;
    }
    showToast(t("admin-pages.variables.deleted", { key }), "success", {
      clear: true,
    });
    onDeleted?.();
  };

  return (
    <>
      <tr data-row="" className={ROW}>
        <th scope="row" className={`${ROW_HEADER} font-mono`}>
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
          {confirming === "delete" ? (
            <InlineConfirm
              question={t("admin-pages.variables.delete-question", { key })}
              consequences={t("admin-pages.variables.delete-consequences", {
                token: `{${key}}`,
              })}
              confirmLabel={t("settings-pages.delete")}
              busy={busy}
              onConfirm={handleDelete}
              onCancel={() => setConfirming(null)}
            />
          ) : (
            type === "static" && (
              <div className={ROW_ACTIONS}>
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
                <button
                  ref={deleteRef}
                  type="button"
                  onClick={() => setConfirming("delete")}
                  aria-label={t("admin-pages.variables.delete", { key })}
                  title={t("admin-pages.variables.delete", { key })}
                  className={ROW_ACTION_DANGER}
                >
                  <Trash2
                    strokeWidth={1.5}
                    className="h-4 w-4"
                    aria-hidden="true"
                  />
                </button>
              </div>
            )
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
