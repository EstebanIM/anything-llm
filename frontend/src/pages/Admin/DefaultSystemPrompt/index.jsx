import SettingsSidebar from "@/components/SettingsSidebar";
import { useEffect, useId, useRef, useState, Fragment } from "react";
import { Trans, useTranslation } from "react-i18next";
import System from "@/models/system";
import showToast from "@/utils/toast";
import { serverErrorMessage } from "@/utils/serverErrors";
import * as Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SystemPromptVariable from "@/models/systemPromptVariable";
import { Link } from "react-router-dom";
import paths from "@/utils/paths";
import CTAButton from "@/components/lib/CTAButton";
import ConfirmModal from "@/components/lib/ConfirmModal";

const LINK =
  "text-sky-400 light:text-sky-700 underline hover:text-sky-300 light:hover:text-sky-800";

const SECONDARY_BUTTON =
  "min-h-[44px] md:min-h-0 md:h-[34px] px-4 rounded-lg border border-zinc-500 light:border-slate-500 text-xs font-semibold text-white light:text-slate-900 hover:bg-white/10 light:hover:bg-slate-100 aria-disabled:opacity-50 aria-disabled:cursor-not-allowed transition-colors duration-quick ease-smooth";

export default function DefaultSystemPrompt() {
  const { t } = useTranslation();
  const textareaId = useId();
  const helpId = useId();
  const variablesId = useId();
  const textareaRef = useRef(null);
  const [form, setForm] = useState({
    value: "",
    saved: "",
    loading: true,
    loadError: false,
    saving: false,
  });
  const [saneDefault, setSaneDefault] = useState("");
  const [variables, setVariables] = useState([]);
  const [confirmReset, setConfirmReset] = useState(false);
  const [resetting, setResetting] = useState(false);

  useEffect(() => {
    SystemPromptVariable.getAll().then(({ variables }) =>
      setVariables(Array.isArray(variables) ? variables : [])
    );
  }, []);

  const loadPrompt = async () => {
    setForm((prev) => ({ ...prev, loading: true, loadError: false }));
    const { defaultSystemPrompt, saneDefaultSystemPrompt } =
      await System.fetchDefaultSystemPrompt();
    // The model resolves to empty values when the request fails.
    if (!saneDefaultSystemPrompt) {
      setForm((prev) => ({ ...prev, loading: false, loadError: true }));
      return;
    }
    setSaneDefault(saneDefaultSystemPrompt);
    const current = defaultSystemPrompt || saneDefaultSystemPrompt;
    setForm((prev) => ({
      ...prev,
      value: current,
      saved: current,
      loading: false,
    }));
  };

  useEffect(() => {
    loadPrompt();
  }, []);

  const isDirty = form.value !== form.saved;
  const isDefault = form.value === saneDefault && form.saved === saneDefault;

  // The save button turns disabled once the change is stored: keep keyboard
  // users in the editor instead of dropping focus to <body>.
  const refocusEditor = () => setTimeout(() => textareaRef.current?.focus(), 0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.saving || !isDirty) return;
    const next = form.value.trim();
    setForm((prev) => ({ ...prev, saving: true }));
    const { success, message } = await System.updateDefaultSystemPrompt(next);
    if (!success) {
      setForm((prev) => ({ ...prev, saving: false }));
      showToast(
        serverErrorMessage(
          message,
          t,
          "admin-pages.default-prompt.save-failed"
        ),
        "error"
      );
      return;
    }
    // An empty prompt, or the default text itself, means "use the default".
    const restored = !next || next === saneDefault;
    const value = restored ? saneDefault : next;
    setForm((prev) => ({ ...prev, value, saved: value, saving: false }));
    showToast(
      t(
        restored
          ? "admin-pages.default-prompt.restored"
          : "admin-pages.default-prompt.saved"
      ),
      "success"
    );
    refocusEditor();
  };

  const handleReset = async () => {
    setResetting(true);
    const { success, message } = await System.updateDefaultSystemPrompt("");
    setResetting(false);
    setConfirmReset(false);
    if (!success) {
      showToast(
        serverErrorMessage(
          message,
          t,
          "admin-pages.default-prompt.save-failed"
        ),
        "error"
      );
      return;
    }
    setForm((prev) => ({ ...prev, value: saneDefault, saved: saneDefault }));
    showToast(t("admin-pages.default-prompt.restored"), "success");
  };

  const shownVariables = variables.slice(0, 3);
  const hiddenCount = variables.length - shownVariables.length;

  return (
    <div className="w-screen h-screen overflow-hidden bg-zinc-950 light:bg-slate-50 flex">
      <SettingsSidebar />
      <main className="relative md:ml-[2px] md:mr-[16px] md:my-[16px] md:rounded-[16px] bg-zinc-900 light:bg-white w-full h-full md:h-[calc(100%-32px)] overflow-y-auto p-4 md:p-0">
        <div className="flex flex-col w-full px-1 md:pl-6 md:pr-[50px] md:py-6 py-16">
          <div className="w-full flex flex-col gap-y-1 pb-6 border-white/10 border-b-2">
            <h1
              tabIndex={-1}
              className="text-lg leading-6 font-bold text-theme-text-primary"
            >
              {t("admin-pages.default-prompt.title")}
            </h1>
            <p className="text-xs leading-[18px] text-theme-text-secondary">
              {t("admin-pages.default-prompt.description")}
            </p>
          </div>
          {form.loading ? (
            <div role="status" className="mt-8 flex flex-col gap-y-4">
              <span className="sr-only">{t("common.loading")}</span>
              <Skeleton.default
                height={20}
                width={160}
                highlightColor="var(--theme-bg-primary)"
                baseColor="var(--theme-bg-secondary)"
              />
              <Skeleton.default
                height={120}
                width="100%"
                highlightColor="var(--theme-bg-primary)"
                baseColor="var(--theme-bg-secondary)"
                className="rounded-lg"
              />
              <Skeleton.default
                height={36}
                width={140}
                highlightColor="var(--theme-bg-primary)"
                baseColor="var(--theme-bg-secondary)"
              />
            </div>
          ) : form.loadError ? (
            <div
              role="alert"
              className="mt-8 flex flex-col items-start gap-y-3 text-sm text-red-400 light:text-red-700"
            >
              <p>{t("admin-pages.default-prompt.load-failed")}</p>
              <button
                type="button"
                onClick={loadPrompt}
                className={SECONDARY_BUTTON}
              >
                {t("provider-fields.retry")}
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-6 flex flex-col gap-y-3 max-w-[800px]"
            >
              <label
                htmlFor={textareaId}
                className="text-base font-bold text-white"
              >
                {t("admin-pages.default-prompt.label")}
              </label>
              <p id={helpId} className="text-xs text-theme-text-secondary">
                {t("admin-pages.default-prompt.help")}
              </p>
              {variables.length > 0 && (
                <p
                  id={variablesId}
                  className="text-xs text-theme-text-secondary"
                >
                  <Trans
                    i18nKey="admin-pages.default-prompt.variables-help"
                    components={{
                      anchor: (
                        <Link
                          to={paths.settings.systemPromptVariables()}
                          className={LINK}
                        />
                      ),
                    }}
                  />{" "}
                  {shownVariables.map((variable, i) => (
                    <Fragment key={variable.key}>
                      {i > 0 && ", "}
                      <code className="bg-sky-400/20 px-1 py-0.5 rounded font-mono">
                        {`{${variable.key}}`}
                      </code>
                    </Fragment>
                  ))}
                  {hiddenCount > 0 && (
                    <>
                      {" "}
                      <Link
                        to={paths.settings.systemPromptVariables()}
                        className={LINK}
                      >
                        {t("admin-pages.default-prompt.more-variables", {
                          count: hiddenCount,
                        })}
                      </Link>
                    </>
                  )}
                </p>
              )}
              <textarea
                ref={textareaRef}
                id={textareaId}
                aria-describedby={
                  variables.length > 0 ? `${helpId} ${variablesId}` : helpId
                }
                value={form.value}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, value: e.target.value }))
                }
                placeholder={t("admin-pages.default-prompt.placeholder")}
                rows={10}
                className="w-full min-h-[200px] resize-y rounded-lg border border-zinc-500 light:border-slate-500 bg-theme-settings-input-bg text-white placeholder:text-theme-settings-input-placeholder text-base md:text-sm p-2.5"
              />
              <div className="flex flex-wrap items-center gap-3">
                <CTAButton
                  type="submit"
                  busy={form.saving}
                  disabled={!isDirty && !form.saving}
                  className="mr-0"
                >
                  {form.saving ? t("common.saving") : t("common.save")}
                </CTAButton>
                <button
                  type="button"
                  onClick={() => !isDefault && setConfirmReset(true)}
                  aria-disabled={isDefault || undefined}
                  className={SECONDARY_BUTTON}
                >
                  {t("admin-pages.default-prompt.restore")}
                </button>
              </div>
            </form>
          )}
        </div>
      </main>
      <ConfirmModal
        isOpen={confirmReset}
        title={t("admin-pages.default-prompt.restore-title")}
        confirmLabel={t("admin-pages.default-prompt.restore-confirm")}
        busy={resetting}
        onConfirm={handleReset}
        onCancel={() => setConfirmReset(false)}
      >
        <p>{t("admin-pages.default-prompt.restore-body")}</p>
      </ConfirmModal>
    </div>
  );
}
