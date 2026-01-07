import { Input } from "@/components/ui/input";

interface FormInputProps {
  label?: string;
  placeholder: string;
}

const FormInput = ({ label = "", placeholder }: FormInputProps) => {
  return <Input placeholder={placeholder} />;
};

export default FormInput;
