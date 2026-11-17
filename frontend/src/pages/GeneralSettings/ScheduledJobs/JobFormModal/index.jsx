import { useState, useEffect, useId } from "react";
import ScheduledJobs from "@/models/scheduledJobs";
import showToast from "@/utils/toast";
import { safeJsonParse } from "@/utils/request";
import { useTranslation } from "react-i18next";
import { ModalHeader, ModalBody } from "@/components/lib/Modal";
import JobDescription from "./JobDescription";
import JobSchedule from "./JobSchedule";
import ToolsSelector from "./ToolsSelector";
import FormActions from "./FormActions";
import {
  defaultSchedule,
  isValidCron,
  parseCronToBuilderState,
} from "../utils/cron";
import { translateJobError } from "../utils/format";

function setDefaultFormState(job) {
  const schedule = job?.schedule || defaultSchedule();
  return {
    name: job?.name || "",
    prompt: job?.prompt || "",
    schedule,
    // A stored expression the builder cannot show opens as written.
    scheduleMode: parseCronToBuilderState(schedule).wasFallback
      ? "custom"
      : "builder",
    selectedTools: job?.tools ? safeJsonParse(job.tools, []) : [],
  };
}

const NO_ERRORS = { name: null, prompt: null, schedule: null };

export default function JobFormModal({ job = null, onClose, onSaved }) {
  const { t } = useTranslation();
  const isEditing = !!job;
  const [form, setForm] = useState(() => setDefaultFormState(job));
  // null while loading, [] when the list could not be loaded
  const [availableTools, setAvailableTools] = useState(null);
  const [saving, setSaving] = useState(false);
  const [errors, setErrors] = useState(NO_ERRORS);
  const [submitError, setSubmitError] = useState(null);
  const [focusField, setFocusField] = useState(null);
  const ids = {
    name: useId(),
    prompt: useId(),
    schedule: useId(),
  };

  const loadTools = () => {
    setAvailableTools(null);
    ScheduledJobs.availableTools().then(({ tools }) => {
      setAvailableTools(Array.isArray(tools) ? tools : []);
    });
  };

  useEffect(() => {
    loadTools();
  }, []);

  // Move focus once the field (and its error) is on screen: the cron input
  // only exists after switching to the custom mode.
  useEffect(() => {
    if (!focusField) return;
    document.getElementById(ids[focusField])?.focus();
    setFocusField(null);
  }, [focusField]);

  const clearError = (field) => {
    setErrors((prev) => (prev[field] ? { ...prev, [field]: null } : prev));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    clearError(name);
  };

  const handleScheduleChange = (cron) => {
    setForm((prev) => ({ ...prev, schedule: cron }));
    clearError("schedule");
  };

  const handleModeChange = (mode) => {
    setForm((prev) => ({ ...prev, scheduleMode: mode }));
  };

  const setSelectedTools = (selectedTools) => {
    setForm((prev) => ({ ...prev, selectedTools }));
  };

  const showScheduleError = (message) => {
    setForm((prev) => ({ ...prev, scheduleMode: "custom" }));
    setErrors((prev) => ({ ...prev, schedule: message }));
    setFocusField("schedule");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (saving) return;
    setSubmitError(null);
    const schedule = form.schedule.trim();
    const nextErrors = {
      name: form.name.trim() ? null : t("scheduledJobs.modal.nameRequired"),
      prompt: form.prompt.trim()
        ? null
        : t("scheduledJobs.modal.promptRequired"),
      schedule: !schedule
        ? t("scheduledJobs.modal.cronRequired")
        : isValidCron(schedule)
          ? null
          : t("scheduledJobs.modal.cronInvalid"),
    };
    const firstInvalid = ["name", "prompt", "schedule"].find(
      (field) => nextErrors[field]
    );
    if (firstInvalid) {
      setErrors(nextErrors);
      // An invalid expression can only be fixed as text.
      if (nextErrors.schedule)
        setForm((prev) => ({ ...prev, scheduleMode: "custom" }));
      setFocusField(firstInvalid);
      return;
    }

    setSaving(true);
    const data = {
      name: form.name.trim(),
      prompt: form.prompt.trim(),
      schedule,
      tools: form.selectedTools,
    };

    const result = isEditing
      ? await ScheduledJobs.update(job.id, data)
      : await ScheduledJobs.create(data);

    setSaving(false);

    if (result?.error || !result?.job) {
      if (result?.error === "Invalid cron expression") {
        showScheduleError(t("scheduledJobs.modal.cronInvalid"));
        return;
      }
      setSubmitError(
        translateJobError(
          t,
          result?.error,
          "scheduledJobs.modal.saveFailedGeneric"
        )
      );
      return;
    }

    showToast(
      isEditing
        ? t("scheduledJobs.modal.jobUpdated")
        : t("scheduledJobs.modal.jobCreated"),
      "success"
    );
    onSaved(result.job);
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-y-5">
      <ModalHeader
        title={
          isEditing
            ? t("scheduledJobs.modal.titleEdit")
            : t("scheduledJobs.modal.titleNew")
        }
        onClose={onClose}
      />
      <ModalBody>
        <JobDescription
          form={form}
          errors={errors}
          ids={ids}
          onChange={handleChange}
        />

        <JobSchedule
          schedule={form.schedule}
          scheduleMode={form.scheduleMode}
          error={errors.schedule}
          cronInputId={ids.schedule}
          onScheduleChange={handleScheduleChange}
          onModeChange={handleModeChange}
        />

        <ToolsSelector
          availableTools={availableTools}
          selectedTools={form.selectedTools}
          onChange={setSelectedTools}
          onRetry={loadTools}
        />
      </ModalBody>

      {submitError && (
        <p role="alert" className="text-sm text-red-400 light:text-red-700">
          {submitError}
        </p>
      )}
      <FormActions isEditing={isEditing} saving={saving} onClose={onClose} />
    </form>
  );
}
