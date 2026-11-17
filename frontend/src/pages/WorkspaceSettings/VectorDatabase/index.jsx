import { useState } from "react";
import { useTranslation } from "react-i18next";
import Workspace from "@/models/workspace";
import showToast from "@/utils/toast";
import { serverErrorMessage } from "@/utils/serverErrors";
import { castToType } from "@/utils/types";
import AutosaveForm from "@/components/AutosaveForm";
import VectorDBIdentifier from "./VectorDBIdentifier";
import MaxContextSnippets from "./MaxContextSnippets";
import DocumentSimilarityThreshold from "./DocumentSimilarityThreshold";
import ResetDatabase from "./ResetDatabase";
import VectorCount from "./VectorCount";
import VectorSearchMode from "./VectorSearchMode";

export default function VectorDatabase({ workspace }) {
  const { t } = useTranslation();
  // Bumped after a reset so the vector count is fetched again.
  const [countVersion, setCountVersion] = useState(0);

  const handleUpdate = async (formEl) => {
    const data = {};
    const form = new FormData(formEl);
    for (var [key, value] of form.entries()) data[key] = castToType(key, value);
    const { workspace: updatedWorkspace, message } = await Workspace.update(
      workspace.slug,
      data
    );
    if (!updatedWorkspace)
      showToast(
        serverErrorMessage(message, t, "provider-pages.toast.failed"),
        "error",
        {
          clear: true,
        }
      );
    return !!updatedWorkspace;
  };

  if (!workspace) return null;
  return (
    <div className="w-full relative">
      <AutosaveForm
        onSave={handleUpdate}
        className="w-full xl:w-1/2 flex flex-col gap-y-[32px]"
      >
        <div className="flex flex-wrap items-start gap-x-10 gap-y-6">
          <VectorDBIdentifier workspace={workspace} />
          <VectorCount reload={countVersion} workspace={workspace} />
        </div>
        <VectorSearchMode workspace={workspace} />
        <MaxContextSnippets workspace={workspace} />
        <DocumentSimilarityThreshold workspace={workspace} />
        <ResetDatabase
          workspace={workspace}
          onReset={() => setCountVersion((v) => v + 1)}
        />
      </AutosaveForm>
    </div>
  );
}
