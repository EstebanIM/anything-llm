import { useTranslation } from "react-i18next";

export default function BrowserNative() {
  const { t } = useTranslation();
  return (
    <div className="w-full min-h-10 items-center flex">
      <p className="text-sm text-theme-text-secondary">
        {t("provider-forms.shared.no-config")}
      </p>
    </div>
  );
}
