import { useId } from "react";
import { useTranslation } from "react-i18next";
import { ROUTER_FIELD, ROUTER_HINT, ROUTER_LABEL } from "../../../fieldClasses";

export default function LLMDescriptionField({ existingRule }) {
  const { t } = useTranslation();
  const id = useId();
  return (
    <div className="flex flex-col gap-y-1.5">
      <label htmlFor={id} className={ROUTER_LABEL}>
        {t("model-router.rule-form.match-description-label")}
      </label>
      <textarea
        id={id}
        name="description"
        defaultValue={existingRule?.description || ""}
        placeholder={t("model-router.rule-form.match-description-placeholder")}
        aria-describedby={`${id}-help`}
        rows={2}
        className={`${ROUTER_FIELD} px-3.5 py-2.5 resize-none`}
        required
      />
      <p id={`${id}-help`} className={ROUTER_HINT}>
        {t("model-router.rule-form.match-description-help")}
      </p>
    </div>
  );
}
