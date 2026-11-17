import { useTranslation } from "react-i18next";
import GoogleAgentSkills from "@/models/googleAgentSkills";
import AppsScriptSkillPanel from "../IntegrationParts/AppsScriptSkillPanel";
import GMailIcon from "./gmail.png";
import { getGmailSkills } from "./utils";

export default function GMailSkillPanel(props) {
  const { t } = useTranslation();
  return (
    <AppsScriptSkillPanel
      {...props}
      i18nPrefix="agent.skill.gmail"
      logo={GMailIcon}
      docsPath="/agent/usage/gmail-agent"
      disabledSkillsField="disabled_gmail_skills"
      configField="gmail_agent_config"
      getStatus={GoogleAgentSkills.gmail.getStatus}
      skillCategories={getGmailSkills(t)}
    />
  );
}
