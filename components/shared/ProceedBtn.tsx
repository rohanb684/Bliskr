interface ProceedBtnProps {
  handleProceed: () => void;
}

const ProceedBtn = ({ handleProceed }: ProceedBtnProps) => {
  return (
    <button
      type="button"
      className="text-center mt-8 text-lg sm:text-lg font-semibold bg-proceed-btn text-white px-4 w-[60%] max-w-sm py-2 sm:py-3 rounded-md hover:opacity-90 cursor-pointer"
    >
      Proceed
    </button>
  );
};

export default ProceedBtn;
