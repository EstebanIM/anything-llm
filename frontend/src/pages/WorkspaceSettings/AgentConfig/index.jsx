import System from "@/models/system";
import Workspace from "@/models/workspace";
import showToast from "@/utils/toast";
import { castToType } from "@/utils/types";
import { useEffect, useId, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import AutosaveForm from "@/components/AutosaveForm";
import AgentLLMSelection from "./AgentLLMSelection";
import Admin from "@/models/admin";
import * as Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import paths from "@/utils/paths";
import useUser from "@/hooks/useUser";
import { HELP_TEXT, SECTION_HEADING } from "../components/SettingsField";

export default function WorkspaceAgentConfiguration({ workspace }) {
  const { t } = useTranslation();
  const { user } = useUser();
  const skillsHeadingId = useId();
  const skillsHelpId = useId();
  const [settings, setSettings] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSettings() {
      const _settings = await System.keys();
      setSettings(_settings ?? {});
      setLoading(false);
    }
    fetchSettings();
  }, []);

  const handleUpdate = async (formEl) => {
    const data = {
      workspace: {},
      system: {},
      env: {},
    };

    const form = new FormData(formEl);
    for (var [key, value] of form.entries()) {
      if (key.startsWith("system::")) {
        const [_, label] = key.split("system::");
        data.system[label] = String(value);
        continue;
      }

      if (key.startsWith("env::")) {
        const [_, label] = key.split("env::");
        data.env[label] = String(value);
        continue;
      }

      data.workspace[key] = castToType(key, value);
    }

    const { workspace: updatedWorkspace, message } = await Workspace.update(
      workspace.slug,
      data.workspace
    );
    await Admin.updateSystemPreferences(data.system);
    await System.updateSystem(data.env);

    if (!updatedWorkspace)
      showToast(t("provider-pages.toast.failed", { error: message }), "error", {
        clear: true,
      });
    return !!updatedWorkspace;
  };

  if (!workspace || loading) return <LoadingSkeleton />;
  return (
    <AutosaveForm
      onSave={handleUpdate}
      className="w-full xl:w-1/2 flex flex-col gap-y-8"
    >
      <AgentLLMSelection settings={settings} workspace={workspace} />
      {(!user || ["admin", "superadmin"].includes(user?.role)) && (
        <section
          aria-labelledby={skillsHeadingId}
          className="flex flex-col gap-y-2"
        >
          <h2 id={skillsHeadingId} className={SECTION_HEADING}>
            {t("settings.agent-skills")}
          </h2>
          <p id={skillsHelpId} className={HELP_TEXT}>
            {t("workspace-settings.agent.skills-description")}
          </p>
          <Link
            to={paths.settings.agentSkills()}
            aria-describedby={skillsHelpId}
            className="w-fit mt-2 inline-flex items-center min-h-[44px] md:min-h-[38px] px-5 rounded-lg border border-zinc-500 light:border-slate-500 text-sm text-white hover:bg-zinc-800 light:hover:bg-slate-100 transition-colors duration-quick ease-smooth"
          >
            {t("workspace-settings.agent.configure-skills")}
          </Link>
        </section>
      )}
    </AutosaveForm>
  );
}

function LoadingSkeleton() {
  const { t } = useTranslation();
  return (
    <div role="status" className="w-full xl:w-1/2 flex flex-col gap-y-6">
      <span className="sr-only">{t("common.loading")}</span>
      <Skeleton.default
        height={100}
        width="100%"
        count={2}
        highlightColor="var(--theme-bg-primary)"
        baseColor="var(--theme-bg-secondary)"
        enableAnimation={true}
        containerClassName="flex flex-col gap-y-1"
      />
      <div className="bg-white/10 h-[1px] w-full" />
      <Skeleton.default
        height={100}
        width="100%"
        count={2}
        highlightColor="var(--theme-bg-primary)"
        baseColor="var(--theme-bg-secondary)"
        enableAnimation={true}
        containerClassName="flex flex-col gap-y-1 mt-4"
      />
    </div>
  );
}
