import React, { useEffect, useId, useState } from "react";
import { ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { safeJsonParse } from "@/utils/request";
import { isPathMatch } from "@/utils/paths";
import useScrollActiveItemIntoView from "@/hooks/useScrollActiveItemIntoView";

export default function MenuOption({
  btnText,
  icon,
  href,
  childOptions = [],
  flex = false,
  user = null,
  roles = [],
  hidden = false,
  isChild = false,
}) {
  const storageKey = generateStorageKey({ key: btnText });
  const location = useLocation();
  const hasChildren = childOptions.length > 0;
  const hasVisibleChildren = hasVisibleOptions(user, childOptions);
  const { isExpanded, setIsExpanded } = useIsExpanded({
    storageKey,
    hasVisibleChildren,
    childOptions,
    location: location.pathname,
  });

  const isActive = hasChildren
    ? (!isExpanded &&
        childOptions.some((child) =>
          isPathMatch(child.href, location.pathname)
        )) ||
      location.pathname === href
    : isPathMatch(href, location.pathname);

  const childrenId = useId();
  const { ref } = useScrollActiveItemIntoView({
    isActive,
    behavior: "instant",
    block: "center",
  });

  if (hidden) return null;

  // If this option is a parent level option
  if (!isChild) {
    // and has no children then use its flex props and roles prop directly
    if (!hasChildren) {
      if (!flex && !roles.includes(user?.role)) return null;
      if (flex && !!user && !roles.includes(user?.role)) return null;
    }

    // if has children and no visible children - remove it.
    if (hasChildren && !hasVisibleChildren) return null;
  } else {
    // is a child so we use it's permissions
    if (!flex && !roles.includes(user?.role)) return null;
    if (flex && !!user && !roles.includes(user?.role)) return null;
  }

  const handleClick = (e) => {
    if (hasChildren) {
      e.preventDefault();
      const newExpandedState = !isExpanded;
      setIsExpanded(newExpandedState);
      localStorage.setItem(storageKey, JSON.stringify(newExpandedState));
    }
  };

  const label = (
    <>
      {icon}
      <span
        className={`${
          isChild ? "text-xs" : "text-sm"
        } leading-loose whitespace-nowrap overflow-hidden ml-2 text-white light:text-black ${
          isActive ? "font-semibold" : "font-medium"
        } ${!icon ? "pl-5" : ""}`}
      >
        {btnText}
      </span>
    </>
  );

  return (
    <div>
      <div
        className={`relative flex items-center w-full rounded-md transition-colors duration-quick ease-smooth ${
          isActive
            ? "bg-theme-sidebar-subitem-selected light:bg-slate-300"
            : "hover:bg-theme-sidebar-subitem-hover light:hover:bg-slate-300"
        }`}
      >
        {isActive && (
          <span
            aria-hidden="true"
            className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-[3px] rounded-full bg-[var(--theme-nav-active)]"
          />
        )}
        {hasChildren ? (
          // A group only opens and closes: it is a button, not a link.
          <button
            ref={ref}
            type="button"
            onClick={handleClick}
            aria-expanded={isExpanded}
            aria-controls={childrenId}
            className="flex flex-grow items-center px-[12px] h-11 md:h-[32px] rounded-md text-left text-white light:text-black"
          >
            {label}
            <ChevronRight
              strokeWidth={1.5}
              size={16}
              aria-hidden="true"
              className={`ml-auto shrink-0 transition-transform duration-base ease-smooth text-white light:text-black ${
                isExpanded ? "rotate-90" : ""
              }`}
            />
          </button>
        ) : (
          <Link
            ref={ref}
            to={href}
            aria-current={isActive ? "page" : undefined}
            className="flex flex-grow items-center px-[12px] h-11 md:h-[32px] rounded-md text-white light:text-black"
          >
            {label}
          </Link>
        )}
      </div>
      {isExpanded && hasChildren && (
        <div id={childrenId} className="mt-1 w-full">
          {childOptions.map((childOption, index) => (
            <MenuOption
              key={index}
              {...childOption} // flex and roles go here.
              user={user}
              isChild={true}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function useIsExpanded({
  storageKey = "",
  hasVisibleChildren = false,
  childOptions = [],
  location = null,
}) {
  const [isExpanded, setIsExpanded] = useState(() => {
    if (hasVisibleChildren) {
      const storedValue = localStorage.getItem(storageKey);
      if (storedValue !== null) {
        return safeJsonParse(storedValue, false);
      }
      return childOptions.some((child) => isPathMatch(child.href, location));
    }
    return false;
  });

  useEffect(() => {
    if (hasVisibleChildren) {
      const shouldExpand = childOptions.some((child) =>
        isPathMatch(child.href, location)
      );
      if (shouldExpand && !isExpanded) {
        setIsExpanded(true);
        localStorage.setItem(storageKey, JSON.stringify(true));
      }
    }
  }, [location]);

  return { isExpanded, setIsExpanded };
}

/**
 * Checks if the child options are visible to the user.
 * This hides the top level options if the child options are not visible
 * for either the users permissions or the child options hidden prop is set to true by other means.
 * If all child options return false for `isVisible` then the parent option will not be visible as well.
 * @param {object} user - The user object.
 * @param {array} childOptions - The child options.
 * @returns {boolean} - True if the child options are visible, false otherwise.
 */
function hasVisibleOptions(user = null, childOptions = []) {
  if (!Array.isArray(childOptions) || childOptions?.length === 0) return false;

  function isVisible({
    roles = [],
    user = null,
    flex = false,
    hidden = false,
  }) {
    if (hidden) return false;
    if (!flex && !roles.includes(user?.role)) return false;
    if (flex && !!user && !roles.includes(user?.role)) return false;
    return true;
  }

  return childOptions.some((opt) =>
    isVisible({ roles: opt.roles, user, flex: opt.flex, hidden: opt.hidden })
  );
}

function generateStorageKey({ key = "" }) {
  const _key = key.replace(/\s+/g, "_").toLowerCase();
  return `anything_llm_menu_${_key}_expanded`;
}
