import RelationshipInput from "@/components/features/relationship/RelationshipInput";
import { RelationshipProceed } from "@/components/features/relationship/RelationshipProceed";
import FormHelperText from "@/components/shared/FormHelperText";
import FormInputSection from "@/components/shared/FormInputSection";
import lockIcon from "@/public/images/lockIcon.svg";

const RelationshipPage = () => {
  return (
    <div className="w-full mb-3">
      <FormInputSection
        heading="Your  relationship Status"
        subheading="what are you looking for, you can change this later"
      >
        <RelationshipInput />
      </FormInputSection>
      <div className="w-full flex-col flex-center gap-5 mt-6">
        <FormHelperText
          image={lockIcon}
          alt="Lock Icon"
          text="Only Visible to matches"
        />
        <RelationshipProceed />
      </div>
    </div>
  );
};

export default RelationshipPage;
