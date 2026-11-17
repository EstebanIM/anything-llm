import { useState, useEffect, useRef, createContext, useContext } from "react";
import { v4 } from "uuid";
import { useTranslation } from "react-i18next";
import { CircleAlert, X } from "lucide-react";
import System from "@/models/system";
import { useDropzone } from "react-dropzone";
import DndIcon from "./dnd-icon.png";
import Workspace from "@/models/workspace";
import showToast from "@/utils/toast";
import FileUploadWarningModal from "./FileUploadWarningModal";
import EmbeddingProgressModal from "./EmbeddingProgressModal";
import {
  EmbeddingProgressProvider,
  useEmbeddingProgress,
} from "@/EmbeddingProgressContext";

export const DndUploaderContext = createContext();
export const REMOVE_ATTACHMENT_EVENT = "ATTACHMENT_REMOVE";
export const CLEAR_ATTACHMENTS_EVENT = "ATTACHMENT_CLEAR";
export const PASTE_ATTACHMENT_EVENT = "ATTACHMENT_PASTED";
export const ATTACHMENTS_PROCESSING_EVENT = "ATTACHMENTS_PROCESSING";
export const ATTACHMENTS_PROCESSED_EVENT = "ATTACHMENTS_PROCESSED";
export const PARSED_FILE_ATTACHMENT_REMOVED_EVENT =
  "PARSED_FILE_ATTACHMENT_REMOVED";
export const PARSED_FILES_UPDATED_EVENT = "PARSED_FILES_UPDATED";

/**
 * File Attachment for automatic upload on the chat container page.
 * @typedef Attachment
 * @property {string} uid - unique file id.
 * @property {File} file - native File object
 * @property {string|null} contentString - base64 encoded string of file
 * @property {('in_progress'|'failed'|'embedded'|'added_context')} status - the automatic upload status.
 * @property {string|null} error - Error message
 * @property {{id:string, location:string}|null} document - uploaded document details
 * @property {('attachment'|'upload')} type - The type of upload. Attachments are chat-specific, uploads go to the workspace.
 */

/**
 * @typedef {Object} ParsedFile
 * @property {number} id - The id of the parsed file.
 * @property {string} filename - The name of the parsed file.
 * @property {number} workspaceId - The id of the workspace the parsed file belongs to.
 * @property {string|null} userId - The id of the user the parsed file belongs to.
 * @property {string|null} threadId - The id of the thread the parsed file belongs to.
 * @property {string} metadata - The metadata of the parsed file.
 * @property {number} tokenCountEstimate - The estimated token count of the parsed file.
 */

export function DnDFileUploaderProvider({
  workspace,
  threadSlug = null,
  children,
}) {
  // Attachment state and event listeners belong to one conversation.
  return (
    <EmbeddingProgressProvider>
      <DnDFileUploader
        key={`${workspace.slug}:${threadSlug ?? "default"}`}
        workspace={workspace}
        threadSlug={threadSlug}
      >
        {children}
      </DnDFileUploader>
    </EmbeddingProgressProvider>
  );
}

function DnDFileUploader({ workspace, threadSlug, children }) {
  const { t } = useTranslation();
  const mountedRef = useRef(true);
  const [files, setFiles] = useState([]);
  // null while the first document processor check is in flight.
  const [ready, setReady] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [showWarningModal, setShowWarningModal] = useState(false);
  const [embeddingFiles, setEmbeddingFiles] = useState([]);
  const [showEmbedProgress, setShowEmbedProgress] = useState(false);
  const [pendingFiles, setPendingFiles] = useState([]);
  const [tokenCount, setTokenCount] = useState(0);
  const [maxTokens, setMaxTokens] = useState(Number.POSITIVE_INFINITY);
  const { embeddingProgressMap, startEmbedding } = useEmbeddingProgress();
  const embeddingProgress = embeddingProgressMap[workspace.slug] || null;
  const lastEmbeddingProgressRef = useRef(null);

  useEffect(() => {
    System.checkDocumentProcessorOnline().then((status) => {
      if (mountedRef.current) setReady(status);
    });
  }, []);

  async function recheckReady() {
    const status = await System.checkDocumentProcessorOnline();
    if (mountedRef.current) setReady(status);
    return status;
  }

  useEffect(() => {
    mountedRef.current = true;
    window.addEventListener(REMOVE_ATTACHMENT_EVENT, handleRemove);
    window.addEventListener(CLEAR_ATTACHMENTS_EVENT, resetAttachments);
    window.addEventListener(PASTE_ATTACHMENT_EVENT, handlePastedAttachment);
    window.addEventListener(
      PARSED_FILE_ATTACHMENT_REMOVED_EVENT,
      handleRemoveParsedFile
    );

    return () => {
      // In-flight uploads must not dispatch events to the next conversation.
      mountedRef.current = false;
      window.removeEventListener(REMOVE_ATTACHMENT_EVENT, handleRemove);
      window.removeEventListener(CLEAR_ATTACHMENTS_EVENT, resetAttachments);
      window.removeEventListener(
        PARSED_FILE_ATTACHMENT_REMOVED_EVENT,
        handleRemoveParsedFile
      );
      window.removeEventListener(
        PASTE_ATTACHMENT_EVENT,
        handlePastedAttachment
      );
    };
  }, []);

  /**
   * Handles the removal of a parsed file attachment from the uploader queue.
   * Only uses the document id to remove the file from the queue
   * @param {CustomEvent<{document: ParsedFile}>} event
   */
  async function handleRemoveParsedFile(event) {
    const { document } = event.detail;
    setFiles((prev) =>
      prev.filter((prevFile) => prevFile.document?.id !== document.id)
    );
  }

  /**
   * Remove file from uploader queue.
   * @param {CustomEvent<{uid: string}>} event
   */
  async function handleRemove(event) {
    /** @type {{uid: Attachment['uid'], document: Attachment['document']}} */
    const { uid, document } = event.detail;
    setFiles((prev) => prev.filter((prevFile) => prevFile.uid !== uid));
    if (!document?.location) return;
    const removed = await Workspace.deleteAndUnembedFile(
      workspace.slug,
      document.location
    ).catch(() => false);
    if (!removed && mountedRef.current)
      showToast(t("chat-panels.upload.remove-failed"), "error");
  }

  /**
   * Clear queue of attached files currently in prompt box
   */
  function resetAttachments() {
    setFiles([]);
  }

  /**
   * Turns files into attachments we can send as body request to backend
   * for a chat.
   * @returns {{name:string,mime:string,contentString:string}[]}
   */
  function parseAttachments() {
    return (
      files
        ?.filter(
          (file) => file.type === "attachment" && file.status !== "failed"
        )
        ?.map(
          (
            /** @type {Attachment} */
            attachment
          ) => {
            return {
              name: attachment.file.name,
              mime: attachment.file.type,
              contentString: attachment.contentString,
              ...(attachment.storageFilename && {
                storageFilename: attachment.storageFilename,
              }),
            };
          }
        ) || []
    );
  }

  /**
   * Handle pasted attachments.
   * @param {CustomEvent<{files: File[]}>} event
   */
  async function handlePastedAttachment(event) {
    const { files = [], storageFilename = null } = event.detail;
    if (!files.length) return;
    const newAccepted = await toAttachments(files, storageFilename);
    if (!mountedRef.current) return;
    setFiles((prev) => [...prev, ...newAccepted]);
    embedEligibleAttachments(newAccepted);
  }

  /**
   * Handle dropped files.
   * @param {Attachment[]} acceptedFiles
   * @param {any[]} _rejections
   */
  async function onDrop(acceptedFiles, _rejections) {
    setDragging(false);
    const newAccepted = await toAttachments(acceptedFiles);
    if (!mountedRef.current) return;
    setFiles((prev) => [...prev, ...newAccepted]);
    embedEligibleAttachments(newAccepted);
  }

  /**
   * Images become chat attachments (base64), everything else is uploaded.
   * @param {File[]} fileList
   * @param {string|null} storageFilename
   * @returns {Promise<Attachment[]>}
   */
  async function toAttachments(fileList, storageFilename = null) {
    /** @type {Attachment[]} */
    const attachments = [];
    for (const file of fileList) {
      if (!file.type.startsWith("image/")) {
        attachments.push({
          uid: v4(),
          file,
          contentString: null,
          status: "in_progress",
          error: null,
          type: "upload",
        });
        continue;
      }
      let contentString = null;
      try {
        contentString = await toBase64(file);
      } catch (e) {
        console.error(e);
      }
      attachments.push({
        uid: v4(),
        file,
        contentString,
        status: contentString ? "success" : "failed",
        error: contentString ? null : t("chat-panels.upload.read-failed"),
        type: "attachment",
        ...(storageFilename && { storageFilename }),
      });
    }
    return attachments;
  }

  /**
   * @param {string} uid
   * @param {Partial<Attachment>} updates
   */
  function updateAttachment(uid, updates) {
    setFiles((prev) =>
      prev.map((prevFile) =>
        prevFile.uid !== uid ? prevFile : { ...prevFile, ...updates }
      )
    );
  }

  /**
   * Spanish reason for a failed parse; server and network details only go
   * to the console.
   * @param {unknown} error - thrown error or the server's error message
   * @returns {string}
   */
  function uploadFailureReason(error) {
    console.error(error);
    // fetch rejects with a TypeError when the request never got a response
    if (error instanceof TypeError)
      return t("chat-panels.upload.network-error");
    if (typeof error === "string" && /not online/i.test(error))
      return t("connectors.upload.processor-offline-desc");
    return t("chat-panels.upload.parse-failed");
  }

  /**
   * Embeds attachments that are eligible for embedding - basically files that are not images.
   * @param {Attachment[]} newAttachments
   */
  async function embedEligibleAttachments(newAttachments = []) {
    if (!mountedRef.current) return;
    window.dispatchEvent(new CustomEvent(ATTACHMENTS_PROCESSING_EVENT));

    // Whatever fails below, the processed event must go out or the send
    // button stays locked until a reload.
    try {
      let currentContextTokenCount = 0;
      let contextWindow = null;
      try {
        const parsed = await Workspace.getParsedFiles(
          workspace.slug,
          threadSlug
        );
        currentContextTokenCount = parsed?.currentContextTokenCount ?? 0;
        contextWindow = parsed?.contextWindow ?? null;
      } catch (e) {
        // Uploads can still go ahead; the context check starts from zero.
        console.error(e);
      }
      if (!mountedRef.current) return;
      const workspaceContextWindow = contextWindow
        ? Math.floor(contextWindow * Workspace.maxContextWindowLimit)
        : Number.POSITIVE_INFINITY;
      setMaxTokens(workspaceContextWindow);

      let totalTokenCount = currentContextTokenCount;
      let batchPendingFiles = [];

      // Images/attachments are chat specific.
      const uploads = newAttachments.filter((a) => a.type !== "attachment");
      await Promise.all(
        uploads.map(async (attachment) => {
          const formData = new FormData();
          formData.append("file", attachment.file, attachment.file.name);
          formData.append("threadSlug", threadSlug || null);

          let response, data;
          try {
            ({ response, data } = await Workspace.parseFile(
              workspace.slug,
              formData
            ));
          } catch (e) {
            if (!mountedRef.current) return;
            updateAttachment(attachment.uid, {
              status: "failed",
              error: uploadFailureReason(e),
            });
            return;
          }
          if (!mountedRef.current) return;

          // Will always be one file in the array
          /** @type {ParsedFile} */
          const file = data?.files?.[0];
          if (!response.ok || !file) {
            updateAttachment(attachment.uid, {
              status: "failed",
              error: uploadFailureReason(data?.error ?? response.status),
            });
            return;
          }

          // Add token count for this file
          // and add it to the batch pending files
          totalTokenCount += file.tokenCountEstimate;
          batchPendingFiles.push({
            attachment,
            parsedFileId: file.id,
            tokenCount: file.tokenCountEstimate,
          });

          if (totalTokenCount > workspaceContextWindow) {
            setTokenCount(totalTokenCount);
            setPendingFiles(batchPendingFiles);
            setShowWarningModal(true);
            return;
          }

          // File is within limits, keep in parsed files
          updateAttachment(attachment.uid, {
            status: "added_context",
            error: null,
            document: file,
          });
        })
      );
    } finally {
      if (mountedRef.current)
        window.dispatchEvent(new CustomEvent(ATTACHMENTS_PROCESSED_EVENT));
    }
  }

  // Handle modal actions
  const handleCloseModal = async () => {
    if (!pendingFiles.length) return;

    // Delete all files from this batch. They never reached the chat, so the
    // batch leaves the UI even if the server cleanup fails.
    await Workspace.deleteParsedFiles(
      workspace.slug,
      pendingFiles.map((file) => file.parsedFileId)
    ).catch((e) => console.error(e));
    if (!mountedRef.current) return;

    // Remove all files from this batch from the UI
    setFiles((prev) =>
      prev.filter(
        (prevFile) =>
          !pendingFiles.some((file) => file.attachment.uid === prevFile.uid)
      )
    );
    setShowWarningModal(false);
    setPendingFiles([]);
    setTokenCount(0);
    window.dispatchEvent(new CustomEvent(ATTACHMENTS_PROCESSED_EVENT));
  };

  const handleContinueAnyway = async () => {
    if (!pendingFiles.length) return;
    const results = pendingFiles.map((file) => ({
      success: true,
      document: { id: file.parsedFileId },
    }));

    const fileUpdates = pendingFiles.map((file, i) => ({
      uid: file.attachment.uid,
      updates: {
        status: results[i].success ? "success" : "failed",
        error: results[i].error ?? null,
        document: results[i].document,
      },
    }));

    setFiles((prev) =>
      prev.map((prevFile) => {
        const update = fileUpdates.find((f) => f.uid === prevFile.uid);
        return update ? { ...prevFile, ...update.updates } : prevFile;
      })
    );
    setShowWarningModal(false);
    setPendingFiles([]);
    setTokenCount(0);
  };

  const handleEmbed = async () => {
    if (!pendingFiles.length) return;
    const moved = await Workspace.moveParsedFiles(
      workspace.slug,
      pendingFiles.map((file) => file.parsedFileId)
    );
    if (!mountedRef.current) return;
    window.dispatchEvent(new CustomEvent(PARSED_FILES_UPDATED_EVENT));

    const locations = Array.isArray(moved?.locations) ? moved.locations : [];
    const queued = pendingFiles.map((file, i) => ({
      ...file,
      location: locations[i] ?? null,
    }));
    const adds = queued.map((file) => file.location).filter(Boolean);
    setShowWarningModal(false);
    setPendingFiles([]);
    setTokenCount(0);
    if (!adds.length) return finishEmbedding(queued, {});

    setFiles((prev) =>
      prev.map((prevFile) =>
        queued.some((file) => file.attachment.uid === prevFile.uid)
          ? { ...prevFile, status: "in_progress" }
          : prevFile
      )
    );
    setEmbeddingFiles(queued);
    setShowEmbedProgress(true);
    Workspace.modifyEmbeddings(workspace.slug, { adds });
    startEmbedding(workspace.slug, adds);
  };

  // The queue clears its progress shortly after the job finishes, so the last
  // non-empty snapshot holds the final status of each file.
  useEffect(() => {
    if (!embeddingFiles.length) return;
    if (embeddingProgress) {
      lastEmbeddingProgressRef.current = embeddingProgress;
      syncEmbeddingStatus(embeddingFiles, embeddingProgress);
      return;
    }
    if (lastEmbeddingProgressRef.current)
      finishEmbedding(embeddingFiles, lastEmbeddingProgressRef.current);
  }, [embeddingProgress, embeddingFiles]);

  /**
   * Copy each queued file's embed status onto its attachment. Attachments
   * whose file is no longer queued (or unfinished once `done`) are dropped.
   * @param {{attachment: Attachment, location: string|null}[]} queued
   * @param {Object<string, {status: string, error?: string}>} progress
   * @param {boolean} done - whether the embedding job has finished
   */
  function syncEmbeddingStatus(queued, progress, done = false) {
    const results = queued.map((file) => ({
      uid: file.attachment.uid,
      location: file.location,
      ...(file.location ? progress[file.location] : { status: "failed" }),
    }));

    setFiles((prev) =>
      prev.flatMap((prevFile) => {
        const result = results.find((r) => r.uid === prevFile.uid);
        if (!result) return [prevFile];
        if (result.status === "complete")
          return [
            {
              ...prevFile,
              status: "embedded",
              error: null,
              document: { location: result.location },
            },
          ];
        if (result.status === "failed")
          return [
            {
              ...prevFile,
              status: "failed",
              error: t("chat-panels.upload.embed-failed"),
            },
          ];
        if (done || !result.status) return [];
        return [prevFile];
      })
    );
    return results;
  }

  /**
   * @param {{attachment: Attachment, location: string|null}[]} queued
   * @param {Object<string, {status: string, error?: string}>} progress
   */
  function finishEmbedding(queued, progress) {
    const finished = syncEmbeddingStatus(queued, progress, true).filter((r) =>
      ["complete", "failed"].includes(r.status)
    );
    setEmbeddingFiles([]);
    setShowEmbedProgress(false);
    lastEmbeddingProgressRef.current = null;
    window.dispatchEvent(new CustomEvent(ATTACHMENTS_PROCESSED_EVENT));

    if (!finished.length) return;
    const allEmbedded = finished.every((r) => r.status === "complete");
    showToast(
      allEmbedded
        ? t("chat-panels.upload.embedded", { count: finished.length })
        : t("chat-panels.upload.embed-failed-toast"),
      allEmbedded ? "success" : "error"
    );
  }

  return (
    <DndUploaderContext.Provider
      value={{
        files,
        ready,
        recheckReady,
        dragging,
        setDragging,
        onDrop,
        parseAttachments,
      }}
    >
      <FileUploadWarningModal
        show={showWarningModal}
        onClose={handleCloseModal}
        onContinue={handleContinueAnyway}
        onEmbed={handleEmbed}
        tokenCount={tokenCount}
        maxTokens={maxTokens}
        fileCount={pendingFiles.length}
      />
      <EmbeddingProgressModal
        show={showEmbedProgress}
        onClose={() => setShowEmbedProgress(false)}
        workspaceSlug={workspace.slug}
      />
      {children}
    </DndUploaderContext.Provider>
  );
}

export default function DnDFileUploaderWrapper({ children }) {
  const { t } = useTranslation();
  const { onDrop, ready, recheckReady, dragging, setDragging } =
    useContext(DndUploaderContext);
  const [offlineNotice, setOfflineNotice] = useState(false);
  const offline = ready === false;

  function warnOffline() {
    setOfflineNotice(true);
    // So the next attempt goes through if the processor came back.
    recheckReady?.();
  }

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles, rejections) => {
      if (offline) {
        setDragging(false);
        warnOffline();
        return;
      }
      setOfflineNotice(false);
      onDrop(acceptedFiles, rejections);
    },
    noClick: true,
    noKeyboard: true,
    onDragEnter: () => setDragging(true),
    onDragLeave: () => setDragging(false),
  });

  return (
    <div
      className={`relative flex flex-col h-full w-full md:mt-0 mt-[40px] p-[1px]`}
      {...getRootProps()}
    >
      <div
        hidden={!dragging}
        className="absolute top-0 w-full h-full bg-dark-text/90 light:bg-[#C2E7FE]/90 rounded-2xl border-[4px] border-white z-[9999]"
      >
        <div className="w-full h-full flex justify-center items-center rounded-xl">
          <div className="flex flex-col gap-y-[14px] justify-center items-center px-6 max-w-[460px]">
            <img src={DndIcon} width={69} height={69} alt="" />
            <p className="text-white text-[24px] font-semibold text-center">
              {offline
                ? t("connectors.upload.processor-offline")
                : t("chat-panels.drop.title")}
            </p>
            <p className="text-white text-[16px] text-center">
              {offline
                ? t("connectors.upload.processor-offline-desc")
                : t("chat-panels.drop.description")}
            </p>
          </div>
        </div>
      </div>
      {offlineNotice && (
        <div
          role="alert"
          className="absolute top-16 md:top-20 inset-x-4 z-30 mx-auto max-w-[560px] flex items-start gap-3 rounded-lg border border-amber-500/40 light:border-amber-300 bg-zinc-800 light:bg-amber-50 p-3 shadow-lg"
        >
          <CircleAlert
            strokeWidth={1.5}
            size={18}
            className="mt-0.5 shrink-0 text-amber-400 light:text-amber-700"
            aria-hidden="true"
          />
          <div className="flex-1 min-w-0 text-sm">
            <p className="font-medium text-zinc-50 light:text-slate-900">
              {t("connectors.upload.processor-offline")}
            </p>
            <p className="text-zinc-300 light:text-slate-700">
              {t("connectors.upload.processor-offline-desc")}
            </p>
          </div>
          <button
            type="button"
            onClick={() => setOfflineNotice(false)}
            aria-label={t("chat-panels.upload.dismiss")}
            className="-m-2 md:-m-1 w-11 h-11 md:w-7 md:h-7 shrink-0 flex items-center justify-center rounded-md text-zinc-300 light:text-slate-600 hover:text-white light:hover:text-slate-900 transition-colors duration-quick"
          >
            <X strokeWidth={1.5} size={16} aria-hidden="true" />
          </button>
        </div>
      )}
      <input
        id="dnd-chat-file-uploader"
        {...getInputProps({
          // Keep the file picker closed when nothing could process the
          // selection, instead of silently dropping it afterwards.
          onClick: (e) => {
            if (!offline) return;
            e.preventDefault();
            warnOffline();
          },
        })}
      />
      {children}
    </div>
  );
}

/**
 * Convert image types into Base64 strings for requests.
 * @param {File} file
 * @returns {Promise<string>}
 */
async function toBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const base64String = reader.result.split(",")[1];
      resolve(`data:${file.type};base64,${base64String}`);
    };
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
}
