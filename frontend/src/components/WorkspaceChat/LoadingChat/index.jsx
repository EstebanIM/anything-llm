import { isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";
import * as Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function LoadingChat() {
  const { t } = useTranslation();
  const highlightColor = "var(--theme-bg-primary)";
  const baseColor = "var(--theme-bg-secondary)";
  return (
    <main
      aria-busy="true"
      className="relative md:ml-[2px] md:mr-[16px] md:my-[16px] md:rounded-[16px] bg-zinc-900 light:bg-white w-full h-full overflow-hidden p-4"
      style={{ height: "calc(100% - 32px)" }}
    >
      <p role="status" className="sr-only">
        {t("chat-panels.loading-chat")}
      </p>
      <Skeleton.default
        height="100px"
        width="100%"
        highlightColor={highlightColor}
        baseColor={baseColor}
        count={1}
        className="max-w-full md:max-w-[80%] p-4 rounded-b-2xl rounded-tr-2xl rounded-tl-sm mt-6"
        containerClassName="flex justify-start"
      />
      <Skeleton.default
        height="100px"
        width={isMobile ? "70%" : "45%"}
        baseColor={baseColor}
        highlightColor={highlightColor}
        count={1}
        className="max-w-full md:max-w-[80%] p-4 rounded-b-2xl rounded-tr-2xl rounded-tl-sm mt-6"
        containerClassName="flex justify-end"
      />
      <Skeleton.default
        height="100px"
        width={isMobile ? "55%" : "30%"}
        baseColor={baseColor}
        highlightColor={highlightColor}
        count={1}
        className="max-w-full md:max-w-[80%] p-4 rounded-b-2xl rounded-tr-2xl rounded-tl-sm mt-6"
        containerClassName="flex justify-start"
      />
      <Skeleton.default
        height="100px"
        width={isMobile ? "88%" : "25%"}
        baseColor={baseColor}
        highlightColor={highlightColor}
        count={1}
        className="max-w-full md:max-w-[80%] p-4 rounded-b-2xl rounded-tr-2xl rounded-tl-sm mt-6"
        containerClassName="flex justify-end"
      />
      <Skeleton.default
        height="160px"
        width="100%"
        baseColor={baseColor}
        highlightColor={highlightColor}
        count={1}
        className="max-w-full md:max-w-[80%] p-4 rounded-b-2xl rounded-tr-2xl rounded-tl-sm mt-6"
        containerClassName="flex justify-start"
      />
    </main>
  );
}
