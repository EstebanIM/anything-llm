import { useCallback, useEffect, useState } from "react";
import { useModal } from "@/hooks/useModal";
import Modal, { ModalHeader } from "@/components/lib/Modal";
import { SlidersHorizontal } from "lucide-react";
import { useTranslation } from "react-i18next";
import System from "@/models/system";
import MaxToolCallStack from "./MaxToolCallStack";
import AgentClarifyingQuestions from "./AgentClarifyingQuestions";
import AgentSkillReranker from "./AgentSkillReranker";
import { LoadError, SubSkillsLoading } from "../components/SubSkills";

export default function AgentSkillSettings() {
  const { t } = useTranslation();
  const { isOpen, openModal, closeModal } = useModal();
  return (
    <>
      <button
        type="button"
        onClick={openModal}
        aria-label={t("agent.settings.title")}
        title={t("agent.settings.title")}
        className="w-11 h-11 md:w-10 md:h-10 shrink-0 flex items-center justify-center rounded-lg border border-transparent light:border-slate-300 bg-transparent hover:bg-theme-bg-secondary light:hover:bg-slate-100 transition-colors duration-quick ease-smooth"
      >
        <SlidersHorizontal
          strokeWidth={1.5}
          size={24}
          aria-hidden="true"
          className="text-theme-text-secondary"
        />
      </button>
      <AgentSkillSettingsModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
}

function AgentSkillSettingsModal({ isOpen, closeModal }) {
  const { t } = useTranslation();
  if (!isOpen) return null;

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <ModalHeader title={t("agent.settings.title")} onClose={closeModal} />
      <SettingsBody />
    </Modal>
  );
}

/** Loads the current values once; each setting saves itself on change. */
function SettingsBody() {
  const { t } = useTranslation();
  const [keys, setKeys] = useState(null);
  const [status, setStatus] = useState("loading");

  const load = useCallback(async () => {
    setStatus("loading");
    const res = await System.keys();
    if (!res) return setStatus("error");
    setKeys(res);
    setStatus("ready");
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  if (status === "loading") return <SubSkillsLoading />;
  if (status === "error")
    return (
      <LoadError
        message={t("agent-pages.settings.load-error")}
        onRetry={load}
      />
    );

  return (
    <div className="flex flex-col gap-y-5 w-full">
      <MaxToolCallStack keys={keys} />
      <div className="border-b border-zinc-800 light:border-slate-200 h-[1px] w-full" />
      <AgentSkillReranker keys={keys} />
      <div className="border-b border-zinc-800 light:border-slate-200 h-[1px] w-full" />
      <AgentClarifyingQuestions keys={keys} />
    </div>
  );
}
