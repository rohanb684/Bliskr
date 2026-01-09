import AboutProceed from "@/components/features/about/AboutProceed";
import InterestInput from "@/components/features/interests/InterestInput";

import FormHelperText from "@/components/shared/FormHelperText";
import FormInputSection from "@/components/shared/FormInputSection";
import SkipBtn from "@/components/shared/SkipBtn";
import bulb from "@/public/images/bulbIcon.svg";

const InterestsPage = () => {
  return (
    <div className="w-full pb-4">
      <FormInputSection
        heading="Tell us about your interests"
        subheading="Add at least 5 things you enjoy"
      >
        <InterestInput />
      </FormInputSection>

      <div className="w-full flex justify-between items-center mt-3">
        <FormHelperText
          text="You can change this later"
          image={bulb}
          alt="Bulb Image"
        />

        <AboutProceed />
      </div>

      <div className="w-full flex-center mt-8 sm:mt-18">
        <SkipBtn href="/preferences/few-more-details" />
      </div>
    </div>
  );
};

export default InterestsPage;
