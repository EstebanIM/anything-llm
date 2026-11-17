import { forwardRef } from "react";

/**
 * One connector in the vertical tab list. Named by the connector name and
 * described by its blurb; the parent handles arrows and the roving tabindex.
 */
const ConnectorOption = forwardRef(function ConnectorOption(
  { id, panelId, selected, tabIndex, image, name, description, onSelect },
  ref
) {
  return (
    <button
      ref={ref}
      id={id}
      type="button"
      role="tab"
      aria-selected={selected}
      aria-controls={panelId}
      aria-labelledby={`${id}-name`}
      aria-describedby={`${id}-description`}
      tabIndex={tabIndex}
      onClick={onSelect}
      className={`relative flex w-full items-center gap-x-3 py-2 pl-4 pr-3 rounded-lg text-left border-none transition-colors duration-quick ease-smooth hover:bg-theme-file-picker-hover ${
        selected
          ? "bg-theme-file-picker-hover before:absolute before:left-1 before:top-3 before:bottom-3 before:w-[3px] before:rounded-full before:bg-sky-400 light:before:bg-sky-700"
          : ""
      }`}
    >
      <img src={image} alt="" className="w-10 h-10 rounded-md shrink-0" />
      <span className="flex flex-col min-w-0">
        <span
          id={`${id}-name`}
          className={`text-white text-sm ${selected ? "font-semibold" : "font-medium"}`}
        >
          {name}
        </span>
        <span
          id={`${id}-description`}
          className="text-xs text-theme-text-secondary"
        >
          {description}
        </span>
      </span>
    </button>
  );
});

export default ConnectorOption;
