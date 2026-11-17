import { useTranslation } from "react-i18next";
import GoogleAgentSkills from "@/models/googleAgentSkills";
import AppsScriptSkillPanel from "../IntegrationParts/AppsScriptSkillPanel";
import GoogleCalendarIcon from "./google-calendar.png";
import { getGoogleCalendarSkills } from "./utils";

export default function GoogleCalendarSkillPanel(props) {
  const { t } = useTranslation();
  return (
    <AppsScriptSkillPanel
      {...props}
      i18nPrefix="agent.skill.googleCalendar"
      logo={GoogleCalendarIcon}
      docsPath="/agent/usage/google-calendar-agent"
      disabledSkillsField="disabled_google_calendar_skills"
      configField="google_calendar_agent_config"
      getStatus={GoogleAgentSkills.calendar.getStatus}
      skillCategories={getGoogleCalendarSkills(t)}
    />
  );
}
