import { useId } from "react";
import Toggle from "@/components/lib/Toggle";
import PanelHeader, { panelIcon } from "../components/PanelHeader";

export default function GenericSkillPanel({
  title,
  description,
  skill,
  toggleSkill,
  enabled = false,
  disabled = false,
  image,
  icon,
}) {
  const titleId = useId();
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
        <p className="text-theme-text-secondary text-xs font-medium py-1.5">
          {description}
        </p>
      </div>
    </div>
  );
}
