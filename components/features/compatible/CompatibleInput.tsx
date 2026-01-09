"use client";

import { cn } from "@/lib/utils";
import { usePreferencesStore } from "@/store/usePreferencesStore";

const OPTIONS = [
  "Adventurous",
  "Romantic",
  "Dominant",
  "Submissive",
  "Discreet meets",
  "Online only",
];

const CompatibleInput = () => {
  const { intoPreferences, setIntoPreferences } = usePreferencesStore();

  const cardClass = (option: string) =>
    cn(
      "px-4 py-3 rounded-lg text-sm font-semibold cursor-pointer transition-all duration-300",
      "bg-white-card text-center w-full",
      intoPreferences === option
        ? "shadow-brand-color text-brand-color"
        : "shadow-light-brand-color text-gray-700 hover:shadow-brand-color/50"
    );

  return (
    <div className="w-full flex flex-col items-center gap-3">
      {/* 2 columns grid */}
      <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
        {OPTIONS.map((option) => (
          <button
            key={option}
            onClick={() => setIntoPreferences(option)}
            className={cardClass(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CompatibleInput;
