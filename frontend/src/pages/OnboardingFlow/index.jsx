import { Navigate, useParams } from "react-router-dom";
import useRedirectToHomeOnOnboardingComplete from "@/hooks/useOnboardingComplete";
import paths from "@/utils/paths";
import OnboardingSteps from "./Steps";
import OnboardingHome from "./Steps/Home";
import { OnboardingProvider } from "./Steps/OnboardingLayout";

export default function OnboardingFlow() {
  useRedirectToHomeOnOnboardingComplete();
  return (
    <OnboardingProvider>
      <OnboardingStep />
    </OnboardingProvider>
  );
}

function OnboardingStep() {
  const { step } = useParams();
  if (!step || step === "home") return <OnboardingHome />;

  const StepPage = OnboardingSteps[step];
  // Old or mistyped links (the survey step no longer exists) start over.
  if (!StepPage) return <Navigate to={paths.onboarding.home()} replace />;
  return <StepPage />;
}
