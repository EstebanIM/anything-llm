import { Search } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function LLMSelectorSidePanel({
  availableProviders,
  selectedLLMProvider,
  onSearchChange,
  onProviderClick,
}) {
  const { t } = useTranslation();

  return (
    <div className="w-[40%] h-full flex flex-col gap-4 p-2 border-r border-zinc-700 light:border-slate-300">
      <div className="relative shrink-0 mx-2">
        <Search
          strokeWidth={1.5}
          size={14}
          aria-hidden="true"
          className="absolute left-2.5 top-1/2 -translate-y-1/2 text-zinc-400 light:text-slate-500"
        />
        <input
          id="llm-search-input"
          type="search"
          aria-label={t("chat_window.workspace_llm_manager.search")}
          placeholder={t("chat_window.workspace_llm_manager.search")}
          onChange={onSearchChange}
          className="bg-zinc-900 light:bg-white text-white light:text-slate-900 placeholder:text-zinc-400 light:placeholder:text-slate-600 text-sm rounded-lg pl-8 pr-2.5 h-8 w-full border border-zinc-900 light:border-slate-400"
        />
      </div>
      <div
        role="group"
        aria-label={t("chat-input.providers")}
        className="flex flex-col gap-0 overflow-y-auto min-h-0 flex-1"
      >
        {availableProviders.map((llm) => (
          <button
            key={llm.value}
            type="button"
            data-llm-value={llm.value}
            aria-pressed={selectedLLMProvider === llm.value}
            className={`border-none cursor-pointer flex gap-2 items-center px-2.5 py-1.5 rounded-md transition-colors duration-quick ${
              selectedLLMProvider === llm.value
                ? "bg-zinc-700 light:bg-slate-200"
                : "hover:bg-zinc-700/50 light:hover:bg-slate-100 bg-transparent"
            }`}
            onClick={() => onProviderClick(llm.value)}
          >
            <img src={llm.logo} alt="" className="w-6 h-6 rounded" />
            <span className="text-sm text-white light:text-slate-900">
              {llm.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
