import AboutProceed from "@/components/features/about/AboutProceed";
import FewMoreInput from "@/components/features/fewmore/FewMoreInput";
import FormHelperText from "@/components/shared/FormHelperText";
import FormInputSection from "@/components/shared/FormInputSection";
import SkipBtn from "@/components/shared/SkipBtn";
import bulb from "@/public/images/bulbIcon.svg";

const FewMoreDetailsPage = () => {
  return (
    <div className="w-full pb-4">
      <FormInputSection
        heading="A few more details"
        subheading="This helps others find their type"
      >
        <FewMoreInput />
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
        <SkipBtn href="/preferences/children" />
      </div>
    </div>
  );
};

export default FewMoreDetailsPage;
