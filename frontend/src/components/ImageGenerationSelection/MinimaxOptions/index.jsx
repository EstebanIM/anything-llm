import { useId, useState } from "react";
import { useTranslation } from "react-i18next";
import ImageModelSelection from "../ImageModelSelection";
import ImageDimensionSelection, {
  initialDimension,
} from "../ImageDimensionSelection";
import {
  AdvancedSection,
  FIELD_COL,
  FIELD_LABEL,
  FIELD_ROW,
  FIELD_SELECT,
  InfoTip,
  SECRET_MASK,
  SecretInput,
} from "@/components/ProviderFields";

const RESOLUTIONS = ["1K", "2K", "4K"];

export default function MinimaxImageOptions({ settings }) {
  const { t } = useTranslation();
  const id = useId();
  const [aspectRatio, setAspectRatio] = useState(
    initialDimension("minimax-imggen", settings)
  );
  // MiniMax rejects the Auto aspect ratio without prompt enhancement, so the
  // server always enables it there. The locked select has no name, so the
  // saved preference is left untouched for when a fixed ratio is picked.
  const enhancementRequired = aspectRatio === "auto";

  return (
    <div className="w-full flex flex-col">
      <div className={`${FIELD_ROW} mt-1.5`}>
        <div className={FIELD_COL}>
          <label htmlFor={`${id}-api-key`} className={FIELD_LABEL}>
            {t("provider-fields.api-key")}
          </label>
          <SecretInput
            id={`${id}-api-key`}
            name="ImageGenerationMinimaxApiKey"
            defaultValue={
              settings?.ImageGenerationMinimaxApiKey ? SECRET_MASK : ""
            }
            required={true}
          />
        </div>
        <ImageModelSelection provider="minimax-imggen" settings={settings} />
        <ImageDimensionSelection
          provider="minimax-imggen"
          settings={settings}
          onChange={setAspectRatio}
        />
      </div>
      <AdvancedSection className="mt-4">
        <div className={`${FIELD_ROW} mt-4`}>
          <div className={FIELD_COL}>
            <label htmlFor={`${id}-resolution`} className={FIELD_LABEL}>
              {t("provider-forms.image-generation.minimax.resolution")}
            </label>
            <select
              id={`${id}-resolution`}
              name="ImageGenerationMinimaxResolution"
              className={FIELD_SELECT}
              defaultValue={settings?.ImageGenerationMinimaxResolution}
            >
              {RESOLUTIONS.map((resolution) => (
                <option key={resolution} value={resolution}>
                  {resolution}
                </option>
              ))}
            </select>
          </div>
          <div className={FIELD_COL}>
            <div className="flex items-center gap-x-1 mb-3">
              <label
                htmlFor={`${id}-enhancement`}
                className="text-white text-sm font-semibold"
              >
                {t("provider-forms.image-generation.minimax.enhancement")}
              </label>
              <InfoTip
                label={t("provider-forms.image-generation.minimax.enhancement")}
              >
                <p>
                  {t(
                    "provider-forms.image-generation.minimax.enhancement-help"
                  )}
                </p>
                <p className="mt-2">
                  {t(
                    "provider-forms.image-generation.minimax.enhancement-required"
                  )}
                </p>
              </InfoTip>
            </div>
            {enhancementRequired ? (
              <select
                key="locked"
                id={`${id}-enhancement`}
                className={FIELD_SELECT}
                value="true"
                disabled={true}
              >
                <option value="true">
                  {t("provider-forms.image-generation.minimax.enabled-auto")}
                </option>
              </select>
            ) : (
              <select
                key="free"
                id={`${id}-enhancement`}
                name="ImageGenerationMinimaxPromptEnhancement"
                className={FIELD_SELECT}
                defaultValue={settings?.ImageGenerationMinimaxPromptEnhancement}
              >
                <option value="false">
                  {t("provider-forms.image-generation.minimax.disabled")}
                </option>
                <option value="true">
                  {t("provider-forms.image-generation.minimax.enabled")}
                </option>
              </select>
            )}
          </div>
        </div>
      </AdvancedSection>
    </div>
  );
}
