import { useCallback, useEffect, useMemo, useState } from "react";
import { v4 } from "uuid";
import System from "@/models/system";
import { groupDroppedFiles, groupFilesIntoFolder } from "@/utils/folderUpload";

/**
 * The queue of in-flight uploads, shared by every drop target in the picker.
 *
 * There are two ways to start an upload and they must feed the same queue and
 * the same progress list: the dropzone under the picker, where the drop's own
 * folder structure decides the destination, and an individual folder row,
 * where the user has named the destination by dropping onto it.
 *
 * Each entry carries its own status so the uploader can summarize the batch:
 * `uploading` → `complete` (removed after a moment) or `failed` (kept until the
 * user retries or dismisses it); dropzone rejections arrive as `rejected`.
 */
export default function useUploadQueue() {
  /** @type {["checking"|"online"|"offline", Function]} document processor state */
  const [processor, setProcessor] = useState("checking");
  /** Upper-case extensions the document processor accepts ("PDF", "DOCX"). */
  const [formats, setFormats] = useState([]);
  const [files, setFiles] = useState([]);

  useEffect(() => {
    let cancelled = false;
    System.checkDocumentProcessorOnline().then((online) => {
      if (!cancelled) setProcessor(online ? "online" : "offline");
    });
    System.acceptedDocumentTypes().then((types) => {
      if (cancelled || !types) return;
      const extensions = new Set(
        Object.values(types)
          .flat()
          .map((ext) => String(ext).replace(/^\./, "").toUpperCase())
      );
      setFormats([...extensions]);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  /**
   * Queue a drop on the main dropzone. Loose files land in custom-documents;
   * a dropped folder becomes a folder of the same name.
   * @param {File[]} accepted
   * @param {Array<{file: File, errors: Array<{code: string}>}>} rejections
   */
  const enqueueDrop = useCallback((accepted = [], rejections = []) => {
    const grouped = groupDroppedFiles(accepted);
    const nextFiles = [
      ...grouped.looseFiles.map((file) => ({
        uid: v4(),
        file,
        status: "uploading",
      })),
      ...grouped.folders.flatMap(({ folderName, files: folderFiles }) =>
        folderFiles.map(({ file, relativePath }) => ({
          uid: v4(),
          file,
          folderName,
          relativePath,
          status: "uploading",
        }))
      ),
      ...rejections.map((rejection) => ({
        uid: v4(),
        file: rejection.file,
        rejected: true,
        reason: rejection.errors[0]?.code,
        status: "rejected",
      })),
    ];
    setFiles((prev) => [
      ...prev.filter((file) => file.status !== "rejected"),
      ...nextFiles,
    ]);
  }, []);

  /**
   * Queue a drop that was aimed at a specific folder row.
   * @param {File[]} accepted
   * @param {string} folderName
   * @returns {{queued: number, skipped: number}}
   */
  const enqueueIntoFolder = useCallback((accepted = [], folderName) => {
    const { files: targeted, skipped } = groupFilesIntoFolder(
      accepted,
      folderName
    );
    if (targeted.length > 0) {
      const nextFiles = targeted.map(({ file, relativePath }) => ({
        uid: v4(),
        file,
        folderName,
        relativePath,
        status: "uploading",
      }));
      setFiles((prev) => [
        ...prev.filter((file) => file.status !== "rejected"),
        ...nextFiles,
      ]);
    }
    return { queued: targeted.length, skipped };
  }, []);

  const updateFile = useCallback(
    (uid, patch) =>
      setFiles((prev) =>
        prev.map((file) => (file.uid === uid ? { ...file, ...patch } : file))
      ),
    []
  );

  const removeFile = useCallback(
    (uid) => setFiles((prev) => prev.filter((file) => file.uid !== uid)),
    []
  );

  // A fresh uid remounts the progress row, which starts the upload again.
  const retryFile = useCallback(
    (uid) =>
      setFiles((prev) =>
        prev.map((file) =>
          file.uid === uid
            ? { ...file, uid: v4(), status: "uploading", error: null }
            : file
        )
      ),
    []
  );

  const summary = useMemo(() => {
    const count = (status) =>
      files.filter((file) => file.status === status).length;
    return {
      total: files.length,
      uploading: count("uploading"),
      complete: count("complete"),
      failed: count("failed") + count("rejected"),
    };
  }, [files]);

  return {
    ready: processor === "online",
    processor,
    formats,
    files,
    summary,
    enqueueDrop,
    enqueueIntoFolder,
    updateFile,
    removeFile,
    retryFile,
  };
}
