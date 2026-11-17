import { useId, useState } from "react";
import { useTranslation } from "react-i18next";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import ModelRouterAPI from "@/models/modelRouter";
import { useModal } from "@/hooks/useModal";
import showToast from "@/utils/toast";
import ConfirmModal from "@/components/lib/ConfirmModal";
import RuleForm from "./RuleForm";
import RuleRow from "./RuleRow";
import { ROUTER_ACTION_BUTTON } from "../fieldClasses";

const SECTION_HEADING =
  "text-xs font-semibold uppercase tracking-wider text-zinc-400 light:text-slate-600 mb-2";

function RulesList({
  rules,
  editingRule,
  onEdit,
  onDelete,
  onToggle,
  onDragEnd,
}) {
  const { t } = useTranslation();
  const headingId = useId();
  const calculatedRules = rules.filter((r) => r.type === "calculated");
  const llmRules = rules.filter((r) => r.type === "llm");

  // Screen reader announcements for keyboard reordering, in the UI language.
  const titleAt = (index) => calculatedRules[index]?.title ?? "";
  const total = calculatedRules.length;
  const handleDragStart = (start, provided) => {
    provided.announce(
      t("settings-pages.rule-drag-start", {
        title: titleAt(start.source.index),
        position: start.source.index + 1,
        total,
      })
    );
  };
  const handleDragUpdate = (update, provided) => {
    if (!update.destination) {
      provided.announce(t("settings-pages.rule-drag-outside"));
      return;
    }
    provided.announce(
      t("settings-pages.rule-drag-move", {
        title: titleAt(update.source.index),
        position: update.destination.index + 1,
        total,
      })
    );
  };
  const handleDragEnd = (result, provided) => {
    const title = titleAt(result.source.index);
    if (result.reason === "CANCEL" || !result.destination) {
      provided.announce(
        t("settings-pages.rule-drag-cancel", {
          title,
          position: result.source.index + 1,
        })
      );
    } else {
      provided.announce(
        t("settings-pages.rule-drag-drop", {
          title,
          position: result.destination.index + 1,
          total,
        })
      );
    }
    onDragEnd(result);
  };

  return (
    <div className="mt-6 flex flex-col gap-y-6">
      {calculatedRules.length > 0 && (
        <section aria-labelledby={`${headingId}-calculated`}>
          <h2 id={`${headingId}-calculated`} className={SECTION_HEADING}>
            {t("model-router.rules.calculated-section-label")}
          </h2>
          <DragDropContext
            onDragStart={handleDragStart}
            onDragUpdate={handleDragUpdate}
            onDragEnd={handleDragEnd}
            dragHandleUsageInstructions={t(
              "settings-pages.rule-drag-instructions"
            )}
          >
            <Droppable droppableId="calculated-rules">
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  role="list"
                  aria-labelledby={`${headingId}-calculated`}
                  className="flex flex-col gap-y-2"
                >
                  {calculatedRules.map((rule, index) => (
                    <Draggable
                      key={rule.id}
                      draggableId={rule.id.toString()}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          role="listitem"
                          className={snapshot.isDragging ? "opacity-60" : ""}
                        >
                          <RuleRow
                            rule={rule}
                            isEditing={editingRule?.id === rule.id}
                            onEdit={() => onEdit(rule)}
                            onDelete={() => onDelete(rule)}
                            onToggle={() => onToggle(rule)}
                            dragHandleProps={provided.dragHandleProps}
                          />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </section>
      )}

      {llmRules.length > 0 && (
        <section aria-labelledby={`${headingId}-llm`}>
          <h2 id={`${headingId}-llm`} className={SECTION_HEADING}>
            {t("model-router.rules.llm-section-label")}
          </h2>
          <ul className="flex flex-col gap-y-2">
            {llmRules.map((rule) => (
              <li key={rule.id}>
                <RuleRow
                  rule={rule}
                  isEditing={editingRule?.id === rule.id}
                  onEdit={() => onEdit(rule)}
                  onDelete={() => onDelete(rule)}
                  onToggle={() => onToggle(rule)}
                />
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}

function EmptyRulesState({ onCreateRule }) {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center gap-8 py-28">
      <div className="flex flex-col items-center gap-1.5 text-center">
        <p className="text-base font-semibold leading-6 text-zinc-50 light:text-slate-900">
          {t("model-router.rules.no-rules")}
        </p>
        <p className="text-sm font-medium leading-5 text-zinc-400 light:text-slate-600 max-w-[370px]">
          {t("model-router.rules.empty-description")}
        </p>
      </div>
      <button
        type="button"
        onClick={onCreateRule}
        className={ROUTER_ACTION_BUTTON}
      >
        {t("model-router.rules.new-rule-button")}
      </button>
    </div>
  );
}

export default function RuleBuilder({
  routerId,
  routerName,
  rules,
  onRulesChanged,
}) {
  const { t } = useTranslation();
  const { isOpen, openModal, closeModal } = useModal();
  const [editingRule, setEditingRule] = useState(null);
  const [pendingDelete, setPendingDelete] = useState(null);
  const [deleting, setDeleting] = useState(false);
  const headingId = useId();

  const openCreate = () => {
    setEditingRule(null);
    openModal();
  };

  const openEdit = (rule) => {
    setEditingRule(rule);
    openModal();
  };

  const handleModalClose = () => {
    closeModal();
    setEditingRule(null);
  };

  const confirmDelete = async () => {
    const rule = pendingDelete;
    setDeleting(true);
    const { success } = await ModelRouterAPI.deleteRule(routerId, rule.id);
    setDeleting(false);
    setPendingDelete(null);
    if (!success) {
      showToast(t("model-router.rules.toast-delete-failed"), "error");
      return;
    }
    await onRulesChanged();
    // The row that opened the dialog is gone: land on the page heading.
    setTimeout(() => document.getElementById(headingId)?.focus(), 0);
  };

  const handleToggle = async (rule) => {
    const { rule: updated } = await ModelRouterAPI.updateRule(
      routerId,
      rule.id,
      { enabled: !rule.enabled }
    );
    if (updated) onRulesChanged();
    else showToast(t("settings-pages.rule-toggle-failed"), "error");
  };

  const onDragEnd = async (result) => {
    if (!result.destination) return;
    if (result.destination.index === result.source.index) return;
    const calcRules = rules.filter((r) => r.type === "calculated");
    const llmRules = rules.filter((r) => r.type === "llm");
    const reordered = Array.from(calcRules);
    const [moved] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, moved);

    // Calculated rules get priorities 1..N, LLM rules get N+1..M
    const ruleUpdates = [
      ...reordered.map((rule, index) => ({
        id: rule.id,
        priority: index + 1,
      })),
      ...llmRules.map((rule, index) => ({
        id: rule.id,
        priority: reordered.length + index + 1,
      })),
    ];

    const { success } = await ModelRouterAPI.reorderRules(
      routerId,
      ruleUpdates
    );
    if (success) onRulesChanged();
    else showToast(t("model-router.rules.toast-reorder-failed"), "error");
  };

  const hasRules = rules && rules.length > 0;

  return (
    <div>
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between pb-6 border-b border-white/20 light:border-slate-300">
        <div className="flex flex-col gap-y-2 min-w-0">
          <h1
            id={headingId}
            tabIndex={-1}
            className="text-lg font-semibold leading-7 text-white light:text-slate-900 break-words"
          >
            {routerName
              ? t("model-router.rules.title-with-name", { name: routerName })
              : t("model-router.rules.title")}
          </h1>
          <p className="text-xs leading-4 text-zinc-400 light:text-slate-600 max-w-[700px]">
            {t("model-router.rules.description")}
          </p>
        </div>
        {hasRules && (
          <button
            type="button"
            onClick={openCreate}
            className={`${ROUTER_ACTION_BUTTON} self-start md:self-auto`}
          >
            {t("model-router.rules.add-rule")}
          </button>
        )}
      </div>

      {hasRules ? (
        <RulesList
          rules={rules}
          editingRule={editingRule}
          onEdit={openEdit}
          onDelete={setPendingDelete}
          onToggle={handleToggle}
          onDragEnd={onDragEnd}
        />
      ) : (
        <EmptyRulesState onCreateRule={openCreate} />
      )}

      {isOpen && (
        <RuleForm
          key={editingRule?.id ?? "new"}
          isOpen={isOpen}
          closeModal={handleModalClose}
          routerId={routerId}
          existingRule={editingRule}
          nextPriority={(rules?.length || 0) + 1}
          onSaved={onRulesChanged}
        />
      )}

      <ConfirmModal
        isOpen={!!pendingDelete}
        title={t("model-router.rules.delete-confirm", {
          title: pendingDelete?.title,
        })}
        confirmLabel={t("settings-pages.delete")}
        busy={deleting}
        onConfirm={confirmDelete}
        onCancel={() => setPendingDelete(null)}
      >
        <p>{t("settings-pages.rule-delete-body")}</p>
      </ConfirmModal>
    </div>
  );
}
