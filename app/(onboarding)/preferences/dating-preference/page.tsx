import DatingInput from "@/components/features/dating/DatingInput";
import DatingProceed from "@/components/features/dating/DatingProceed";
import FormHelperText from "@/components/shared/FormHelperText";
import FormInputSection from "@/components/shared/FormInputSection";
import Bulb from "@/public/images/bulbIcon.svg";
const DatePage = () => {
  return (
    <div className="pb-4">
      <FormInputSection
        heading="Who do you want to date?"
        subheading="what are you looking for, you can change this later"
      >
        <DatingInput />
      </FormInputSection>
      <div className="w-full flex-center flex-col mt-6">
        <FormHelperText
          text="You will see profiles based on this"
          image={Bulb}
          alt="Bulb Image"
        />
        <DatingProceed />
      </div>
    </div>
  );
};

export default DatePage;
