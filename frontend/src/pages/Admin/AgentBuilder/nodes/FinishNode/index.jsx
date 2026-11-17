import { useTranslation } from "react-i18next";

export default function FinishNode() {
  const { t } = useTranslation();
  return (
    <p className="text-sm text-theme-text-secondary">
      {t("agent-builder.blocks.finish.body")}
    </p>
  );
}
