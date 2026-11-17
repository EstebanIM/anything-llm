import { useId, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { FolderOpen } from "lucide-react";
import System from "@/models/system";
import {
  FIELD_ERROR,
  FIELD_HELP,
  FIELD_LABEL,
} from "@/components/ProviderFields";
import ConnectorForm from "../../components/ConnectorForm";
import useConnectorSubmit from "../../components/useConnectorSubmit";
import { Notice, folderName } from "../../components/fields";

/** Paths listed after picking a vault; the rest are summed up in one line. */
const LIST_LIMIT = 25;

export default function ObsidianOptions() {
  const { t } = useTranslation();
  const id = useId();
  const fileInputRef = useRef(null);
  const pickButtonRef = useRef(null);
  const [vaultPath, setVaultPath] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [missing, setMissing] = useState(false);
  const { busy, outcome, collect } = useConnectorSubmit({
    pending: t("data-connectors.obsidian.fetching"),
  });

  const handleFolderPick = (e) => {
    const files = Array.from(e.target.files ?? []);
    if (files.length === 0) return;
    setSelectedFiles(files.filter((file) => file.name.endsWith(".md")));
    // Named from any file so an empty pick can still say which folder it was.
    setVaultPath(files[0].webkitRelativePath.split("/")[0]);
    setMissing(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedFiles.length === 0) {
      setMissing(true);
      pickButtonRef.current?.focus();
      return;
    }

    collect(e.currentTarget, async () => {
      const files = await Promise.all(
        selectedFiles.map(async (file) => ({
          name: file.name,
          path: file.webkitRelativePath,
          content: await file.text(),
        }))
      );
      const { data, error } = await System.dataConnectors.obsidian.collect({
        files,
      });
      if (error) return { error };
      if (data.processed === data.total)
        return {
          message: t("data-connectors.obsidian.success", {
            count: data.processed,
            folder: folderName(data.destination),
          }),
        };
      return {
        type: "warning",
        message: t("data-connectors.obsidian.partial", {
          count: data.failed,
          processed: data.processed,
          total: data.total,
        }),
      };
    });
  };

  const handleReset = () => {
    setSelectedFiles([]);
    setVaultPath("");
    setMissing(false);
  };

  const hiddenCount = Math.max(selectedFiles.length - LIST_LIMIT, 0);

  return (
    <ConnectorForm
      onSubmit={handleSubmit}
      onReset={handleReset}
      busy={busy}
      outcome={outcome}
      submitLabel={t("connectors.obsidian.import_vault")}
      busyLabel={t("connectors.obsidian.importing")}
      taskExplained={t("connectors.obsidian.processing_time")}
    >
      <Notice>
        <p>{t("connectors.obsidian.vault_warning")}</p>
      </Notice>
      <fieldset aria-describedby={`${id}-help`} className="flex flex-col">
        <legend className={FIELD_LABEL}>
          {t("connectors.obsidian.vault_location")}
        </legend>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <button
            ref={pickButtonRef}
            type="button"
            onClick={() => fileInputRef.current?.click()}
            aria-describedby={`${id}-selection`}
            className="inline-flex items-center gap-x-2 min-h-[44px] md:min-h-[38px] px-3 rounded-lg border border-zinc-500 light:border-slate-500 bg-theme-settings-input-bg text-sm font-medium text-white hover:bg-zinc-800 light:hover:bg-slate-100 transition-colors duration-quick ease-smooth"
          >
            <FolderOpen strokeWidth={1.5} size={18} aria-hidden="true" />
            {t("data-connectors.obsidian.choose-folder")}
          </button>
          <p
            id={`${id}-selection`}
            className={`text-sm break-all ${vaultPath ? "text-white" : "text-theme-text-secondary"}`}
          >
            {vaultPath || t("data-connectors.obsidian.no-folder")}
          </p>
        </div>
        <input
          ref={fileInputRef}
          type="file"
          webkitdirectory=""
          tabIndex={-1}
          className="hidden"
          onChange={handleFolderPick}
        />
        <p id={`${id}-help`} className={FIELD_HELP}>
          {t("connectors.obsidian.vault_description")}
        </p>
        {missing && (
          <p role="alert" className={FIELD_ERROR}>
            {t("data-connectors.obsidian.need-folder")}
          </p>
        )}
        {/* Only the summary is live: announcing every listed path would drown it. */}
        <p
          aria-live="polite"
          className={
            selectedFiles.length > 0
              ? "mt-4 text-xs font-semibold text-white"
              : FIELD_HELP
          }
        >
          {vaultPath &&
            (selectedFiles.length > 0
              ? t("connectors.obsidian.selected_files", {
                  count: selectedFiles.length,
                })
              : t("data-connectors.obsidian.no-markdown", {
                  folder: vaultPath,
                }))}
        </p>
        {selectedFiles.length > 0 && (
          <>
            <ul className="mt-2 flex flex-col gap-y-1 text-xs text-white">
              {selectedFiles.slice(0, LIST_LIMIT).map((file) => (
                <li key={file.webkitRelativePath} className="break-all">
                  {file.webkitRelativePath}
                </li>
              ))}
            </ul>
            {hiddenCount > 0 && (
              <p className={FIELD_HELP}>
                {t("data-connectors.obsidian.more-files", {
                  count: hiddenCount,
                })}
              </p>
            )}
          </>
        )}
      </fieldset>
    </ConnectorForm>
  );
}
