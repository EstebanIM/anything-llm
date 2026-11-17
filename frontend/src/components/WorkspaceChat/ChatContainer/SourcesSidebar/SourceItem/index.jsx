import {
  parseChunkSource,
  SourceTypeCircle,
  getCustomImage,
} from "../../ChatHistory/Citation";
import { useTranslation } from "react-i18next";

export default function SourceItem({ source, onClick }) {
  const { t } = useTranslation();
  const info = parseChunkSource(source);
  const customImage = getCustomImage(info?.icon);
  const subtitle = info?.isUrl ? info?.text : t("chat_window.document");

  return (
    <button
      type="button"
      onClick={onClick}
      className="flex flex-col gap-[2px] items-start w-full text-left rounded-md hover:opacity-75 transition-opacity duration-quick"
    >
      <span className="flex gap-[6px] items-start w-full">
        <SourceTypeCircle
          type={info.icon}
          size={16}
          iconSize={10}
          url={info.href}
          customImage={customImage}
        />
        <span className="block flex-1 font-medium text-sm text-white light:text-slate-900 leading-[15px] truncate">
          {source.title}
        </span>
      </span>
      <span className="flex flex-col gap-[2px] pl-[22px] text-[10px] text-zinc-400 light:text-slate-600 leading-[14px]">
        <span>{subtitle}</span>
        <span>
          {t("chat_window.source_count", { count: source.references })}
        </span>
      </span>
    </button>
  );
}
