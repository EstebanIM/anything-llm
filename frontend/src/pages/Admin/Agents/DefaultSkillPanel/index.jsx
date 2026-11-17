import { useId } from "react";
import { DefaultBadge } from "../Badges/default";
import Toggle from "@/components/lib/Toggle";
import PanelHeader, { panelIcon } from "../components/PanelHeader";

export default function DefaultSkillPanel({
  title,
  description,
  image,
  icon,
  enabled = true,
  toggleSkill,
  skill,
}) {
  const titleId = useId();
  return (
    <div className="p-2">
      <div className="flex flex-col gap-y-[18px] max-w-[500px]">
        <PanelHeader
          titleId={titleId}
          title={title}
          icon={panelIcon(icon)}
          badge={<DefaultBadge title={title} />}
        >
          <Toggle
            size="lg"
            enabled={enabled}
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
