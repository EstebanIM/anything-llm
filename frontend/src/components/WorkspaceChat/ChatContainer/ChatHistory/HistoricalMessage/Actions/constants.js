// Hover-revealed controls (message actions, image overlay buttons). They only
// hide on wide screens with a real pointer; touch screens always show them,
// and keyboard focus inside the message reveals them too. Class names are
// written out in full so Tailwind can find them.
export const REVEAL_ON_HOVER_CLASS =
  "transition-opacity duration-quick ease-smooth [@media(hover:hover)_and_(min-width:768px)]:opacity-0 [@media(hover:hover)_and_(min-width:768px)]:group-hover:opacity-100 [@media(hover:hover)_and_(min-width:768px)]:group-focus-within:opacity-100";

// Icon-only message action: 44px target on small screens, compact on desktop.
export const ACTION_BUTTON_CLASS =
  "border-none flex items-center justify-center rounded-md w-11 h-11 md:w-7 md:h-7 text-zinc-300 light:text-slate-500 hover:text-white light:hover:text-slate-900 transition-colors duration-quick";
