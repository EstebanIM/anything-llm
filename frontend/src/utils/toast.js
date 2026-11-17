import { toast } from "react-toastify";

// At most this many toasts on screen; a new one dismisses the oldest instead of
// queueing behind errors that stay until they are closed.
const MAX_VISIBLE = 3;
const active = [];
const errorIds = new Set();

toast.onChange(({ id, status }) => {
  if (status !== "removed") return;
  const index = active.indexOf(id);
  if (index !== -1) active.splice(index, 1);
  errorIds.delete(id);
});

/**
 * Errors stay until they are closed (they often carry details worth reading
 * twice); the rest stay long enough to read them: 5-10 s by length.
 */
function autoCloseFor(type, message) {
  if (type === "error") return false;
  const length = typeof message === "string" ? message.length : 80;
  return Math.min(10000, Math.max(5000, 4000 + length * 60));
}

function currentTheme() {
  return document.documentElement.getAttribute("data-theme") === "light"
    ? "light"
    : "dark";
}

function isTouch() {
  return !!window.matchMedia?.("(pointer: coarse)").matches;
}

/**
 * Shows a toast notification with the given message and type.
 * Errors are announced as alerts and stay until closed; the rest are polite
 * status messages. `clear: true` removes the previous non-error toasts (an
 * unread error is never wiped by a later success).
 *
 * @param {string} message - The message to display in the toast.
 * @param {'success' | 'error' | 'info' | 'warning' | 'default'} type - The type of toast to display.
 * @param {Object} opts - Additional react-toastify options, plus `clear`.
 * @returns {import("react-toastify").Id}
 */
const showToast = (message, type = "default", opts = {}) => {
  const { clear, ...rest } = opts || {};
  const options = {
    autoClose: autoCloseFor(type, message),
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: true,
    pauseOnFocusLoss: true,
    draggable: isTouch(),
    role: type === "error" ? "alert" : "status",
    theme: currentTheme(),
    ...rest,
  };

  if (clear === true)
    active.filter((id) => !errorIds.has(id)).forEach((id) => toast.dismiss(id));
  while (active.length >= MAX_VISIBLE) toast.dismiss(active.shift());

  let id;
  switch (type) {
    case "success":
      id = toast.success(message, options);
      break;
    case "error":
      id = toast.error(message, options);
      errorIds.add(id);
      break;
    case "info":
      id = toast.info(message, options);
      break;
    case "warning":
      id = toast.warn(message, options);
      break;
    default:
      id = toast(message, options);
  }
  active.push(id);
  return id;
};

export default showToast;
