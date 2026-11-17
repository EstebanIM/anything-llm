import { useId, useState } from "react";
import { useTranslation } from "react-i18next";
import { LoaderCircle } from "lucide-react";
import Modal, {
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalPrimaryButton,
  ModalSecondaryButton,
  ModalInput,
  ModalLabel,
  ModalHint,
} from "@/components/lib/Modal";
import { ROUTER_CONTROL } from "../../fieldClasses";
import ModelRouterAPI from "@/models/modelRouter";
import StatusNote from "@/components/lib/StatusNote";
import { serverErrorMessage } from "@/utils/serverErrors";
import LLMProviderModelPicker from "../../LLMProviderModelPicker";
import CalculatedFields from "./CalculatedFields";
import LLMDescriptionField from "./LLMDescriptionField";

function createRuleTypes(t) {
  return [
    {
      value: "calculated",
      label: t("model-router.rule-form.type-calculated-label"),
      description: t("model-router.rule-form.type-calculated-description"),
    },
    {
      value: "llm",
      label: t("model-router.rule-form.type-llm-label"),
      description: t("model-router.rule-form.type-llm-description"),
    },
  ];
}

function emptyCondition() {
  return { property: "", comparator: "", value: "" };
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9_]/g, "_")
    .replace(/_+/g, "_")
    .replace(/^_|_$/g, "");
}

export default function RuleForm({
  isOpen,
  closeModal,
  routerId,
  existingRule = null,
  nextPriority,
  onSaved,
}) {
  const { t } = useTranslation();
  const ruleTypes = createRuleTypes(t);
  const isEditing = !!existingRule;
  const fieldId = useId();
  const [loading, setLoading] = useState(false);
  const [titleError, setTitleError] = useState(null);
  // Incomplete conditions or a failed save: shown above the buttons, the
  // dialog stays open.
  const [formError, setFormError] = useState(null);
  const [titleInput, setTitleInput] = useState(existingRule?.title || "");
  const [ruleType, setRuleType] = useState(existingRule?.type || "calculated");
  const [conditionLogic, setConditionLogic] = useState(
    existingRule?.condition_logic || "AND"
  );
  const [conditions, setConditions] = useState(
    Array.isArray(existingRule?.conditions) && existingRule.conditions.length
      ? existingRule.conditions
      : [emptyCondition()]
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setFormError(null);

    const formData = new FormData(e.target);
    const title = slugify(formData.get("title") || "");

    if (!title) {
      setTitleError(t("model-router.rule-form.title-required"));
      document.getElementById(`${fieldId}-title`)?.focus();
      return;
    }

    const data = {
      title,
      type: ruleType,
      route_provider: formData.get("route_provider"),
      route_model: formData.get("route_model"),
      priority: isEditing ? existingRule.priority : Number(nextPriority),
    };

    if (ruleType === "calculated") {
      const incomplete = conditions.findIndex(
        (c) => !c.property || !c.comparator || !String(c.value ?? "").trim()
      );
      if (incomplete !== -1) {
        setFormError(
          t("model-router.rule-form.conditions-incomplete", {
            index: incomplete + 1,
          })
        );
        return;
      }
      data.condition_logic = conditionLogic;
      data.conditions = conditions;
      data.description = null;
    } else if (ruleType === "llm") {
      data.description = formData.get("description");
      data.condition_logic = null;
      data.conditions = null;
    }

    setLoading(true);
    let result;
    if (isEditing) {
      result = await ModelRouterAPI.updateRule(routerId, existingRule.id, data);
    } else {
      result = await ModelRouterAPI.createRule(routerId, data);
    }

    setLoading(false);
    if (result.rule) {
      onSaved();
      closeModal();
    } else {
      setFormError(
        serverErrorMessage(
          result.error,
          t,
          "model-router.rule-form.toast-save-failed"
        )
      );
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={closeModal} size="lg">
      <form onSubmit={handleSubmit} className="flex flex-col gap-y-5">
        <ModalHeader
          title={
            isEditing
              ? t("settings-pages.rule-edit", { title: existingRule.title })
              : t("model-router.rules.new-rule-button")
          }
          subtitle={t("model-router.rules.description")}
          onClose={closeModal}
        />
        <ModalBody className="max-h-[60vh] overflow-y-auto">
          <div className="flex flex-col md:flex-row gap-5 items-start">
            <div className="flex flex-col gap-y-1.5 w-full md:flex-[5] min-w-0">
              <ModalInput
                label={t("model-router.rule-form.title-label")}
                type="text"
                id={`${fieldId}-title`}
                name="title"
                defaultValue={existingRule?.title || ""}
                onChange={(e) => {
                  setTitleInput(e.target.value);
                  setTitleError(null);
                }}
                error={titleError}
                placeholder={t("settings-pages.rule-title-placeholder")}
                aria-describedby={`${fieldId}-title-help`}
                autoComplete="off"
                spellCheck={false}
                className="font-mono"
                required
              />
              <TitleSlugHelp id={`${fieldId}-title-help`} value={titleInput} />
            </div>
            <div className="flex flex-col gap-y-1.5 w-full md:flex-[3] min-w-0">
              <ModalLabel htmlFor={`${fieldId}-type`}>
                {t("model-router.rule-form.rule-type")}
              </ModalLabel>
              <select
                id={`${fieldId}-type`}
                value={ruleType}
                onChange={(e) => setRuleType(e.target.value)}
                aria-describedby={`${fieldId}-type-help`}
                className={ROUTER_CONTROL}
              >
                {ruleTypes.map((rt) => (
                  <option key={rt.value} value={rt.value}>
                    {rt.label}
                  </option>
                ))}
              </select>
              <ModalHint>
                <span id={`${fieldId}-type-help`}>
                  {ruleTypes.find((rt) => rt.value === ruleType)?.description}
                </span>
              </ModalHint>
            </div>
          </div>

          {ruleType === "calculated" ? (
            <CalculatedFields
              conditionLogic={conditionLogic}
              setConditionLogic={setConditionLogic}
              conditions={conditions}
              setConditions={setConditions}
            />
          ) : (
            <LLMDescriptionField existingRule={existingRule} />
          )}

          <LLMProviderModelPicker
            providerFieldName="route_provider"
            modelFieldName="route_model"
            label={t("model-router.rule-form.route-to-label")}
            description={t("model-router.rule-form.route-to-description")}
            defaultProvider={existingRule?.route_provider || ""}
            defaultModel={existingRule?.route_model || ""}
          />
        </ModalBody>
        {formError && (
          <StatusNote tone="error" announce>
            {formError}
          </StatusNote>
        )}
        <ModalFooter>
          <ModalSecondaryButton type="button" onClick={closeModal}>
            {t("settings-pages.cancel")}
          </ModalSecondaryButton>
          <ModalPrimaryButton type="submit" busy={loading} className="gap-x-2">
            {loading ? (
              <>
                <LoaderCircle
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className="h-4 w-4 animate-spin"
                />
                {t("model-router.rule-form.saving")}
              </>
            ) : isEditing ? (
              t("model-router.rule-form.update-rule")
            ) : (
              t("model-router.rule-form.create-rule")
            )}
          </ModalPrimaryButton>
        </ModalFooter>
      </form>
    </Modal>
  );
}

/**
 * Titles are stored as slugs. Explain the format and, when the typed title is
 * converted, show what will actually be saved.
 */
function TitleSlugHelp({ id, value }) {
  const { t } = useTranslation();
  const slug = slugify(value);
  const typed = value.trim();
  return (
    <div id={id} className="flex flex-col gap-y-0.5">
      <ModalHint>{t("settings-pages.rule-title-help")}</ModalHint>
      <p
        aria-live="polite"
        className="text-xs text-zinc-300 light:text-slate-700 break-all"
      >
        {typed && !slug && t("settings-pages.rule-title-invalid")}
        {slug && slug !== typed && (
          <>
            {t("settings-pages.rule-title-slug")}{" "}
            <code className="font-mono">{slug}</code>
          </>
        )}
      </p>
    </div>
  );
}
