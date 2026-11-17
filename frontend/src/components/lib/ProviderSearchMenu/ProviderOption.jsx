import { createContext, useContext } from "react";
import { useTranslation } from "react-i18next";
import { Check } from "lucide-react";

/** True inside ProviderSearchMenu, whose option wrapper draws the highlight and the check. */
export const ProviderMenuContext = createContext(false);

/**
 * Translated provider description, falling back to the English catalog text.
 * @param {(key: string, options?: object) => string} t
 * @param {{description?: string, descriptionKey?: string}} provider
 */
export function providerDescription(t, { description, descriptionKey } = {}) {
  if (!descriptionKey) return description ?? "";
  return t(descriptionKey, { defaultValue: description ?? "" });
}

/**
 * One provider row: logo, name and description.
 * @param {object} props
 * @param {string} props.name
 * @param {string} props.value
 * @param {string} props.image - logo URL (decorative: the name is next to it)
 * @param {string} [props.description] - English fallback text
 * @param {string} [props.descriptionKey] - i18n key for the description
 * @param {boolean} [props.checked] - the provider currently chosen
 * @param {(value: string) => void} props.onClick
 */
export default function ProviderOption({
  name,
  value,
  image,
  description,
  descriptionKey,
  checked = false,
  onClick,
}) {
  const { t } = useTranslation();
  const inMenu = useContext(ProviderMenuContext);

  return (
    <div
      onClick={() => onClick?.(value)}
      className={`w-full p-2 rounded-md cursor-pointer ${
        inMenu
          ? ""
          : `hover:bg-theme-bg-secondary ${checked ? "bg-theme-bg-secondary" : ""}`
      }`}
    >
      <div className="flex min-w-0 gap-x-4 items-center">
        <img src={image} alt="" className="w-10 h-10 rounded-md shrink-0" />
        <div className="min-w-0 flex-1 flex flex-col">
          <div className="text-sm font-semibold text-white break-words">
            {name}
          </div>
          <div className="mt-1 text-xs text-description break-words">
            {providerDescription(t, { description, descriptionKey })}
          </div>
        </div>
        {!inMenu && checked && (
          <Check
            strokeWidth={1.5}
            size={20}
            aria-hidden="true"
            className="shrink-0 text-theme-text-primary"
          />
        )}
      </div>
    </div>
  );
}
