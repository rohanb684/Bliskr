import CompatibleInput from "@/components/features/compatible/CompatibleInput";
import AboutProceed from "@/components/features/about/AboutProceed";
import FormHelperText from "@/components/shared/FormHelperText";
import FormInputSection from "@/components/shared/FormInputSection";
import SkipBtn from "@/components/shared/SkipBtn";
import VisibilityToggle from "@/components/shared/VisibilityToggle";
import bulb from "@/public/images/bulbIcon.svg";

const CompatibleMatchesPage = () => {
  return (
    <div className="w-full pb-4">
      <FormInputSection
        heading="What are you into?"
        subheading="Help us find compatible matches"
      >
        <CompatibleInput />
      </FormInputSection>

      <div className="w-full flex-center mt-4">
        <VisibilityToggle />
      </div>

      <div className="w-full flex justify-between items-center mt-3">
        <FormHelperText
          text="You can change this later"
          image={bulb}
          alt="Bulb Image"
        />
        <AboutProceed />
      </div>

      <div className="w-full flex-center mt-8 sm:mt-18">
        <SkipBtn href="/preferences/fantasies" />
      </div>
    </div>
  );
};

export default CompatibleMatchesPage;
