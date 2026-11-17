import { useEffect, useId, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Pencil, Plus, Trash2 } from "lucide-react";
import Admin from "@/models/admin";
import showToast from "@/utils/toast";
import { serverErrorMessage } from "@/utils/serverErrors";
import { useTheme } from "@/hooks/useTheme";
import {
  PALETTE_SEEDS,
  copyPaletteColors,
  listPalettes,
  paletteStore,
} from "@/palettes";
import Toggle from "@/components/lib/Toggle";
import AutosaveForm, {
  SavedIndicator,
  useAutosaveForm,
} from "@/components/AutosaveForm";
import { FIELD_ERROR, FIELD_INPUT } from "@/components/ProviderFields";
import ConfirmModal from "@/components/lib/ConfirmModal";
import { PaletteButton, PaletteRadioGroup, paletteName } from "./PalettePicker";

/**
 * Admin editor for the palettes served to every user of this instance, the
 * instance default palette, and whether that default is enforced.
 * Every change saves as soon as it is made.
 */
export default function InstancePalettes() {
  const { t } = useTranslation();
  const { instancePalettes } = useTheme();
  const [draft, setDraft] = useState(instancePalettes);

  // Follow the server copy, which is also what every save resolves to.
  useEffect(() => {
    setDraft(instancePalettes);
  }, [instancePalettes]);

  async function persist() {
    const { success, error } = await Admin.updateSystemPreferences({
      theme_palettes: JSON.stringify(draft),
    });
    if (!success) {
      showToast(
        serverErrorMessage(
          error,
          t,
          "customization.items.instance-palettes.save-failed"
        ),
        "error"
      );
      setDraft(paletteStore.getSnapshot().instance);
      return false;
    }
    await paletteStore.refresh();
    return true;
  }

  return (
    <AutosaveForm onSave={persist} className="flex flex-col gap-y-0.5 my-4">
      <PaletteSettings draft={draft} setDraft={setDraft} />
    </AutosaveForm>
  );
}

function PaletteSettings({ draft, setDraft }) {
  const { t } = useTranslation();
  const id = useId();
  const { palette } = useTheme();
  const { markDirty, save } = useAutosaveForm();
  const [editing, setEditing] = useState(null);
  const [pendingDelete, setPendingDelete] = useState(null);
  const newButtonRef = useRef(null);
  // Where focus goes back when the editor closes: "new" or a palette id.
  const returnFocusTo = useRef(null);

  // Preview the palette being edited across the whole app.
  useEffect(() => {
    paletteStore.setPreview(
      editing
        ? { colors: { main: editing.main, accent: editing.accent } }
        : null
    );
  }, [editing]);
  useEffect(() => () => paletteStore.setPreview(null), []);

  useEffect(() => {
    if (editing || !returnFocusTo.current) return;
    const target =
      returnFocusTo.current === "new"
        ? newButtonRef.current
        : document.querySelector(
            `[data-palette-edit="${CSS.escape(returnFocusTo.current)}"]`
          );
    returnFocusTo.current = null;
    target?.focus();
  }, [editing]);

  /** Applies a change to the draft and saves it, showing the field's indicator. */
  function commit(field, next) {
    setDraft(next);
    markDirty(field);
    save();
  }

  function startNew() {
    returnFocusTo.current = "new";
    setEditing({
      id: `custom-${Math.random().toString(36).slice(2, 10)}`,
      name: "",
      ...copyPaletteColors(palette, draft),
    });
  }

  function startEdit(key) {
    returnFocusTo.current = key;
    setEditing({ ...draft.palettes.find(({ id }) => id === key) });
  }

  // PaletteEditor only calls this with a name (it shows the error itself).
  function finishEditing() {
    if (!editing.name.trim()) return;
    const exists = draft.palettes.some(({ id }) => id === editing.id);
    commit("palettes", {
      ...draft,
      palettes: exists
        ? draft.palettes.map((p) => (p.id === editing.id ? editing : p))
        : [...draft.palettes, editing],
    });
    if (!exists) returnFocusTo.current = editing.id;
    setEditing(null);
  }

  /** The default palette can only be enforced when it is not the stock one. */
  function setDefault(key) {
    const defaultPalette = key === "default" ? null : key;
    if (defaultPalette === draft.defaultPalette) return;
    commit("palettes", {
      ...draft,
      defaultPalette,
      enforced: defaultPalette ? draft.enforced : false,
    });
  }

  function removePalette(paletteId) {
    const isDefault = draft.defaultPalette === paletteId;
    commit("palettes", {
      palettes: draft.palettes.filter((p) => p.id !== paletteId),
      defaultPalette: isDefault ? null : draft.defaultPalette,
      enforced: isDefault ? false : draft.enforced,
    });
    setPendingDelete(null);
    // The tile is gone; continue from the "new palette" button.
    setTimeout(() => newButtonRef.current?.focus(), 0);
  }

  const options = listPalettes(draft);
  const selectedKey = draft.defaultPalette ?? "default";
  const hasSelection = options.some(({ key }) => key === selectedKey);

  return (
    <>
      <p
        id={`${id}-title`}
        className="text-sm leading-6 font-semibold text-white"
      >
        {t("customization.items.instance-palettes.title")}
        <SavedIndicator name="palettes" />
      </p>
      <p id={`${id}-help`} className="text-xs text-white/60">
        {t("customization.items.instance-palettes.description")}
      </p>

      <div className="flex flex-wrap items-center gap-2 mt-2">
        <PaletteRadioGroup
          labelledBy={`${id}-title`}
          describedBy={`${id}-help`}
          className="!mt-0"
        >
          {options.map((option, index) => {
            const name = paletteName(t, option);
            return (
              <PaletteButton
                key={option.key}
                name={name}
                colors={option.colors}
                selected={selectedKey === option.key}
                tabbable={
                  hasSelection ? selectedKey === option.key : index === 0
                }
                onClick={() => setDefault(option.key)}
                actions={
                  option.isInstance && (
                    <>
                      <IconButton
                        label={t("settings-pages.palette-edit", { name })}
                        onClick={() => startEdit(option.key)}
                        data-palette-edit={option.key}
                      >
                        <Pencil
                          strokeWidth={1.5}
                          size={14}
                          aria-hidden="true"
                        />
                      </IconButton>
                      <IconButton
                        label={t("settings-pages.palette-delete", { name })}
                        onClick={() =>
                          setPendingDelete({ id: option.key, name })
                        }
                        danger
                      >
                        <Trash2
                          strokeWidth={1.5}
                          size={14}
                          aria-hidden="true"
                        />
                      </IconButton>
                    </>
                  )
                }
              />
            );
          })}
        </PaletteRadioGroup>
        {!editing && (
          <button
            ref={newButtonRef}
            type="button"
            onClick={startNew}
            className="flex items-center gap-x-2 min-h-[44px] md:min-h-0 rounded-lg py-2 px-3 text-sm text-white/60 hover:text-white border border-dashed border-zinc-500 light:border-slate-500 transition-colors duration-quick ease-smooth"
          >
            <Plus strokeWidth={1.5} size={14} aria-hidden="true" />
            {t("customization.items.instance-palettes.new")}
          </button>
        )}
      </div>

      {editing && (
        <PaletteEditor
          palette={editing}
          onChange={setEditing}
          onDone={finishEditing}
          onCancel={() => setEditing(null)}
        />
      )}

      <Toggle
        size="md"
        variant="horizontal"
        className="mt-6"
        name="enforced"
        label={
          <>
            {t("customization.items.instance-palettes.enforce")}
            <SavedIndicator name="enforced" />
          </>
        }
        description={t(
          "customization.items.instance-palettes.enforce-description"
        )}
        enabled={draft.enforced}
        disabled={!draft.defaultPalette}
        onChange={(enforced) => commit("enforced", { ...draft, enforced })}
      />

      <ConfirmModal
        isOpen={!!pendingDelete}
        title={t("settings-pages.palette-delete-title", {
          name: pendingDelete?.name,
        })}
        confirmLabel={t("settings-pages.delete")}
        onConfirm={() => removePalette(pendingDelete.id)}
        onCancel={() => setPendingDelete(null)}
      >
        <p>{t("settings-pages.palette-delete-body")}</p>
      </ConfirmModal>
    </>
  );
}

function IconButton({ label, onClick, danger = false, children, ...props }) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={onClick}
      className={`flex items-center justify-center w-11 h-11 md:w-7 md:h-7 rounded-md text-white/60 transition-colors duration-quick ease-smooth ${danger ? "hover:text-red-400 light:hover:text-red-600" : "hover:text-white"}`}
      {...props}
    >
      {children}
    </button>
  );
}

function PaletteEditor({ palette, onChange, onDone, onCancel }) {
  const { t } = useTranslation();
  const id = useId();
  const [nameMissing, setNameMissing] = useState(false);

  const done = () => {
    if (!palette.name.trim()) {
      setNameMissing(true);
      document.getElementById(`${id}-name-input`)?.focus();
      return;
    }
    onDone();
  };

  // The palette saves on Done, so keep its inputs out of the form's autosave.
  const isolate = (e) => e.stopPropagation();

  return (
    <div
      role="group"
      aria-labelledby={`${id}-name`}
      onChange={isolate}
      onBlur={isolate}
      onKeyDown={(e) => {
        if (e.key !== "Escape") return;
        e.preventDefault();
        e.stopPropagation();
        onCancel();
      }}
      className="flex flex-col gap-y-3 mt-3 p-4 w-full md:w-fit rounded-lg border border-theme-sidebar-border"
    >
      <div className="flex flex-col gap-y-1.5">
        <label
          id={`${id}-name`}
          htmlFor={`${id}-name-input`}
          className="text-sm font-medium text-white"
        >
          {t("customization.items.instance-palettes.name")}
        </label>
        <input
          id={`${id}-name-input`}
          type="text"
          value={palette.name}
          maxLength={40}
          autoFocus
          autoComplete="off"
          onChange={(e) => {
            onChange({ ...palette, name: e.target.value });
            setNameMissing(false);
          }}
          onKeyDown={(e) => {
            if (e.key !== "Enter") return;
            e.preventDefault();
            done();
          }}
          aria-invalid={nameMissing || undefined}
          aria-describedby={nameMissing ? `${id}-name-error` : undefined}
          className={`${FIELD_INPUT} md:w-60`}
        />
        {nameMissing && (
          <p
            id={`${id}-name-error`}
            role="alert"
            className={`${FIELD_ERROR} !mt-0`}
          >
            {t("customization.items.instance-palettes.name-required")}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-y-2">
        {PALETTE_SEEDS.map((seed) => (
          <label key={seed} className="flex items-center gap-x-2 text-sm">
            <input
              type="color"
              value={palette[seed]}
              onChange={(e) => onChange({ ...palette, [seed]: e.target.value })}
              className="w-11 h-11 md:w-8 md:h-8 rounded cursor-pointer bg-transparent"
            />
            <span className="text-white">
              {t(`customization.items.instance-palettes.colors.${seed}`)}
            </span>
            <span className="text-xs text-white/60 font-mono">
              {palette[seed]}
            </span>
          </label>
        ))}
      </div>
      <p className="text-xs text-white/60">
        {t("customization.items.instance-palettes.preview-note")}
      </p>
      <div className="flex gap-x-2">
        <button
          type="button"
          onClick={done}
          className="min-h-[44px] md:min-h-0 border border-zinc-500 light:border-slate-500 px-4 py-2 rounded-lg text-white text-sm hover:bg-slate-200 hover:text-slate-800 transition-colors duration-quick ease-smooth"
        >
          {t("customization.items.instance-palettes.done")}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="min-h-[44px] md:min-h-0 px-4 py-2 rounded-lg text-white/60 text-sm hover:text-white transition-colors duration-quick ease-smooth"
        >
          {t("settings-pages.cancel")}
        </button>
      </div>
    </div>
  );
}
