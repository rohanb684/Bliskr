"use client";

import { cn } from "@/lib/utils";

interface OptionCardsProps {
  options: string[];
  selectedOption: string;
  onSelect: (option: string) => void;
}

const OptionCards = ({
  options,
  selectedOption,
  onSelect,
}: OptionCardsProps) => {
  // Move "Prefer not to say" to the end if it exists
  const sortedOptions = [...options].sort((a, b) => {
    if (a.toLowerCase().includes("prefer not to say")) return 1;
    if (b.toLowerCase().includes("prefer not to say")) return -1;
    return 0;
  });

  return (
    <div className="w-full flex flex-wrap justify-center gap-3">
      {sortedOptions.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onSelect(option)}
          className={cn(
            "px-4 py-3 rounded-lg text-sm font-semibold cursor-pointer transition-all duration-300",
            "bg-white-card min-w-[90px]",
            selectedOption === option
              ? "shadow-brand-color text-brand-color"
              : "shadow-light-brand-color text-gray-700 hover:shadow-brand-color/50"
          )}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default OptionCards;
