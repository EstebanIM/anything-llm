import { Fragment, useEffect, useId, useState } from "react";
import { useTranslation } from "react-i18next";
import Modal, { ModalHeader, ModalBody } from "@/components/lib/Modal";
import useUser from "@/hooks/useUser";
import {
  SHORTCUTS,
  KEYBOARD_SHORTCUTS_HELP_EVENT,
  comboKeys,
  isShortcutAvailable,
} from "@/utils/keyboardShortcuts";

const GROUPS = [
  { id: "global", titleKey: "dialogs.shortcuts.group-global" },
  { id: "chat", titleKey: "dialogs.shortcuts.group-chat" },
];

/**
 * Help dialog listing the shortcuts of the registry in `utils/keyboardShortcuts`
 * that the current user has. Opened with F1, Mod + Shift + ? or the user menu.
 */
export default function KeyboardShortcutsHelp() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const { user } = useUser();
  const noteId = useId();
  const groupId = useId();

  useEffect(() => {
    const onHelpEvent = (event) => {
      const show = event.detail?.show;
      setIsOpen((prev) => (typeof show === "boolean" ? show : !prev));
    };
    window.addEventListener(KEYBOARD_SHORTCUTS_HELP_EVENT, onHelpEvent);
    return () =>
      window.removeEventListener(KEYBOARD_SHORTCUTS_HELP_EVENT, onHelpEvent);
  }, []);

  const close = () => setIsOpen(false);
  const shortcuts = SHORTCUTS.filter((s) => isShortcutAvailable(s, user));

  return (
    <Modal isOpen={isOpen} onClose={close} size="lg" describedBy={noteId}>
      <ModalHeader title={t("keyboard-shortcuts.title")} onClose={close} />
      <ModalBody className="gap-y-5">
        <p
          id={noteId}
          data-shortcuts-help=""
          className="text-sm text-zinc-300 light:text-slate-700"
        >
          {t("dialogs.shortcuts.note")}
        </p>
        {GROUPS.map((group) => {
          const items = shortcuts.filter((s) => s.group === group.id);
          if (items.length === 0) return null;
          const headingId = `${groupId}-${group.id}`;
          return (
            <section key={group.id} aria-labelledby={headingId}>
              <h3
                id={headingId}
                className="text-sm font-semibold text-slate-50 light:text-slate-900 mb-1"
              >
                {t(group.titleKey)}
              </h3>
              <dl>
                {items.map((shortcut) => (
                  <div
                    key={shortcut.id}
                    className="flex flex-col gap-y-1.5 md:flex-row md:items-center md:justify-between md:gap-x-4 py-2.5 border-b border-zinc-800 light:border-slate-200 last:border-b-0"
                  >
                    <dt className="min-w-0">
                      <span className="block text-sm text-zinc-100 light:text-slate-900">
                        {t(shortcut.labelKey)}
                      </span>
                      {shortcut.noteKey && (
                        <span className="block text-xs text-zinc-400 light:text-slate-600">
                          {t(shortcut.noteKey)}
                        </span>
                      )}
                    </dt>
                    <dd className="flex flex-wrap items-center gap-x-2 gap-y-1 shrink-0">
                      {shortcut.combos.map((combo, index) => (
                        <Fragment key={combo.join("+")}>
                          {index > 0 && (
                            <span className="text-xs text-zinc-400 light:text-slate-600">
                              {t("dialogs.shortcuts.or")}
                            </span>
                          )}
                          <KeyCombo combo={combo} />
                        </Fragment>
                      ))}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          );
        })}
      </ModalBody>
    </Modal>
  );
}

function KeyCombo({ combo }) {
  const { t } = useTranslation();
  return (
    <kbd className="inline-flex items-center gap-x-1 whitespace-nowrap font-sans">
      {comboKeys(combo, t).map((key, index) => (
        <Fragment key={index}>
          {index > 0 && (
            <span className="text-xs text-zinc-400 light:text-slate-600">
              +
            </span>
          )}
          <kbd className="min-w-[1.75rem] px-1.5 py-0.5 rounded text-center text-xs font-medium font-sans text-zinc-100 light:text-slate-900 bg-zinc-800 light:bg-white border border-zinc-600 light:border-slate-400">
            {key.srLabel ? (
              <>
                <span aria-hidden="true">{key.label}</span>
                <span className="sr-only">{key.srLabel}</span>
              </>
            ) : (
              key.label
            )}
          </kbd>
        </Fragment>
      ))}
    </kbd>
  );
}
