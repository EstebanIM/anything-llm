import React, { useState, useEffect, useId, useRef } from "react";
import { flushSync } from "react-dom";
import Sidebar from "@/components/SettingsSidebar";
import System from "@/models/system";
import showToast from "@/utils/toast";
import { useModal } from "@/hooks/useModal";
import CTAButton from "@/components/lib/CTAButton";
import { useTranslation } from "react-i18next";
import useCustomAppName from "@/hooks/useCustomAppName";
import PreLoader from "@/components/Preloader";
import ChangeWarningModal from "@/components/ChangeWarning";
import Modal from "@/components/lib/Modal";
import ProviderOption from "@/components/lib/ProviderSearchMenu/ProviderOption";

import LanceDbLogo from "@/media/vectordbs/lancedb.png";
import ChromaLogo from "@/media/vectordbs/chroma.png";
import PineconeLogo from "@/media/vectordbs/pinecone.png";
import WeaviateLogo from "@/media/vectordbs/weaviate.png";
import QDrantLogo from "@/media/vectordbs/qdrant.png";
import MilvusLogo from "@/media/vectordbs/milvus.png";
import ZillizLogo from "@/media/vectordbs/zilliz.png";
import AstraDBLogo from "@/media/vectordbs/astraDB.png";
import PGVectorLogo from "@/media/vectordbs/pgvector.png";

import LanceDBOptions from "@/components/VectorDBSelection/LanceDBOptions";
import ChromaDBOptions from "@/components/VectorDBSelection/ChromaDBOptions";
import ChromaCloudOptions from "@/components/VectorDBSelection/ChromaCloudOptions";
import PineconeDBOptions from "@/components/VectorDBSelection/PineconeDBOptions";
import WeaviateDBOptions from "@/components/VectorDBSelection/WeaviateDBOptions";
import QDrantDBOptions from "@/components/VectorDBSelection/QDrantDBOptions";
import MilvusDBOptions from "@/components/VectorDBSelection/MilvusDBOptions";
import ZillizCloudOptions from "@/components/VectorDBSelection/ZillizCloudOptions";
import AstraDBOptions from "@/components/VectorDBSelection/AstraDBOptions";
import PGVectorOptions from "@/components/VectorDBSelection/PGVectorOptions";
import ProviderSearchMenu from "@/components/lib/ProviderSearchMenu";
export default function GeneralVectorDatabase() {
  const { brandName } = useCustomAppName();
  const VECTOR_DBS = [
    {
      name: "LanceDB",
      value: "lancedb",
      descriptionKey: "provider-pages.descriptions.vector.lancedb",
      logo: LanceDbLogo,
      options: (_) => <LanceDBOptions />,
      description: `100% local vector DB that runs on the same instance as ${brandName}.`,
    },
    {
      name: "PGVector",
      value: "pgvector",
      descriptionKey: "provider-pages.descriptions.vector.pgvector",
      logo: PGVectorLogo,
      options: (settings) => <PGVectorOptions settings={settings} />,
      description: "Vector search powered by PostgreSQL.",
    },
    {
      name: "Chroma",
      value: "chroma",
      descriptionKey: "provider-pages.descriptions.vector.chroma",
      logo: ChromaLogo,
      options: (settings) => <ChromaDBOptions settings={settings} />,
      description:
        "Open source vector database you can host yourself or on the cloud.",
    },
    {
      name: "Chroma Cloud",
      value: "chromacloud",
      descriptionKey: "provider-pages.descriptions.vector.chromacloud",
      logo: ChromaLogo,
      options: (settings) => <ChromaCloudOptions settings={settings} />,
      description:
        "Fully managed Chroma cloud service with enterprise features and support.",
    },
    {
      name: "Pinecone",
      value: "pinecone",
      descriptionKey: "provider-pages.descriptions.vector.pinecone",
      logo: PineconeLogo,
      options: (settings) => <PineconeDBOptions settings={settings} />,
      description: "100% cloud-based vector database for enterprise use cases.",
    },
    {
      name: "Zilliz Cloud",
      value: "zilliz",
      descriptionKey: "provider-pages.descriptions.vector.zilliz",
      logo: ZillizLogo,
      options: (settings) => <ZillizCloudOptions settings={settings} />,
      description:
        "Cloud hosted vector database built for enterprise with SOC 2 compliance.",
    },
    {
      name: "QDrant",
      value: "qdrant",
      descriptionKey: "provider-pages.descriptions.vector.qdrant",
      logo: QDrantLogo,
      options: (settings) => <QDrantDBOptions settings={settings} />,
      description: "Open source local and distributed cloud vector database.",
    },
    {
      name: "Weaviate",
      value: "weaviate",
      descriptionKey: "provider-pages.descriptions.vector.weaviate",
      logo: WeaviateLogo,
      options: (settings) => <WeaviateDBOptions settings={settings} />,
      description:
        "Open source local and cloud hosted multi-modal vector database.",
    },
    {
      name: "Milvus",
      value: "milvus",
      descriptionKey: "provider-pages.descriptions.vector.milvus",
      logo: MilvusLogo,
      options: (settings) => <MilvusDBOptions settings={settings} />,
      description: "Open-source, highly scalable, and blazing fast.",
    },
    {
      name: "AstraDB",
      value: "astra",
      descriptionKey: "provider-pages.descriptions.vector.astra",
      logo: AstraDBLogo,
      options: (settings) => <AstraDBOptions settings={settings} />,
      description: "Vector Search for Real-world GenAI.",
    },
  ];
  const [saving, setSaving] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const [hasEmbeddings, setHasEmbeddings] = useState(false);
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedVDB, setSelectedVDB] = useState(null);
  const { isOpen, openModal, closeModal } = useModal();
  const headingRef = useRef(null);
  const providerHeadingId = useId();
  const saveButtonId = useId();
  const { t } = useTranslation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (saving) return;
    if (selectedVDB !== settings?.VectorDB && hasChanges && hasEmbeddings) {
      openModal();
    } else {
      await handleSaveSettings();
    }
  };

  const handleSaveSettings = async () => {
    setSaving(true);
    const form = document.getElementById("vectordb-form");
    const settingsData = {};
    const formData = new FormData(form);
    settingsData.VectorDB = selectedVDB;
    for (const [key, value] of formData.entries()) settingsData[key] = value;

    const { error } = await System.updateSystem(settingsData);
    if (error) {
      showToast(t("provider-pages.toast.failed", { error }), "error");
      flushSync(() => {
        setSaving(false);
        closeModal();
      });
      restoreFocusAfterSave(false);
      return;
    }

    showToast(t("provider-pages.toast.saved.vector"), "success");
    const freshSettings = await System.keys();
    flushSync(() => {
      if (freshSettings) applySettings(freshSettings);
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

  const updateVectorChoice = (selection) => {
    if (selection === selectedVDB) return;
    setSelectedVDB(selection);
    setHasChanges(true);
  };

  function applySettings(_settings) {
    setSettings(_settings);
    setHasEmbeddings(_settings?.HasExistingEmbeddings || false);
  }

  async function fetchKeys() {
    setLoading(true);
    const _settings = await System.keys();
    applySettings(_settings);
    setSelectedVDB(_settings?.VectorDB || "lancedb");
    setLoading(false);
  }

  useEffect(() => {
    fetchKeys();
  }, []);

  const selectedVDBObject =
    VECTOR_DBS.find((vdb) => vdb.value === selectedVDB) ?? VECTOR_DBS[0];

  return (
    <div className="w-screen h-screen overflow-hidden bg-zinc-950 light:bg-slate-50 flex">
      <Sidebar />
      <main className="relative md:ml-[2px] md:mr-[16px] md:my-[16px] md:rounded-[16px] bg-zinc-900 light:bg-white w-full h-full md:h-[calc(100%-32px)] overflow-y-auto p-4 md:p-0">
        <div className="flex flex-col w-full px-1 md:pl-6 md:pr-[50px] py-16 md:py-6">
          <div className="w-full flex flex-col gap-y-1 pb-6 border-white light:border-theme-sidebar-border border-b-2 border-opacity-10">
            <h1
              ref={headingRef}
              tabIndex={-1}
              className="text-lg leading-6 font-bold text-white"
            >
              {t("vector.title")}
            </h1>
            <p className="text-xs leading-[18px] text-white text-opacity-60">
              {t("vector.description")}
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
              <CTAButton type="button" onClick={fetchKeys} className="mr-0">
                {t("provider-fields.retry")}
              </CTAButton>
            </div>
          ) : (
            <form
              id="vectordb-form"
              onSubmit={handleSubmit}
              className="flex flex-col w-full"
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
              <h2
                id={providerHeadingId}
                className="text-base font-bold text-white mt-6 mb-4"
              >
                {t("vector.provider.title")}
              </h2>
              <div className="relative">
                <ProviderSearchMenu
                  items={VECTOR_DBS}
                  labelledBy={providerHeadingId}
                  selected={selectedVDBObject}
                  placeholder={t("provider-pages.search.vector")}
                  renderItem={(vdb, close) => (
                    <ProviderOption
                      name={vdb.name}
                      value={vdb.value}
                      image={vdb.logo}
                      description={vdb.description}
                      descriptionKey={vdb.descriptionKey}
                      checked={selectedVDB === vdb.value}
                      onClick={() => {
                        updateVectorChoice(vdb.value);
                        close();
                      }}
                    />
                  )}
                />
              </div>
              <div
                onChange={() => setHasChanges(true)}
                className="mt-4 flex flex-col gap-y-1"
              >
                {selectedVDB &&
                  VECTOR_DBS.find((vdb) => vdb.value === selectedVDB)?.options(
                    settings
                  )}
              </div>
            </form>
          )}
        </div>
      </main>
      <Modal isOpen={isOpen} onClose={closeModal} size="lg">
        <ChangeWarningModal
          warningText={t("provider-pages.change-warning.vector")}
          confirmLabel={t("provider-pages.change-warning.confirm-clear")}
          busy={saving}
          onClose={closeModal}
          onConfirm={handleSaveSettings}
        />
      </Modal>
    </div>
  );
}
