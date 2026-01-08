import AboutInput from "@/components/features/about/AboutInput";
import FormInputSection from "@/components/shared/FormInputSection";

const AboutPage = () => {
  return (
    <div className="w-full pb-4">
      <FormInputSection
        heading="Tell us about yourself"
        subheading="What makes you interesting?"
      >
        <AboutInput />
      </FormInputSection>
    </div>
  );
};

export default AboutPage;
