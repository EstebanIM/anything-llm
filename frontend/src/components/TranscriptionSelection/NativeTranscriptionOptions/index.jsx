import { useId, useState } from "react";
import { useTranslation } from "react-i18next";
import { Gauge } from "lucide-react";
import {
  FIELD_COL,
  FIELD_LABEL,
  FIELD_ROW,
  FIELD_SELECT,
} from "@/components/ProviderFields";

export default function NativeTranscriptionOptions({ settings }) {
  const { t } = useTranslation();
  const id = useId();
  const [model, setModel] = useState(settings?.WhisperModelPref);

  return (
    <div className="w-full flex flex-col gap-y-4">
      <LocalWarning model={model} />
      <div className={FIELD_ROW}>
        <div className={FIELD_COL}>
          <label htmlFor={`${id}-model`} className={FIELD_LABEL}>
            {t("common.selection")}
          </label>
          <select
            id={`${id}-model`}
            name="WhisperModelPref"
            defaultValue={model}
            onChange={(e) => setModel(e.target.value)}
            className={FIELD_SELECT}
          >
            {["Xenova/whisper-small", "Xenova/whisper-large"].map(
              (value, i) => {
                return (
                  <option key={i} value={value}>
                    {value}
                  </option>
                );
              }
            )}
          </select>
        </div>
      </div>
    </div>
  );
}

function LocalWarning({ model }) {
  switch (model) {
    case "Xenova/whisper-small":
      return <WhisperSmall />;
    case "Xenova/whisper-large":
      return <WhisperLarge />;
    default:
      return <WhisperSmall />;
  }
}

function WhisperSmall() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col md:flex-row md:items-center gap-x-2 text-white mb-4 bg-blue-800/30 w-fit rounded-lg px-4 py-2">
      <div className="gap-x-2 flex items-center">
        <Gauge
          strokeWidth={1.5}
          size={25}
          aria-hidden="true"
          className="shrink-0"
        />
        <p className="text-sm">
          {t("transcription.warn-start")}
          <br />
          {t("transcription.warn-recommend")}
          <br />
          <br />
          <i>{t("transcription.warn-end")} (250mb)</i>
        </p>
      </div>
    </div>
  );
}

function WhisperLarge() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col md:flex-row md:items-center gap-x-2 text-white mb-4 bg-blue-800/30 w-fit rounded-lg px-4 py-2">
      <div className="gap-x-2 flex items-center">
        <Gauge
          strokeWidth={1.5}
          size={25}
          aria-hidden="true"
          className="shrink-0"
        />
        <p className="text-sm">
          {t("transcription.warn-start")}
          <br />
          {t("transcription.warn-recommend")}
          <br />
          <br />
          <i>{t("transcription.warn-end")} (1.56GB)</i>
        </p>
      </div>
    </div>
  );
}
