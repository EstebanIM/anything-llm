import { useId } from "react";
import Toggle from "@/components/lib/Toggle";
import { useTranslation, Trans } from "react-i18next";
import {
  TriangleAlert,
  File,
  Files,
  Pencil,
  Save,
  FolderPlus,
  FolderOpen,
  ArrowLeftRight,
  Search,
  Info,
  Copy,
} from "lucide-react";
import StatusNote from "@/components/lib/StatusNote";
import { ExternalLink } from "@/components/ProviderFields";
import paths from "@/utils/paths";
import PanelHeader, { panelIcon } from "../components/PanelHeader";
import {
  SubSkillRow,
  SubSkillsLoading,
  LoadError,
} from "../components/SubSkills";
import useDisabledSubSkills from "../components/useDisabledSubSkills";

export const getFileSystemSubSkills = (t) => {
  return [
    {
      name: "filesystem-read-text-file",
      title: t("agent.skill.filesystem.skills.read-text-file.title"),
      description: t(
        "agent.skill.filesystem.skills.read-text-file.description"
      ),
      icon: File,
      category: "read",
    },
    {
      name: "filesystem-read-multiple-files",
      title: t("agent.skill.filesystem.skills.read-multiple-files.title"),
      description: t(
        "agent.skill.filesystem.skills.read-multiple-files.description"
      ),
      icon: Files,
      category: "read",
    },
    {
      name: "filesystem-list-directory",
      title: t("agent.skill.filesystem.skills.list-directory.title"),
      description: t(
        "agent.skill.filesystem.skills.list-directory.description"
      ),
      icon: FolderOpen,
      category: "read",
    },
    {
      name: "filesystem-search-files",
      title: t("agent.skill.filesystem.skills.search-files.title"),
      description: t("agent.skill.filesystem.skills.search-files.description"),
      icon: Search,
      category: "read",
    },
    {
      name: "filesystem-get-file-info",
      title: t("agent.skill.filesystem.skills.get-file-info.title"),
      description: t("agent.skill.filesystem.skills.get-file-info.description"),
      icon: Info,
      category: "read",
    },
    {
      name: "filesystem-write-text-file",
      title: t("agent.skill.filesystem.skills.write-text-file.title"),
      description: t(
        "agent.skill.filesystem.skills.write-text-file.description"
      ),
      icon: Save,
      category: "write",
    },
    {
      name: "filesystem-edit-file",
      title: t("agent.skill.filesystem.skills.edit-file.title"),
      description: t("agent.skill.filesystem.skills.edit-file.description"),
      icon: Pencil,
      category: "write",
    },
    {
      name: "filesystem-create-directory",
      title: t("agent.skill.filesystem.skills.create-directory.title"),
      description: t(
        "agent.skill.filesystem.skills.create-directory.description"
      ),
      icon: FolderPlus,
      category: "write",
    },
    {
      name: "filesystem-copy-file",
      title: t("agent.skill.filesystem.skills.copy-file.title"),
      description: t("agent.skill.filesystem.skills.copy-file.description"),
      icon: Copy,
      category: "write",
    },
    {
      name: "filesystem-move-file",
      title: t("agent.skill.filesystem.skills.move-file.title"),
      description: t("agent.skill.filesystem.skills.move-file.description"),
      icon: ArrowLeftRight,
      category: "write",
    },
  ];
};

export default function FileSystemSkillPanel({
  title,
  skill,
  toggleSkill,
  enabled = false,
  disabled = false,
  image,
  icon,
  setHasChanges,
  hasChanges = false,
}) {
  const { t } = useTranslation();
  const titleId = useId();
  const configId = useId();
  const readId = useId();
  const writeId = useId();
  const {
    disabled: disabledSubSkills,
    setDisabled: setDisabledSubSkills,
    status,
    reload,
  } = useDisabledSubSkills("disabled_filesystem_skills", hasChanges);
  const FILESYSTEM_SUB_SKILLS = getFileSystemSubSkills(t);

  function toggleSubSkill(subSkillName) {
    setHasChanges(true);
    setDisabledSubSkills((prev) => {
      if (prev.includes(subSkillName)) {
        return prev.filter((s) => s !== subSkillName);
      }
      return [...prev, subSkillName];
    });
  }
  const readSkills = FILESYSTEM_SUB_SKILLS.filter((s) => s.category === "read");
  const writeSkills = FILESYSTEM_SUB_SKILLS.filter(
    (s) => s.category === "write"
  );

  const renderRows = (list, tone) =>
    list.map((subSkill) => (
      <SubSkillRow
        key={subSkill.name}
        title={subSkill.title}
        description={subSkill.description}
        icon={subSkill.icon}
        tone={tone}
        enabled={!disabledSubSkills.includes(subSkill.name)}
        onToggle={() => toggleSubSkill(subSkill.name)}
      />
    ));

  return (
    <div className="p-2">
      <div className="flex flex-col gap-y-[18px] max-w-[500px]">
        <PanelHeader titleId={titleId} title={title} icon={panelIcon(icon)}>
          <Toggle
            size="lg"
            enabled={enabled}
            disabled={disabled}
            ariaLabelledBy={titleId}
            onChange={() => toggleSkill(skill)}
          />
        </PanelHeader>

        {image && <img src={image} alt="" className="w-full rounded-md" />}
        <StatusNote tone="warning">
          <Trans
            i18nKey="agent.skill.filesystem.warning"
            components={{
              a: (
                <ExternalLink
                  href={paths.docs("/agent/usage/file-system-agent")}
                  className="underline"
                />
              ),
            }}
          />
        </StatusNote>
        <div className="flex flex-col gap-y-1">
          <p className="text-theme-text-secondary text-xs font-medium">
            {t("agent.skill.filesystem.description")}
          </p>
          <ExternalLink
            href={paths.docs("/agent/usage/file-system-agent")}
            className="w-fit inline-flex items-center min-h-[44px] md:min-h-0 text-xs font-medium underline text-sky-300 hover:text-sky-200 light:text-sky-800 light:hover:text-sky-900"
          >
            {t("agent.skill.filesystem.learnMore")}
          </ExternalLink>
        </div>

        {enabled && (
          <div className="flex flex-col mt-2 gap-y-4">
            <h3
              id={configId}
              className="text-theme-text-primary font-semibold text-sm"
            >
              {t("agent.skill.filesystem.configuration")}
            </h3>
            {status === "loading" && <SubSkillsLoading />}
            {status === "error" && (
              <LoadError
                message={t("agent-pages.subskills-load-error")}
                onRetry={reload}
              />
            )}
            {status === "ready" && (
              <>
                <input
                  name="system::disabled_filesystem_skills"
                  type="hidden"
                  value={disabledSubSkills.join(",")}
                />
                <div className="flex flex-col gap-y-2">
                  <h4
                    id={readId}
                    className="text-theme-text-secondary text-xs font-medium uppercase tracking-wide"
                  >
                    {t("agent.skill.filesystem.readActions")}
                  </h4>
                  <ul
                    aria-labelledby={readId}
                    className="flex flex-col gap-y-1"
                  >
                    {renderRows(readSkills, "default")}
                  </ul>
                </div>

                <div className="flex flex-col gap-y-2">
                  <h4
                    id={writeId}
                    className="text-theme-text-secondary text-xs font-medium uppercase tracking-wide flex items-center gap-x-1"
                  >
                    <TriangleAlert
                      strokeWidth={1.5}
                      size={12}
                      aria-hidden="true"
                      className="text-orange-400 light:text-orange-700"
                    />
                    {t("agent.skill.filesystem.writeActions")}
                  </h4>
                  <ul
                    aria-labelledby={writeId}
                    className="flex flex-col gap-y-1"
                  >
                    {renderRows(writeSkills, "write")}
                  </ul>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
