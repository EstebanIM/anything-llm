import { useCallback, useEffect, useId, useRef, useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import Admin from "@/models/admin";
import System from "@/models/system";
import StatusNote from "@/components/lib/StatusNote";
import {
  ExternalLink,
  FIELD_HELP,
  FIELD_INPUT,
  FIELD_LABEL,
  SecretInput,
} from "@/components/ProviderFields";
import paths from "@/utils/paths";
import {
  IntegrationConfigCard,
  LINK_CLASS,
  PANEL_TEXT,
  PanelHeader,
  PanelLoadError,
  PanelLoading,
} from "./PanelParts";
import SkillToggleList from "./SkillToggleList";

/**
 * Shared panel for the Google Apps Script integrations (Gmail, Google
 * Calendar): main switch, deployment ID + API key saved with the page through
 * a hidden JSON field, and the sub-skill switches.
 *
 * @param {object} props
 * @param {string} props.i18nPrefix - eg: "agent.skill.gmail"
 * @param {string} props.logo
 * @param {string} props.docsPath
 * @param {string} props.disabledSkillsField - system setting with the disabled sub-skills
 * @param {string} props.configField - system setting with the JSON config
 * @param {() => Promise<object>} props.getStatus
 * @param {object} props.skillCategories
 */
export default function AppsScriptSkillPanel({
  title,
  skill,
  toggleSkill,
  enabled = false,
  disabled = false,
  setHasChanges,
  hasChanges = false,
  i18nPrefix,
  logo,
  docsPath,
  disabledSkillsField,
  configField,
  getStatus,
  skillCategories,
}) {
  const { t } = useTranslation();
  const headingId = useId();
  const warningId = useId();
  const [disabledSkills, setDisabledSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const [deploymentId, setDeploymentId] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [serverConfigured, setServerConfigured] = useState(false);
  const [isMultiUserMode, setIsMultiUserMode] = useState(false);
  const prevHasChanges = useRef(hasChanges);

  const load = useCallback(
    async ({ quiet = false } = {}) => {
      if (!quiet) {
        setLoading(true);
        setLoadError(false);
      }
      const [prefsRes, settingsRes, statusRes] = await Promise.all([
        Admin.systemPreferencesByFields([disabledSkillsField]),
        System.keys(),
        getStatus(),
      ]);
      const multiUser = settingsRes?.MultiUserMode ?? false;
      setIsMultiUserMode(multiUser);

      if (!multiUser && (!prefsRes?.settings || !statusRes?.success)) {
        if (!quiet) {
          setLoadError(true);
          setLoading(false);
        }
        return;
      }
      setDisabledSkills(prefsRes?.settings?.[disabledSkillsField] ?? []);
      setDeploymentId(statusRes?.config?.deploymentId || "");
      setApiKey(statusRes?.config?.apiKey || "");
      setServerConfigured(!!statusRes?.isConfigured);
      setLoading(false);
    },
    [disabledSkillsField, getStatus]
  );

  useEffect(() => {
    load();
  }, [load]);

  // The page saved or discarded its changes: reload what the server has.
  useEffect(() => {
    if (prevHasChanges.current === true && hasChanges === false)
      load({ quiet: true });
    prevHasChanges.current = hasChanges;
  }, [hasChanges]);

  function toggleSubSkill(skillName) {
    setHasChanges(true);
    setDisabledSkills((prev) =>
      prev.includes(skillName)
        ? prev.filter((s) => s !== skillName)
        : [...prev, skillName]
    );
  }

  const ready = !loading && !loadError;

  return (
    <div className="p-2">
      <div className="flex flex-col gap-y-[18px] max-w-[500px]">
        <PanelHeader
          headingId={headingId}
          title={title}
          icon={<img src={logo} alt="" className="w-6 h-6 shrink-0" />}
          enabled={enabled}
          disabled={disabled || isMultiUserMode}
          onToggle={() => toggleSkill(skill)}
          describedBy={isMultiUserMode ? warningId : undefined}
        />

        {isMultiUserMode && (
          <StatusNote tone="warning" id={warningId}>
            {t(`${i18nPrefix}.multiUserWarning`)}
          </StatusNote>
        )}

        <p className={PANEL_TEXT}>
          <Trans
            i18nKey={`${i18nPrefix}.description`}
            components={{
              a: (
                <ExternalLink
                  href={paths.docs(docsPath)}
                  className={LINK_CLASS}
                />
              ),
            }}
          />
        </p>

        {enabled && !isMultiUserMode && (
          <>
            {loading && <PanelLoading />}
            {!loading && loadError && (
              <PanelLoadError
                message={t("agent-integrations.load-error", { name: title })}
                onRetry={() => load()}
              />
            )}
            {ready && (
              <>
                <HiddenFormInputs
                  disabledSkillsField={disabledSkillsField}
                  configField={configField}
                  disabledSkills={disabledSkills}
                  deploymentId={deploymentId}
                  apiKey={apiKey}
                />
                <IntegrationConfigCard
                  title={t(`${i18nPrefix}.configuration`)}
                  configuredLabel={
                    serverConfigured ? t(`${i18nPrefix}.configured`) : null
                  }
                  defaultExpanded={!serverConfigured}
                >
                  <CredentialFields
                    i18nPrefix={i18nPrefix}
                    deploymentId={deploymentId}
                    apiKey={apiKey}
                    onDeploymentIdChange={(value) => {
                      setDeploymentId(value);
                      setHasChanges(true);
                    }}
                    onApiKeyChange={(value) => {
                      setApiKey(value);
                      setHasChanges(true);
                    }}
                  />
                  {!serverConfigured && (
                    <StatusNote tone="warning">
                      {t(`${i18nPrefix}.configurationRequired`)}
                    </StatusNote>
                  )}
                </IntegrationConfigCard>

                {serverConfigured && (
                  <SkillToggleList
                    categories={skillCategories}
                    disabledSkills={disabledSkills}
                    onToggle={toggleSubSkill}
                  />
                )}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

function CredentialFields({
  i18nPrefix,
  deploymentId,
  apiKey,
  onDeploymentIdChange,
  onApiKeyChange,
}) {
  const { t } = useTranslation();
  const id = useId();
  const deploymentFieldId = `${id}-deployment`;
  const keyFieldId = `${id}-key`;

  return (
    <>
      <div className="flex flex-col">
        <label htmlFor={deploymentFieldId} className={FIELD_LABEL}>
          {t(`${i18nPrefix}.deploymentId`)}
        </label>
        <input
          id={deploymentFieldId}
          type="text"
          value={deploymentId}
          onChange={(e) => onDeploymentIdChange(e.target.value)}
          placeholder="AKfycb..."
          autoComplete="off"
          spellCheck={false}
          aria-describedby={`${deploymentFieldId}-help`}
          className={FIELD_INPUT}
        />
        <p id={`${deploymentFieldId}-help`} className={FIELD_HELP}>
          {t(`${i18nPrefix}.deploymentIdHelp`)}
        </p>
      </div>
      <div className="flex flex-col">
        <label htmlFor={keyFieldId} className={FIELD_LABEL}>
          {t(`${i18nPrefix}.apiKey`)}
        </label>
        <SecretInput
          id={keyFieldId}
          value={apiKey}
          onChange={(e) => onApiKeyChange(e.target.value)}
          aria-describedby={`${keyFieldId}-help`}
        />
        <p id={`${keyFieldId}-help`} className={FIELD_HELP}>
          {t(`${i18nPrefix}.apiKeyHelp`)}
        </p>
      </div>
    </>
  );
}

function HiddenFormInputs({
  disabledSkillsField,
  configField,
  disabledSkills,
  deploymentId,
  apiKey,
}) {
  return (
    <>
      <input
        name={`system::${disabledSkillsField}`}
        type="hidden"
        value={disabledSkills.join(",")}
      />
      <input
        name={`system::${configField}`}
        type="hidden"
        value={JSON.stringify({
          deploymentId: deploymentId || "",
          apiKey: apiKey || "",
        })}
      />
    </>
  );
}
