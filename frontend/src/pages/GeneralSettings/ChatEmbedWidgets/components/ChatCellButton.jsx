import truncate from "truncate";
import { useTranslation } from "react-i18next";

/**
 * Table cell content that opens the full text of a message, response or
 * session: the truncated text is visible, the name says what opens.
 *
 * @param {object} props
 * @param {string} props.text - full text; shown truncated
 * @param {number} [props.length=40]
 * @param {string} props.label - accessible name ("Ver el mensaje completo del chat 12")
 * @param {() => void} props.onClick
 */
export default function ChatCellButton({ text, length = 40, label, onClick }) {
  const { t } = useTranslation();
  const value = typeof text === "string" ? text.trim() : "";
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      title={label}
      className="text-left min-h-[44px] md:min-h-0 py-1 rounded-md underline decoration-dotted decoration-1 underline-offset-4 hover:decoration-solid hover:text-white light:hover:text-slate-900 transition-colors duration-quick ease-smooth"
    >
      {value ? (
        truncate(value, length)
      ) : (
        <span className="text-theme-text-secondary">
          {t("embed-pages.chat.no-text")}
        </span>
      )}
    </button>
  );
}
