import { useState } from "react";
import { useTranslation } from "react-i18next";
import SubmenuItem from "../Submenu";

function getTextSizes(t) {
  return [
    { key: "small", label: t("chat_window.small") },
    { key: "normal", label: t("chat_window.normal") },
    { key: "large", label: t("chat_window.large") },
  ];
}

export default function TextSizeRow() {
  const { t } = useTranslation();
  const [selectedSize, setSelectedSize] = useState(
    window.localStorage.getItem("anythingllm_text_size") || "normal"
  );

  function handleTextSizeChange(size) {
    setSelectedSize(size);
    window.localStorage.setItem("anythingllm_text_size", size);
    window.dispatchEvent(new CustomEvent("textSizeChange", { detail: size }));
  }

  return (
    <SubmenuItem
      label={t("chat_window.text_size_label")}
      widthClass="w-[110px]"
    >
      {getTextSizes(t).map(({ key, label }) => (
        <button
          key={key}
          type="button"
          role="menuitemradio"
          aria-checked={selectedSize === key}
          onClick={() => handleTextSizeChange(key)}
          className={`w-full text-left border-none px-2 py-1 min-h-11 md:min-h-0 rounded cursor-pointer text-sm font-normal text-white light:text-slate-800 transition-colors duration-quick ${
            selectedSize === key
              ? "bg-zinc-700 light:bg-slate-200"
              : "bg-transparent hover:bg-zinc-700/50 light:hover:bg-slate-100"
          }`}
        >
          {label}
        </button>
      ))}
    </SubmenuItem>
  );
}
