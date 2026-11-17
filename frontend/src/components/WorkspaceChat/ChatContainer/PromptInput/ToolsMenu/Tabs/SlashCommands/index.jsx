import { useState, useEffect, useMemo, useCallback } from "react";
import { Plus } from "lucide-react";
import { useTranslation } from "react-i18next";
import System from "@/models/system";
import { useModal } from "@/hooks/useModal";
import AddPresetModal from "./SlashPresets/AddPresetModal";
import EditPresetModal from "./SlashPresets/EditPresetModal";
import { serverErrorMessage } from "@/utils/serverErrors";
import { PROMPT_INPUT_EVENT } from "@/components/WorkspaceChat/ChatContainer/PromptInput";
import useToolsMenuItems from "../../useToolsMenuItems";
import SlashCommandRow from "./SlashCommandRow";

export default function SlashCommandsTab({
  sendCommand,
  setShowing,
  promptRef,
  highlightedIndex = -1,
  registerItemCount,
  listboxId,
  listboxLabelledBy,
  getOptionId = (index) => `slash-command-${index}`,
}) {
  const { t } = useTranslation();
  const {
    isOpen: isAddModalOpen,
    openModal: openAddModal,
    closeModal: closeAddModal,
  } = useModal();
  const {
    isOpen: isEditModalOpen,
    openModal: openEditModal,
    closeModal: closeEditModal,
  } = useModal();
  const [presets, setPresets] = useState([]);
  const [selectedPreset, setSelectedPreset] = useState(null);
  const [imageGenEnabled, setImageGenEnabled] = useState(false);

  useEffect(() => {
    fetchPresets();
    fetchImageGenStatus();
  }, []);

  const fetchPresets = async () => {
    const presets = await System.getSlashCommandPresets();
    setPresets(presets);
  };

  const fetchImageGenStatus = async () => {
    setImageGenEnabled(await System.isImageGenerationAvailable());
  };

  const items = useMemo(
    () => [
      {
        command: "/reset",
        description: t("chat_window.preset_reset_description"),
        autoSubmit: true,
      },
      ...(imageGenEnabled
        ? [
            {
              command: "/img",
              description: t("chat_window.preset_img_description"),
              autoSubmit: false,
            },
          ]
        : []),
      ...presets.map((preset) => ({
        command: preset.command,
        description: preset.description,
        autoSubmit: false,
        preset,
      })),
    ],
    [presets, imageGenEnabled, t]
  );

  const handleUseCommand = useCallback(
    (command, autoSubmit = false) => {
      setShowing(false);

      // Auto-submit commands (/reset) fire immediately
      if (autoSubmit) {
        sendCommand({ text: command, autoSubmit: true });
        promptRef?.current?.focus();
        return;
      }

      // Insert the command at the cursor, replacing a trailing "/" if present
      const textarea = promptRef?.current;
      if (!textarea) return;
      const cursor = textarea.selectionStart;
      const value = textarea.value;
      const charBefore = cursor > 0 ? value[cursor - 1] : "";
      const insertStart = charBefore === "/" ? cursor - 1 : cursor;
      const newValue =
        value.slice(0, insertStart) + command + value.slice(cursor);

      window.dispatchEvent(
        new CustomEvent(PROMPT_INPUT_EVENT, {
          detail: { messageContent: newValue },
        })
      );
      textarea.focus();
      const newCursor = insertStart + command.length;
      setTimeout(() => textarea.setSelectionRange(newCursor, newCursor), 0);
    },
    [sendCommand, setShowing, promptRef]
  );

  // "Add new" is the last option so it is reachable with the arrow keys too.
  const navItems = useMemo(() => [...items, { type: "add-new" }], [items]);
  const addNewIndex = items.length;

  useToolsMenuItems({
    items: navItems,
    highlightedIndex,
    onSelect: (item) => {
      if (item.type === "add-new") return openAddModal();
      const text = item.autoSubmit ? item.command : `${item.command} `;
      handleUseCommand(text, item.autoSubmit);
    },
    registerItemCount,
  });

  // Errors go back to the open dialog, next to the fields.
  const presetError = (error) =>
    serverErrorMessage(error, t, "notices.preset-save-failed", {
      known: [["matches a system command", "chat-input.preset-reserved"]],
    });

  /** @returns {Promise<string|null>} translated error, or null when saved */
  const handleSavePreset = async (preset) => {
    const { error } = await System.createSlashCommandPreset(preset);
    if (error) return presetError(error);
    fetchPresets();
    closeAddModal();
    return null;
  };

  const handleEditPreset = (preset) => {
    setSelectedPreset(preset);
    openEditModal();
  };

  /** @returns {Promise<string|null>} translated error, or null when saved */
  const handleUpdatePreset = async (updatedPreset) => {
    const { error } = await System.updateSlashCommandPreset(
      updatedPreset.id,
      updatedPreset
    );
    if (error) return presetError(error);
    fetchPresets();
    closeEditModal();
    setSelectedPreset(null);
    return null;
  };

  const handleDeletePreset = async (presetId) => {
    await System.deleteSlashCommandPreset(presetId);
    fetchPresets();
    closeEditModal();
    setSelectedPreset(null);
  };

  return (
    <>
      <div
        role="listbox"
        id={listboxId}
        aria-labelledby={listboxLabelledBy}
        className="flex flex-col gap-1"
      >
        {items.map((item, index) => (
          <SlashCommandRow
            key={item.preset?.id ?? item.command}
            optionId={getOptionId(index)}
            command={item.command}
            description={item.description}
            onClick={() =>
              handleUseCommand(
                item.autoSubmit ? item.command : `${item.command} `,
                item.autoSubmit
              )
            }
            onEdit={
              item.preset ? () => handleEditPreset(item.preset) : undefined
            }
            showMenu={!!item.preset}
            highlighted={highlightedIndex === index}
          />
        ))}

        {/* Add new */}
        <div
          role="option"
          id={getOptionId(addNewIndex)}
          aria-selected={highlightedIndex === addNewIndex}
          onClick={openAddModal}
          className={`flex items-center gap-1.5 px-2 py-1 min-h-11 md:min-h-0 rounded cursor-pointer transition-colors duration-quick ${
            highlightedIndex === addNewIndex
              ? "bg-zinc-700/50 light:bg-slate-100"
              : "hover:bg-zinc-700/50 light:hover:bg-slate-100"
          }`}
        >
          <Plus
            strokeWidth={1.5}
            size={12}
            aria-hidden="true"
            className="text-white light:text-slate-900"
          />
          <span className="text-xs text-white light:text-slate-900">
            {t("chat_window.add_new_preset").trim()}
          </span>
        </div>
      </div>

      {/* Modals */}
      <AddPresetModal
        isOpen={isAddModalOpen}
        onClose={closeAddModal}
        onSave={handleSavePreset}
      />
      {selectedPreset && (
        <EditPresetModal
          isOpen={isEditModalOpen}
          onClose={() => {
            closeEditModal();
            setSelectedPreset(null);
          }}
          onSave={handleUpdatePreset}
          onDelete={handleDeletePreset}
          preset={selectedPreset}
        />
      )}
    </>
  );
}
