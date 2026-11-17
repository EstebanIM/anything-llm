import {
  LoaderCircle,
  FileCode,
  FileSpreadsheet,
  FileType,
  FileCode2,
  FileText,
  FileImage,
  OctagonAlert,
  X,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { REMOVE_ATTACHMENT_EVENT } from "../../DnDWrapper";
import { openImageLightbox } from "@/components/ImageLightbox";

/**
 * @param {{attachments: import("../../DnDWrapper").Attachment[]}}
 * @returns
 */
export default function AttachmentManager({ attachments }) {
  if (attachments.length === 0) return null;

  function handleImageClick(attachment) {
    const images = attachments.filter(
      (a) => a.type === "attachment" && a.contentString
    );
    // Images can share a file name, so find the clicked attachment itself.
    const idx = images.indexOf(attachment);
    if (idx === -1) return;
    openImageLightbox(
      images.map((a) => ({
        contentString: a.contentString,
        name: a.file.name,
      })),
      idx
    );
  }

  return (
    <div className="flex flex-wrap gap-2 mt-2 mb-4">
      {attachments.map((attachment) => (
        <AttachmentItem
          key={attachment.uid}
          attachment={attachment}
          onImageClick={() => handleImageClick(attachment)}
        />
      ))}
    </div>
  );
}

/**
 * Remove control for an attachment. It stays in the Tab order (opacity, not
 * visibility), shows on hover or keyboard focus, is always visible on touch
 * screens and gets a 44px hit area on small screens.
 */
function RemoveAttachmentButton({ fileName, onClick }) {
  const { t } = useTranslation();
  return (
    <button
      onClick={onClick}
      type="button"
      aria-label={t("chat-input.attach-remove", { name: fileName })}
      className="absolute -top-2 -right-2 z-[10] w-5 h-5 rounded-full flex items-center justify-center bg-white text-zinc-900 border border-theme-attachment-bg hover:bg-error hover:text-white hover:border-transparent transition-[opacity,color,background-color] duration-quick opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 focus-visible:opacity-100 [@media(hover:none)]:opacity-100 before:absolute before:-inset-3 before:content-[''] md:before:hidden"
    >
      <X
        strokeWidth={1.5}
        size={14}
        aria-hidden="true"
        className="flex-shrink-0"
      />
    </button>
  );
}

/**
 * @param {{attachment: import("../../DnDWrapper").Attachment}}
 */
function AttachmentItem({ attachment, onImageClick }) {
  const { t } = useTranslation();
  const { uid, file, status, error, document, type, contentString } =
    attachment;
  const { iconBgColor, Icon } = displayFromFile(file);

  function removeFileFromQueue() {
    window.dispatchEvent(
      new CustomEvent(REMOVE_ATTACHMENT_EVENT, { detail: { uid, document } })
    );
  }

  if (status === "in_progress") {
    return (
      <div className="relative flex items-center gap-x-1 rounded-lg bg-theme-attachment-bg border-none w-[180px] group">
        <div
          className={`bg-theme-attachment-icon-spinner-bg rounded-md flex items-center justify-center flex-shrink-0 h-[32px] w-[32px] m-1`}
        >
          <LoaderCircle
            strokeWidth={1.5}
            size={18}
            aria-hidden="true"
            className="text-theme-attachment-icon-spinner animate-spin"
          />
        </div>
        <div className="flex flex-col w-[125px]">
          <p className="text-theme-attachment-text text-xs font-semibold truncate">
            {file.name}
          </p>
          <p className="text-theme-attachment-text-secondary text-[10px] leading-[14px] font-medium">
            {t("chat-input.attach-uploading")}
          </p>
        </div>
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div
        data-tooltip-id="attachment-status-tooltip"
        data-tooltip-content={error}
        className={`relative flex items-center gap-x-1 rounded-lg bg-theme-attachment-error-bg border-none w-[180px] group`}
      >
        <RemoveAttachmentButton
          fileName={file.name}
          onClick={removeFileFromQueue}
        />
        <div
          className={`bg-error rounded-md flex items-center justify-center flex-shrink-0 h-[32px] w-[32px] m-1`}
        >
          <OctagonAlert
            strokeWidth={1.5}
            size={24}
            aria-hidden="true"
            className="text-theme-attachment-icon"
          />
        </div>
        <div className="flex flex-col w-[125px]">
          <p className="text-theme-attachment-text text-xs font-semibold truncate">
            {file.name}
          </p>
          <p className="text-theme-attachment-text-secondary text-[10px] leading-[14px] font-medium truncate">
            {error ?? t("chat-input.attach-failed")}
          </p>
        </div>
      </div>
    );
  }

  if (type === "attachment") {
    if (contentString) {
      return (
        <div
          data-tooltip-id="attachment-status-tooltip"
          data-tooltip-content={t("chat-input.attach-tooltip-attached", {
            name: file.name,
          })}
          className={`relative flex items-center gap-x-1 rounded-lg border-none group`}
        >
          <RemoveAttachmentButton
            fileName={file.name}
            onClick={removeFileFromQueue}
          />
          <button
            type="button"
            onClick={onImageClick}
            className="p-0 border-none bg-transparent cursor-pointer rounded-lg"
          >
            <img
              alt={t("chat-input.attach-preview", { name: file.name })}
              src={contentString}
              style={{ objectFit: "cover", objectPosition: "center" }}
              className={`${iconBgColor} w-[40px] h-[40px] rounded-lg flex items-center justify-center`}
            />
          </button>
        </div>
      );
    }

    return (
      <div
        data-tooltip-id="attachment-status-tooltip"
        data-tooltip-content={t("chat-input.attach-tooltip-attached", {
          name: file.name,
        })}
        className={`relative flex items-center gap-x-1 rounded-lg bg-theme-attachment-success-bg border-none w-[180px] group`}
      >
        <RemoveAttachmentButton
          fileName={file.name}
          onClick={removeFileFromQueue}
        />
        <div
          className={`${iconBgColor} rounded-md flex items-center justify-center flex-shrink-0 h-[32px] w-[32px] m-1`}
        >
          <Icon
            size={24}
            strokeWidth={1.5}
            aria-hidden="true"
            className="text-theme-attachment-icon"
          />
        </div>
        <div className="flex flex-col w-[125px]">
          <p className="text-theme-attachment-text text-xs font-semibold truncate">
            {file.name}
          </p>
          <p className="text-theme-attachment-text-secondary text-[10px] leading-[14px] font-medium">
            {t("chat-input.attach-image-attached")}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      data-tooltip-id="attachment-status-tooltip"
      data-tooltip-content={
        status === "embedded"
          ? t("chat-input.attach-tooltip-embedded", { name: file.name })
          : t("chat-input.attach-tooltip-context", { name: file.name })
      }
      className={`relative flex items-center gap-x-1 rounded-lg bg-theme-attachment-bg border-none w-[180px] group`}
    >
      <RemoveAttachmentButton
        fileName={file.name}
        onClick={removeFileFromQueue}
      />
      <div
        className={`${iconBgColor} rounded-md flex items-center justify-center flex-shrink-0 h-[32px] w-[32px] m-1`}
      >
        <Icon
          strokeWidth={1.5}
          size={24}
          aria-hidden="true"
          className="text-theme-attachment-icon"
        />
      </div>
      <div className="flex flex-col w-[125px]">
        <p className="text-theme-attachment-text text-xs font-semibold truncate">
          {file.name}
        </p>
        <p className="text-theme-attachment-text-secondary text-[10px] leading-[14px] font-medium">
          {status === "embedded"
            ? t("chat-input.attach-embedded")
            : t("chat-input.attach-context")}
        </p>
      </div>
    </div>
  );
}

/**
 * @param {File} file
 * @returns {{iconBgColor:string, Icon: React.Component}}
 */
function displayFromFile(file) {
  const extension = file?.name?.split(".")?.pop()?.toLowerCase() ?? "txt";
  switch (extension) {
    case "pdf":
      return { iconBgColor: "bg-magenta", Icon: FileText };
    case "doc":
    case "docx":
      return { iconBgColor: "bg-royalblue", Icon: FileType };
    case "html":
      return { iconBgColor: "bg-purple", Icon: FileCode2 };
    case "csv":
    case "xlsx":
      return { iconBgColor: "bg-success", Icon: FileSpreadsheet };
    case "json":
    case "sql":
    case "js":
    case "jsx":
    case "cpp":
    case "c":
      return { iconBgColor: "bg-warn", Icon: FileCode };
    case "png":
    case "jpg":
    case "jpeg":
      return { iconBgColor: "bg-royalblue", Icon: FileImage };
    default:
      return { iconBgColor: "bg-royalblue", Icon: FileText };
  }
}
