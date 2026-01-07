interface FormInputSectionProps {
  heading: string;
  subheading: string;
  optionalsubHeading?: string;
  InputComponent: React.ComponentType;
}

const FormInputSection = ({
  heading,
  subheading,
  optionalsubHeading = "",
  InputComponent,
}: FormInputSectionProps) => {
  return (
    <main className="w-full">
      <h1 className="text-[#0D0D0D] font-bold text-xl sm:text-2xl">
        {heading}
      </h1>
      <h3 className="text-[#333] font-normal text-[12px] sm:text-sm mb-5">
        {subheading} <span className="font-semibold">{optionalsubHeading}</span>
      </h3>

      <InputComponent />
    </main>
  );
};

export default FormInputSection;
