import { ChevronRight } from "lucide-react";

interface CircularProceedBtnProps {
  handleProceed: () => void;
}

const CircularProceedBtn = ({ handleProceed }: CircularProceedBtnProps) => {
  return (
    <button
      type="button"
      onClick={handleProceed}
      className="w-8 h-8 flex-center cursor-pointer bg-brand-color text-white rounded-full"
    >
      <ChevronRight strokeWidth={3} />
    </button>
  );
};

export default CircularProceedBtn;
