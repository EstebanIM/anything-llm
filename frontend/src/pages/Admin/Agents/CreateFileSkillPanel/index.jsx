import { useId } from "react";
import Toggle from "@/components/lib/Toggle";
import { useTranslation } from "react-i18next";
import {
  Presentation,
  FileSpreadsheet,
  FileType,
  FileText as FileTextIcon,
} from "lucide-react";
import PanelHeader, { panelIcon } from "../components/PanelHeader";
import {
  SubSkillRow,
  SubSkillsLoading,
  LoadError,
} from "../components/SubSkills";
import useDisabledSubSkills from "../components/useDisabledSubSkills";

export const getCreateFileSkills = (t) => [
  {
    name: "create-text-file",
    title: t("agent.skill.createFiles.skills.create-text-file.title"),
    description: t(
      "agent.skill.createFiles.skills.create-text-file.description"
    ),
    icon: FileTextIcon,
  },
  {
    name: "create-pptx-presentation",
    title: t("agent.skill.createFiles.skills.create-pptx.title"),
    description: t("agent.skill.createFiles.skills.create-pptx.description"),
    icon: Presentation,
  },
  {
    name: "create-pdf-file",
    title: t("agent.skill.createFiles.skills.create-pdf.title"),
    description: t("agent.skill.createFiles.skills.create-pdf.description"),
    icon: FileTextIcon,
  },
  {
    name: "create-excel-file",
    title: t("agent.skill.createFiles.skills.create-xlsx.title"),
    description: t("agent.skill.createFiles.skills.create-xlsx.description"),
    icon: FileSpreadsheet,
  },
  {
    name: "create-docx-file",
    title: t("agent.skill.createFiles.skills.create-docx.title"),
    description: t("agent.skill.createFiles.skills.create-docx.description"),
    icon: FileType,
  },
];

export default function CreateFileSkillPanel({
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
  const listId = useId();
  const {
    disabled: disabledSkills,
    setDisabled: setDisabledSkills,
    status,
    reload,
  } = useDisabledSubSkills("disabled_create_files_skills", hasChanges);
  const skills = getCreateFileSkills(t);

  function toggleFileSkill(skillName) {
    setHasChanges(true);
    setDisabledSkills((prev) =>
      prev.includes(skillName)
        ? prev.filter((s) => s !== skillName)
        : [...prev, skillName]
    );
  }

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
        <p className="text-theme-text-secondary text-xs font-medium">
          {t("agent.skill.createFiles.description")}
        </p>

        {enabled && (
          <div className="flex flex-col mt-2 gap-y-2">
            <h3
              id={listId}
              className="text-theme-text-primary font-semibold text-sm"
            >
              {t("agent.skill.createFiles.configuration")}
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
                  name="system::disabled_create_files_skills"
                  type="hidden"
                  value={disabledSkills.join(",")}
                />
                <ul aria-labelledby={listId} className="flex flex-col gap-y-2">
                  {skills.map((fileSkill) => (
                    <SubSkillRow
                      key={fileSkill.name}
                      title={fileSkill.title}
                      description={fileSkill.description}
                      icon={fileSkill.icon}
                      enabled={!disabledSkills.includes(fileSkill.name)}
                      onToggle={() => toggleFileSkill(fileSkill.name)}
                    />
                  ))}
                </ul>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
