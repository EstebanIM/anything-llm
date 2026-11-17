import { useTranslation } from "react-i18next";
import * as Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function ModelTableLoadingSkeleton() {
  const { t } = useTranslation();
  return (
    <div role="status" className="flex flex-col w-full gap-y-4 pt-4">
      <span className="sr-only">{t("provider-fields.models-loading")}</span>
      <div aria-hidden="true">
        <Skeleton.default
          height={100}
          width="100%"
          count={7}
          highlightColor="var(--theme-settings-input-active)"
          baseColor="var(--theme-settings-input-bg)"
          enableAnimation={true}
          containerClassName="w-fill flex gap-[8px] flex-col p-0"
        />
      </div>
    </div>
  );
}
