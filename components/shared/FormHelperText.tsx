import Image, { StaticImageData } from "next/image";

interface FormHelperTextProps {
  image: StaticImageData;
  text: string;
  alt: string;
}
const FormHelperText = ({ image, text, alt }: FormHelperTextProps) => {
  return (
    <div className="flex items-center gap-1">
      <Image
        src={image}
        width={20}
        height={20}
        className="w-6 sm:w-7"
        alt={alt}
      />
      <h4 className="text-[12px] sm:text-[13px] font-semibold">{text}</h4>
    </div>
  );
};

export default FormHelperText;
