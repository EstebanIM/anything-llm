import React, { useEffect, useId, useRef, useState } from "react";
import { flushSync } from "react-dom";
import Sidebar from "@/components/SettingsSidebar";
import PreLoader from "@/components/Preloader";
import CTAButton from "@/components/lib/CTAButton";
import Admin from "@/models/admin";
import showToast from "@/utils/toast";
import { useTranslation } from "react-i18next";
import { useModal } from "@/hooks/useModal";
import Modal from "@/components/lib/Modal";
import ChangeWarningModal from "@/components/ChangeWarning";
import {
  FIELD_ERROR,
  FIELD_HELP,
  FIELD_INPUT,
  FIELD_LABEL,
} from "@/components/ProviderFields";

const DEFAULT_CHUNK_SIZE = 1000;
const DEFAULT_CHUNK_OVERLAP = 20;

function isNullOrNaN(value) {
  if (value === null) return true;
  return isNaN(value);
}

function numberOr(value, fallback) {
  return isNullOrNaN(value) ? fallback : Number(value);
}

/** Locale-aware number ("10.000" in Spanish, not "10,000"); i18next codes may use "_". */
function formatNumber(value, language) {
  try {
    return new Intl.NumberFormat(language?.replace(/_/g, "-")).format(value);
  } catch {
    return String(value);
  }
}

export default function EmbeddingTextSplitterPreference() {
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const [overlapError, setOverlapError] = useState(false);
  const { isOpen, openModal, closeModal } = useModal();
  const { t, i18n } = useTranslation();
  const headingRef = useRef(null);
  const overlapRef = useRef(null);
  const saveButtonId = useId();
  const sizeId = useId();
  const sizeHelpId = useId();
  const sizeLimitId = useId();
  const overlapId = useId();
  const overlapHelpId = useId();
  const overlapErrorId = useId();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (saving) return;
    const form = new FormData(e.target);

    if (
      Number(form.get("text_splitter_chunk_overlap")) >=
      Number(form.get("text_splitter_chunk_size"))
    ) {
      setOverlapError(true);
      overlapRef.current?.focus();
      return;
    }

    openModal();
  };

  const handleSaveSettings = async () => {
    setSaving(true);
    const form = new FormData(
      document.getElementById("text-splitter-chunking-form")
    );
    const updates = {
      text_splitter_chunk_size: numberOr(
        form.get("text_splitter_chunk_size"),
        DEFAULT_CHUNK_SIZE
      ),
      text_splitter_chunk_overlap: numberOr(
        form.get("text_splitter_chunk_overlap"),
        DEFAULT_CHUNK_OVERLAP
      ),
    };

    // Resolves with { success: false } instead of throwing when the save fails.
    const { success, error } =
      (await Admin.updateSystemPreferences(updates)) ?? {};
    if (!success) {
      showToast(
        error
          ? t("provider-pages.toast.failed", { error })
          : t("provider-pages.toast.failed-generic"),
        "error"
      );
      flushSync(() => {
        setSaving(false);
        closeModal();
      });
      restoreFocusAfterSave(false);
      return;
    }

    showToast(t("provider-pages.toast.saved.text-splitter"), "success");
    flushSync(() => {
      setSettings((prev) => ({ ...prev, ...updates }));
      setHasChanges(false);
      setSaving(false);
      closeModal();
    });
    restoreFocusAfterSave(true);
  };

  // Saving disables the button and success removes it, which drops focus on <body>.
  function restoreFocusAfterSave(saved) {
    if (document.activeElement && document.activeElement !== document.body)
      return;
    if (saved) headingRef.current?.focus();
    else document.getElementById(saveButtonId)?.focus();
  }

  function handleFormChange() {
    setHasChanges(true);
    setOverlapError(false);
  }

  async function fetchSettings() {
    setLoading(true);
    const _settings = (
      await Admin.systemPreferencesByFields([
        "text_splitter_chunk_size",
        "text_splitter_chunk_overlap",
        "max_embed_chunk_size",
      ])
    )?.settings;
    setSettings(_settings ?? null);
    setLoading(false);
  }

  useEffect(() => {
    fetchSettings();
  }, []);

  const maxChunkSize = settings?.max_embed_chunk_size || DEFAULT_CHUNK_SIZE;

  return (
    <div className="w-screen h-screen overflow-hidden bg-zinc-950 light:bg-slate-50 flex">
      <Sidebar />
      <main className="relative md:ml-[2px] md:mr-[16px] md:my-[16px] md:rounded-[16px] bg-zinc-900 light:bg-white w-full h-full md:h-[calc(100%-32px)] overflow-y-auto p-4 md:p-0">
        <div className="flex flex-col w-full px-1 md:pl-6 md:pr-[50px] md:py-6 py-16">
          <div className="w-full flex flex-col gap-y-1 pb-4 border-white light:border-theme-sidebar-border border-b-2 border-opacity-10">
            <h1
              ref={headingRef}
              tabIndex={-1}
              className="text-lg leading-6 font-bold text-white"
            >
              {t("text.title")}
            </h1>
            <p className="text-xs leading-[18px] text-white text-opacity-60">
              {t("text.desc-start")} <br />
              {t("text.desc-end")}
            </p>
          </div>
          {loading ? (
            <div className="w-full flex justify-center py-16">
              <PreLoader />
            </div>
          ) : !settings ? (
            <div className="flex flex-col items-start gap-y-4 py-10">
              <p role="alert" className="text-sm text-white">
                {t("provider-pages.load-error")}
              </p>
              <CTAButton type="button" onClick={fetchSettings} className="mr-0">
                {t("provider-fields.retry")}
              </CTAButton>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              onChange={handleFormChange}
              className="flex flex-col w-full"
              id="text-splitter-chunking-form"
            >
              <div className="w-full justify-end flex">
                {hasChanges && (
                  <CTAButton
                    id={saveButtonId}
                    busy={saving}
                    className="mt-3 mr-0 -mb-14 z-10"
                  >
                    {saving ? t("common.saving") : t("common.save")}
                  </CTAButton>
                )}
              </div>

              <div className="flex flex-col w-full max-w-[300px] mt-8">
                <label htmlFor={sizeId} className={FIELD_LABEL}>
                  {t("text.size.title")}
                </label>
                <p
                  id={sizeHelpId}
                  className="-mt-1 mb-3 text-xs text-theme-text-secondary"
                >
                  {t("text.size.description")}
                </p>
                <input
                  id={sizeId}
                  type="number"
                  name="text_splitter_chunk_size"
                  min={1}
                  max={maxChunkSize}
                  onWheel={(e) => e?.currentTarget?.blur()}
                  className={FIELD_INPUT}
                  placeholder={t(
                    "provider-pages.text-splitter.size-placeholder"
                  )}
                  aria-describedby={`${sizeHelpId} ${sizeLimitId}`}
                  defaultValue={numberOr(
                    settings?.text_splitter_chunk_size,
                    DEFAULT_CHUNK_SIZE
                  )}
                  required={true}
                  autoComplete="off"
                />
                <p id={sizeLimitId} className={FIELD_HELP}>
                  {t("text.size.recommend")}{" "}
                  {formatNumber(maxChunkSize, i18n.language)}.
                </p>
              </div>

              <div className="flex flex-col w-full max-w-[300px] mt-8">
                <label htmlFor={overlapId} className={FIELD_LABEL}>
                  {t("text.overlap.title")}
                </label>
                <p
                  id={overlapHelpId}
                  className="-mt-1 mb-3 text-xs text-theme-text-secondary"
                >
                  {t("text.overlap.description")}
                </p>
                <input
                  ref={overlapRef}
                  id={overlapId}
                  type="number"
                  name="text_splitter_chunk_overlap"
                  min={0}
                  onWheel={(e) => e?.currentTarget?.blur()}
                  className={FIELD_INPUT}
                  placeholder={t(
                    "provider-pages.text-splitter.overlap-placeholder"
                  )}
                  aria-invalid={overlapError || undefined}
                  aria-describedby={
                    overlapError
                      ? `${overlapHelpId} ${overlapErrorId}`
                      : overlapHelpId
                  }
                  defaultValue={numberOr(
                    settings?.text_splitter_chunk_overlap,
                    DEFAULT_CHUNK_OVERLAP
                  )}
                  required={true}
                  autoComplete="off"
                />
                {overlapError && (
                  <p id={overlapErrorId} role="alert" className={FIELD_ERROR}>
                    {t("provider-pages.text-splitter.overlap-error")}
                  </p>
                )}
              </div>
            </form>
          )}
        </div>
      </main>

      <Modal isOpen={isOpen} onClose={closeModal} size="lg">
        <ChangeWarningModal
          warningText={t("provider-pages.change-warning.text-splitter")}
          confirmLabel={t(
            "provider-pages.change-warning.confirm-text-splitter"
          )}
          busy={saving}
          onClose={closeModal}
          onConfirm={handleSaveSettings}
        />
      </Modal>
    </div>
  );
}
