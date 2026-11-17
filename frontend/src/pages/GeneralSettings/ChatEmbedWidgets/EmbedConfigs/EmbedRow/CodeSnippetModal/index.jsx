import { useId } from "react";
import { useTranslation } from "react-i18next";
import hljs from "highlight.js";
import "@/utils/chat/themes/github-dark.css";
import "@/utils/chat/themes/github.css";
import {
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalSecondaryButton,
  ModalHint,
} from "@/components/lib/Modal";
import CopyButton from "@/components/lib/CopyButton";
import { useTheme } from "@/hooks/useTheme";

/**
 * Embed code of one widget, shown after creating it and from the "Code"
 * action of its row. Render it inside a <Modal size="lg">.
 */
export default function CodeSnippetModal({ embed, closeModal, isNew = false }) {
  const { t } = useTranslation();
  return (
    <>
      <ModalHeader
        title={t("embed-pages.code.title")}
        subtitle={isNew ? t("embed-pages.code.created") : null}
        onClose={closeModal}
      />
      <ModalBody>
        <ScriptTag embed={embed} />
      </ModalBody>
      <ModalFooter className="justify-end">
        <ModalSecondaryButton onClick={closeModal} type="button">
          {t("api.modal.close")}
        </ModalSecondaryButton>
      </ModalFooter>
    </>
  );
}

// Only the comment is translated: the script URL and attributes must stay as they are.
function createScriptTagSnippet(embed, scriptHost, serverHost, comment) {
  return `<!--
${comment}
-->
<script
  data-embed-id="${embed.uuid}"
  data-base-api-url="${serverHost}/api/embed"
  src="${scriptHost}/embed/anythingllm-chat-widget.min.js">
</script>
`;
}

function ScriptTag({ embed }) {
  const { t } = useTranslation();
  const { isLight } = useTheme();
  const labelId = useId();
  const hintId = useId();
  const scriptHost = import.meta.env.DEV
    ? "http://localhost:3000"
    : window.location.origin;
  const serverHost = import.meta.env.DEV
    ? "http://localhost:3001"
    : window.location.origin;
  const snippet = createScriptTagSnippet(
    embed,
    scriptHost,
    serverHost,
    t("embed-pages.code.comment")
  );

  return (
    <div className="flex flex-col gap-y-3">
      <div className="flex flex-col gap-y-1">
        <p
          id={labelId}
          className="text-sm font-medium text-zinc-50 light:text-slate-700"
        >
          {t("embed-pages.code.label")}
        </p>
        <ModalHint id={hintId}>{t("embed-pages.code.hint")}</ModalHint>
      </div>
      {/* The scrolling <pre> takes focus so the code can be read and scrolled
          with the keyboard; the region role lets it carry a name. */}
      <pre
        tabIndex={0}
        role="region"
        aria-labelledby={labelId}
        aria-describedby={hintId}
        className={`hljs ${isLight ? "github" : "github-dark"} m-0 p-3 rounded-lg border border-zinc-600 light:border-slate-500 text-sm leading-relaxed font-mono whitespace-pre overflow-x-auto`}
      >
        <code
          dangerouslySetInnerHTML={{
            __html: hljs.highlight(snippet, {
              language: "html",
              ignoreIllegals: true,
            }).value,
          }}
        />
      </pre>
      <CopyButton
        text={snippet}
        label={t("embed-pages.code.copy")}
        showLabel
        className="self-start border border-zinc-500 light:border-slate-500"
      />
    </div>
  );
}
