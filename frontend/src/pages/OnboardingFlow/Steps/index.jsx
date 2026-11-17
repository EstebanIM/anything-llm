import LLMPreference from "./LLMPreference";
import UserSetup from "./UserSetup";
import DataHandling from "./DataHandling";

/** Setup steps by route segment, in the order of ONBOARDING_STEPS. */
const OnboardingSteps = {
  "llm-preference": LLMPreference,
  "user-setup": UserSetup,
  "data-handling": DataHandling,
};

export default OnboardingSteps;
